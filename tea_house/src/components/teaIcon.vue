<template>
  <div class="car_icon">
    <div class="car_icon_item" v-for="item in caricon" :key="item">
      <img class="car_icon_img" v-lazy="item.icon" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "teaIndex",
  props: {
    // caricon: : {
    //   type: Array,
    //   value: [],
    // },
  },
  data() {
    return {
      caricon: [
        {
          id: "",
          title: "茶友圈",
          icon:
            "https://assets.puercn.com/v3assets/v2/nav-zhaocha-1d803201a8b8d40126e84a108d28515de29184aa1686627f06b45bb71cf731bd.png",
        },
        {
          id: "",
          title: "品牌库",
          icon:
            "https://assets.puercn.com/v3assets/v2/nav-pinpai-6638948e3757ac6c31a07bacbd5688bb64e3c960173717da166dbefe2714cfa6.png",
        },
        {
          id: "",
          title: "产品库",
          icon:
            "https://assets.puercn.com/v3assets/v2/nav-chanpin-a73d77ecdf9a3bcd28b5be3424eb980ea58fcf9d4454992f7c653bffd4f46363.png",
        },
        {
          id: "",
          title: "吉利汽车",
          icon: "https://assets.puercn.com/v3assets/v2/nav-pingce-7f5a7218c2567352d75be7d73ee0844ec70a87214e62043e89be2e48bdc422c1.png",
        },
        {
          id: "",
          title: "茶窝网",
          icon: "https://assets.puercn.com/v3assets/v2/nav-chawo-0949aa3491dac7053a49fabeefbc41cca8cc2cabc13d5fb51f56a0b4a4af7ceb.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.car_icon {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  
}

.car_icon_item {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  border: 1px solid black;
}

.car_icon_img {
  width: 50px;
  height: 50px;
  margin-bottom: 14px;
}
</style>
