<!--
 * @Author: tianxianning 1519309240@qq.com
 * @Date: 2023-09-13 10:22:28
 * @LastEditors: tianxianning 1519309240@qq.com
 * @LastEditTime: 2023-09-18 10:58:18
 * @FilePath: \tea_house\src\components\teaTag.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="car_tag">
        <span class="car_tagitem" v-for="(item, index) in userData" :key="item.id">{{item.tag}}</span>
    </div>
</template>

<script>
import { getProductTag } from "../api/product";
export default {
  name: 'teaIndex',
  data() {
    return {
        // cartag: [ 
        //     { "id": "1", "tag": "15-20万" },
        //     { "id": "2", "tag": "25-35万" },
        //     { "id": "3", "tag": "轿车" },
        //     { "id": "4", "tag": "SUV" },
        //     { "id": "5", "tag": "纯电动" },
        //     { "id": "6", "tag": "插电混动" },
        //     { "id": "7", "tag": "增程式" },
        //     { "id": "8", "tag": "更多条件" }
        // ]
        userData:[]
    }
  },
  async mounted() {
    let res = await getProductTag();

    // console.log(res);

    let arr = res.data;

    this.userData = arr;

    console.log(this.userData, "评测数据");
  },
  
}
// defineProps({
//     cartag: {
//         type: Array,
//         value: []
//     }
// })
</script>

<style scoped>
.car_tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
    height: 80px;
    flex-wrap: wrap;
}
    .car_tagitem{
        width: 23%;
        height: 32px;
        background-color: #f7f8fc;
        text-align: center;
        line-height: 32px;
    }
</style>