<template>
  <div class="circleList">
    <span class="circleList_left"
      ><van-image
        width="50"
        height="50"
        round
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    /></span>
    <span class="circleList_right">
      <div>
        <span class="userName">人在草上 </span>
        <span style="color: #727272;"> 随手拍 · 4小时前</span>
      </div>
      <div class="circle_title">广东的茶友不太友好，小黄驾到，怎无人诚邀！</div>
      <div class="circleList_img">
        <van-image
          width="84"
          height="84"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          width="84"
          height="84"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-image
          width="84"
          height="84"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
      <div class="circle_bottom">
        <span><van-icon name="chat-o" /></span>
        <span>18</span>
        <span>最后回复于20分钟前</span>
      </div>
    </span>
  </div>
</template>
  
  <script>
export default {
  name: "tabbar",
  data() {
    return {
      article_type: "快讯",
      comments: 0,
      star: 0,
      sub_time: 4,
    };
  },
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
  box-sizing: border-box;
  justify-content: space-between;
}
.userName {
  font-size: 16px;
  color: #484848;
}
.circle_title {
    height: 50px;
    line-height: 50px;
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
  