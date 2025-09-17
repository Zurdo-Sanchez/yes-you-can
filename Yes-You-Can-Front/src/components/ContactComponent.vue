<template>
  <section class="contact-section">
    <h2 class="section-title">Contáctanos</h2>
    <q-form class="contact-form">
      <q-input rounded outlined label="Tu Nombre" class="contact-input" v-model="name" />
      <q-input
        rounded
        outlined
        label="Tu Email"
        type="email"
        class="contact-input"
        v-model="email"
      />
      <q-input
        rounded
        outlined
        label="Tu Teléfono"
        type="tel"
        class="contact-input"
        v-model="telefono"
      />
      <q-input
        rounded
        outlined
        label="Tu Mensaje"
        type="textarea"
        class="contact-input"
        v-model="message"
      />
      <div class="contact-actions">
        <q-btn color="primary" label="Enviar Mensaje" />
      </div>
    </q-form>
  </section>
</template>
<script lang="ts">
export default {
  name: 'ContactComponent',
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
const name = ref('');
const email = ref('');
const telefono = ref('');
const message = ref('');
</script>
<style scoped>
.contact-section {
  padding: 3rem 0 2rem 0;
}
.contact-form {
  max-width: 500px;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.contact-input {
  margin-bottom: 0.5rem;
  background: var(--q-white);
}
.contact-actions {
  display: flex;
  justify-content: flex-end;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
