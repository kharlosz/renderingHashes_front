const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
          {
            test: /\.(ttf|woff|woff2)$/,
            use: [
              'url-loader',
            ],
          },
        ],
    },
    entry: {
        index: './src/js/index.js',
        hashgen: './src/js/hashgen.js',
        register: './src/js/register.js',
        login: './src/js/login.js',
        logout: './src/js/logout.js',
        profile: './src/js/profile.js',
        style: './src/js/style.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};