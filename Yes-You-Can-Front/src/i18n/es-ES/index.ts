// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Acción fallida',
  success: 'La acción se realizó con éxito',
  common: {
    boolean: {
      yes: 'Sí',
      no: 'No',
    },
  },
  layout: {
    header: {
      menu: 'Menú',
      title: 'Aplicación Quasar',
      version: 'Quasar v{version}',
    },
    drawer: {
      essentialLinks: 'Enlaces esenciales',
    },
    links: {
      docs: {
        title: 'Documentación',
        caption: 'quasar.dev',
      },
      github: {
        title: 'GitHub',
        caption: 'github.com/quasarframework',
      },
      discord: {
        title: 'Canal de chat en Discord',
        caption: 'chat.quasar.dev',
      },
      forum: {
        title: 'Foro',
        caption: 'forum.quasar.dev',
      },
      twitter: {
        title: 'Twitter',
        caption: '@quasarframework',
      },
      facebook: {
        title: 'Facebook',
        caption: '@QuasarFramework',
      },
      awesome: {
        title: 'Quasar Awesome',
        caption: 'Proyectos de la comunidad de Quasar',
      },
    },
  },
  components: {
    example: {
      todoCount: 'Elementos: {done} / {total}',
      active: 'Activo: {status}',
      clickCount: 'Clics en tareas: {count}',
    },
  },
  pages: {
    index: {
      example: {
        title: 'Componente de ejemplo',
      },
      todos: {
        first: 'Mejora tus habilidades con Quasar',
        second: 'Explora las funciones de Vue 3',
        third: 'Comienza a construir tu aplicación',
        fourth: 'Comparte el progreso con el equipo',
        fifth: 'Implementa y celebra el éxito',
      },
    },
    error: {
      description: 'Ups. Nada por aquí...',
      goHome: 'Volver al inicio',
    },
  },
};
