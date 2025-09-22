<template>
  <q-layout view="lHh Lpr lFf">
  <HeaderComponent />
  <router-view />
  <FooterComponent />
  </q-layout>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>
