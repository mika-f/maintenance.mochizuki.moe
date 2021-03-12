# Cloudflare Workers TypeScript Template

A template project for [Cloudflare Workers](https://developers.cloudflare.com/workers/) that written in TypeScript.  
This repository also contains configurations for various formatters and linters.

## Getting Started

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler) or GitHub Template Repository.  
If you generate using Wrangler, run this command:

```bash
$ wrangler generate my-typescript-worker https://github.com/mika-f/cloudflare-workers-typescript-template.git
```

If you want to use this repository as template repository, fork and configure as template repository.  
And create a new repository from GitHub and select it.

## Development

Run `yarn start` command and edit [`src/index.tsx`](src/index.tsx).

## Testing

Edit the files in the `__tests__` directory and run `yarn test` command.
