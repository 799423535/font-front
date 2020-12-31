<template>
  <div class="set">
    <van-nav-bar class="set-o" title="设置"  
      left-arrow
      fixed
      @click-left="gotoMine">
     </van-nav-bar>
 
    <van-cell-group title="">
    <van-cell title="账号绑定与密码"  is-link/>
    </van-cell-group>
    <van-cell-group title=" " >
    <van-cell title="语言设置" is-link class="set-line"/>
    <van-cell title="清除缓存"   value="40.68M" is-link  class="set-line"/>
    <van-cell title="视频自动播放" value="仅wifi" is-link />
   
   </van-cell-group>
     <van-cell-group title=" ">
     <van-cell title="给产品评分" is-link  class="set-line" />
     <van-cell title="关于在艺" is-link class="set-line" />
    <van-cell title="隐私政策" is-link />
   </van-cell-group>
    
    <van-cell-group title=" ">
      <van-cell title="退出登录" v-if=" judge" style="color:red;text-align:center" 
      @click="show = true" />
       <van-cell title="退出登录" v-else style="color:gray;text-align:center;" />
      <!-- @click="exitclick" -->
      <van-overlay :show="show" @click="show = false" >
        <van-cell title="退出登录" class="exit"  @click="exitclick" />
        </van-overlay>
      </van-cell-group>
  </div>
</template>

<script>

import {getdetailsApi} from "../../utils/api";
import { ref } from 'vue';

export default {
  props:["id"],
   setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
  data() {
    return {};
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
      const token=localStorage.getItem('token');
      if(token){
      this.getdetails();  
    }
  },

  methods: {
      gotoMine(){
        this.$router.push("/index/mine/"+this.id)
      },
      //退出直接跳转到首页，登录退出
      exitclick(){
      window.localStorage.clear();
       this.$router.push("/index/Home")
      },
      async  getdetails(){
      const res = await getdetailsApi( {_id:localStorage.getItem('token')});
        this.detailData = res.results;
        console.log(this.detailData);
    },
  }
};
</script>
<style lang='less' scoped>
.set-line{
  border-bottom: 1px  solid   #D7D7D7;;
}

.van-cell-group__title{
  padding: 6px;
}
.exit{
   color:red;
   text-align:center;
   position: relative;
   top: 500px;
   width: 90%;
   margin: auto;
   border-radius:10px ;
}
</style>
