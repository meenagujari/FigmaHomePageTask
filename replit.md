# EKAANT - Agro Tourism Retreat

## Overview

EKAANT is a full-stack agro tourism website built to showcase an eco-friendly retreat near Bor Tiger Reserve, Maharashtra. The application features a responsive single-page design with smooth scrolling navigation, showcasing accommodations, activities, and booking information for an authentic rural tourism experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Single-page application using React with TypeScript for type safety
- **State Management**: Redux Toolkit for global state management with content data stored in Redux slices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library using "new-york" style variant
- **Component Structure**: Modular section-based components (Header, Hero, About, Services, Location, FAQ, Footer)
- **Responsive Design**: Mobile-first approach with fluid calc-based sizing and custom CSS variables

### Backend Architecture
- **Express.js Server**: RESTful API server with middleware for logging and error handling
- **Static File Serving**: Vite development server integration with production static file serving
- **API Endpoints**: Simple endpoints for content delivery, newsletter subscription, and contact form submissions
- **Memory Storage**: In-memory storage implementation for user data with interface for future database integration

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript
- **Development Storage**: In-memory storage using Map data structures for rapid prototyping
- **Schema Design**: User table with UUID primary keys, username/password fields with Zod validation
- **Migration System**: Drizzle-kit for database migrations and schema management

### Frontend State Architecture
- **Content Management**: Static JSON data file with Redux slice for content distribution
- **Component State**: Local React state for UI interactions (FAQ toggles, mobile menu, form inputs)
- **Form Handling**: React Hook Form integration with validation resolvers
- **Query Management**: TanStack Query for API data fetching and caching

### Styling and UI System
- **Design System**: Custom CSS variables for consistent theming with Ekaant brand colors
- **Component Library**: Radix UI primitives with custom styling via class-variance-authority
- **Animation**: CSS transitions and hover effects for enhanced user experience
- **Typography**: Responsive typography using calc-based font sizing

## External Dependencies

### Frontend Libraries
- **React Ecosystem**: React 18 with TypeScript, Wouter for routing
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, class-variance-authority, clsx for conditional styling
- **State Management**: Redux Toolkit, React Redux for global state
- **Data Fetching**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Hookform resolvers

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support via tsx
- **Database**: Neon serverless PostgreSQL with connection pooling
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development Tools**: Vite for build tooling and development server

### Build and Development Tools
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **TypeScript**: Full TypeScript support with path mapping and strict mode
- **Development**: Hot reload via Vite, runtime error overlay for debugging
- **Asset Management**: Vite asset handling with alias resolution