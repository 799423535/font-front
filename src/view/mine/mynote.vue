<template>
  <div class="mynote">
     <van-nav-bar
     title="我的笔记"
     left-arrow
     @click-left="onClickLeft"
/>
   <div  class="total">
     <div class="total-tilte">
        <span>全部</span>
     </div>
   </div>
     
   
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
    onClickLeft(){
      this.$router.push("/index/mine")
    }
  }
};
</script>
<style lang='scss' scoped></style>
