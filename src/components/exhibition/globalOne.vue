<template>

    <!-- 第一部分 -->
  <div class="one box">
    <h3>世纪· 浪潮——2020海花岛国际艺术邀</h3>
    <p>
       <van-image :src="icon" />
      海花岛博物馆，儋州 2021.02.08
    </p>

    <div class="img-box">
      <div class="box-top">
        <img src="../../assets/exhibitionimg/globalimg/one1-1.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/one1-2.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/one1-3.jpg" alt="">
      </div>

      <div class="box-btm">
        <img src="../../assets/exhibitionimg/globalimg/one2-1.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/one2-2.jpg" alt="">
      </div>
    </div>

  </div>

   <!-- 第二部分 -->
  <div class="two box">
    <h3>磁场——白磊白明双个展</h3>
    <p>
       <van-image :src="icon" />
      璟通艺术中心，上海 2020.12.25-2021.02.28
    </p>

    <div class="img-box">
      <div class="box-top">
        <img src="../../assets/exhibitionimg/globalimg/two1-1.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/two1-2.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/two1-3.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/two1-2.jpg" alt="">
      </div>

      <div class="box-btm">
        <img src="../../assets/exhibitionimg/globalimg/two2-1.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/two2-2.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/two2-3.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/two2-1.jpg" alt="">
      </div>
    </div>

  </div>

  
     <!-- 第三部分 -->
  <div class="three box">
    <h3>第九届浙江花鸟画展</h3>
    <p>
       <van-image :src="icon" />
     浙江省文化会堂（浙江展览馆），杭州   2020.12.18-12.27
    </p>

    <div class="img-box">
      <div class="box-top">
        <img src="../../assets/exhibitionimg/globalimg/three1-1.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three1-4.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three1-5.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three1-1.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three1-4.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three1-5.jpg" alt="">
       
      </div>

      <div class="box-btm">
        <img src="../../assets/exhibitionimg/globalimg/three2-1.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three2-2.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three2-3.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three2-2.jpg" alt="">
        <img src="../../assets/exhibitionimg/globalimg/three2-3.jpg" alt="">
       
        <img src="../../assets/exhibitionimg/globalimg/three2-4.jpg" alt="">
      </div>
    </div>

  </div>


      <!-- 第四部分 -->
  <div class="one box">
    <h3>维也纳毛尔教堂——弗里茨·沃特鲁巴</h3>
    <p>
       <van-image :src="icon" />
      美景宫21， 维也纳   2021.04.15-2022.03.13
    </p>

    <div class="img-box">
      <div class="box-four">
        <img class="box-four-img" src="../../assets/exhibitionimg/globalimg/four.jpg" alt="">
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
  margin: 8px 0;
  padding: 0 10px;
 }
 p{
   font-size: 12px;
   color: #777;
   margin: 8px 0;
  padding: 0 10px;
 }

.img-box{
  background: #fff;
  width: 100%;
  overflow: auto;//auto，可以实现横向滚动

  .box-four{
    width: 100%;
    text-align: center;
    .box-four-img{
      width: 337px;
      height: 154px;
    }
  }
  .box-top , .box-btm{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
  }

  img{
    height: 109px;
    margin-right: 5px;
  }
}
  
}




</style>
