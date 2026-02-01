# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Visit the online [demo](https://my-react-app-8ec.pages.dev/) powered by the [Cloudflare pages](https://pages.cloudflare.com/).

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

This command will run an Nginx server that listens to the 8080 port continuously.

---

---

### 2. In development mode

#### Requirements:

- [Nodejs](https://nodejs.org/en/download) v24 or higher
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
