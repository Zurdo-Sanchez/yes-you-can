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
            <a class="nav-link" href="" @click="handleNavClick('home', $event)">{{
              t('header.home')
            }}</a>
          </div>
          <a class="nav-link" href="" @click="handleNavClick('work', $event)">{{
            t('header.our_work')
          }}</a>
          <div>
            <router-link class="nav-link" to="/whoami">{{ t('header.who_am_i') }}</router-link>
            <a class="nav-link" href="" @click="handleNavClick('success', $event)">{{
              t('header.Transformation_Stories')
            }}</a>
          </div>
          <div>
            <a class="nav-link" href="" @click="handleNavClick('faq', $event)">{{
              t('header.faq')
            }}</a>
          </div>
          <div>
            <a class="nav-link" href="" @click="handleNavClick('contact', $event)">{{
              t('header.contact')
            }}</a>
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
<script setup lang="ts">
import { useConfigStore } from '../stores/settingsStore';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';

const { t, locale } = useI18n();
const configStore = useConfigStore();
const login = configStore.login;
const router = useRouter();
const route = useRoute();

function toggleTheme() {
  configStore.toggleTheme();
}

function setLanguage(lang: string) {
  configStore.language = lang;
  locale.value = lang; // <-- Esto fuerza el cambio en vue-i18n
}

function handleNavClick(id: string, event: MouseEvent) {
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
  if (el) el.scrollIntoView({ behavior: 'smooth' });
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
header-nav {
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
