<template>
    <div class="CollapseForG">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-collapse v-model="activeNames" >
                <van-collapse-item  v-for="item in datapush" :title="item.title" :name="item.index" :key="item.index">
                    <van-cell title="优先级" :value="item.priority" />
                    <van-cell title="库位" :value="item.location" />
                    <van-cell title="待检批次" :value="item.location" />
                    <van-cell title="物料编码" :value="item.materialCode" />
                    <van-cell title="物料名称" :value="item.materialName" />
                    <van-cell title="供应商名称" :value="item.location" />
                    <van-cell title="供应商代码" :value="item.location" />
                    <van-cell title="订单上线时间" :value="item.location" />
                    <van-cell title="需求数量" :value="item.location" />
                    <van-cell title="缺料数量" :value="item.location" />
                    <van-cell title="存储核（线体）" :value="item.location" />
                </van-collapse-item>
            </van-collapse>
        </van-pull-refresh>
    </div>
</template>
<script>
import { GET_DATAPUSH } from "../store";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
      activeNames: []
    };
  },
  computed: {
    ...mapGetters(["datapush"])
  },
  methods: {
    ...mapActions({
      getDataPush: GET_DATAPUSH
    }),
    onRefresh() {
      this.getDataPush()
        .then(() => {
          this.$toast({
            duration: 850,
            message: "刷新成功"
          });
          this.isLoading = false;
        })
        .catch(() => {
          this.$toast({
            duration: 850,
            message: "刷新失败"
          });
          this.isLoading = false;
        });
    }
  },
  created() {
    this.getDataPush()
      .then(() => {})
      .catch(() => {});
  }
};
</script>
<style>
.van-collapse-item__content {
  color: #969799;
  padding: 15px;
  font-size: 13px;
  line-height: 1.5;
  background-color: #f5f6fa;
}
</style>
