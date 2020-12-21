<template>
  <div class="mine">
    <!-- 标题 -->
    <div id="mine-title">
      <van-nav-bar :class="mine-title"   title="我"
      right-text="设置"
      @click-left="onClickLeft"
      @click-right="onClickRight"
     >
     <template #left>
      <van-icon name=comment-o />
     </template>
     </van-nav-bar>
    </div>
    
    <!-- 表头 -->
    <div class="mine-head gap">
        <div class="portraits">
          <div class="portraits-top">
            <div class="portraits-ico"></div>
            <div class="portraits-name">
             <span >七月上</span>
             <br>
             <span>在艺号 <span class="arro">></span> </span>
            </div>
             
             <div class="mine-headercenter">
               会员中心
             </div>
          </div>
          <div class="portraits-bottom">
            <ul class="portraits-list">
              <li>
              <div>
                <span style="margin:auto">0</span>
                  <br>
                <span>关注</span>
              </div>
                  
              </li>
               <li>
                   <span>0</span>
                   <br>
                  <span>粉丝</span>
              </li>
              <li>
                  <span>0</span>
                  <br>
                  <span>积分</span>
              </li>
            </ul>
          
            <span></span>
        </div>
        </div>
        
    </div>
   <!-- 订单 -->
   <div class="money gap">
    <div class="order">
      <p>我的订单</p>
        <span>验票/付款/查物流</span>
        <div></div>
    </div>
  
      <div class="purse">
        <p>我的钱包</p>
        <span>订单/报名商家券</span>
        <div></div>
     </div>

   </div>

   <div class="share gap">
   <div class="minetitle">分享与发现</div>
   <hr>
    <van-grid  :column-num="4">
  <van-grid-item icon="photo-o" text="笔记" />
  <van-grid-item icon="photo-o" text="提问" />
  <van-grid-item icon="photo-o" text="作品" />
  <van-grid-item icon="photo-o" text="直播" />
  <van-grid-item icon="photo-o" text="话题" />
  <van-grid-item icon="photo-o" text="订阅" />
  <van-grid-item icon="photo-o" text="草稿箱" />
  <van-grid-item  />
 </van-grid>
   </div>
   
   <div class="tools gap">
      <div class="minetitle">必备工具</div>
      <hr>
    <van-grid  :column-num="4">
  <van-grid-item icon="photo-o" text="收藏夹" />
  <van-grid-item icon="photo-o" text="行程管理" />
  <van-grid-item icon="photo-o" text="标准件" />
  <van-grid-item icon="photo-o" text="印款查询" />
  <van-grid-item icon="photo-o" text="展览记录" />
  <van-grid-item icon="photo-o" text="成交记录" />
  <van-grid-item icon="photo-o" text="申请上线展" />
  <van-grid-item icon="photo-o" text="评选/赛事" />
 </van-grid>
   </div>

   <div class="help gap">
     <div class="minetitle">帮助和反馈</div>
      <hr>
   <van-cell-group>
    <van-cell title="意见反馈" is-link />
    <van-cell title="分享在艺" is-link />
    <van-cell title="申请认证" is-link />
    <van-cell title="申请认证" is-link />
   </van-cell-group>
   </div>

  
  </div>
</template>



<script>
export default {
 

  components: {},

  computed: {},

  mounted() {},

  methods: {}
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
   justify-content: space-between;
   
   .portraits-name{
     position: relative;
     left: -80px;
     vertical-align:baseline

   }
  

   .portraits-ico{
     width: 40px;
     height: 40px;
     border:1px solid black;
     border-radius: 50%;
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
     }
   }
 }
 .portraits-list{
   height: 65px;
  //  background: blue;
   display: flex;
   justify-content: space-around;
 
 }


 .purse:after {
   height: 60px;
   border: 2px 1px solid;
 }
}
.minetitle{
  padding: 10px 20px;
  background: #fff;
}


</style>
