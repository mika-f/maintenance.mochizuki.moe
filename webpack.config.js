// @ts-check
const path = require("path");

const mode = process.env.NODE_ENV || "production";

/** @type {import("webpack").Configuration } */
const configuration = {
  // @ts-ignore
  mode,
  entry: path.resolve(__dirname, "src", "index.tsx"),
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
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  target: "webworker",
};

module.exports = configuration;