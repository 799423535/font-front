<template>
  <div class="set">
    <van-nav-bar class="set-o" title="设置"  
      left-arrow
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
      <van-cell title="退出登录" style="color:red;text-align:center" @click="exitclick"/>
      </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
      gotoMine(){
        this.$router.push("/index/mine")
      },
      //退出直接跳转到首页，登录退出
      exitclick(){
       this.$router.push("/index/Home")
      }
  }
};
</script>
<style lang='scss' scoped></style>
