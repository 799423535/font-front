<template>

    <!-- 附近展览--主要内容模块 -->

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


</template>

<script>
import { getTickets } from "../../utils/api";
export default {
  data() {
    return {
      list:{}
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
        //点击展览，到详情页
    todetail(id){
      this.$router.push("/tickDetils/"+id);
    },
  }
};
</script>
<style lang='less' scoped>

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
</style>
