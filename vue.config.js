const config = require('./src/config');
const path = require('path');
function getVersion() {
  let target = new Date();
  let year = `${target.getFullYear()}`;
  let month = target.getMonth() + 1;
  let days = target.getDate();
  let y = year.charAt(year.length - 1);
  return `${y}.${month}.${days}`;
}
const version = getVersion();
function resolve(dir) {
  return path.join(__dirname, dir);
}

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  publicPath: '/',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  // outputDir: config.outputDir,
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: false, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存 想要去除hash 值，置为false
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: config.systemName,
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   hack: `true; @import "@/styles/index.less";`,
          // },
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: {
    externals: {
      Typed: 'Typed',
      $: 'jquery',
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 443,
    open: true,
    historyApiFallback: true,
    allowedHosts: 'all',
    client: {
      overlay: false,
    },
  },
  productionSourceMap: false,
  transpileDependencies: ['*'],
  chainWebpack: (config) => {
    // set svg-sprite-loader
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.exclude.add(resolve('src/assets/icons')).end();
    config.entry('main').add('babel-polyfill');
    config.entry.app = ['babel-polyfill', './src/main.js'];
    config.plugin('define').tap((args) => {
      args[0]['process.env'].version = JSON.stringify(version);
      return args;
    });
    // config.plugins.delete('prefetch'); // 删除 prefetch 插件，取消异步加载
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
});
