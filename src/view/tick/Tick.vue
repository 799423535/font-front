<template>
  <div class="tick">
    <van-nav-bar
      title="特惠购票"
      left-arrow
      @click-left="onClickLeft"
      :border="true"
    />
    <ul class="prod">
      <li v-for="(item, i) in tickList" @click="goDetails(item._id)">
        <img :src="item.img" alt="" />
        <div class="right">
          <h5 class="title">{{ item.title }}</h5>
          <p class="instro">{{ item.interspace }}</p>
          <p class="instro">{{ item.timer }}天后结束，{{ item.distance }}km</p>
          <p class="price">￥{{ item.price }}</p>
        </div>
        <div class="buy">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "/@/store/index";
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    store.dispatch("tick/getTicket");
    const goDetails = (i) => {
      router.push(`/tickDetils/${i}`);
    };
    return { goDetails };
  },

  components: {},

  computed: {
    tickList() {
      return this.$store.state.tick.tickList;
    },
  },

  mounted() {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang='less' scoped>
.prod {
  li {
    padding: 10px 10px;
    margin-bottom: 10px;
    background: #fff;
    display: flex;
    position: relative;
    .buy {
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: 13px;
      text-align: center;
      line-height: 25px;
      height: 25px;
      width: 40px;
      color: red;
      border: 1px solid red;
    }
    img {
      width: 80px;
      height: 120px;
    }
    .right {
      flex: 1;
      padding-left: 10px;
      .title {
        font-size: 16px;
        margin-bottom: 20px;
      }
      .instro {
        margin: 13px 0;
        font-size: 13px;
        color: gray;
      }
      .price {
        color: red;
        font-size: 16px;
      }
    }
  }
}
</style>
