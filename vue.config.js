
const webpack = require("webpack");

module.exports = {
    configureWebpack:{
        devServer:{
            port:3000,
            open:true
        },
        plugins: [
            new webpack.ProvidePlugin({
              $: "jquery",
              jQuery: "jquery",
              "window.jQuery": "jquery",
              Popper: ["popper.js", "default"]
            })
          ]
    }
}