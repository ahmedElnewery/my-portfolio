// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Ahmed El Newery",
      link: [
        {
          rel: "icon",
          href: "https://raw.github.com/eladnava/material-letter-icons/master/dist/png/A.png",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Ahmed El Newery, Frontend engineer, I am Goal-oriented Full stack developer experienced in front-end , skilled at building optimized and reusable user interface components and design an efficient layout. Optimized solution seeker and challenge lover who loving learning and gaining new experience. ",
        },

        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://elnewery.netlify.app/" },
        { property: "og:title", content: "Ahmed El Newery" },
        { property: "og:description", content: "website" },
        { property: "og:image", content: "https://elnewery.netlify.app/img/wide_profile_photo.jpeg" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://elnewery.netlify.app/" },
        { property: "twitter:title", content: "Ahmed El Newery" },
        { property: "twitter:description", content: 
        "Ahmed El Newery, Frontend engineer, I am Goal-oriented Full stack developer experienced in front-end , skilled at building optimized and reusable user interface components and design an efficient layout. Optimized solution seeker and challenge lover who loving learning and gaining new experience. ",

      },
        { property: "twitter:image", content: "https://elnewery.netlify.app/img/wide_profile_photo.jpeg" },
      ],
    },
  },
  plugins: [
    { src: "~/plugins/particles", ssr: false },
    { src: "~/plugins/store", ssr: false },
  ],
});
