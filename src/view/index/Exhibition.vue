<template>
  <div class="exhibition">

    <div class="nav-box">
      <div class="nav-bar">
        <span >兴趣分类</span>
        
        <div class="box-title">
           <div class="tocities">
          <span @click="exhibitionCity" class="title">{{city.name}}
          
          </span>
           <van-image :src="xialakuang" />
         </div>
          <span>全球</span>
         </div>
  
        <van-icon name="search" @click="exhibitionSearch"/>
      </div>
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
  <van-grid-item @click="toclassifyshow">
    <van-image :src="icon01" />
    <span class="icon-txt">分类看展</span>
  </van-grid-item>
  <van-grid-item @click="tohotshow">
    <van-image :src="icon02" />
    <span class="icon-txt">热门展览</span>
  </van-grid-item>
  <van-grid-item  @click="tocalendar">
    <van-image :src="icon03" />
    <span class="icon-txt">日历行程</span>
  </van-grid-item>
   <van-grid-item>
    <van-image :src="icon04" @click="tonearbyshow" />
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
        <li v-for="item in list" @click="todetail(item._id)">
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
        <li v-for="item in list"  @click="todetail(item._id)">
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
        <li v-for="item in list" @click="todetail(item._id)">
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
      <!-- 遍历展览内容  引用组件 -->
      <show></show>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import icon01 from "../../assets/exhibitionimg/icon01.png";
import icon02 from "../../assets/exhibitionimg/icon02.png";
import icon03 from "../../assets/exhibitionimg/icon03.png";
import icon04 from "../../assets/exhibitionimg/icon04.png";
import xialakuang from "../../assets/exhibitionimg/xialakuang.png";
import {getTickets} from "../../utils/api";
import { store } from '../../store/index';
import show from '../../components/exhibition/show.vue';


export default {
  data() {
    return {
       list:{},
      icon01:icon01,
      icon02:icon02,
      icon03:icon03,
      icon04:icon04,
      xialakuang:xialakuang,
    };
  },

  components: {
    show
  },

  computed: {
    city(){
      return this.$store.state.exhibition.city;
    }
  },

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
    },
    //跳转到分类展览页面
    toclassifyshow(){
       this.$router.push("/classifyshow");
    },
    //跳转到日历行程
    tocalendar(){
      this.$router.push("/calendar");
    },
    //跳转到热门展览
    tohotshow(){
       this.$router.push("/hotshow");
    },
    //跳转到附近展览页
    tonearbyshow(){
      this.$router.push("/nearbyshow");
    },
  

    //点击展览，到详情页
    todetail(id){
      this.$router.push("/tickDetils/"+id);
    },
            //获取数据
     async getList(){
        const res = await getTickets();
        this.list = res.results;
        console.log(res.results);
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

.my-swipe{
  margin-top: 50px;
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
          height:100%;
          padding: 0 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
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
            height: 27px;
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
