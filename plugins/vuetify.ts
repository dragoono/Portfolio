import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//Labs
import * as labs from 'vuetify/labs/components'

const myCustomTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: "#01579B"
    },
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        // Vue 3 has no way to automatically detect if SSR is used. See https://next.vuetifyjs.com/en/getting-started/installation/#ssr
        ssr: true,
        components: {
            ...components,
            ...labs
        },
        directives,
        //TODO cannot import sass variables ?
        //styles: { configFile: 'assets/style/variables.scss' },
        theme: {
            defaultTheme: 'myCustomTheme',
            themes: {
                myCustomTheme,
            }
        }
    })
    nuxtApp.vueApp.use(vuetify);
})