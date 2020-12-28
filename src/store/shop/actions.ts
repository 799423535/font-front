import { getAllShop } from "./../../utils/api";
import { getListShop } from "./../../utils/api";
export const actions: any = {
    async getShop({ commit }: any) {
        const res = await getAllShop({});
        commit("getShop", res);
    },
    async getList({ commit }: any, payload: any) {
        return new Promise((resolve) => {
            getListShop(payload).then((res: any) => {
                commit("getList", res);
                resolve(res.results.length);
            });
        });
    }
}