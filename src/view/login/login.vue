<template>
<div style="background:#fff">
  <div>
     <img src="../../assets/slices/loginslices/quxiao.png" alt="" style="margin:10px" @click="goback">
  </div>
    <div class="login" >
    <div class="logodiv">
   
      <img src="../../assets/slices/loginslices/logo.jpg" alt="" class="logo">
    </div>
  <van-tabs v-model:active="active"  >
  <van-tab title="登录" >
    <van-cell-group>
   <van-field v-model="form.username" placeholder="手机/电子邮箱" class="login-btn frame"  />
  </van-cell-group> 
<van-cell-group>
   <van-field v-model="form.password" type="password" placeholder="密码" class="login-btn frame"/>
  </van-cell-group>
  <van-row justify="space-between" class="login-btn">
  <van-col span="6" style="font-size:12px">选择区号</van-col>

  <van-col span="6" style="font-size:12px">忘记密码</van-col>
 </van-row>
  <van-button type="primary" size="large" class="login-btn" style="margin-top:23px" @click="sendLogin">登录</van-button>
 
  </van-tab>
  <van-tab title="注册">
    <!-- <van-button type="primary" size="large" class="login-btn loin-block" >个人用户</van-button> -->
    <br>
    <van-button type="primary" size="large" class="login-btn" @click="gotoregister">机构用户</van-button>
  </van-tab>
 </van-tabs>
   <div class="other">
     <div class="other-line">
       <div class="line-left"></div><div style="font-size:12px;margin-top:45px">或</div><div class="line-right"></div>
      </div>
      <div class="other-img">
         <img src="./../../assets/slices/loginslices/weChat.png" alt="">
         <img src="./../../assets/slices/loginslices/webo.png" alt="">
         <img src="./../../assets/slices/loginslices/qq.png" alt="">
      </div>
     
   </div>
  
  </div>
</div>
  
</template>

<script>
import {mapMutations} from "vuex"
import axios from "axios"
import  { getUsersApi } from "../../utils/api.ts"
import { ref , reactive, onMounted} from 'vue';
export default {

   setup() {
    const active = ref(2);
    const state = reactive({
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    });
  
    return { state,active };
  },
  data(){
    return{
      form:{
        username:"",
        password:"",
      }
    }
  },
    methods: {
    gotoregister(){
        this.$router.push("/login/register");
    },
    goback(){
      this.$router.push("/index/home");
    },
    async sendLogin(){
      const res = await  getUsersApi({username:this.form.username,password:this.form.password});
      if(res.token){
         this.$router.replace("/index/mine")
      }
      console.log(res);
    },   
    // async login(){
    //   const res = await getUsersApi({

    //   });
      // localStorage.setItem("token",res.result.token);
      // this.$router.replace("/index/mine")
    // }
  }
};
</script>
<style lang='scss' scoped></style>
