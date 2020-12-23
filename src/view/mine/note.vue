<template>
   <div class="note">
     <van-nav-bar
      left-text=""
      left-arrow
      @click-left="gotoMine"
/>  
    <div>
       <div>我的笔记</div>
        <van-skeleton title avatar :row="3" />
    </div>
   </div>
</template>

<script>
// import { ref, onMounted } from 'vue';
export default {
  //  setup() {
  //   const loading = ref(true);

  //   onMounted(() => {
  //     loading.value = false;
  //   });

  //   return {
  //     loading,
  //   };
  methods:{
    gotoMine(){
      this.$router.push("/index/mine")

    }
  }
}
</script>

<style>

</style>