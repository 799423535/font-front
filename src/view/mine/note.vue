<template>
   <div class="note">
     <div style="background:#fff;height:210px;margin-bottom:20px">
       <div class="note-bg">
      <img src="../../assets/slices/noteslices/fanhui.png" alt="" class="note-back" @click="gotoMine">
      <img src="../../assets/slices/noteslices/head_img.png" alt="" class="note-portrait"> 
      <div class="fans">
        <ul>
          <li style="color:#000; font-weight:600">3.2k </li>
          <li>获赞</li>
          <li>|</li>
          <li style="color:#52ABF0">{{list.attention}}</li>
          <li>关注</li>
          <li style="color:#52ABF0">{{list.fans}}</li>
          <li>粉丝</li>
        </ul>
         
      </div>
   
     </div>
      <div class="mine-note">
       <van-cell title="查看更多"  is-link />
      </div>

     </div>
       
       <div class="notes">
          <van-cell title="我的笔记" value="2条笔记" is-link   style="color:#52ABF0;font-weight:600 ;"/>
       <div style="background:#fff;" class="note-content"  v-for="(item , index ) in list.details" :key="index">
          <!-- <div >  -->
         <img class="small-portail" src="../../assets/slices/noteslices/head_img.png" alt="">   
          <!-- </div> -->
          <div class="note-right" >
            <p style="font-size:12.67pt">{{list.username}}</p>
            <p style="color:#969696;font-size:8.67pt">{{list.details[index].data}}</p>
            <p style="font-size:14.67pt">{{list.details[index].text}}</p>
             <div style="margin:10px 0"><img :src="list.img" alt=""></div>
            <div class="like">
              <ul class="likelist">
                <li><img src="../../assets/slices/noteslices/btn_forward.png" alt=""> <span>转发</span> </li>
                <li><img src="../../assets/slices/noteslices/btn_flowers.png" alt=""> <span>喜欢</span></li>
                 <li><img src="../../assets/slices/noteslices/btn_comment.png" alt=""> <span>分享</span></li>
              </ul>
            </div>
          </div>
       </div>
       </div>
      
        

        <div class="note-bottom"> 
            <p style="text-align:center" >编辑个人资料</p>
        </div>
    
   </div>
</template>

<script>
import {getdetailsApi} from "../../utils/api";

export default {
  props:["id"],
  data(){
    return {
      list:{}
    }
  },
  methods:{
    gotoMine(){
      this.$router.push("/index/mine/"+this.id)
    },
    //获取个人详情信息
    async getdetails(){
      const res = await getdetailsApi({_id:this.id});
      this.list = res.results;
      console.log(res.results);
    }
  },
  mounted(){
    this.getdetails();
    }
  
}
</script>