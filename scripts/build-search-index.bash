#!/bin/bash

output_json="search_data.json"
temp_json="temp.json"

# Start with an empty array
echo "[]" >$output_json

# Loop through all Markdown files
for mdfile in *.md; do
  # Extract the title from the Markdown file
  base_title=$(grep -m 1 '^title:' $mdfile | cut -d ':' -f 2 | xargs)
  htmlfile="${mdfile%.md}.html"

  # Read each line in the Markdown file
  while IFS= read -r line; do
    if [[ $line == "##"* ]]; then
      # Extract the header text
      header=$(echo $line | cut -d ' ' -f 2- | xargs)
      # Create a link anchor
      anchor=$(echo $header | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-zA-Z0-9\-]//g')

      # Concatenate base title with header
      full_title="${base_title} (${header})"

      # Create JSON object
      echo "{\"title\": \"$full_title\", \"link\": \"/$htmlfile#$anchor\"}" >$temp_json
      output=$(jq -s '.[0] + [.[1]]' $output_json $temp_json)
      echo $output >$output_json
    fi
  done <"$mdfile"
done

# Clean up temporary file
rm $temp_json

echo "Search index data JSON created: $output_json"
