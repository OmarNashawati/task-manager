<script setup>
import { useTasksStore } from "@/stores/tasksStore";
const store = useTasksStore();
const newTask = { completed: false };
</script>

<template>
  <div class="form">
    <div class="add-task">
      <h3>Add a new task</h3>
      <label for="title">Title *</label>
      <input
        v-model="newTask.name"
        type="text"
        name="title"
        id="title"
        placeholder="Enter a title..."
      /><br />
      <label for="description">Description *</label>
      <textarea
        v-model="newTask.description"
        name="description"
        id="description"
        rows="4"
        placeholder="Enter a description..."
      ></textarea
      ><br />
      <button @click="store.addTask(newTask)" class="btn primary">
        Add Task
      </button>
    </div>
  </div>
</template>

<style scoped>
.add-task-modal {
  display: flex;
  flex-direction: column;
}
</style>
