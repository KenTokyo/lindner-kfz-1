# Design Document: Lindner KFZ Meisterbetrieb

## 1. Overview
The Lindner KFZ Meisterbetrieb project is a modern, responsive single-page web application (SPA) built with React. It aims to present the services, career opportunities, and contact information for the car repair shop in a professional, visually appealing, and user-friendly manner.

## 2. Technology Stack
- **Framework/Library:** React (v19)
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **State Management:** React's built-in state (`useState`, `useEffect`, context if applicable)

## 3. Architecture & Directory Structure
The application follows a component-centric architecture, separating generic UI elements from specific domain sections (home, services, career).

### 3.1 Folder Structure
- **`/components`**: Reusable UI components.
  - **`/home`**: Components specific to the HomePage (e.g., `Hero`, `WhyLindner`, `ReviewCards`).
  - **`/dienstleistungen`**: Components for the Services page.
  - **`/karriere`**: Components for the Careers page (e.g., `JobCard`, `BewerbungsFormular`).
  - **`/shared`**: Common layout and UI components used across multiple pages (e.g., `Navbar`, `Footer`, `Layout`, `StickyCTA`).
- **`/pages`**: Top-level route components.
  - `HomePage`, `DienstleistungenPage`, `KarrierePage`, `DatenschutzPage`, `ImpressumPage`.
- **`/data`**: Static data definitions (JSON/TS objects) for rendering content without a backend database.
  - `services.ts`, `jobs.ts`, `reviews.ts`.
- **`/public`**: Static assets like images, videos, and logos.

## 4. UI/UX & Styling Guidelines

### 4.1 Tailwind CSS Integration
The project relies on Tailwind CSS for utility-first styling. 
- Use semantic class names where possible.
- Avoid inline styles; leverage Tailwind utility classes.
- Responsive design is implemented using Tailwind's breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`). Mobile-first approach is standard.

### 4.2 Theming & Colors
*(Values are typically configured via Tailwind. Below is the conceptual mapping.)*
- **Primary Color:** Deep Red/Burgundy (representing the Lindner brand).
- **Secondary Color:** Dark Grays/Black (for high contrast and sleek, modern look).
- **Backgrounds:** Predominantly white or very light gray to ensure readability, interspersed with dark mode sections or image-background sections for visual interest.
- **Text:** Dark gray/black for main text; white for text on primary or dark backgrounds.

### 4.3 Typography
- Maintain a clean, sans-serif font stack (likely Tailwind's default sans, or a custom font defined in configuration).
- Ensure high readability with appropriate line heights (`leading-relaxed`) and contrasts.
- Headings should be bold and clearly distinct from body text.

### 4.4 Animations
- **Framer Motion** is used for smooth, performant animations.
- Typical animations include:
  - Page transitions (fade-in, slide-up).
  - Scroll-triggered reveal animations on sections (e.g., services appearing as the user scrolls down).
  - Hover states on interactive elements like buttons and cards (slight scale up, shadow increase).

### 4.5 Imagery & Media
- High-quality imagery of the workshop, vehicles, and the team.
- A hero video background is utilized on the landing page to create an immediate engaging impact.
- Ensure all media are properly sized and optimized for web performance.

## 5. Component Design Patterns

### 5.1 Layout Strategy
- Use a persistent `Layout` component that encapsulates the `Navbar` and `Footer`.
- Utilize `react-router-dom`'s `<Outlet />` within the layout to render child page components.

### 5.2 Responsive Navigation
- The `Navbar` component handles responsive switching (e.g., hamburger menu on mobile, full links on desktop).
- Links should provide visual feedback (e.g., underline or color change) to indicate active state or hover.

### 5.3 Modals & Overlays
- `TerminanfrageModal`: Used for direct user action (booking an appointment). Should be accessible, trapping focus, and easily dismissible (ESC key or clicking outside).

## 6. Data Flow
- **Static Content:** Content like job postings, reviews, and service details are stored in the `/data` directory. This simplifies the architecture by removing the need for an external API or database, making it ideal for a brochure-ware application.
- **Form Handling:** Forms (like `BewerbungsFormular` or contact forms) rely on local state to capture input.

## 7. Accessibility (a11y)
- Use semantic HTML elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`).
- Ensure all images have descriptive `alt` attributes.
- Ensure sufficient color contrast.
- Ensure forms have associated labels.

## 8. Future Considerations
- **Backend Integration:** If requirements change, the static data in `/data` can be replaced with API calls to a CMS or custom backend.
- **Internationalization (i18n):** If the site needs to support multiple languages in the future.
- **SEO Optimization:** Ensure meta tags and titles are appropriately set per page, potentially utilizing React Helmet or migrating to a framework like Next.js if SEO needs become highly demanding.
