<template>
  <div class="tesk">
    <div class="banner">
      <p>我的积分<span class="">积分明细</span></p>
      <div>167</div>
    </div>
    <div class="sign">
      <ul>
        <li v-for="i in 7" :key="i">
          <img src="/@/assets/img/product/btn_signin_bg(1).png" alt="" />
          <p>{{ i }}天</p>
        </li>
      </ul>
      <div class="days">已连续签到0天</div>
    </div>
    <div class="main">
      <div class="title">
        新手上道
        <p class="comp">
          <span v-if="state.list.results"
            >{{ state.list.cnt }}/{{ state.list.results.length }}已完成</span
          >
          <img src="/@/assets/img/product/btn_open(1).png" alt="" />
        </p>
      </div>
      <div class="mission" v-for="(item, i) in state.list.results" :key="i">
        <div class="left">
          <p class="txt">{{ item.txt }}</p>
          <p class="count">{{ item.count }}分</p>
        </div>
        <div class="right">
          <img v-if="!item.src" src="/@/assets/img/product/btn_go(1).png" alt="" />
          <img v-else src="/@/assets/img/product/btn_complete.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from "vue";
import { getTasks } from "./../../utils/api";
export default defineComponent({
  setup() {
    const state = reactive({
      list: [],
    });
    getTasks().then((res) => {
      state.list = res;
    });
    return { state };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
});
</script>
<style lang="less" scoped>
.tesk {
  background: #f5f5f5;
  .banner {
    height: 125px;
    background: url("./../../assets/img/product/bg.png");
    padding: 0 20px;
    overflow: hidden;
    p {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #fff9cf;
      position: relative;
      span {
        position: absolute;
        right: 0;
        font-size: 12px;
        display: flex;
        align-items: center;
      }
    }
    div {
      margin-top: 10px;
      color: #fff9cf;
      font-size: 34px;
      text-align: center;
    }
  }
  .sign {
    height: 125px;
    margin: -40px 20px 0;
    background: #fff;
    border-radius: 5px;
    position: relative;
    ul {
      display: flex;
      padding-top: 20px;
      justify-content: space-evenly;
      li {
        p {
          font-size: 12px;
          color: #ffc878;
          text-align: center;
        }
      }
    }
    .days {
      height: 30px;
      line-height: 30px;
      position: absolute;
      border-top: 1px solid #d0d0d0;
      bottom: 0;
      width: 100%;
      font-size: 12px;
      color: #6a6a6a;
      text-align: center;
    }
  }
  .main {
    margin-top: 20px;
    .title {
      font-size: 14px;
      color: #3c3c3c;
      font-weight: 700;
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 50px;
      border-bottom: 1px solid #dddddd;
      justify-content: space-between;
      .comp {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #9c9c9c;
      }
    }
    .mission {
      padding: 0 20px;
      border-bottom: 1px solid #d8d8d8;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        .txt {
          font-size: 16px;
          color: #373737;
          font-weight: 700;
        }
        .count {
          margin-top: 10px;
          font-size: 14px;
          color: #fe9200;
        }
      }
    }
  }
}
</style>
