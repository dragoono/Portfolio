<template>
  <v-timeline dark>
    <v-timeline-item
      v-for="item in store.data"
      :key="item.id"
      color="light-blue darken-4"
      fill-dot
      large
      :icon="'mdi-'+ item.icon.key"
      dot-color="light-blue-darken-4"
    >
      <template v-slot:opposite>
        <span v-text="item.start_year"></span>
      </template>
      <v-card class="elevation-2" color="light-blue darken-3">
        <v-card-title class="headline" v-text="item.title">
        </v-card-title>
        <!--eslint-disable-next-line vue/no-v-html-->
        <v-card-text v-html="item.text" />
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script setup>
  import { useCareerStore } from "@/stores/career";
  const store = useCareerStore();
</script>
<script>
export default defineComponent({
})
</script>
