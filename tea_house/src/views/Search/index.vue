<template>
  <!--  -->
  <div>
    <Navbar />
    <form action="/">
      <van-search
        class="search"
        v-model="value"
        show-action
        autofocus
        clearable
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @click-left-icon="onSearch"
      />
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { showToast } from "vant";
import _ from "lodash";
export default {
  name: "product",
  components: { Navbar },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    ajax1() {
      console.log("开始搜索，搜索内容为" + this.value);
    },
    onSearch() {
      if (!this.value) {
        showToast("搜索内容为空，请输入内容");
        return;
      }
    },
    onCancel() {
      history.back()
    } 
  },
};
// let debounceAjax1 = _.debounce(this.ajax1, 1000);
</script>

<style scoped>
.search {
  margin-top: 50px;
}
</style>
