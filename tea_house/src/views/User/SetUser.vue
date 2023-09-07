<template>
  <div>
    <van-nav-bar title="" left-text="">
      <template #left>
        <span class="r" @click="onClickLeft" style="font-size: 17px"> 取消</span>
      </template>
      <template #right>
        <span> <van-button type="primary">保存</van-button> </span>
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
      <span style="font-size: 18px">u537949</span>
      <van-divider class="l" />
      <span style="font-size: 14px">简介</span><br /><br />
      <textarea class="text"></textarea>
      <van-divider class="l" />
      <span style="font-size: 14px">最多80字，不支持换行<br /><br />所在</span
      ><br /><br />
      <textarea class="text1"></textarea>
      <van-divider class="l" />
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
    };
  },
  methods: {
    onClickLeft() {
      history.back();
    },
  }
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
  