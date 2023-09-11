<template>
  <div>
    <div
      v-for="(item, index) in articles"
      :key="item.id"
      @click="gotoPage('articleDetail')"
      class="teaArticle"
    >
      <span class="teaArticle_title">{{ item.aritcle_title }}</span>
      <div>
        <van-image
          class="teaArticle-img"
          width="100%"
          height="180"
          :src="item.aritcle_img"
        />
      </div>
      <div class="teaArticle_bottom">
        <span
          >{{ item.article_type }} {{ item.comments }}评 ·{{ item.star }}赞 ·{{
            item.sub_time
          }}小时前</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      articles: [
        {
          id: "1",
          aritcle_title: "123",
          aritcle_img: "",
          article_type: "",
          comments: 0,
          star: 0,
          sub_time: 0,
        },
        {
          id: "2",
          aritcle_title: "",
          aritcle_img: "",
          article_type: "",
          comments: 0,
          star: 0,
          sub_time: 0,
        },
        {
          id: "3",
          aritcle_title: "",
          aritcle_img: "",
          article_type: "",
          comments: 0,
          star: 0,
          sub_time: 0,
        },
      ],
    };
  },
  methods: {
    gotoPage(urlName) {
      this.$router.push({ name: urlName });
    },
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
