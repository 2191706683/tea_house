<template>
  <div>
    <van-index-bar class="carindex_bar">
      <div v-for="(item, index) in userData">
        <van-index-anchor class="carindex_anchor" :index="item.title">
          <span class="carindex_title">{{ item.title }}</span>
        </van-index-anchor>
        <div @click="gotoPage('productList', cell)" class="carindex_cell" v-for="cell in item.cell">
          <img class="carindex_icon" v-lazy="cell.icon" alt="" />
          <span class="carindex_text">{{ cell.TEXT }}</span>
        </div>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import { getProductIndex } from "../api/product";
export default {
  name: "teaIndex",
  props: {
    // carindex: {
    //   type: Array,
    //   value: [],
    // },
  },
  data() {
    return {
      // titleArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      //
      userData: [],
    };
  },
  methods: {
    gotoPage(urlName, item) {
      this.$router.push({ name: urlName, params: { data: item } });
    },
  },
  async mounted() {
    let res = await getProductIndex();

    // console.log(res);

    let arr = res.data;

    this.userData = arr;

    // console.log(this.userData, "评测数据");
  },
};
</script>

<style scoped>
.carindex_anchor {
  width: 100vw;
  height: 25px;
  background-color: #f7f8fc;
  color: red;
}
.carindex_title {
  color: #979aa8;
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 2px;
}
.carindex_cell {
  display: flex;
}

.carindex_icon {
  width: 40px;
  height: 40px;
  padding: 10px 12px;
}

.carindex_text {
  font-size: 15px;
  line-height: 60px;
}
</style>
