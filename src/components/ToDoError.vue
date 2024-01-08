<script setup>
import { defineProps } from "vue";
const { errorText } = defineProps({
  errorText: String,
});
</script>

<template>
  <div>
    <p class="text-red-800" v-html="errorText"></p>
  </div>
</template>
