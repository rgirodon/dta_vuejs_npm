const webpack = require("webpack");
const path = require("path");

let config = {
    entry: {
      bundle : "./src/index.js",
      bundle_router : "./src/index_router.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
  }
  
  module.exports = config;