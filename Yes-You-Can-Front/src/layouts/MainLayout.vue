<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          :aria-label="t('layout.header.menu')"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>{{ t('layout.header.title') }}</q-toolbar-title>

        <div>{{ t('layout.header.version', { version: $q.version }) }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>{{ t('layout.drawer.essentialLinks') }}</q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.link"
          :title="link.title"
          :caption="link.caption"
          :icon="link.icon"
          :link="link.link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const { t } = useI18n();

type LinkDefinition = Pick<EssentialLinkProps, 'icon' | 'link'> & {
  titleKey: string;
  captionKey?: string;
};

const linkDefinitions: LinkDefinition[] = [
  {
    titleKey: 'layout.links.docs.title',
    captionKey: 'layout.links.docs.caption',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    titleKey: 'layout.links.github.title',
    captionKey: 'layout.links.github.caption',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    titleKey: 'layout.links.discord.title',
    captionKey: 'layout.links.discord.caption',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    titleKey: 'layout.links.forum.title',
    captionKey: 'layout.links.forum.caption',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    titleKey: 'layout.links.twitter.title',
    captionKey: 'layout.links.twitter.caption',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    titleKey: 'layout.links.facebook.title',
    captionKey: 'layout.links.facebook.caption',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    titleKey: 'layout.links.awesome.title',
    captionKey: 'layout.links.awesome.caption',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

const linksList = computed<EssentialLinkProps[]>(() =>
  linkDefinitions.map(({ titleKey, captionKey, ...link }) => ({
    ...link,
    title: t(titleKey),
    caption: captionKey ? t(captionKey) : '',
  })),
);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
