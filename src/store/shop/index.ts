import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
export const shop: any = {
    namespaced: true,
    state,
    actions,
    mutations
}