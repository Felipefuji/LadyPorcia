<script setup lang="ts">
interface Props {
    href: string;
    title: string;
    description: string;
    image?: string;
    styleName?: "outline" | "primary" | "inverted" | "muted";
};

withDefaults(defineProps<Props>(), {
  styleName: "primary",
  image:"~/assets/img/cursos/pintura.jpeg"
});

</script>
<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-opal-flame dark:border-gray-400">
        <a :href="href">
            <!-- TODO: Hacer que el path del recurso se recupere por las props -->
            <img class="rounded-t-lg" src="~/assets/img/cursos/pintura.jpeg" alt="" />
        </a>
        <div class="p-5">
            <a :href="href">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-white">{{description}}</p>
            <LandingLink :href="href" size="md" block :styleName="styleName">Más información</LandingLink>
        </div>
    </div>
</template>