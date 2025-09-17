// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  common: {
    boolean: {
      yes: 'Yes',
      no: 'No',
    },
  },
  layout: {
    header: {
      menu: 'Menu',
      title: 'Quasar App',
      version: 'Quasar v{version}',
    },
    drawer: {
      essentialLinks: 'Essential Links',
    },
    links: {
      docs: {
        title: 'Docs',
        caption: 'quasar.dev',
      },
      github: {
        title: 'GitHub',
        caption: 'github.com/quasarframework',
      },
      discord: {
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
      },
      forum: {
        title: 'Forum',
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
        caption: 'Community Quasar projects',
      },
    },
  },
  components: {
    example: {
      todoCount: 'Count: {done} / {total}',
      active: 'Active: {status}',
      clickCount: 'Clicks on todos: {count}',
    },
  },
  pages: {
    index: {
      example: {
        title: 'Example component',
      },
      todos: {
        first: 'Improve your Quasar skills',
        second: 'Explore Vue 3 features',
        third: 'Start building your app',
        fourth: 'Share progress with the team',
        fifth: 'Deploy and celebrate success',
      },
    },
    error: {
      description: 'Oops. Nothing here...',
      goHome: 'Go Home',
    },
  },
};
