const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const mode = 'development';
const isDev = mode === 'development';

const getFileName = ext => {
  return `[name].${ext}`;
};

const getPath = filename => {
  return path.resolve(__dirname, filename);
};

const config = {
  mode,
  context: getPath('src'),
  devtool: 'source-map',

  devServer: {
    port: 8080,
    hot: isDev,
    historyApiFallback: true, // Для корректной работы react router
  },

  entry: {
    index: './index.js', // src/index.js
  },

  output: {
    filename: getFileName('js'),
    path: getPath('dist'),
    publicPath: '/', // Для корректной работы react router
  },

  // FIXME: Сделать алиасы для вложенных компонентов
  // @Dashboard/@Work -> @DashboardWork
  resolve: {
    alias: {
      'src': getPath('src'),
      'public': getPath('public'),
      '@': getPath('src/components'),
      '@Home': getPath('src/components/@Home'),
      '@Preview': getPath('src/components/@Preview'),
      '@Login': getPath('src/components/@Login'),
      '@Dashboard': getPath('src/components/@Dashboard'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      minify: { collapseWhitespace: !isDev },
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: getPath('public/favicon.ico'),
        to: getPath('dist'),
      }],
    }),
    new MiniCssExtractPlugin({
      filename: getFileName('css'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: isDev },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: isDev },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              // Автодобавление ко всем .scss файлам.
              // Тильда позволяет sass распознать алиасы webpack
              additionalData: '@import "~public/scss/global";',
              sassOptions: { outputStyle: 'expanded' },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader'],
      },
    ],
  },

  optimization: {
    splitChunks: { chunks: 'all' },
  },
};

if (!isDev) {
  const optimization = {
    minimizer: [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ],
  };

  config.optimization = {
    ...config.optimization,
    ...optimization,
  };
}

module.exports = config;