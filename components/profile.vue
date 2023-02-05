<template>
  <v-card v-if="profile" max-width="876">
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="profile.avatar_image" :lazy-src="lazySrc" alt="Avatar">
          <template v-slot:placeholder>
            <ImagePlaceholder />
          </template>
        </v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ profile.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ profile.subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
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
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">
                {{ "mdi-" + icon.key }}
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
import ImagePlaceholder from "~/components/ImagePlaceholder";
export default {
  components: { ImagePlaceholder },
  props: {
    profile: {
      type: Object,
      default: null,
    },
  },
  computed: {
    lazySrc() {
      return this.$store.state.imageLazySrc;
    },
  },
};
</script>
<style>
.full-width {
  width: 100% !important;
}
</style>
