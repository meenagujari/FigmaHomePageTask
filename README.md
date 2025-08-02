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
├── public/
│   ├── logo.png               # Ekaant logo
│   ├── treehouse-landscape.jpg # Hero background
│   └── group2-services.png    # Services section image
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

## 🔧 Customization

### Updating Content
Edit `/app/api/content/route.ts` to modify:
- Site information
- Section headings and descriptions
- Contact details
- FAQ items
- Service offerings

### Styling Changes
- **Global styles**: `styles/globals.css`
- **Component styles**: Inline styles with CSS variables
- **Responsive values**: CSS clamp() functions for fluid scaling

### Adding New Sections
1. Create component in `app/page.tsx`
2. Add data structure to API route
3. Update TypeScript interfaces
4. Style with Tailwind classes

## 📱 Responsive Design

The website uses advanced CSS techniques for responsive design:
- **Fluid Typography**: `clamp()` functions for scalable text
- **Flexible Spacing**: CSS custom properties for consistent margins/padding
- **Adaptive Layouts**: CSS Grid and Flexbox for dynamic arrangements
- **Image Optimization**: Next.js Image component with responsive sizing

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

## 🚀 Deployment

### Replit Deployment (Recommended)
This project is optimized for Replit deployment:
1. Use the built-in Deploy button
2. Automatic build and hosting
3. Custom domain support available

### Alternative Deployments
- **Vercel**: `npm run build && vercel deploy`
- **Netlify**: Connect repository for automatic deployments
- **Docker**: Dockerfile included for containerized deployment

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

## 📄 License

© 2024 Ekaant Agro Tourism Retreat. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**