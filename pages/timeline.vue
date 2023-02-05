<template>
  <div>
    <div class="text-center mb-12 mt-12">
      <h1>Professional career</h1>
    </div>
    <Timeline />
  </div>
</template>
<script setup>
  import { useCareerStore } from "@/stores/career";
  const store = useCareerStore();
  store.get()
</script>
<script>
export default defineComponent({
})
</script>
