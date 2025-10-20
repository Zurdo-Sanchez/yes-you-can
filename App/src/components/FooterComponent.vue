<template>
  <footer class="footer">
    <div class="footer-content">
  <span>{{ t('footer.copyright') }}</span>
  <span class="footer-version">{{ t('footer.version') }}{{ version }}</span>
    </div>
  </footer>
</template>
<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const version = import.meta.env.VITE_VERSION;
const { t } = useI18n();
</script>
<style scoped>
.footer {
  background-color: var(--q-backgroundHeader);
  border-top: 1px solid var(--q-primary);
  padding: 0.5rem 0;
  width: 100%;
  box-sizing: border-box;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
  color: var(--q-white);
}
.footer-version {
  font-size: 0.95rem;
  padding-right: 20px;
}
</style>
