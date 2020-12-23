import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  // city:string
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {
    city:"北京市"
  },
 
})

export function useStore () {
  return baseUseStore(key);
}