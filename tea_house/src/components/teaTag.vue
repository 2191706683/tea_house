<template>
    <div class="car_tag">
        <span class="car_tagitem" v-for="(item, index) in cartag" :key="item.id">{{item.tag}}</span>
    </div>
</template>

<script>
export default {
  name: 'teaIndex',
  data() {
    return {
        cartag: [ 
            { "id": "1", "tag": "15-20万" },
            { "id": "2", "tag": "25-35万" },
            { "id": "3", "tag": "轿车" },
            { "id": "4", "tag": "SUV" },
            { "id": "5", "tag": "纯电动" },
            { "id": "6", "tag": "插电混动" },
            { "id": "7", "tag": "增程式" },
            { "id": "8", "tag": "更多条件" }
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