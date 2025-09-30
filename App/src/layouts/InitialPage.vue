<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent />
    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated fadeIn slower delay-1s repeat-2"
        leave-active-class="animated fadeOut slower delay-1s"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterComponent />
  </q-layout>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<style scoped>
/* Transiciones visibles entre páginas */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.9);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(0.9);
}

.page-fade-enter-to,
.page-fade-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>
