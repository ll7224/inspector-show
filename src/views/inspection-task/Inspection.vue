<template>
  <div>
    <van-row class="row-title">
      <van-col span="3">
       <van-icon name="todo-list-o" class="todo-icon"/>
      </van-col>
      <van-col span="21" class="todo-title">{{title}}</van-col>
    </van-row>
    <InspectorCollapse/>
  </div>
</template>
<script>
import InspectorCollapse from "@/components/InspectorCollapse";
export default {
  data() {
    return {
      title: "个人检验任务列表",
      isLoading: false
    };
  },
  components: {
    InspectorCollapse
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
