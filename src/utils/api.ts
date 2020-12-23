import http from "./http";
 
//note数据
export const getdetailsApi = (datas:any) => http.post("/users/findUser",datas);

// 登录
export const getUsersApi = (datas:any) => http.post("/users/login", datas);

export const getaddUserApi = (datas:any) => http.post("/users/addUser", datas);