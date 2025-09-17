<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>
      {{ t('components.example.todoCount', { done: todoCount, total: meta.totalCount }) }}
    </p>
    <p>
      {{
        t('components.example.active', {
          status: active ? t('common.boolean.yes') : t('common.boolean.no'),
        })
      }}
    </p>
    <p>{{ t('components.example.clickCount', { count: clickCount }) }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Todo, Meta } from './models';

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const { t } = useI18n();

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>
