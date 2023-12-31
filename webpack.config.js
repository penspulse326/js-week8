const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/scripts/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/scripts/"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
