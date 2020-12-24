<template>
  <div class="details" v-if="tick.details">
    <header class="head" :style="background">
      <div class="navbar">
        <div class="left">
          <img
            src="./../../assets/img/home/sanjiao.png"
            alt=""
            @click="goback"
          />
        </div>
        <div class="right">
          <img src="./../../assets/img/home/sous.png" alt="" />
          <img src="./../../assets/img/home/sadian.png" alt="" />
        </div>
      </div>
      <div class="head-main">
        <img :src="tick.img" alt="" />
        <div class="right">
          <h5 class="title">{{ tick.title }}</h5>
          <p class="timer">时间:{{ tick.details.date }}</p>
          <p class="address">地址：{{ tick.details.daddress }}</p>
          <p class="address">{{ tick.details.address }}</p>
          <p class="more">查看更多</p>
        </div>
      </div>
      <div class="footer">
        <div>添加行程</div>
        <div class="foot-end">
          <img src="/@/assets/img/home/xihuan.png" alt="" />{{
            tick.details.likes
          }}喜欢
        </div>
      </div>
    </header>
    <section class="main">
      <div class="intro" :class="{ a: isActive }">
        {{ tick.details.introduce }}
      </div>
      <p class="more" @click="handClick">
        <span v-if="isActive">查看全部</span><span v-else>收起</span>
      </p>
      <p class="label">
        <img src="/@/assets/img/home/qizi.png" alt="" />
        {{ tick.details.label }}
      </p>
      <div class="organ">
        <p class="title">
          <a href="#">机构/策划/艺术家</a> <span class="tmore">查看更多></span>
        </p>
        <div class="ims">
          <img
            src="https://img.zai-art.com/0A180429A5FC73DE91BD143FF581B5C1/4E2DCAE55C003D4CC7E72B27971BC9C5"
            alt=""
          />
          <p>艺典空间</p>
        </div>
      </div>
      <div class="works">
        <p class="zuopin">
          作品(10) <img src="/@/assets/img/home/liebiao.png" alt="" />
        </p>
        <div class="zp"></div>
      </div>
    </section>
    <footer class="foot">
      <div>
        <img src="" alt="" /><img src="/@/assets/img/home/dianping.png" />点评
      </div>
      <div @click="promptly">立即购票</div>
    </footer>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import { useStore } from "/@/store/index";
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const id = route.params.id;
    const goback = () => {
      router.go(-1);
    };
    let isActive = ref(true);
    const handClick = () => {
      isActive.value = !isActive.value;
    };
    const promptly = () => {
      const token = localStorage.getItem("token");
      
      // if (token) {

      // } else {
      //   router.push("/login/login");
      // }
    };
    store.dispatch("details/findTicket", id);
    return { goback, isActive, handClick, promptly };
  },

  components: {},

  computed: {
    tick() {
      return this.$store.state.details.tick;
    },
    background: function () {
      return {
        // backgroundImage: "url(" + this.$store.state.details.tick.img + ")",
        background: "rgba(0,0,0,0.3)",
        // filter: "blur(10px)",
      };
    },
  },

  mounted() {},

  methods: {},
});
</script>
<style lang='less' scoped>
.details {
  position: relative;
  .head {
    height: 250px;
    .navbar {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      justify-content: space-between;
      .right {
        img:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
    .head-main {
      height: 125px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      img {
        width: 90px;
        height: 125px;
      }
      .right {
        margin-left: 10px;
        flex: 1;
        color: white;
        .title {
          font-size: 15px;
          margin-bottom: 15px;
        }
        .timer {
          font-size: 12px;
        }
        .address {
          font-size: 12px;
          margin-top: 8px;
        }
        .more {
          text-align: right;
          margin-top: 15px;
          font-size: 12px;
        }
      }
    }
    .footer {
      margin-top: 25px;
      font-size: 14px;
      color: white;
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
      div {
        text-align: center;
        width: 160px;
        height: 30px;
        line-height: 30px;
        border: 1px solid white;
      }
      .foot-end {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          margin-right: 3px;
        }
      }
    }
  }
  .main {
    margin-bottom: 43px;
    .intro {
      padding: 5px 20px;
      line-height: 30px;
      font-size: 14px;
      background: white;
    }
    .a {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
    .more {
      text-align: right;
      background: white;
      padding: 0 20px;
      font-size: 14px;
      padding-bottom: 5px;
    }
    .label {
      img {
        margin-right: 5px;
      }
      display: flex;
      align-items: center;
      padding: 5px 20px;
      background: white;
      font-size: 14px;
      color: #777777;
    }
    .organ {
      margin-top: 10px;
      height: 170px;
      padding: 0 20px;
      background: white;
      .title {
        display: flex;
        font-size: 16px;
        justify-content: space-between;
        padding: 10px 0;
        a {
          text-decoration: none;
          color: #57aef1;
        }
        .tmore {
          color: gray;
        }
      }
      .ims {
        img {
          width: 85px;
          height: 85px;
          border: 1px solid #eee;
        }
        p {
          margin-top: 5px;
          font-size: 15px;
          padding-left: 5px;
        }
      }
    }
    .works {
      margin-top: 10px;
      background: white;
      padding: 0 20px;
      p:nth-child(1) {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        color: rgb(87, 174, 241);
        font-size: 15px;
      }
      .zp {
        height: 500px;
      }
    }
  }
  .foot {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    div {
      height: 43px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    div:nth-child(2) {
      background: #3388de;
      color: #fff;
    }
  }
}
</style>
