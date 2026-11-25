# MUI Store

## 1. Description

A small React product-catalogue front end built with Material UI. It lists products from the public DummyJSON API, with search, category filter and sorting, plus a login form and a custom MUI theme. It is a practice project and some pages are unfinished.

## 2. Technologies and Versions

- React ^19.2.4, Vite ^8.0.1
- Material UI ^7.3.9 (@mui/material, @mui/icons-material) with @emotion/react ^11.14.0 and @emotion/styled ^11.14.1, @fontsource/roboto ^5.2.10
- React Router ^7.13.1
- Axios ^1.13.6
- React Hook Form ^7.71.2 with @hookform/resolvers ^5.2.2 and Yup ^1.7.1
- json-server ^1.0.0-beta.14 (available as a local mock API)
- ESLint ^9.39.4

## 3. Requirements and Dependencies

- Node.js installed
- An internet connection at runtime (all data comes from the DummyJSON API)
- Dependencies are installed with `npm install` (see `package.json`)

## 4. Installation and Run Steps

```bash
git clone https://github.com/MostafaNegm222/MUI-Project.git
cd MUI-Project
npm install
npm run dev
```

Then open the address Vite prints. Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## 5. Environment Variables

None required.

## 6. Usage and Main Features

- **Home, About and Products pages** with a shared layout (navbar with a user menu, footer) using React Router.
- **Products page:** product cards from `https://dummyjson.com/products`, live search by title, category filter and sort (title, price, rating, discount, stock) in ascending or descending order. The filter and sort panels open from an "Advanced Search" drawer.
- **Login page:** React Hook Form with a Yup schema (username 3-20 characters, password at least 6). It posts to `https://dummyjson.com/auth/login` and shows the server error message when credentials are wrong. Works with DummyJSON's demo users (see the DummyJSON docs for credentials).
- **Custom MUI theme** (palette, typography, component overrides) under `src/theme/`. The mode is read from `localStorage` (`theme`, default `light`).

Not finished: the product details page (`/products/:id`) is a placeholder; login does not store the token or redirect after success; there is no theme toggle button yet.

## 7. Screenshots / Demo

No live demo; the app runs locally on the Vite dev server.

## 8. Running Tests

No automated tests are configured.
