<template>
  <div class="course-top">
    <van-nav-bar
      :class="course - top"
      fixed
      title="精选好课"
      right-text="我的课程"
      @click-right="gotoSet"
    >
      <template #left> </template>
    </van-nav-bar>
  </div>
  <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <template #pulling="props">
      <img
        class="doge"
        src="https://img.yzcdn.cn/vant/doge.png"
        :style="{ transform: `scale(${props.distance / 80})` }"
      />
    </template>

    <!-- 释放提示 -->
    <template #loosing>
      <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
    </template>

    <!-- 加载提示 -->
    <template #loading>
      <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
    </template>
    <div class="course-picture" v-for="i in 9" :key="i">
      <img src="/@/assets/slices/sliceimages/zp2.png" alt="图片" />
      <p class="">题目题目题目题目题目...</p>
      <div class="wz">
        <span>名字</span>
        <p>￥0</p>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.course-picture {
  margin: 10px;
}
.course-picture img {
  width: 100%;
  height: 30%;
}
.wz {
  font-size: 20px;
}
.wz span {
  float: left;
}
.wz p {
  float: right;
  color: red;
}
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>
