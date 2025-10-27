## Getting started

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

This will output the site to the `dist` directory and let you preview the production build locally.

## Docker

Build the production image (bundled static files served by nginx):

```bash
docker build -t xitaorz-site .
```

Run the container and expose the site on port 6050:

```bash
docker run --rm -p 6050:80 xitaorz-site
```

Visit `http://localhost:6050` to view the deployed build.

Or, use Docker Compose:

```bash
docker compose up --build
```

This will build the image (if needed) and start the container named `xitaorz-site` on port 6050. Stop it with `docker compose down`.
