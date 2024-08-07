<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-8 md:order-1 md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-opal-flame">
        Lady Porcia Espacio Creativo 
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Nuxtship is a starter template for startups, marketing websites &
        landing pages.<wbr /> Built with Nuxt & TailwindCSS. You can quickly
        create any website with this starter.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/courses"
          styleName="orange"
          >Cursos</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="primary"
          href="/workshops"
          >Talleres</LandingLink
        >
      </div>
    </div>
  </main>
</template>
