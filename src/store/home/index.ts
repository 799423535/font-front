import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
export const home: any = {
    namespaced: true,
    state,
    actions,
    mutations
}