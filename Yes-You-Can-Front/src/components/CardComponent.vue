<template>
     <div class="work-card">
          <div
            class="work-img"
            :style="{ backgroundImage: `url('${img}')` }"
          ></div>
          <h3 class="work-title">{{ title }}</h3>
          <p class="work-desc">
            {{ description }}
          </p>
        </div>
</template><script setup lang="ts">
defineProps<{
  title: string
  img: string
  description?: string
}>()
</script>
<style scoped>
.work-card {
  background: var(--q-white);
  border-radius: 1rem;
  box-shadow: 0 2px 8px var(--q-primary);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}
.work-img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
}
.work-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.work-desc {
  font-size: 0.95rem;
  color: var(--q-black);
}
</style>
