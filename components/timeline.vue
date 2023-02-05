<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in careers"
      :key="item.id"
      color="light-blue darken-4"
      fill-dot
      large
    >
      <template v-slot:icon>
        <v-icon> mdi-{{ item.icon.key }} </v-icon>
      </template>
      <template v-slot:opposite>
        <span>{{ item.start_year }}</span>
      </template>
      <v-card class="elevation-2" color="light-blue darken-3">
        <v-card-title class="headline">
          {{ item.title }}
        </v-card-title>
        <!--eslint-disable-next-line vue/no-v-html-->
        <v-card-text v-html="item.text" />
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  props: {
    careers: {
      type: Array,
      default: null,
    },
  },
};
</script>
