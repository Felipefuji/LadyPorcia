<script setup lang="ts">
interface Props {
    title: string;
    description: string;
    to: any;
    image?: string;
    styleName?: "outline" | "primary" | "inverted" | "muted" | "orange";
};

withDefaults(defineProps<Props>(), {
  styleName: "primary",
  image:"pintura.jpeg"
});

const glob = import.meta.glob("~/assets/img/cursos/*", {
  eager: true,
});

const getImageAbsolutePath = (imageName: string): string => {
  return glob[`/assets/img/cursos/${imageName}`]["default"];
};

</script>
<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-400">
        <NuxtLink  :to="to">
            <img class="rounded-t-lg" :src="getImageAbsolutePath(image)" alt="" />
        </NuxtLink >
        <div class="p-5">
            <NuxtLink :to="to">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{{title}}</h5>
            </NuxtLink>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{description}}</p>
            <LandingParamsLink :to="to" size="md" block :styleName="styleName">Más información</LandingParamsLink>
        </div>
    </div>
</template>