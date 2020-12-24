import router from '../../router/index';
<template>
  <div>

      <van-nav-bar
        left-text="返回"
        right-text="我的行程"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />

    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {

  },

  methods: {
    onClickLeft(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped></style>
