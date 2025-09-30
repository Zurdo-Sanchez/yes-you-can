<template>
  <q-header elevated class="header">
    <q-toolbar class="toolbar">
      <div class="header-left">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
        <span class="app-name centered-secondary">
          <span class="logo-second-Color">
            {{ t('header.app_name').slice(0, 3) }}
          </span>
          <span class="logo-first-Color">
            {{ t('header.app_name').slice(3, 7) }}
          </span>
          <span class="logo-second-Color">
            {{ t('header.app_name').slice(7, 10) }}
          </span>
        </span>
      </div>
      <div class="header-center">
        <nav class="header-nav">
          <div>
            <a
              class="nav-link"
              :class="{ 'nav-link-active': isActive('home') }"
              href=""
              @click="handleNavClick('home', $event)"
              >{{ t('header.home') }}</a
            >
          </div>

          <a
            class="nav-link"
            :class="{ 'nav-link-active': isActive('work') }"
            href=""
            @click="handleNavClick('work', $event)"
            >{{ t('header.our_work') }}</a
          >
          <div>
            <router-link
              class="nav-link"
              :class="{ 'nav-link-active': isActive('whoami') }"
              to="/whoami"
              >{{ t('header.who_am_i') }}</router-link
            >
            <a
              class="nav-link"
              :class="{ 'nav-link-active': isActive('success') }"
              href=""
              @click="handleNavClick('success', $event)"
              >{{ t('header.Transformation_Stories') }}</a
            >
          </div>
          <div>
            <a
              class="nav-link"
              :class="{ 'nav-link-active': isActive('faq') }"
              href=""
              @click="handleNavClick('faq', $event)"
              >{{ t('header.faq') }}</a
            >
          </div>
          <div>
            <a
              class="nav-link"
              :class="{ 'nav-link-active': isActive('contact') }"
              href=""
              @click="handleNavClick('contact', $event)"
              >{{ t('header.contact') }}</a
            >
          </div>
        </nav>
      </div>
      <div class="header-right">
        <div class="phone-container">
          <q-icon name="phone" size="sm" class="phone-icon" />
          <span class="phone-number">{{ t('contact.phone') }}</span>
        </div>
        <q-btn-dropdown split rounded dropdown-icon="" icon="language" class="language-select">
          <template #label>
            <span class="label">
              {{
                configStore.language === 'es-ES'
                  ? 'ES'
                  : configStore.language === 'ca-ES'
                    ? 'CA'
                    : 'EN'
              }}
            </span>
          </template>
          <q-list>
            <q-item clickable v-close-popup @click="setLanguage('es-ES')">
              <q-item-section>{{ t('header.lang_es') }}</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="setLanguage('ca-ES')">
              <q-item-section>{{ t('header.lang_ca') }}</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="setLanguage('en-US')">
              <q-item-section>{{ t('header.lang_en') }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn rounded @click="toggleTheme" class="theme-btn">
          {{ configStore.currentTheme === 'light' ? t('header.sun') : t('header.moon') }}
        </q-btn>
        <!-- TODO: proximo desarrollo de login -->
        <!-- <q-btn v-if="!login" rounded class="login-btn">{{ t('header.login') }}</q-btn> -->
        <q-btn round v-if="login">
          <q-avatar>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1CSyUmV26H7RN9ZJuiZxsACrSnZWiW5m-KPlo5Bv4IpcGsQl4VgFFvDyKGIEeGmu4I3KGCGwLAzB9xHSRoP_88Efw5JJifeYJV80ojP8R4b0VyMOetIF7DINeY59tSt0ZgTpV25IfRqhl6xYDsWGsChvn3lmACApzgHM5OQck11pOSrkc2A4i6oZSFh7m7XwXh-l1aJeK48z4pxDjVX2GLpe06ytb0h5G-kTx1tYeLUI1ceoDW1f6o4vTe8xnBqzOC1uGLGmz4fg"
              alt="User Avatar"
            />
          </q-avatar>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>
<script setup lang="ts">
import { useConfigStore } from '../stores/settingsStore';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

// Interface para extender Window
interface ExtendedWindow extends Window {
  debugHeaderIntersection?: () => void;
  setDetectionOffset?: (offset: number) => void;
}

const { t, locale } = useI18n();
const configStore = useConfigStore();
const login = configStore.login;
const router = useRouter();
const route = useRoute();

// Estado para la sección que intersecta con el header
const intersectingSection = ref('home');

// Variables para el manejo de scroll
let scrollTimeout: NodeJS.Timeout | null = null;

// Offset configurable para detección temprana (píxeles)
const detectionOffset = ref(200);

// Función para detectar qué sección intersecta con el header
function detectHeaderIntersection() {
  // console.log('🔍 Detectando intersección del header...');

  const header = document.querySelector('.q-header') as HTMLElement;
  if (!header) {
    // console.log('❌ Header no encontrado');
    return;
  }

  const headerHeight = header.offsetHeight;
  // Offset para detectar un poco antes de que llegue al header
  const detectionPoint = headerHeight + detectionOffset.value;

  // console.log(`📏 Altura del header: ${headerHeight}px`);
  // console.log(`📐 Punto de detección: ${detectionPoint}px (offset: +${detectionOffset.value}px)`);

  // Lista de secciones a verificar
  const sections = ['home', 'work', 'success', 'faq', 'contact'];
  let foundSection = 'home';

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();

      // Verificar si la sección intersecta con el área de detección expandida
      // Una sección intersecta si su parte superior está por encima del punto de detección
      // y su parte inferior está por debajo del top del header
      const intersects = rect.top <= detectionPoint && rect.bottom >= 0;

      // console.log(`📦 Sección "${sectionId}":`, {
      //   top: Math.round(rect.top),
      //   bottom: Math.round(rect.bottom),
      //   intersects: intersects,
      //   detectionPoint: detectionPoint,
      //   distanceToDetection: Math.round(rect.top - detectionPoint),
      // });

      if (intersects) {
        // Si múltiples secciones intersectan, tomar la que tiene más área visible
        const visibleArea = Math.min(rect.bottom, detectionPoint) - Math.max(rect.top, 0);
        if (visibleArea > 0) {
          foundSection = sectionId;
          // console.log(
          //   `✅ Sección intersectante: "${sectionId}" (área visible: ${Math.round(visibleArea)}px)`,
          // );
        }
      }
    }
  }

  if (foundSection !== intersectingSection.value) {
    // console.log(`🔄 Cambio de sección: "${intersectingSection.value}" → "${foundSection}"`);
    intersectingSection.value = foundSection;
  }
}

