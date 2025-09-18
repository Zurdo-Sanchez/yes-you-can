<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent />
    <DogTraining />
    <FooterComponent />
  </q-layout>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue';
import DogTraining from '../pages/DogTraining.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>
