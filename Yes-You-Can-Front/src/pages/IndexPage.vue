<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      :title="exampleTitle"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';

const { t } = useI18n();

const todos = computed<Todo[]>(() => [
  {
    id: 1,
    content: t('pages.index.todos.first'),
  },
  {
    id: 2,
    content: t('pages.index.todos.second'),
  },
  {
    id: 3,
    content: t('pages.index.todos.third'),
  },
  {
    id: 4,
    content: t('pages.index.todos.fourth'),
  },
  {
    id: 5,
    content: t('pages.index.todos.fifth'),
  },
]);

const meta = ref<Meta>({
  totalCount: 1200,
});

const exampleTitle = computed(() => t('pages.index.example.title'));
</script>
