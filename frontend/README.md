# Frontend

https://www.figma.com/design/ODO9sFeZIaXdVBtPyuJpBF/Blue-Whale-Corp?node-id=0-1&t=wBmMCq9xmwP7Qdvo-1

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

### For free images

"https://picsum.photos/800/400?1",
"https://picsum.photos/800/400?2",
"https://picsum.photos/800/400?3",


## Directory structure

src/
├── app/
│   ├── routes/
│   ├── providers/
│   └── store/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   │   ├── auth.types.ts
│   │   │   └── auth.enums.ts
│   │   └── index.ts
│   │
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   │   ├── product.types.ts
│   │   │   └── product.enums.ts
│   │   └── index.ts
│   │
│   └── orders/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types/
│
├── commons/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   └── types/
│       ├── api.types.ts
│       ├── common.types.ts
│       └── pagination.types.ts
│
├── services/
│   └── api/
│
└── assets/

## Next steps

- [x] All pages wireframe - product details, user details, checkout cart, order history, order details, payment success/failure
- [x] Product Details Page
- [x] Add ~~recoil Zustand
- [x] Move code from home.tsx to a HomePage component
- [x] Track Order page styling
- [ ] Style: Marketplace page
- [ ] Test: Responsive web design
- [ ] Bug: Order history: selecting a filter button shifts the buttons a little to left.
- [ ] Refactor: in orders/ singleItem and single order line is confusing
- [x] order history page styling
- [ ] Refactor: to new directory structure
- [ ] is w- and h- responsive ?
- [x] A11y testing Automated - eslint plugin
- [ ] Test:A11y testing Automated - Playwright + axe-core
- [ ] Test: A11y testing Manual - Keyboard testing (do after major changes)
- [ ] Test: A11y testing Manual - Screen reader testing
- [x] Order History wireframe
- [x] Get order details using Zustand
- [ ] Bug: Marketplace Page Fix (what is the bug)
- [ ] Feat: Footer
- [ ] Feat: Customer support Page
- [ ] Feat: admin portal to enter data
- [x] run lint, prettier check on my code
- [x] Search nav bar - fix it at top like current navbar
- [x] Search nav bar - return results from picklist
- [ ] Feat: Search nav bar - remember user history in browser
- [ ] Refactor: Combine search nav bar and top nav bar 
- [ ] Brand icon click should take me to home page
- [ ] Marketplace icon click should take me to marketplace page
- [ ] Test: SEO - update meta tags (SEO has 2 parts - one is checking that meta/title tags is filled is just one part. Whether is keywork is valuable or not is different other part. DataForSEO and OpenSEO helps in that)
- [ ] Show full text on hover
- [ ] Setup CI using github actions
- [ ] setup unit tests for error handling scenarios (post adding states. States will probably added post basic backend)
- [ ] UI security testing
- [ ] Add telemetry
 

# Learning goals

- tailwind usefulness in stateful react app
- A11Ly
- Security

## Ideas

- Adding a advertisement banner in the middle of marketplace
- what goes in the description of meta tags - SEO related stuff ??
- Correct alt texts of image

## What is BlueWhale

Website for small e-commerce vendors usable in real world
