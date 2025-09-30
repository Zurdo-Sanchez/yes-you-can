<template>
  <div class="explorer-page">
    <span class="level-badge">Nivel Básico</span>
    <div class="page-header">
      <h1 class="main-title">Explorer</h1>
    </div>
    <h1 class="subtitle">Primer paso hacia una convivencia en armonía</h1>
    <p class="description">
      El nivel Explorador es el primer escalón en el camino hacia una convivencia equilibrada y
      feliz con tu perro. En esta etapa, abordamos las necesidades básicas de educación canina,
      tanto dentro del hogar como en los espacios públicos, a través de dos programas
      complementarios y divertidos que fortalecen el vínculo entre humanos y perros.
    </p>
    <CardHorizontalComponent
      title="Patas Afuera"
      subTitle="¡Disfruta los paseos sin tirones ni estrés!"
      img="/images/home/explorador-N1.png"
      type="Nivel 1"
      description="Este programa está enfocado en el comportamiento de tu perro fuera de casa. Aprenderás, de manera práctica, cómo lograr paseos tranquilos y agradables, enseñándole a tu perro a caminar a tu lado, sentarse en diferentes situaciones y mantener la calma en entornos variados.
Ideal para quienes quieren que su perro sea un compañero educado en la calle."
      imagePosition="left"
    />
    <CardHorizontalComponent
      title="Dog & Chill"
      subTitle="Armonía dentro del hogar, desde el cariño y la calma"
      img="/images/home/explorador-N2.png"
      type="Nivel 2"
      description="Diseñado para fortalecer la convivencia en casa, Dog & Chill enseña a tu perro a relajarse, respetar espacios y rutinas, y a responder de forma positiva a las reglas del hogar. Este programa promueve una relación basada en el respeto mutuo y la comunicación, ayudando a construir un ambiente tranquilo y equilibrado en el día a día."
      imagePosition="right"
    />

    <div class="programs-info">
      <h3 class="info-title">¿Qué tienen en común todos estos programas?</h3>
      <div class="benefits-list">
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />
          <span>Son el punto de partida ideal para cualquier tutor canino</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Refuerzan el vínculo entre tú y tu perro</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Utilizan técnicas prácticas y efectivas</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Te ayudan a mejorar la convivencia</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Son programas complementarios</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Están pensados para enseñar a ambos: humano y perro</span>
        </div>
      </div>
    </div>
    <div class="final-message">
      <p>
        Ambos programas del nivel Explorador están pensados para que tú y tu perro aprendáis juntos,
        paso a paso, creando las bases de una convivencia feliz tanto dentro como fuera de casa.
      </p>
    </div>

    <!-- FAB expandible para ir a Compañero -->
    <FloatArrow
      text="Nivel Siguiente"
      icon="keyboard_double_arrow_right"
      position="right"
      to="/mate"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ExplorerPage',
};
</script>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import CardHorizontalComponent from '../components/CardHorizontalComponent.vue';
import FloatArrow from '../components/FloatArrow.vue';

const { locale } = useI18n();
const route = useRoute();

const explorerOgImage = '/img/home/explorador.png';
const origin = typeof window !== 'undefined' ? window.location.origin : 'https://yesyoucan.dog';

const buildMeta = () => ({
  title: 'Explorer - Nivel Básico | Yes You Can',
  meta: {
    description: {
      name: 'description',
      content:
        'Curso Explorer de adiestramiento canino básico. Obediencia básica, normas de convivencia y primeras órdenes esenciales para cachorros.',
    },
    'og:title': {
      property: 'og:title',
      content: 'Explorer - Nivel Básico de Adiestramiento Canino',
    },
    'og:description': {
      property: 'og:description',
      content:
        'El inicio de la aventura. Curso básico de adiestramiento para cachorros y perros sin entrenamiento previo.',
    },
    'og:type': {
      property: 'og:type',
      content: 'website',
    },
    'og:url': {
      property: 'og:url',
      content: `${origin}${route.fullPath}`,
    },
    'og:image': {
      property: 'og:image',
      content: `${origin}${explorerOgImage}`,
    },
    'og:image:alt': {
      property: 'og:image:alt',
      content: 'Curso Explorer de adiestramiento canino básico',
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
.explorer-page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 24px;
  background: var(--q-background-light);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.level-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #4caf50;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
}

.page-header {
  text-align: center;
}

.main-title {
  font-size: 3rem;
  font-weight: bold;
  color: var(--q-primary);
  margin: 0;
  display: inline-block;
}

.content-layout {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 3rem;
  align-items: start;
}

.image-section {
  position: relative;
}

.course-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 3px solid #4caf50;
}

.description-section {
  padding: 1rem 0;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--q-primary);
  margin: 0;
  font-weight: 600;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.benefit-highlight {
  background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  margin-top: 2rem;
}

.benefit-highlight strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

/* Sección de información de programas */
.programs-info {
  max-width: 600px;
  padding: 0rem 2rem;
  background: var(--q-background-light);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--q-primary);
}

.info-title {
  font-size: 1.8rem;
  color: var(--q-title);
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}

.benefits-list {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: var(--q-text);
}

.check-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.final-message {
  background: var(--q-primary);
  color: var(--q-white);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.final-message p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
}

/* Responsive design */
@media (max-width: 768px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .level-badge {
    position: static;
    display: block;
    margin: 0.5rem auto 0;
    width: fit-content;
  }

  .explorer-page {
    margin: 20px;
    padding: 16px;
  }

  .programs-info {
    margin-top: 2rem;
    padding: 1rem;
  }

  .info-title {
    font-size: 1.5rem;
  }

  .benefit-item {
    font-size: 1rem;
  }
}
</style>
