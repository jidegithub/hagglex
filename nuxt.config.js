require("dotenv").config()

export default {
  generate: {
    fallback: true,
    routes: [
      '/home',
      '/verify',
      '/signup'
    ]
  },
  env: {
    ...process.env
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // router: {
  //   middleware: ['test']
  // },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'grauth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/transition.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/apollo",
    [
      "nuxt-vuex-localstorage",
      {
        localStorage: ["user", "token"],
        mode: process.env.NODE_ENV === "development" ? "debug" : null
      }
    ]
  ],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/dotenv"
  ],
  apollo: {
    cookieAttributes: {
      expires: 1,
      path: "/",
      secure: false,
      sameSite: "Lax"
    },
    clientConfigs: {
      default: '~/plugins/apollo-config-default.js'
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
