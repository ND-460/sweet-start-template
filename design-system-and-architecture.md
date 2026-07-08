# AgentVista — Design System & Architecture

> **Last Updated:** July 8, 2026
> **Source of Truth** for all design, architecture, and behavioral decisions.

---

# 1. Project Overview & Tech Stack

## 1.1 Core Frameworks

| Layer | Technology | Version | Purpose |
| --- | --- | --- | --- |
| **UI Library** | React | `^18.3.1` | Declarative, component-based user interface rendering. |
| **Build Tool** | Vite | `^5.4.19` | Fast development server and production bundler. |
| **Language** | TypeScript | `^5.8.3` | Strong static typing for compile-time safety and structure. |
| **Routing** | React Router DOM | `^6.30.1` | Client-side SPA routing and hash-based section scroll management. |
| **Styling** | Tailwind CSS | `^3.4.17` | Utility-first CSS styling framework. |

## 1.2 Major Dependencies

| Package | Version | Exact Usage & Location in Application |
| --- | --- | --- |
| `react` / `react-dom` | `^18.3.1` | Core rendering runtime. Used universally across all components. |
| `react-router-dom` | `^6.30.1` | Configures app routing inside [App.tsx](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/App.tsx). Handles hash scrolls. |
| `react-helmet-async` | `^3.0.0` | Injected at root. Powers [PageSeo.tsx](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/components/seo/PageSeo.tsx) to dynamically modify `<head>` tags. |
| `framer-motion` | `^12.38.0` | Drives landing page scroll animations, entrance fades, and interactive state transitions. |
| `lucide-react` | `^0.462.0` | Provides SVG icons used for indicators, navigation, and badges. |
| `@supabase/supabase-js`| `^2.110.0` | Initialized in [client.ts](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/integrations/supabase/client.ts) to interface with Supabase backend APIs. |
| `react-hook-form` | `^7.61.1` | Form state, focus, and submission management in [ContactSection.tsx](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/components/ContactSection.tsx). |
| `@hookform/resolvers` | `^3.10.0` | Connects React Hook Form with Zod schema verification in [ContactSection.tsx](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/components/ContactSection.tsx). |
| `zod` | `^3.25.76` | Declares form schema validation constraints in [ContactSection.tsx](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/components/ContactSection.tsx). |
| `embla-carousel-react` | `^8.6.0` | Powers the touch/grab navigation slider in [UseCasesSection.tsx](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/components/UseCasesSection.tsx). |
| `next-themes` | `^0.3.0` | Injected for light/dark theme class toggling in Tailwind. |
| `sonner` | `^1.7.4` | Renders sleek, floating toast notifications throughout the application. |
| `@radix-ui/react-accordion`| `^1.2.11` | Accessible markup primitive used to style [FAQSection.tsx](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/components/FAQSection.tsx). |
| `@radix-ui/react-tooltip` | `^1.2.7` | Primitive layout wrapper around interactive tooltips. |
| `class-variance-authority` | `^0.7.1` | Combines dynamic component classes using Tailwind conventions. |
| `clsx` / `tailwind-merge` | `^2.1.1` / `^2.6.0` | Used in [utils.ts](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/lib/utils.ts) to merge tailwind classes safely. |

## 1.3 Dev Dependencies

| Package | Version | Purpose in Development / Build pipeline |
| --- | --- | --- |
| `@vitejs/plugin-react-swc`| `^3.11.0` | Compiles JSX/TSX components using Rust-based SWC in Vite. |
| `tailwindcss` | `^3.4.17` | Utility-first CSS generation engine. |
| `autoprefixer` / `postcss` | `^10.4.21` / `^8.5.6` | Parses CSS variables and injects vendor prefixes during compilation. |
| `@tailwindcss/typography` | `^0.5.16` | Tailwind plugin for formatting legal/policy pages (e.g. Terms, Privacy). |
| `typescript` | `^5.8.3` | Static type checker for the codebase. |
| `eslint` / `globals` | `^9.32.0` / `^15.15.0` | Pluggable linting utility for maintaining clean code standards. |
| `vitest` / `jsdom` | `^3.2.4` / `^20.0.3` | Test runner and browser simulation environment. |
| `@testing-library/react` | `^16.0.0` | React component testing library utilities. |
| `@playwright/test` | `^1.57.0` | End-to-end browser regression testing suite. |
| `sharp` | `^0.35.3` | Image optimizer for builds and assets. |

