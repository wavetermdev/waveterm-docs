<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./static/img/logo/wave-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="./static/img/logo/wave-light.png">
    <img alt="Wave Terminal Logo" src="./static/img/logo/wave-light.png" width="240">
  </picture>
  <br/>
</p>

# Wave Terminal Documentation

This is the home for Wave Terminal's documentation site.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```sh
yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Deployments are handled automatically by the [Deploy action](.github/workflows/deploy.yml)
