export const mutations: any = {
    getShop(state: any, payload: any) {
        state.results = payload.results[0];
    },
    getList(state: any, payload: any) {
        state.list = [...state.list, ...payload.results];
        state.pageSize++;
        state.pageCount;
    },
    clear(state: any) {
        state.state = [];
    }

}