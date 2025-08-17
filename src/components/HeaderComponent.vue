<script setup>
import { useThemeStore } from "@/stores/themeStore";
import { useModalStore } from "@/stores/modalStore";
const modalStore = useModalStore();
const themeStore = useThemeStore();

console.log(themeStore.theme);
</script>

<template>
  <header>
    <h1>Task Manager</h1>
    <div class="buttons-container">
      <button
        @click="modalStore.isOpen = true"
        class="btn primary addTaskButton"
      >
        <i class="icon pi pi-plus"></i><i class="text">Add New</i>
      </button>
      <button @click="themeStore.toggleTheme" class="btn">
        <i
          class="pi"
          :class="themeStore.theme === 'dark' ? 'pi-sun' : 'pi-moon'"
        ></i>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  h1 {
    text-transform: capitalize;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .buttons-container {
    display: flex;
    gap: 0.5rem;
  }
}

.addTaskButton {
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border-radius: 100%;
    height: 55px;
    width: 55px;

    .text {
      display: none;
    }
  }
}
</style>
