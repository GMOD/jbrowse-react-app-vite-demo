# vite with @jbrowse/react-app2

`@jbrowse/react-app2` v5 (currently the `next` prerelease on npm) built with [vite](https://vite.dev/). The RPC worker is one import: `esm/rpcWorker?worker`, with `worker: { format: "es" }` in `vite.config.ts`.

See it running at https://jbrowse.org/demos/app-vite/.

## Usage

```bash
yarn
yarn dev
```

`yarn build` writes a static site.

More examples: https://jbrowse.org/storybook/, and the
[embedding guide](https://jbrowse.org/jb2/docs/embedded_components/).
