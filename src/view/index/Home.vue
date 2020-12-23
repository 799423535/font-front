<template>
  <div class="home">
    <div class="head">
      <div class="top">
        <img src="/@/assets/img/home/icon.png" alt="" />
        <input
          type="text"
          class="ipt"
          placeholder="搜索用户、展览、作品、艺术家和机构"
        />
        <img src="/@/assets/img/home/btn02.png" alt="" />
      </div>
      <ul class="bot">
        <li>
          <img src="/@/assets/img/home/icon01.png" alt="" />
          <p>直播</p>
        </li>
        <li>
          <img src="/@/assets/img/home/icon02.png" alt="" />
          <p>看展购票</p>
        </li>
        <li>
          <img src="/@/assets/img/home/icon03.png" alt="" />
          <p>商城</p>
        </li>
        <li>
          <img src="/@/assets/img/home/icon04.png" alt="" />
          <p>评选/赛事</p>
        </li>
        <li>
          <img src="/@/assets/img/home/icon05.png" alt="" />
          <p>看拍卖</p>
        </li>
      </ul>
    </div>

    <!-- 全部分类 热展 vlog 海外 文创 买画 拍场 讲座 学术 设计 -->
    <nav class="nav">
      <div class="ims" @click=""><img src="/@/assets/img/home/xiangxiajiantou.png" alt=""></div>
      <!-- <li>关注</li>
      <li>推荐</li>
      <li>视频</li> -->
      <van-tabs  color="#3388DE" v-model="active" line-width="30">
        <van-tab title="关注" to="Attention"/>
        <van-tab title="推荐" to="Recommend"/>
        <van-tab title="视频"/>
        <van-tab title="热展"/>
        <van-tab title="vlog"/>
        <van-tab title="海外"/>
        <van-tab title="文创"/>
        <van-tab title="买画"/>
        <van-tab title="拍场"/>
        <van-tab title="讲座"/>
        <van-tab title="买画"/>
        <van-tab title="学术"/>
        <van-tab title="设计"/>
      </van-tabs>
    </nav>
    <router-view></router-view>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let active=1;
    return {active};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
});
</script>
<style lang='less' scoped>
.home {
  background: #f5f5f5;
}
.home .head {
  width: 100%;
  background: #fff;
}
.home .head .top {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.home .head .top img {
  width: 22px;
  height: 22px;
}
.home .head .top .ipt {
  border-radius: 30px;
  background: #fff;
  width: 297px;
  height: 28px;
  border: 0 solid transparent;
  padding-left: 10px;
  font-size: 14px;
  box-shadow: 0 0 5px 2px #eee;
  &::placeholder {
    background: url("./../../assets/img/home/btn03.png") no-repeat 0;
    font-size: 12px;
    color: #dedede;
    padding-left: 20px;
    line-height: 10px;
  }
}
.home .head .bot {
  display: flex;
  font-size: 12px;
  font-weight: 900;
  justify-content: space-around;
  padding: 10px 0;
  > li {
    text-align: center;
    p {
      margin-top: 5px;
    }
  }
}
.home  .nav {
  margin-top: 10px;
  position: relative;
  .ims{
    position: absolute;
    right: 0;
    z-index: 999;
    width: 50px;
    height: 50px;
    background: #fff;
    height: 100%;
    img{
      top: 50%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }

  }
}
</style>
