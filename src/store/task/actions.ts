import { getTasks, updateScore, todoTasks, getdetailsApi } from "./../../utils/api";

export const actions: any = {
    async getTasksAction({ commit }: any) {
        const res = await getTasks({});
        const res2 = await getdetailsApi({ _id: localStorage.getItem("token") });
        commit("getTasksMutations", { res, res2});
    },
    async todoTask({ dispatch ,commit}: any, payload: any) {
        await todoTasks({ ...payload });
        const users: any = await getdetailsApi({ _id: localStorage.getItem("token") });
        dispatch("getTasksAction");
    },
}