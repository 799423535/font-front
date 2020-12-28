<template>
<van-nav-bar
  title="全部分类"
  left-arrow
  @click-left="onClickLeft"
/>


  <div class="box">
    <!-- 左边图标 -->
    <div class="img">
      <img src="../../assets/exhibitionimg/interest/country.png" alt="">
      <span>国别</span>
    </div>
    <!-- 右边文字列表 -->
    <ul>
      <li v-for="elm in country">{{elm}}</li>
    </ul>
  </div>

  <div class="box">
    <!-- 左边图标 -->
    <div class="img">
      <img src="../../assets/exhibitionimg/interest/icon2.png" alt="">
      <span>出品机构</span>
    </div>
    <!-- 右边文字列表 -->
    <ul>
      <li v-for="elm in organization">{{elm}}</li>
    </ul>
  </div>


  <div class="box">
    <!-- 左边图标 -->
    <div class="img">
      <img src="../../assets/exhibitionimg/interest/icon3.png" alt="">
      <span>题材</span>
    </div>
    <!-- 右边文字列表 -->
    <ul>
      <li v-for="elm in organization">{{elm}}</li>
    </ul>
  </div>


</template>

<script>
export default {
  data() {
    return {
      country:["美国","欧洲","日韩","伊斯兰","俄罗斯","大中华"],
      organization:["美术馆","画廊","拍卖行","其他","美国","欧洲"],
      
    };
},

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='less' scoped>
  .box{
    display: flex;
    margin-top:10px; 
    .img{
      width: 100px;
      height: 100px;
      text-align: center;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 5px;
      border: 1px solid #dedede;
      img{
        width: 80px;
        height: 80px;
      }
      span{
        font-size: 16px;
        width:80px;
      }
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content:left;
      align-content: center;
      flex: 1;
      font-size: 16px;
      li{
        width: 88px;
        height: 50px;
        border: 1px solid #dedede;
        text-align: center;
        line-height: 55px;
        margin:0;

      }
    }

  }
</style>