## 1.4 Build & Deployment Configuration

### Vite Config (`vite.config.ts`)
- **Development Server:** Binds to host `::` and port `8080`. Hot Module Replacement (HMR) overlay is disabled in settings (`hmr.overlay: false`).
- **Path Aliases:** `@/*` resolves to `./src/*` inside the compiler and editor.
- **Environment Variables Prefix:** Relies on the default `VITE_` prefix (e.g., `VITE_APP_ENV` for environment checks, `VITE_LEAD_SUBMIT_URL` for API endpoints, `VITE_SITE_ID`, `VITE_RECAPTCHA_SITE_KEY` for reCAPTCHA v3 site keys).
- **Manual Chunk Splitting:** Rollup splits vendor dependencies to enforce aggressive browser caching of static resources:
  - `vendor-react`: `["react", "react-dom", "react/jsx-runtime"]`
  - `vendor-router`: `["react-router-dom"]`
  - `vendor-motion`: `["framer-motion"]`
  - `vendor-icons`: `["lucide-react"]`
  - Chunk size warning triggers above `600` KB.
- **Vite Custom Middleware (`cacheControlPlugin`):** Development and preview servers inject `Cache-Control: public, max-age=31536000, immutable` headers for static files (woff2, ttf, webp, png, jpg, jpeg, svg, gif, ico).
- **React Deduplication:** Deduplicates `react`, `react-dom`, `react/jsx-runtime`, and `react/jsx-dev-runtime` imports.

### Deployment Configuration

#### 1. Vercel (`vercel.json`)
- **Headers:** Sets `Cache-Control: public, max-age=31536000, immutable` for static resources matched by `/assets/(.*)`, `/fonts/(.*)\.(ttf|woff|woff2)`, and `/images/(.*)\.(png|jpg|jpeg|gif|webp|svg)`.
- **Rewrites:** Routes `/api/(.*)` to the corresponding backend endpoint `/api/$1` and falls back all other routes (`/(.*)`) to `/index.html` to support SPA routing.

#### 2. Netlify (`netlify.toml`)
- **Headers:** Injects `Cache-Control = "public, max-age=31536000, immutable"` for files requested under `/assets/*`, `/fonts/*`, and `/images/*`.

#### 3. Cloudflare Pages (`_headers`)
- **Headers:** Sets identical `Cache-Control` rules (`public, max-age=31536000, immutable`) for assets, fonts, and images.

#### 4. Apache Server Configuration (`.htaccess` in root/public)
- **HTTPS Redirect:** Redirects HTTP connections to HTTPS (`RewriteCond %{HTTPS} off`).
- **Domain Canonicalization:** Detects `www` requests (`RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]`) and redirects to non-www `https://agentsvista.com`.
- **SPA Fallback Routing:** Rewrites any non-existent file (`!-f`) or directory (`!-d`) request to `/index.html` to allow React Router to handle page states.
- **GZIP Compression (mod_deflate):** Compresses HTML, text, XML, CSS, and JS files.
- **Static Asset Cache:** Overrides cache headers to `public, max-age=31536000, immutable` for static file types. Sets `public, max-age=3600, must-revalidate` for HTML files.
- **Security Headers:**
  - `X-Content-Type-Options "nosniff"` (MIME sniffing protection).
  - `X-XSS-Protection "1; mode=block"` (Legacy cross-site scripting filter).
  - `X-Frame-Options "SAMEORIGIN"` (Clickjacking protection).

