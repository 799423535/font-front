import { findTicketApi } from "./../../utils/api";
export const actions: any = {
    async findTicket({ commit }: any, payload: any) {
        const arr: any = await findTicketApi({_id:payload});
        console.log(arr);
        commit("findTicket", arr.results);
    }

}