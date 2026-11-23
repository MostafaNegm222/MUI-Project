# MUI Store

A small React product-catalogue front end built with Material UI. It lists products from the public [DummyJSON](https://dummyjson.com) API, with search, category filter and sorting, plus a login form and a custom MUI theme. It is a practice project and some pages are unfinished.

## What works

- **Home, About and Products pages** with a shared layout (navbar with a user menu, footer) using React Router.
- **Products page:** product cards from `https://dummyjson.com/products`, live search by title, category filter and sort (title, price, rating, discount, stock) in ascending or descending order. The filter and sort panels open from an "Advanced Search" drawer.
- **Login page:** React Hook Form with a Yup schema (username 3 to 20 characters, password at least 6). It posts to `https://dummyjson.com/auth/login` and shows the server error message when the credentials are wrong.
- **Custom MUI theme** (palette, typography, component overrides) under `src/theme/`. The mode is read from `localStorage` (`theme`, default `light`).

## Not finished

- The product details page (`/products/:id`) is a placeholder.
- Login does not store the token or redirect after success. The response is only logged to the console.
- There is no theme toggle button yet, and no tests.

## Tech stack

React 19, Vite, Material UI 7 (with Emotion), React Router 7, Axios, React Hook Form, Yup

## Run it locally

```bash
npm install
npm run dev
```

Then open the address Vite prints. Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

The login form works with DummyJSON's demo users (see the DummyJSON docs for credentials). An internet connection is needed because all data comes from the DummyJSON API.
