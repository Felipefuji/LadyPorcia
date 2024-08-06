<script setup>
definePageMeta({
  layout: "landing",
});

const responseData = await useFetch('/api/getAllCourses')
console.log(responseData.data.value)
</script>

<template>
    <LandingContainer>
      <LandingSectionhead>
        <template v-slot:title>Cursos</template>
        <template v-slot:desc>Cursos disponibles actualmente:</template>
      </LandingSectionhead>
      <div class="flex flex-wrap justify-center mt-10">
        <div class="p-4 max-w-sm" v-for="item in responseData.data.value">
            <LandingCards :to="{ name: 'courseDetails-id', params: { id: item.id } }" :title="item.title" :description="item.description" :image="item.image" :styleName="item.styleName"></LandingCards>
        </div>
      </div>
    </LandingContainer>
  </template>