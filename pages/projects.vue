<template>
  <div>
    <div class="text-center mb-12 mt-12">
      <h1>Projects</h1>
    </div>
    <v-skeleton-loader
      :loading="isProjectsDataLoading"
      transition="scale-transition"
      type="card"
    >
      <Projects :projects="projectsData" />
    </v-skeleton-loader>
  </div>
</template>
<script>
import Projects from "~/components/projects/list";
export default {
  components: {
    Projects,
  },
  async fetch({ store }) {
    // Prevent load if its already loaded
    await store.dispatch("projects/get");
  },
  computed: {
    projectsData() {
      return this.$store.state.projects.data;
    },
    isProjectsDataLoading() {
      return this.$store.state.projects.loading;
    },
  },
};
</script>
