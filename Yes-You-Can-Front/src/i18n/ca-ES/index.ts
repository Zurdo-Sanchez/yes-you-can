// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Acció fallida',
  success: "L'acció s'ha realitzat amb èxit",
  common: {
    boolean: {
      yes: 'Sí',
      no: 'No',
    },
  },
  layout: {
    header: {
      menu: 'Menú',
      title: 'Aplicació Quasar',
      version: 'Quasar v{version}',
    },
    drawer: {
      essentialLinks: 'Enllaços essencials',
    },
    links: {
      docs: {
        title: 'Documentació',
        caption: 'quasar.dev',
      },
      github: {
        title: 'GitHub',
        caption: 'github.com/quasarframework',
      },
      discord: {
        title: 'Canal de xat a Discord',
        caption: 'chat.quasar.dev',
      },
      forum: {
        title: 'Fòrum',
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
        caption: 'Projectes de la comunitat Quasar',
      },
    },
  },
  components: {
    example: {
      todoCount: 'Elements: {done} / {total}',
      active: 'Actiu: {status}',
      clickCount: 'Clics a les tasques: {count}',
    },
  },
  pages: {
    index: {
      example: {
        title: "Component d'exemple",
      },
      todos: {
        first: 'Millora les teves habilitats amb Quasar',
        second: 'Explora les funcions de Vue 3',
        third: 'Comença a construir la teva aplicació',
        fourth: "Comparteix el progrés amb l'equip",
        fifth: "Publica i celebra l'èxit",
      },
    },
    error: {
      description: 'Vaja. Aquí no hi ha res...',
      goHome: "Torna a l'inici",
    },
  },
};
