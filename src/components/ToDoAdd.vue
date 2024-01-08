<script setup>
import { ref, defineEmits, defineProps, watch } from "vue";

const value = ref();

const emits = defineEmits(["addItem", "changeInput"]);

function clearInput() {
  value.value = "";
}

const submitForm = () => {
  emits("addItem", value.value);
  clearInput();
};
</script>

<template>
  <div>
    <form class="flex flex-row" @submit.prevent="submitForm()">
      <input
        :change="emits('changeInput', value)"
        type="text"
        class="w-full px-4 h-10 text-xl rounded-md"
        v-model="value"
      />
      <button class="bg-orange-600 px-6 rounded-md text-xl ml-3">
        Добавить
      </button>
    </form>
  </div>
</template>
