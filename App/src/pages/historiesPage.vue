<template>
  <section class="page">
    <!-- Hero / Carousel -->
    <header class="hero">
      <div class="hero-inner">
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>

        <div
          class="carousel"
          @mouseenter="pauseAuto"
          @mouseleave="startAuto"
          aria-roledescription="carousel"
        >
          <transition name="fade" mode="out-in">
            <img
              :key="currentImage"
              :src="getCurrentImage"
              :alt="`Imagen ${currentImage + 1}`"
              class="carousel-img"
              @click="openLightbox(getCurrentImage)"
            />
          </transition>

          <button class="nav prev" @click="prev" aria-label="Anterior">‹</button>
          <button class="nav next" @click="next" aria-label="Siguiente">›</button>

          <div class="thumbs">
            <button
              v-for="(img, i) in images"
              :key="img"
              :class="['thumb', { active: i === currentImage }]"
              @click="goTo(i)"
              :aria-label="`Ver imagen ${i + 1}`"
            >
              <img :src="img" :alt="`Miniatura ${i + 1}`" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Story -->
    <main class="container">
      <article v-for="(block, idx) in story" :key="idx" class="story-block reveal">
        <div class="media" @click="openLightbox(block.img)">
          <h4 class="title">{{ block.title }}</h4>
          <img :src="block.img" :alt="block.title" />
        </div>
        <div class="text">
          <p>{{ block.text }}</p>
        </div>
      </article>
    </main>

    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxOpen" @click.self="closeLightbox">
      <button class="lb-close" @click="closeLightbox" aria-label="Cerrar">✕</button>
      <img :src="lightboxImage" class="lb-img" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';

import MauiImg from '../assets/Maui-Juan-Xavi.jpeg';
import LunaKumoImg from '../assets/Luna y Kumo.png';
import { useI18n } from 'vue-i18n';
import { useMeta } from 'quasar';
import { useRoute } from 'vue-router';

const origin: string = typeof window !== 'undefined' ? window.location.origin : '';
const explorerOgImage: string = MauiImg;

const { t, locale } = useI18n();
const route = useRoute();

// META TAGS
const buildMeta = () => ({
  title: 'Explorer - Nivel Básico | Yes You Can',
  meta: {
    description: {
      name: 'description',
      content:
        'Curso Explorer de adiestramiento canino básico. Obediencia básica, normas de convivencia y primeras órdenes esenciales para cachorros.',
    },
    'og:title': {
      property: 'og:title',
      content: 'Explorer - Nivel Básico de Adiestramiento Canino',
    },
    'og:description': {
      property: 'og:description',
      content:
        'El inicio de la aventura. Curso básico de adiestramiento para cachorros y perros sin entrenamiento previo.',
    },
    'og:type': {
      property: 'og:type',
      content: 'website',
    },
    'og:url': {
      property: 'og:url',
      content: `${origin}${route.fullPath}`,
    },
    'og:image': {
      property: 'og:image',
      content: `${origin}${explorerOgImage}`,
    },
    'og:image:alt': {
      property: 'og:image:alt',
      content: 'Curso Explorer de adiestramiento canino básico',
    },
  },
});

const metaState = ref(buildMeta());
useMeta(() => metaState.value);

watch([locale, () => route.fullPath], () => {
  metaState.value = buildMeta();
});

// STATIC DATA
const subtitle = computed(() => t('history.subtitle'));
const title = computed(() => t('history.title'));

const images: string[] = [MauiImg, LunaKumoImg];

// ✅ STORY AHORA ES COMPUTED → las traducciones funcionan
const story = computed(() => [
  {
    title: t('history.1.title'),
    text: t('history.1.description'),
    img: images[0]!,
  },
  {
    title: t('history.2.title'),
    text: t('history.2.description'),
    img: images[1]!,
  },
]);

