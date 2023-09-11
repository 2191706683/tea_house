<template>
  <div>
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
      <div class="text-white fs-18 fw-bold">/ 中茶</div>
    </div>
    <!-- 选择筛选 -->
    <!-- <div class="filters">
            <div class="nav-item">默认分类</div>
            <div class="nav-category">全部排序</div>
            <div class="nav-year">选择分类</div>
        </div> -->
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
          @click="gotoPage('productDetail')"
          class="item-left"
          v-for="(item, index) in items"
          :key="index"
        >
          <a href="#">
            <img :src="item.image" alt="" />
          </a>
          <div class="card-body">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.tea_one }}
              <span>/</span>
              {{ item.tea_two }}
              <span>/</span>
              {{ item.tea_year }}
            </p>
            <div class="price">{{ item.price }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="container">
                <div class="item-left">
                    <a href="#"></a>
                </div>
                <div class="item-right">
                    <a href="#"></a>
                </div>
            </div>
            <div class="container">
                <div class="item-left">
                    <a href="#"></a>
                </div>
                <div class="item-right">
                    <a href="#"></a>
                </div>
            </div> -->
    </div>
    <!-- 导航栏 -->
    <Tabbar> </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
export default {
  name: "product",
  components: { Tabbar },
  data() {
    return {
      items: [
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/927/medium/0.jpg?1693634686",
          title: "2023年中茶 荒野古树 生茶 357克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "1280元/片",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/915/medium/0.jpg?1693561350",
          title: "2023年中茶 德昂酸茶 再加工茶 192克",
          tea_one: "中茶",
          tea_two: "",
          tea_year: "2023年",
          price: "1280元/盒",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/899/medium/2.jpg?1693472254",
          title: "2023年中茶 布朗大树 生茶 357克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "699元/片",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/884/medium/1.jpg?1693302643",
          title: "2023年中茶 曼松 357克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "暂无报价",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/872/medium/14.png?1693209583",
          title: "2023年中茶 名山茗景迈 生茶 128克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "698元/盒",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/856/medium/2.png?1693105967",
          title: "2023年中茶 名山茗冰岛老寨 生茶 128克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "5680元/盒",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/927/medium/0.jpg?1693634686",
          title: "2023年中茶 荒野古树 生茶 357克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "1280元/片",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/915/medium/0.jpg?1693561350",
          title: "2023年中茶 德昂酸茶 再加工茶 192克",
          tea_one: "中茶",
          tea_two: "",
          tea_year: "2023年",
          price: "1280元/盒",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/899/medium/2.jpg?1693472254",
          title: "2023年中茶 布朗大树 生茶 357克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "699元/片",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/884/medium/1.jpg?1693302643",
          title: "2023年中茶 曼松 357克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "暂无报价",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/872/medium/14.png?1693209583",
          title: "2023年中茶 名山茗景迈 生茶 128克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "698元/盒",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/856/medium/2.png?1693105967",
          title: "2023年中茶 名山茗冰岛老寨 生茶 128克",
          tea_one: "中茶",
          tea_two: "生茶",
          tea_year: "2023年",
          price: "5680元/盒",
        },
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
.item {
  height: 12000px;
  /* background-color: #57b381; */
}
.container {
  display: flex;
  height: 340px;
  background-color: #fff;
  justify-content: space-evenly;
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
  margin-left: 10px;
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
