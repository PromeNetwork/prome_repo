/* eslint-disable no-undef */
/**
 * 存储localStorage
 */
const user = {
  state: {
    searchHistory: [], //搜索历史
    maxNum: 8,
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    // UpdateToken({ commit }, data) {
    //   return new Promise(() => {
    //     commit("SET_TOKEN", data);
    //   });
    // },
  },
};

export default user;
