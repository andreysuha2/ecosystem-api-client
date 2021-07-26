const path = require('path');

module.exports = {
    target: 'node',
    entry: {
        server: path.resolve(__dirname, "./src/app.js")
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/dist',
        library: {
            name: "EcosystemApiClient",
            type: "umd"
        }
    },
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, "./src"),
            '@http': path.resolve(__dirname, "./src/http"),
            '@routes': path.resolve(__dirname, "./src/routes"),
            '@core': path.resolve(__dirname, "./src/core")
        }
    }
};
