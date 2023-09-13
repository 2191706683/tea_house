<template>
  <div>
    <div
      v-for="(item, index) in circleList"
      :key="index"
      class="circleList"
      @click="gotoPage('circleDetail')"
    >
      <span class="circleList_left"
        ><van-image width="30" height="30" round :src="item.avatar"
      /></span>
      <span class="circleList_right">
        <div>
          <span class="userName">{{ item.nickname }} </span>
          <span style="color: #727272">
            {{ item.circle_type }} · {{ item.circle_time }}小时前</span
          >
        </div>
        <div class="circle_title">{{ item.circle_content }}</div>
        <!-- <div class="circleList_img">
          <van-image
            v-for="(img, index) in item.circle_img"
            width="84"
            height="84"
            :src="img"
          />
        </div> -->
        <div class="circle_bottom">
          <span><van-icon size="18" name="good-job-o" />赞{{ item.comments }}</span>
          <span><van-icon size="18" name="chat-o" />回复</span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { getCircleList } from "@/api/circle.js";
export default {
  name: "circleComponent",
  data() {
    return {
      circleList: [
        {
          id: "1",
          avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          nickname: "人在草上",
          circle_type: "随手拍",
          circle_time: 4,
          circle_content: "广东的茶友发顺丰顺丰顺丰复色光如果 不太友好，小黄驾到，怎无人诚邀！",
          comments: 8,
          last_comments: 20,
        },
        {
          id: "2",
          avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          nickname: "人在草上",
          circle_type: "随手拍",
          circle_time: 4,
          circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
          comments: 8,
          last_comments: 20,
        },
        {
          id: "3",
          avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          nickname: "人在草上",
          circle_type: "随手拍",
          circle_time: 4,
          circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
          comments: 8,
          last_comments: 20,
        },
      ],
    //   circleList: [],
    };
  },
  methods: {
    gotoPage(urlName) {
      this.$router.push({ name: urlName });
    },
  },
  async mounted() {
    let res = await getCircleList();
    console.log(res.data, 304);
    // this.circleList = res.data;
  },
};
</script>
<style>
.circleList {
  display: flex;
  padding: 20px 16px;
}
.circleList_left {
  width: 14%;
}
/* .circleList_right {
  width: 60%;
} */
.circleList_img {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
}
.userName {
  font-size: 14px;
}
.circle_title {
  height: auto;
  padding: 10px 0;
  color: #5d5b5b;
  font-size: 14px;
}
.circle_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
}
</style>
