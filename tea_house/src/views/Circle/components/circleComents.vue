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
          <!-- <div class="circleList_img">
          <van-image
            v-for="(img, index) in item.circle_img"
            width="84"
            height="84"
            :src="img"
          />
        </div> -->
          <div class="circle_bottom">
            <span @click="changeGood(item)"
              ><van-icon v-if="!item.isLike" size="18" name="good-job-o" />
              <van-icon v-else size="18" name="good-job" />
              赞{{ item.likes }}</span
            >
            <span @click="showPopup(item)"><van-icon size="18" name="chat-o" />回复</span>
          </div>
        </span>
      </div>
      <CircleReply :circle_id="this.circle_id" :comment_id="item.id" :reply="item.child"/>
    </div>
    <van-popup position="bottom" v-model="show1">
      <van-field
        v-model="message"
        rows="4"
        autosize
        label="留言"
        type="textarea"
        maxlength="50"
        :placeholder="placeholder"
        show-word-limit
      />
      <div style="display: flex; justify-content: end">
        <van-button size="small" type="primary" @click="submitReply">提交</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import CircleReply from "./circleReply.vue";
import { getCircleDetail, addCircleReplys } from "@/api/circle.js";
export default {
  name: "circleComponent",
  components: { CircleReply },
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
      // circleList: [
      //   {
      //     id: "1",
      //     circle_id: "1",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_content:
      //       "广东的茶友发顺丰顺丰顺丰复色光如果 不太友好，小黄驾到，怎无人诚邀！",
      //     likes: 8,
      //     isLike: false,
      //   },
      //   {
      //     id: "2",
      //     circle_id: "1",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
      //     likes: 8,
      //     isLike: false,
      //   },
      //   {
      //     id: "3",
      //     circle_id: "1",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
      //     likes: 8,
      //     isLike: false,
      //   },
      // ],
        circleList: [],
    };
  },
  methods: {
    gotoPage(urlName) {
      this.$router.push({ name: urlName });
    },
    async changeGood(item) {
      item.isLike = !item.isLike;
      if (item.isLike) {
        item.likes++;
      } else {
        item.likes--;
      }
      await this.$nextTick();
      localStorage.setItem(`circle_comment_${this.circle_id}`, JSON.stringify(this.circleList))
    },
    showPopup(comment) {
      this.show1 = true;
      this.comment_id = comment.id;
      this.placeholder = `回复${comment.nickname}`;
      this.replayName = comment.nickname;
    },
    async submitReply() {
      console.log('test', this.comment_id, this.message)
      await addCircleReplys({comment_id: this.comment_id, circle_content: this.message, replayName: this.replayName})
      this.show1 = false;
      let res = await getCircleDetail({id:this.circle_id});
      localStorage.setItem(`circle_comment_${this.circle_id}`, JSON.stringify(res.data))
      location.reload();
    }
  },
  async mounted() {
    await this.$nextTick();
    let res = await getCircleDetail({id:this.circle_id});
    console.log(res.data, 304);
    this.circleList = JSON.parse(localStorage.getItem(`circle_comment_${this.circle_id}`)) || res.data;
  },
};
</script>
<style scoped>
.circleList {
  display: flex;
  padding: 20px 16px;
  flex-wrap: wrap;
  /* border: 1px solid skyblue; */
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
