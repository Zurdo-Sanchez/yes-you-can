<template>
  <div class="title-section">
    <h1 class="title">{{ t('content.btn') }}</h1>
    <div class="content">
      <div class="ImgMoreText">
        <img class="profile-img" src="../assets/yesyoucan-gordo.png" alt="" />
        <div>
          <div>
            <h5 class="title-paraf">{{ t('method.block1.paraf1.title') }}</h5>
            <p class="paraf" v-html="t('method.block1.paraf1.paraf')"></p>
          </div>
          <div>
            <h5 class="title-paraf">{{ t('method.block1.paraf2.title') }}</h5>
            <p class="paraf" v-html="t('method.block1.paraf2.paraf')"></p>
          </div>
          <div>
            <h5 class="title-paraf">{{ t('method.block1.paraf3.title') }}</h5>
            <p class="paraf" v-html="t('method.block1.paraf3.paraf')"></p>
          </div>
        </div>
      </div>

      <div>
        <h5 class="title-paraf">{{ t('method.block1.paraf4.title') }}</h5>
        <p class="paraf" v-html="t('method.block1.paraf4.paraf')"></p>
      </div>
      <div>
        <h5 class="title-paraf">{{ t('method.block1.paraf5.title') }}</h5>
        <p class="paraf" v-html="t('method.block1.paraf5.paraf')"></p>
      </div>
    </div>
    <div class="content">
      <div class="ImgMoreText-reverse">
        <div>
          <div>
            <h5 class="title-paraf">{{ t('method.block2.paraf1.title') }}</h5>
            <p class="paraf">
              {{ t('method.block2.paraf1.paraf') }}
            </p>
          </div>
          <div>
            <h5 class="title-paraf">{{ t('method.block2.paraf2.title') }}</h5>
            <p class="paraf">
              {{ t('method.block2.paraf2.paraf') }}
            </p>
          </div>
        </div>
        <div>
          <img
            class="profile-img"
            style="margin: 8px"
            src="../assets/youcan sentado en el sofa.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <h5 class="title-paraf">{{ t('method.block2.paraf3.title') }}</h5>
        <p class="paraf" v-html="t('method.block2.paraf3.paraf')"></p>
      </div>
      <div>
        <h5 class="title-paraf">{{ t('method.block2.paraf4.title') }}</h5>
        <p class="paraf" v-html="t('method.block2.paraf4.paraf')"></p>
      </div>
      <div>
        <p class="paraf" v-html="t('method.block2.paraf5.paraf')"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MethodPage',
};
</script>

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
.title {
  font-size: 4.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--q-title);
  margin-bottom: 2rem !important;
}
.title-paraf {
  margin: 0.5rem 0;
  color: var(--q-text);
}
.title-section {
  margin: 4rem 1rem 1rem 1rem;
  min-height: 85vh;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--q-text);
}
.content {
  display: grid;
  grid-template-columns: 1fr, 1fr;
  gap: 0rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--q-text);
  padding: 0 1rem;
  margin-bottom: 2rem;
}
.profile-img {
  width: 28rem;
  height: auto;
}
.ImgMoreText {
  display: grid;
  grid-template-columns: 30rem 1fr;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.ImgMoreText-reverse {
  display: grid;
  grid-template-columns: 1fr 30rem;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.paraf {
  text-align: justifyP;
}
</style>
