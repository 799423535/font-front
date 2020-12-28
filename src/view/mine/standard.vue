<template>
  <div class="standard">
   <div class="standard-head">
     <div class="top" >
           <div class="top-right">
             <img src="../../assets/slices/mineslices/sanjiao1.png" alt="" @click="gto">
           </div>
           <div class="top-search" @click="gotosearch">
               <input type="text" :placeholder="icon" class="iconfont" disabled="disabled">
           </div>
           <div class="manage">管理</div>
          
       </div>   
    
   <span class="standard-title">*A-Z字母索引，滑动查看更多</span>
      
 <van-tabs class="tabs-index">
  <van-tab title="推荐"  >
    <div class="authors">
       <img src="../../assets/slices/authorslices/qibaishi.png" alt="">
       <div class="author">齐白石</div>
    </div>
    
  </van-tab>
  <van-tab title="B" >内容 2</van-tab>
  <van-tab title="C">内容 3</van-tab>
  <van-tab title="F">内容 6</van-tab>
  <van-tab title="G">内容 2</van-tab>
  <van-tab title="H">内容 3</van-tab>

  <van-tab title="J">内容 5</van-tab>
  <van-tab title="L">内容 6</van-tab>
  <van-tab title="P">内容 3</van-tab>
  <van-tab title="Q" class="authors">
      <img src="../../assets/slices/authorslices/qibaishi.png" alt="">
      <div class="author">齐白石</div>
  </van-tab>
  <van-tab title="R">内容 6</van-tab>
</van-tabs>

 
      
    
    </div>

    </div>
</template>

<script>
import { ref } from 'vue';
export default {
 
   setup() {
    const active = ref(2);
    return { active };
  },

   data(){
           return {               
               icon:'\ue634 作品名称、画面内容、题跋释文'
     };
  
  },
  methods:{
    gto(){
      this.$router.go(-1);
    },
    gotosearch(){
      this.$router.push('/search');
    }
  },
 
}
</script>

<style lang='less' scoped>
 .standard-head{
        width: 100%;
        height: 100%;
   
    .top{
        width: 100%;
        height: 50px;
        background-color:#f6f6f6;
        display:flex;
        align-items: center;
        font-size:0.35rem;
    }
    .top-search{
      margin-left: 20px;
    }
    .top-text{
        margin-left:0.3rem;
    }
    .top-search{
     
        line-height: 0.5rem;
        margin-left:0.2rem;
        margin-right:0.55rem;
        
        .iconfont{
          width: 7rem;
          font-size: 12px;
        }
    }
    
    .top-search>input{
        height: 0.8rem;
        line-height: 0.8rem;
        border:none;
        outline: none;
        padding-left:0.3rem;
    }
    .manage{
      text-indent: 5px;
    }
 }
 .standard-title{
   display: block;
   font-size: 12px;
   line-height: 40px;
   color: #a7a7a7;
   width: 100%;
   text-align: center;
 }
 .tabs-index{
   width: 80%;
   margin: auto;
   .authors{
      margin: 10px 0px  10px -20px;
   }

   img{
   width: 80px;
  
  }
  .author{
    width: 80px;
    height: 20px;
    background: rgba(0, 0,0, 0.2);
    color: white;
    font-size: 12px;
    position: absolute;
    text-align: center;
    bottom: 5px;
   
  }
 }


</style>