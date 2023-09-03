<template>
  <div>
    <div>Product</div>
    <TeaTag></TeaTag>
    <TeaIndex></TeaIndex>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../../components/tabbar'
import TeaIndex from '../../components/teaIndex'
import TeaTag from '../../components/teaTag'
export default {
  name: "product",
  components: { Tabbar, TeaIndex, TeaTag },
  data() {
    return {
    };
  },
};
</script>
