<script setup>
definePageMeta({
  layout: "landing",
});

const route = useRoute()
const pathToGet = '/api/course/getCourseDetails?id=' + route.params.id;
const responseData = await useFetch(pathToGet)
</script>

<template>
  <LandingContainer>
    <LandingSectionhead v-if="responseData.data.value">
      <template v-slot:title>{{ responseData.data.value.title }}</template>
      <template v-slot:desc>{{ responseData.data.value.description }}</template>
    </LandingSectionhead>
    <div v-else>Loading...</div>
  </LandingContainer>
</template>