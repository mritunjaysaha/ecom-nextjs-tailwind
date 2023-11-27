This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

```
└── 📁src
    └── 📁app
        └── 📁cart
            └── page.tsx
        └── dummyData.json
        └── favicon.ico
        └── globals.css
        └── page.tsx
        └── 📁product
            └── 📁[slug]
                └── page.tsx
    └── 📁components
        └── 📁Button
            └── Button.tsx
        └── 📁CartItems
            └── CartItems.tsx
        └── 📁InputField
            └── InputField.tsx
        └── 📁Navbar
            └── Navbar.tsx
        └── 📁PaymentDetails
            └── PaymentDetails.tsx
        └── 📁ProductItem
            └── ProductItem.tsx
    └── 📁constants
        └── routes.ts
    └── 📁GlobalRedux
        └── 📁feature
            └── 📁cart
                └── cartSlice.ts
            └── 📁products
                └── productSlice.ts
        └── hooks.ts
        └── Provider.tsx
        └── store.ts
    └── 📁hooks
        └── useUpdateItemQuantity.ts
    └── 📁types
        └── product.ts
```
