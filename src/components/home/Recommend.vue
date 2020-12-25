<template>
  <div class="rec">
    <van-swipe ref="swipe" class="my-swipe" :autoplay="3000" lazy-render>
      <van-swipe-item
        ><img
          src="https://gw.alicdn.com/imgextra/i3/1350990/O1CN01DDyFu01JBSkLjQQgC_!!1350990-0-lubanu.jpg_790x10000Q75.jpg_.webp"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://gw.alicdn.com/imgextra/i1/1209780/O1CN01ErLbie2M7IALN6i8u_!!1209780-0-lubanu.jpg_790x10000Q75.jpg_.webp"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <div class="discuss">
      <discuss></discuss>
    </div>
  </div>
</template>

<script lang="ts">
import Discuss from "./Discuss.vue";
export default {
  setup() {},

  components: {
    Discuss,
  },

  computed: {},

  mounted() {
    this.$nextTick(() => {
      this.$refs.swipe.resize();
    });
  },

  methods: {},
};
</script>
<style lang='less' scoped>
.rec .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 160px;
  img {
    width: 100%;
    height: 160px;
  }
}
</style>
