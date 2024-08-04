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
        <a :href="href">
            <img class="rounded-t-lg" :src="getImageAbsolutePath(image)" alt="" />
        </a>
        <div class="p-5">
            <a :href="href">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{{title}}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{description}}</p>
            <LandingLink :href="href" size="md" block :styleName="styleName">Más información</LandingLink>
        </div>
    </div>
</template>