<template>
  <q-header elevated>
    <q-toolbar class="toolbar">
      <div class="header-left">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
        <span class="app-name centered-secondary">Yes You Can</span>
      </div>
      <div class="header-center">
        <nav class="header-nav">
          <a class="nav-link">Nuestro Trabajo</a>
          <a class="nav-link">Casos de Éxito</a>
          <a class="nav-link">Preguntas Frecuentes</a>
          <a class="nav-link">Contáctanos</a>
        </nav>
      </div>
      <div class="header-right">
        <q-btn-dropdown split rounded icon="language" class="language-select">
          <q-list>
            <q-item clickable v-close-popup @click="setLanguage('es')">
              <q-item-section>ES</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="setLanguage('ca')">
              <q-item-section>CA</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn rounded @click="toggleTheme" class="theme-btn">
          {{ themeStore.currentTheme === 'light' ? '🌞' : '🌙' }}
        </q-btn>
        <q-btn rounded class="login-btn">Iniciar sesión</q-btn>
        <q-btn round>
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
  name: 'HeaderComponent',
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '../stores/theme';

const language = ref('es');
const themeStore = useThemeStore();

function toggleTheme() {
  themeStore.toggleTheme();
}

function setLanguage(lang: string) {
  language.value = lang;
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
  background: var(--q-primary);
  border-bottom: 1px solid var(--q-primary);
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
  background: var(--q-primary);
}
.theme-btn {
  margin-right: 1rem;
  padding: 1 rem;
  border: 1px solid var(--q-primary -contrast);
  background: var(--q-primary);
}
.nav-link {
  color: var(--q-primary -contrast);
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
}
</style>
