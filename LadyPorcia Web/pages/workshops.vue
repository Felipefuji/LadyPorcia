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
      <LandingSectionMonthly>
        <template v-slot:month>Septiembre:</template>
      </LandingSectionMonthly>
      <div class="flex flex-wrap justify-center mt-10">
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Bordado sobre fotografía" description="Trae tu foto y te enseñamos a bordarla. Sábado 14/09" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Pintura y decora sobre cristal" description="Aprende a pintar una botella de cristal. Viernes 20/09" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Aprende a utilizar tu maquina de coser" description="Mejora el manejo de tu maquina de coser. Sábado 21/09" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="New Born" description="Crea todo lo necesario para tu Bebé. Viernes 27/09" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="New Born" description="Crea todo lo necesario para tu Bebé. Sábado 28/09" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
      </div>
      <LandingSectionMonthly>
        <template v-slot:month>Octubre:</template>
      </LandingSectionMonthly>
      <div class="flex flex-wrap justify-center mt-10">
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Decora y personaliza tu plato" description="Decora en familia tu plato. Especial para padres e hijos. Viernes 04/10" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Set de Cumpleaños" description="Crea un set para los mas pequeños de la casa en su dia especial. Sabado  05/10" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Creacion de Manteles" description="Confecciona y decora tus manteles. Viernes  11/10" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Creacion de Delantales" description="Confecciona y decora tus Delantales. Viernes  18/10" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Patrón base falda y transformaciones." description="Aprende el patron base de la falda y todo lo que se puede crear con ello. Sabado  19/10" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Flecado" description="Aprende a hacer flecados. Viernes 25/10 y Sabado  25/10" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
      </div>
      <LandingSectionMonthly>
        <template v-slot:month>Noviembre:</template>
      </LandingSectionMonthly>
      <div class="flex flex-wrap justify-center mt-10">
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Pinta y borda tu ToteBag" description="Pinta y borda tu ToteBag. Viernes 08/11" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Customiza tu chaqueta." description="Aprende a customizar tu chaqueta vaquera. Sabado  09/11" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Acuarela" description="Aprender ha realizar tus creaciones con acuarelas. Viernes 15/11 y Sabado  16/11" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Decoracion de cajas de madera" description="Decora tus cajas de madera. Viernes 22/11" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Crea tu propia obra de arte" description="Crear tu propia obra de arte, Para los mas pequeños. Sabado 23/11" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Pinta y decora tus bolas de navidad" description="Decora tu arbol de navidad con tus creacioes en bolas de navidad. Viernes 29/11" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Mantel de navidad" description="Crea el mantel perfecto para tu cena de navidad. Sabado 30/11" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
      </div>
      <LandingSectionMonthly>
        <template v-slot:month>Diciembre:</template>
      </LandingSectionMonthly>
      <div class="flex flex-wrap justify-center mt-10">
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Pinta y decora tu bola de Navidad" description="Decora tu arbol de navidad con tus creacioes en bolas de navidad, Especial para niños. Viernes 13/12" image="pintura.jpeg" styleName="orange"></LandingCards>
        </div>
        <div class="p-4 max-w-sm">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: 1 } }" title="Crea y decora tu jersey navideño" description="Aprende a crear el mejor look para estas navidad creando y decorando tu jersey navideño. Sabado  14/12" image="costura.jpeg" styleName="orange"></LandingCards>
        </div>
      </div>
    </LandingContainer>
  </template>