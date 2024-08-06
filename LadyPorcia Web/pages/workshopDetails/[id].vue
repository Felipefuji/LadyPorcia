<script setup>
definePageMeta({
  layout: "landing",
});

const responseData = await useFetch('/api/workshop/getWorkshopDetails')
</script>

<template>
    <LandingContainer>
      <LandingSectionhead>
        <template v-slot:title>{{ responseData.data.value.title }}</template>
        <template v-slot:desc>{{ responseData.data.value.description }}</template>
      </LandingSectionhead>
    </LandingContainer>
  </template>