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
      <h2>韶关乐昌：小小茶叶变身农民致富“黄金叶”</h2>
    </div>
    <div class="time">
      <span style="margin-left: 5px">
        2023-09-05 09:28 <br />
        编辑：一抹阳光
      </span>
    </div>
    <div class="p1">
      <img
        class="img1"
        :src="img"
      />
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
export default {
  name: "product",
  components: { Tabbar },
  data() {
    return {
      active: 3,
      img: "https://oss.puercn.com/fit/800/800/we/0/chayou/entry_photos/000/986/109/3.jpg",
      content: `<p>
        乐昌地处南岭山脉南麓，海拔高、水资源丰富、昼夜温差大，独特地势和特殊气候环境，让乐昌处处都是茶树生长的天然福地。
        近年来，乐昌市高度重视茶产业发展，印发实施茶叶产业发展和奖补方案，对新建乐昌白毛茶茶园、
        新建茶叶精深加工厂购置的设施设备和现有茶叶加工厂进行技术、设备改造升级的茶园、茶企给予奖补，
        通过技术资金支持、制定准入标准、老茶园改造等，提高茶园智能化、机械化水平，促进乐昌茶叶产业实现规范化发展。
        据统计，自茶叶产业发展和奖补方案实施以来，全市为茶园、茶企发放奖励金共计124万元。
      </p>
      <p>
        2021年，乐昌市成立茶叶协会，实现从茶园管理到加工制茶，再到推广营销和品牌打造，
        擦亮了“乐昌白毛茶”金字招牌，乐昌已被认定为“沿溪山白毛尖”广东省特色农产品优势区。
        2023年，乐昌市举办茶文化节系列活动，乐昌白毛茶区域公用品牌LOGO亮相广州、
        乐昌市人民政府与广东省农业科学院茶叶研究所签署茶产业高质量发展合作框架协议，
        借力广东省农业科学院茶叶研究所力量，提升“乐昌白毛茶”历史名茶工艺和品质特征，助力乐昌茶叶产业高质量发展。
      </p>
      <p>
        如今，小小的茶叶已成为这片沃土上农民们的“黄金叶”，成为农民增收致富的绿色产业，
        成为乐昌市全面推进乡村振兴、促进区域协调发展的重要产业，乐昌茶产业已逐渐呈现出一二三产业融合发展态势。
      </p>
      <p>文/羊城晚报全媒体记者 李泽宇 通讯员 方朋帮 曾长 陈艺</p>
      <p>来源 | 羊城晚报·羊城派</p>
      <p>信息贵在分享，如涉及版权问题请联系删除</p>`,
    };
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    goToPage(path) {
      this.$router.push({ name: path });
    },
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
  width: 98%;
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
