const path = require('path');

module.exports = {
    entry: {
        server: path.resolve(__dirname, "./src/app.js")
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/dist'
    },
    target: 'node',
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, "./src"),
            '@http': path.resolve(__dirname, "./src/http"),
            '@routes': path.resolve(__dirname, "./src/routes"),
            '@core': path.resolve(__dirname, "./src/core")
        }
    }
};
