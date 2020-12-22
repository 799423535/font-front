<template>
  <div id="city">
    <p class="title">热门城市</p>
    <!-- 热门城市的列表 -->
    <ul class="hot">
      <li v-for="(item) in hotcity.cities"
      :key="item.cityId"
      @click="citybtn(item)"
      >
      {{item.name}}</li>
    </ul>

    <!-- 字母分类的城市列表 -->
    <ul v-for="item in cityList.slice(1)" :key="item.prefix">
      <li>
        <p class="title">{{item.prefix.toUpperCase()}}</p>
        <ul class="cityul">
          <li v-for="elm in item.cities"
          :key="elm.cityId"
          @click="citybtn(elm)"
          >{{elm.name}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList:[], //所有城市列表
      hotcity:[]//热门城市
    };
  },

  components: {},

  mounted() {
      this.getcityList();
  },

  methods: {
    async getcityList(){
      fetch("http://pudge.wang:3080/api/area/list").then(res=>res.json()).then(res=>{
        this.cityList = res.result;
        this.hotcity = res.result[0];
        console.log(this.cityList);
      })

    },
    citybtn(elm){  //点击后，这是全局的state
      console.log(elm);
      this.$router.go(-1);//后退一步的页面
    }
  }
};
</script>
<style lang="less" scoped>
#app{
  
  //标题文字
.title {
  width: 100%;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  padding-left: 15px;
  color: #333;
  background: #ccc;
}
.hot{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #f5f5f5;
  padding-bottom: 15px;
  li{
    width: 95px;
    height: 33px;
    margin-top: 15px;
    background: #fff;
    border: 1px solid #333;
    font-size: 12px;
    text-align: center;
    line-height: 33px;
  }
}
.cityul{
  li{
    height: 44px;
    line-height: 44px;
    margin: 0 15px;
    border-bottom: 1px solid #c8c7cc;
    font-size: 14px;
    color: #333;
  }
}
}
</style>
