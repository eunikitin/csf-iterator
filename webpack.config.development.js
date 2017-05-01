import path         from 'path';
import merge        from 'webpack-merge';

import baseConfig   from './webpack.config.base';
import resolveRules from './builder/resolve';
import es6Loader    from './builder/loaders/es6';


export default merge(
    baseConfig,
    {
        entry: './src/iterator.js',

        output: {
            path: path.resolve(__dirname, "lib"),
            filename: "iterator.js",
            library: "csf-iterator",
            libraryTarget: 'umd',
            umdNamedDefine: true
        }
    },
    resolveRules,
    es6Loader
);