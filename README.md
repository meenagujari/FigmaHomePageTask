
# EKAANT - Agro Tourism Retreat

A modern, responsive Next.js website for Ekaant Agro Tourism, showcasing an eco-friendly retreat near Bor Tiger Reserve, Maharashtra. Built with pixel-perfect design matching Figma specifications and fully dynamic content rendering.

## 🌟 Features

- **Pixel-Perfect Design**: Exact recreation of Figma design specifications
- **Fully Dynamic Content**: No hardcoded data - all content loaded from API
- **Responsive Design**: Fluid calc-based dimensions for all screen sizes
- **Modern Architecture**: Next.js 14 with App Router for optimal performance
- **SEO Optimized**: Built-in metadata and Open Graph support
- **TypeScript**: Full type safety throughout the application
- **Fast Loading**: Optimized images and performance-first approach

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ekaant-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── api/content/route.ts    # Dynamic content API endpoint
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx               # Homepage with all sections
│   └── providers.tsx          # Client-side providers
├── components/
│   ├── AboutSection.tsx        # About section component
│   ├── FAQSection.tsx         # FAQ accordion component
│   ├── FooterSection.tsx      # Footer with contact info
│   ├── Header.tsx             # Navigation header
│   ├── HeroSection.tsx        # Hero banner component
│   ├── LocationSection.tsx    # Location and contact details
│   └── ServicesSection.tsx    # Services/activities showcase
├── public/
│   ├── logo.png               # Ekaant logo
│   ├── treehouse-landscape.jpg # Hero background
│   ├── group2-services.png    # Services section image
│   └── [other images]         # Additional assets
├── store/
│   └── store.ts               # Redux store configuration
├── styles/
│   └── globals.css            # Global styles with custom variables
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Typography
- **Primary Font**: Poppins (imported from Google Fonts)
- **Responsive Scaling**: CSS calc-based font sizes
- **Weight Variations**: 300, 400, 500, 600, 700

### Colors
- **Primary Green**: #003E17 (footer background, FAQ borders)
- **Location Background**: #D0D9D9
- **Text**: Dynamic black/white based on background
- **Accent**: Custom green variations for different sections

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack React Query
- **Form Handling**: React Hook Form with Zod validation

### Key Components
- **Header**: Fixed navigation with responsive logo
- **Hero**: Full-screen background with call-to-action
- **About**: Multi-column content with image
- **Services**: Dynamic activity cards with background images
- **Location**: Contact methods and GPS coordinates
- **FAQ**: Interactive accordion with 2-column layout
- **Footer**: Contact information with Poppins typography

### Dynamic Content System
All content is served from `/api/content/route.ts` including:
- Site branding and taglines
- Hero section text and images
- About section descriptions
- Service/activity listings
- Location details and coordinates
- FAQ questions and answers
- Footer contact information

## 🔧 Configuration

### Next.js Configuration
The project includes specific configuration for Replit deployment:

```javascript
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}
```



## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Development Guidelines
- Follow TypeScript strict mode
- Use Tailwind utility classes
- Maintain responsive design patterns
- Keep content dynamic via API
- Test across multiple devices



## 🎯 FAQ Section Details

- **Layout**: 2 cards per row (responsive to 1 on mobile)
- **Questions**: 6 total cards with specific content
- **Interaction**: Click to expand/collapse answers
- **Styling**: Green borders matching brand colors

## 📞 Contact Information

**Footer displays:**
- Call/WhatsApp: +91 9988776655
- Email: EKANT@NEAVE.TECH
- Instagram: EKANT
- Location: Near Bor Tiger Reserve
- Address: Wardha, Maharashtra


### Cross-Origin Requests
If you see warnings about cross-origin requests, ensure your `next.config.js` includes the `allowedDevOrigins` configuration as shown above.

## 📄 License

© 2024 Ekaant Agro Tourism Retreat. All rights reserved.






