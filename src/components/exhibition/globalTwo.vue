<template>
      <!-- 第四部分 -->
  <div class="one box">
    <h3>维也纳毛尔教堂——弗里茨·沃特鲁巴</h3>
    <p>
       <van-image :src="icon" />
      美景宫21， 维也纳   2021.04.15-2022.03.13
    </p>

    <div class="img-box">
      <div class="box-four">
        <img class="box-four-img" src="../../assets/exhibitionimg/globalimg/Wechat2.jpeg" alt="">
      </div>
    </div>
  </div>


    <div class="one box">
    <h3>典亚艺博2019及水墨艺博2019 7月上海媒体发布会</h3>
    <p>
       <van-image :src="icon" />
      在艺君 2019.08.05
    </p>

    <div class="img-box">
      <div class="box-four">
        <img class="box-four-img" src="../../assets/exhibitionimg/globalimg/Wechat1.jpeg" alt="">
      </div>
    </div>
  </div>



    <div class="one box">
    <h3>维也纳毛尔教堂——弗里茨·沃特鲁巴</h3>
    <p>
       <van-image :src="icon" />
      美景宫21， 维也纳   2021.04.15-2022.03.13
    </p>

    <div class="img-box">
      <div class="box-four">
        <img class="box-four-img" src="../../assets/exhibitionimg/globalimg/Wechat2.jpeg" alt="">
      </div>
    </div>
  </div>


    <div class="one box">
    <h3>维也纳毛尔教堂——弗里茨·沃特鲁巴</h3>
    <p>
       <van-image :src="icon" />
      美景宫21， 维也纳   2021.04.15-2022.03.13
    </p>

    <div class="img-box">
      <div class="box-four">
        <img class="box-four-img" src="../../assets/exhibitionimg/globalimg/Wechat5.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../../assets/exhibitionimg/globalimg/icon.png";

export default {
  data() {
    return {
      icon:icon
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.box{
 margin-top: 30px;
  h3{
  font-size: 16px;
  color: #444;
  height: 20px;
  line-height: 20px;

  margin:  8px 10px;
 }
 p{
   font-size: 12px;
   color: #777;

  margin: 8px 10px;
 }}



.img-box{
  background: #fff;
  width: 100%;
  overflow: auto;//auto，可以实现横向滚动

  .box-four{
    width: 100%;
    margin:0 10px;
    // text-align: center;
    .box-four-img{
      width: 100%;
      height: 222px;
    }
  }

  }
</style>
