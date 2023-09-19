<template>
  <div class="DcdHeader">
    <img
      class="DcdHeader_img"
      src="https://assets.puercn.com/v3assets/v2/logo-46139d255448a6e7eed8ab315285c0cf25a4d44ec23f2255197fc533d6b6b963.png"
    />
    <span class="title">茶友网</span>
    <van-search
      placeholder="搜索资讯/产品"
      shape="round"
      class="DcdHeader_search"
      @click="gotoPage('search')"
    />
  </div>
</template>

<script>
export default {
  name: "teaHeader",
  methods: {
    gotoPage(urlName) {
      this.$router.push({ name: urlName });
    },
  },
};
</script>

<style scoped>
.DcdHeader {
  display: flex;
  align-items: center;
  padding: 2px 12px 0 12px;
  background-color: #b83b17;
}
.DcdHeader_img {
  width: 15%;
  height: 25px;
}
.title {
  width: 25%;
  margin-left: 10px;
  color: #fff;
  font-size: 16px;
}
.DcdHeader_search {
  margin-left: 15px;
  width: 90%;
  background-color: #b83b17;
}
/* .DcdHeader_button {
    width: 26%;
    height: 25px;
    background-color: #b83b17;
    font-size: 10px;
} */
</style>
