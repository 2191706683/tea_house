<!--
 * @Author: tianxianning 1519309240@qq.com
 * @Date: 2023-09-19 11:04:29
 * @LastEditors: tianxianning 1519309240@qq.com
 * @LastEditTime: 2023-09-19 14:11:53
 * @FilePath: \tea_house\src\views\User\kong.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--  -->
<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="txt">
        暂无信息
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
        title:''
    };
  },
  methods: {
    onClickLeft() {
      history.back()
    }
  },
  async mounted() {
    if (typeof this.$route.params.data !== "undefined") {
      localStorage.setItem("userkong", JSON.stringify(this.$route.params.data));
    }
    this.state = JSON.parse(localStorage.getItem("userkong")) || this.$route.params.data;
    console.log(this.state);
    this.title = this.state
  },
};
</script>
<style scoped>
.txt{
    font-size: 14px;
    margin-left: 4px;
    margin-top: 5px;
}
</style>