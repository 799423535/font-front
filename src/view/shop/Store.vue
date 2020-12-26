<template>
  <div class="store">
    <div class="banner">
      <img src="/@/assets/img/product/banner.png" alt="" />
    </div>
    <div class="integral">
      <p>
        <span>我的积分:<span class="count">0</span></span>
      </p>
    </div>

    <div class="intro">
      <div class="left">
        <p>活动赚积分</p>
        <p>情人节有奖话题活动讲演撒旦法师法师</p>
        <p>立即参与</p>
        <div><img src="/@/assets/img/product/have1.jpg" alt="" /></div>
      </div>
      <div class="right">
        <div class="top">
          <div class="tit">
            <div class="title">积分抽大奖</div>
            <div class="subtit">最高可得iPhonex</div>
          </div>
          <img src="/@/assets/img/product/shouji.png" alt="" />
        </div>
        <div class="bot">
          <div class="tit">
            <div class="title">看展代金券</div>
            <div class="subtit">买票更便宜</div>
          </div>
          <img src="/@/assets/img/product/yhj.png" alt="" />
        </div>
      </div>
    </div>
    <div class="likes">
      <p>大家都喜欢 <img src="/@/assets/img/product/jiantou2.png" alt="" /></p>
      <div class="main"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
});
</script>
<style lang="less" scoped>
.store {
  background: #f5f5f5;
  .integral {
    background: #fff;
    padding: 10px 20px;
    p {
      text-align: center;
      height: 35px;
      line-height: 35px;
      background: #f6f6f6;
      font-size: 13px;
      color: #222222;
      font-weight: 700;
      .count {
        color: #fc9723;
        font-size: 16px;
        margin-left: 5px;
      }
    }
  }
  .intro {
    display: flex;
    padding: 0 20px;
    padding-bottom: 10px;
    justify-content: space-between;
    background: #fff;
    .left {
      width: 155px;
      height: 145px;
      background: #feefda;
      border-radius: 5px;
      padding: 10px;
      p:nth-child(1) {
        margin-top: 5px;
        font-size: 16px;
        color: #444444;
        font-weight: 700;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #777777;
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:nth-child(3) {
        width: 60px;
        height: 16px;
        line-height: 16px;
        border-radius: 8px;
        background: #fdbb33;
        font-size: 12px;
        color: #fff;
        text-align: center;
      }
      div {
        margin-top: 10px;
        img {
          width: 128px;
          height: 55px;
          display: block;
        }
      }
    }
    .right {
      width: 180px;
      height: 145px;
      margin-left: 4px;
      > div {
        padding: 10px 12px;
        border-radius: 5px;
        width: 100%;
        height: 70px;
        background: #f9e8ea;
        display: flex;
        justify-content: space-between;
      }
      div:nth-child(2) {
        margin-top: 5px;
      }
      .top {
        .tit {
          .title {
            font-size: 15px;
            font-weight: 700;
          }
          .subtit {
            font-size: 12px;
            color: #777777;
          }
        }
      }
      .bot {
        .tit {
          .title {
            font-size: 15px;
            font-weight: 700;
          }
          .subtit {
            font-size: 12px;
            color: #777777;
          }
        }
        img {
          width: 55px;
          height: 30px;
          margin-top: 10px;
        }
      }
    }
  }
  .likes {
    padding: 0 20px;
    margin-top: 10px;
    background: #fff;
    p {
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #444444;
      font-size: 14px;
      font-weight: 700;
    }
    .main {
    }
  }
}
</style>
