# Călărași Marina

Website e-commerce pentru Călărași Marina, o companie specializată în vânzarea de bărci, motoare nautice și jet-ski din Călărași, România.

## Despre proiect

Aplicația prezintă catalogul de produse nautice al companiei Călărași Marina, permițând clienților să exploreze bărci, motoare și jet-ski, să vadă specificații tehnice detaliate și să plaseze comenzi online prin Stripe.

## Tehnologii

| Strat | Tehnologie |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Stilizare | Tailwind CSS 4 |
| Plăți | Stripe Checkout |
| Limbaj | TypeScript 5.7 (strict mode) |
| Deploy | Netlify |

## Rulare locală

```bash
# Instalare dependențe
npm install

# Server de dezvoltare
npm run dev

# Build pentru producție
npm run build
```

Serverul de dev rulează pe `http://localhost:3000` (sau port 8888 cu Netlify CLI).

## Variabile de mediu

```
STRIPE_SECRET_KEY=...  # Necesar pentru checkout
```

## Structura principală

- `src/data/products.ts` — Catalogul de produse cu specificații tehnice
- `src/routes/index.tsx` — Pagina principală cu hero, categorii și grila de produse
- `src/routes/products/$productId.tsx` — Pagina de detaliu produs cu specificații
- `src/routes/__root.tsx` — Layout global cu header, footer și informații de contact
