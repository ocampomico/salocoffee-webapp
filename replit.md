# Brew & Go Coffee Cart - Mobile Coffee Experience

## Overview

This is a full-stack web application for a mobile coffee cart business called "Brew & Go". The application serves as a marketing website and business presence for a coffee cart that brings premium coffee directly to customers at events, office complexes, and around town.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom coffee-themed color palette
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Server Framework**: Express.js
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### Database Architecture
- **Primary Database**: PostgreSQL (configured but can be provisioned later)
- **ORM**: Drizzle with type-safe schema definitions
- **Migrations**: Drizzle Kit for schema management
- **Current Schema**: Basic user management (users table with username/password)

## Key Components

### Client-Side Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   ├── hero-section.tsx
│   │   ├── featured-offerings.tsx
│   │   └── why-choose-us.tsx
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   └── not-found.tsx
│   ├── hooks/
│   ├── lib/
│   └── main.tsx
```

### Server-Side Structure
```
server/
├── index.ts      # Main server entry point
├── routes.ts     # API route definitions
├── storage.ts    # Data access layer with in-memory implementation
└── vite.ts       # Development server integration
```

### Shared Resources
```
shared/
└── schema.ts     # Database schema and TypeScript types
```

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express.js routes handle HTTP requests at `/api/*` endpoints
3. **Business Logic**: Route handlers use the storage interface for data operations
4. **Data Storage**: Currently uses in-memory storage (MemStorage class) with interface for future database integration
5. **Response**: JSON responses sent back to client with proper error handling

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, ReactDOM, React Query)
- UI/UX libraries (Radix UI primitives, Tailwind CSS, Lucide icons)
- Form handling (React Hook Form with Zod validation)
- Date utilities (date-fns)
- Routing (Wouter)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database driver for PostgreSQL connectivity
- Session management utilities
- Development tools (tsx, esbuild for production builds)

### Development Tools
- TypeScript for type safety
- Vite for frontend build tooling
- Drizzle Kit for database migrations
- ESLint and Prettier (configured through package.json)

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Server**: Express server with Vite middleware for HMR
- **Port**: 5000 (configured in .replit)
- **Database**: PostgreSQL module available but not required for development

### Production Build
- **Build Command**: `npm run build`
  1. Vite builds the client-side React application
  2. esbuild bundles the server code for Node.js
- **Start Command**: `npm run start`
- **Deployment Target**: Replit autoscale deployment
- **Build Output**: 
  - Client assets → `dist/public/`
  - Server bundle → `dist/index.js`

### Database Deployment
- Drizzle migrations stored in `./migrations/`
- Database push command: `npm run db:push`
- Environment variable required: `DATABASE_URL`

## Changelog

Changelog:
- June 23, 2025. Initial setup and basic coffee cart website with Home, About, Contact pages
- June 23, 2025. Major design modernization update - implemented contemporary UI with improved typography, spacing, shadows, gradients, and modern color scheme

## Recent Changes

✓ Modernized entire color palette with contemporary neutral colors and vibrant coffee-themed accents
✓ Updated typography with improved spacing and modern font features
✓ Implemented glass-morphism effects and modern shadow system
✓ Added gradient backgrounds and text gradients for visual appeal
✓ Enhanced all components with larger spacing, rounded corners, and hover effects
✓ Upgraded navigation with backdrop blur and active state indicators
✓ Redesigned hero section with larger text and decorative elements
✓ Modernized cards with improved shadows and better visual hierarchy
✓ Updated footer with contemporary styling and improved social icons
✓ Enhanced forms with modern input styling and better UX
✓ Combined Home and About pages into single scrollable page
✓ Updated navigation to scroll to about section instead of separate route
✓ Maintained both Home and About navigation links for user familiarity

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern, contemporary styling with clean aesthetics