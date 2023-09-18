<template>
  <div>
    <div
      v-for="(item, index) in articles"
      :key="item.article_id"
      @click="gotoPage('articleDetail', item)"
      class="teaArticle"
    >
      <span class="teaArticle_title">{{ item.article_title }}</span>
      <div>
        <van-image
          class="teaArticle-img"
          width="100%"
          height="180"
          :src="item.article_img"
        />
      </div>
      <!-- <div class="teaArticle_bottom">
        <span
          >{{ item.article_type }} {{ item.comments }}评 ·{{ item.likes }}赞 ·{{
            item.publishSinceTime
          }}小时前</span
        >
      </div> -->
    </div>
  </div>
</template>

<script>
import { getArticleList } from "@/api/home";
export default {
  name: "tabbar",
  data() {
    return {
      articles: [],
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
    this.articles = res.data;
  },
};
</script>
<style>
.teaArticle {
  padding: 10px 16px;
}
.teaArticle_title {
  font-size: 16px;
}
.teaArticle-img {
  margin-top: 12px;
}
.teaArticle_bottom {
  color: #727272;
  padding: 8px 0;
  border-bottom: 0.5px solid #e3dcdc;
}
</style>
