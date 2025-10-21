<template>
  <div :class="positionClasses" :style="fabStyles" @click="handleClick">
    <div class="fab-content">
      <q-icon class="fab-icon" :name="icon" />
      <span class="fab-text">{{ text }}</span>
      <q-icon class="fab-icon" :name="icon" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FloatArrow',
};
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';

type Position =
  | 'left'
  | 'left-up'
  | 'up'
  | 'right-up'
  | 'right'
  | 'right-down'
  | 'down'
  | 'left-down';

interface Props {
  text?: string;
  icon: string;
  position?: Position;
  to?: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Siguiente nivel',
  position: 'right' as Position,
  to: '',
  textColor: 'white',
  backgroundColor: '',
});

const router = useRouter();

// Computed para calcular las clases de posición
const positionClasses = computed(() => {
  const baseClass = 'expandable-fab';
  const positionClass = `fab-${props.position}`;
  return `${baseClass} ${positionClass}`;
});

// Computed para estilos dinámicos
const fabStyles = computed(() => {
  return {
    '--fab-bg-color': props.backgroundColor || 'var(--q-primary)',
    '--fab-text-color': props.textColor,
  };
});

function handleClick() {
  if (props.onClick) {
    props.onClick();
  } else if (props.to) {
    void router.push(props.to);
  }
}
</script>

<style scoped>
/* FAB expandible base */
.expandable-fab {
  position: fixed;
  z-index: 1000;
  background-color: var(--fab-bg-color, var(--q-primary));
  border-radius: 56px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* Posiciones del FAB */
.fab-right {
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
}

.fab-left {
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
}

.fab-up {
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
}

.fab-down {
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
}

.fab-right-up {
  top: 70px;
  right: 24px;
}

.fab-right-down {
  bottom: 24px;
  right: 24px;
}

.fab-left-up {
  top: 70px;
  left: 24px;
}

.fab-left-down {
  bottom: 24px;
  left: 24px;
}

/* Efectos hover específicos por posición */
.fab-right:hover {
  width: 200px;
  transform: translateY(-50%) translateX(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.fab-left:hover {
  width: 200px;
  transform: translateY(-50%) translateX(2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
}

.fab-right-up:hover,
.fab-right-down:hover {
  width: 200px;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.fab-left-up:hover,
.fab-left-down:hover {
  width: 200px;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
}

.fab-up:hover {
  width: 200px;
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.fab-down:hover {
  width: 200px;
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.fab-content {
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 16px;
  width: 100%;
  justify-content: space-between;
}

/* Contenido específico para posiciones izquierdas */
.fab-left .fab-content,
.fab-left-up .fab-content,
.fab-left-down .fab-content {
  flex-direction: row-reverse;
}

.fab-icon {
  color: var(--fab-text-color, white);
  font-size: 24px;
  min-width: 24px;
  transition: transform 0.3s ease-in-out;
}

.fab-icon:last-child {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease-in-out;
}

.expandable-fab:hover .fab-icon {
  transform: translateX(2px);
}

.expandable-fab:hover .fab-icon:last-child {
  opacity: 1;
  transform: translateX(0);
}

/* Ajustes para posiciones izquierdas */
.fab-left .fab-icon:last-child,
.fab-left-up .fab-icon:last-child,
.fab-left-down .fab-icon:last-child {
  transform: translateX(10px);
}

.fab-left:hover .fab-icon,
.fab-left-up:hover .fab-icon,
.fab-left-down:hover .fab-icon {
  transform: translateX(-2px);
}

.fab-text {
  color: var(--fab-text-color, white);
  font-weight: 600;
  font-size: 14px;
  margin: 0 12px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease-in-out;
  flex: 1;
  text-align: center;
}

.expandable-fab:hover .fab-text {
  opacity: 1;
  transform: translateX(0);
}

/* Responsive para móviles */
@media (max-width: 768px) {
  /* On small screens keep left and right FABs on their respective sides
     and avoid collapsing all positions into bottom-right which causes overlap */
  .fab-right {
    bottom: 16px;
    right: 16px;
    top: auto;
    left: auto;
    transform: none;
  }

  .fab-left {
    bottom: 16px;
    left: 16px;
    top: auto;
    right: auto;
    transform: none;
  }

  /* Centered positions remain centered but move slightly up to avoid bottom FABs */
  .fab-up {
    top: 56px;
    left: 50%;
    transform: translateX(-50%);
  }

  .fab-down {
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  .fab-right-up {
    top: 56px;
    right: 16px;
  }

  .fab-right-down {
    bottom: 16px;
    right: 16px;
  }

  .fab-left-up {
    top: 56px;
    left: 16px;
  }

  .fab-left-down {
    bottom: 16px;
    left: 16px;
  }

  .expandable-fab:hover {
    width: 180px;
  }

  .fab-text {
    font-size: 13px;
  }
}
</style>
