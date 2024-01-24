<!-- Незаконченная кнопка для отправки списка в Телеграм -->

<script setup>
import { defineEmits } from "vue";
import { useStore } from "vuex";
const store = useStore();
const emits = defineEmits(["btnClick"]);

function sendToTg() {
  console.log("send.... " + store.state.taskList);
  const id = "271271386";
  const text = "hello";
  const botToken = "6498688021:AAFkLMyMNY6J2JanBKB0LCYi9m9ltFPJ4Jo";
  const sendURL =
    "https://api.telegram.org/bot" +
    botToken +
    "/sendMessage?chat_id=" +
    id +
    "&text=" +
    text;
  // console.log(sendURL);
  fetch(
    "https://api.telegram.org/bot6498688021:AAFkLMyMNY6J2JanBKB0LCYi9m9ltFPJ4Jo/getUpdates"
  ).then((response) => console.log(response.json));
  // fetch(sendURL);
}
</script>

<template>
  <div class="flex justify-center">
    <button
      @click="sendToTg()"
      class="bg-blue-500 px-6 py-3 mt-8 rounded-md text-xl"
    >
      Отправить список в Телеграм
    </button>
  </div>
</template>
