#!/bin/bash
set -euo pipefail

echo "Linting YAML..."
yamllint _config.yml .lefthook.yml _data/*.y{a,}ml .github/workflows/*.y{a,}ml

echo "Linting Markdown..."
markdownlint -c .markdownlint.json '**/*.md' --ignore '_site/**'

echo "Building site..."
bundle exec jekyll build --quiet

echo "✅ All checks passed!"
