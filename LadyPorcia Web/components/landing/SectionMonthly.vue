<script setup>
defineProps({
  align: {
    default: "left",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'left' && 'text-left']">
    <h1 class="text-1xl lg:text-2xl font-bold lg:tracking-tight">
      <slot name="month">Month</slot>
    </h1>
  </div>
</template>