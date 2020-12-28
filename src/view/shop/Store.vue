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
    <div class="likes sc1">
      <p>大家都喜欢 <img src="/@/assets/img/product/jiantou2.png" alt="" /></p>
      <div class="main">
        <ul>
          <li v-for="(item, i) in results.likes1">
            <img :src="item.img" alt="" />
            <p>{{ item.title }}</p>
            <p>{{ item.count }}积分</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="likes sc2">
      <p>大家都喜欢 <img src="/@/assets/img/product/jiantou2.png" alt="" /></p>
      <div class="main">
        <ul>
          <li v-for="(item, i) in results.likes2">
            <img :src="item.img" alt="" />
            <p>{{ item.title }}</p>
            <p>{{ item.count }}积分</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="list">
      <p class="title">热门商品<img src="/@/assets/img/product/jiantou2.png" alt="" /></p>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getList"
        offset="1"
      >
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <img :src="item.hot[0].img" alt="" />
            <p>{{ item.hot[0].title }}</p>
            <p>{{ item.hot[0].count }}积分</p>
          </li>
        </ul>
      </van-list>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { fn } from "/@/functions/shop/shop";

export default defineComponent({
  setup() {
    const { getShop, results, getList, list, loading, finished } = fn();
    getShop(".sc1 .main", ".sc2 .main");
    return { getShop, results, getList, list, loading, finished };
  },
  // this.$nextTick(() => {
  //       new BetterScroll(".sc1 .main", {
  //         click: true,
  //         scrollX: true,
  //         scrollY: false,
  //       });
  //       new BetterScroll(".sc2 .main", {
  //         click: true,
  //         scrollX: true,
  //         scrollY: false,
  //       });
  //     });
  distoryed() {
    store.commit("shop/clear");
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
    padding-bottom: 10px;
    > p {
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #444444;
      font-size: 14px;
      font-weight: 700;
    }
    .main {
      width: 100%;
      overflow: hidden;
      ul {
        display: inline-flex;
        li {
          margin-right: 10px;
          img {
            height: 86px;
            width: 86px;
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 14px;
            color: #444444;
            margin-top: 8px;
          }
          p:nth-child(3) {
            color: #ff343b;
          }
        }
      }
    }
  }
  .list {
    margin-top: 10px;
    background: #fff;
    padding: 0 20px;
    text-align: center;
    .title {
      height: 50px;
      border-bottom: 1px solid #eee;
      font-size: 15px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ul {
      overflow: hidden;
      li {
        margin-top: 10px;
        float: left;
        width: 160px;
        border: 1px solid #eee;
        &:nth-child(even) {
          margin-left: 10px;
        }
        img {
          width: 160px;
          height: 160px;
        }
        p {
          padding-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 14px;
          color: #444444;
          margin-top: 8px;
          padding: 0 5px;
          text-align: left;
        }

        p:nth-child(3) {
          color: #ff343b;
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>
