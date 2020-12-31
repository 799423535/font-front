export const mutations: any = {
    getTasksMutations(state:any,payload:any){
        state.list = payload.res;
        state.score=payload.res2.results.score;
        
    },
    todoTask(state:any,payload:any){
        state.list = payload;
    },
    
}