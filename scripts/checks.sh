#!/bin/bash
set -euo pipefail

echo "Linting YAML..."
yamllint -c .yamllint.yml _config.yml _data/

echo "Linting Markdown..."
markdownlint -c .markdownlint.json '**/*.md'

echo "Building site..."
bundle exec jekyll build --quiet

echo "✅ All checks passed!"
