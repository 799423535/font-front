import http from "./http";

//获取展览票数据
export const getTickets = (datas:any) => http.get("/tickets/getTickets", datas);


