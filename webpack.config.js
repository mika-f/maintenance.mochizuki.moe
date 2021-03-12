// @ts-check
const path = require("path");

const mode = process.env.NODE_ENV || "production";

/** @type {import("webpack").Configuration } */
const configuration = {
  // @ts-ignore
  mode,
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: `worker.${mode}.js`,
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat",
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  target: "webworker",
};

module.exports = configuration;