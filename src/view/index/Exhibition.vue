<template>
  <div class="exhibition">

    <div class="nav-bar">
      <span >兴趣分类</span>
      <div>
        <span @click="exhibitionCity" class="title">北京市
          <!-- <img src="../../assets/exhibitionimg/banner1xialakuang.png" alt=""> -->
        </span>
        <span>全球</span>
      </div>
 
      <van-icon name="search" @click="exhibitionSearch"/>
    </div>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/exhibitionimg/wonderful1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../../assets/exhibitionimg/wonderful2.jpg" alt="">
      </van-swipe-item>
     
    </van-swipe>

   <!-- 四个图片文字小格子 -->
<van-grid :border="false" :column-num="4">
  <van-grid-item>
    <van-image :src="icon01" />
    <span class="icon-txt">分类看展</span>
  </van-grid-item>
  <van-grid-item>
    <van-image :src="icon02" />
    <span class="icon-txt">热门展览</span>
  </van-grid-item>
  <van-grid-item>
    <van-image :src="icon03" />
    <span class="icon-txt">日历行程</span>
  </van-grid-item>
   <van-grid-item>
    <van-image :src="icon04" />
    <span class="icon-txt">附近/签到</span>
  </van-grid-item>
</van-grid>

  
<div class="exhibition-main">
 <!-- 看展购票模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
   <van-cell title="看展购票" is-link value="15场" /> 
    <!-- 购票内容 -->
    <div class="box">
      <ul>
        <li v-for="item in list" >
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            <span>￥{{item.price}}</span> 
        </li>
      </ul>
    </div>
  </div>


 <!-- 正在热展模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
   <van-cell title="正在热展" is-link value="256场" /> 
    <!-- 购票内容 -->
    <div class="box">
      <ul>
        <li v-for="item in list" >
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            <span>￥{{item.price}}</span> 
        </li>
      </ul>
    </div>
  </div>



 <!-- 即将开幕模块 -->
  <div class="ticket">
    <!-- 购票头部 -->
   <van-cell title="即将开幕" is-link value="9场" /> 
    <!-- 购票内容 -->
    <div class="box">
      <ul>
        <li v-for="item in list" >
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            <span>￥{{item.price}}</span> 
        </li>
      </ul>
    </div>
  </div>
</div>


  <!-- 精彩活动模块 -->
  <div class="wonderful">
    <van-cell title="精彩活动" is-link value="查看更多" />

    <div class="wonderful-box">
      <div class="wonderful-self">
        <img src="../../assets/exhibitionimg/wonderful1.jpg" alt="">
        <p>艺术北京.发现</p>
        <b>13天后结束</b>
      </div>

      <div class="wonderful-self">
        <img src="../../assets/exhibitionimg/wonderful2.jpg" alt="">
        <p>艺术圣诞.奇幻延续</p>
        <b>5天后结束</b>
      </div>
    </div>

  </div>
  

<!-- 附近展览--主要内容模块 -->
    <div class="nearby">
      <van-cell title="附近展览" is-link value="查看更多" /> 
      <!-- 遍历展览内容 -->
      <div class="nearby-m">
        <div class="nearby-main" v-for="item in list">
            <img :src="item.img" alt="">
            <div class="nearby-right">
              <h5>{{item.title}}</h5>
              <p>{{item.interspace}}</p>
              <span>正在进行</span>
            </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import icon01 from "../../assets/exhibitionimg/icon01.png";
import icon02 from "../../assets/exhibitionimg/icon02.png";
import icon03 from "../../assets/exhibitionimg/icon03.png";
import icon04 from "../../assets/exhibitionimg/icon04.png";
import {getTickets} from "../../utils/api";

export default {
  data() {
    return {
      list:{},
      icon01:icon01,
      icon02:icon02,
      icon03:icon03,
      icon04:icon04
    };
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
        const res = await getTickets();
        this.list = res.results;
        console.log(res.results);
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
  color:#222222;
  .van-icon{
    line-height: center;
    font-size: 24px;
    padding: 10px 0 10px 0; 
  color:#222222;
  }
  .title{
     color:#222222;
    font-weight: 550;
    margin-right: 8px;
    img{
      width: 20px;
      height: 20px;
    }
  }
}

.my-swipe{
.van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 220px;
    img{
      width: 100%;
      height: 220px;
    }
  }
}
.icon-txt{
  font-size: 12px;
  margin-top: 8px;
}

.exhibition-main{
     margin-top: 20px;
  .ticket{
  //  margin-top: 10px;
   padding-bottom: 10px;
   .box{
     background: #fff;
      height: 200px;
      width: 100%;
      overflow: auto;//auto，可以实现横向滚动
      ul{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 10px;
        li{
          flex-shrink: 1;
          height: 100%;
          padding: 0 5px;
          img{
            width: 100px;
            height:138px;
          }
          p{
            font-size: 12px;
            width: 100px;
            display: -webkit-box;    
            -webkit-box-orient: vertical;    
            -webkit-line-clamp: 2;    
            overflow: hidden;
          }
          span{
            color: #FF4A40;
            font-size: 12px;
            width: 100px;
          }
        }
      }
   }
  }
  }


.wonderful{
  margin-top:10px;
  background: #fff;
  .wonderful-box{
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    .wonderful-self{
      
      p{
        font-size: 12px;
        color: #222222;
      }
      b{
        font-size: 10px;
        color: #909090;
      }
      img{
        width: 150px;
        height:150px;
      }
    }
  } 
}

.nearby{
margin-top: 20px;
background: #fff;
  .nearby-m{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .nearby-main{
    border-top: 1px solid #ccc;
    width:100%;
    height: 125px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
      float: left;
      width: 58px;
      height: 84px;
      
    }
    .nearby-right{
      float: right;
      display: flex;
      flex-direction: column;
      color: #909090;
      font-size: 12px;
      width: 240px;
      padding-bottom: 30px;
      h5{
        padding: 10px 0;
        color: #222222;
        font-size:12px;
        width: 240px;
        text-overflow: ellipsis; //文字过长，显示省略号
        overflow: hidden;
        white-space: nowrap;
      }
      p{
        margin: 5px 0;
      }
    }
    }
  }
}

  
</style>
