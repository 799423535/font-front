<template>
  <div class="home">
    <div class="head">
      <div class="top">
        <img src="/@/assets/img/home/icon.png" alt="" />
        <input type="text" class="ipt" placeholder="搜索用户、展览、作品、艺术家和机构" />
        <img src="/@/assets/img/home/btn02.png" alt="" />
      </div>
      <ul class="bot">
        <li>
          <img src="/@/assets/img/home/icon01.png" alt="" />
          <p>直播</p>
        </li>
        <li @click="goTick">
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
      <van-tabs
        @click="handlerClick"
        color="#3388DE"
        line-width="30"
        sticky
        animate
        v-model:active="active"
      >
        <div class="ims">
          <van-cell is-link @click="showPopup">
            <img src="/@/assets/img/home/xiangxiajiantou.png" alt="" />
          </van-cell>
          <van-popup v-model:show="show" position="top" :style="{ height: '25%' }">
            <p class="title">全部分类</p>
            <ul class="boxul">
              <li v-for="(item, i) in arr" @click="handlerClick(i)" :key="i">
                {{ item.title }}
              </li>
            </ul>
          </van-popup>
        </div>

        <van-tab :title="item.title" v-for="(item, i) in arr" :key="i">
          <component :is="item.component"></component>
        </van-tab>
      </van-tabs>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
import { fn } from "./../../functions/home/nav";
import Attention from "./../../components/home/Attention.vue";
import Recommend from "./../../components/home/Recommend.vue";
export default defineComponent({
  setup() {
    const { arr, active, showPopup, show } = fn(reactive, ref);
    return { arr, active, showPopup, show };
  },

  components: {
    Attention,
    Recommend,
  },

  computed: {},

  mounted() {},

  methods: {
    handlerClick(i: Number): void {
      this.active = i;
      localStorage.setItem("active", this.active + "");
      this.show = false;
      this.$forceUpdate();
    },
    goTick() {
      this.$router.push("/tick");
    },
  },
});
</script>
<style lang="less" scoped>
.home {
  background: #f5f5f5;
  .dis {
    background: #f5f5f5;
  }
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
.home .nav {
  margin-top: 10px;
  background: #fff;
  position: relative;
  .ims {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999;
    width: 50px;
    height: 40px;
    background: #fff;
    img {
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

.home .ims .title {
  text-align: center;
  padding-top: 10px;
  font-size: 25px;
}
.home .boxul {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    font-size: 16px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    background: #eee;
    text-align: center;
    margin-top: 5px;
  }
}
</style>
