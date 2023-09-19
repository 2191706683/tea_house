<template>
  <div>
    <van-form @submit="onSubmit">
      <van-panel title="" desc="需求类型" status="">
        <div>
          <van-radio-group v-model="radio" name="require_type">
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

      <br />
      <van-field v-model="text" name="unit" label="单位" placeholder="如：件" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field
        v-model="tel"
        type="tel"
        name="quotation"
        label="报价"
        placeholder="如：20000 元/件"
      />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field
        v-model="digit"
        type="digit"
        name="quantity"
        label="数量"
        placeholder="如：5 件"
      />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field
        v-model="number"
        type="number"
        name="contacts"
        label="联系人"
        placeholder="联系人称呼"
      />
      <!-- 输入密码 -->
      <van-field
        v-model="word"
        type="word"
        name="mobile"
        label="手机号"
        placeholder="如：12345"
      />
      <br />
      <div style="justify-content: center; display: flex">
        <van-button type="primary" native-type="submit">提&nbsp;&nbsp;交</van-button>
      </div>
      <br /><br />
      <div style="justify-content: center; display: flex">
        <van-button @click="onClickLeft" type="default" native-type="back">取&nbsp;&nbsp;消</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);

import Tabbar from "../../components/tabbar";
import { addSaleForm } from "@/api/product"
import { Toast } from "vant";
export default {
  name: "user",
  components: { Tabbar },
  data() {
    return {
      tel: "",
      text: "",
      digit: "",
      number: "",
      word: "",
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
    };
  },
  methods: {
    onClickLeft() {
      // history.back();
      this.$router.back() 
    },
    gotoPage() {
      this.$router.push({ path: "" });
    },

    close() {
      this.show = false;
    },

    onSelect(contact) {
      Toast("选择" + contact.id);
    },

    async onSubmit(values) {
      values.type = this.radio;
      console.log("submit", values);
      let res = await addSaleForm(values)
      Toast.success(res.message)
      this.$router.back();
    },
  },
};
</script>
