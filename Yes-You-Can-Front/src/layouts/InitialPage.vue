<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
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
    <q-page-container>
      <q-page class="main-content flex column justify-center q-pa-md">
        <section class="post">
          <div class="post-photo">
            <!-- Aquí puedes poner una foto del trabajo realizado -->
          </div>
          <div class="post-desc">
            <h2>Educación básica</h2>
            <p>
              Enseñamos a tu perro a convivir en familia, obedecer órdenes básicas y mejorar su
              comportamiento en casa y en la calle.
            </p>
          </div>
        </section>
        <section class="post">
          <div class="post-photo">
            <!-- Aquí puedes poner una foto del trabajo realizado -->
          </div>
          <div class="post-desc">
            <h2>Modificación de conducta</h2>
            <p>
              Ayudamos a corregir problemas como agresividad, miedo, ansiedad por separación y otros
              comportamientos no deseados.
            </p>
          </div>
        </section>
      </q-page>
    </q-page-container>
    <q-footer class="footer">
      <span class="footer-version">v0.0.1</span>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from 'src/stores/theme';

const language = ref('es');
const themeStore = useThemeStore();

function toggleTheme() {
  themeStore.toggleTheme();
}
</script>

<style scoped>
.main-content {
  background: var(--q-primary);
  gap: 2rem;
}
.post {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
}
.post-photo {
  width: 180px;
  height: 180px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #aaa;
}
.post-desc {
  flex: 1;
  padding: 1.5rem;
}
.post-desc h2 {
  margin: 0 0 0.5rem 0;
  color: var(--q-secondary);
}
.post-desc p {
  margin: 0;
  color: #333;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header {
  background: var(--q-primary);
  border-bottom: 1px solid var(--q-secondary);
}
.footer {
  width: 100%;
  padding: 0.7rem 2rem;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.footer-version {
  color: #888;
  font-size: 0.95rem;
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
.centered-secondary {
  display: block;
  text-align: center;
  color: var(--q-secondary);
  width: 100%;
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
</style>
