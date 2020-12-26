import { useRouter } from "vue-router";
export const fn = (reactive: any, ref: any): any => {
    const router = useRouter();
    const goTick = () => {
        router.push("/tick");
    };
    const goShop = () => {
        router.push("/shop");
    }
    let arr = reactive([
        { title: "关注", component: "Attention" },
        { title: "推荐", component: "Recommend" },
        { title: "视频" },
        { title: "热展" },
        { title: "vlog" },
        { title: "海外" },
        { title: "文创" },
        { title: "买画" },
        { title: "拍场" },
        { title: "讲座" },
        { title: "学术" },
        { title: "设计" }
    ]);
    let active: string | Number = 1;
    const str = localStorage.getItem("active");
    if (str != null) {
        active = Number(str);
    } else {
        active = 1;
    }
    let show = ref(false);
    const showPopup = () => {
        show.value = true;
    };

    return { arr, active, show, showPopup, goTick, goShop }
}