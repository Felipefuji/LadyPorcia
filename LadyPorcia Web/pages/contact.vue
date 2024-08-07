<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contacto</template>
      <template v-slot:desc>Estoy aquí para ayudar.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Contactanos
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          ¿Necesitas mas informacion? Contacta con nosotros y resolveremos tus dudas.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>Blvr. de el Ejido, 463, Planta 19, Puerta 5, 04700, El Ejido</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:hola@espacioladyporcia.es"
              >hola@espacioladyporcia.es</a
            >
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+34 600020932"
              >+34 600020932</a
            >
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:instagram" /><a
              href="http://instagram.com/_u/estudio.ladyporcia/"
              >@Estudio.ladyporcia</a
            >
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:facebook" /><a
              href="http://instagram.com/_u/estudio.ladyporcia/"
              >Lady porcia espacio creativo
              </a
            >
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:whatsapp" /><a
              href="https://wa.me/34600020932"
              >Escribenos por whatsapp
              </a
            >
          </div>
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
    <div class="grid md:grid-cols-1 gap-10 mx-auto max-w-4xl mt-16">
      <div class="relative w-full h-96">
        <iframe class="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.7962916187143!2d-2.8051305576800623!3d36.77545407236984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7042e959d3dc57%3A0x622cd1c773200d07!2sTorre%20Laguna%2C%20Blvr.%20de%20el%20Ejido%2C%20463%2C%2004700%20El%20Ejido%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1723053636627!5m2!1ses!2ses" 
          frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
      </div>
    </div>
  </LandingContainer>
</template>
