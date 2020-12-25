<template >
<div class="email">
    <van-nav-bar
    title="机构注册"
    left-arrow
    @click-left="gotologin"
   />
  <div class="register1">
     <van-field v-model="form.username" placeholder="手机/电子邮箱" class="login-btn frame" />
     <div style="display:flex">
       <van-field
    v-model="form.password"
    placeholder="请输入密码"
    class="frame cor"
 />
     <van-button  type="primary" style="margin-top:27px" @click="btnlogin">确认密码</van-button>
     
     </div>
    

      
    <div style="font-size:12px;float:right ;background:#fff ;color:#333">
      注册即视为同意<span style="color:blue">《用户服务条款》《隐私政策》</span>
    </div>
  
  </div>
</div>

</template>

<script>
import { Toast } from 'vant';
import axios from "axios"
import  { getaddUserApi } from "../../utils/api.ts"
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
  data(){
    return{
      form:{
        username:"",
        password:"",
      }
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //后退
    gotologin(){
      this.$router.push("/login/login")
    },
    //点击按钮，验证
  async  btnlogin(){
        const res =await getaddUserApi({username:this.form.username,password:this.form.password});
         if(res.state==0){
         localStorage.setItem('token',res.token);
         this.$router.replace("/login/login")
         }else{
          Toast(res.msg);
        }
        console.log(res);
    },   
    }
  };

</script>
<style lang='scss' scoped></style>
