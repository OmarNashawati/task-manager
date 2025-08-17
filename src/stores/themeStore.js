import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(initializeThemeSettings());

  function initializeThemeSettings() {
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    let currentTheme = "";

    if (localStorageTheme) {
      currentTheme = localStorageTheme;
    } else if (systemSettingDark.matches) {
      currentTheme = "dark";
    } else {
      currentTheme = "light";
    }

    setTheme(currentTheme);
    return currentTheme;
  }

  const toggleTheme = () => {
    theme.value === "dark" ? (theme.value = "light") : (theme.value = "dark");
    setTheme(theme.value);
  };

  function setTheme(value) {
    localStorage.setItem("theme", value);
    document.querySelector("html").setAttribute("data-theme", value);
  }

  return { theme, toggleTheme };
});
