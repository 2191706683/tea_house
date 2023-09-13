<template>
  <div>
    <div>Circle</div>
    <Navbar title="茶友圈" />
    <div style="margin-top: 40px"></div>
    <TeaTab />
    <CircleList />
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import Navbar from "@/components/Navbar.vue";
import CircleList from "./components/circleList.vue";
import TeaTab from "@/components/TeaTab.vue";
export default {
  name: "home",
  components: { Tabbar, Navbar, CircleList, TeaTab },
  data() {
    return {
      active: 1,
    };
  },
};
</script>

