import { getAllShop } from "./../../utils/api";
import { getListShop } from "./../../utils/api";
export const actions: any = {
    getShop({ commit }: any) {
        return new Promise((resolve) => {
            getAllShop({}).then((res) => {
                commit("getShop", res);
                resolve();
            });
        });
    },
    getList({ commit }: any, payload: any) {
        return new Promise((resolve) => {
            getListShop(payload).then((res: any) => {
                commit("getList", res);
                resolve(res.results.length);
            });
        });
    }
}