# Migration Guide: React + Vite to Next.js

## Overview
This guide will help you migrate your Ekaant agro-tourism website from React + Vite to Next.js while preserving all functionality.

## Step 1: Create New Next.js Project

```bash
# Create new Next.js project
npx create-next-app@latest ekaant-nextjs --typescript --tailwind --eslint --app

# Or use the package.json I created
mv package-nextjs.json package.json
npm install
```

## Step 2: Project Structure Migration

### Current Structure:
```
client/src/
├── components/
├── pages/
├── store/
├── data/
└── lib/
```

### Next.js Structure:
```
pages/           # Page routes (or use app/ directory)
├── api/         # API routes
├── _app.tsx     # App wrapper
├── _document.tsx # HTML document
└── index.tsx    # Home page

components/      # React components
store/          # Redux store
data/           # Static data
lib/            # Utilities
public/         # Static assets (images, etc.)
styles/         # CSS files
```

## Step 3: Key Files to Create/Modify

### 1. next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
```

### 2. pages/_app.tsx
```typescript
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '@/store/store'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  )
}
```

### 3. pages/index.tsx
```typescript
import Head from 'next/head'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import LocationSection from '@/components/LocationSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ekaant - Agro Tourism Retreat | Near Bor Tiger Reserve, Maharashtra</title>
        <meta name="description" content="Experience authentic rural life at Ekaant agro tourism retreat near Bor Tiger Reserve, Maharashtra." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LocationSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  )
}
```

## Step 4: Component Migration Changes

### Update Image Imports
Replace:
```typescript
import logoImage from "@assets/logo.png"
```

With:
```typescript
import Image from "next/image"
import logoImage from "@/public/logo.png"

// Then use:
<Image 
  src={logoImage} 
  alt="Ekaant Logo" 
  width={120}
  height={48}
  className="h-10 w-auto"
/>
```

### Update Asset References
Move all images from `attached_assets/` to `public/` directory:
- `public/logo.png` (your Ekaant logo)
- `public/treehouse.jpg` (hero background)
- `public/activities/` (activity images)

## Step 5: API Routes (Optional)
If you want to keep backend functionality, create API routes:

```typescript
// pages/api/content.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import contentData from '@/data/content.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(contentData)
}
```

## Step 6: TypeScript Configuration
Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Step 7: Deploy on Replit

1. Create new Replit project with Next.js template
2. Upload your migrated files
3. Update `.replit` file:
```
run = "npm run dev"
```

4. The project will auto-deploy when you push changes

## Benefits of Next.js Migration

1. **Better SEO** - Server-side rendering
2. **Improved Performance** - Image optimization, code splitting
3. **Built-in API Routes** - No separate backend needed
4. **Better Developer Experience** - Hot reloading, TypeScript support
5. **Easy Deployment** - Optimized for production

## Commands to Run

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Your website will be available at `http://localhost:3000` during development.

## Notes
- All your Redux store, components, and styling will work the same way
- Images will be automatically optimized by Next.js
- The site will have better performance and SEO
- You can deploy easily on Vercel, Netlify, or keep it on Replit