<template>
  <div>
    <div class="text-center mb-12 mt-12">
      <h1>Professional career</h1>
    </div>
    <v-skeleton-loader
      :loading="isCareersDataLoading"
      max-width="344"
      transition="scale-transition"
      type="card"
    >
      <Timeline :careers="careersData" />
    </v-skeleton-loader>
  </div>
</template>
<script>
import Timeline from "~/components/timeline";
export default {
  components: {
    Timeline,
  },
  async fetch({ store }) {
    // Prevent load if its already loaded
    await store.dispatch("careers/get");
  },
  computed: {
    careersData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$store.state.careers.data.sort(
        (a, b) => b.start_year - a.start_year
      );
    },
    isCareersDataLoading() {
      return this.$store.state.careers.loading;
    },
  },
};
</script>
