<template>
  <div>
    <div>Circle</div>
    <Navbar title="茶友圈" />
    <div style="margin-top: 40px;"></div>
    <CircleList v-for="item in 8"/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../../components/tabbar";
import Navbar from "@/components/Navbar.vue";
import CircleList from "@/components/circleList.vue";
export default {
  name: "home",
  components: { Tabbar, Navbar, CircleList },
  data() {
    return {};
  },
};
</script>
