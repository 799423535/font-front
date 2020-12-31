<template>
  <div class="mine">
    <!-- 标题 -->
  
    <div id="mine-title">
      <van-nav-bar :class="mine-title"   fixed  title="我"
      right-text="设置"
      @click-right="gotoSet"
     >
     <template #left>
      <van-image :src="icon" />
     </template>
     </van-nav-bar>
    </div>
    
    <!-- 表头 -->
    <div class="mine-head gap" style="margin-bottom:12px;margin-top:50px">
        <div class="portraits">
          <div class="portraits-top">
            <div class="portraits-ico" @click="gotoNote">
              <img v-if="judge" src="./../../assets/slices/mineslices/head_img.png" alt="" class="headimg" >
              <img v-else src="./../../assets/slices/loginslices/touxiang.png" alt="" class="headimg" >
            </div>
             <div class="portraits-name">
              
              <span v-if="judge">{{detailData.username}}</span>
              <span v-else style="margin-left:-80px">未登录</span>
               <br>
              <span  v-if="judge" class="num-code" >
                在艺号  28796505  <span class="arro"> ></span>
              </span>
            </div>
             
             <div class="mine-headercenter member">
               <img class="" src="./../../assets/slices/mineslices/icon2.png" alt="">
               <span class="member-center">会员中心</span>
             </div>
          </div>
          <div class="portraits-bottom">
            <ul class="portraits-list">
              <li>
              <div>
               
                <span class="ptop" v-if="judge" style="margin-top:5px"> {{detailData.attention}} </span>
                 <span class="ptop" v-else> 0 </span>
                  <br>
                <span>关注</span>
              </div>
                  
              </li>
               <li>
                 <span class="ptop" v-if="judge" style="margin-top:5px">{{detailData.fans}}</span>
                  <span class="ptop"  v-else> 0 </span>
                   
                   <br>
                  <span>粉丝</span>
              </li>
              <li>
                 <span class="ptop" v-if="judge" style="margin-top:5px">{{detailData.jifen}}</span>
                 <span class="ptop"  v-else> 0 </span>  
                  <br>
                  <span>积分</span>
              </li>
            </ul>
          
            <span></span>
        </div>
        </div>
        
    </div>
   <!-- 订单 -->
   <div class="money gap" style="margin-top:11px">
    <div class="order">
      <div class="order-left">
         <p>我的订单</p>
         <p class="order-p" style="color:#777;">验票/付款/查物流</p>
      </div>
        <div class="order-right">
          <img src="./../../assets/slices/mineslices/icon3.png" alt="">
        </div>
    </div>
     <div class="money-line"></div>
      <div class="purse">
         <div class="purse-left">
          <p>我的钱包</p>
          <p style="color:#777">订单/报名商家券</p>
         </div>
        <div class="purse-right">
          <img src="./../../assets/slices/mineslices/icon4.png" alt="">
        </div>
     </div>

   </div>

   <div class="share gap" style="background:#fff" >
   <div class="minetitle">分享与发现</div>
    <van-grid  :column-num="4"  :border="false" >
   <van-grid-item text="笔记"   class="q1">
   <van-image :src="img1" />
   <span class="spansize " @click="gotomynote" >笔记</span>
   </van-grid-item>
  <van-grid-item text="提问"  class="q1">
   <van-image :src="img2"  />
   <span class="spansize">提问</span>
  </van-grid-item>
    <van-grid-item text="作品"  class="q1">
   <van-image :src="img3"  />
   <span class="spansize" >作品</span>
  </van-grid-item>
    <van-grid-item text="直播"  class="q1">
   <van-image :src="img4"  />
   <span class="spansize">直播</span>
  </van-grid-item>
   <van-grid-item text="话题" style="border-top:none">
   <van-image :src="img5"  />
   <span class="spansize">话题</span>
  </van-grid-item> 
   <van-grid-item text="订阅" style="border-top:none">
   <van-image :src="img6"  />
   <span class="spansize">订阅</span>
   </van-grid-item>
    <van-grid-item text="草稿箱" style="border-top:none">
   <van-image :src="img7"  />
   <span class="spansize">草稿箱</span>
  </van-grid-item>
 </van-grid>
   </div>
   
   <div class="tools gap">
      <div class="minetitle">必备工具</div>
  <van-grid  :column-num="4" :border="false" >
    <van-grid-item   class="q1"> 
   <van-image :src="a1"   />
   <span class="spansize">收藏夹</span>
   </van-grid-item>
   <van-grid-item>
    <van-image :src="a2"  class="xcgl"/>
   <span class="spansize xcgl2" >行程管理</span>
    </van-grid-item>
     <van-grid-item>
    <van-image :src="a3" />
   <span class="spansize" @click="threego">标准件</span>
    </van-grid-item>
  <van-grid-item>
    <van-image :src="a4" />
   <span class="spansize">印款查询</span>
    </van-grid-item>
    <van-grid-item style="border:none" >
    <van-image :src="a5" />
   <span class="spansize" >展览记录</span>
    </van-grid-item>
     <van-grid-item  style="border:none">
   <van-image :src="a6"  />
   <span class="spansize">成交记录</span>
    </van-grid-item>
   <van-grid-item style="border:none" >
   <van-image :src="a7" />
   <span class="spansize" >申请上线展</span>
    </van-grid-item>
   <van-grid-item style="border:none" >
   <van-image :src="a8" />
   <span class="spansize" >评选/赛事</span>
    </van-grid-item>
 </van-grid>
   </div>

   <div class="help gap">
     <div class="minetitle">帮助和反馈</div>
  <div style="background:#fff">
    <van-cell-group class="vancell">
    <van-cell title="意见反馈" is-link />
    <van-cell title="分享在艺" is-link  @click="showShare = true"  />
    <van-share-sheet
    v-model:show = "showShare" :options="options"
    @select="onSelect"
  />
  
   
    <van-cell title="申请认证" is-link />

   </van-cell-group>
   </div>
   </div>
  
  </div>
