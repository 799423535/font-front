<template>
  <div class="standard">
   <div class="standard-head">

     <div class="top">
           <div class="top-right">
             <img src="../../assets/slices/mineslices/sanjiao1.png" alt="" @click="gto">
           </div>
           <div class="top-search">
               <input type="text" :placeholder="icon" class="iconfont">
           </div>
           <div class="manage">管理</div>
          
       </div>   
    
   <span class="standard-title">*A-Z字母索引，滑动查看更多</span>
      
 <van-tabs class="tabs-index">
  <van-tab v-for="index in 8" :title="'推荐 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>

 
      
    
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
    }
  }
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
 }

</style>