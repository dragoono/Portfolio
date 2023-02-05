<template>
  <v-card max-width="1024">
    <div class="d-flex justify-space-between">
      <div>
        <v-img
          v-if="display.smAndDown"
          max-height="200"
          content-class="full-width"
          :src="project.image ? project.image : '/workinprogress.png'"
          :lazy-src="lazySrc"
        >
          <template v-slot:placeholder>
            <ImagePlaceholder />
          </template>
        </v-img>
        <v-card-title class="headline" v-text="project.title"></v-card-title>

        <v-card-subtitle v-text="project.subtitle"></v-card-subtitle>
        <v-card-text class="text--primary grow">
          <div v-html="project.text"></div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Tech stack</v-card-title>

        <v-card-text>
          <v-chip-group column>
            <v-chip v-for="icon in project.icons" :key="icon.id" class="ma-2">
              <v-tooltip top>
                <template v-slot:activator="{ props }">
                  <v-icon :icon="'mdi-' + icon.key" v-bind="props">
                  </v-icon>
                </template>
                <span>{{ icon.name }}</span>
              </v-tooltip>
            </v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions class="flex-column flex-md-row">
          <v-btn
            v-for="(link, index) in project.link"
            :key="index"
            class="ma-3"
            :href="link.href"
            link
          >
            {{ link.title }}
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar
        v-if="!display.smAndDown"
        class="ma-3"
        size="125"
        tile
      >
        <v-img
          :src="project.image ? project.image : '/workinprogress.png'"
          :lazy-src="lazySrc"
        >
          <template v-slot:placeholder>
            <ImagePlaceholder />
          </template>
        </v-img>
      </v-avatar>
    </div>
  </v-card>
</template>
<script setup>
import { useDisplay } from 'vuetify'
const display = useDisplay()
</script>
<script>
export default defineComponent({
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  data(){
    return {
      lazySrc: 'https://picsum.photos/id/11/100/60'
    }
  }
})
</script>
<style>
.full-width {
  width: 100% !important;
}
</style>
