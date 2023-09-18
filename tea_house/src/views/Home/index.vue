<template>
  <div>
    <TeaHeader />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        @click="gotoPage('articleDetail', item)"
        v-for="(item, index) in swipeList"
        :key="index"
      >
        <van-image height="200" width="100%" :src="item.article_img" />
      </van-swipe-item>
    </van-swipe>
    <TeaIcon />
    <TeaArticle />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";
import TeaHeader from "@/components/TeaHeader";
import TeaIcon from "@/components/teaIcon.vue";
import TeaArticle from "./components/teaArticleList.vue";
import { getArticleList } from "@/api/home";
export default {
  name: "home",
  components: { Tabbar, TeaHeader, TeaIcon, TeaArticle },
  data() {
    return {
      // images: [
      //   "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZE09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--796ba4263b34f6816f96339450886766f150294f/0.jpg",
      //   "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEk9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fea82e64a47b926364aee5789d7051e6a9e80ef7/3.jpg",
      //   "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65035e1c0e2c7a1ea5d07ed13f61914bec414bc3/9.png",
      //   "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZEE9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--09ea347255ce278b457911922f23a04eaa6218a4/11.jpg",
      //   "https://www.puercn.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY3c9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a31c6bc3f77dba2fa4eaf7ac39506c24785e1659/15.png",
      // ],
      swipeList: [],
    };
  },
  methods: {
    gotoPage(urlName, item) {
      this.$router.push({
        name: urlName,
        params: {
          id: item.article_id,
          article_title: item.article_title,
          article_img: item.article_img,
        },
      });
    },
  },
  async mounted() {
    let res = await getArticleList();
    for (let i = 0; i < 5; i++) {
      this.swipeList.push(res.data[i]);
    }
    console.log(res.data, 208);
    // this.articles = res.data;
  },
};
</script>

<style></style>
