<template>
  <div>
    <van-tabs line-height="0">
      <van-tab v-for="item in circleTabList">
        <template #title>
          <van-image width="60" height="60" round :src="item.tabImg" />
          <div style="text-align: center">{{ item.tabTitle }}</div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getCircleTabList } from "@/api/circle"
export default {
  name: "teaTab",
  data() {
    return {
      circleTabList: [],
    };
  },
  async mounted() {
    let res = await getCircleTabList()
    this.circleTabList = res.data
  }
};
</script>

<style>
.van-tabs--line .van-tabs__wrap {
  height: 100%;
}
</style>
