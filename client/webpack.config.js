const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

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
      adminMain: path.resolve(__dirname, 'src', 'scripts', 'adminMain.js'),
      adminAbout: path.resolve(__dirname, 'src', 'scripts', 'adminAbout.js'),
      adminApplications: path.resolve(__dirname, 'src', 'scripts', 'adminApplications.js'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'scripts/[name].[contenthash].js',
      assetModuleFilename: 'images/[name][contenthash][ext]',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
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
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),

        filename: 'index.html',
        chunks: ['style', 'burger', 'scroll', 'dropDownList', 'anchorLink'],
        chunkFilename: ['index.html'],
        minify: {
          processImages: true,
        },
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminAbout.html'),
        filename: 'admin/adminAbout.html',
        chunks: ['style', 'adminAbout'],
        chunkFilename: ['admin/adminAbout.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminApplications.html'),
        filename: 'admin/adminApplications.html',
        chunks: ['style', 'adminDropDownList', 'adminApplications'],
        chunkFilename: ['admin/adminApplications.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminApplicationsArchive.html'),
        filename: 'admin/adminApplicationsArchive.html',
        chunks: ['style', 'adminDropDownList'],
        chunkFilename: ['admin/adminApplicationsArchive.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminAuth.html'),
        filename: 'admin/adminAuth.html',
        chunks: ['style'],
        chunkFilename: ['admin/adminAuth.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminCatalog.html'),
        filename: 'admin/adminCatalog.html',
        chunks: ['style', 'adminModal', 'adminCatalog'],
        chunkFilename: ['admin/adminCatalog.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminFaq.html'),
        filename: 'admin/adminFaq.html',
        chunks: ['style', 'adminModal', 'adminFaq'],
        chunkFilename: ['admin/adminFaq.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminMain.html'),
        filename: 'admin/adminMain.html',
        chunks: ['style', 'adminMain'],
        chunkFilename: ['admin/adminMain.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminPanel.html'),
        filename: 'admin/adminPanel.html',
        chunks: ['style'],
        chunkFilename: ['admin/adminPanel.html'],
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'pages', 'adminServices.html'),
        filename: 'admin/adminServices.html',
        chunks: ['style', 'adminModal', 'adminServices'],
        chunkFilename: ['admin/adminServices.html'],
        inject: 'body',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public/images/',
            to: 'images/[name][ext]',
          },
        ],
      }),
      new Dotenv(),
    ],

    devtool: isDev && 'inline-source-map',
    devServer: isDev
      ? {
          static: {
            directory: path.join(__dirname, 'build'),
          },
          // publicPath: '/',
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };
};
