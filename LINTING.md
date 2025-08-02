# Linting

This project uses YAML and Markdown linting to ensure non-savvy contributors don't have to worry about formatting issues.

To run:

```sh
rake lint
```

## Notes on (`.markdownlint.json`)

The following rules are disabled for Jekyll compatibility:

- `MD001`: Heading levels increment by one
- `MD007`: Unordered list indentation
- `MD009`: No trailing spaces
- `MD012`: No multiple consecutive blank lines
- `MD013`: Line length
- `MD025`: Single title/h1
- `MD026`: No trailing punctuation in headings
- `MD032`: Lists surrounded by blank lines
- `MD033`: No inline HTML
- `MD034`: No bare URLs
- `MD036`: No emphasis for headers
- `MD041`: First line in file should be h1
- `MD045`: Images should have alt text
- `MD047`: Single trailing newline
