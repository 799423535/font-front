<template>
  <div class="index">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/index/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/index/exhibition"
        >看展</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o">图标</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/index/course"
        >课程</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/index/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  setup() {
    const active = 0;
    return { active };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped></style>
