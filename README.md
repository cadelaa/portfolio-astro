> [!NOTE]
> This project is unfinished. It mainly needs the project page content to be added and or updated. The scope has also expanded slightly and specifically the `about.astro` has changed.

![Commits](https://img.shields.io/github/commit-activity/t/cadelaa/portfolio-astro?label=Total%20Commits&style=flat-square&color=blue)
![Last Commit](https://img.shields.io/github/last-commit/cadelaa/portfolio-astro?style=flat-square&color=green)
![Contributors](https://img.shields.io/github/contributors/cadelaa/portfolio-astro?style=flat-square&color=orange)
![Repo Size](https://img.shields.io/github/repo-size/cadelaa/portfolio-astro?style=flat-square&color=purple)

# Portfolio — Astro Rebuild

A ground-up rebuild of my Framer portfolio in Astro — a framework I picked up specifically 
for this project. Built to demonstrate front-end development capability alongside design, 
with a focus on component architecture, theming, and responsive layout.

---

# Changelog

**12/01/2026 — v0.1**
- Started the project
- Set up structure, styles, and readme
- Started experimenting with layouts & components
- Started building the project card component
- Began building out the homepage layout with placeholder elements

---

**13/01/2026 — v0.2**
- Updated typography from Inter (Google Fonts) to Inter Display from rsms
- Removed margin from typography styles, added negative letter spacing

---

**14/01/2026 — v0.3**
- Created and styled Tag component
- Replaced placeholder tag in Card component with imported Tag component
- Refined Card hover interaction and edited image layout
- Removed margin, changed line height in typography styles
- Added `spacing.css` & `radius.css` for early CSS variable setup

---

**15/01/2026 — v0.4**
- Renamed `Card.astro` to `MediumCard.astro` and added new `SmallCard.astro` component
- Edited and refined `Button.astro` — now has primary and secondary styles
- Improved class naming in `Tag.astro`

---

**16/01/2026 — v0.5**
- Updated MediumCard with configurable hover color, and toggleable metric icon and tag
- Added Material Symbols to BaseLayout for use across layouts and components
- SmallCard built out, finished or nearly there
- Added initial blue primitives & color variables for testing
- Added default Material Icons style to `typography.css`

---

**17/01/2026 — v0.6**
- Created footer component and added it to all pages
- Added per-card tag background on hover for MediumCard
- Updated card info on `index.astro`
- Added variables to `primitives.css` & `colors.css`
- Added GitHub logo and placeholder LinkedIn logo

---

**19/01/2026 — v0.7**
- Started building the navigation bar and added it to index

---

**20/01/2026 — v0.8 — Navigation Update 1**
- Added image assets for MediumCards
- Set up navigation from SmallCards & Navigation to placeholder pages
- Adjusted MediumCard image handling, added alt text props
- Set scroll behaviour in BaseLayout for project pages
- Working social links in navigation bar and footer

---

**21/01/2026 — v0.9 — Navigation Update 2**
- Added placeholder project pages
- Added GitHub and LinkedIn logos
- Further refinements to navigation & footer
- Added navigation from project cards to respective placeholder pages

---

**23/01/2026 — v1.0**
- Added grayscale hover effect to cards
- Updated icon sizes in navigation bar
- Removed unused photo placeholder text in `index.astro`

---

**27/01/2026 — v1.1**
- Updated Button component — added disabled prop, adjusted padding and typography class
- Added ability to show/hide logo and back button in navigation for core and project pages
- Updated navigation component props and class styles across all pages
- Added a spacing style
- Updated H4 font size
- Added headings to all project pages and placeholder titles to other pages
- Added design/development tab switcher for Portfolio & Nexus project pages

---

**28/01/2026 — v1.2**
- Started building project page layouts as reusable components

---

**30/01/2026 — v1.3**
- Created folder for project page layouts — effectively components since they're reused across project pages

---

**31/01/2026 — v1.4**
- Minor change to `default.astro`
- Cleaned up `Tag.astro`
- Built out Showcase layout — just needs configurable image support

---

**01/02/2026 — v1.5**
- Built out the Overview project page layout

---

**02/02/2026 — v1.6**
- Fixed smooth tag transition on MediumCard hover

---

**05/02/2026 — v1.7**
- Started adding responsiveness — homepage resizes correctly except navigation bar
- MediumCard and SmallCard remove hover effects on mobile
- Moved most hard-coded inline styles to `PageLayout`

---

**12/02/2026 — v1.8**
- Moved images from assets to public
- Started adding content to the portfolio/design page
- Added `index.ts` to components folder for cleaner imports

---

**18/02/2026 — v1.9**
- Added PageNav component for navigating project page sections

---

**10/03/2026 — v2.0**
- Added dark theme colors
- Added light/dark toggle button to `Navigation.astro`
- Updated select variables in `color.css`

---

**12/03/2026 — v2.1**
- Removed transitions from multiple components & layouts
- Scoped transitions to theme toggle only — previously triggered on page change
- Re-added color transitions to `MediumCard.astro` and `SmallCard.astro`
- Updated PageNav dark mode hover text color

---

**13/03/2026 — v2.2**
- Updated Resume link
- Removed stats temporarily
- Updated Material Icons usage — universal styling in `typography.css` with per-component overrides; icons fill on hover
- Added `fullViewport` prop to `PageLayout` & `BaseLayout`
- Fixed `.disabled` styles not applying to Medium & Small card components
- Updated image structure to better reflect main navigation
- Built out the About page — draggable image cards on an inner oval, tag pills on an outer oval to filter by category, animated center label on tag switch; cards animate in on switch and fade on leave; responsive (oval on desktop, grid + canvas on mobile); data lives in `src/data/about.ts`
- Added `stats` prop, mainly for games but available to all types
- Added correct content and images for the Games section
- Added border to image cards

---

**16/03/2026 — v2.3**
- Added street photography images
- Added active states for navigation

---

**18/03/2026 — v2.4**
- Updated `about.ts` content
- Added Work back to navigation with working active state

---

**25/03/2026 — v2.5**
- Updated hero alignment to `start`
- Cleaned up `Tag.astro` styles
- Added FeatureShowcase layout (WIP) for showcasing mobile/desktop interaction images
- Added base color styling to `overview.astro` for light/dark mode support
- Added blank cards to the Ideas page
- Moved `ideas.astro` from projects folder to pages folder
- Updated links for Ideas, Currently Working On, and Archived pages
- Updated `ideas.astro` to use a Hero layout instead of hardcoded values
- Started building out the Culina page — top content done, body layout in progress
- Added Movies & TV Shows to the About section
- Fixed `position: sticky` on project pages

---

**29/03/2026 — v2.6**
- Replaced clamp with media queries — fixed site-wide responsiveness (component responsiveness still in progress)
- Fixed jarring light/dark flash when navigating back to homepage from a project page
- Removed FeatureShowcase — merged into updated `Showcase.astro`
- Cleaned up `Navigation.astro` CSS and imports across most pages
- Started building out Nexus and DisasterHub project pages
- Added sticky navigation with iOS fallback styles
- Removed sticky hero on mobile for `index.astro`
- Started adding typography breakpoints in CSS for mobile
- Added early mobile navigation bar with dropdown/modal
- Added `ImageLayout` component — highly reusable, may replace Showcase
- Added slot to `default` layout component
- Various small edits and fixes
