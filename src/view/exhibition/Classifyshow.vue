<template>
  <div>
      <div class="header">
        <van-nav-bar
        title="分类看展"

        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />


     </div>
              <!-- 下拉框 -->
      <van-dropdown-menu active-color="#1989fa">
        <van-dropdown-item v-model="value" :options="option" />
         <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>




      <!-- 附近展览--主要内容模块 -->
    <div class="nearby">
      <!-- <van-cell title="附近展览" is-link value="查看更多" />  -->
      <!-- 遍历展览内容 -->
      <div class="nearby-m">
        <div class="nearby-main" v-for="item in list" @click="todetail(item._id)">
            <img :src="item.img" alt="">
            <div class="nearby-right">
              <h5>{{item.title}}</h5>
              <p>{{item.interspace}}</p>
              <span>正在进行</span>
            </div>
        </div>
      </div>
    </div>

  
  </div>
</template>

<script>
import {getTickets} from "../../utils/api";
export default {
  data() {
    return {
      value: 0,
      value1: "a",
      value2: "z",
      list:[],

      switch1: false,
      switch2: false,
      option: [
      { text: '全部', value: 0 },
      { text: '书画', value: 1 },
      { text: '油画', value: 2 },
      { text: '瓷器', value: 3 },
      { text: '珠玉', value: 4 },
      { text: '雕塑', value: 5 },
      { text: '佛像', value: 6 },
      ],
      option1: [
      { text: '正在进行', value: "a" },
      { text: '即将结束', value: "b" },
      { text: '已结束', value: "c" },
      ],
      option2: [
      { text: '时间正序', value: "z" },
      { text: '时间倒叙', value: "x" },
      { text: '离我最近', value: "y" },
      ],

    };

  },

  components: {},

  computed: {},

  mounted() {
     this.getList();
  },

  methods: {
        //获取数据
     async getList(){
        const res = await getTickets();
        this.list = res.results;
        console.log(res.results);
    },
    onClickLeft(){
      this.$router.go(-1);
    },
    todetail(id){
      this.$router.push("/tickDetils/"+id);
    }
  },


};
</script>
<style lang='less' scoped>
.header{
  width: 100%;
  position: fixed;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.van-dropdown-menu{
   border-bottom: 1px solid #dedede;
   border-top: 1px solid #dedede;
   position: absolute;
   top: 45px;
   left: 0;
   width: 100%;
}

.nearby{
padding-top:90px;
background: #fff;
  .nearby-m{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .nearby-main{
    border-top: 1px solid #ccc;
    width:100%;
    height: 125px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
      float: left;
      width: 58px;
      height: 84px;
      
    }
    .nearby-right{
      float: right;
      display: flex;
      flex-direction: column;
      color: #909090;
      font-size: 12px;
      width: 240px;
      padding-bottom: 30px;
      h5{
        padding: 10px 0;
        color: #222222;
        font-size:12px;
        width: 240px;
        text-overflow: ellipsis; //文字过长，显示省略号
        overflow: hidden;
        white-space: nowrap;
      }
      p{
        margin: 5px 0;
      }
    }
    }
  }
}
</style>

