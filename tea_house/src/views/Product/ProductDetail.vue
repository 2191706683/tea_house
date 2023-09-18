<template>
  <div class="body">
    <van-nav-bar style="background-color: #b83b17">
      <template #title>
        <span class="r" style="font-size: 17px">
          <img
            width="22px"
            class="app-logo"
            src="https://assets.puercn.com/v3assets/v2/logo-46139d255448a6e7eed8ab315285c0cf25a4d44ec23f2255197fc533d6b6b963.png"
          />
          茶友网 | 荒野古树
        </span>
      </template>
      <template #left>
        <van-icon @click="onClickLeft" name="arrow-left" color="#fff" />
      </template>
      <template #right>
        <span @click="gotoPage('userDetail')" class="r" style="font-size: 17px">
          <img
            class="imgr"
            src="https://oss.puercn.com/fill/64/64/chayou/users/logos/000/000/001/original/5f12c9253ad7648067e78297e9c....jpg"
          />
        </span>
      </template>
    </van-nav-bar>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="e in imgg">
        <img style="width: 100%" v-lazy="e.srcc" />
      </van-swipe-item>
    </van-swipe>

    <div class="vox">
      <p class="p1">1280&nbsp;<span style="font-size: 6px">元/片</span></p>
      <p style="font-size: 18px; margin-top: -20px">{{title}}</p>
    </div>
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab title="参数">
        <div class="vox1" v-for="h in tabss">
          <div class="vox2">
            <div
              style="
                width: 50%;
                height: 52px;
                font-size: 14px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              "
            >
              品牌:{{ brand }}<br />
              工艺:{{ category }}
            </div>

            <div
              style="
                width: 50%;
                height: 52px;
                font-size: 14px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              "
            >
              分类：{{ h.dif }}<br />
              外观：{{ h.face }}
            </div>
          </div>
          <div
            style="
              width: 100%;
              height: 200px;
              font-size: 14px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            "
          >
            年份: {{ tea_year }}<br />
            净重: {{ h.heave }}<br />
            规格: {{ h.standard }}<br />
            原料: {{ h.mul }}<br />
            标准: {{ h.st }}<br />
            保质期:{{ h.time }} <br />
            厂家: {{ h.boss }}<br />
          </div>
        </div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab>
      <!-- <van-tab title="报价">
        <div class="vox3"></div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab> -->
      <van-tab title="简介">
        <div class="vox4" v-for="y in v4">
          <div
            style="
              width: 97%;
              margin-left: 4px;
              font-size: 15px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            "
          >
            干茶：{{ y.tea }}<br />
            口感：{{ y.taste }}<br />
            叶底：{{ y.bit }}<br />
            品质特点：{{ y.s }}<br />
            <br />
            天弘普洱茶介绍：{{ y.intro }}
            <br />
          </div>
        </div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab>
      <van-tab title="短评">
        <div class="vox5">
          <CircleComponent />
        </div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab>
      <van-tab title="资讯">
        <div class="vox6">
          <TeaArticleList />
        </div>

        <div style="width: 100%; height: 100px"></div>
      </van-tab>
    </van-tabs>

    <div class="gu">
      <van-goods-action>
        <van-goods-action-icon icon="home-o" @click="gotoPage('home')" text="首页" />
        <van-goods-action-button
          @click="gotoPage('productForm')"
          type="warning"
          text="我要出售"
        />
        <van-goods-action-button
          @click="gotoPage('productForm')"
          type="danger"
          text="我要求售"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

