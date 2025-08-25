
# Deep Dungeon Compendium

Contributors: please read the [contributing guidelines](./pages/contributing.md).

## Local Development

**Requirements:**
- Ruby (see `.ruby-version` for the required version)
- Bundler (`gem install bundler` if needed)
- NPM (for linting tools, see [LINTING.md](./LINTING.md))

Setup:

```sh
bundle install
rake setup
```

To run:

```sh
rake serve
```

Site will be available at http://localhost:4000

#### Deployment

Github pages deploys are handled via workflow [`deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml).
