const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = { mode: 'development' }) => {
  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';
  return {
    mode: env.mode ?? 'development',
    entry: {
      style: path.resolve(__dirname, 'src', 'scripts', 'style.js'),
      adminCatalog: path.resolve(__dirname, 'src', 'scripts', 'adminCatalog.js'),
      adminDropDownList: path.resolve(__dirname, 'src', 'scripts', 'adminDropDownList.js'),
      adminFaq: path.resolve(__dirname, 'src', 'scripts', 'adminFaq.js'),
      adminModal: path.resolve(__dirname, 'src', 'scripts', 'adminModal.js'),
      adminServices: path.resolve(__dirname, 'src', 'scripts', 'adminServices.js'),
      anchorLink: path.resolve(__dirname, 'src', 'scripts', 'anchorLink.js'),
      burger: path.resolve(__dirname, 'src', 'scripts', 'burger.js'),
      dropDownList: path.resolve(__dirname, 'src', 'scripts', 'dropDownList.js'),
      scroll: path.resolve(__dirname, 'src', 'scripts', 'scroll.js'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'scripts/[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html'), filename: 'index.html' }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };
};
