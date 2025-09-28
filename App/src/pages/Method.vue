<template>
  <div class="title-section">
    <h1 style="color: var(--q-title)">{{ t('content.btn') }}</h1>
    <div class="content">
      <div>
        <img class="profile-img" src="../assets/yesyoucan-gordo.png" alt="" />
      </div>
      <div>
        <div>Educación canina: del palo al premio</div>
        <p>
          Hace no tanto tiempo, la educación canina se parecía más a un entrenamiento militar que a
          una convivencia entre especies. El perro aprendía a base de órdenes tajantes y, en muchos
          casos, castigos físicos. La lógica era simple (y equivocada): si obedeces, todo bien; si
          no, la mano dura te hará aprender. Cuarenta años después, el péndulo se ha movido al otro
          extremo. Hoy encontramos un enfoque casi opuesto: el adiestramiento basado en premios de
          comida. Trozos de frankfurt, pollo o galletas se convierten en la herramienta principal
          para enseñar a un perro a sentarse, tumbarse o acudir a la llamada. Ambos métodos
          representan extremos. Y como suele pasar en la vida, los extremos rara vez son la mejor
          respuesta. El problema del castigo No hace falta insistir demasiado en que la violencia no
          tiene lugar en la educación canina. Genera miedo, estrés y desconfianza en el perro. A
          largo plazo, incluso puede provocar conductas agresivas o de evitación. Además, rompe el
          vínculo que debería unirnos a nuestro mejor amigo de cuatro patas. La educación debería
          basarse en confianza, respeto y coherencia. Y el castigo físico o emocional nunca
          construye nada de eso. El límite de los premios Ahora bien, ¿funciona el refuerzo positivo
          con comida? Sí, en muchos casos. Un perro motivado por la comida puede aprender de manera
          rápida y divertida. Pero... ¿y si tu perro no es de esos que venderían su alma por una
          salchicha? ¿Qué pasa cuando hay distracciones más atractivas que un trozo de frankfurt?
          Aquí es donde el método “solo comida” empieza a quedarse corto. Convertir el entrenamiento
          en un intercambio perpetuo de “haz esto y te doy aquello” puede terminar en un soborno,
          más que en una verdadera educación. El camino del equilibrio En Yes YouCan, estamos
          convencidos de que la clave está en el término medio. Nuestra experiencia, junto con más
          de 40 años de trayectoria de Ken Sewell, nos ha enseñado que ni la dureza ni la fe ciega
          en el premio resuelven por sí solas el reto de educar a un perro. Lo que proponemos es un
          sistema equilibrado que combina: • Refuerzos positivos variados: no todo es comida; la
          voz, el juego, la caricia o la libertad también son recompensas. • Coherencia en la
          comunicación: el perro necesita entender qué esperamos de él y que seamos consistentes en
          nuestro lenguaje corporal, tono y reglas. • Cosntancia: educar con constancia es sembrar
          hoy el comportamiento que disfrutaremos mañana y siempre. • Vínculo emocional: el perro
          aprende mejor cuando siente que su guía es alguien en quien confiar, no solo un repartidor
          de salchichas. Más que adiestramiento, convivencia Al final, educar a un perro no debería
          ser visto como “domar” o “adiestrar”, sino como aprender a convivir. Significa enseñarle a
          interpretar nuestro mundo humano de la forma más amable posible, y al mismo tiempo
          respetar su naturaleza perruna. Ese equilibrio, entre límites claros y refuerzos
          positivos, es lo que permite construir un perro estable, confiado y feliz... y una
          relación de complicidad que dura toda la vida. En Yes YouCan, creemos que educar a un
          perro es también educarnos a nosotros mismos: aprender a comunicarnos, a ser pacientes y a
          liderar con cariño y coherencia. Ni palo, ni solo premio. El verdadero camino está en el
          equilibrio.
        </p>
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
  gap: 2rem;
}
.profile-img {
  width: 30%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--q-text);
}
</style>
