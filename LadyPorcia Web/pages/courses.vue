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
            <LandingCards href="#" title="Patronaje y Confección" description="Costura Libre. 2 sesiones de 2h a la semana. Lunes y Miercoles de 16:00-18:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Patronaje y Confección" description="Costura Libre. 2 sesiones de 2h a la semana. Lunes y Miercoles de 18:00-20:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Patronaje y Confección" description="Costura Libre. 1 sesion de 3h a la semana. Viernes de 10:00-13:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Patronaje y Confección" description="Costura Guiada. 1 sesion de 3h a la semana. Lunes de 10:00-13:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Iniciación a la costura" description="1 sesion de 3h a la semana. Jueves de 10:00-13:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Iniciación a la costura" description="1 sesion de 3h a la semana. Jueves de 18:00-21:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Iniciación a la costura" description="2 sesiones de 2h a la semana. Martes y jueves de 16:00-18:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Patronaje y Confección" description="Aplicado a prendas flamencas. 1 sesion de 3h a la semana. Martes de 18:00-21:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Patronaje" description="1 sesiones de 3h a la semana. Martes de 10:00-13:00. Impartido por Victoria Monteoliva" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Iniciación a Patronaje y Costura" description="Aplicada a prendas infantiles. 1 sesion de 3h a la semana. Miercoles de 10:00-13:00. Impartido por Antonia Molina" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Arreglos y Customización" description="1 sesion de 2h a la semana. Lunes de 12:00-14:00. Impartido por Antonia Molina" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Iniciación a Patronaje y Costura" description="1 sesion de 3h a la semana. Miercoles de 19:00-22:00. Impartido por Antonia Molina" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Patronaje y Confección" description="Guiada. 1 sesion de 3h a la semana. Viernes de 20:00-22:00. Impartido por Antonia Molina" image="costura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Pintura al Óleo" description="1 sesion 2h a la semana. Viernes 12:00-14:00. Impartido por Antonia Molina" image="pintura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Pintura al Óleo" description="1 sesion 2h a la semana. Lunes 20:00-22:00. Impartido por Antonia Molina" image="pintura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Pintura para Niños" description="2 sesiones 2h a la semana. Miércoles y viernes de 17:00-19:00. Impartido por Antonia Molina" image="pintura.jpeg"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards href="#" title="Costura para Niños" description="2 sesion de 1h a la semana.  Martes y Jueves de 16:00-17:00. Impartido por Antonia Molina" image="costura.jpeg"></LandingCards>
        </div>
      </div>
    </LandingContainer>
  </template>