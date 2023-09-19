<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-03 22:18:37
 * @LastEditors: tianxianning 1519309240@qq.com
 * @LastEditTime: 2023-09-19 11:27:43
 * @FilePath: \shengchanshixi\tea_house\src\views\User\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="head_color">
    <!-- logo -->
    <div class="DcdHeader">
      <a class="DcdHeader_img" href="../Home/index.vue">
        <img
          src="https://assets.puercn.com/v3assets/chayou-logo-h5-95c55ad13b8f92f97c49c8d377f1121ee930400f263dcf95e01556e24438c60f.png"
        />
      </a>
    </div>
    <!-- 个人信息 -->
    <div class="information">
      <!-- 上 -->
      <div class="info_top" @click="gotoPage('userDetail')">
        <div class="img">
          <img :src="userInfo.avatar" alt="" />
        </div>

        <div class="uid">
          <p class="nick">{{ userInfo.nickname }}</p>
        </div>

        <div class="zhuye">
          <span>个人主页</span>
          <img
            src="https://assets.puercn.com/v3assets/h5/icon19-fe2083f0d0073e6620f14c5c8a13dabf49039ead1e4e26b6fecdd129936869e7.png"
            alt=""
          />
        </div>
      </div>
      <!-- 下 -->
      <div class="info_btm">
        <ul>
          <li @click="gotoPage('userkong', '文章')">
            <a href="#">
              <p>0</p>
              <!-- <p>0</p> -->
              <span>文章</span>
            </a>
          </li>
          <li @click="gotoPage('userkong', '评测')">
            <a href="#">
              <p>0</p>

              <span>评测</span>
            </a>
          </li>
          <li @click="gotoPage('userkong', '评论')">
            <a href="#">
              <p>0</p>
              <!-- <p>0</p> -->
              <span>评论</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 列表 -->
    <div class="list">
      <van-cell title="积分" :icon="jifen" :value="userData.integral" />
      <van-cell
        title="我的茶友号"
        :icon="chayouhao"
        :value="userData.tea_friends"
        @click="gotoPage('userkong', '我的茶友号')"
        is-link
      />
      <van-cell
        @click="gotoPage('userkong', '文章')"
        title="文章"
        :icon="wenzhang"
        :value="userData.article"
        is-link
      />
      <van-cell
        @click="gotoPage('userkong', '评测')"
        title="评测"
        :icon="pingce"
        :value="userData.evaluate"
        is-link
      />
      <van-cell
        @click="gotoPage('userkong', '供求信息')"
        title="供求信息"
        :icon="gongqiu"
        :value="userData.supply"
        is-link
      />
    </div>

    <div class="setList">
      <div class="signOut">
        <van-button class="btn" round type="" @click="loginOut">退出登录</van-button>
      </div>
    </div>
    <!-- 导航栏 -->
    <Tabbar> </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";

import { test } from "../../api/user";
// import axios from "axios";
export default {
  name: "user",
  components: { Tabbar },
  data() {
    return {
      userInfo: {},
      jifen:
        "https://assets.puercn.com/v3assets/h5/icon27-e068eb3c96a74bdbebd00455d9e8a7b883fe1f86ca5420e4d3a93ae84146cade.png",
      pingce:
        "https://assets.puercn.com/v3assets/h5/icon24-23e623143f97896894062301ddcd679f682ee8cb98a778b35d81e760ff0b8271.png",
      chayouhao:
        "https://assets.puercn.com/v3assets/h5/icon29-c6463aee4492668ec1c56919897b2e69be4e09ecdc411c730b18986c2fa7a86d.png",
      wenzhang:
        "https://assets.puercn.com/v3assets/h5/icon25-a573929f2c54ecb657d1865a303ed6616dc61f2a891f4a2ef865851b0477186c.png",
      gongqiu:
        "https://assets.puercn.com/v3assets/h5/icon26-1fcd5711f024cd00958a86f244019c8124ff09a44b6c1297edc8222cc20c4927.png",

      userData: [],
    };
  },
  methods: {
    loginOut() {
      localStorage.removeItem("token");
      location.reload();
    },
    gotoPage(urlName, item) {
      console.log(item, "12312");
      this.$router.push({ name: urlName, params: { data: item } });
    },
  },
  async mounted() {
    // let res = await test();

    // let arr = res.data[1];

    // this.userData = arr;

    // console.log(this.userData, "用户数据");

    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  },
};
</script>

<style scoped>
.head_color {
  overflow: hidden;
  background-color: rgb(245, 245, 245);
}
.DcdHeader {
  display: flex;
  align-items: center;
  padding: 2px 12px 0 12px;
  background-color: #fff;
  height: 41.27px;
}
.DcdHeader_img img {
  height: 21.27px;
}
.information {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  height: 170px;
  flex-direction: column;
  background-color: #fff;
}
.info_top {
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
}
.info_top .img {
  margin-left: 20px;
  width: 20%;
}
.info_top .img img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid #2eebd6;
}
.info_top .uid {
  width: 100%;
  height: 54px;
  margin-left: 15px;
}
.info_top .uid .nick {
  font-size: 18px;
}
.info_top .zhuye {
  display: flex;
  width: 50%;
  margin-left: 5%;
}

.info_top .zhuye span {
  font-size: 16px;
  color: #999999;
}
.info_top .zhuye img {
  width: 15px;
  height: 15px;
  margin-top: 4px;
}
.info_btm {
  width: 100%;
  height: 80px;
}
.info_btm ul {
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  margin-left: 20px;
}
.info_btm ul li {
  display: flex;
  width: 20%;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-right: 1px solid gray;
}
.info_btm ul li p {
  height: 20px;
  color: #333333;
  font-size: 26px;
  font-weight: bold;
  margin-left: 8px;
}
.info_btm ul li span {
  color: #999999;
  font-size: 14px;
}
.list {
  background-color: #fff;
}
.list .van-cell {
  height: 55px;
  font-size: 14px;
}
.list .van-cell__left-icon {
  font-size: 20px;
  margin-top: 2px;
}
.setList {
  height: 45px;
  background-color: #fff;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50px;
  width: 303px;
  height: 45px;
  background-color: #2eebd6;
  border: none;
  font-size: 20px;
  line-height: 45px;
  color: #fff;
}
.signOut {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
