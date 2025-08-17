<script setup>
import { useTasksStore } from "@/stores/tasksStore";
const store = useTasksStore();

const props = defineProps(["task"]);
</script>

<template>
  <div class="task">
    <div>
      <h3 class="title">{{ task.name }}</h3>
      <p class="description">
        {{ task.description }}
      </p>
    </div>

    <div class="actions">
      <div class="task-check">
        <input
          :id="`task-checkbox-${task.id}`"
          type="checkbox"
          :checked="task.completed"
          @click="task.completed = !task.completed"
        />
        <label :for="`task-checkbox-${task.id}`">
          {{ task.completed ? "Done" : "To-Do" }}
        </label>
      </div>
      <button @click="store.deleteTask(task)" class="btn danger small">
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--surface);
  color: var(--text);
  padding: 20px;
  border-radius: 12px;

  .title {
    font-weight: 700;
    font-size: 1.2rem;
  }

  .description {
    font-weight: 400;
    margin: 1rem 0;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .task-check {
      display: flex;
      align-items: center;
      justify-content: center;

      label {
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 5px;
        cursor: pointer;
      }

      input {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18px;
        height: 18px;
        border-radius: 100%;
        border: 0.77px solid #aeaeb2;
        appearance: none;
        cursor: pointer;

        &:checked {
          background-color: #0a7aff;
          border-color: #0a7aff;

          &::before {
            content: "";
            display: block;
            width: 4.5px;
            height: 9px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
