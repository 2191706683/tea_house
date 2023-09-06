<template>
  <div>
    <TeaHeader/>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" />
      </van-swipe-item>
    </van-swipe>
    <TeaIcon/>
    <TeaArticle v-for="item in 8"></TeaArticle>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";
import TeaHeader from "@/components/TeaHeader";
import TeaIcon from "@/components/teaIcon.vue"
import TeaArticle from "@/components/teaArticleList.vue"
export default {
  name: "home",
  components: { Tabbar, TeaHeader, TeaIcon, TeaArticle },
  data() {
    return {
      images: [
        "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZE09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--796ba4263b34f6816f96339450886766f150294f/0.jpg",
        "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEk9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fea82e64a47b926364aee5789d7051e6a9e80ef7/3.jpg",
        "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65035e1c0e2c7a1ea5d07ed13f61914bec414bc3/9.png",
        "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEE9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09ea347255ce278b457911922f23a04eaa6218a4/11.jpg",
        "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY3c9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a31c6bc3f77dba2fa4eaf7ac39506c24785e1659/15.png"
      ],
    };
  },
};
</script>

<style>
</style>
