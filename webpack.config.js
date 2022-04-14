const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// npm script's argument '--mode_env' is received here.
// 後述の module.exports 内の関数で、この値を参照して処理を分岐させる。
const IS_PRODUCTION = process.env.NODE_ENV == 'production';

// web-dev-server setting
const webDevServerSetting = {
  open: true,
  port: 8080,
  host: 'localhost',
};

// Plugins ############
// Plugin: MiniCssExtractPlugin setting
const MiniCssExtractPluginSetting = new MiniCssExtractPlugin({
  filename: './css/style.css',
});

// Plugin: HtmlWebpackplugin setting
const HtmlWebpackPluginSetting = new HtmlWebpackPlugin({
  template: './src/index.html',// テンプレートとなる index.html のパス
});

// Modules ############
// Module: ts-loader
const tsLoaderSetting = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
}

// Module: babel-loader
const babelLoaderSetting = {
  test: /\.(js|jsx)$/i,
  loader: 'babel-loader',
}

// Module: sass-loader css-loader extractPlugin-loaders setting, MiniCssExtractPlugin is necessary.
const sassLoadersSetting = {
  test: /\.s[ac]ss$/i,
  include: path.resolve(__dirname, 'src', 'sass'),
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader'
  ],
}

// Module: assetModule
const assetModuleSetting = {
  test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
  type: 'asset/resource',
}

// common config ############
// config には 'Development' と 'Production' に共通する設定を書く。
// 後述する module.exports 内の関数にて、この設定オブジェクトに分岐後の新設定を追加する。
const config = {
  entry: path.resolve(__dirname, 'src', 'script', 'index.ts'),//'./src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script/main.js'
  },
  devServer: webDevServerSetting,
  plugins: [
    HtmlWebpackPluginSetting,
    MiniCssExtractPluginSetting,
  ],
  module: {
    rules: [
      tsLoaderSetting,
      // babelLoaderSetting,
      sassLoadersSetting,
      assetModuleSetting,
    ],
  },
  resolve: {
    extensions: ['.ts', '...'],// ... は '.js', '.json', '.wasm' のデフォルト値を指す
  }
};

// TerserPlugin setting, for Production, use to delete unnecessary text file and logs.
const terserPluginSetting = new TerserPlugin({
  extractComments: false,// prevent to output unnecessary text files. default is True
  terserOptions: {
    compress: {
      drop_console: true,// delete console.log
    },
  },
});

// finaly, setting is branched by whether 'Production' or 'Development'.
// 先述の config オブジェクトに、分岐後の設定を追加している。
module.exports = () => {
  if (IS_PRODUCTION) {
    config.mode = 'production';
    config.optimization = {
      minimize: true,
      minimizer: [terserPluginSetting],
    }
    // you can add another settings for Production.
  } else {
    config.mode = 'development';
    config.devtool = 'eval-cheap-module-source-map';// sourcemap. recommended values are: eval, eval-source-map
    // you can add another settings for Development.
  }
    return config;
};
