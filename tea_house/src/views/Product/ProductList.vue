<template>
  <div class="productlist_container">
    <!-- logo标签 -->
    <div class="DcdHeader">
      <a class="DcdHeader_img" href="../Home/index.vue">
        <img src="https://m.puercn.com/_next/image/?url=%2Flogo.png&w=96&q=75" />
        <h1 class="he">首页</h1>
      </a>
      <div class="divider"></div>
      <!-- 所在主体位置 -->
      <div class="subtitle">
        <a class="text-white fs-18 fw-bold" href="#">产品库</a>
      </div>
      <!-- 当前所在位置 -->
      <div class="text-white fs-18 fw-bold">/ {{title}}</div>
    </div>
    <van-dropdown-menu class="filters">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <!-- 产品 -->
    <!-- 循环获取产品 -->
    <div class="item">
      <div class="container">
        <div
          @click="gotoPage('productDetail', item)"
          class="item-left"
          v-for="(item, index) in items"
          :key="index"
        >
          <a href="#">
            <img :src="item.thumb" alt="" />
          </a>
          <div class="card-body">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.brand }}
              <span>/</span>
              {{ item.category }}
              <span>/</span>
              {{ item.tea_year }}
            </p>
            <div class="price">{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <Tabbar> </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import { getProductList } from "@/api/product";

export default {
  name: "product",
  components: { Tabbar },
  data() {
    return {
      title: "",
      items: [
      ],
      value1: 0,
      value2: "a",
      value3: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
      option3: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
  methods: {
    gotoPage(urlName, item) {
      this.$router.push({ name: urlName, params: {data: item}});
    },
  },
  async mounted() {
    // console.log(this.$route.params.data, 30)
    if (typeof this.$route.params.data !== "undefined") {
      localStorage.setItem("productlist", JSON.stringify(this.$route.params.data))
    }
    this.state = JSON.parse(localStorage.getItem("productlist")) || this.$route.params.data;
    let res = await getProductList({ id: this.state.id });
    this.items = res.data;
    this.title = this.state.title;
    // console.log(this.state)
  }
};
</script>

<style scoped>
.productlist_container {
  overflow-x: hidden;
  height: 99vh;
  margin-bottom: 15%;
}
.DcdHeader {
  display: flex;
  align-items: center;
  padding: 2px 12px 0 12px;
  background-color: #db3232;
  /* width: 375.33px; */
  height: 55px;
}
.DcdHeader_img img {
  display: inline-block;
  width: 43px;
  /* width: 30%; */
  height: 25px;
  margin-left: 10px;
}
.he {
  /* float: right; */
  display: inline-block;
  margin-left: 10px;
  color: #fff;
  width: 36px;
  /* width: 30%; */
  height: 30px;
  font-size: 18px;
  line-height: 30px;
}
.divider {
  display: inline-block;
  width: 2px;
  height: 1rem;
  background: #fff;
  margin-left: 10px;
}
.fs-18 {
  font-size: 18px;
}
.text-white {
  color: #fff;
  margin-left: 10px;
  /* --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important; */
}
.fw-bold {
  font-weight: 700 !important;
}
.filters {
  height: 50px;
  outline: 1px solid gray;
  background-color: yellow;
}
.filters .nav-item,
.nav-category,
.nav-year {
  box-sizing: border-box;
  display: inline-block;
  width: 33.3%;
  height: 50px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}
.nav-item::after {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  top: 78px;
  left: 95px;
  border-top: 10px solid #666666;
}
.nav-category::after {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  top: 78px;
  left: 222px;
  border-top: 10px solid #666666;
}
.nav-year::after {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  top: 78px;
  left: 345px;
  border-top: 10px solid #666666;
}

.container {
  display: flex;
  height: 340px;
  background-color: #fff;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
}
.container .item-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46%;
  height: 290px;
  background-color: #fff;
  margin-top: 10px;
  margin-left: 2.5%;
  outline: 1px solid gray;
  /* box-shadow: #666666; */
}
.container .item-left img {
  width: 100%;
  height: 160px;
  background-color: cornflowerblue;
  margin-right: 13px;
}
.card-body h3 {
  font-size: 16px !important;
  width: 97%;
  margin-left: 5px;
  padding: 0;
}
.card-body .price {
  color: red;
  margin-left: 10px;
  font-size: 15px;
  /* margin-bottom: 50px; */
}
.card-body p {
  margin-left: 10px;
  font-size: 12wpx;
}
/* .container .item-right{
    display: flex;
    flex-direction: column;
    width: 46%;
    height: 200px;
    background-color: cornflowerblue;
} */
/* .DcdHeader_button {
      width: 26%;
      height: 25px;
      background-color: #b83b17;
      font-size: 10px;
  } */
</style>
