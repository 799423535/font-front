<template>
  <div>

    <van-nav-bar
      title="热门展馆"
      left-arrow
      @click-left="onClickLeft"    
    />

    <!-- tab切换 -->
    <van-tabs v-model:active="activeName"
     swipeable:true 
     swipe-threshold=4
     color = "#3388de"
     title-active-color="#3388de">
      <van-tab title="美术馆/博物馆" name="a">
        <show></show>
      </van-tab>
      <van-tab title="画廊/艺术中心" name="b">
        
        <div class="wonderful">
          <van-cell title="精彩活动" is-link value="查看更多" />

          <div class="wonderful-box">
            <div class="wonderful-self">
              <img src="../../assets/exhibitionimg/wonderful1.jpg" alt="">
              <p>艺术北京.发现</p>
              <b>13天后结束</b>
            </div>

            <div class="wonderful-self">
              <img src="../../assets/exhibitionimg/wonderful2.jpg" alt="">
              <p>艺术圣诞.奇幻延续</p>
              <b>5天后结束</b>
            </div>
          </div>

        </div>

      </van-tab>
      <van-tab title="拍卖行/艺博会" name="c">
                <div class="wonderful">
          <van-cell title="精彩活动" is-link value="查看更多" />

          <div class="wonderful-box">
            <div class="wonderful-self">
              <img src="../../assets/exhibitionimg/wonderful1.jpg" alt="">
              <p>艺术北京.发现</p>
              <b>13天后结束</b>
            </div>

            <div class="wonderful-self">
              <img src="../../assets/exhibitionimg/wonderful2.jpg" alt="">
              <p>艺术圣诞.奇幻延续</p>
              <b>5天后结束</b>
            </div>
          </div>

        </div>
        <show></show>
      </van-tab>
      <van-tab title="艺术院校" name="d">
        <span>艺术院校</span>
        <show></show>   
      </van-tab>
      <van-tab title="其他" name="e">
        <span>其他</span>
              <div class="wonderful">
          <van-cell title="精彩活动" is-link value="查看更多" />

          <div class="wonderful-box">
            <div class="wonderful-self">
              <img src="../../assets/exhibitionimg/wonderful1.jpg" alt="">
              <p>艺术北京.发现</p>
              <b>13天后结束</b>
            </div>

            <div class="wonderful-self">
              <img src="../../assets/exhibitionimg/wonderful2.jpg" alt="">
              <p>艺术圣诞.奇幻延续</p>
              <b>5天后结束</b>
            </div>
          </div>

        </div>
      </van-tab>
    </van-tabs>



  </div>
  
</template>

<script>
import show from "../../components/exhibition/show.vue";
export default {
  data() {
    return {
      activeName:"a",
      title:["美术馆/博物馆","画廊/艺术中心","拍卖行/艺博会","艺术院校","其他"]
    };
  },

  components: {
    show
  },

  computed: {},

  mounted() {},

  methods: {
    //点击导航返回
    onClickLeft(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='less' scoped>

.title-active-color{
  color: #3388de;
}
.wonderful{
  margin-top:10px;
  background: #fff;
  .wonderful-box{
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    .wonderful-self{
      
      p{
        font-size: 12px;
        color: #222222;
      }
      b{
        font-size: 10px;
        color: #909090;
      }
      img{
        width: 150px;
        height:150px;
      }
    }
  } 
}

</style>