### SEO & Tracking Configuration
- **Google Tag Manager (GTM) Lazy Loading:** Delay-loads the GTM script in `index.html`. It registers interaction listeners (`scroll`, `mousemove`, `mousedown`, `touchstart`, `keydown`) and asynchronously injects GTM (`GTM-5N778QX2`) only when the user interacts, or after a 3.5-second idle fallback timeout. This boosts initial load metric performance (LCP, TBT, and FID).
- **Dynamic Canonical URL Generation:** Managed by `CanonicalManager.tsx`. On navigation, it parses `#canonical-link` in the document head to read the base domain (origin), cleans trailing slashes from `location.pathname` (except `/`), and updates the canonical `href` attribute.
- **Robots Control:** Managed by `RobotsManager.tsx`. Non-production environments (based on `VITE_APP_ENV`) inject `<meta name="robots" content="noindex, nofollow, noarchive" />`. Production environments strip static robots tags to open the site to search engines.
- **Structured Data Schemas (JSON-LD):**
  - **WebSite Schema:** Defines the name of the website ("AgentVista") and its url (`https://agentsvista.com`).
  - **Organization Schema:** Declares company information (Ardira Corporation) and support channels (`+1-669-777-6838` / `support@ardira.com`).
  - **SoftwareApplication Schema:** Categorizes AgentVista as a web-based `BusinessApplication` native to Salesforce.
  - **FAQ Schema:** Formats key homepage FAQs to render rich search results in Google.
  - **Breadcrumbs Schema:** Mapped dynamically in `PageSeo.tsx`. Renders lists of `{ name, path }` into standard schema breadcrumb list nodes.
- **Open Graph (OG) & Twitter Cards Metadata:**
  - `PageSeo.tsx` updates title (`Title | AgentVista`), description, URL, card types (`summary_large_image`), Twitter handles (`@AgentVista`), and social share images (`/og-logo.png`).

## 1.5 Application Architecture

```
                                [ main.tsx ] (Entry Point)
                                      |
                                      v
                                [ App.tsx ] (Base Wrappers)
                                      |
       +------------------------------+------------------------------+
       |                              |                              |
       v                              v                              v
[ HelmetProvider ]            [ TooltipProvider ]            [ BrowserRouter ]
                                      |                              |
                                      v                              v
                              [ Toast Providers ]          [ Robots & Canonical ]
                              (Toaster & Sonner)                     |
                                                                     v
                                                             [ Routes / Router Map ]
                                                                     |
                                             +-----------------------+-----------------------+
                                             v                                               v
                                      [ Eager Pages ]                                 [ Lazy Sections ]
                                   (Index, Policy, 404)                             (UseCases, FAQ, Contact)
```

- **Route Map:**
  - `/` -> `Index` page component. Eagerly loaded.
  - `/home`, `/features`, `/benefits`, `/use-cases`, `/contact`, `/faq` -> Routed to `Index` with corresponding section target props. Eagerly loaded.
  - `/terms-of-use` -> `TermsOfUse` page component. Eagerly loaded.
  - `/privacy-policy` -> `PrivacyPolicy` page component. Eagerly loaded.
  - `*` -> `NotFound` fallback error page. Eagerly loaded.
- **Provider Stack:**
  1. `<HelmetProvider>` (outermost)
  2. `<TooltipProvider>`
  3. `<Toaster>` & `<Sonner>` (side-by-side)
  4. `<BrowserRouter>`
  5. `<RobotsManager />` & `<CanonicalManager />`
  6. `<Routes>` (innermost router logic)
- **Suspense Fallbacks:**
  - Lazy-loaded components in `Index.tsx` render min-height stubs:
    - `<UseCasesSection />` -> `<div className="min-h-[400px] bg-background" />`
    - `<FAQSection />` -> `<div className="min-h-[400px] bg-background" />`
    - `<ContactSection />` -> `<div className="min-h-[600px] bg-background" />`
  - Modals (like `DemoRequestForm` inside `Navbar.tsx` & `HeroSection.tsx`) use `<Suspense fallback={null}>` and render internal animated loading dots during Calendly widget configuration.

---

# 2. Global Design System (The UI Kit)

## 2.1 Typography

