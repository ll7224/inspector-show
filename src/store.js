import Vue from "vue";
import Vuex from "vuex";
import { getDatapush } from "./service/datapush.service";
export const GET_DATAPUSH = "GET_DATAPUSH";
const GET_DATAPUSH_SUCCESS = "GET_DATAPUSH_SUCCESS";

Vue.use(Vuex);

const rebuilddata = datapush => {
  const data = {
    ...datapush,
    title: `优先级：${datapush.priority} 待检批次：${
      datapush.materialCode
    } 物料：${datapush.materialName}（${datapush.materialCode}）`
  };
  return data;
};

export default new Vuex.Store({
  state: {
    datapush: []
  },
  getters: {
    datapush: ({ datapush }) => datapush.map(rebuilddata)
  },
  mutations: {
    [GET_DATAPUSH_SUCCESS]: (state, payload) => {
      state.datapush = payload.response;
    }
  },
  actions: {
    [GET_DATAPUSH]: ({ commit }) =>
      new Promise(resolve => {
        // eslint-disable-line no-unused-vars
        getDatapush()
          .then(response => {
            commit(GET_DATAPUSH_SUCCESS, { response });
            resolve(response);
          })
          .catch(() => {});
      })
  }
});
