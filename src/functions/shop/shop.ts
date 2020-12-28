import { useRouter } from 'vue-router';
import { useStore } from "./../../store";
import { computed, ref } from "vue";
export function fn() {
    const loading = ref(false);
    const finished = ref(false);
    const store = useStore();
    const router = useRouter();
    const goBack = () => {
        router.push("/index");
    };
    const getShop = () => {
        store.dispatch("shop/getShop");
    }
    const pageSize: any = computed(() => {
        return store.state.shop.pageSize;
    });
    const pageCount: any = computed(() => {
        return store.state.shop.pageCount;
    });
    const getList = () => {
        store.dispatch("shop/getList", { pageSize:pageSize.value, pageCount:pageCount.value }).then((res) => {
            loading.value = false;
            if (res < pageCount.value) {
                finished.value = true;
            }
        });
    }
    const results = computed(() => {
        return store.state.shop.results;
    });
    const list = computed(() => {
        return store.state.shop.list;
    });
    return { goBack, getShop, results, getList, list,loading,finished };
}