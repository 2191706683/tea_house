<template>
  <div class="product-evaluate">
    <div class="head_color">
      <!-- logo -->
      <div class="DcdHeader">
        <a class="DcdHeader_img" href="../Home/index.vue">
          <img
            src="https://assets.puercn.com/v3assets/chayou-logo-h5-95c55ad13b8f92f97c49c8d377f1121ee930400f263dcf95e01556e24438c60f.png"
          />
        </a>
        <a class="searchbtn" type="button" href="#"></a>
      </div>

      <van-tabs v-model="activeName" type="card">
        <van-tab
          title-style="font-size: 16px;"
          title="评测中心"
          @click="gotoPage()"
        >
          <div class="info">
            <!-- 卡片 -->
            <div class="info_top">
              <div class="info_img">
                <img :src="image" />
              </div>

              <div class="information">
                <p>{{ titles }}</p>
                <p>生产品牌:{{ official }}</p>
                <p>参考价: ¥{{ price }}</p>
                <p>试用数量: {{ amount }}份</p>
                <p>试用规格: {{ specification }}</p>
                <p>试用时间: {{ stime }} - {{ etime }}</p>
              </div>

              <div class="endtime">
                <p class="txt">还剩7天结束</p>
                <p>已申请：{{ applicants }}</p>
              </div>
            </div>

            <!-- 申请 -->
            <div class="info_btm">
              <div class="info_apply">
                <h2>申请条件</h2>
                <p>1、所有会员都可以免费申请，申请成功无需邮费</p>
                <p>2、申请成功需要提交真实原创的试用报告</p>
                <van-button v-if="token" class="btn" round type="">免费申请</van-button>
                <van-button v-else class="btn" @click="gotoPage('login')" round type="">立即登录</van-button>
              </div>
            </div>
          </div>

          <van-tabs v-model="active" scrollspy sticky class="van">
            <van-tab title="注意事项" class="van1">
              <h2>注意事项</h2>
              <ul>
                <li>派发的是完整的一份茶叶，不是茶样</li>
                <li>免费申请，试用过程无需支付任何费用</li>
                <li>申请成功，在活动结束三天内发货</li>
                <li>收到货后您须如实提价真实的试用报告</li>
                <li>
                  优秀报告可提升您的下一次申请成功几率，劣质报告将 被限制派茶
                </li>
                <li>试用任何疑问可联系微信： xxxxxxxxxxx</li>
              </ul>
            </van-tab>
            <van-tab title="品牌介绍" class="van2">
              <h2>品牌介绍</h2>
              <h2 class="tle">
                云南六大茶山茶业股份有限公司成立于2002年，总部位于云南省昆明市，
                并在凤庆合资、勐海投资了两个云南茶叶主产地建有完全符合食品生产标准的现代化茶厂，
                拥有贺开16200亩有机古茶原料基地及临沧岔河10000多亩有机茶园原料基地。公司年生产能力50000吨，
                获得国家有机食品认证，QS认证、食品出口卫生注册登记，ISO9001认证，HACCP食品安全管理体系认证等，
                并拥有1000多个销售网点。公司联系电话：400-8163-633。
              </h2>
            </van-tab>
            <van-tab title="产品介绍" class="van3">
              <h2>产品介绍</h2>
              <p>{{ titles }}</p>
              <p>生产品牌:{{ official }}</p>
              <p>参考价: ¥{{ price }}</p>
              <p>试用数量: {{ amount }}份</p>
              <img :src="image" alt="">
            </van-tab>
          </van-tabs>
        </van-tab>

        <van-tab title-style="font-size: 16px;" title="评测报告"
          >内容 2</van-tab
        >
        <van-tab title-style="font-size: 16px;" title="我的">内容 3</van-tab>
      </van-tabs>

      <!-- 导航栏 -->
      <Tabbar> </Tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import { evaluate } from "../../api/user";
export default {
  name: "product",
  components: { Tabbar },
  data() {
    return {
      token: "",
      active: 0,
      activeName: 0,
      image: "",
      titles: "",
      official: "",
      specification: "",
      amount: "",
      stime: "",
      etime: "",
      price: "",
      applicants: ""
    };
  },
  methods: {
    gotoPage(urlName, item) {
      // console.log(item, '12312');
      this.$router.push({ name: urlName, params: { data: item } });
    },
  },
  async mounted() {
    if (typeof this.$route.params.data !== "undefined") {
      localStorage.setItem("evaluate", JSON.stringify(this.$route.params.data));
    }
    this.state =
      JSON.parse(localStorage.getItem("evaluate")) || this.$route.params.data;
    let res = await evaluate({ id: this.state.id });
    // this.userData = res.data;
    // console.log(res.data);
    this.titles = this.state.title;
    this.price = this.state.market_price;
    this.image = this.state.image;
    this.amount = this.state.amount;
    this.stime = this.state.start_time;
    this.etime = this.state.end_time;
    this.applicants = this.state.applicants;
    this.official = this.state.official;
    this.specification = this.state.specification;
    this.manufacturer = this.state.manufacturer;
    this.suttle = this.state.suttle;
    this.classify = this.state.classify;
    this.appearance = this.state.appearance;
    // console.log(this.state)
    this.token = localStorage.getItem('token');
    // console.log(this.token)
  },
};
</script>

<style scoped>
.product-evaluate {
  overflow-x: hidden;
  height: 99vh;
  margin-bottom: 15%;
}
.head_color {
  background-color: rgb(245, 245, 245);
}
.DcdHeader {
  display: flex;
  align-items: center;
  padding: 2px 12px 0 12px;
  background-color: #fff;
  height: 41.27px;
  justify-content: space-between;
}
.searchbtn {
  float: right;
  background: url(https://assets.puercn.com/v3assets/h5/searchBtn-c9847edce4dffed534cac9bdd6df0e87fbe7ba8380ff367b5e96d1308799246a.png)
    center no-repeat;
  width: 17px;
  height: 17px;
  background-size: 100%;
}
.DcdHeader_img img {
  width: 125px;
  height: 25px;
}
.info {
  height: 395px;
  background-color: #fff;
  /* background-color: #697950; */
}

.info .info_top {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  width: 94%;
  height: 220px;
  border: 1px solid grey;
  border-radius: 10px;
  /* background-color: #5ba458; */
  padding-top: 12px;
  padding-left: 10px;
  margin-left: 1.2%;
  box-shadow: gray;
  margin-top: 10px;
}

.info .info_top img {
  width: 140px;
  height: 140px;
}

.info .info_top .information {
  width: 50%;
  height: 142px;
  /* background-color: aqua; */
  margin-left: 10px;
}

.info .info_top .information p {
  font-size: 12px;
  line-height: 15px;
  margin-top: 1px;
  margin-bottom: 5px;
}

.info .info_top .endtime .txt {
  color: #28a745;
  font-size: 14px;
}

.info .info_top .endtime p {
  font-size: 14px;
}

.info .info_btm {
  height: 145px;
  /* background-color: #5a5ca3; */
}
.info .info_btm .info_apply {
  margin-left: 2%;
}
.btn {
  width: 90%;
  height: 45px;
  background-color: #2eebd6;
  border: none;
  font-size: 20px;
  line-height: 45px;
  color: #fff;
  margin-left: 3.5%;
}

.van{
  background-color: #fff;
}

.van .van1, .van .van2, .van .van3{
  margin-left: 3%;
}
.van .van1 li{
  margin-top: 10px;
  margin-bottom: 10px;
}
.van .van2 .tle{
  padding-right: 10px;
  color: gray;
}
div.navbar{
  background-color: #fff;
}
</style>
