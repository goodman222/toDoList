<script setup>
import { ref, defineEmits } from "vue";

const value = ref();

const emits = defineEmits(["addItem"]);
</script>

<template>
  <div>
    <form class="flex flex-row" @submit.prevent="emits('addItem', value)">
      <input
        type="text"
        class="w-full px-4 h-10 text-xl rounded-md"
        v-model="value"
      />
      <button class="bg-orange-600 px-6 rounded-md text-xl ml-3">
        Добавить!
      </button>
    </form>
  </div>
</template>
