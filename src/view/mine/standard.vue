<template>
  <div class="standard">
   <div class="standard-head">

     <div class="top">
           <div class="top-right">
             <img src="../../assets/slices/mineslices/sanjiao1.png" alt="">
           </div>
           <div class="top-search">
               <input type="text" :placeholder="icon" class="iconfont">
           </div>
           <div class="manage">管理</div>
          
       </div>   
    
       
      </div>
    
    </div>

</template>

<script>
export default {
   data(){
           return {               
               icon:'\ue634 作品名称、画面内容、题跋释文'
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
 
</style>