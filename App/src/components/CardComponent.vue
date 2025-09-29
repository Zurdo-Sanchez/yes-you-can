<template>
  <div class="work-card">
    <img :src="img" :alt="title" class="work-img" />
    <!-- Debug: mostrar la URL de la imagen -->
    <h3 class="work-title">{{ title }}</h3>
    <h4 v-if="subTitle" class="work-subtitle">{{ subTitle }}</h4>
    <p class="work-desc">
      {{ description }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  subTitle?: string;
  img: string;
  description?: string;
}>();
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
  object-fit: cover;
  object-position: center;
  margin-bottom: 1rem;
}
.work-title {
  font-size: 2rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  color: var(--q-title);
}
.work-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
  color: var(--q-black);
}
.work-desc {
  font-size: 0.95rem;
  color: var(--q-black);
}
</style>
