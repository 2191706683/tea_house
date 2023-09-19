<template>
  <div>
    <van-nav-bar title="" left-text="">
      <template #left>
        <span class="r" @click="onClickLeft" style="font-size: 17px"> 取消</span>
      </template>
      <template #right>
        <span> <van-button @click="saveButton" type="primary">保存</van-button> </span>
      </template>
    </van-nav-bar>
    <br />
    <div class="h">
      <van-image
        round
        width="1.5rem"
        height="1.5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      /><br /><br />
      <span style="font-size: 14px">昵称</span><br /><br />
      <span style="font-size: 18px">{{ nickname }}</span>
      <van-divider class="l" />
      <span style="font-size: 14px">简介</span><br /><br />
      <textarea v-model="introduction" class="text"></textarea>
      <van-divider class="l" />
      <span style="font-size: 14px">最多80字，不支持换行<br /><br />所在</span
      ><br /><br />
      <textarea v-model="address" class="text1"></textarea>
      <van-divider class="l" />
    </div>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import { putUserInfo } from "@/api/user";
import { Toast } from "vant";
export default {
  name: "product",
  components: { Tabbar },
  data() {
    return {
      active: 3,
      nickname: "",
      introduction: "",
      address: "",
    };
  },
  methods: {
    onClickLeft() {
      // history.back();
      this.$router.back();
    },
    async saveButton() {
      let res = await putUserInfo({ introduction: this.introduction, address: this.address });
      localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
      Toast.success(res.message)
      this.$router.back();
    },
  },
  mounted() {
    this.nickname = JSON.parse(localStorage.getItem("userInfo")).nickname;
  },
};
</script>
<style>
.h {
  margin: auto;

  width: 92%;
}
.l {
  margin-top: -1px;
}
.r {
  color: #07c160;
}
.van-button {
  height: 36px;
  border-radius: 6%;
}
.text {
  margin: auto;
  height: 100px;
  width: 100%;
  border: 0 solid white;
}
.text1 {
  margin: auto;
  height: 50px;
  width: 100%;
  border: 0 solid white;
}
</style>
