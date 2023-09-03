<template>
  <div>
    <van-tabbar route v-model="active" active-color="#b83b17">
      <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/product" icon="apps-o">产品库</van-tabbar-item>
      <van-tabbar-item replace to="/circle" icon="browsing-history-o"
        >茶友圈</van-tabbar-item
      >
      <van-tabbar-item replace to="/evaluation" icon="records"
        >评测</van-tabbar-item
      >
      <van-tabbar-item replace to="/user" icon="manager">我的</van-tabbar-item>
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
