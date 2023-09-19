<template>
  <div>
    <Navbar title="" iconName="setting-o"/>
    <div style="margin-top: 40px"></div>
    <br />
    <div class="h">
      <van-image
        round
        width="1.5rem"
        height="1.5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <h2>{{ userInfo.nickname}}</h2>
      <div>{{userInfo.introduction}}</div>
      <van-row type="">
        {{userInfo.address}} <van-icon name="calendar-o" /> 2023-09-03 加入<br />
        0 关注 0 粉丝
      </van-row>
    </div>

    <van-tabs v-model="active">
      <van-divider class="l" />
      <van-tab title="茶友圈">茶友圈</van-tab>
      <van-tab title="评论">评论</van-tab>
      <van-tab title="短评">短评</van-tab>
      <van-tab title="测评">测评</van-tab>
      <van-tab title="文章">文章</van-tab>
    </van-tabs>

  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "product",
  components: { Tabbar, Navbar },
  data() {
    return {
      active: 3,
      userInfo: {}
    };
  },
  methods: {
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }
};
</script>
<style>
.h {
  margin-left: 20px;
}
.l {
  margin-top: -1px;
}
</style>

