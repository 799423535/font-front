<template>
  <div class="exhibition">
    <!-- 头部导航 -->
    <van-nav-bar title="北京市" left-text="兴趣分类" >
  <template #right>
   <van-icon name="search" />
  </template>

    </van-nav-bar>

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
    <div class="ticket-top">
      <span class="left ticket-left">看展购票</span>
      <span class="right ticket-right">9场</span>
    </div>
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

<!-- 正在热展模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
    <div class="ticket-top">
      <span class="left">看展购票</span>
      <span class="right">9场</span>
    </div>
    <!-- 购票内容 -->
    <div>
      <!-- 循环购票 -->
      <div>
        <img src="" alt="图片">
         <p>题目</p>
         <span>价格</span>
      </div>
    </div>
  </div>
      
 <!-- 即将开幕模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
    <div class="ticket-top">
      <span class="left">看展购票</span>
      <span class="right">5场</span>
    </div>
    <!-- 购票内容 -->
    <div>
      <!-- 循环购票 -->
      <div>
        <img src="" alt="图片">
         <p>题目</p>
         <span>价格</span>
      </div>
    </div>
  </div>


</div>


  <!-- 精彩活动模块 -->
  <div class="wonderful">
    <div>
      <img src="" alt="">
      <p>艺术北京.发现</p>
      <b>13天后结束</b>
    </div>

    <div>
      <img src="" alt="">
      <p>艺术圣诞.奇幻延续</p>
      <b>5天后结束</b>
    </div>
  </div>
  

<!-- 附近展览--主要内容模块 -->
  <div class="nearby">

    <!-- 遍历展览内容 -->
    <div class="nearby-main">
        <img src="" alt="" class="nearby-left">
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
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.left{
  float: left;
}
.right{
  float: right;
}
img{
 width: 90%;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

  .exhibition-main{

  .ticket{
    margin-top: 20px;
    padding: 0 8px;
    .ticket-top{
      
    }
    .ticket-left{
      border-left: 5px solid #39a9ed;
      padding-left: 8px;
    }

    .big-ticket{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around
      // .ticket-bottom{
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: center;
      //     align-self: center;
      //   }
    }
 
  }
  }

  
</style>
