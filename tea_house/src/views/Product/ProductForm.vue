<template>
  <div>
    <van-form @submit="onSubmit">
      <van-panel title="" desc="需求类型" status="">
        <div>
          <van-radio-group v-model="radio" name="需求类型">
            <van-cell-group>
              <van-cell title="出售" name="出售" clickable @click="radio = '出售'">
                <template #right-icon>
                  <van-radio name="出售" />
                </template>
              </van-cell>
              <van-cell title="求购" name="求购" clickable @click="radio = '求购'">
                <template #right-icon>
                  <van-radio name="求购" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </van-panel>
      <br />

      <van-notice-bar
        mode="closeable"
        style="background-color: white; color: black"
        v-for="i in index"
        >{{ i.text }}</van-notice-bar
      >
      <br />
      <van-field v-model="text" name="单位" label="单位" placeholder="如：件" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field
        v-model="tel"
        type="tel"
        name="报价"
        label="报价"
        placeholder="如：20000 元/件"
      />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field
        v-model="digit"
        type="digit"
        name="数量"
        label="数量"
        placeholder="如：5 件"
      />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field
        v-model="number"
        type="number"
        name="联系人"
        label="联系人"
        placeholder="联系人称呼"
      />
      <!-- 输入密码 -->
      <van-field
        v-model="password"
        type="password"
        name="手机号"
        label="手机号"
        placeholder="如：12345"
      />
      <br />
      <div style="justify-content: center; display: flex">
        <van-button type="primary" native-type="submit">提&nbsp;&nbsp;交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);

import Tabbar from "../../components/tabbar";
export default {
  name: "user",
  components: { Tabbar },
  data() {
    return {
      tel: "",
      text: "",
      digit: "",
      number: "",
      password: "",
      sale: "",
      buy: "",
      show: true,
      chosenContactId: "1",
      radio: "出售",

      list: [
        {
          id: "1",
          name: "出售",
          tel: "",
        },
        {
          id: "2",
          name: "求购",
          tel: "",
        },
      ],
      index: [{ text: "技术是开发它的人的共同灵魂。" }],
    };
  },
  methods: {
    gotoPage() {
      this.$router.push({ path: "" });
    },

    close() {
      this.show = false;
    },

    onSelect(contact) {
      Toast("选择" + contact.id);
    },

    onSubmit(values) {
      console.log("需求类型", this.radio);
      console.log("submit", values);
    },
  },
};
</script>
