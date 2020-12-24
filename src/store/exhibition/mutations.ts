export const mutations: any = {
  changecity(state:any,payload:any):any{
    localStorage.setItem("city",JSON.stringify(payload))
       state.city=payload;
      
  }
}