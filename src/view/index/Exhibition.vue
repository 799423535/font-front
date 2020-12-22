<template>
  <div class="exhibition">
    <!-- 头部导航 -->
    <!-- <van-nav-bar title="北京市" left-text="兴趣分类" >
      <template #right>
        <van-icon name="search" />
      </template>
    </van-nav-bar> -->
    <div class="nav-bar">
      <span >兴趣分类</span>
      <span @click="exhibitionCity" class="title">北京市</span>
      <van-icon name="search" @click="exhibitionSearch"/>
    </div>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

   <!-- 四个图片文字小格子 -->
    <van-grid>
      <van-grid-item icon="photo-o" text="分类看展" />
      <van-grid-item icon="photo-o" text="热门展馆" />
      <van-grid-item icon="photo-o" text="日历行程" />
      <van-grid-item icon="photo-o" text="附近/签到" />
    </van-grid>

  
<div class="exhibition-main">
 <!-- 看展购票模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
   <van-cell title="看展购票" is-link value="9场" /> 
    <!-- 购票内容 -->
    <div class="big-ticket">
      <!-- 循环购票 -->
      <div class="ticket-bottom" v-for="i in 9" :key="i">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608607666720&di=9e3fdc7327b602f1ff38802e1319329d&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F06%2F02%2F19300534106437134465026151672.jpg" alt="图片">
         <p>题目题目题目题目题目题目</p>
         <span>价格题目题目题目题目题目</span>
      </div>

    </div>
  </div>


 <!-- 正在热展模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
    <van-cell title="正在热展" is-link value="219场" /> 
    <!-- 购票内容 -->
    <div class="big-ticket">
      <!-- 循环购票 -->
      <div class="ticket-bottom" v-for="i in 9" :key="i">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2539638062,3094889396&fm=26&gp=0.jpg" alt="图片">
         <p>题目题目题目题目题目题目</p>
         <span>价格题目题目题目题目题目</span>
      </div>

    </div>
  </div>



 <!-- 即将开幕模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
     <van-cell title="即将开幕" is-link value="5场" /> 
    <!-- 购票内容 -->
    <div class="big-ticket">
      <!-- 循环购票 -->
      <div class="ticket-bottom" v-for="i in 9" :key="i">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2539638062,3094889396&fm=26&gp=0.jpg" alt="图片">
         <p>题目题目题目题目题目题目</p>
         <span>价格题目题目题目题目题目</span>
      </div>

    </div>
  </div>




</div>


  <!-- 精彩活动模块 -->
  <div class="wonderful">
    <van-cell title="精彩活动" is-link value="查看更多" />
    <div class="wonderful-box">
      <div class="wonderful-self">
        <img class="wonderful-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2539638062,3094889396&fm=26&gp=0.jpg" alt="图片">
        <p>艺术北京.发现</p>
        <b>13天后结束</b>
      </div>

      <div class="wonderful-self">
          <img class="wonderful-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2539638062,3094889396&fm=26&gp=0.jpg" alt="图片">

        <p>艺术圣诞.奇幻延续</p>
        <b>5天后结束</b>
      </div>
    </div>

  </div>
  

<!-- 附近展览--主要内容模块 -->
  <div class="nearby">
    <van-cell title="附近展览" is-link value="查看更多" /> 
    <!-- 遍历展览内容 -->
    <div class="nearby-main">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2539638062,3094889396&fm=26&gp=0.jpg" alt="图片">

        <div class="nearby-right">
          <h3>标题</h3>
          <p>展览地方</p>
          <p>正在进行</p>
        </div>
    </div>


  </div>




  </div>
</template>

<script>
import {} from "/@/utils/api"
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    this.getList();
  },

  methods: {
   //跳转到搜索页面
    exhibitionSearch(){
      this.$router.push("/search")
    },
    //跳转到城市页面
    exhibitionCity(){
      console.log(111);
      this.$router.push("/city");
    }
    ,

    //获取数据
     async getList(){

    },
  }
};
</script>
<style lang='less' scoped>
.nav-bar{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  color: #777;
  .van-icon{
    line-height: center;
    font-size: 24px;
    padding: 10px 0 10px 0; 
    color: #777; 
  }
  .title{
    color: #333;
    font-weight: 700;
  }
}

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

.exhibition-main{
  // background:rgb(46, 46, 46);
  .ticket{
    margin-top: 20px;
    padding: 0 8px;
    img{
    width: 90%;
    }
    .ticket-left{
      border-left: 5px solid #39a9ed;
      padding-left: 8px;
    }

    .big-ticket{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content:space-evenly;
      height: 300px;
      overflow:auto;
      padding-left: 14px;
      text-align: center;
      .ticket-bottom{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: center;
        }
    }
 
  }

  }

    //精彩活动
  .wonderful{
    margin:0 10px;
    .wonderful-img{
      width: 150px;
      
    }
    .wonderful-box{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      // text-align: center;
    }
    .wonderful-self{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        p{
          font-size: 14px;
          color: black;
          padding: 5px 0;
        }
        b{
          font-size: 12px;
          color: #777;
        }
      }
  }

  .nearby{
    img{
      width: 90%;
    }
  }

  
</style>
