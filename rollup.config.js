import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: {
    file: "./target/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    replace({
      delimiters: ["", ""],
      "#!/usr/bin/env node": "",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    json(),
    commonjs(),
    external(),
    resolve({
      preferBuiltins: true,
    }),
    typescript(),
  ],
};
