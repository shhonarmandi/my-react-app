# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Visit the online [demo](https://my-react-app.shhonarmandi.workers.dev/) powered by the [Cloudflare pages](https://pages.cloudflare.com/).

## To run the application

### 1. In production mode

#### Requirements:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

1. Using this command to run the app:

```
docker-compose up -d
```

2. then visit http://localhost:8080.

This command will run a Nginx server that listens to the 8080 port continuously.

---

### 2. In development mode

#### Requirements:

- [Node.js](https://nodejs.org/en/download) v24 or higher
- [pnpm](https://pnpm.io/installation) v10.28.1

---

1. Fist step is to install the dependencies via the following command:

```
pnpm install
```

2. And then:

```
pnpm run dev
```

3. then visit http://localhost:3000.

Please refer to package.json file for more available scripts.

## Test Coverage

<!-- COVERAGE-START -->
| Metric | Coverage |
|--------|----------|
| Statements | ![100.0%](https://img.shields.io/badge/100.0%25-brightgreen) `175/175` |
| Branches | ![100.0%](https://img.shields.io/badge/100.0%25-brightgreen) `36/36` |
| Functions | ![100.0%](https://img.shields.io/badge/100.0%25-brightgreen) `75/75` |
| Lines | ![100.0%](https://img.shields.io/badge/100.0%25-brightgreen) `174/174` |
<!-- COVERAGE-END -->
