<template>
  <div class="dis">
    <div class="single" v-for="(item, i) in intorList" :key="i">
      <div class="item-top">
        <div class="left">
          <img :src="item.head" alt="" class="head" />
          <div class="title">{{ item.name }}</div>
        </div>
        <div class="right">
          <div class="attention">
            <img src="./../../assets/img/home/guanzhu.png" alt="" />
            关注
          </div>
          <img src="./../../assets/img/home/liebiao.png" alt="" />
        </div>
      </div>
      <div class="main">
        <div class="left">
          <van-image
            :src="item.main"
            width="210"
            height="210"
            lazy-load
            radius="5"
            alt=""
          >
            <template v-slot:loading>
              <van-loading type="spinner" />
            </template>
          </van-image>
        </div>
        <div class="right">
          <van-image
            radius="5"
            lazy-load
            :src="item.rightimg1"
            width="110"
            height="103"
            alt=""
          />
          <van-image
            radius="5"
            lazy-load
            :src="item.rightimg2"
            width="110"
            height="103"
            alt=""
          />
        </div>
      </div>
      <p class="title">{{ item.title }}</p>
      <div class="appraise">
        <div class="left">
          <img src="./../../assets/img/home/xihuan.png" alt="" />
          <p>成为第一个送花的人</p>
        </div>
        <div class="right">
          <img src="./../../assets/img/home/pinglun.png" alt="" />
          <img src="./../../assets/img/home/fenxiang.png" alt="" />
        </div>
      </div>
      <div class="ipt">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1028479771,2944343576&fm=26&gp=0.jpg"
          alt=""
        />
        <input type="text" class="txt" placeholder="添加评论..." />
      </div>
    </div>
    <div class="user">
      <p class="title">你可能感兴趣的用户</p>
      <div class="ut">
        <ul class="user-item">
          <li v-for="(item, i) in userList" :key="i">
            <img class="cls" src="./../../assets/img/home/quxiao02.png" alt="" />
            <img :src="item.img" alt="" />
            <p class="ft">{{ item.title }}</p>
            <p class="ft">{{ item.subtitle }}</p>
            <p class="ft">{{ item.count }} 笔记</p>
            <div class="att">+ 关注</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "./../../store/index";
import BetterScroll from "better-scroll";
export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch("home/getIntroduce");
    store.dispatch("home/getUser");
  },

  components: {},

  computed: {
    intorList(): any {
      return this.$store.state.home.intorList.results;
    },
    userList(): any {
      return this.$store.state.home.userList;
    },
  },

  mounted() {},

  methods: {},
});
</script>
<style lang="less" scoped>
.dis .single {
  height: 376px;
  width: 100%;
  margin-top: 10px;
  padding: 10px 18px;
  background: #fff;
  .item-top {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .head {
        width: 36px;
        height: 36px;
        border: 1px solid #eee;
        border-radius: 50%;
      }
      .title {
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      .attention {
        display: flex;
        width: 60px;
        height: 27px;
        font-size: 12px;
        align-items: center;
        border: 1px solid #eee;
        margin-right: 10px;
      }
      .rad {
        font-size: 20px;
        background: white;
      }
    }
  }
}
.dis .main {
  margin-top: 10px;
  height: 210px;
  display: flex;
  justify-content: space-around;
  .left {
    width: 210px;
    img {
      width: 210px;
      height: 210px;
      border-radius: 5px;
    }
  }
  .right {
    width: 110px;
    .van-image {
      margin: 0;
      display: block;
    }
    .van-image:nth-child(2) {
      margin-top: 4px;
    }
  }
}
.dis .single .title {
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 5px;
}
.dis .single {
  border-bottom: 1px solid #eee;
}
.dis .single .appraise {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  .left {
    display: flex;
    font-size: 12px;
    align-items: center;
    img {
      margin-right: 5px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    img {
      margin: 0 5px;
    }
  }
}
.dis .ipt {
  margin-top: 5px;
  display: flex;
  justify-content: start;
  .txt {
    border: 0;
    font-size: 20px;
    padding-left: 10px;
    &::placeholder {
      font-size: 12px;
    }
  }
  img {
    width: 22px;
    height: 22px;
  }
}

//感兴趣的用户
.dis .user {
  padding: 0 18px;
  margin-top: 15px;
  .title {
    font-size: 12px;
    padding: 10px 0;
  }
  .ut {
    overflow: auto;
    width: 100%;
    .user-item {
      display: inline-flex;
      li {
        flex-shrink: 0;
        width: 150px;
        height: 280px;
        text-align: center;
        border: 1px solid #eee;
        margin: 0 3px;
        position: relative;
        border-radius: 5px;
        img {
          margin-top: 12px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        .cls {
          position: absolute;
          right: 0;
          top: 0;
          width: 22px;
          height: 22px;
          margin: 0;
        }
        .att {
          width: 115px;
          height: 24px;
          line-height: 24px;
          border: 1px solid #6daceb;
          font-size: 12px;
          color: #6daceb;
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
    }
  }
}
.dis .ft {
  font-size: 14px;
  margin-top: 15px;
}
</style>
