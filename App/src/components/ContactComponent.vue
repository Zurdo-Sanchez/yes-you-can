<template>
  <section class="contact-section">
    <h2 class="section-title">{{ t('contact.contact_us') }}</h2>
    <q-form class="contact-form">
      <q-input
        rounded
        outlined
        :label="t('contact.your_name')"
        class="contact-input"
        v-model="name"
      />
      <q-input
        rounded
        outlined
        :label="t('contact.your_email')"
        type="email"
        class="contact-input"
        v-model="email"
      />
      <q-input
        rounded
        outlined
        :label="t('contact.your_phone')"
        type="tel"
        class="contact-input"
        v-model="telefono"
      />
      <q-input
        rounded
        outlined
        :label="t('contact.your_message')"
        type="textarea"
        class="contact-input"
        v-model="message"
      />
      <div class="contact-actions">
        <q-btn class="send-btn" :label="t('contact.btn_send')" />
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
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useConfigStore } from '../stores/settingsStore';

const store = useConfigStore();
const { t, locale } = useI18n();

watch(
  () => store.language,
  (newLang) => {
    locale.value = newLang;
  },
  { immediate: true },
);

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
  color: var(--q-text);
}
.send-btn {
  background: var(--q-backgroundHeader);
  color: var(--q-white);
  font-weight: bold;
}
</style>
