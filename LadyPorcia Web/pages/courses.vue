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
      <div class="flex flex-wrap justify-center mt-10">
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Iniciarion a la costura" description="Prueba de iniciacion a la costura" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Iniciacion a la pintura" description="Prueba de iniciacion a la pintura" image="pintura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Pintura avanzada" description="Prueba curso avanzado de pintura" image="pintura.jpeg"></LandingCards>
        </div>
      </div>
    </LandingContainer>
  </template>