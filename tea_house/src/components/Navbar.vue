<template>
  <van-nav-bar class="navbar" :title="title" fixed>
    <template #left>
      <van-icon @click="onClickLeft" name="arrow-left" color="#000" size="24" />
      <van-icon
        @click="goToPage('home')"
        class="icon"
        name="wap-home-o"
        color="#000"
        size="24"
      />
    </template>
    <template #right>
      <van-icon
        @click="goToPage('search')"
        name="search"
        color="#000"
        size="24"
      />
      <!-- <van-icon
        @click="goToPage('cart')"
        class="icon"
        name="cart-o"
        color="#000"
        size="24"
      /> -->
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "product",
  props: {
    title: {
      type: String,
      default: "搜索",
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    goToPage(path) {
      this.$router.push({ name: `${path}` });
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 49px;
}
.icon {
  margin-left: 16px;
}
</style>