- **Font Family:** Configured to map Poppins (`'Poppins', 'system-ui', 'sans-serif'`) for headers (`font-heading`) and text copy (`font-body`).
- **Loading Strategy:** Highly-compressed local `.woff2` font files are preloaded in `index.html` and configured using `@font-face` with `font-display: swap` in [index.css](file:///c:/Users/Trupal%20Godhat/Desktop/sweet-start-template/src/index.css).
- **Font Size Scale:**

| Tailwind Class | Size (rem) | Weight Mapping | Typical Context |
| --- | --- | --- | --- |
| `text-5xl md:text-6xl` | `3.0rem` / `3.75rem` | `font-extrabold` (800) | Major landing / Error Titles (e.g. 404 code) |
| `text-3xl lg:text-5xl` | `1.875rem` / `3.0rem`| `font-extrabold` (800) | Main Hero Titles |
| `text-3xl md:text-4xl` | `1.875rem` / `2.25rem`| `font-bold` (700) | Secondary Section Headings |
| `text-2xl md:text-3xl` | `1.5rem` / `1.875rem` | `font-bold` (700) | Carousel & Large Feature Headings |
| `text-xl md:text-2xl`  | `1.25rem` / `1.5rem`  | `font-semibold` (600) | Sub-headings & Hero descriptive text |
| `text-lg`              | `1.125rem` | `font-medium` (500) | Explanatory description copy / block sub-labels |
| `text-sm` / `text-base`| `0.875rem` / `1.0rem` | `font-normal` / `font-medium` | General body paragraphs, metadata, items lists |
| `text-xs`              | `0.75rem` | `font-semibold` (600) | Small badge indicators, labels, validation alerts |

## 2.2 Color Palette

All core colors are declared in HSL format within `index.css` under `:root` variables, and mapping is managed inside `tailwind.config.ts`.

| Token Name | HSL Value | Hex (Approx) | Usage Guildelines |
| --- | --- | --- | --- |
| `--background` | `0 0% 100%` | `#FFFFFF` | Core page backgrounds |
| `--foreground` | `215 25% 15%` | `#1D2630` | Main text headings, body content, dark icons |
| `--card` | `210 20% 98%` | `#F5F7FA` | Form grids, footers, card backgrounds |
| `--card-foreground`| `215 25% 15%` | `#1D2630` | Content text inside cards and forms |
| `--popover` | `0 0% 100%` | `#FFFFFF` | Dropdowns, dialog popups, select menus |
| `--popover-foreground` | `215 25% 15%` | `#1D2630` | Dropdown text |
| `--primary` | `198 80% 37%` | `#0B72A4` | Deep blue. Brand buttons, active tabs, link highlights |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text rendered over primary blue backgrounds |
| `--secondary` | `113 52% 50%` | `#3CC14E` | Accent green. Brand success, positive sentiment badges |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | Text rendered over secondary green backgrounds |
| `--muted` | `210 20% 96%` | `#EFF2F5` | Secondary background blocks and tabs |
| `--muted-foreground` | `215 15% 50%` | `#6C7E90` | Captions, labels, subtext, disabled placeholders |
| `--accent` | `197 80% 92%` | `#D6EFFF` | Blue accents, hover states |
| `--accent-foreground` | `197 80% 35%` | `#1170A5` | Contrast text on blue accents |
| `--destructive` | `0 84.2% 60.2%` | `#EF4444` | Validation error borders, failure badges |
| `--destructive-foreground` | `210 40% 98%` | `#F8FAFC` | Contrast text on destructive states |
| `--border` | `214 20% 90%` | `#E2E8F0` | Layout lines, dividers, input borders |
| `--input` | `214 20% 90%` | `#E2E8F0` | Form inputs outline color |
| `--ring` | `198 80% 37%` | `#0B72A4` | Form inputs focus rings |
| `brand-blue` (static) | `#27A8E0` | `#27A8E0` | Bright blue brand styling, accents, active indicators |

- **UI Gradients:**
  - `.hero-gradient`: `linear-gradient(135deg, hsl(199 76% 97%) 0%, hsl(113 52% 97%) 50%, hsl(199 76% 95%) 100%)`. Soft, premium wash applied to headers and the 404 page background.
  - `.section-gradient`: `linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(210 20% 98%) 100%)`. Applied to section backgrounds.
  - `.text-gradient`: `linear-gradient(135deg, #27A8E0, #1a7db8)` with `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`. Adds high-end visual emphasis.
- **Glassmorphism Spec:**
  - `.glass-card` uses `bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg`.
  - Floating scrolled navigation bar uses `bg: rgba(255, 255, 255, 0.82)`, `backdrop-blur: 20px`, `saturate: 160%`, `border-white/60`.

## 2.3 UI Components

- **Buttons:**
  - **CTA Solid Blue Button:** `px-6 py-2.5 text-sm font-semibold rounded-lg bg-brand-blue text-white hover:opacity-85 active:opacity-75 transition-opacity cursor-pointer select-none` (Used for "Book a Demo" in Navbar).
  - **CTA Solid Primary (Large):** `w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-brand-blue text-white font-semibold text-base sm:text-lg hover:opacity-85 active:opacity-75 transition-opacity cursor-pointer select-none` (Used for main hero CTA).
  - **CTA Outline Button:** `w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-border text-foreground font-semibold text-base sm:text-lg hover:bg-gray-50 active:bg-muted transition-colors cursor-pointer select-none` (Used for "View on AppExchange").
  - **Secondary Outline Button:** `inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-brand-blue/30 text-brand-blue font-semibold text-sm hover:bg-brand-blue/5 transition-colors` (Used for "Send Another Message" button).
- **Badges:**
  - **Powered-By Pill Badge:** `inline-flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-white/80 backdrop-blur-sm text-brand-blue text-xs md:text-sm font-medium mb-3 tracking-wide shadow-lg shadow-gray-400/20`.
  - **Uppercase Section Badge:** `inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-xs font-semibold mb-4 tracking-widest uppercase`.
  - **Dark-Blue Section Badge:** `inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-xs font-semibold mb-4 tracking-widest uppercase` (Used in CTA card).
- **Cards:**
  - **Premium Grid Card:** `group relative rounded-xl bg-background border border-border/80 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`.
  - **Premium Card Accent Line (Hover):** `absolute top-0 left-0 right-0 h-[3px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left` (Reveals top line on hover).
  - **Glassmorphism Floating Cards:** `bg-background/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 shadow-lg` (Used in hero float animations).
- **Icon Boxes:**
  - **Standard Brand Icon Box:** `w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/20 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-colors duration-300`.
  - **Standard Contact Icon Box:** `w-12 h-12 rounded-lg bg-brand-blue text-white flex items-center justify-center shrink-0` (Used for layout alignment of contact channels).
- **Section Utilities:**
  - **Paddings:** Top: `pt-16 md:pt-24`, Bottom: `pb-9` (Ensures uniform layout rhythms).
  - **Alternate Backgrounds:** Landing page alternates sections between pure `bg-background` and `section-gradient` / custom layouts to delineate contents.
  - **Containers:** Mapped to `.container mx-auto px-4 lg:px-8` and restricted to `max-w-6xl` or `max-w-7xl` centered grids.
- **Form Inputs:**
  - **Standard Input Box:** `w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors disabled:opacity-50`.
  - **Error Input State:** `border-red-500 bg-red-50 focus:ring-red-500/30 focus:border-red-500 text-foreground`.
  - **Standard Textarea:** `w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none disabled:opacity-50` (Disabled resize prevents layout breakages).

## 2.4 Global Animations & Effects

### CSS Keyframe Animations

| Animation Name | Keyframes Setup | Easing & Duration | Description & Usage |
| --- | --- | --- | --- |
| `float` | `0%, 100% { translateY(0px) } 50% { translateY(-10px) }` | `6s ease-in-out infinite` | Floats graphic models smoothly inside hero graphics. |
| `floatBadge` | `0%, 100% { translateY(0px); opacity: 0.8; } 50% { translateY(-4px); opacity: 1; }` | `4s ease-in-out infinite` | Secondary floating offset applied to badge blocks. |
| `accordion-down` | `from { height: 0 } to { height: var(--radix-accordion-content-height) }` | `0.2s ease-out` | Drops accordion container down in FAQ items. |
| `accordion-up` | `from { height: var(--radix-accordion-content-height) } to { height: 0 }` | `0.2s ease-out` | Retracts accordion heights on item collapse. |
| `drawLine` | `0% { stroke-dashoffset: 200; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 1; }` | `1.4s ease-in-out 0.4s` | Animates the drawing of the green highlight line under the hero heading. |
| `barUp` | `to { transform: scaleY(1); }` | `0.8s cubic-bezier` | Vertically scale charts inside dynamic widgets. |

### Page Transitions & Stagger Sequences
- **Framer Motion Viewport Triggers:** Elements fade in and slide up when scrolling into viewport using `initial={{ opacity: 0, y: 20 }}` and `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}` to avoid repetitive animations.
- **Stagger Effect:** Grid items staggered sequentially using index offsets: `transition={{ delay: index * 0.06 }}`.
- **Interactive Micro-actions:**
  - FAQ accordion items expand automatically on mouse hover using the `onMouseEnter={() => setOpenValue("faq-index")}` event.
  - Navbar resources menu expands dynamically on mouse hover using a 150ms open delay and collapses using a 200ms delay to prevent accidental mouse-outs.
  - Mobile reCAPTCHA badge expands dynamically on touchscreen tap, checking pointer configurations (`(hover: hover) and (pointer: fine)`).

---

# 3. Code Standards & Architecture Guidelines

## 3.1 Directory Structure
The workspace follows a strict, modular hierarchy to keep concerns separated:
- **`src/assets/`**: Vector graphics (SVGs) and optimized images (WebP format). Kept in one central folder to simplify lazy-load routing.
- **`src/components/`**: Modular interface blocks.
  - `src/components/features/**: Holds visual presentation layers, code simulations, and analytics mock charts shown in the features grid.
  - `src/components/seo/**: Core search ranking hooks (`CanonicalManager`, `RobotsManager`, `PageSeo`).
  - `src/components/ui/**: Raw Shadcn components mapped directly to Radix.
- **`src/hooks/`**: Shared custom hooks (`useRecaptcha` for reCAPTCHA integration, `use-toast` for toast notifications).
- **`src/lib/`**: Injected configuration tools (`utils.ts` for styling utility imports).
- **`src/pages/`**: Absolute routes (`Index`, `TermsOfUse`, `PrivacyPolicy`, `NotFound`).
- **`src/test/`**: Unit test configurations.
- **`public/`**: Assets bypassed by the bundler (e.g. self-hosted fonts, .htaccess, _headers, robots.txt, sitemap).

## 3.2 Responsive Design Guidelines
- **Mobile-First Approach:** All structural styling starts with base layout utilities, and scales upward utilizing Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
- **Breakpoint Configuration:**
  - `sm`: `640px` (phone layout bounds)
  - `md`: `768px` (marks navigation collapse and sidebar transition checks)
  - `lg`: `1024px` (feature layout conversion point from scroll list to side-by-side grids)
  - `xl`: `1280px`
  - `2xl`: `1536px`
- **Pointer/Hover Safety:** Interactive hover states are wrapped inside `@media (hover: hover) and (pointer: fine)` queries to prevent sticky touch-hover highlights on mobile devices.

## 3.3 Clean Code & Styling Rules
- **Color Variables Consistency:** Ad-hoc styling values (hex/rgb) are banned inside TSX layouts. All theme variables must reference colors via standard Tailwind classes mapped to HSL custom properties (e.g., `text-muted-foreground`, `bg-card`).
- **Performance Optimization:**
  - Large assets must declare explicit dimensions, responsive `srcSet`/`sizes` attributes, and prioritize fetching using `fetchpriority="high"` on critical viewport elements (like hero banners).
  - Heavy widgets or modals must be lazy-loaded using `React.lazy` and wrapped in `<Suspense>` stubs.
- **Form Architectures:**
  - Form validation is strictly typed using Zod schemas. Inline HTML validation overrides are avoided.
  - Verification tokens (reCAPTCHA v3) must be parsed dynamically through a centralized `useRecaptcha` hook.
