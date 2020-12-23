<template>
<div class="email">
    <van-nav-bar
    title="机构注册"
    left-arrow
    @click-left="gotologin"
   />
  <div class="register">
     <van-field v-model="value" placeholder="手机/电子邮箱" class="login-btn frame" />
     <div style="display:flex">
       <van-field
    v-model="sms"
    placeholder="验证码"
    class="frame cor"
 />
     <van-button  type="primary" style="margin-top:6px">发送验证码</van-button>

     </div>
    

      
    <div style="font-size:12px;float:right ;background:#fff ;color:#333">
      注册即视为同意<span style="color:blue">《用户服务条款》《隐私政策》</span>
    </div>
  
  </div>
</div>

</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    });

    return { state };
  },
  

  components: {},

  computed: {},

  mounted() {},

  methods: {
    gotologin(){
      this.$router.push("/login/login")
    }
  }
};
</script>
<style lang='scss' scoped></style>
