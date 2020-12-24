<template>
  <div class="mynote">
     <van-nav-bar
     title="我的笔记"
     left-arrow
     fixed
     @click-left="onClickLeft"
/>
   <div  class="total">
     <div class="total-tilte">
        <span>全部</span>
     </div>
   </div>
     
   <div class="mytotal" v-for="(item , index ) in list.details" :key="index">
     <div class="mynote-top">
       <img  class="pro" src="../../assets/slices/mineslices/head_img.png" alt=""><span class="pro-title">{{list.username}}</span>
     </div>
      <div class="pro" style="margin-bottom:10px">
        <img :src="list.img" alt="" >
      </div>
    
        <p style="font-size:14px;text-indent:10px">{{list.details[index].text}}</p>
     
      
   <div class="appraise">
        <div class="left" >
          <img src="./../../assets/img/home/xihuan.png" alt="" /><span>成为第一个送花的人</span>
        </div>
        <div class="right" style="margin-right:20px">
          <img src="./../../assets/img/home/pinglun.png" alt="" /><span>评论</span>
          <img src="./../../assets/img/home/fenxiang.png" alt="" /><span>转发</span>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import {getdetailsApi} from "../../utils/api";
export default {
  props:["id"],
  data() {
    return {
      list:{},
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getdetails();
  },

  methods: {
    onClickLeft(){
      this.$router.push("/index/mine/"+this.id);
    },
    async getdetails(){
      const res = await getdetailsApi({_id:this.id});
      this.list = res.results;
      console.log(res.results);
    }
  }
};
</script>
<style lang='scss' scoped></style>
