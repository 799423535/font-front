import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
export const tick: any = {
    namespaced: true,
    state,
    actions,
    mutations
}