import { getTickets } from "./../../utils/api";
import {Toast} from "vant";
export const actions: any = {
    async getTicket({ commit }: any, payload: any) {
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
        });
        const arr: any = await getTickets({});
        commit("getTicket", arr.results);
    }
}