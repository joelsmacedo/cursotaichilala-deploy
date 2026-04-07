# AI Rules for Tai Chi Chuan Course App

## Tech Stack

- **React 18** with TypeScript as the primary framework
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with custom design system featuring nature-inspired Tai Chi theme
- **shadcn/ui** component library built on Radix UI primitives
- **React Router** for client-side routing
- **React Hook Form** with Zod validation for forms
- **TanStack Query** for server state management
- **Lucide React** for icons throughout the application
- **React Helmet Async** for SEO and meta tags management

## Library Usage Rules

### UI Components
- **ALWAYS** use shadcn/ui components as the base for any UI element
- **NEVER** create custom UI components from scratch when a shadcn/ui equivalent exists
- **EXTEND** shadcn/ui components by creating new components that wrap them when customization is needed
- Available components: Button, Card, Accordion, Dialog, Input, Select, etc.

### Styling
- **ONLY** use Tailwind CSS classes for styling
- **NEVER** write inline styles or CSS-in-JS
- **FOLLOW** the established design tokens in `tailwind.config.ts`
- **USE** custom component classes like `section-padding`, `container-wide`, etc. for consistency

### Routing
- **KEEP** all routes in `src/App.tsx`
- **USE** React Router's `NavLink` component (wrapped in `src/components/NavLink.tsx`) for navigation
- **MAINTAIN** the catch-all "*" route as the last route

### State Management
- **USE** React state (`useState`, `useReducer`) for local component state
- **USE** TanStack Query for server state and API calls
- **AVOID** global state management libraries unless absolutely necessary

### Forms
- **USE** React Hook Form with Zod validation for all forms
- **LEVERAGE** the shadcn/ui form components (`@/components/ui/form.tsx`)
- **IMPLEMENT** proper validation and error handling

### Icons
- **ONLY** use Lucide React icons
- **IMPORT** specific icons to maintain tree-shaking
- **MAINTAIN** consistent sizing and color using Tailwind classes

### SEO & Meta Tags
- **ALWAYS** include proper meta tags using React Helmet
- **ADD** structured data when relevant
- **ENSURE** descriptive titles and descriptions for each page

### Code Organization
- **PLACE** pages in `src/pages/`
- **PLACE** reusable components in `src/components/`
- **GROUP** related components in subdirectories (e.g., `src/components/landing/`)
- **KEEP** components under 100 lines when possible

### File Naming
- **USE** PascalCase for component files (e.g., `Button.tsx`)
- **USE** kebab-case for directories (e.g., `landing/`)
- **KEEP** asset files in `src/assets/`

### Performance
- **LAZY LOAD** components and routes when appropriate
- **OPTIMIZE** images using appropriate formats
- **AVOID** unnecessary re-renders using React hooks properly

## Design System Guidelines

### Color Palette
- Primary: Deep bamboo green (`hsl(145, 22%, 30%)`)
- Secondary: Warm sand beige
- Accent: Sage green
- Follow the nature-inspired Tai Chi theme

### Typography
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)
- Maintain consistent font weights and sizes

### Spacing & Layout
- Use `section-padding` class for consistent section spacing
- Use `container-wide` or `container-narrow` for content alignment
- Maintain responsive design with breakpoints

## Development Rules

1. **NEVER** modify shadcn/ui component files directly
2. **ALWAYS** create new components for custom behavior
3. **MAINTAIN** TypeScript strict mode
4. **FOLLOW** existing coding patterns and conventions
5. **TEST** responsive design on all breakpoints
6. **ENSURE** accessibility with proper ARIA labels and semantic HTML
7. **KEEP** commit messages clear and descriptive
8. **AVOID** adding unused dependencies