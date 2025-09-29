<template>
  <div class="work-card" :class="`work-card--${type || 'default'}`">
    <img :src="img" :alt="title" class="work-img" />
    <!-- Debug: mostrar la URL de la imagen -->
    <div v-if="type" class="course-badge">{{ courseTypeLabel }}</div>
  <div class="work-card" :class="`work-card--${type || 'default'}`">
    <img :src="img" :alt="title" class="work-img" />
    <div v-if="type" class="course-badge">{{ courseTypeLabel }}</div>
    <h3 class="work-title">{{ title }}</h3>
    <h4 v-if="subTitle" class="work-subtitle">{{ subTitle }}</h4>
    <p class="work-desc">
      {{ description }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

type CourseType = 'explorer' | 'companion' | 'master' | 'premium';

const props = defineProps<{
import { computed } from 'vue';

type CourseType = 'explorer' | 'companion' | 'master' | 'premium';

const props = defineProps<{
  title: string;
  subTitle?: string;
  img: string;
  description?: string;
  type?: CourseType;
  type?: CourseType;
}>();

const courseTypeLabel = computed(() => {
  const labels = {
    explorer: 'Nivel Básico',
    companion: 'Nivel Intermedio',
    master: 'Nivel Avanzado',
    premium: 'Curso Premium',
  };
  return props.type ? labels[props.type] : '';
});

const courseTypeLabel = computed(() => {
  const labels = {
    explorer: 'Nivel Básico',
    companion: 'Nivel Intermedio',
    master: 'Nivel Avanzado',
    premium: 'Curso Premium',
  };
  return props.type ? labels[props.type] : '';
});
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
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
}
.work-card:hover {
  box-shadow: 0 4px 16px var(--q-primary);
  transform: translateY(-4px) scale(1.02);
}

  cursor: pointer;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
}
.work-card:hover {
  box-shadow: 0 4px 16px var(--q-primary);
  transform: translateY(-4px) scale(1.02);
}

.work-img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  object-fit: cover;
  object-position: center;
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
  text-align: justify;
}

/* Badge de tipo de curso */
.course-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--q-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Estilos según tipo de curso */
.work-card {
  position: relative;
}

.work-card--explorer {
  border-left: 4px solid #4caf50; /* Verde para básico */
}

.work-card--explorer .course-badge {
  background: #4caf50;
}

.work-card--companion {
  border-left: 4px solid #2196f3; /* Azul para intermedio */
}

.work-card--companion .course-badge {
  background: #2196f3;
}

.work-card--master {
  border-left: 4px solid #ff9800; /* Naranja para avanzado */
}

.work-card--master .course-badge {
  background: #ff9800;
}

.work-card--premium {
  border-left: 4px solid #9c27b0; /* Morado para premium */
  background: linear-gradient(135deg, #fff 0%, #f8f4ff 100%);
}

.work-card--premium .course-badge {
  background: linear-gradient(135deg, #9c27b0 0%, #673ab7 100%);
  text-align: justify;
}

/* Badge de tipo de curso */
.course-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--q-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Estilos según tipo de curso */
.work-card {
  position: relative;
}

.work-card--explorer {
  border-left: 4px solid #4caf50; /* Verde para básico */
}

.work-card--explorer .course-badge {
  background: #4caf50;
}

.work-card--companion {
  border-left: 4px solid #2196f3; /* Azul para intermedio */
}

.work-card--companion .course-badge {
  background: #2196f3;
}

.work-card--master {
  border-left: 4px solid #ff9800; /* Naranja para avanzado */
}

.work-card--master .course-badge {
  background: #ff9800;
}

.work-card--premium {
  border-left: 4px solid #9c27b0; /* Morado para premium */
  background: linear-gradient(135deg, #fff 0%, #f8f4ff 100%);
}

.work-card--premium .course-badge {
  background: linear-gradient(135deg, #9c27b0 0%, #673ab7 100%);
}
</style>
