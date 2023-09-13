<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <br />
    <div class="h">
      <div class="big">
        <div class="box1">
          <img class="img1" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="box2">
          <h2 style="margin-top: 5px">人在草木</h2>
          <span style="color: #778899; font-size: 3px; font-family: 微软幼黑；"
            >1天前</span
          >
        </div>
        <div class="box3">
          <button>关注</button>
        </div>
      </div>
      <div class="p1">
        <p>李白当年诗换酒，斗酒百篇也不愁。吾今穷酸文求茶，一篇一茶熬白头。</p>
      </div>

      <div class="box5">
        <div v-for="item in 3" class="items">
          <img
            class="img2"
            src="https://oss.puercn.com/fill/300/300/chayou/topic_photos/000/986/633/original/7cdf209b3da1bd90c29ea25c7918fced.jpg"
          />
        </div>
      </div>
      <p style="font-size: 15px">22条回复</p>
    </div>
    <hr />
    <CircleComents />
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import CircleComents from "./components/circleComents.vue";
export default {
  name: "product",
  components: { Tabbar, CircleComents },
  data() {
    return {
      active: 3,
    };
  },
  methods: {
    onClickLeft() {
      console.log("???");
      history.back();
    },
  },
};
</script>
<style>
.box5 {
  width: 90%;
  height: 90%;
  border: 10px solid white;
  display: flex;
  justify-content: space-evenly;
}
.items {
  width: 97px;
  height: 110px;
  border: 1px solid white;
}
.img2 {
  width: 97px;
  height: 110px;
  border: 1px solid white;
}
p {
  margin-left: 3px;
  box-sizing: border-box;
  line-height: 0.7rem;
  letter-spacing: 0rem;
}
.p1 {
  margin: 3px;
  width: 96%;
  font-size: 15px;

  font-family: 微软幼黑;
}
.h {
  margin-left: 20px;
}
.l {
  margin-top: -1px;
}
.img1 {
  width: 60px;
  height: 60px;
  border-radius: 25px;
}
.big {
  display: flex;
  position: relative;
}

.box2 {
  margin-left: 20px;
}
.box3 {
  margin-left: 120px;
  margin-top: 10px;
}
button {
  border-radius: 25px;
  width: 56px;
  height: 32px;
  border: 1px solid green;
  color: green;
  background-color: white;
}
</style>
