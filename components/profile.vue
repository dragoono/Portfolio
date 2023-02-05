<template>
  <v-card v-if="profile" max-width="876">
    <v-list-item :title="profile.title" :subtitle="profile.subtitle">
      <v-avatar>
        <v-img :src="profile.avatar_image" :lazy-src="lazySrc" alt="Avatar">
          <template v-slot:placeholder>
            <ImagePlaceholder />
          </template>
        </v-img>
      </v-avatar>
    </v-list-item>

    <v-img
      :src="profile.hero_image"
      :lazy-src="lazySrc"
      alt="Hero"
      content-class="full-width"
      max-height="200"
    >
      <template v-slot:placeholder>
        <ImagePlaceholder />
      </template>
    </v-img>

    <!--eslint-disable-next-line vue/no-v-html-->
    <v-card-text v-html="profile.text" />
    <v-divider class="mx-4" />

    <v-card-title>My current favorite tech stack</v-card-title>

    <v-card-actions cols="12" sm="6" md="4" lg="3">
      <v-chip-group column>
        <v-chip v-for="icon in profile.icons" :key="icon.id" class="ma-2">
          <v-tooltip top>
            <template v-slot:activator="{ props }">
              <v-icon :icon="'mdi-' + icon.key" v-bind="props">
              </v-icon>
            </template>
            <span>{{ icon.name }}</span>
          </v-tooltip>
        </v-chip>
      </v-chip-group>
    </v-card-actions>
  </v-card>
</template>
<script>
export default defineComponent({
  props: {
    profile: {
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
