<template>
  <div>
    <van-cell>
      <template #title>
        <van-image
        width="120"
          src="https://assets.puercn.com/v3assets/chayou-logo-h5-95c55ad13b8f92f97c49c8d377f1121ee930400f263dcf95e01556e24438c60f.png"
        />
      </template>
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon size="28" name="search" class="search-icon" />
      </template>
    </van-cell>
    <van-cell title-style="font-size: 16px" title="品牌专区" />
    <TeaIndex></TeaIndex>
    <Tabbar/>
  </div>
</template>

<script>
import TeaIndex from "../../components/teaIndex";
import Tabbar from '../../components/tabbar'
export default {
  name: "product",
  components: { TeaIndex, Tabbar },
  data() {
    return {};
  },
};
</script>
