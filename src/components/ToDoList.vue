<script setup>
import ToDoItem from "./ToDoItem.vue";
import ToDoAdd from "./ToDoAdd.vue";
import { ref } from "vue";

let taskList = ref([
  "Помыть посуду",
  "Постирать носки",
  "Пропылесосить в зале",
]);

const addItem = (val) => {
  if (!val || taskList.value.includes(val)) {
    return;
  }
  taskList.value.push(val);
};
</script>

<template>
  <div>
    <ToDoAdd @add-item="addItem" />
    <ToDoItem v-for="(item, index) in taskList" :key="index">{{
      item
    }}</ToDoItem>
  </div>
</template>
