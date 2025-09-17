<template>
  <q-header elevated>
    <q-toolbar class="toolbar">
      <div class="header-left">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
        <span class="app-name centered-secondary">Yes You Can</span>
      </div>
      <div class="header-right">
        <select v-model="language" class="language-select">
          <option value="es">ES</option>
          <option value="en">CA</option>
        </select>
        <button @click="toggleTheme" class="theme-btn">
          {{ themeStore.currentTheme === 'light' ? '🌞' : '🌙' }}
        </button>
        <button class="login-btn">Iniciar sesión</button>
        <button
          class="h-10 w-10 rounded-full bg-cover bg-center avatar"
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1CSyUmV26H7RN9ZJuiZxsACrSnZWiW5m-KPlo5Bv4IpcGsQl4VgFFvDyKGIEeGmu4I3KGCGwLAzB9xHSRoP_88Efw5JJifeYJV80ojP8R4b0VyMOetIF7DINeY59tSt0ZgTpV25IfRqhl6xYDsWGsChvn3lmACApzgHM5OQck11pOSrkc2A4i6oZSFh7m7XwXh-l1aJeK48z4pxDjVX2GLpe06ytb0h5G-kTx1tYeLUI1ceoDW1f6o4vTe8xnBqzOC1uGLGmz4fg');
          "
        ></button>
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
  padding: 0.25rem;
  border-radius: 30%;
  border: 1px solid var(--q-primary -contrast);
  background: var(--q-primary);
  color: var(--q-primary -contrast);
}
</style>
