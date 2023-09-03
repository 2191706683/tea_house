<template>
    <div class="car_tag">
        <span class="car_tagitem" v-for="item in cartag" :key="item.id">{{item.tag}}</span>
    </div>
</template>

<script>
export default {
  name: 'teaIndex',
  data() {
    return {
        cartag: [ 
            { "id": "", "tag": "15-20万" },
            { "id": "", "tag": "25-35万" },
            { "id": "", "tag": "轿车" },
            { "id": "", "tag": "SUV" },
            { "id": "", "tag": "纯电动" },
            { "id": "", "tag": "插电混动" },
            { "id": "", "tag": "增程式" },
            { "id": "", "tag": "更多条件" }
        ]
    }
  }
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