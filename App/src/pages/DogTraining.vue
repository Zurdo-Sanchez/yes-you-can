<template>
  <q-page-container class="page-container" id="home">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-grid">
        <div class="hero-image">
          <img src="../assets/logoSinFondo.png" alt="Yes YouCan Logo" class="hero-logo" />
        </div>
        <div class="hero-content">
          <h1 class="hero-title">{{ t('hero.title') }}</h1>
          <p class="hero-desc">
            {{ t('hero.matDescription') }}
          </p>
          <q-btn class="hero-btn" :label="t('content.btn')" @click="$router.push('/method')" />
        </div>
        <div class="hero-image hero-image-right">
          <img
            src="../assets/youcan caminando sin fondo.png"
            alt="Yes YouCan Logo"
            class="hero-logo"
          />
        </div>
      </div>
    </header>
    <!-- Nuestro Trabajo -->
    <section id="work" class="work-section">
      <q-btn
        class="hero-btn btn-who_am_i"
        :label="t('header.who_am_i')"
        @click="$router.push('/whoami')"
      />
      <h2 class="section-title">{{ t('header.our_work') }}</h2>
      <div class="work-grid">
        <CardComponent
          :title="t('programs.1.title')"
          :subTitle="t('programs.1.subtitle')"
          type="explorer"
          img="/images/home/explorador.png"
          :description="t('programs.1.description')"
          @click="$router.push('/explorer')"
        />
        <CardComponent
          :title="t('programs.2.title')"
          :subTitle="t('programs.2.subtitle')"
          img="/images/home/compañero.png"
          type="companion"
          :description="t('programs.2.description')"
          @click="$router.push('/mate')"
        />
        <CardComponent
          :title="t('programs.3.title')"
          :subTitle="t('programs.3.subtitle')"
          img="/images/home/maestro.png"
          type="master"
          :description="t('programs.3.description')"
          @click="$router.push('/master')"
        />
      </div>
    </section>
    <!-- Casos de Éxito -->
    <section id="success" class="success-section">
      <h2 class="section-title">{{ t('header.Transformation_Stories') }}</h2>
      <div class="q-pa-md flex flex-center">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          navigation
          arrows
          infinite
          :autoplay="autoplay ? 5000 : false"
          style="height: 520px; width: 95vw; min-width: 320px; margin: 0 auto"
          ref="carousel"
        >
          <template v-slot:control>
            <q-carousel-control
              position="top-right"
              :offset="[18, 18]"
              class="text-white rounded-borders"
              style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
            >
              <q-toggle dense dark color="primary" v-model="autoplay" label="Auto Play" />
            </q-carousel-control>
          </template>
          <q-carousel-slide
            name="maui"
            img-src="../assets/Maui-Juan-Xavi.jpeg"
            @click="$router.push('/histories')"
          >
            <div class="q-mt-md">
              <h3 class="success-title">Maui: la prueba de que nunca es tarde para cambiar</h3>
              <p class="success-desc">
                Maui es un bóxer de 7 años lleno de energía y entusiasmo. Desde cachorro, cada
                salida era una batalla.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="luna-y-kumo"
            img-src="../assets/Luna y Kumo.png"
            @click="$router.push('/histories')"
          >
            <div class="q-mt-md">
              <h3 class="success-title">Luna y Kumo: de tensiones en casa a paz compartida</h3>
              <p class="success-desc">
                Luna, una mestiza de 4 años, siempre fue la reina de la casa: cariñosa, juguetona y
                dueña de cada rincón. Kumo, un husky de 2 años, llegó con energía y curiosidad, pero
                pronto las cosas se tensaron.
              </p>
            </div>
          </q-carousel-slide>
          <!-- <q-carousel-slide
            name="rocky"
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzXVYqtCoi3EFxg6OZF9zQE58u5N6HsgTI8-XHlIds71B_nPJzG5XBYFBtht7Z5MPOdtnxqzdngwOp1irzaaB3PzsSs5sSoD2izNKs79Lek0UJnKDZ6WojGy7rErjyQd_9pdScvmCVY1QDh3Xd15-JG5t40-dq40iIC7i98abxtD4H9BxE1HqOkZfpfQE6pLzW2zJ3xT1BiOe9ZsrBRuMcpsC3JNjCTkLjNj-JC_7fzDlufX55Hwp6LzcXEjGXzM8dWl8irWx2a94"
          >
            <div class="q-mt-md">
              <h3 class="success-title">El Progreso de Rocky</h3>
              <p class="success-desc">
                El exitoso desarrollo de Rocky de un cachorro juguetón a un adulto disciplinado.
              </p>
            </div>
          </q-carousel-slide> -->
        </q-carousel>
      </div>
    </section>
    <!-- Preguntas Frecuentes -->
    <section id="faq" class="faq-section">
      <h2 class="section-title">{{ t('header.faq') }}</h2>
      <div class="faq-list">
        <q-expansion-item
          q-expansion-item
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px; margin-bottom: 1rem"
          icon="help_outline"
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
          :label="t('faq.1.question')"
        >
          <div class="faq-content">
            {{ t('faq.1.answer') }}
          </div>
        </q-expansion-item>
        <q-expansion-item
          q-expansion-item
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px; margin-bottom: 1rem"
          icon="help_outline"
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
          :label="t('faq.2.question')"
        >
          <div class="faq-content">
            {{ t('faq.2.answer') }}
          </div>
        </q-expansion-item>
        <q-expansion-item
          q-expansion-item
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px; margin-bottom: 1rem"
          icon="help_outline"
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
          :label="t('faq.3.question')"
        >
          <div class="faq-content">
            {{ t('faq.3.answer') }}
          </div>
        </q-expansion-item>
        <q-expansion-item
          q-expansion-item
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px; margin-bottom: 1rem"
          icon="help_outline"
          header-class="bg-primary text-white"
          expand-icon-class="text-white"
          :label="t('faq.4.question')"
        >
          <div class="faq-content">
            {{ t('faq.4.answer') }}
          </div>
        </q-expansion-item>
      </div>
    </section>
    <!-- Contacto -->
    <section id="contact">
      <ContactComponent />
    </section>
  </q-page-container>
