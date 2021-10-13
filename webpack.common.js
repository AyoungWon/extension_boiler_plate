const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const TsConfigPathsPlugin =
  require("awesome-typescript-loader").TsConfigPathsPlugin;

module.exports = {
  entry: {
    background: "./src/background/index.ts",
    content: "./src/content/index.ts",
    options: "./src/options/index.tsx",
    popup: "./src/popup/index.tsx",
  },
  output: {
    filename: "[name]/index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        test: /\.json$/,
        use: [{ loader: "json-loader" }],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/main.css",
    }),
    new HtmlWebPackPlugin({
      template: "./public/options/index.html", // public/index.html 파일을 읽는다.
      chunks: ["options"],
      filename: "./options/index.html", // output으로 출력할 파일은 index.html 이다.
    }),
    new HtmlWebPackPlugin({
      template: "./public/popup/index.html",
      chunks: ["popup"],
      filename: "./popup/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "manifest.json",
          context: path.resolve(__dirname, "src"),
        },

        {
          from: "**/*",
          context: path.resolve(__dirname, "assets"),
          to: "assets",
        },
      ],
    }),
    new webpack.ProgressPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new JsonMinimizerPlugin()],
  },
  devtool: false,
  resolve: {
    alias: {
      "~/": "./src",
    },
    plugins: [new TsConfigPathsPlugin()],
    extensions: [".ts", ".js", ".json", ".tsx", ".jsx"],
  },
};
