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
          <div class="circle_title">{{ item.comment }}</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductDetail } from "@/api/product.js";
export default {
  name: "circleComponent",
  components: {  },
  props: ["product_id"],
  data() {
    return {
      value: "",
      show1: false,
      show2: false,
      message: "",
      comment_id: "",
      placeholder: "",
      replayName: "",
      circleList: [],
    };
  },
  methods: {
    // gotoPage(urlName) {
    //   this.$router.push({ name: urlName });
    // },
  },
  async mounted() {
    await this.$nextTick();
    // console.log(this.product_id, '30809')
    let res = await getProductDetail({ id: this.product_id });
    console.log(res.data.comments, 'ioioji')
    this.circleList = res.data.comments;
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
