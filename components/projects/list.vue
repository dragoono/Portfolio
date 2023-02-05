<template>
  <v-row v-if="projects.length > 0" dense>
    <v-col
      v-for="project in projects"
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
        <Project :project="project" />
      </v-lazy>
    </v-col>
  </v-row>
  <p v-else>No projects found...</p>
</template>
<script>
import Project from "~/components/projects/item";
export default {
  components: {
    Project,
  },
  props: {
    projects: {
      type: Array,
      default: null,
    },
  },
};
</script>
