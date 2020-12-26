import { useRouter } from 'vue-router';
export function fn() {
    const router = useRouter();
    const goBack = () => {
        router.push("/index");
    };
    return { goBack };
}