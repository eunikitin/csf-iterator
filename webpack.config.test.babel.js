import path         from 'path';
import merge        from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import baseConfig   from './webpack.config.base';
import resolveRules from './builder/resolve';
import babelLoader  from './builder/loaders/babel';


export default merge(
    baseConfig,
    {
        output: {
            devtoolModuleFilenameTemplate:         '[absolute-resource-path]',
            devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
        },

        resolve: {
            alias: {
                Test: path.resolve(process.cwd() + '/test'),
                Fixtures: path.resolve(process.cwd() + '/test/fixtures'),
                Specs: path.resolve(process.cwd() + '/test/specs')
            }
        },

        module: {
            rules: [
                {
                    test: /\.(js|ts)/,
                    include: path.resolve('src'), // instrument only testing sources with Istanbul, after ts-loader runs
                    loader: 'istanbul-instrumenter-loader'
                },
            ]
        },

        externals: [nodeExternals()],
        devtool: "inline-cheap-module-source-map"
    },
    resolveRules,
    babelLoader
);