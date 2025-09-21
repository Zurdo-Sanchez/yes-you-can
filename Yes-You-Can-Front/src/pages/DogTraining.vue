<template>
  <q-page-container>
  <!-- Hero Section -->
  <section id="home" class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title">Transformando el Comportamiento Canino</h1>
        <p class="hero-desc">
          Servicios expertos de adiestramiento canino adaptados a las necesidades de tu mascota. Nos
          especializamos en modificación de conducta, entrenamiento de obediencia y desarrollo de
          cachorros.
        </p>
        <q-btn class="hero-btn" :label="t('content.start')" />
      </div>
    </section>
  <!-- Nuestro Trabajo -->
  <section id="work" class="work-section">
      <h2 class="section-title">{{ t('header.our_work') }}</h2>
      <div class="work-grid">
        <CardComponent
          title="Modificación de Conducta"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuApsJKoPhQACDnJtaz3fETpFuHHNSYR3rk9eISgjxwuli9J4G-a7ovnllZrlYowTRIwom8f6tAYnJIVmCfRzugMQ7Aa_NqO8sDhh4JdxK5L7XhbCvJ1iEyc_MjmHWnqCurH4AUcLdWa9h5-zXOK3OFR5f5tEgogWUFL-isSIYRSCTt6KINCKTn-JA8Hbwzqv3XWMo9y4JaR7-aeQk9dNintMgspE8hmXYhsM21dApf-F6SOR9Qp1gAdePYWIfqbCtfxegki5oSzL00"
          description="Abordamos problemas de comportamiento como agresividad, ansiedad y ladridos excesivos."
        />
        <CardComponent
          title="Entrenamiento de Obediencia"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAL0m_x3zK5xO44B6Uz-rmcjTpuxBN2WDPMHaaU66zleiY2kob2D9XYKVWNHRRIAIWhh_A7zflgMVX_hRXizf-P5JxPjzqXds_G1HZBFA7huqOIaWFTnOEreT87ovA1VaTeLEOtP_qRirroLlgkEtp5KkOHhMFSEWZQpx0PQ0Bgk5VMFCI-8bVANpiahOsTRICoOta4D-zN7fPJhUoGvFPFioJH9dpJzkkE8SnbtVzoJgtcmDV-rm6W8AyaZgbNxfSOenCFccRyRWU"
          description="Enseñamos comandos básicos y mejoramos la obediencia general." 
        />
        <CardComponent
          title="Desarrollo de Cachorros"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuB6P_47MPV52ZQrMr6kFBaPj9h8Fy1gd48pfYlTObLd0UuI7CDK2jyQ7fbmF19s5jy5xreqeSJEX-_TOUAtUQ47T81ZSfflgeoTULTzqFyc6WGCUxv3jSaNSPKmYlHFFYAaja6EgEwpPMYuxdDTeuTptfo9422fX9O1InCNR8JQz9x4Et3YtbbnTsmj9AIK2HanFREB91tQR-2NGP-nEaAMkp8h-H7vo2QsbE-EXLndo4BqpvmO6PGzQuc0pFso2mMxR9cu9yYqjDI"
          description="Socialización temprana y entrenamiento para cachorros para asegurar un perro adulto bien adaptado."
        />
      </div>
    </section>
  <!-- Casos de Éxito -->
  <section id="success" class="success-section">
      <h2 class="section-title">{{ t('header.success_cases') }}</h2>
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
        <q-expansion-item label="¿Qué tipo de métodos de adiestramiento utilizan?">
          <div>
            Utilizamos métodos de refuerzo positivo, centrándonos en recompensar los buenos
            comportamientos en lugar de castigar los malos. Creemos que este enfoque construye un
            vínculo fuerte y de confianza entre usted y su perro.
          </div>
        </q-expansion-item>
        <q-expansion-item label="¿Cuánto dura cada sesión de adiestramiento?">
          <div>
            Nuestras sesiones de adiestramiento suelen durar entre 45 y 60 minutos. Esto nos permite
            mantener al perro concentrado y comprometido sin agotarlo.
          </div>
        </q-expansion-item>
        <q-expansion-item label="¿Ofrecen adiestramiento en grupo o individual?">
          <div>
            Ofrecemos ambas opciones. Las clases en grupo son excelentes para la socialización,
            mientras que las sesiones individuales proporcionan una atención personalizada para
            abordar problemas de comportamiento específicos.
          </div>
        </q-expansion-item>
        <q-expansion-item label="¿Qué debo llevar a la sesión de adiestramiento?">
          <div>
            Debe traer a su perro con correa, sus premios favoritos y cualquier juguete que le
            motive. También es útil traer agua para su perro.
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
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ken66f0FdZpFkaPsXCJ78HSoickxzM4_qsvXrwIF8L3QySqXEESdorydEvJ46wrsyJk9uA2qR1UJkHRD2s727aWu3nQ3qHe0obFBzfZgMYGThTdNXJrAkFkbnqJpvfNJ_wHJQKmwPIiM3Poiiot7H_QdfUt6bmFkK4J-MW7g4DfFUP8a-ezQqUlGxToA8HRP6b5Q7VK5Khf0z1t_Ixo7AmujEjpUvWZdogZnBfcelSICrlA5lJ2oeXJP8V962MPL_uVcdL4p7bc');
  background-size: cover;
  background-position: center;
  color: #fff;
}
.hero-content {
  text-align: center;
  z-index: 1;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
}
.hero-desc {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.hero-btn {
  font-weight: bold;
  font-size: 1.1rem;
  background: var(--q-backgroundOrange80);
}
.work-section {
  padding: 3rem 0 2rem 0;
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
</style>
