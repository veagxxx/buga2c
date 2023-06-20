import { onMounted } from "vue"
import { useRoute } from 'vue-router';
export const useTitle = () => {
  const route = useRoute();
  const title: string = route.meta.title as string ?? import.meta.env.VITE_APP_TITLE;
  onMounted(() => {
    document.title = title;
  });
  return title;
}