</template>



<script>
import { ref } from 'vue';
import { Toast } from 'vant';
import icon from "../../assets/slices/mineslices/icon.png";
import img1 from "../../assets/slices/mineslices/biji.png";
import img2 from "../../assets/slices/mineslices/tiwen.png";
import img3 from "../../assets/slices/mineslices/zuopin.png";
import img4 from "../../assets/slices/mineslices/zhibo.png";
import img5 from "../../assets/slices/mineslices/huati.png";
import img6 from "../../assets/slices/mineslices/dingyue.png";
import img7 from "../../assets/slices/mineslices/caogaoxiang.png";
import a1 from "../../assets/slices/mineslices/scjia.png";
import a2 from "../../assets/slices/mineslices/xcgl2.png";
import a3 from "../../assets/slices/mineslices/biaozj.png";
import a4 from "../../assets/slices/mineslices/chaxun.png";
import a5 from "../../assets/slices/mineslices/zanlan.png";
import a6 from "../../assets/slices/mineslices/chengjiao.png";
import a7 from "../../assets/slices/mineslices/shenqing.png";
import a8 from "../../assets/slices/mineslices/pingxuan.png";


import { getdetailsApi } from "../../utils/api"
export default {
  
   setup() {
    const showShare = ref(false);
    const options = [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
     
    ];

    const onSelect = (option) => {
      Toast(option.name);
      showShare.value = false;
    };
    return {
      options,
      onSelect,
      showShare,
    };
  },
  props:["id"],
data(){
  return {
    icon:icon,
    img1:img1,
    img2:img2,
    img3:img3,
    img4:img4,
    img5:img5,
    img6:img6,
    img7:img7,
    a1:a1,
    a2:a2,
    a3:a3,
    a4:a4,
    a5:a5,
    a6:a6,
    a7:a7,
    a8:a8,
    detailData:{},
   
  
};
},

  components: {},

  computed: {
     judge (){
       if(localStorage.getItem('token')){
        return true;
       }else{
        return false;
       }
     },
  },

  mounted() {
    console.log(this.judge);
    const token=localStorage.getItem('token');
    if(token){
      this.getdetails();  
    }
  },

  methods: {
    async  getdetails(){
      const res = await getdetailsApi( {_id:localStorage.getItem('token')});
        this.detailData = res.results;
        console.log(this.detailData);
    },
     
    gotoNote(){
       console.log(this.detailData._id);
      if(this.detailData._id){
        this.$router.push("/mine/note/"+this.id);
      }else{
        this.$router.push("/login/login");
      }
      
    },
    gotoSet(){
      this.$router.push("/set/set/"+this.id);
    },
    gotomynote(){
      this.$router.push("/mine/mynote/"+this.id);
    },
   threego(){
      this.$router.push("/mine/threego");
      // console.log(222)
    }
  }
};
</script>
<style lang='less' scoped>
.mine-head{
  padding: 0px 20px;
  height:130px;
  .portraits-top{
   height: 65px;
   display: flex;
   margin: auto;
   padding-top: 10px;
   justify-content: space-between;
   
   .portraits-name{
     vertical-align:baseline;
     margin-top:-15px ;

   }
  

   .portraits-ico{
     width: 40px;
     height: 40px;
     border-radius: 50%;
     position: relative;
     left:10px;
     img{
       transform: scale(1.3);
     }
   }
   .portraits-name span:first-child{
     font-size: 16px;
   }
   .portraits-name span:nth-child(2){
     font-size: 12px;
   
     .arro{
       width: 13px;
       height: 13px;
       border: black 1px solid;
       font-size: 12px;
     }
   }
 }
 .portraits-list{
   font-size: 14px;
   height: 65px;
  //  background: blue;
   display: flex;
   justify-content: space-around;
     .ptop{
       display: block;
       text-align: center;
   }
 }


 .order:after {
   height: 60px;
   border: black 2px solid;
 }
}
.minetitle{
  padding: 10px 20px;
  background: #fff;
}


.member-center{
font-size: 12px;
}
.num-code{
  color:#909090 ;
  font-size:12px ;
  position: relative;
  bottom: 18px;
  z-index: 200;
}
.order-p{
  width: 100px;
}

</style>
