<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
    <LandingContainer>
      <LandingSectionhead>
        <template v-slot:title>Talleres</template>
        <template v-slot:desc>Talleres temporales y de plazas limitadas:</template>
      </LandingSectionhead>
      <div class="flex flex-wrap justify-center mt-10">
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="taller costura" description="Prueba de iniciacion a la costura" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="taller pintura" description="Prueba de iniciacion a la pintura" image="pintura.jpeg"></LandingCards>
        </div>
      </div>
    </LandingContainer>
  </template>