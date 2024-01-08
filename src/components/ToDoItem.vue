<script setup></script>

<template>
  <div
    class="flex flex-row justify-between px-6 py-4 bg-slate-400 rounded-lg mt-4"
  >
    <p class="text-xl"><slot></slot></p>
    <div class="">
      <ul>
        <li class="w-2 h-2 bg-black rounded-md mt-1"></li>
        <li class="w-2 h-2 bg-black rounded-md mt-1"></li>
        <li class="w-2 h-2 bg-black rounded-md mt-1"></li>
      </ul>
    </div>
  </div>
</template>
