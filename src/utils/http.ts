
//获取展览票数据
export const getTickets = (datas:any) => http.get("/tickets/getTickets", datas);

import axios from "axios";

// 引入轻提示
import { Toast } from "vant";


// 创建实例
const instance = axios.create({
  baseURL: 'http://150.158.7.205:3000',
  timeout: 10000
});


// 添加请求拦截器(每次发送请求前统一做的事情)
instance.interceptors.request.use(
  (config: any) => {
    if (localStorage.getItem("token")) {
      // 请求数据里面携带token
      if (config.method === "get") {
        config.params.token = localStorage.getItem("token");
      } else if (config.method === "post") {
        config.data.token = localStorage.getItem("token");
      }

      // 在请求头里面携带token
      // config.headers.token = localStorage.getItem("token");
    }
    // 在发送请求之前做些什么
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器(每次请求成功以后统一做的事情)
instance.interceptors.response.use(
  (response: any) => {
    // console.log(response);
    // 对响应数据做点什么
    return response.data;
  },
  function (error: any) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const http = {
  get(url: any, params: any) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params: params || {}
        })
        .then((res: any) => {
          if (res.status == "0") {
            resolve(res);
          } else {
            Toast(res.msg);
          }
        })
        .catch(err => {
          Toast(err.message);
          reject(err);
        });
    });
  },
  post(url: any, params: any) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, params)
        .then((res: any) => {
          if (res.status == "0") {
            resolve(res);
          } else {
            Toast(res.msg);
          }
        })
        .catch(err => {
          Toast(err.message);
          reject(err);
        });
    });
  }
};

export default http;

