const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './build/index.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'svg'],
  },
  module: {
    loaders: [
      // Typescript
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
