import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../out",
  },
  esbuild: {
    jsxInject: `import {createElement, Fragment} from 'react';`,
    jsxFactory: "createElement",
    jsxFragment: "Fragment",
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/font-awesome/fonts/*",
          dest: "fonts",
        },
      ],
    }),
  ],
});
