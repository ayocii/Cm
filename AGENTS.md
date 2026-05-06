# AGENTS.md — Călărași Marina

Website e-commerce pentru o companie de produse nautice din Călărași, România. Vinde bărci, motoare nautice și jet-ski cu checkout Stripe și filtrare pe categorii.

## Stack tehnologic

| Strat | Tehnologie |
|-------|------------|
| Framework | TanStack Start (SSR + file-based routing) |
| Frontend | React 19 |
| Router | TanStack Router v1 |
| Build | Vite 7 |
| Stilizare | Tailwind CSS 4 + CSS custom properties |
| Plăți | Stripe Checkout via server functions |
| Limbaj | TypeScript strict mode |
| Deploy | Netlify |

## Structura directoarelor

```
src/
├── components/
│   └── BuyButton.tsx          # Buton comandă cu integrare Stripe (text în română)
├── data/
│   └── products.ts            # Catalogul de produse (tipuri + date, 10 produse)
├── lib/
│   └── stripe.ts              # Server functions pentru Stripe checkout
├── routes/
│   ├── __root.tsx             # Layout global: Header + Footer + metadata RO
│   ├── index.tsx              # Hero, categorii, grid produse, filtrare URL params
│   ├── products/
│   │   └── $productId.tsx     # Detaliu produs + tabel specificații tehnice
│   └── checkout/
│       ├── success.tsx        # Pagina de confirmare (în română)
│       └── cancel.tsx         # Pagina de anulare (în română)
├── router.tsx                 # Configurare TanStack Router
└── styles.css                 # Tailwind + CSS custom properties navy/gold/sea
```

## Tipul Product

Definit în `src/data/products.ts`:

```ts
interface ProductSpec { label: string; value: string }
interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: 'barci' | 'motoare' | 'jetski'
  categoryLabel: string
  specifications: ProductSpec[]  // tabel specificații tehnice pe pagina de produs
}
```

## Identitate vizuală

- **Culori principale**: `--navy: #0a2342`, `--gold: #c8a84b`, `--sea: #1e6fa5`
- **Logo**: URL extern `https://i.ibb.co/5h5fVJZH/1000053855-removebg-preview.png`
- **Slogan**: "Navigăm împreună spre excelență!"
- **Limbă**: Română (lang="ro", toate textele în română)
- Culorile de brand sunt aplicate via inline `style={{}}`, nu prin clase Tailwind

## Convenții de cod

- PascalCase pentru componente, camelCase pentru utilitare
- Import paths cu `@/` alias pentru `src/`
- Prețuri afișate în EUR cu format românesc: `toLocaleString('ro-RO')`
- Header și Footer sunt definite direct în `__root.tsx` (nu fișiere separate)

## Date de contact

Hardcodate în `__root.tsx` (Header + Footer):
- Adresă: 1 Decembrie 1918, Nr. 88, Călărași
- Telefon: 0771 522 458
- Email: marinacalarasinfo@gmail.com
- Program: L-V 08:00-16:00, S 08:00-14:00, D închis
- Fax: +02140213216547
- Cod CAEN: 4764

## Filtrare produse

Pagina principală folosește URL search params (`?category=barci|motoare|jetski`) validate cu Zod prin `validateSearch` al TanStack Router. Fără parametru = toate produsele.

## Checkout Stripe

Inițiat din `BuyButton.tsx` via server function `createCheckoutSession` din `src/lib/stripe.ts`. Dacă `STRIPE_SECRET_KEY` nu e setat, butonul afișează stare dezactivată cu text românesc.

## Variabile de mediu

```
STRIPE_SECRET_KEY=...  # Necesar pentru checkout online
```
