<template>
  <div class="navbar">
    <van-tabbar route v-model="active" active-color="#b83b17">
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/product" icon="apps-o">产品库</van-tabbar-item>
      <van-tabbar-item replace to="/circle" icon="browsing-history-o"
        >茶友圈</van-tabbar-item
      >
      <van-tabbar-item replace to="/evaluation" icon="records"
        >评测</van-tabbar-item
      >
      <van-tabbar-item replace to="/user" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style scoped>
.navbar {
    padding-bottom: 14%;
}
</style>
