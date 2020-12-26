<template>
  <div class="shop">
    <div class="head">
      <van-nav-bar left-arrow :fixed="true" @click-left="goBack">
        <template #left>
          <img src="/@/assets/img/product/jiantou.png" alt="" />
        </template>
        <template #right>
          <img src="/@/assets/img/product/sousuo.png" alt="" />
        </template>
        <template #title>
          <div class="title">
            <router-link to="/shop/store" active-class="active" tag="li"
              >积分商城</router-link
            >
            <router-link to="/shop/task" active-class="active" tag="li"
              >积分任务</router-link
            >
          </div>
        </template>
      </van-nav-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { fn } from "/@/functions/shop/shop";
import { ref } from "vue";
export default {
  setup() {
    const { goBack } = fn();
    return { goBack };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.shop {
  .head {
    padding: 0 10px;
    height: 46px;
    .title {
      height: 100%;
      display: flex;
      a {
        display: block;
        height: 46px;
        line-height: 46px;
        margin: 0 10px;
        &.active {
          font-weight: 700;
          border-bottom: 1px solid #008ce2;
        }
      }
    }
  }
}
</style>
