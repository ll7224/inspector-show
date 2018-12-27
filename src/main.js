import Vue from "vue";
import App from "./App.vue";
import router from "./routers/router";
import store from "./store";
import { Row, Col, Icon, Collapse, CollapseItem, PullRefresh } from "vant";

Vue.config.productionTip = false;
Vue.use(Row)
  .use(Col)
  .use(Icon)
  .use(Collapse)
  .use(CollapseItem)
  .use(PullRefresh);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
