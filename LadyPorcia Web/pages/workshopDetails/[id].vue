<script setup>
definePageMeta({
  layout: "landing",
});

const route = useRoute()
const pathToGet = '/api/workshop/getWorkshopDetails?id=' + route.params.id;
const responseData = await useFetch(pathToGet)
</script>

<template>
    <LandingContainer>
      <LandingSectionhead>
        <template v-slot:title>{{ responseData.data.value.title }}</template>
        <template v-slot:desc>{{ responseData.data.value.description }}</template>
      </LandingSectionhead>
    </LandingContainer>
  </template>