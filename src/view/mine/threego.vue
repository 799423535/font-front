<template>
  <div class="three">
       <img class="threecover" src="../../assets/slices/authorslices/threecover.png" alt="" >
       <!-- <div>{{count}}</div> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:"",//倒计时
    }
  },
  mounted() {
    this.aaa();
  },
  methods: {
  //3秒后进入跳转页面
    aaa() {
      setTimeout(() => {
        this.$router.replace('/mine/standard')
      }, 3000)
    }
  }
}
</script>
<style lang="less" scoped>
 .threecover{
   width: 100%;
   height: 100%;
   font-size: 0;
   display: block;
 }
 </style>