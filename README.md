# Product Catalog with Cart

This is a small Next.js application for the SDET coding assignment. It fetches products from the DummyJSON Products API, shows a product list and detail pages, and keeps a cart count persistent across navigation and page reloads.

## Tech Stack

- Next.js
- React
- JavaScript
- Jest

## Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Test

```bash
npm test
```

## Build

```bash
npm run build
npm start
```

## Approach

The project uses the Next.js App Router. Server components fetch product data through a small API layer in `lib/api.js`, which centralizes error handling for failed requests and malformed responses. Cart state is managed in a client-side React context and persisted to `localStorage`, while the reusable cart operations live in `lib/cart.js` so they can be unit tested without rendering the UI.

Generated code blocks were created with AI assistance and reviewed as part of this implementation.
