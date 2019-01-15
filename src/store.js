import Vue from "vue";
import Vuex from "vuex";
import { getDatapush } from "./service/datapush.service";
export const GET_DATAPUSH = "GET_DATAPUSH";
const GET_DATAPUSH_SUCCESS = "GET_DATAPUSH_SUCCESS";

Vue.use(Vuex);

const rebuilddata = datapush => {
  const data = {
    ...datapush,
    title: `待检批次：${datapush.mlotNO} 物料：${datapush.partname}（${
      datapush.partcode
    }）`
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
    [GET_DATAPUSH]: ({ commit }, skipcount) =>
      new Promise(resolve => {
        // eslint-disable-line no-unused-vars
        getDatapush(skipcount)
          .then(response => {
            commit(GET_DATAPUSH_SUCCESS, { response });
            resolve(response);
          })
          .catch(() => {});
      })
  }
});