</template>
<script lang="ts">
export default {
  name: 'DogTraining',
};
</script>
<script setup lang="ts">
import ContactComponent from '../components/ContactComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const route = useRoute();

const dogTrainingOgImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ken66f0FdZpFkaPsXCJ78HSoickxzM4_qsvXrwIF8L3QySqXEESdorydEvJ46wrsyJk9uA2qR1UJkHRD2s727aWu3nQ3qHe0obFBzfZgMYGThTdNXJrAkFkbnqJpvfNJ_wHJQKmwPIiM3Poiiot7H_QdfUt6bmFkK4J-MW7g4DfFUP8a-ezQqUlGxToA8HRPb5Q7VK5Khf0z1t_Ixo7AmujEjpUvWZdogZnBfcelSICrlA5lJ2oeXJP8V962MPL_uVcdL4p7bc';
const origin = typeof window !== 'undefined' ? window.location.origin : 'https://yesyoucan.dog';

const buildMeta = () => ({
  title: t('meta.dogTraining.title'),
  meta: {
    description: {
      name: 'description',
      content: t('meta.dogTraining.description'),
    },
    'og:title': {
      property: 'og:title',
      content: t('meta.dogTraining.ogTitle'),
    },
    'og:description': {
      property: 'og:description',
      content: t('meta.dogTraining.ogDescription'),
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
      content: dogTrainingOgImage,
    },
    'og:image:alt': {
      property: 'og:image:alt',
      content: t('meta.dogTraining.ogImageAlt'),
    },
  },
});

const metaState = ref(buildMeta());
useMeta(() => metaState.value);

// JSON-LD structured data para SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Yes YouCan - Adiestramiento Canino',
  description: 'Servicios profesionales de adiestramiento canino en Cataluña',
  url: 'https://yesyoucan.cat',
  telephone: '+34 676 456 725',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cataluña',
    addressCountry: 'ES',
  },
  founder: {
    '@type': 'Person',
    name: 'Xavi Burgos',
    jobTitle: 'Educador Canino Profesional',
  },
  serviceArea: 'Cataluña',
  services: [
    'Modificación de conducta canina',
    'Entrenamiento de obediencia',
    'Desarrollo de cachorros',
  ],
};

// Agregar JSON-LD al head
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

watch([locale, () => route.fullPath], () => {
  metaState.value = buildMeta();
});

const slide = ref(0);
const autoplay = ref(true);
</script>
<style scoped>
/* ...existing styles... */
.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--q-text);
}
.centered-secondary {
  display: block;
  text-align: center;
  color: var(--q-secondary);
  width: 100%;
}
.q-carousel {
  box-shadow: 0 2px 8px var(--q-primary);
}
.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-link:hover {
  color: var(--q-primary);
}
.icon-btn {
  margin-right: 0.5rem;
}
.login-btn {
  margin-right: 0.5rem;
  font-weight: bold;
}
.main-content {
  background: var(--q-background-light);
  gap: 2rem;
}
.hero-section {
  box-shadow: 0 2px 8px var(--q-primary);
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem 1rem 0 1rem;
  height: 32rem;
  height: auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: 400px auto 400px;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;
}

.hero-content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-logo {
  height: auto;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0px;
  color: var(--q-nameSecondary);
  line-height: 1.2;
}
.hero-desc {
  font-size: 1.2rem;
  margin: 2rem 0;
  text-align: center;
}
.hero-btn {
  font-weight: bold;
  font-size: 1.1rem;
  background: var(--q-backgroundHeader);
  color: var(--q-white);
}
.btn-who_am_i {
  display: none;
}
.work-section {
  padding: 3rem 0 2rem 0;
  display: grid;
  margin: 0 1rem;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.success-section {
  background: var(--q-white);
  padding: 3rem 0 2rem 0;
}
.success-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
.success-card {
  background: var(--q-white);
  border-radius: 1rem;
  box-shadow: 0 2px 8px var(--q-primary);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}
.success-img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
}
.success-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--q-white);
}
.success-desc {
  font-size: 0.95rem;
  color: var(--q-white);
}
.faq-section {
  padding: 3rem 0 2rem 0;
}
.faq-list {
  max-width: 700px;
  margin: 2rem auto 0 auto;
}
.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.page-container {
  padding: 0px;
}
.faq-content {
  padding: 1rem 2rem;
  font-size: 1rem;
  line-height: 1.3;
  text-align: justify;
}
@media (max-width: 900px) {
  .success-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 0;
    text-align: center;
  }
  .hero-logo {
    max-width: 300px;
  }
  .work-grid {
    grid-template-columns: 1fr;
  }
  .hero-image-right {
    display: none;
  }
}
@media (max-width: 768px) {
  .btn-who_am_i {
    display: flex;
  }
}
@media (min-width: 900px) and (max-width: 1345px) {
  .hero-image-right {
    display: none;
  }
  .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: center;
  }
}

/* Maui slide: force image focus on bottom */
.maui-slide-inner {
  position: relative;
}
.maui-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: bottom center !important;
  display: block;
  cursor: pointer;
}
.maui-caption {
  text-align: left;
  background: rgba(255, 255, 255, 0);
}
</style>
