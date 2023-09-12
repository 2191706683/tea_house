<template>
  <div class="product_container">
    <van-search @click="gotoPage('search')" v-model="value" disabled placeholder="搜索产品" />
    <ProductIcon />
    <TeaTag></TeaTag>
    <TeaIndex></TeaIndex>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import TeaIndex from "../../components/teaIndex";
import TeaTag from "../../components/teaTag";
import ProductIcon from "../../components/productIcon";
import { getProductList } from '@/api/product'
export default {
  name: "product",
  components: { Tabbar, TeaIndex, TeaTag, ProductIcon },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    gotoPage(urlName) {
      this.$router.push({name: urlName})
    }
  },
  async mounted() {
    let res = await getProductList()
    console.log(res.data, 'product')
  }
};
</script>
<style scoped>
.product_container {
  padding: 0 10px;
  overflow: hidden;
}
</style>
