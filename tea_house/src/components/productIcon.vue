<template>
  <div class="car_icon">
    <div
      @click="gotoPage('productList')"
      class="car_icon_item"
      v-for="(item, index) in caricon"
      :key="index"
    >
      <img class="car_icon_img" v-lazy="item.icon" alt="" />
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
          id: "1",
          title: "茶友圈",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
        {
          id: "2",
          title: "品牌库",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F001%2Fthumb%2Fda-yi.jpg%3F1603437194&w=128&q=75",
        },
        {
          id: "3",
          title: "产品库",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
        {
          id: "4",
          title: "评测中心",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
        {
          id: "5",
          title: "茶窝网",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
        {
          id: "6",
          title: "茶友圈",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
        {
          id: "7",
          title: "品牌库",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F001%2Fthumb%2Fda-yi.jpg%3F1603437194&w=128&q=75",
        },
        {
          id: "8",
          title: "产品库",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
        {
          id: "9",
          title: "评测中心",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
        {
          id: "10",
          title: "茶窝网",
          icon: "https://m.puercn.com/_next/image/?url=https%3A%2F%2Fassets.puercn.com%2Fxsystem%2Fbrands%2Flogos%2F000%2F000%2F004%2Fthumb%2Fzhong-cha.jpg%3F1603437372&w=128&q=75",
        },
      ],
    };
  },
  methods: {
    gotoPage(urlName) {
      // if (urlName == 'NotFound') {
      //   window.location.href = 'https://www.chawo.com/wap/#/'
      // }
      this.$router.push({ name: urlName });
    },
  },
};
</script>
  
  <style scoped>
.car_icon {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.car_icon_item {
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  width: 20%;
  padding: 4px;
  box-sizing: border-box;
  /* border: 1px solid black; */
}

.car_icon_img {
  width: 58px;
  height: 58px;
  /* margin-bottom: 14px; */
  border: 1px solid #d1cfcf;
}
</style>
  