// CAROUSEL
const currentImage = ref<number>(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

const getCurrentImage = computed(() => images[currentImage.value] ?? '');

function next() {
  currentImage.value = (currentImage.value + 1) % images.length;
}
function prev() {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length;
}
function goTo(i: number) {
  currentImage.value = i;
}

function startAuto() {
  stopAuto();
  intervalId = setInterval(next, 4500);
}
function stopAuto() {
  if (intervalId) clearInterval(intervalId);
  intervalId = null;
}
function pauseAuto() {
  stopAuto();
}

// LIGHTBOX
const lightboxOpen = ref<boolean>(false);
const lightboxImage = ref<string>('');

function openLightbox(src: string) {
  lightboxImage.value = src;
  lightboxOpen.value = true;
}
function closeLightbox() {
  lightboxOpen.value = false;
  lightboxImage.value = '';
}

// SCROLL REVEAL
let observer: IntersectionObserver | null = null;

onMounted(() => {
  startAuto();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    observer?.observe(el);
  });
});

onUnmounted(() => {
  stopAuto();
  observer?.disconnect();
});
</script>
<style scoped>
/* Layout and typography */
.page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  color: #0f172a;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  min-height: 100vh;
}
.title {
  text-align: center;
}
/* Hero */
.hero {
  background: linear-gradient(135deg, rgba(3, 105, 161, 0.06), rgba(99, 102, 241, 0.03));
  padding: 48px 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-inner {
  width: 100%;
  max-width: 1000px;
  text-align: center;
}
.title {
  font-size: 2rem;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
  color: #092241;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}
.subtitle {
  margin: 0 0 20px;
  color: #334155;
}

/* Carousel */
.carousel {
  position: relative;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  max-width: 900px;
  box-shadow: 0 10px 30px rgba(16, 24, 40, 0.08);
  background: #fff;
}
.carousel-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  cursor: zoom-in;
  transition: transform 0.6s ease;
}
.carousel-img {
  object-position: bottom center !important;
}
.carousel-img:hover {
  transform: scale(1.02);
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(8, 30, 63, 0.6);
  color: #fff;
  border: none;
  padding: 10px 14px;
  font-size: 22px;
  border-radius: 8px;
  cursor: pointer;
}
.nav.prev {
  left: 12px;
}
.nav.next {
  right: 12px;
}
.thumbs {
  display: flex;
  gap: 8px;
  padding: 10px;
  justify-content: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9));
}
.thumb {
  border: 2px solid transparent;
  padding: 2px;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
}
.thumb.active {
  border-color: #6366f1;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.18);
}
.thumb img {
  width: 64px;
  height: 40px;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

/* Main story */
.container {
  max-width: 1000px;
  margin: 28px auto;
  padding: 0 16px 80px;
}
.story-block {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 28px 0;
  align-items: center;
  padding: 18px;
  border-radius: 12px;
  background: linear-gradient(180deg, #ffffffcc, #fbfdff);
  box-shadow: 0 6px 22px rgba(15, 23, 42, 0.04);
  transform: translateY(18px);
  opacity: 0;
  transition: all 700ms cubic-bezier(0.2, 0.9, 0.3, 1);
}
.story-block.in-view {
  transform: none;
  opacity: 1;
}
.story-block:nth-child(even) {
  grid-template-columns: 1fr;
}
.media img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: zoom-in;
}
.text h2 {
  margin: 0 0 8px;
  font-size: 1.25rem;
  color: #0f172a;
}
.text p {
  margin: 0;
  color: #334155;
  line-height: 1.5;
  text-align: justify;
}

/* Callout */
.callout {
  margin: 36px 0 0;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(90deg, #eef2ff, #fff7ed);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.06);
  transform: translateY(18px);
  opacity: 0;
  transition: all 700ms ease;
}
.callout.in-view {
  transform: none;
  opacity: 1;
}
.callout h3 {
  margin: 0 0 6px;
}
.callout p {
  margin: 0 0 12px;
}
.cta {
  background: #6366f1;
  color: #fff;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(4, 6, 23, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 70;
}
.lb-img {
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
  border-radius: 8px;
  box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
}
.lb-close {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: none;
  color: #fff;
  font-size: 20px;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 600ms ease,
    transform 600ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.995);
}

/* Responsive */
@media (max-width: 880px) {
  .story-block {
    grid-template-columns: 1fr;
  }
  .carousel-img {
    height: 300px;
  }
}
@media (max-width: 460px) {
  .carousel-img {
    height: 220px;
  }
  .thumb img {
    width: 52px;
    height: 36px;
  }
  .title {
    font-size: 1.4rem;
  }
}
</style>
