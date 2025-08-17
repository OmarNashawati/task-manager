<script setup>
import Task from "./components/Task.vue";
import ModalWindow from "./components/modal/ModalWindow.vue";
import AddTaskModal from "./components/modal/AddTaskModal.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Filter from "./components/Filter.vue";

import { useTasksStore } from "./stores/tasksStore";
import { useModalStore } from "./stores/modalStore";

const tasksStore = useTasksStore();
const modalStore = useModalStore();

tasksStore.$subscribe((mutation, state) => {
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
});
</script>

<template>
  <HeaderComponent />

  <Filter />

  <main>
    <div>
      <div v-if="tasksStore.getFilteredTasks.length" class="tasks">
        <Task
          v-for="task in tasksStore.getFilteredTasks"
          :task="task"
          :key="task.id"
        />
      </div>
      <div v-else class="no-tasks-message">
        <p>No Tasks.</p>
        <p>
          Click on <i class="btn-example">+ add New</i> button to create new
          task.
        </p>
      </div>
    </div>

    <ModalWindow v-if="modalStore.isOpen">
      <AddTaskModal />
    </ModalWindow>
  </main>
</template>

<style lang="scss" scoped>
.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
}

.no-tasks-message {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
