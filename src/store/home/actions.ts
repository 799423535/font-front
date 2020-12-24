import { getIntroduceApi,getUserApi } from "./../../utils/api";
export const actions: any = {
    async getIntroduce({ commit }: any, payload: any) {
        const arr = await getIntroduceApi({});
        commit("getIntroduce", arr);
    },
    async getUser({ commit }: any, payload: any) {
        const arr = await getUserApi({});
        commit("getUser", arr.results);
    }
}