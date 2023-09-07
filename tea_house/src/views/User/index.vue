<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-03 22:18:37
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-05 10:16:39
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
    <div class="userInformation">
      <div class="userEnter">
        <div class="userInt">
          <!-- <a class="empty" href="#"> -->
          <a class="empty" @click="gotoPage('userDetail')">
            <div class="userIcon">
              <img
                alt="u324234-1"
                src="https://assets.puercn.com/v3assets/avatars/m4.png"
              />
            </div>
            <p>u324234-1</p>
            <span>个人主页</span>
          </a>
        </div>
        <div class="introList">
          <ul>
            <li>
              <a href="#">
                <p>0</p>
                <span>文章</span>
              </a>
            </li>
            <li>
              <a href="#">
                <p>0</p>
                <span>评测</span>
              </a>
            </li>
            <li>
              <a href="#">
                <p>0</p>
                <span>评论</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 展示图标的单元格 -->
    <!-- <div class="Enterlist">
      <van-cell-group>
        <van-cell class="list" icon="https://assets.puercn.com/v3assets/v2/logo-46139d255448a6e7eed8ab315285c0cf25a4d44ec23f2255197fc533d6b6b963.png" title="积分" value="5" label="" />
        <van-cell class="list" title="我的茶友号" value="0" is-link to="index" />
        <van-cell class="list" title="文章" value="0" is-link to="index" />
        <van-cell class="list" title="评测" value="0" is-link to="index" />
        <van-cell class="list" title="供求信息" value="0" is-link to="index" />
      </van-cell-group>
    </div> -->
    <div class="enterList">
      <ul>
        <li>
          <a class="empty">
            <i class="icon icon_code"></i>
            <p>积分</p>
            <span>5</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon icon_teaaccount"></i>
            <p>我的茶友号</p>
            <span class="count">0</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon icon_article"></i>
            <p>文章</p>
            <span class="count">0</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon icon_test"></i>
            <p>评测</p>
            <span class="count">0</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon icon_see"></i>
            <p>供求信息</p>
            <span class="count">0</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 退出登录 -->
    <div class="setList">
      <div class="signOut">
        <van-button class="btn" round type="">退出登录</van-button>
      </div>
    </div>
    <!-- 导航栏 -->
    <Tabbar> </Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
export default {
  name: "user",
  components: { Tabbar },
  data() {
    return {};
  },
  methods: {
    gotoPage() {
      this.$router.push({ path: "/userDetail" });
    },
  },
};
</script>

