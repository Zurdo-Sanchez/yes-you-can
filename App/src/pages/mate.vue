<template>
  <div class="explorer-page">
    <span class="level-badge">Nivel Intermedio</span>
    <div class="page-header">
      <h1 class="main-title">Compañero</h1>
    </div>
    <h1 class="subtitle">Soluciones reales para mejorar su conducta y tu tranquilidad</h1>
    <p class="description">
      El Nivel Compañero está diseñado para quienes ya han dado los primeros pasos en educación
      canina y ahora buscan resolver problemas de conducta concretos que afectan el bienestar del
      perro y la calidad de vida en común.
    </p>
    <p class="description">
      Aquí encontrarás programas personalizados que abordan situaciones reales del día a día —como
      la ansiedad por separación, los miedos, la socialización o los viajes— con técnicas prácticas,
      amables y efectivas. feliz con tu perro. En esta etapa, abordamos las necesidades básicas de
      educación canina, tanto dentro del hogar como en los espacios públicos, a través de dos
      programas complementarios y divertidos que fortalecen el vínculo entre humanos y perros.
    </p>
    <CardHorizontalComponent
      title="Stay at Home"
      subTitle="Ansiedad por separación, ¡fuera estrés!"
      img="/images/home/explorador-N1.png"
      type="Nivel 1"
      description="Tu perro puede aprender a estar tranquilo cuando tú no estás en casa.
Con este programa, trabajamos paso a paso para que aprenda a quedarse solo sin angustia, ladridos ni destrozos. Tú recuperas tu libertad, y él su calma."
      imagePosition="left"
    />
    <CardHorizontalComponent
      title="¿Vamos de Bares?"
      subTitle="El perro sociable que te acompaña a todas partes"
      img="/images/home/compañero-bares.png"
      type="Nivel 2"
      description="¿Sueñas con llevar a tu perro a una terraza o a casa de amigos sin que se altere?
En este programa enseñamos a tu perro a relajarse en entornos sociales, rodeado de personas, ruido y otros estímulos. ¡Perfecto para perros y familias con una agenda llena de aventuras! "
      imagePosition="right"
    />
    <CardHorizontalComponent
      title="¡Uy… qué miedo!"
      subTitle="Ayudamos a tu perro a superar sus temores"
      img="/images/home/explorador-N1.png"
      type="Nivel 3"
      description="¿Le cuesta salir a la calle, acercarse a personas o se asusta con ruidos fuertes?
Trabajamos con delicadeza y paciencia para que gane seguridad y confianza en sí mismo. Cada pequeño avance es un gran paso hacia una vida más feliz."
      imagePosition="left"
    />
    <CardHorizontalComponent
      title="Dogtor"
      subTitle="Visitas al veterinario sin dramas"
      img="/images/home/compañero-bares.png"
      type="Nivel 4"
      description="Convertimos el miedo al veterinario en una experiencia mucho más calmada y positiva.
Tu perro aprenderá a manejar mejor la manipulación, el entorno clínico y las rutinas médicas, lo que hace que cada visita sea menos estresante para él... y para ti."
      imagePosition="right"
    />
    <CardHorizontalComponent
      title="¡Sube al Coche!"
      subTitle="Viajes tranquilos, seguros y sin ansiedad"
      img="/images/home/compañero-coche.png"
      type="Nivel 5"
      description="Si tu perro odia el coche, llora o se agita al viajar, este programa es para ti.
Te enseñamos cómo preparar al perro para que los trayectos sean agradables, seguros y sin sobresaltos, ya sea para una escapada o para ir al parque."
      imagePosition="left"
    />

    <div class="programs-info">
      <h3 class="info-title">¿Qué tienen en común todos estos programas?</h3>
      <div class="benefits-list">
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />
          <span>Soluciones prácticas para problemas reales</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Métodos respetuosos y basados en el bienestar del perro</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Acompañamiento profesional adaptado a cada caso</span>
        </div>
        <div class="benefit-item">
          <q-icon class="check-icon" :name="'done_all'" />

          <span>Más tranquilidad para ti, más seguridad para tu perro</span>
        </div>
      </div>
    </div>
    <div class="final-message">
      <p>
        Perfecto para fortalecer el vínculo con tu perro logrando un compañero confiable,
        equilibrado y capaz de cooperar contigo en cualquier contexto de la vida diaria. Tú conoces
        a tu perro. Nosotros te damos las herramientas para entenderlo, ayudarlo y avanzar juntos.
      </p>
    </div>

    <!-- FAB expandible para ir a Compañero -->
    <FloatArrow
      text="Nivel Anterior"
      icon="keyboard_double_arrow_left"
      position="left"
      to="/explorer"
    />
    <FloatArrow
      text="Nivel Siguiente"
      icon="keyboard_double_arrow_right"
      position="right"
      to="/master"
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
