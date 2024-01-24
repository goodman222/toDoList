<script setup>
import { useStore } from "vuex";

const store = useStore();

let timeString = store.state.taskList[store.state.currentPopUpIndex].addTime;
let time = new Date(Date.parse(timeString));

let text = store.state.taskList[store.state.currentPopUpIndex].text;
console.log(time.getHours());
</script>

<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 bg-neutral-600 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white w-3/4 px-6 py-4 rounded-lg fixed flex flex-col">
      <div
        class="self-end cursor-pointer text-2xl"
        @click="store.commit('openPopUp', -1)"
      >
        X
      </div>
      <ul>
        <li>
          <h1 class="font-bold">{{ text }}</h1>
        </li>
        <li>
          Время установки: {{ time.getDate() }}.{{ time.getMonth() + 1 }}
          {{ time.getHours() }}:{{ time.getMinutes() }}
        </li>
      </ul>
    </div>
  </div>
</template>
