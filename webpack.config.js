var path = require('path');

module.exports = {
  entry: {
    '01_variables-parameters': './test/01_variables-parameters.spec.js',
    '02_arrow-function': './test/02_arrow-function.spec.js',
    '03_destructuring': './test/03_destructuring.spec.js',
    '04_classes': './test/04_classes.spec.js',
    '05_subclasses': './test/05_subclasses.spec.js',
    '06_collection': './test/06_collections.spec.js',
    '07_iterators': './test/07_iterators.spec.js',
    '08_generators': './test/08_generators.spec.js',
    '09_proxy': './test/09_proxy.spec.js',
    'lodash': './test/lodash.spec.js'
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_module/ },
      { test: /sinon\/pkg\/sinon\.js/, loader: 'imports?define=>false,require=>false' }
    ]
  },
  resolve : {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  }
};