<style scoped>
.head_color {
  overflow: hidden;
  background-color: rgb(244, 238, 238);
}
.DcdHeader {
  display: flex;
  align-items: center;
  padding: 2px 12px 0 12px;
  background-color: #fff;
  width: 375.33px;
  height: 41.27px;
}
.DcdHeader_img img {
  width: 104.5px;
  height: 21.27px;
}
.userInformation {
  display: block;
  padding: 0.32rem 0;
  border-bottom: 0.2rem solid #f5f5f5;
  width: 375.33px;
  height: 132.17px;
  background-color: #fff;
  margin-top: 10px;
}
.userInt {
  overflow: hidden;
  line-height: 1.08rem;
  padding: 0 0.25rem 0.32rem 0.48rem;
  width: 375.33px;
  height: 120.17px;
}
.userInt {
  width: 375.33px;
  height: 70px;
}
.userInt a .empty {
  display: block;
  overflow: hidden;
  width: 338.83px;
  height: 70px;
}
a:link {
  text-decoration: none;
}
.userIcon {
  float: left;
  width: 1.08rem;
  box-sizing: border-box;
  border: 1px solid #2eebd6;
  border-radius: 50%;
  height: 1.08rem;
  overflow: hidden;
  width: 52px;
  height: 52px;
}
.userIcon img {
  width: 100%;
  display: block;
}
.userInt p {
  float: left;
  margin-left: 0.16rem;
  color: #333333;
  font-size: 0.46rem;
  width: 84px;
  height: 30px;
  line-height: 1.1rem;
  display: block;
  margin-bottom: 10px;
}
.userInt .empty span {
  display: block;
  background: url(https://assets.puercn.com/v3assets/h5/icon19-fe2083f0d0073e6620f14c5c8a13dabf49039ead1e4e26b6fecdd129936869e7.png)
    right center no-repeat;
  background-size: 0.24rem auto;
  padding-right: 0.3rem;
  margin-top: 5px;
  margin-right: 20px;
  float: right;
  color: #999999;
  font-size: 0.38rem;
  width: 68.5px;
  height: 54px;
  line-height: 55px;
}
.introList {
  width: 375.33px;
  height: 50.17px;
}
.introList ul {
  width: 351.33px;
  height: 50.17px;
  float: left;
}
.introList ul li {
  text-align: center;
  float: left;
  position: relative;
  width: 25%;
  box-sizing: border-box;
  border-right: 1px solid #ebebeb;
  bottom: 20px;
}
.introList ul li p {
  font-family: din;
  color: #333333;
  font-size: 0.66rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0.2rem;
  /* width: 83.83px;
    height: 26px; */
}
.introList ul li span {
  color: #999999;
  font-size: 0.38rem;
  line-height: 1;
  width: 28px;
  height: 18px;
}
.setList {
  width: 375.33px;
  height: 45px;
  background-color: #fff;
}
.btn {
  top: 100px;
  margin-left: 40px;
  width: 303px;
  height: 45px;
  background-color: #2eebd6;
  border: none;
  text-align: center;
  font-size: 20px;
}
.signOut .btn {
  line-height: 45px;
  color: #fff;
}
.enterList {
  width: 375.33px;
  height: 279px;
  background-color: #fff;
}
.enterList li {
  width: 351.33px;
  height: 56px;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
  line-height: 1.1rem;
  display: list-item;
  text-align: -webkit-match-parent;
}
.enterList li a.empty {
  background-image: none;
}
.enterList li a {
  padding-right: 0.25rem;
  background: url(https://assets.puercn.com/v3assets/h5/icon19-fe2083f….png)
    right center no-repeat;
  background-size: 0.24rem auto;
}
.enterList li a {
  display: block;
  overflow: hidden;
}
.enterList ul {
  padding: 0 10px;
  list-style: none;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
}
.enterList li i {
  width: 20px;
  height: 55px;
  display: block;
  width: 0.4rem;
  float: left;
  height: 1.1rem;
  margin-left: 0.2rem;
  font-style: normal;
}
.enterList li i.icon_code {
  width: 20px;
  height: 55px;
  background: url(https://assets.puercn.com/v3assets/h5/icon27-e068eb3c96a74bdbebd00455d9e8a7b883fe1f86ca5420e4d3a93ae84146cade.png)
    center no-repeat;
  background-size: 100% auto;
}
.enterList li .count {
  display: block;
  background: url(https://assets.puercn.com/v3assets/h5/icon19-fe2083f0d0073e6620f14c5c8a13dabf49039ead1e4e26b6fecdd129936869e7.png)
    right center no-repeat;
  background-size: 0.24rem auto;
  padding-right: 0.3rem;
  margin-left: 30px;
  float: right;
  color: #999999;
}
.enterList li i.icon_teaaccount {
  width: 20px;
  height: 55px;
  background: url(https://assets.puercn.com/v3assets/h5/icon29-c6463aee4492668ec1c56919897b2e69be4e09ecdc411c730b18986c2fa7a86d.png)
    center no-repeat;
  background-size: 100% auto;
}
.enterList li i.icon_article {
  width: 20px;
  height: 55px;
  background: url(https://assets.puercn.com/v3assets/h5/icon25-a573929f2c54ecb657d1865a303ed6616dc61f2a891f4a2ef865851b0477186c.png)
    center no-repeat;
  background-size: 100% auto;
}
.enterList li i.icon_test {
  width: 20px;
  height: 55px;
  background: url(https://assets.puercn.com/v3assets/h5/icon24-23e623143f97896894062301ddcd679f682ee8cb98a778b35d81e760ff0b8271.png)
    center no-repeat;
  background-size: 100% auto;
}
.enterList li i.icon_see {
  width: 20px;
  height: 55px;
  background: url(https://assets.puercn.com/v3assets/h5/icon26-1fcd5711f024cd00958a86f244019c8124ff09a44b6c1297edc8222cc20c4927.png)
    center no-repeat;
  background-size: 100% auto;
}
.enterList li p {
  float: left;
  color: #333333;
  font-size: 0.38rem;
  line-height: 0.8rem;
  margin-left: 10px;
}
.enterList li span {
  float: right;
  color: #999999;
  font-size: 0.38rem;
  width: 8.22px;
  height: 54.67px;
  line-height: 54.67px;
  /* text-align: center; */
}
/* .DcdHeader_button {
    width: 26%;
    height: 25px;
    background-color: #b83b17;
    font-size: 10px;
} */
</style>
