import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

import { useModalStore } from "./modalStore";

export const useTasksStore = defineStore("tasks", () => {
  const modalStore = useModalStore();

  const tasks = reactive(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        name: "Website design",
        description:
          "Define the style guide, branding and create the webdesign on Figma.",
        completed: true,
        id: 1,
      },
      {
        name: "Website development",
        description: "Develop the portfolio website using Vue JS.",
        completed: false,
        id: 2,
      },
      {
        name: "Hosting and infrastructure",
        description:
          "Define hosting, domain and infrastructure for the portfolio website.",
        completed: false,
        id: 3,
      },
      {
        name: "Composition API",
        description:
          "Learn how to use the composition API and how it compares to the options API.",
        completed: true,
        id: 4,
      },
      {
        name: "Pinia",
        description: "Learn how to setup a store using Pinia.",
        completed: true,
        id: 5,
      },
      {
        name: "Groceries",
        description: "Buy rice, apples and potatos.",
        completed: false,
        id: 6,
      },
      {
        name: "Bank account",
        description: "Open a bank account for my freelance business.",
        completed: false,
        id: 7,
      },
    ]
  );

  const filter = ref("");

  const getFilteredTasks = computed(() => {
    switch (filter.value) {
      case "todo":
        return tasks.filter((task) => task.completed === false);
      case "done":
        return tasks.filter((task) => task.completed === true);
      default:
        return tasks;
    }
  });

  const addTask = (task) => {
    if (!task.name || !task.description) {
      alert("Task Title and description can not be empty");
    } else {
      task.id = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
      tasks.push(task);
      modalStore.isOpen = false;
    }
  };

  const deleteTask = (task) => {
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    if (taskIndex >= 0) {
      tasks.splice(taskIndex, 1);
    }
  };

  return {
    tasks,
    filter,
    getFilteredTasks,
    addTask,
    deleteTask,
  };
});
