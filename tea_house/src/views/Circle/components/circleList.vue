<template>
  <div>
    <div
      v-for="(item, index) in circleList"
      :key="index"
      class="circleList"
      @click="gotoPage('circleDetail', item)"
    >
      <span class="circleList_left"
        ><van-image width="50" height="50" round :src="item.avatar"
      /></span>
      <span class="circleList_right">
        <div>
          <span class="userName">{{ item.nickname }} </span>
          <span style="color: #727272"> {{ item.circle_type }} · {{ item.circle_time }}小时前</span>
        </div>
        <div class="circle_title">{{ item.circle_content }}</div>
        <div class="circleList_img">
          <van-image
            style="padding: 4px 0;"
            v-for="(img, index) in item.circle_img"
            width="84"
            height="84"
            :src="img"
          />
        </div>
        <div class="circle_bottom">
          <span><van-icon name="chat-o" />{{ item.comments }}</span>
          <span>最后回复于{{ item.last_comments }}分钟前</span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { getCircleList } from "@/api/circle.js"
export default {
  name: "tabbar",
  data() {
    return {
      // circleList: [
      //   {
      //     id: "1",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_type: "随手拍",
      //     circle_time: 4,
      //     circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
      //     comments: 8,
      //     last_comments: 20,
      //   },
      //   {
      //     id: "2",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_type: "随手拍",
      //     circle_time: 4,
      //     circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
      //     comments: 8,
      //     last_comments: 20,
      //   },
      //   {
      //     id: "3",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_type: "随手拍",
      //     circle_time: 4,
      //     circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
      //     comments: 8,
      //     last_comments: 20,
      //   },
      // ],
      circleList: []
    };
  },
  methods: {
    gotoPage(urlName, item) {
      this.$router.push({ name: urlName, params: {data: item} });
    },
  },
  async mounted() {
    let res = await getCircleList();
    // console.log(res.data, 304)
    this.circleList = res.data
  }
};
</script>
<style>
.circleList {
  display: flex;
  padding: 20px 16px;
  border-bottom: 0.5px solid #e3dcdc;
  border-top: 0.5px solid #e3dcdc;
}
.circleList_left {
  width: 20%;
}
.circleList_right {
  width: 80%;
}
.circleList_img {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
}
.userName {
  font-size: 16px;
  color: #484848;
}
.circle_title {
  height: auto;
  padding: 10px 0;
  /* line-height: 50px; */
  font-size: 16px;
}
.circle_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 54%;
  height: 40px;
  line-height: 40px;
}
</style>
