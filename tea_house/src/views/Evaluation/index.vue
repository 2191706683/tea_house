<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-03 22:18:37
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-10 18:36:51
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
      <a class="searchbtn" type="button" href="#"></a>
    </div>
    <!-- 评测选项 -->
    <div class="Rep">
      <div class="filters">
        <a href="#" class="nav-center"> 评测中心 </a>
        <a href="#" class="nav-report">评测报告</a>
        <a href="#" class="nav-my">我的</a>
      </div>
    </div>
    <!-- 图片 -->
    <div class="testbanner">
      <img
        src="https://assets.puercn.com/v3assets/h5/tpic-2f905d68817dbfee3e9aaa90298bae3e970a63660d4433ee1d54724e50da22e4.png"
        alt=""
      />
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 筛选 -->
      <div class="content-top">
        <div class="filters">
          <a href="#" class="nav-centers"> 正在进行 </a>
          <a href="#" class="nav-reports">即将开始</a>
          <a href="#" class="nav-mys">申请结束</a>
        </div>
      </div>
      <div class="divider"></div>
      <!-- 茶叶品种 -->
      <div class="content-main">
        <ul class="item-scroll" v-for="(item, index) in items" :key="index">
          <li class="item">
            <div class="iteminfo">
              <!-- 图片 -->
              <div class="testimg">
                <img :src="item.image" :alt="item.title" />
              </div>

              <!-- 介绍 -->
              <div class="testintroduce">
                <p>
                  <a href="#">{{ item.title }}</a>
                </p>
                <span>
                  <img :src="item.tea_one" :alt="item.tea_two" />
                  {{ item.tea_two }}
                </span>
                <i class="online">正在进行</i>
              </div>
              <!-- 规格 -->
              <div class="testproduce">
                <p>
                  规格:<span>{{ item.intro_one }}</span>
                </p>
                <p>
                  发放量:<span>{{ item.intro_two }}</span>
                </p>
                <p>
                  市价:<span>{{ item.intro_three }}</span>
                </p>
                <p>
                  已申请:<span>{{ item.intro_four }}</span>
                </p>
              </div>
            </div>
            <!-- 时间 -->
            <div class="itemtime">
              <span>{{ item.stime }}</span>
              <span class="endtime">{{ item.etime }}</span>
            </div>
            <div class="divider"></div>
            <div class="applyfree">
              <a class="apply" href="#">免费申请</a>
            </div>
            <div class="divider"></div>
          </li>
        </ul>
      </div>
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
            "https://assets.puercn.com/xsystem/photos/images/000/126/650/thumb/img-20230810-160314-1.jpg?1691736378",
          title: "2023年六大茶山 二十四节气 · 立夏 邦崴 生茶 300克",
          tea_one:
            "https://assets.puercn.com/xsystem/brands/logos/000/000/190/thumb/22bai.jpg?1603440805",
          tea_two: "六大茶山",
          intro_one: "300克/饼",
          intro_two: "1份",
          intro_three: "0.00元",
          intro_four: "102人",
          stime: "09.04 - 09.05",
          etime: "还剩9小时结束",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/650/thumb/img-20230810-160314-1.jpg?1691736378",
          title: "2023年六大茶山 二十四节气 · 立夏 邦崴 生茶 300克",
          tea_one:
            "https://assets.puercn.com/xsystem/brands/logos/000/000/190/thumb/22bai.jpg?1603440805",
          tea_two: "六大茶山",
          intro_one: "300克/饼",
          intro_two: "1份",
          intro_three: "0.00元",
          intro_four: "102人",
          stime: "09.04 - 09.05",
          etime: "还剩9小时结束",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/650/thumb/img-20230810-160314-1.jpg?1691736378",
          title: "2023年六大茶山 二十四节气 · 立夏 邦崴 生茶 300克",
          tea_one:
            "https://assets.puercn.com/xsystem/brands/logos/000/000/190/thumb/22bai.jpg?1603440805",
          tea_two: "六大茶山",
          intro_one: "300克/饼",
          intro_two: "1份",
          intro_three: "0.00元",
          intro_four: "102人",
          stime: "09.04 - 09.05",
          etime: "还剩9小时结束",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/650/thumb/img-20230810-160314-1.jpg?1691736378",
          title: "2023年六大茶山 二十四节气 · 立夏 邦崴 生茶 300克",
          tea_one:
            "https://assets.puercn.com/xsystem/brands/logos/000/000/190/thumb/22bai.jpg?1603440805",
          tea_two: "六大茶山",
          intro_one: "300克/饼",
          intro_two: "1份",
          intro_three: "0.00元",
          intro_four: "102人",
          stime: "09.04 - 09.05",
          etime: "还剩9小时结束",
        },
        {
          image:
            "https://assets.puercn.com/xsystem/photos/images/000/126/650/thumb/img-20230810-160314-1.jpg?1691736378",
          title: "2023年六大茶山 二十四节气 · 立夏 邦崴 生茶 300克",
          tea_one:
            "https://assets.puercn.com/xsystem/brands/logos/000/000/190/thumb/22bai.jpg?1603440805",
          tea_two: "六大茶山",
          intro_one: "300克/饼",
          intro_two: "1份",
          intro_three: "0.00元",
          intro_four: "102人",
          stime: "09.04 - 09.05",
          etime: "还剩9小时结束",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.head_color {
  background-color: rgb(245, 245, 245);
}
.DcdHeader {
  display: flex;
  align-items: center;
  padding: 2px 12px 0 12px;
  background-color: #fff;
  /* width: 375.33px; */
  height: 41.27px;
  justify-content: space-between;
  /* border-bottom: 1px solid gray; */
}
.searchbtn {
  float: right;
  background: url(https://assets.puercn.com/v3assets/h5/searchBtn-c9847edce4dffed534cac9bdd6df0e87fbe7ba8380ff367b5e96d1308799246a.png)
    center no-repeat;
  width: 17px;
  height: 17px;
  background-size: 100%;
  /* margin-right: 100px; */
}
.DcdHeader_img img {
  width: 125px;
  height: 25px;
}
.Rep {
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 3px;
}
.filters {
  /* width: 100%; */
  height: 50px;
  outline: 1px solid #fff;
  /* background-color: yellow; */
  display: flex;
  margin-left: 15px;
}

.filters .nav-center,
.filters .nav-report,
.filters .nav-my {
  box-sizing: border-box;
  display: inline-block;
  /* width: 33.3%; */
  height: 50px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}
.filters a {
  margin-right: 0.32rem;
  /* float: left; */
  display: inline-block;
  color: #333333;
  font-size: 0.32rem;
  position: relative;
}
a.nav-center:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0.09rem;
  width: 0.64rem;
  height: 0.06rem;
  border-radius: 0.3rem;
  background: #2eebd6;
  margin-left: -0.32rem;
}
.testbanner {
  display: flex;
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin-top: 10px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
.testbanner img {
  border-radius: 10px;
  width: 95%;
  height: 70px;
  display: block;
}
.content {
  width: 100%;
  /* height: 50px; */
  background-color: #fff;
  margin-top: 10px;
}
.content-top {
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 10px;
}
.content-main {
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 10px;
}
.content-top .filters {
  /* width: 100%; */
  height: 50px;
  outline: 1px solid #fff;
  /* background-color: yellow; */
  display: flex;
  margin-left: 15px;
  align-items: center;
  justify-content: space-around;
}

.content-top .filters .nav-centers,
.content-top .filters .nav-reports,
.content-top .filters .nav-mys {
  box-sizing: border-box;
  display: inline-block;
  /* width: 33.3%; */
  height: 50px;
  background-color: #fff;
  font-size: 17px;
  text-align: center;
  line-height: 50px;
}
.content-top .filters a {
  margin-right: 0.32rem;
  /* float: left; */
  display: inline-block;
  color: #333333;
  font-size: 0.32rem;
  position: relative;
}
/* .content a.nav-center:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0.09rem;
  width: 0.64rem;
  height: 0.06rem;
  border-radius: 0.3rem;
  background: #2eebd6;
  margin-left: -0.32rem;
} */
.content a:hover {
  color: #2eebd6;
}
.divider {
  height: 1px;
  width: 96%;
  margin-left: 2%;
  background-color: rgb(234, 236, 240);
}
.iteminfo {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
}
.itemtime {
  height: 27px;
  text-align: right;
  padding-bottom: 0.16rem;
  border-bottom: 1px solid #dfe2e9;
}
.testimg {
  width: 27%;
  height: 100px;
  padding: 15px 5px 0 0;
}
.testintroduce {
  width: 42%;
  height: 120px;
  padding: 0 5px 0 10px;
  font-size: 14px;
}
.testintroduce a {
  height: 63px;
  color: #343a40;
}
.testintroduce span {
  height: 16px;
  font-size: 0.24rem;
  color: #333333;
}
.testproduce {
  width: 30%;
  height: 110px;
  padding: 0 5px 0 0;
  font-size: 12px;
}
.testproduce p {
  height: 16px;
  color: #999999;
  padding: 0 0 0 20px;
  margin-bottom: 0;
  margin-top: 10px;
}
.iteminfo .testimg img {
  width: 95px;
  height: 95px;
}

.content ul {
  padding: 0 0.24rem;
}
.cotent ul li {
  overflow: hidden;
  border-top: 1px solid #dfe2e9;
  padding-top: 0.23rem;
  margin-bottom: 0.16rem;
}
.testintroduce span img {
  margin-top: 1px;
  width: 14px;
}
.testintroduce i.online {
  width: 58px;
  height: 19px;
  line-height: 19px;
  color: #d70000;
  background: #fddada;
}
.testintroduce i {
  text-align: center;
  margin-top: 0.16rem;
  display: block;
  width: 1.16rem;
  height: 0.38rem;
  border-radius: 0.04rem;
  line-height: 0.38rem;
  font-size: 0.22rem;
  font-style: normal;
}
.itemtime span {
  height: 16px;
  margin-right: 10px;
  color: #666666;
  font-size: 12px;
}
.itemtime span.endtime {
  color: #d70000;
}
.itemtime span {
  margin-left: 0.16rem;
  color: #666666;
  font-size: 0.24rem;
}
.applyfree {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  /* background-color: red; */
}
.applyfree .apply {
  width: 100px;
  height: 30px;
  color: #fff;
  font-size: 16px;
  border-radius: 0.64rem;
  background: #2eebd6;
  text-align: center;
  line-height: 30px;
}
</style>
  