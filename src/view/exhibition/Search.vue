<template>
    <!-- 头部搜索 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        background="#f6f6f6"
        placeholder="搜索"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

  <!-- 附近 -->
    <div class="nearby">
        <div class="nearby-main">
          <van-icon name="desktop-o" />
          <span style="padding:0 5px">附近的展览</span>
          <van-icon name="arrow" />
        </div>
        <div class="xian"></div>
        <div class="nearby-main">
          <van-icon name="desktop-o" />
          <span style="padding:0 5px">附近的展览</span>
          <van-icon name="arrow" />
        </div>
    </div>

    <div>
      <ul class="ullist">
        <li>婆娑之境</li>
        <li>永恒的丝线</li>
        <li>相遇在此</li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onCancel(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='lass' scoped>
.van-field__control{
  background-color: white !important;
  
}
.van-search__action{
  color: #3388DE !important;
}
  .nearby{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 8px;
    background: #ffffff;
    height: 40px;
    width: 100%;
  }
  .nearby-main{
    display: flex;
    font-size: 16px;
    color: #444;

  }
  .xian{
    border-right: 1px solid #dedede;
  }
  .ullist{
    width: 90%;
    height: 50px;
    margin-top: 20px;
    list-style: none;
    display: flex;
    justify-content:center;
    font-size: 18px;
    padding-left: 30px;
  }
  li{
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #dedede;
  }
</style>
