<script setup>
import ToDoMenu from "./ToDoMenu.vue";
import { ref, defineEmits, defineProps, watch, toRef } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isMenuOpen = ref(false);

const emits = defineEmits(["menuBtnClick", "deleteItem"]);

let props = defineProps({
  otherMenuOpen: Boolean,
  index: Number,
});

const myRef = toRef(props, "otherMenuOpen");

async function openMenu() {
  if (isMenuOpen.value) {
    await emits("menuBtnClick"); //отправляем событие, чтобы закрыть открытое меню
    isMenuOpen.value = false;
  } else {
    await emits("menuBtnClick");
    isMenuOpen.value = true;
  }
}

watch(myRef, () => {
  isMenuOpen.value = false;
});

function deleteItem(index) {
  emits("deleteItem", index);
}
</script>

<template>
  <div
    class="flex flex-row justify-between px-6 py-4 bg-slate-400 rounded-lg mt-4 relative"
  >
    <p
      class="text-xl cursor-pointer"
      @click="store.commit('openPopUp', props.index)"
    >
      <slot></slot>
    </p>
    <div class="cursor-pointer px-3" @click.stop="openMenu">
      <ul>
        <li class="w-2 h-2 bg-black rounded-md mt-1"></li>
        <li class="w-2 h-2 bg-black rounded-md mt-1"></li>
        <li class="w-2 h-2 bg-black rounded-md mt-1"></li>
      </ul>
    </div>
    <toDoMenu
      v-if="isMenuOpen"
      @delete-item="deleteItem(index)"
      :index="props.index"
    />
  </div>
</template>
