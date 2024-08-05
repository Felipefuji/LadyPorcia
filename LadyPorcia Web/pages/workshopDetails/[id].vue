<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
    <LandingContainer>
      <LandingSectionhead>
        <template v-slot:title>Cursos</template>
        <template v-slot:desc>Cursos disponibles actualmente:</template>
      </LandingSectionhead>
    </LandingContainer>
  </template>