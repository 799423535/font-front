<template>
  <div class="details" v-if="tick.details">
    <div class="dt">
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
    </div>
    <header class="head" :style="background"></header>
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
        <div class="zp">
          <detas :imgsArr="imgsArr" srcKey="src">
            <template v-slot="{ item }">
              <img :src="item.src" alt="" />
            </template>
          </detas>
        </div>
      </div>
    </section>
    <footer class="foot">
      <div class="left">
        <img src="" alt="" /><img src="/@/assets/img/home/dianping.png" />点评
      </div>
      <div @click="promptly">立即购票</div>
    </footer>
    <van-action-sheet v-model:show="show" title="选择票劵">
      <div class="content">
        <p class="session">场次：</p>
        <p class="timer">2020.12.06-2021.01.06</p>
        <p class="selectPrice">选择价格</p>
        <div class="price">
          <div
            class="left"
            @click="clickBg(1)"
            :class="{ active: isBg == 1 ? true : false }"
          >
            <span>单人票</span> | <span>￥{{ price1 }}</span>
          </div>
          <div
            class="right"
            @click="clickBg(2)"
            :class="{ active: isBg == 2 ? true : false }"
          >
            <span>双人票</span> | <span>￥{{ price2 }}</span>
          </div>
        </div>
        <p class="tost">
          温馨提示：1人1票1次入场有效，一经出售，恕不退换，咨询电话：13811623179
        </p>
        <div class="count">
          <span>选择数量</span><van-stepper v-model="count" @click="cot" />
        </div>
        <div class="totle">
          <div class="right">
            <span style="font-size: 12px">合计 ￥</span>
            <span style="color: red">{{ totle }}</span>
            <div class="confirm">确定</div>
          </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import { useStore } from "/@/store/index";
import Detas from "/com/details/Detas.vue";
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
    let show = ref(false);
    const promptly = () => {
      const token = localStorage.getItem("token");
      if (token) {
        show.value = true;
      } else {
        router.push("/login/login");
      }
    };
    store.dispatch("details/findTicket", id);
    let isBg = ref(1);
    let count = ref(1);
    let totle = ref(35);
    let price1 = ref(35);
    let price2 = ref(60);
    let sel = ref(1);
    const clickBg = (i) => {
      isBg.value = Number(i);
      sel.value = i;
      if (sel.value == 1) {
        totle.value = count.value * price1.value;
      } else {
        totle.value = count.value * price2.value;
      }
    };
    const cot = () => {
      if (sel.value == 1) {
        totle.value = count.value * price1.value;
      } else {
        totle.value = count.value * price2.value;
      }
    };
    const imgsArr=[
      {src:"https://img.zai-art.com/89849C37233D7E6E2A0D3ABF3D55B4E3/650C69B837AF94B445AD6E535C9BC260.jpeg?imageView2/2/w/858/h/572/format/jpg"},
      {src:"https://img.zai-art.com/7E9B037125BB5A0568C118C91D500B51/45180734764128C2A0B76648484A74C1.jpeg?imageView2/2/w/858/h/1144/format/jpg"},
      {src:"https://img.zai-art.com/B8578D408A598790209964B76A5ECC6D/353EBCCB85B53B6F3D1AB6F5C7196628.jpeg?imageView2/2/w/858/h/1144/format/jpg"},
      {src:"https://img.zai-art.com/9856B1C78A8B39A9729F0305B467A9CC/0665BB98A582F178F74281BDF7C79E95.jpeg?imageView2/2/w/858/h/1717/format/"},
      {src:"https://img.zai-art.com/D6C905AD388662E5BB9CCC4ACD33FCBB/F256CFC5E8B21B0C21CF87C5B7E3F12E.jpeg?imageView2/2/w/858/h/570/format/jpg"},
      {src:"https://img.zai-art.com/7CD32A721298DFDBF420C259B5270C4A/5C1751DAF3A900D3C77A885D96EB2A77.jpeg?imageView2/2/w/858/h/572/format/jpg"},
      {src:"https://img.zai-art.com/D975FE506BD9E978C0B3BF0E3BA775E9/7EDE867660B1CB0ABDD2B9DD0E417404.jpeg?imageView2/2/w/858/h/1717/format/jpg"},
      {src:"https://img.zai-art.com/A3DEFB62D6909DC76606EBF3131D736B/DFD03350952C35475F9418350DA5E460.jpeg?imageView2/2/w/858/h/1717/format/jpg"},
      {src:"https://img.zai-art.com/041D3CEB6132C353DE986CF93035411B/CC267E70FF22B3ABA67BD01C4928D481.png?imageView2/2/w/858/h/583/format/jpg"},
      {src:"https://img.zai-art.com/4C2B69273B2E4AECEA7A11059D6038A1/2ECCD9E6EB6D8A268B95B7BB37B1ED1E.jpeg?imageView2/2/w/858/h/1144/format/jpg"},
    ];
    return {
      goback,
      isActive,
      handClick,
      promptly,
      show,
      isBg,
      clickBg,
      totle,
      count,
      price1,
      price2,
      cot,
      imgsArr
    };
  },

  components: {Detas},

  computed: {
    tick() {
      return this.$store.state.details.tick;
    },
    background: function () {
      return {
        backgroundImage: "url(" + this.$store.state.details.tick.img + ")",
        // background: "rgba(0,0,0,0.3)",
        filter: "blur(10px)",
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
  .dt {
    width: 100%;
    height: 250px;
    left: 0;
    top: 0;
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
  .head {
    height: 250px;
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 0;
    top: 0;
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
        background: #fff;
        img{
          width: 100%;
        }
      }
    }
  }
  .foot {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    .left{
      background: #eee;
    }
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
  .content {
    height: 400px;
    margin: 0 20px;
    position: relative;
    .session {
      font-size: 14px;
      font-weight: 700;
    }
    .timer {
      width: 170px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 12px;
      color: #3388de;
      background: #eff5fc;
      border: 1px solid #3388de;
      border-radius: 5px;
      margin: 20px 0;
    }
    .selectPrice {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .price {
      display: flex;
      div {
        width: 100px;
        padding: 0 5px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 12px;
        border: 1px solid gray;
        border-radius: 5px;
        &.active {
          background: #eff5fc;
        }
      }

      div:nth-child(2) {
        margin-left: 10px;
      }
    }
    .tost {
      margin: 20px 0;
      font-size: 12px;
      color: gray;
      line-height: 20px;
    }
    .count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
    }
    .totle {
      position: absolute;
      padding: 10px 0;
      width: 100%;
      bottom: 20px;
      border-top: 1px solid #dedede;
      .right {
        display: flex;
        align-items: center;
        float: right;
        .confirm {
          height: 42px;
          width: 102px;
          line-height: 42px;
          color: #fff;
          font-size: 20px;
          background: #3388de;
          text-align: center;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
