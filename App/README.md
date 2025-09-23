# Yes You Can (yes-you-can-front)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Despliegue en producción (Vue Router modo history)

El proyecto utiliza Vue Router en modo `history`, lo que requiere que el servidor devuelva `index.html`
para cualquier ruta que no exista como archivo físico. De lo contrario, la navegación directa a una
URL interna del SPA devolverá un 404.

- El contenedor definido en `docker-compose.yml` ejecuta `serve -s dist -l 3000`, que ya reescribe
  las rutas desconocidas hacia `index.html`, satisfaciendo este requisito.
- Si usas un proxy como Nginx, asegúrate de incluir una regla equivalente:

  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
