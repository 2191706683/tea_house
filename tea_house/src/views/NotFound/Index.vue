<template>
  <div class="notfound">
    <h1>404</h1>
    <h3>该页面不存在</h3>
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script>
export default {
  name: "teaIndex",
  props: {
    // caricon: : {
    //   type: Array,
    //   value: [],
    // },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.notfound {
    position: relative;
    transform: translate3d(0, 90%, 0);
    font-size: 30px;
    line-height: 50px;
    text-align: center;
}
</style>
