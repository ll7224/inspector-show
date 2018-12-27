<template>
  <div>
    <van-collapse v-model="activeNames">
     <van-collapse-item title="优先级:1 库位:双子座2 待检批次:983014 物料编码:105129" name="1">
       xxxxx: xxxxx
       <br/>
       xxxxx: xxxxxx
       <br/>
       xxxxxx: xxxxxx
     </van-collapse-item>
     <van-collapse-item title="优先级:1 库位:双子座2 待检批次:983014 物料编码:105129" name="2">
       xxxxx: xxxxx
       <br/>
       xxxxx: xxxxxx
       <br/>
       xxxxxx: xxxxxx
     </van-collapse-item>
     <van-collapse-item title="优先级:1 库位:双子座2 待检批次:983014 物料编码:105129" name="">
       xxxxx: xxxxx
       <br/>
       xxxxx: xxxxxx
       <br/>
       xxxxxx: xxxxxx
     </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
</script>
<style lang="stylus" scoped>

</style>
