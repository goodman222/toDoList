<script setup>
import ToDoItem from "./ToDoItem.vue";
import ToDoAdd from "./ToDoAdd.vue";
import ToDoError from "./ToDoError.vue";
import ToDoPopUp from "./ToDoPopUp.vue";

// import ToDoTgBtn from "./ToDoTgBtn.vue";

import { useStore } from "vuex";
import { ref, onBeforeMount } from "vue";

const store = useStore();

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
  } else if (store.state.taskList.find((elem) => elem.text === val)) {
    errorText.value = "Данная задача уже существует";
    return;
  }

  store.state.taskList.push({ text: val, addTime: new Date() });
  saveToLocalStorage();
};

let isMenuOpen = ref(true);

function closeAllMenu() {
  isMenuOpen.value = !isMenuOpen.value; //меняем перменную (пропс), чтобы сработал watch
}

function deleteItem(index) {
  store.state.taskList.splice(index, 1);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const taskListString = JSON.stringify(store.state.taskList);
  localStorage.setItem("taskList", taskListString);
}

onBeforeMount(() => {
  const taskListString = localStorage.getItem("taskList");
  if (taskListString) {
    store.state.taskList = JSON.parse(taskListString);
  }
});
</script>

<template>
  <div @click="closeAllMenu">
    <ToDoAdd @add-item="addItem" @change-input="clearError" />
    <ToDoError :error-text="errorText" />
    <ToDoItem
      v-for="(item, index) in $store.state.taskList"
      :key="index"
      :index="index"
      :other-menu-open="isMenuOpen"
      @menu-btn-click="closeAllMenu"
      @delete-item="deleteItem(index)"
      >{{ item.text }}</ToDoItem
    >
    <div v-if="$store.state.taskList.length === 0">Задач не установлено</div>
    <!-- <ToDoTgBtn /> -->

    <ToDoPopUp
      v-if="
        $store.state.currentPopUpIndex >= 0 &&
        $store.state.currentPopUpIndex < $store.state.taskList.length
      "
    />
  </div>
</template>
