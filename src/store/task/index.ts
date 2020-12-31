import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
export const task: any = {
    namespaced: true,
    state,
    actions,
    mutations
}