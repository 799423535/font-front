<template>
  <div class="index">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/index/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/index/exhibition"
        >看展</van-tabbar-item
      >
      <van-tabbar-item icon="/@/assets/slices/mineslices/dibuyuan.png" @click="show = true" >图标</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/index/course"
        >课程</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/index/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
  <van-overlay :show="show" @click="close">
    <div class="wrapper">
      
      <div class="block" @click.stop><span class="wz">分享艺术生活</span>
        <ul class="list">
          <li><img src="/@/assets/slices/sliceimages/icon01.png" alt=""><p>发图片</p></li>
          <li><img src="/@/assets/slices/sliceimages/icon02.png" alt=""><p>短视频</p></li>
          <li><img src="/@/assets/slices/sliceimages/icon03.png" alt=""><p>发作品</p></li>
          <li><img src="/@/assets/slices/sliceimages/icon04.png" alt=""><p>提问题</p></li>
        </ul>
      </div>
    </div>
  </van-overlay>

</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const show = ref(false);
    const active = ref(0);
    return { active, show };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    close() {
      this.show = false
    }
  },
};
</script>
<style lang='less' scoped>
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background:rgba(255, 255, 255, 0.97);
    height: 100%;
  }
  .block {
    width: 100%;
    height: 40%;
  margin-top: 50%;
  }
  .list li {
    float:left; 
    display:inline; 
    width: 50%;
    text-align: center;
    padding: 10px;
    font-size: 15px;
  }
  .wz{
    margin-left: 30%;
  }
  </style>
