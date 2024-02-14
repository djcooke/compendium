#!/bin/bash

output_json="search_index.json"
temp_json="temp.json"

# Start with an empty array
echo "[]" >"$output_json"

for mdfile in *.md; do
  # Extract the title from the Markdown file and handle single quotes
  base_title=$(grep -m 1 '^title:' "$mdfile" | cut -d ':' -f 2- | sed "s/'/\\\\'/g" | xargs)
  htmlfile="${mdfile%.md}.html"

  while IFS= read -r line; do
    if [[ $line == "##"* ]]; then
      # Extract the header text and handle single quotes
      header=$(echo "$line" | cut -d ' ' -f 2- | sed "s/'/\\\\'/g" | xargs)
      # Create a link anchor
      anchor=$(echo "$header" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-zA-Z0-9\-]//g')

      # Concatenate base title with header
      full_title="${base_title} (${header})"

      # Create JSON object and handle single quotes in full_title
      echo "{\"title\": \"${full_title//\"/\\\"}\", \"link\": \"/$htmlfile#$anchor\"}" >"$temp_json"
      output=$(jq -s '.[0] + [.[1]]' "$output_json" "$temp_json")
      echo "$output" >"$output_json"
    fi
  done <"$mdfile"
done

# Clean up temporary file
rm "$temp_json"

echo "Search index JSON created: $output_json"
