<template>
  <div class="biography-page">
    <h1 style="color: var(--q-title)">{{ t('header.who_am_i') }}</h1>
    <div class="bio-content">
      <img src="../assets/xavi ahora.jpeg" class="profile-img" />
      <div class="bio-text">
        <h2 style="color: var(--q-text)">{{ t('profile.name') }}</h2>
        <p>{{ t('profile.paraf.1') }}</p>
        <img src="../assets/Xavi-bruna-bb.png" class="other-img" />
        <p>{{ t('profile.paraf.2') }}</p>
        <img src="../assets/Xavi-bruna-joc.png" class="other-img" />
        <p>{{ t('profile.paraf.3') }}</p>
        <p>{{ t('profile.paraf.4') }}</p>
        <p>{{ t('profile.paraf.5') }}</p>
        <p>{{ t('profile.paraf.6') }}</p>
        <img src="../assets/Xavi-bruna-grande.png" class="other-img" />
        <p>{{ t('profile.paraf.7') }}</p>
        <ul>
          <li>
            <strong style="color: var(--q-text)">{{ t('profile.ubicacion.title') }}:</strong>
            {{ t('profile.ubicacion.description') }}
          </li>
          <li>
            <strong style="color: var(--q-text)">{{ t('profile.profesion.title') }}:</strong>
            {{ t('profile.profesion.description') }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const route = useRoute();

const whoAmIOgImage = new URL('../assets/Xavi1.png', import.meta.url).href;
const origin = typeof window !== 'undefined' ? window.location.origin : 'https://yesyoucan.dog';

const buildMeta = () => ({
  title: t('meta.whoAmI.title'),
  meta: {
    description: {
      name: 'description',
      content: t('meta.whoAmI.description'),
    },
    'og:title': {
      property: 'og:title',
      content: t('meta.whoAmI.ogTitle'),
    },
    'og:description': {
      property: 'og:description',
      content: t('meta.whoAmI.ogDescription'),
    },
    'og:type': {
      property: 'og:type',
      content: 'profile',
    },
    'og:url': {
      property: 'og:url',
      content: `${origin}${route.fullPath}`,
    },
    'og:image': {
      property: 'og:image',
      content: whoAmIOgImage,
    },
    'og:image:alt': {
      property: 'og:image:alt',
      content: t('meta.whoAmI.ogImageAlt'),
    },
  },
});

const metaState = ref(buildMeta());
useMeta(() => metaState.value);

watch([locale, () => route.fullPath], () => {
  metaState.value = buildMeta();
});
</script>
<style scoped>
.biography-page {
  max-width: 700px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--q-text);
}
.bio-content {
  display: flex;
  align-items: flex-start;
  gap: 32px;
}
.profile-img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--q-text);
}
.other-img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 2px solid var(--q-text);
  margin: 16px 0;
}
.bio-text {
  flex: 1;
}
.bio-text h2 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #333;
}
.bio-text p {
  margin-bottom: 16px;
  color: #555;
}
.bio-text ul {
  list-style: none;
  padding: 0;
}
.bio-text li {
  margin-bottom: 8px;
}
</style>
