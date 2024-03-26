// 应用的名称
const systemName = 'Prome';
// const isPro = process.env.NODE_ENV === 'development'; // 开发环境
const VUE_APP_FLAG = process.env.VUE_APP_FLAG === 'test'; // 测试环境
// 代理环境
//1 http://XXXXXX 可自行设置
const VUE_APP_ENV = process.env.VUE_APP_ENV ? process.env.VUE_APP_ENV : 1;

module.exports = {
  systemName,
  VUE_APP_ENV,
  VUE_APP_FLAG,
};
