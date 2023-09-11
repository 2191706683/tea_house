<template>
  <div class="body">
    <van-nav-bar title="" left-text="" style="background-color: #b83b17">
      <template #left>
        <span class="r" style="font-size: 17px">
          <img
            width="22px"
            class="app-logo"
            src="https://assets.puercn.com/v3assets/v2/logo-46139d255448a6e7eed8ab315285c0cf25a4d44ec23f2255197fc533d6b6b963.png"
          />
          茶友网 | 荒野古树
        </span>
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
      <van-swipe-item
        ><img
          src="https://www.chawo.com/data/upload/shop/store/goods/2/2023/09/2_07473123931531274_360.jpg"
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://www.chawo.com/data/upload/shop/store/goods/2/2022/05/2_07053200564998948_360.jpg"
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://www.chawo.com/data/upload/shop/store/goods/2/2023/08/2_07463585912503560_360.jpg"
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://www.chawo.com/data/upload/shop/store/goods/2/2021/11/2_06904738526495324_360.jpg"
      /></van-swipe-item>
    </van-swipe>

    <div class="vox">
      <p class="p1">1280&nbsp;<span style="font-size: 6px">元/片</span></p>
      <p style="font-size: 18px; margin-top: -20px">2023年中茶 荒野古树 生茶 357克</p>
    </div>
    <van-divider class="l" />
    <van-tabs
      v-model="active"
      style="
        margin-top: -15px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      "
    >
      <van-divider class="l" />
      <van-tab title="参数">
        <div class="vox1">
          <div class="vox2">
            <div
              style="
                width: 50%;
                height: 52px;
                font-size: 14px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              "
            >
              品牌：天宏<br />
              工艺：生茶
            </div>
            <div
              style="
                width: 50%;
                height: 52px;
                font-size: 14px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              "
            >
              分类：普洱茶 >>生茶<br />
              外观：饼茶
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
            年份: 2014<br />
            净重: 357克<br />
            规格: 357克/饼 ,28饼/件<br />
            原料: 刮风寨古树晒青毛茶<br />
            标准: --<br />
            保质期: 适宜长期储存<br />
            厂家: 勐海天弘茶业有限公司<br />
          </div>
        </div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab>
      <van-tab title="报价">
        <div class="vox3"></div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab>
      <van-tab title="简介">
        <div class="vox4">
          <div
            style="
              width: 97%;
              margin-left: 4px;
              font-size: 14px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            "
          >
            2014年天弘 纯料易武刮风寨
            生茶采用易武刮风寨古树晒青毛茶为原料，海拔均于1600米以上，经机制石磨压制而成。<br />
            <br />
            干茶：条索肥壮显毫<br />
            口感：醇厚浓郁，回甘生津，喉韵绵延悠长<br />
            叶底：肥厚黄绿，实为普洱生茶的经典之作。<br />
            品质特点：刮风寨有“茶中皇后”的美誉，外形条索肥壮较长，新茶的饼面墨绿油润，显白毫。<br />
            <br />
            天弘普洱茶介绍：
            天弘茶业创立于2004年，是一家集生产，加工，销售于一体的高端普洱茶品牌商，公司坚守核心原产地，
            在勐海建有近百亩田园式茶工厂。创始人为中国普洱茶实践派代表人物李朝仲先生，
            自品牌创立10多年一直礼根茶山，匠心制茶，对每款茶的品质有着痴迷的追求。<br />
          </div>
        </div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab>
      <van-tab title="短评">
        <div class="vox5">
          <div class="big">
            <div class="box1">
              <img class="img1" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="box2">
              <h3 style="margin-top: 2px">
                人在草木<br /><span style="color: #f1811e; font-size: 3px">4.0 ★</span>
              </h3>
            </div>
            <div class="box3">
              <p>2023年9月10日</p>
            </div>
          </div>
          <p>
            2014年天弘
            纯料易武刮风寨，淡雅出尘，香扬水柔，茶汤粘稠饱满，水路细腻，留杯香明显而持久,汤色莹亮。一杯茶，细感香扬与水柔的完美结合。
          </p>
          <van-divider class="l" />
          <div class="big">
            <div class="box1">
              <img class="img1" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="box2">
              <h3 style="margin-top: 2px">
                人在草木<br /><span style="color: #f1811e; font-size: 3px">4.0 ★</span>
              </h3>
            </div>
            <div class="box3">
              <p>2023年9月10日</p>
            </div>
          </div>
          <p>
            2014年天弘
            纯料易武刮风寨，淡雅出尘，香扬水柔，茶汤粘稠饱满，水路细腻，留杯香明显而持久,汤色莹亮。一杯茶，细感香扬与水柔的完美结合。
          </p>

          <van-button
            round
            style="
              background-color: #b83b17;
              color: aliceblue;
              text-align: center;
              width: 96%;
              margin-left: 5px;
            "
            >圆形按钮</van-button
          >
        </div>
        <div style="width: 100%; height: 70px"></div>
      </van-tab>
      <van-tab title="资讯">
        <div class="vox6">
          <div class="item" v-for="i in list">
            <p style="margin-left: 5px; font-size: 15px">{{ i.title }}</p>
            <img style="width: 98%; margin-left: 3px" :src="i.src" />
            <van-divider class="l" />
          </div>
        </div>
        <div style="width: 100%; height: 100px"></div>
      </van-tab>
    </van-tabs>

    <div class="gu">
      <van-goods-action>
        <van-goods-action-icon icon="home-o" @click="gotoPage('home')" text="首页" />
        <!-- <van-goods-action-icon icon="user-o" text="经纪人" /> -->
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
export default {
  name: "product",
  components: { Tabbar },
  data() {
    return {
      active: 3,
      list: [
        {
          id: 1,
          src:
            "https://assets.puercn.com/xsystem/daily/stories/covers/000/073/424/medium/4.jpg?1599791639",
          title: "1111",
        },
        {
          id: 2,
          src:
            "https://assets.puercn.com/xsystem/daily/stories/covers/000/073/424/medium/4.jpg?1599791639",
          title: "1111",
        },
        {
          id: 3,
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
  },
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
  height: 420px;
  border: 1px solid rgb(243, 243, 246);
}

.vox5 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  margin-left: 3px;
  width: 98%;
  height: 450px;
  border: 1px solid rgb(243, 243, 246);
}

.vox6 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  margin-left: 3px;
  width: 98%;
  height: 850px;
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
