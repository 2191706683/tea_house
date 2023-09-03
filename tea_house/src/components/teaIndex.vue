<template>
  <div>
    <van-index-bar class="carindex_bar">
      <div v-for="item in carindex">
        <van-index-anchor class="carindex_anchor" :index="item.title">
          <span class="carindex_title">{{ item.title }}</span>
        </van-index-anchor>
        <div class="carindex_cell" v-for="cell in item.cell">
          <img class="carindex_icon" v-lazy="cell.icon" alt="" />
          <span class="carindex_text">{{ cell.text }}</span>
        </div>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
export default {
  name: 'teaIndex',
  props: {
    // carindex: {
    //   type: Array,
    //   value: [],
    // },
  },
  data() {
    return {
        carindex: [
        {
            "title": "A",
            "cell": [
                {  "text": "奥迪", "icon": "https://p3.dcarimg.com/avatar/100x100/1dd5000048d6334c26b4.png" },
                {  "text": "埃安", "icon": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/ff30ff01fc334ade80bcf4b07dde45ba~40x0.webp" },
                {  "text": "AITO", "icon": "https://p3.dcarimg.com/img/motor-img/b98df48107bc3529e1a8b4b637fceb98~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "B",
            "cell": [
                {  "text": "奔驰", "icon": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/ff30ff01fc334ade80bcf4b07dde45ba~40x0.webp" },
                {  "text": "宝马", "icon": "https://p3.dcarimg.com/img/motor-img/4867710a834bd648ba55797ba5e37f14~tplv-resize:80:80.webp" },
                {  "text": "本田", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/ce848b3a359d48ee97a3ffbc79c99aa8~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "C",
            "cell": [
                {  "text": "长安", "icon": "https://p3.dcarimg.com/img/motor-img/95744f21ad1bb26f9eb522433471cecc~tplv-resize:80:80.webp" },
                {  "text": "长安欧尚", "icon": "https://p3.dcarimg.com/img/motor-img/4b40d2b4908add3adf43db45963328b2~tplv-resize:80:80.webp" },
                {  "text": "橙仕", "icon": "https://p3.dcarimg.com/img/motor-img/9651eaf634e545c8db97c78704bb99f5~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "D",
            "cell": [
                {  "text": "大众", "icon": "https://p3.dcarimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:80:80.webp" },
                {  "text": "大运", "icon": "https://p3.dcarimg.com/img/motor-img/2e7c5871c68d642ab27969820abc9bb2~tplv-resize:80:80.webp" },
                {  "text": "东风", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/f7cf20ec75014574b5afe7be0899e118~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "E",
            "cell": [
                {  "text": "Elektron", "icon": "https://p3.dcarimg.com/img/motor-img/f481e350734f29fe1b3d0746cb7a04a5~tplv-resize:80:80.webp" },
                {  "text": "E-Legend", "icon": "https://p3.dcarimg.com/img/motor-img/cecd0a67a6869dd8dc7ab81e73d5d7bf~tplv-resize:80:80.webp" },
                {  "text": "EdisonFuture", "icon": "https://p3.dcarimg.com/img/motor-img/9ce777381d5e68415f55bc44d511678c~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "F",
            "cell": [
                {  "text": "丰田", "icon": "https://p3.dcarimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:80:80.webp" },
                {  "text": "福特", "icon": "https://p3.dcarimg.com/img/motor-img/26bf5049dc5224161785225163fe6959~tplv-resize:80:80.webp" },
                {  "text": "福田", "icon": "https://p3.dcarimg.com/img/motor-img/f4385768dc61f72ff8670bef60ab9c9f~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "G",
            "cell": [
                {  "text": "广汽集团", "icon": "https://p3.dcarimg.com/avatar/100x100/1dd5000048d6334c26b4.png" },
                {  "text": "国金汽车", "icon": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/ff30ff01fc334ade80bcf4b07dde45ba~40x0.webp" },
                {  "text": "国机智骏", "icon": "https://p3.dcarimg.com/img/motor-img/b98df48107bc3529e1a8b4b637fceb98~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "H",
            "cell": [
                {  "text": "哈弗", "icon": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/ff30ff01fc334ade80bcf4b07dde45ba~40x0.webp" },
                {  "text": "红旗", "icon": "https://p3.dcarimg.com/img/motor-img/4867710a834bd648ba55797ba5e37f14~tplv-resize:80:80.webp" },
                {  "text": "合创汽车", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/ce848b3a359d48ee97a3ffbc79c99aa8~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "I",
            "cell": [
                {  "text": "Icona", "icon": "https://p3.dcarimg.com/img/motor-img/95744f21ad1bb26f9eb522433471cecc~tplv-resize:80:80.webp" },
                {  "text": "Italdesign", "icon": "https://p3.dcarimg.com/img/motor-img/4b40d2b4908add3adf43db45963328b2~tplv-resize:80:80.webp" },
                {  "text": "Inferno", "icon": "https://p3.dcarimg.com/img/motor-img/9651eaf634e545c8db97c78704bb99f5~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "J",
            "cell": [
                {  "text": "吉利汽车", "icon": "https://p3.dcarimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:80:80.webp" },
                {  "text": "捷豹", "icon": "https://p3.dcarimg.com/img/motor-img/2e7c5871c68d642ab27969820abc9bb2~tplv-resize:80:80.webp" },
                {  "text": "Jeep", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/f7cf20ec75014574b5afe7be0899e118~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "K",
            "cell": [
                {  "text": "凯迪拉克", "icon": "https://p3.dcarimg.com/img/motor-img/f481e350734f29fe1b3d0746cb7a04a5~tplv-resize:80:80.webp" },
                {  "text": "克莱斯勒", "icon": "https://p3.dcarimg.com/img/motor-img/cecd0a67a6869dd8dc7ab81e73d5d7bf~tplv-resize:80:80.webp" },
                {  "text": "凯翼", "icon": "https://p3.dcarimg.com/img/motor-img/9ce777381d5e68415f55bc44d511678c~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "L",
            "cell": [
                {  "text": "领克", "icon": "https://p3.dcarimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:80:80.webp" },
                {  "text": "路虎", "icon": "https://p3.dcarimg.com/img/motor-img/26bf5049dc5224161785225163fe6959~tplv-resize:80:80.webp" },
                {  "text": "雷克萨斯", "icon": "https://p3.dcarimg.com/img/motor-img/f4385768dc61f72ff8670bef60ab9c9f~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "M",
            "cell": [
                {  "text": "马自达", "icon": "https://p3.dcarimg.com/avatar/100x100/1dd5000048d6334c26b4.png" },
                {  "text": "名爵", "icon": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/ff30ff01fc334ade80bcf4b07dde45ba~40x0.webp" },
                {  "text": "玛莎拉蒂", "icon": "https://p3.dcarimg.com/img/motor-img/b98df48107bc3529e1a8b4b637fceb98~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "N",
            "cell": [
                {  "text": "哪氏汽车", "icon": "https://p3.dcarimg.com/img/motor-img/f921574ac8c4f4e1cc0769ea2029f57d~tplv-resize:80:80.webp" },
                {  "text": "纳智捷", "icon": "https://p3.dcarimg.com/img/motor-img/4867710a834bd648ba55797ba5e37f14~tplv-resize:80:80.webp" },
                {  "text": "NEVS国能汽车", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/ce848b3a359d48ee97a3ffbc79c99aa8~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "O",
            "cell": [
                {  "text": "欧拉", "icon": "https://p3.dcarimg.com/img/motor-img/95744f21ad1bb26f9eb522433471cecc~tplv-resize:80:80.webp" },
                {  "text": "讴歌", "icon": "https://p3.dcarimg.com/img/motor-img/4b40d2b4908add3adf43db45963328b2~tplv-resize:80:80.webp" },
                {  "text": "欧朗", "icon": "https://p3.dcarimg.com/img/motor-img/9651eaf634e545c8db97c78704bb99f5~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "P",
            "cell": [
                {  "text": "朋克汽车", "icon": "https://p3.dcarimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:80:80.webp" },
                {  "text": "帕加尼", "icon": "https://p3.dcarimg.com/img/motor-img/2e7c5871c68d642ab27969820abc9bb2~tplv-resize:80:80.webp" },
                {  "text": "佩奇奥", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/f7cf20ec75014574b5afe7be0899e118~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "Q",
            "cell": [
                {  "text": "起亚", "icon": "https://p3.dcarimg.com/img/motor-img/f481e350734f29fe1b3d0746cb7a04a5~tplv-resize:80:80.webp" },
                {  "text": "启辰", "icon": "https://p3.dcarimg.com/img/motor-img/cecd0a67a6869dd8dc7ab81e73d5d7bf~tplv-resize:80:80.webp" },
                {  "text": "前途", "icon": "https://p3.dcarimg.com/img/motor-img/9ce777381d5e68415f55bc44d511678c~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "R",
            "cell": [
                {  "text": "日产", "icon": "https://p3.dcarimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:80:80.webp" },
                {  "text": "荣威", "icon": "https://p3.dcarimg.com/img/motor-img/26bf5049dc5224161785225163fe6959~tplv-resize:80:80.webp" },
                {  "text": "瑞风汽车", "icon": "https://p3.dcarimg.com/img/motor-img/f4385768dc61f72ff8670bef60ab9c9f~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "S",
            "cell": [
                {  "text": "斯柯达", "icon": "https://p3.dcarimg.com/avatar/100x100/1dd5000048d6334c26b4.png" },
                {  "text": "三菱", "icon": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/ff30ff01fc334ade80bcf4b07dde45ba~40x0.webp" },
                {  "text": "上汽大通MAXUS", "icon": "https://p3.dcarimg.com/img/motor-img/b98df48107bc3529e1a8b4b637fceb98~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "T",
            "cell": [
                {  "text": "特斯拉", "icon": "https://p3.dcarimg.com/img/tos-cn-i-0000c0030/ff30ff01fc334ade80bcf4b07dde45ba~40x0.webp" },
                {  "text": "坦克", "icon": "https://p3.dcarimg.com/img/motor-img/4867710a834bd648ba55797ba5e37f14~tplv-resize:80:80.webp" },
                {  "text": "天际汽车", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/ce848b3a359d48ee97a3ffbc79c99aa8~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "U",
            "cell": [
                {  "text": "Ultima", "icon": "https://p3.dcarimg.com/img/motor-img/95744f21ad1bb26f9eb522433471cecc~tplv-resize:80:80.webp" },
                {  "text": "Uniti", "icon": "https://p3.dcarimg.com/img/motor-img/4b40d2b4908add3adf43db45963328b2~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "V",
            "cell": [
                {  "text": "Venturi", "icon": "https://p3.dcarimg.com/img/motor-img/343173efb2ab28cda1b0e5a5b49dab8e~tplv-resize:80:80.webp" },
                {  "text": "Vinfast", "icon": "https://p3.dcarimg.com/img/motor-img/2e7c5871c68d642ab27969820abc9bb2~tplv-resize:80:80.webp" },
                {  "text": "VLF Automotive", "icon": "https://p3.dcarimg.com/img/tos-cn-i-dcdx/f7cf20ec75014574b5afe7be0899e118~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "W",
            "cell": [
                {  "text": "五菱汽车", "icon": "https://p3.dcarimg.com/img/motor-img/f481e350734f29fe1b3d0746cb7a04a5~tplv-resize:80:80.webp" },
                {  "text": "沃尔沃", "icon": "https://p3.dcarimg.com/img/motor-img/cecd0a67a6869dd8dc7ab81e73d5d7bf~tplv-resize:80:80.webp" },
                {  "text": "蔚来", "icon": "https://p3.dcarimg.com/img/motor-img/9ce777381d5e68415f55bc44d511678c~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "X",
            "cell": [
                {  "text": "雪佛兰", "icon": "https://p3.dcarimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:80:80.webp" },
                {  "text": "现代", "icon": "https://p3.dcarimg.com/img/motor-img/26bf5049dc5224161785225163fe6959~tplv-resize:80:80.webp" },
                {  "text": "小鹏汽车", "icon": "https://p3.dcarimg.com/img/motor-img/f4385768dc61f72ff8670bef60ab9c9f~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "Y",
            "cell": [
                {  "text": "英菲尼迪", "icon": "https://p3.dcarimg.com/img/motor-img/f481e350734f29fe1b3d0746cb7a04a5~tplv-resize:80:80.webp" },
                {  "text": "一汽", "icon": "https://p3.dcarimg.com/img/motor-img/cecd0a67a6869dd8dc7ab81e73d5d7bf~tplv-resize:80:80.webp" },
                {  "text": "仰望", "icon": "https://p3.dcarimg.com/img/motor-img/9ce777381d5e68415f55bc44d511678c~tplv-resize:80:80.webp" }
            ]
        },
        {
            "title": "Z",
            "cell": [
                {  "text": "中兴", "icon": "https://p3.dcarimg.com/img/motor-img/c8eb9d15ac7e99904711b5ffe5538777~tplv-resize:80:80.webp" },
                {  "text": "中华", "icon": "https://p3.dcarimg.com/img/motor-img/26bf5049dc5224161785225163fe6959~tplv-resize:80:80.webp" },
                {  "text": "中国重汽VGV", "icon": "https://p3.dcarimg.com/img/motor-img/f4385768dc61f72ff8670bef60ab9c9f~tplv-resize:80:80.webp" }
            ]
        },
    ]
    }
  }
};
</script>

<style scoped>
.carindex_anchor {
  width: 100vw;
  height: 25px;
  background-color: #f7f8fc;
  color: red;
}
.carindex_title {
  color: #979aa8;
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 2px;
}
.carindex_cell {
  display: flex;
}

.carindex_icon {
  width: 40px;
  height: 40px;
  padding: 10px 12px;
}

.carindex_text {
  font-size: 15px;
  line-height: 60px;
}
</style>
