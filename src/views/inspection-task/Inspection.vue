<template>
  <div>
    <van-row class="row-title">
      <van-col span="3">
       <van-icon name="todo-list-o" class="todo-icon"/>
      </van-col>
      <van-col span="21" class="todo-title">{{title}}</van-col>
    </van-row>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="skiploaddata"
            :offset="offset"

    >
    <InspectorCollapse @resetfinished="resetfinished"/>
    </van-list>
  </div>
</template>
<script>
import { GET_DATAPUSH } from "../../store";
import InspectorCollapse from "@/components/InspectorCollapse";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "个人检验任务列表",
      isLoading: false,
      loading: false,
      finished: false,
      skipcount: 0,
      offset: 0
    };
  },
  components: {
    InspectorCollapse
  },
  methods: {
    ...mapActions({
      getDataPush: GET_DATAPUSH
    }),
    skiploaddata() {
      setTimeout(() => {
        this.skipcount = this.skipcount + 10;
        this.getDataPush(this.skipcount)
          .then(response => {
            this.loading = false;
            if (0 == response.length) {
              this.finished = true;
              this.skipcount = 0;
            }
          })
          .catch(() => {
            this.$toast({
              duration: 850,
              message: "加载失败"
            });
          });
      }, 500);
    },
    resetfinished() {
      this.finished = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.row-title
 height: 40px;
.todo-title
 line-height: 40px;
 font-size: 14px;
.todo-icon
 font-size: 24px;
 padding-left 10px;
 line-height: 40px;
</style>
