import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol();
import { home } from "./home";
import { tick } from "./tick";
import { details } from "./details";
import { exhibition } from "./exhibition";
export const store: any = createStore({
  modules: {
    home,
    tick,
    details,
    exhibition
  }
})


export function useStore() {
  return baseUseStore(key);
}