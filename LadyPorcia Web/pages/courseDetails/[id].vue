<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{data.title}}</template>
      <template v-slot:desc>{{data.description}}</template>
    </LandingSectionhead>
  </LandingContainer>
</template>