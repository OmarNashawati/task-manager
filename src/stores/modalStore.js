import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);

  return { isOpen };
});
