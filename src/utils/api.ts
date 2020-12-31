import http from "./http";

//获取展览票数据
export const getTickets = (datas: any) => http.get("/tickets/getTickets", datas);

//获取所有的介绍
export const getIntroduceApi = (params: any): any => http.get("/introduce/getIntroduce", params);
//getUserApi
export const getUserApi = (params: any): any => http.get("/interests/getInterests", params);
//查找某个票
export const findTicketApi = (params: any): any => http.get("/tickets/findTicket", params);
//note数据
export const getdetailsApi = (datas: any) => http.post("/users/findUser", datas);

// 登录
export const getUsersApi = (datas: any) => http.post("/users/login", datas);

export const getaddUserApi = (datas: any) => http.post("/users/addUser", datas);

export const getfindTicket = (datas: any) => http.get("/tickets/getTickets", datas);

//查找所有的商品
export const getAllShop = (params: any) => http.get("/shops/getShops", params);
//查找下拉
export const getListShop = (params: any) => http.get("/shops/getListShops", params);
//获取所有的任务
export const getTasks = (params: any) => http.get("/tasks/getTasks", params);
//修改任务
export const todoTasks = (params: any) => http.post("/tasks/todoTasks", params);
//修改积分
export const updateScore = (params: any) => http.post("/users/updateScore", params);
