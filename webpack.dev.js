const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ChromeExtensionReloader = require("webpack-chrome-extension-reloader");

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new ChromeExtensionReloader({
      port: 9090,
      reloadPage: true,
      entries: {
        contentScript: "content",
        background: "background", // *REQUIRED
        extensionPage: ["popup", "options"],
      },
    }),
  ],
});
