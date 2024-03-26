import { createStore } from "vuex";

import modules from "./modules";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: modules, //引入数据，在module文件夹中根据不同业务自主分类
});
