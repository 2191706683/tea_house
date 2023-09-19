<template>
  <div class="body">
    <van-nav-bar left-text="" style="background-color: #b83b17">
      <template #left>
        <van-icon @click="onClickLeft" color="#fff" size="24" name="arrow-left" />
      </template>
      <template #title>
        <span class="r" style="font-size: 17px"> 首页 | 资讯</span>
      </template>
      <template #right>
        <van-icon @click="goToPage('search')" name="search" color="#fff" size="24" />
      </template>
    </van-nav-bar>

    <div class="h">
      <div><h2 v-html="state.article_title"></h2></div>
    </div>
    <div class="time">
      <span style="margin-left: 5px"> 2023-09-05 09:28 <br /> </span>
    </div>
    <van-image class="img1" :src="state.article_img" />
    <div class="p1">
      <div v-html="article_content"></div>
    </div>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import { getArticleDetail } from "@/api/home";
export default {
  name: "product",
  components: { Tabbar },
  data() {
    return {
      active: 3,
      state: {
        article_title: "",
        article_img: "",
      },
      article_content:
        "<p>5月15日，在2023“一带一路”国际茶叶贸易交流会暨第五届湖北(鹤峰)茶商大会上，农业农村部科教司原副巡视员、中国农业国际合作促进会茶产业专家委员会副主任委员李芹发布了安溪铁观音、普洱茶、太平猴魁、福鼎白茶、福州茉莉花茶等70个区域公用品牌的影响力指数。</p><p>在“中国茶叶区域公用品牌的影响力指数名单”中，安溪铁观音以788.64的影响力指数位居名单第一。在福建省安溪县，茶产业发展到了什么程度?茶与自然如何相处?地方又采取了哪些措施?让安溪铁观音区域公用品牌在品牌、质量、创新、生态方面齐头并进。</p><p>2019-2021年，三年来安溪县茶园面积保持60万亩未做改变，三年地方宣传费用也未做调整，但安溪产值实现了逐年递增，产值从19年191亿元增长到21年280亿元，茶农收入也增长到了2.09万元。</p><p>华祥苑茶庄园/图源安溪县政府网站</p><p>自2018年起，安溪县连续获评“中国茶业百强县”;2019年4月，安溪县被农业农村部、财政部联合授予国家现代农业产业园;2020年11月，安溪县获评“‘十三五’茶业发展十强县”;2021年11月，被国家农业农村部评为全国农业全产业链典型县(茶叶);这些成绩的背后，是安溪县在茶产业发展上“下的”大力气。</p><p>来源：中农促茶产业分会</p><p>如有侵权请联系删除</p>",
    };
  },
  methods: {
    onClickLeft() {
      // history.back();
      this.$router.back() 
    },
  },
  async mounted() {
    // console.log(this.$route.params, "params");
    if (this.$route.params.id) {
      localStorage.setItem("articleDetail", JSON.stringify(this.$route.params))
    }
    this.state = JSON.parse(localStorage.getItem("articleDetail")) || this.$route.params;
    let res = await getArticleDetail({ id: this.state.id });
    this.article_content = res.data.article_content;
  },
};
</script>
<style>
.h {
  margin-left: 5px;
}

.l {
  margin-top: -1px;
}

.r {
  color: white;
}

.left-text {
  color: white;
}

.time {
  margin-top: -10px;
  color: #778899;
  display: flex;
}

.body {
  box-sizing: border-box;
  line-height: 0.7rem;
  letter-spacing: 0rem;
  color: #252525;
  background: #fff;
  width: 100%;
  height: 100%;
}

p {
  margin-left: 5px;
}

.p1 {
  margin: auto;
  width: 96%;
  font-size: 15px;
  text-indent: 32px;
  font-family: 微软幼黑;
}

.img1 {
  margin: auto;
  width: 100%;
  align-items: center;
}

input {
  margin-left: 5px;
  border-radius: 25px;
  margin-bottom: -10px;
  width: 200px;
  height: 30px;
  border: 1px solid #778899;
}
</style>
