<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <br />
    <div class="h">
      <div class="big">
        <div class="box1">
          <img class="img1" :src="state.avatar" />
        </div>
        <div class="box2">
          <h2 style="margin-top: 5px">{{ state.nickname }}</h2>
          <span style="color: #778899; font-size: 3px; font-family: 微软幼黑；"
            >{{state.circle_time}}天前</span
          >
        </div>
        <div class="box3">
          <button>关注</button>
        </div>
      </div>
      <div class="p1">
        <p>{{state.circle_content}}</p>
      </div>

      <div class="box5">
          <!-- <img
            v-for="item in state.circle_img"
            class="img2"
            :src="item"
          /> -->
          <van-image
            style="padding: 4px 0;"
            v-for="(img, index) in state.circle_img"
            width="100"
            height="100"
            :src="img"
          />
      </div>
      <p style="font-size: 15px">{{state.comments}}条回复</p>
    </div>
    <CircleComents :circle_id="state.id"/>
    <van-search
      @click="showPopup"
      class="comment_search"
      placeholder="写下你的留言"
      background="#fff"
      shape="round"
      left-icon=""
    />
    <van-popup position="bottom" v-model="show1">
      <van-field
        v-model="message"
        rows="4"
        autosize
        label="留言"
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
      <div style="display: flex; justify-content: end">
        <van-button size="small" type="primary" @click="submitComments">提交</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import CircleComents from "./components/circleComents.vue";
import { addCircleComments, getCircleDetail } from "@/api/circle"
export default {
  name: "product",
  components: { Tabbar, CircleComents },
  data() {
    return {
      active: 3,
      isNum: 0,
      show1: false,
      show2: false,
      message: "",
      state: {},
    };
  },
  methods: {
    onClickLeft() {
      // console.log("???");
      // history.back();
      this.$router.back() 
    },
    showPopup() {
      this.show1 = true;
      let token = localStorage.getItem("token");
      if (!token) {
        this.$router.push({ name: 'login' });
      }
    },
    async submitComments() {
      console.log('test', this.state.id, this.message)
      await addCircleComments({circle_id: this.state.id, circle_content: this.message})
      this.show1 = false;
      let res = await getCircleDetail({id:this.state.id});
      localStorage.setItem(`circle_comment_${this.state.id}`, JSON.stringify(res.data))
      location.reload();
    }
  },
  mounted() {
    this.state = this.$route.params.data || JSON.parse(localStorage.getItem(`circle_state`));
    // console.log(this.state, 222);
    window.localStorage.setItem(`circle_state`, JSON.stringify(this.state))
    
  },
};
</script>
<style scoped>
.comment_search {
  position: sticky;
  bottom: 0px;
}
.box5 {
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
