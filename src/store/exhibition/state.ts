export const state: any = {
  city:localStorage.getItem("city")?
  JSON.parse(localStorage.getItem("city") || "") //localStorage取出来是个字符串，需要转回对象模式
  :{city:"北京市"}
}
