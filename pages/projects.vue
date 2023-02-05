<template>
  <div>
    <div class="text-center mb-12 mt-12">
      <h1>Projects</h1>
    </div>
    <ProjectsList />
  </div>
</template>
<script setup>
  import { useProjectStore } from "@/stores/project";
  const store = useProjectStore();
  store.get()
</script>
<script>
export default defineComponent({
})
</script>
