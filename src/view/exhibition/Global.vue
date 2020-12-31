<template>
  <div>
  <!-- 头部导航 -->
    <div class="nav-box">
      <div class="nav-bar">
        <span @click=" tointerest">兴趣分类</span>
        
        <div class="box-title">
           <div class="tocities">
          <span @click="exhibitionCity" class="title">{{city.name}} </span>
          
           <img src="../../assets/exhibitionimg/down.png" alt="">
         </div>
          <span @click="toglobal">全球</span>
         </div>


        
        <van-icon name="search" @click="exhibitionSearch"/>
      </div>
    </div>

 <!-- tab切换 -->
<van-tabs v-model:active="active"
  style="padding-top:50px;"
  color = "#3388de"
  title-active-color="#3388de"
>
  <van-tab title="最新">
    <globalOne></globalOne>
  </van-tab>
  <van-tab title="推荐">
    <globalTwo></globalTwo>
  </van-tab>
  <van-tab title="兴趣">内容 3</van-tab>
</van-tabs>
 
  </div>
</template>

<script>
import globalOne from "../../components/exhibition/globalOne.vue";
import globalTwo from "../../components/exhibition/globalTwo.vue";
import xialakuang from "../../assets/exhibitionimg/xialakuang.png";
export default {
  data() {
    return {
      xialakuang:xialakuang,
    };
  },

  components: {
    globalOne,
    globalTwo
  },

  computed: {
     city(){
      return this.$store.state.exhibition.city;
    }
  },

  mounted() {},

  methods: {
       //跳转到全球页面
    toglobal(){
      this.$router.push("/global")
    },
   //跳转到搜索页面
    exhibitionSearch(){
      this.$router.push("/search")
    },
    //跳转到城市页面
    exhibitionCity(){
      console.log(111);
      this.$router.push("/index/exhibition");
    },
        //跳转到兴趣页
    tointerest(){
      console.log(111);
      this.$router.push("/interest");
    }
  }
};
</script>
<style lang='less' scoped>
.nav-box{
  position: fixed;
  width: 100%;
  z-index: 9999;
  background: #fff;
  margin-bottom:50px;
  top: 0;
  left: 0;
}
.nav-bar{
  display: flex;
  justify-content: space-between;
  // align-items: center;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  color:#222222;
  padding:0 10px;
  span{
    font-size: 16px;
    
  }
  .van-icon{
    line-height: center;
    font-size: 24px;
    padding: 10px 0 10px 0; 
  color:#222222;
  }
  .box-title{
    display: flex;
    align-self: center;
  }
  .tocities{
      display: flex;
    align-self: center;
    margin-right: 10px;
     img{
      width: 20px;
     height: 20px;
    margin-top: 16px;
    padding: 3px;
    }
  }
  .title{
     color:#222222;
    font-weight: 550;

    .van-image{
      width: 15px;
      height: 15px;
    }
  }
}
</style>