import Tabbar from "../../components/tabbar";
import TeaArticleList from "./components/teaArticleList.vue";
import CircleComponent from "./components/circleComents.vue";
import { getProductDetail } from "@/api/product";
export default {
  name: "product",
  components: { Tabbar, TeaArticleList, CircleComponent },
  data() {
    return {
      active: 5,
      title: "",
      brand: "",
      category: "",
      tea_year: "",
      v4: [
        {
          tea: "条索肥壮显毫",
          taste: "醇厚浓郁，回甘生津，喉韵绵延悠长",
          bit: "肥厚黄绿，实为普洱生茶的经典之作。",
          s: "刮风寨有“茶中皇后”的美誉，外形条索肥壮较长，新茶的饼面墨绿油润，显白毫。",
          intro:
            " 天弘茶业创立于2004年，是一家集生产，加工，销售于一体的高端普洱茶品牌商，公司坚守核心原产地，在勐海建有近百亩田园式茶工厂。创始人为中国普洱茶实践派代表人物李朝仲先生， 自品牌创立10多年一直礼根茶山，匠心制茶，对每款茶的品质有着痴迷的追求。",
        },
      ],
      tabss: [
        {
          brand: "天宏",
          art: "生茶",
          dif: "普洱茶 >>生茶",
          face: "饼茶",
          year: "2014",
          heave: "357g",
          standard: "357g/饼,28饼/件",
          mul: "刮风寨古树晒青毛茶",
          st: "--",
          time: "适宜长期储存",
          boss: "阚海天红茶叶有限公司",
        },
      ],
      imgg: [
        {
          srcc: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          srcc: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
        {
          srcc: "https://img01.yzcdn.cn/vant/cat.jpeg",
        },
      ],
      index: [
        {
          title: "参数",
        },
        {
          title: "报价",
        },
        {
          title: "简介",
        },
        {
          title: "短评",
        },
        {
          title: "资讯",
        },
      ],
      list: [
        {
          src:
            "https://assets.puercn.com/xsystem/daily/stories/covers/000/073/424/medium/4.jpg?1599791639",
          title: "1111",
        },
        {
          src:
            "https://assets.puercn.com/xsystem/daily/stories/covers/000/073/424/medium/4.jpg?1599791639",
          title: "1111",
        },
        {
          src:
            "https://assets.puercn.com/xsystem/daily/stories/covers/000/073/424/medium/4.jpg?1599791639",
          title: "1111",
        },
      ],
    };
  },
  methods: {
    gotoPage(urlName) {
      this.$router.push({ name: urlName });
    },
    onClickLeft() {
      console.log("???");
      history.back();
    },
  },
  async mounted() {
    console.log(this.$route.params.data)
    if (typeof this.$route.params.data !== "undefined") {
      localStorage.setItem("productdetail", JSON.stringify(this.$route.params.data))
    }
    this.state = JSON.parse(localStorage.getItem("productdetail")) || this.$route.params.data;
    let res = await getProductDetail({ id: this.state.id });
    this.items = res.data;
    this.title = this.state.title;
    this.category = this.state.category;
    this.brand = this.state.brand;
    this.tea_year = this.state.tea_year;
  }
};
</script>
<style>
.img1 {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.big {
  display: flex;
  position: relative;
  width: 96%;
  margin-left: 10px;
  margin-top: 9px;
}

.box2 {
  margin-left: 20px;
}

.box3 {
  margin-left: 130px;
  margin-top: 7px;
}

.l {
  margin-top: -1px;
}

.vox {
  margin-top: auto;
  margin-left: 5px;
}

.vox1 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  margin-left: 3px;
  width: 98%;
  height: 253px;
  border: 1px solid rgb(243, 243, 246);
}

.vox2 {
  display: flex;
  justify-content: space-between;
}

.vox3 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  margin-left: 3px;
  width: 98%;
  height: 253px;
  border: 1px solid rgb(243, 243, 246);
}

.vox4 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  margin-left: 3px;
  width: 98%;
  height: auto;
  border: 1px solid rgb(243, 243, 246);
}

.vox5 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  margin-left: 3px;
  width: 98%;
  height: auto;
  border: 1px solid rgb(243, 243, 246);
}

.vox6 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  margin-left: 3px;
  width: 98%;
  height: auto;
  border: 1px solid rgb(243, 243, 246);
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 270px;
}

.p1 {
  color: #b83b17;
  font-size: 20px;
}

.l {
  margin-top: -1px;
}

.r {
  color: white;
}

.body {
  width: 100%;
  line-height: 0.7rem;
  letter-spacing: 0rem;
  /* color: #252525; */
  background: #fff;
}

.imgr {
  border-radius: 25px;
  width: 28px;
  margin-top: 10px;
}

input {
  margin-left: 5px;
  border-radius: 25px;
  margin-bottom: -10px;
  width: 200px;
  height: 30px;
  border: 1px solid #778899;
}

.gu {
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 43px;
  line-height: 43px;
}
</style>
