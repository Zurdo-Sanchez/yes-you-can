<template>
  <div class="work-card" :class="{ 'image-right': imagePosition === 'right' }">
    <div v-if="type" class="course-badge">{{ type }}</div>
    <div class="image-section">
      <div class="work-img" :style="{ backgroundImage: `url('${img}')` }"></div>
    </div>
    <div class="content-section">
      <h3 class="work-title">{{ title }}</h3>
      <h4 v-if="subTitle" class="work-subtitle">{{ subTitle }}</h4>
      <p class="work-desc">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  subTitle?: string;
  img: string;
  description?: string;
  imagePosition?: 'left' | 'right';
  type?: string;
}>();
</script>
<style scoped>
.work-card {
  background: var(--q-white);
  border-radius: 1rem;
  box-shadow: 0 2px 8px var(--q-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 250px;
  margin-bottom: 2rem;
  position: relative;
}

.course-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--q-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
}

.image-section {
  flex: 0 0 300px;
  display: flex;
  align-items: center;
}

.work-img {
  width: 100%;
  height: 100%;
  min-height: 250px;
  background-size: cover;
  background-position: center;
}

.content-section {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.work-title {
  font-size: 2rem;
  font-weight: 600;
  padding: 0;
  margin: 0 0 0.5rem 0;
  color: var(--q-title);
}

.work-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
  margin: 0 0 1rem 0;
  color: var(--q-black);
}

.work-desc {
  font-size: 0.95rem;
  color: var(--q-black);
  line-height: 1.6;
  text-align: justify;
}

/* Imagen a la derecha */
.work-card.image-right {
  flex-direction: row-reverse;
}

/* Responsive design */
@media (max-width: 768px) {
  .work-card {
    flex-direction: column;
    min-height: auto;
  }

  /* Forzar comportamiento normal en responsive */
  .work-card.image-right {
    flex-direction: column;
  }

  .image-section {
    flex: none;
  }

  .work-img {
    height: 200px;
    min-height: 200px;
  }

  .content-section {
    padding: 1rem;
  }

  .work-title {
    font-size: 1.5rem;
  }

  .work-subtitle {
    font-size: 1.2rem;
  }
}
</style>
