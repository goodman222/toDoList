<script setup>
import { defineEmits, defineProps } from "vue";
const emits = defineEmits(["deleteItem", "upItem", "downItem"]);
const props = defineProps(["index"]);
</script>

<template>
  <div class="p-2 bg-white rounded-md absolute right-16 top-3 z-40">
    <ul>
      <li
        class="p-1 border-b-2 hover:bg-red-600 cursor-default"
        @click="emits('deleteItem', props.index)"
      >
        Удалить
      </li>
      <li class="p-1 border-b-2 hover:bg-green-500 cursor-default">Поднять</li>
      <li class="p-1 hover:bg-yellow-500 cursor-default">Опустить</li>
    </ul>
  </div>
</template>
