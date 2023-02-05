// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
      transpile: ['vuetify'],
    },
    //If you have enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar), you can disable generating the shim for *.vue files in your nuxt.config file:
    //https://nuxt.com/docs/getting-started/installation
    typescript: {
        shim: false
    },
    modules: [
        [
            //If you need to use pinia with vuex paralel you need to do this:  ['@pinia/nuxt', { disableVuex: false }],
            '@pinia/nuxt',
            {
              autoImports: [
                // automatically imports `defineStore`
                'defineStore', // import { defineStore } from 'pinia'
                // automatically imports `defineStore` as `definePiniaStore`
                ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
              ],
            },
          ],
    ],
    nitro: {
        devProxy: {
        }
    }
})
