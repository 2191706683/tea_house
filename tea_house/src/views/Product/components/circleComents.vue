<template>
  <div>
    <div v-for="(item, index) in circleList" :key="index" class="circleList">
      <div style="display: flex">
        <span class="circleList_left"
          ><van-image width="30" height="30" round :src="item.avatar"
        /></span>
        <span class="circleList_right">
          <div>
            <span class="userName">{{ item.nickname }} </span>
          </div>
          <div class="circle_title">{{ item.circle_content }}</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCircleDetail } from "@/api/circle.js";
export default {
  name: "circleComponent",
  components: {  },
  props: ["circle_id"],
  data() {
    return {
      value: "",
      show1: false,
      show2: false,
      message: "",
      comment_id: "",
      placeholder: "",
      replayName: "",
      circleList: [
        {
          id: "1",
          circle_id: "1",
          avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          nickname: "人在草上",
          circle_content:
            "广东的茶友发顺丰顺丰顺丰复色光如果 不太友好，小黄驾到，怎无人诚邀！",
          likes: 8,
          isLike: false,
        },
        {
          id: "2",
          circle_id: "1",
          avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          nickname: "人在草上",
          circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
          likes: 8,
          isLike: false,
        },
        {
          id: "3",
          circle_id: "1",
          avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
          nickname: "人在草上",
          circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
          likes: 8,
          isLike: false,
        },
      ],
        // circleList: [],
    };
  },
  methods: {
    // gotoPage(urlName) {
    //   this.$router.push({ name: urlName });
    // },
  },
  async mounted() {
  },
};
</script>
<style scoped>
.circleList {
  display: flex;
  padding: 10px 16px;
  flex-wrap: wrap;
}
.circleList_left {
  width: 40px;
}
.circleList_right {
  width: 310px;
}
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
  width: 34%;
}
</style>
