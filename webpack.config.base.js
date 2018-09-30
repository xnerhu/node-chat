const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.tsx', '.ts', '.json'],
  },
};
