# Brew & Go Coffee Cart

A modern web application for a mobile coffee cart business built with React, TypeScript, and Yarn.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Backend**: Node.js with Express
- **Package Manager**: Yarn
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **State Management**: TanStack Query (React Query)

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd brew-and-go-coffee-cart
```

2. Install dependencies using Yarn:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn check` - Type check with TypeScript
- `yarn db:push` - Push database schema (when database is configured)

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/              # Express backend
├── shared/              # Shared types and schemas
└── package.json         # Dependencies and scripts
```

## Features

- Modern, responsive design
- Single-page layout with smooth scrolling navigation
- Contact form with business information
- Mobile-friendly navigation
- Contemporary coffee-themed styling

## Deployment

This project is configured for deployment on Replit. For other platforms, ensure you:

1. Build the project: `yarn build`
2. Set NODE_ENV=production
3. Configure proper port binding (defaults to 5000)

## Development

The project uses modern development practices:

- TypeScript for type safety
- Tailwind CSS for styling
- ESLint and Prettier for code quality
- Hot module replacement for fast development

## Database (Optional)

The project includes Drizzle ORM configuration for PostgreSQL but uses in-memory storage by default. To use a database:

1. Set the `DATABASE_URL` environment variable
2. Run `yarn db:push` to create tables