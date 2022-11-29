import typescript from "rollup-plugin-typescript2";
import minify from "rollup-plugin-babel-minify";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/featureprobe-client-sdk-react.min.js",
      format: "iife",
      name: "featureProbe",
    },
  ],
  plugins: [
    resolve({}),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript({ tsconfigOverride: { compilerOptions: { module: "ES2015" } } }),
    minify({ comments: false }),
    json(),
    nodePolyfills(),
  ],
};
