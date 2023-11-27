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

## Project Architecture

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
        └── checkoutForm.ts
        └── product.ts
```

This project is set up using **create-next-app** and using **Next.js** app directory. The app directory consists of all the **pages** in the application.

The **components** directory consists of all the reusable components.

The **constants** directory consists of the routes constant values.

The **GlobalRedux** directory consists of the **cart** and **product** slices. It consists the custom hooks for using **redux** with **TypeScript**. **Provider.tsx** is component that consists the boilerplate code for assigning the store to the redux **Provider**. The **store.ts** file consists of the **product and cart reducers**.

The **hooks** directory consists of the reusable custom hooks in the application. The **useUpdateItemQuantity** hook is used for updating the values of items in the **cart**.

The **types** directory consists the types that are required by more than one file.
