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
}
.header {
  background: var(--q-background-light);
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
</style>
