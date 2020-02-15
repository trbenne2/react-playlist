// path module by node. allows to get correct directory
const path = require('path');

// TODO: net ninja webpack video series
/* all settings for webpack
*  Takes all JSX and transforms into 1 js file and to vanilla js to reduce HTTP request
*  can use style loader
*/
module.exports = {
    // root js file so look in src folder for index.js
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        // the output file is bundle.js with all transform code
        // public path is what user sees
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    // configure babel 2 loaders for jsx and css
    module:{
        rules: [
            {
                // run converter on src folder that contains js
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query:{
                    presets: ['@babel/react', '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style.loader!css-loader'
            }
        ]
    }
};