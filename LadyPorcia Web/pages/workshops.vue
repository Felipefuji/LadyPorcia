<script setup>
definePageMeta({
  layout: "landing",
});

const responseData = await useFetch('/api/workshop/getAllWorkshops')
</script>

<template>
    <LandingContainer>
      <LandingSectionhead>
        <template v-slot:title>Talleres</template>
        <template v-slot:desc>Talleres temporales y de plazas limitadas:</template>
      </LandingSectionhead>
      <div v-for="item in responseData.data.value">
        <LandingSectionMonthly>
          <template v-slot:month>{{ item.monthly }}</template>
        </LandingSectionMonthly>
        <div class="flex flex-wrap justify-center mt-10">
          <div class="p-4 max-w-sm" v-for="itemWorkshop in item.workshops">
            <LandingCards :to="{ name: 'workshopDetails-id', params: { id: itemWorkshop.id } }" :title="itemWorkshop.title" :description="itemWorkshop.description" :image="itemWorkshop.image" :styleName="itemWorkshop.styleName"></LandingCards>
          </div>
        </div>
      </div>
    </LandingContainer>
</template>