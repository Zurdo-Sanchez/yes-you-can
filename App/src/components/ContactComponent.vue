<template>
  <section class="contact-section">
    <h2 class="section-title">{{ t('contact.contact_us') }}</h2>
    <q-form class="contact-form" @submit.prevent="sendNotification">
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
        @blur="touchedEmail = true"
      />
      <div v-if="touchedEmail && !isEmailValid(email)" class="field-error">
        {{ t('contact.invalid_email') || 'Email no válido' }}
      </div>
      <q-input
        rounded
        outlined
        :label="t('contact.your_phone')"
        type="tel"
        class="contact-input"
        v-model="telefono"
        @input="onPhoneInput"
        @blur="touchedPhone = true"
        inputmode="numeric"
        pattern="[0-9]*"
      />
      <div v-if="touchedPhone && !isPhoneValid(telefono)" class="field-error">
        {{ t('contact.invalid_phone') || 'Teléfono no válido' }}
      </div>
      <q-input
        rounded
        outlined
        :label="t('contact.your_message')"
        type="textarea"
        class="contact-input"
        v-model="message"
      />
      <div class="contact-actions">
        <q-btn
          class="send-btn"
          :label="loading ? 'Enviando...' : t('contact.btn_send')"
          :loading="loading"
          :disable="!isValid || loading"
          type="submit"
        >
          <q-tooltip v-if="!isValid && !loading">{{ tooltipText }}</q-tooltip>
        </q-btn>
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
import { ref, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useConfigStore } from '../stores/settingsStore';
import { Notify } from 'quasar';

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
const loading = ref(false);

const isEmailValid = (value: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/i.test(value);
const isPhoneValid = (value: string) => /^\d+$/.test(String(value || '').trim());

const isValid = computed(() => {
  return (
    name.value.trim() !== '' &&
    email.value.trim() !== '' &&
    telefono.value.trim() !== '' &&
    message.value.trim() !== '' &&
    isEmailValid(email.value)
  );
});

const touchedEmail = ref(false);
const touchedPhone = ref(false);

const tooltipText = computed(() => {
  if (loading.value) return '';
  const missing: string[] = [];
  if (!name.value.trim()) missing.push('Nombre');
  if (!email.value.trim()) missing.push('Email');
  else if (!isEmailValid(email.value)) missing.push('Email inválido');
  if (!telefono.value.trim()) missing.push('Teléfono');
  else if (!isPhoneValid(telefono.value)) missing.push('Teléfono inválido');
  if (!message.value.trim()) missing.push('Mensaje');
  if (missing.length === 0) return '';
  return `Faltan: ${missing.join(', ')}`;
});

function onPhoneInput(val: string) {
  // keep only digits
  telefono.value = String(val || '').replace(/\D+/g, '');
}

const sendNotification = async () => {
  if (!isValid.value)
    return safeNotify({ type: 'negative', message: 'Rellena todos los campos correctamente' });

  loading.value = true;
  try {
    const res = await fetch(`${API_BASE}/mail/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        telefono: telefono.value,
        message: message.value,
      }),
    });

    if (!res.ok) throw new Error('Error en el envío');
    safeNotify({ type: 'positive', message: 'Correo enviado correctamente' });
    name.value = '';
    email.value = '';
    telefono.value = '';
    message.value = '';
  } catch (err) {
    console.error('Error sending notification:', err);
    safeNotify({ type: 'negative', message: 'Error al enviar el correo' });
  } finally {
    loading.value = false;
  }
};

// API base: default to same host with port 7000. For mobile testing set
// window.__VITE_API_URL in your index.html or replace the URL here.
const API_BASE: string =
  (window as any).__VITE_API_URL || `${window.location.protocol}//${window.location.hostname}:7000`;

function safeNotify(opts: { type?: string; message: string }) {
  try {
    if (Notify && typeof (Notify as any).create === 'function') {
      (Notify as any).create(opts);
    } else if (typeof window !== 'undefined') {
      // fallback for environments where Quasar Notify isn't available
      // eslint-disable-next-line no-alert
      alert(opts.message);
    } else {
      console.log('Notify fallback:', opts);
    }
  } catch (e) {
    console.log('Notify error fallback', e, opts);
  }
}
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