// Función de debug manual
function debugHeaderIntersection() {
  // console.log('🛠️ === DEBUG INTERSECCIÓN HEADER ===');
  // console.log(`📍 Sección actual intersectante: "${intersectingSection.value}"`);
  // console.log(`🎯 Offset de detección actual: ${detectionOffset.value}px`);
  detectHeaderIntersection();
  // console.log('🛠️ === FIN DEBUG ===');
}

// Función para ajustar el offset de detección
function setDetectionOffset(newOffset: number) {
  // console.log(`🎛️ Cambiando offset de ${detectionOffset.value}px a ${newOffset}px`);
  detectionOffset.value = newOffset;
  detectHeaderIntersection();
}

// Manejo del scroll con throttling
function handleScroll() {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = setTimeout(() => {
    detectHeaderIntersection();
  }, 50); // Throttling de 50ms
}

// Computed para las clases activas del navigation
const isActive = (sectionId: string) => {
  // Si estamos en la página /whoami y se pregunta por 'whoami', retorna true
  if (route.path === '/whoami' && sectionId === 'whoami') {
    return true;
  }
  // Si estamos en la página /explorer y se pregunta por 'work', retorna true
  if (route.path === '/explorer' && sectionId === 'work') {
    return true;
  }
  // Si estamos en /whoami, no marcar otras secciones como activas
  if (route.path === '/whoami') {
    return false;
  }
  // Si estamos en /explorer, no marcar otras secciones como activas
  if (route.path === '/explorer') {
    return false;
  }
  // Para la página principal, usar la detección de intersección
  return intersectingSection.value === sectionId;
};

