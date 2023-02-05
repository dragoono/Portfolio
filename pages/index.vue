<template>
  <div class="d-flex flex-column justify-center align-center">
    <div class="mb-12 mt-12">
      <h1>About</h1>
    </div>
    <Profile :profile="profileStore.data" />
  </div>
</template>
<script setup>
  import { useProfileStore } from "@/stores/profile";
  const profileStore = useProfileStore();
  profileStore.get()
</script>
<script>
export default defineComponent({
})
</script>
