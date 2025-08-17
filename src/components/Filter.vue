<script setup>
import { useTasksStore } from "@/stores/tasksStore";
const store = useTasksStore();
</script>

<template>
  <div class="filters">
    <p>Filter by state</p>
    <div class="badges">
      <div
        @click="store.filter = 'todo'"
        class="badge"
        :class="store.filter === 'todo' ? 'selected' : ''"
      >
        To-Do
      </div>
      <div
        @click="store.filter = 'done'"
        class="badge"
        :class="store.filter === 'done' ? 'selected' : ''"
      >
        Done
      </div>
      <div @click="store.filter = ''" class="sub-badge">Clear</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  margin-bottom: 1rem;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .badges {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .badge {
    background: var(--surface);
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    cursor: pointer;
  }

  .sub-badge {
    cursor: pointer;
  }

  .badge.selected {
    background-color: var(--primary);
    color: var(--on-primary);
  }
}
</style>
