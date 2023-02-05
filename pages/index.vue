<template>
  <div class="d-flex flex-column justify-center align-center">
    <div class="mb-12 mt-12">
      <h1>About</h1>
    </div>
    <Profile :profile="profileData" />
  </div>
</template>
<script>
export default defineComponent({
  async fetch({ store }) {
    // Prevent load if its already loaded
    await store.dispatch("profile/get");
  },
  computed: {
    profileData() {
      return this.$store.state.profile.data;
    },
    isProfileDataLoading() {
      return this.$store.state.profile.loading;
    },
  },
})
</script>
