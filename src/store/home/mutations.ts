export const mutations: any = {
    getIntroduce(store: any, payload: any): void {
        store.intorList = payload;
    },
    getUser(store: any, payload: any): void {
        store.userList = payload;
    }
}