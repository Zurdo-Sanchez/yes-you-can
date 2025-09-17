<template>
  <q-footer class="footer">
    <div class="footer-content">
      <span>© 2025 Yes You Can. Todos los derechos reservados.</span>
      <span class="footer-version">Versión 1.0</span>
    </div>
  </q-footer>
</template>
<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>
<style scoped>
.footer {
  background: var(--q-primary);
  border-top: 1px solid var(--q-primary);
  padding: 0.5rem 0;
  height: min-content;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
  color: var(--q-primary -contrast);
}
.footer-version {
  font-size: 0.95rem;
  color: var(--q-primary -contrast);
  padding-right: 20px;
}
</style>
