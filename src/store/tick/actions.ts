import { getTickets } from "./../../utils/api";
export const actions: any = {
    async getTicket({ commit }: any, payload: any) {
        const arr:any = await getTickets({});
        console.log(arr);
        commit("getTicket", arr.results);
    }
}