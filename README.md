# AgentVista Design System

This document outlines the comprehensive design language, styling, behavior, and structural components for the AgentVista web application. It serves as the single source of truth for creating a consistent, premium, and dynamic user experience.

## 1. Color Branding

We use a modern, sleek, and vibrant color palette that conveys professionalism, innovation, and approachability.

### Core Colors
- **Primary Brand**: `#4F46E5` (Indigo) - Used for primary actions, CTA buttons, and main branding elements.
- **Secondary**: `#06B6D4` (Cyan) - Used for highlights, active states, and gradients (paired with Primary).
- **Accent**: `#F43F5E` (Rose) - Used sparingly for notifications, badges, or errors to draw immediate attention.

### Background & Surface (Dark Mode First)
- **Background (App)**: `#0F172A` (Slate 900) - Deep, rich background for a premium feel.
- **Surface (Cards/Modals)**: `#1E293B` (Slate 800) - Slightly elevated elements.
- **Surface Hover**: `#334155` (Slate 700)

### Typography Colors
- **Primary Text**: `#F8FAFC` (Slate 50) - High contrast for readability.
- **Secondary Text**: `#94A3B8` (Slate 400) - Subtitles, descriptions, placeholders.
- **Muted Text**: `#475569` (Slate 600) - Disabled states or tertiary info.

## 2. Typography

A clean, highly legible modern sans-serif stack to ensure a premium feel.

- **Primary Font Family**: `'Inter', sans-serif` (or `'Outfit', sans-serif` for a slightly more geometric/modern look).
- **Monospace Font**: `'Fira Code', monospace` (for any code snippets or technical data).

### Scale & Weights
- **H1 (Hero)**: `3.5rem` / `700 (Bold)` / Line-height: `1.1` - Used for main page titles.
- **H2 (Section)**: `2.5rem` / `600 (Semi-Bold)` / Line-height: `1.2`
- **H3 (Card Title)**: `1.5rem` / `600 (Semi-Bold)` / Line-height: `1.3`
- **Body Large**: `1.125rem` / `400 (Regular)` / Line-height: `1.6`
- **Body Regular**: `1rem` / `400 (Regular)` / Line-height: `1.5`
- **Small/Caption**: `0.875rem` / `400 (Regular)` / Line-height: `1.5`

## 3. Styling & Aesthetics

### Borders & Radius
- **Border Radius**: Use rounded corners for a modern, friendly feel.
  - Buttons/Inputs: `8px` (`rounded-lg`)
  - Cards/Modals: `16px` (`rounded-2xl`)
- **Borders**: Subtle, semi-transparent borders to separate surfaces without heavy lines.
  - `border: 1px solid rgba(255, 255, 255, 0.1)`

### Shadows & Depth
- **Soft Shadows**: Use multi-layered, diffused shadows for depth.
- **Glassmorphism**: Employ blurred, semi-transparent backgrounds for floating elements (navbars, tooltips, dropdowns).
  - Example: `background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(12px);`

## 4. Behavior & Interactivity

The site must feel "alive" and highly responsive to user inputs.

### Micro-Animations
- **Hover Effects**: All interactive elements (buttons, links, cards) must have a subtle hover effect (e.g., slight scaling up by `1.02`, or background color shift).
- **Transitions**: Smooth, fast transitions. Use `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);`.
- **Loading States**: Skeletons for structural loading; sleek spinners embedded inside buttons for inline actions.

### States
- **Default**: Standard appearance.
- **Hover/Focus**: Highlighted border, brighter background, subtle shadow glow.
- **Active (Pressed)**: Slight scale down (`scale-95`) to mimic physical pressing.
- **Disabled**: Lower opacity (`50%`), grayscale, `cursor-not-allowed`.

## 5. Layout & Spacing

Consistent spacing is critical for a polished look.

- **Grid System**: Standard 12-column responsive grid with consistent gutters.
- **Max Width**: Limit main content containers to `1280px` (`max-w-7xl`).
- **Section Spacing**: Large, breathable gaps between major page sections (`padding-top: 6rem; padding-bottom: 6rem;`).

### Breakpoints
- **Mobile First**: Default styles applied to mobile (`< 768px`).
- **Tablet (`md`)**: `768px` - Adjust grid items to 2 columns, adjust font sizes.
- **Desktop (`lg`)**: `1024px` - Full desktop layouts, horizontal navigation.
- **Large Desktop (`xl`)**: `1280px`

## 6. Page Sections (Structure)

Typical structural requirements for standard pages.

### 1. Header / Navigation
- Sticky top navigation with a glassmorphism effect.
- Logo on the left, navigation links in the center, Primary CTA (e.g., "Get Started") on the right.

### 2. Hero Section
- Bold, high-contrast headline (H1).
- Subtitle explaining the value proposition clearly.
- Two buttons: Primary CTA (solid) and Secondary CTA (outline).
- Dynamic visual element (e.g., a glowing 3D graphic, floating UI elements, or a sleek dashboard mockup).

### 3. Features / Services
- 3 to 4 column grid of cards.
- Each card has: An icon (with a soft background glow), a title, and a brief description.
- Cards elevate slightly on hover.

### 4. Social Proof / Testimonials
- Rotating carousel or masonry grid of user reviews.
- Include user avatar, name, role, and the testimonial text.

### 5. Call to Action (Bottom)
- A highly stylized banner (often using the brand gradient) prompting the final action before the footer.

### 6. Footer
- Multi-column layout containing links (Product, Company, Resources, Legal).
- Social media icons and a copyright notice.

## 7. SEO & Accessibility (Required Standards)

- **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Heading Hierarchy**: Strict adherence to one `<h1>` per page, followed by `<h2>`, `<h3>` in logical order.
- **Contrast Ratios**: Ensure text meets WCAG AA standards against its background.
- **Focus Indicators**: Clearly visible `outline` or `box-shadow` for keyboard navigation (e.g., `ring-2 ring-primary`).
- **Alt Text**: All meaningful images must have descriptive `alt` attributes.
