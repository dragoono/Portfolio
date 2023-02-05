<template>
  <v-row v-if="store.data && store.data.length > 0" dense>
    <v-col
      v-for="project in store.data"
      :key="project.id"
      class="d-flex justify-center"
      cols="12"
    >
      <v-lazy
        :options="{
          threshold: 0.5,
        }"
        transition="fade-transition"
      >
        <ProjectsItem :project="project" />
      </v-lazy>
    </v-col>
  </v-row>
  <p v-else>No projects found...</p>
</template>
<script setup>
  import { useProjectStore } from "@/stores/project";
  const store = useProjectStore();
</script>
<script>
export default defineComponent({
})
</script>
