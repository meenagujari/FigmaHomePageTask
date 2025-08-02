# EKAANT - Agro Tourism Retreat (Next.js)

## Overview

EKAANT is a modern Next.js agro tourism website showcasing an eco-friendly retreat near Bor Tiger Reserve, Maharashtra. The application features a responsive single-page design with smooth scrolling navigation, showcasing accommodations, activities, and booking information for an authentic rural tourism experience. Successfully migrated from React SPA to Next.js App Router for better performance and SEO.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 2024)

- **Complete Next.js Migration**: Converted from React SPA to Next.js 14 with App Router
- **Modern Architecture**: Using App Router instead of Pages Router for better performance
- **Code Cleanup**: Removed all React SPA files, Vite config, and Express backend
- **Simplified Structure**: Clean Next.js-only project structure
- **Asset Integration**: Logo and images properly placed in public folder

## System Architecture

### Frontend Architecture (Next.js App Router)
- **Next.js 14**: Modern React framework with App Router for better performance and SEO
- **State Management**: Redux Toolkit with minimal content slice for future expansion
- **Styling**: Tailwind CSS with custom Ekaant brand colors and responsive design
- **Component Structure**: Modular section-based components (Header, Hero, About, Services, Location, FAQ, Footer)
- **Image Optimization**: Next.js Image component for automatic optimization
- **SEO**: Built-in metadata API with proper Open Graph tags

### Project Structure
```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── providers.tsx   # Client-side providers (Redux, React Query)
│   └── page.tsx        # Homepage with all sections
├── public/
│   ├── logo.png        # Ekaant logo
│   ├── treehouse.jpg   # Hero background
│   └── nature-retreat.jpg # About section image
├── store/
│   └── store.ts        # Redux store configuration
├── styles/
│   └── globals.css     # Global styles with Ekaant theme
└── package.json        # Next.js dependencies
```

### Frontend State Architecture
- **Content Management**: Static content data embedded in components
- **Component State**: Local React state for UI interactions (FAQ toggles, mobile menu, form inputs)
- **Form Handling**: React Hook Form integration ready for future expansion
- **Query Management**: TanStack Query configured for future API integration

### Styling and UI System
- **Design System**: Custom CSS variables for consistent Ekaant brand theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS utility classes
- **Animation**: CSS transitions and hover effects for enhanced user experience
- **Typography**: Responsive typography using calc-based font sizing

## External Dependencies

### Next.js Libraries
- **Next.js 14**: React framework with App Router
- **React 18**: Latest React with TypeScript support
- **Styling**: Tailwind CSS, class-variance-authority, clsx for conditional styling
- **State Management**: Redux Toolkit, React Redux for global state
- **Data Fetching**: TanStack React Query for future server state management
- **Form Handling**: React Hook Form with Hookform resolvers
- **Icons**: Lucide React for consistent iconography

### Build and Development Tools
- **TypeScript**: Full TypeScript support with strict mode
- **Development**: Next.js hot reload and fast refresh
- **Asset Management**: Next.js automatic image optimization
- **SEO**: Built-in metadata and Open Graph support