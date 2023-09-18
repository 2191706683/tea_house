<template>
  <div class="car_icon">
    <div
      @click="gotoPage('productList', item)"
      class="car_icon_item"
      v-for="(item, index) in caricon"
      :key="index"
    >
      <img class="car_icon_img" v-lazy="item.icon" alt="" />
    </div>
  </div>
</template>
<script>
import { getProductIcon } from "@/api/product";
export default {
  name: "teaIndex",
  props: {
    // caricon: : {
    //   type: Array,
    //   value: [],
    // },
  },
  data() {
    return {
      caricon: [],
    };
  },
  methods: {
    gotoPage(urlName, item) {
      // if (urlName == 'NotFound') {
      //   window.location.href = 'https://www.chawo.com/wap/#/'
      // }
      this.$router.push({ name: urlName, params: {data: item} });
    },
  },
  async mounted() {
    let res = await getProductIcon();
    this.caricon = res.data
  },
};
</script>

<style scoped>
.car_icon {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.car_icon_item {
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  width: 20%;
  padding: 4px;
  box-sizing: border-box;
  /* border: 1px solid black; */
}

.car_icon_img {
  width: 58px;
  height: 58px;
  /* margin-bottom: 14px; */
  border: 1px solid #d1cfcf;
}
</style>
