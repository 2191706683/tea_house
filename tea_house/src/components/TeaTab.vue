<template>
  <div>
    <van-tabs line-height="0">
      <van-tab v-for="index in 8">
        <template #title>
          <van-image
            width="70"
            height="70"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <div style="text-align: center;">选项</div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
    export default {
        name: "teaTab",
        data() {
            return {
                // active:
            }
        }
    }
</script>

<style>
.van-tabs--line .van-tabs__wrap {
  height: 100%;
}
</style>