onMounted(() => {
  // console.log('🚀 HeaderComponent montado - Sistema de intersección activo');

  // Agregar listener de scroll
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Detectar intersección inicial
  setTimeout(() => detectHeaderIntersection(), 100);
  setTimeout(() => detectHeaderIntersection(), 500);

  // Funciones de debug disponibles globalmente
  (window as ExtendedWindow).debugHeaderIntersection = debugHeaderIntersection;
  (window as ExtendedWindow).setDetectionOffset = setDetectionOffset;
  // console.log('🛠️ Debug: Funciones disponibles en consola:');
  // console.log('  - debugHeaderIntersection()');
  // console.log('  - setDetectionOffset(píxeles) // ej: setDetectionOffset(100)');
});
onUnmounted(() => {
  // console.log('🔴 HeaderComponent desmontado');
  window.removeEventListener('scroll', handleScroll);
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  // Limpiar funciones globales
  delete (window as ExtendedWindow).debugHeaderIntersection;
  delete (window as ExtendedWindow).setDetectionOffset;
});

function toggleTheme() {
  configStore.toggleTheme();
}

function setLanguage(lang: string) {
  configStore.language = lang;
  locale.value = lang; // <-- Esto fuerza el cambio en vue-i18n
}

function handleNavClick(id: string, event: MouseEvent) {
  // console.log(`🖱️ Click en navegación: "${id}"`);
  event.preventDefault();

  if (route.path === '/') {
    scrollTo(id);
  } else {
    void router.push('/').then(() => {
      setTimeout(() => {
        scrollTo(id);
      }, 300);
    });
  }
}
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    // console.log(`📍 Scrolling a sección: "${id}"`);
    el.scrollIntoView({ behavior: 'smooth' });

    // Actualizar inmediatamente la sección intersectante
    setTimeout(() => {
      intersectingSection.value = id;
      // console.log(`⚡ Sección forzada: "${id}"`);
    }, 100);
  } else {
    // console.log(`❌ Elemento no encontrado: "${id}"`);
  }
}
</script>
<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: min-content;
}
.header {
  background: var(--q-white);
  backdrop-filter: blur(10px);
}
.avatar {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}
.logo {
  height: 40px;
}
.app-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--q-primary -contrast);
  margin-left: 0.5rem;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-center {
  display: flex;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
}
.language-select {
  margin-right: 1rem;
  padding: 0.1rem;
  border: 1px solid var(--q-primary -contrast);
  color: var(--q-title);
}
.theme-btn {
  margin-right: 1rem;

  border: 1px solid var(--q-primary -contrast);
}
.nav-link {
  color: var(--q-nameSecondary);
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.nav-link-active {
  color: var(--q-primary);
  background-color: rgba(var(--q-primary-rgb), 0.1);
  box-shadow: 0 2px 8px var(--q-primary);
  font-weight: 600;
  border-radius: 50px;
}
.label {
  color: var(--q-title);
  text-decoration: none;
  margin-left: 0.5rem;
}

.phone-container {
  display: flex;
  align-items: center;
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
.header-nav {
  display: flex;
  align-items: center;
}
.phone-icon {
  color: var(--q-title);
  margin-right: 0.5rem;
}

.phone-number {
  color: var(--q-title);
  font-weight: 500;
  font-size: 0.9rem;
}

.logo-first-Color {
  color: var(--q-namePrimary);
}
.logo-second-Color {
  color: var(--q-nameSecondary);
}
</style>
