<template>
  <q-page-container class="page-container" id="home">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-grid">
        <div class="hero-image">
          <img src="../assets/logoSinFondo.png" alt="Yes YouCan Logo" class="hero-logo" />
        </div>
        <div class="hero-content">
          <h1 class="hero-title">¿Listo para entender a tu perro?</h1>
          <p class="hero-desc">
            Yes YouCan, un método simple que te conecta con tu perro y convierte la obediencia en
            amistad
          </p>
          <q-btn class="hero-btn" :label="t('content.btn')" @click="$router.push('/method')" />
        </div>
        <div class="hero-image">
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
      <h2 class="section-title">{{ t('header.our_work') }}</h2>
      <div class="work-grid">
        <CardComponent
          title="Explorador"
          subTitle="Seguridad y confianza"
          type="explorer"
          img="/images/home/explorador.png"
          description='"El inicio de la aventura". Tu perro empieza a descubrir el mundo contigo. En este nivel se trabajan las bases: obediencia básica, normas de convivencia y primeras órdenes esenciales (sentarse, caminar con correa sin tirar). Ideal para cachorros o perros que nunca han tenido entrenamiento formal. Beneficio clave: construir confianza y comunicación desde cero.'
          @click="$router.push('/explorer')"
        />
        <CardComponent
          title="Compañero"
          subTitle="Cooperación y convivencia."
          img="/images/home/compañero.png"
          type="companion"
          description="El vínculo que se fortalece. Tu perro ya no solo obedece, ahora entiende y coopera contigo. En este nivel se desarrollan habilidades intermedias como control en ambientes con distracciones, ejercicios de autocontrol, socialización avanzada y obediencia en distintos contextos. Beneficio clave: tener un perro confiable en la vida diaria, que comparte y respeta tu ritmo."
        />
        <CardComponent
          title="Maestro"
          subTitle="Excelencia y libertad con control."
          img="/images/home/maestro.png"
          type="master"
          description="De compañero fiel a compañero excepcional. Aquí tu perro alcanza su máximo potencial. Se entrenan habilidades avanzadas: obediencia sin correa, comandos complejos, trucos especiales, respuesta en situaciones difíciles y refuerzo del vínculo para una conexión total. Beneficio clave: vivir con un compañero canino equilibrado, obediente y listo para cualquier reto."
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
            name="max"
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoaF0evBqNMTsHpbDkxa3lKfRTfODf2ngy53OWOWjU42Ycibo6sLU88Um6oxvqFZDFaaJPnZFoXtmWM4UCSptdE5HBqyWPR87EJpYpAa0D_oOczsTTXHSeXGU5QY89PkgNWw1Y_1BoK6arKsXfEgrPtwksPMkRiuo-anr7tVeMapWR3Rw5gQQiakWlUyUiFGWtluimCoO2lFl1GDaFaxBkL6F9LMUgOToaSwJvmqq5tDg-r_tL9DvUao8MQXBcSjVtqgI-VmrtmXE"
          >
            <div class="q-mt-md">
              <h3 class="success-title">La Transformación de Max</h3>
              <p class="success-desc">
                De agresivo a gentil: la historia de Max superando los desafíos de comportamiento.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="bella"
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpieVmGsrCDkLZKt8z8M1pdNyL5qFk8YHkIncGz5Y4Z_FPWpEXMrC5SV2_BalpsefR1q5iuqg6PCGTfPivdkU2IS3K_MyUs60UrjmXfcHsbCiJn8TGx6CL0SE248-tLMETfJYCxNAnnATDNlyDQ-OfjFrW8ZKz1PHw2kDuiXwXRxR7T-rsKB7_iCRM-631s5eCqIbqo-UiEQvu5zcJkKneneDYkIJtdFkjf0RNJy0vhG3-yrVnRJqzW6jGapbaSM8m_lWX-cIpsaQ"
          >
            <div class="q-mt-md">
              <h3 class="success-title">El Viaje de Bella</h3>
              <p class="success-desc">
                El viaje de Bella para convertirse en una compañera bien educada a través del
                entrenamiento de obediencia.
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="rocky"
            img-src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzXVYqtCoi3EFxg6OZF9zQE58u5N6HsgTI8-XHlIds71B_nPJzG5XBYFBtht7Z5MPOdtnxqzdngwOp1irzaaB3PzsSs5sSoD2izNKs79Lek0UJnKDZ6WojGy7rErjyQd_9pdScvmCVY1QDh3Xd15-JG5t40-dq40iIC7i98abxtD4H9BxE1HqOkZfpfQE6pLzW2zJ3xT1BiOe9ZsrBRuMcpsC3JNjCTkLjNj-JC_7fzDlufX55Hwp6LzcXEjGXzM8dWl8irWx2a94"
          >
            <div class="q-mt-md">
              <h3 class="success-title">El Progreso de Rocky</h3>
              <p class="success-desc">
                El exitoso desarrollo de Rocky de un cachorro juguetón a un adulto disciplinado.
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>
    <!-- Preguntas Frecuentes -->
    <section id="faq" class="faq-section">
      <h2 class="section-title">{{ t('header.faq') }}</h2>
      <div class="faq-list">
        <q-expansion-item label="¿Qué tipo de métodos de educación utilizan?">
          <div>
            La educación canina ha pasado del castigo físico al uso exclusivo de premios, dos
            extremos que no siempre funcionan. En Yes YouCan apostamos por un método equilibrado:
            refuerzos variados (voz, caricias, libertad), coherencia en la comunicación, constancia
            y un vínculo emocional sólido. Más que educar, se trata de convivir: enseñar con
            respeto, límites claros y afecto para lograr perros estables, confiados y felices.
          </div>
        </q-expansion-item>
        <q-expansion-item label="¿Cuánto dura cada sesión de educación?">
          <div>
            Nuestras sesiones de educación dura 60 minutos. Esto nos permite mantener al perro
            concentrado y comprometido sin agotarlo.
          </div>
        </q-expansion-item>
        <q-expansion-item label="¿Ofrecen adiestramiento en grupo o individual?">
          <div>
            El entrenamiento comienza de forma individual, adaptado al nivel y a las necesidades
            específicas de tu perro. Según su progreso y el tipo de comportamiento que trabajemos,
            se podrá dar el paso a sesiones grupales, siempre priorizando el bienestar y la
            efectividad del aprendizaje.
          </div>
        </q-expansion-item>
        <q-expansion-item label="¿Qué debo llevar a la sesión de adiestramiento?">
          <div>
            No necesitas ningún material específico para comenzar, solo predisposición, constancia y
            ganas de disfrutar el proceso junto a tu perro.
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
  telephone: '+34-XXX-XXX-XXX',
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
  color: var(--q-primary);
}
.centered-secondary {
  display: block;
  text-align: center;
  color: var(--q-secondary);
  width: 100%;
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

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-logo {
    max-width: 300px;
  }
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0px;
  color: var(--q-nameSecondary);
}
.hero-desc {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.hero-btn {
  font-weight: bold;
  font-size: 1.1rem;
  background: var(--q-backgroundHeader);
  color: var(--q-white);
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
@media (min-width: 768px) {
  .success-grid {
    grid-template-columns: repeat(3, 1fr);
  }
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
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .work-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.page-container {
  padding: 0px;
}
</style>
