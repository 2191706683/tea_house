<template>
  <div class="teaArticle">
    <span class="teaArticle_title">旺苍茶农带上飞机哦哦哦挨饿王宏恩返回符号欸返回吃下“定心丸”</span>
    <div>
      <van-image class="teaArticle-img" width="100%" height="180" src="https://assets.puercn.com/xsystem/daily/stories/covers/000/145/827/medium/1.jpg?1693907040" />
    </div>
    <div class="teaArticle_bottom">
        <span>{{article_type}} {{comments}}评 ·{{star}}赞 ·{{sub_time}}小时前</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      article_type: '快讯',
      comments: 0,
      star: 0,
      sub_time: 4
    };
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
