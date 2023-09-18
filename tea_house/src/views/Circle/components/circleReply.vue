<template>
  <div style="margin-top: 10px">
    <div v-for="(item, index) in circleList" :key="index" class="circleList">
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
import { addCircleReplys } from "@/api/circle.js";
export default {
  name: "circleComponent",
  props: {
    reply: {
      type: Array,
    },
    comment_id: {
      type: Number,
    },
    // circle_id: {
    //   type: Number,
    // },
  },
  data() {
    return {
      value: "",
      show1: false,
      show2: false,
      message: "",
      placeholder: "",
      replayName: "",
      // circleList: [
      //   {
      //     id: "1",
      //     comment_id: "1",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_content:
      //       "广东的茶友发顺丰顺丰顺丰复色光如果 不太友好，小黄驾到，怎无人诚邀！",
      //     likes: 8,
      //     isLike: false,
      //   },
      //   {
      //     id: "2",
      //     comment_id: "1",
      //     avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      //     nickname: "人在草上",
      //     circle_content: "广东的茶友不太友好，小黄驾到，怎无人诚邀！",
      //     likes: 8,
      //     isLike: false,
      //   },
      //   {
      //     id: "3",
      //     comment_id: "1",
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
    changeGood(item) {
      item.isLike = !item.isLike;
      if (item.isLike) {
        item.likes++;
      } else {
        item.likes--;
      }
      // let res = localStorage.getItem(`circle_comment_${this.circle_id}`)
      console.log(res, 370)
    },
    showPopup(comment) {
      this.show1 = true;
      this.placeholder = `回复${comment.nickname}`;
      this.replayName = comment.nickname;
    },
    async submitReply() {
      console.log("test", this.comment_id, this.message);
      await addCircleReplys({
        comment_id: this.comment_id,
        circle_content: this.message,
        replayName: this.replayName,
      });
      let res = await getCircleDetail({ id: this.circle_id });
      localStorage.setItem(`circle_comment_${this.circle_id}`, JSON.stringify(res.data));
      this.show1 = false;
      location.reload();
    },
  },
  async mounted() {
    // console.log(this.reply, 792)
    // let res = await getCircleList();
    // console.log(res.data, 304);
    console.log(this.comment_id, 32978);
    this.circleList = this.reply;
  },
};
</script>
<style scoped>
.circleList {
  display: flex;
  padding: 10px 12px;
  margin-left: 30px;
}
.circleList_left {
  width: 40px;
}
.circleList_right {
  width: 240px;
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
  width: 40%;
}
</style>
