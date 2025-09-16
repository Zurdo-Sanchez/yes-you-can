<template>
  <div>
    <header class="header">
      <div class="header-left">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <span class="app-name">Yes You Can</span>
      </div>
      <div class="header-right">
        <select v-model="language" class="language-select">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <button @click="toggleTheme" class="theme-btn">
          {{ theme === 'light' ? '🌞' : '🌙' }}
        </button>
        <button class="login-btn">Iniciar sesión</button>
      </div>
    </header>
    <main>
      <!-- Contenido principal aquí -->
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const language = ref('es');
const theme = ref('light');

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--header-bg, #fff);
  border-bottom: 1px solid #eee;
}
.header-left {
  display: flex;
  align-items: center;
}
.logo {
  height: 40px;
  margin-right: 1rem;
}
.app-name {
  font-size: 1.5rem;
  font-weight: bold;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.language-select {
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.theme-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.login-btn {
  padding: 0.4rem 1rem;
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
}
[data-theme='dark'] {
  --header-bg: #222;
  color: #eee;
}
</style>
