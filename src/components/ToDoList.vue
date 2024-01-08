<script setup>
import ToDoItem from "./ToDoItem.vue";
import ToDoAdd from "./ToDoAdd.vue";
import ToDoError from "./ToDoError.vue";

import { ref } from "vue";

const taskList = ref([
  "Помыть посуду",
  "Постирать носки",
  "Пропылесосить в зале",
]);

let errorText = ref("<br>");

let clearError = (val) => {
  if (val !== "") {
    errorText.value = "<br>";
  }
};

const addItem = (val) => {
  if (!val) {
    errorText.value = "Вы ничего не ввели";
    return;
  } else if (taskList.value.includes(val)) {
    errorText.value = "Данная задача уже существует";

    return;
  }

  taskList.value.push(val);
};
</script>

<template>
  <div>
    <ToDoAdd @add-item="addItem" @change-input="clearError" />
    <ToDoError :error-text="errorText" />
    <ToDoItem v-for="(item, index) in taskList" :key="index">{{
      item
    }}</ToDoItem>
  </div>
</template>
