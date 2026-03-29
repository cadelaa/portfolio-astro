Work in progress

![Commits](https://img.shields.io/github/commit-activity/t/cadelaa/portfolio-astro?label=Total%20Commits&style=flat-square&color=blue)
![Last Commit](https://img.shields.io/github/last-commit/cadelaa/portfolio-astro?style=flat-square&color=green)
![Contributors](https://img.shields.io/github/contributors/cadelaa/portfolio-astro?style=flat-square&color=orange)
![Repo Size](https://img.shields.io/github/repo-size/cadelaa/portfolio-astro?style=flat-square&color=purple)
[![📊 Stats](https://img.shields.io/badge/📊-View%20Full%20Stats-informational?style=flat-square)](./STATS.md)

> Rebuilding my Framer portfolio, [Mitchell Zeller,](https://mitchellzeller.framer.website/) in Astro

---

## 📊 Repository Stats

> Detailed line-change stats (added / removed / net) are tracked automatically.
> View the full breakdown → **[STATS.md](./STATS.md)**

---

# Changelog

12/01/2026 v0.1

- started the project
- Setting up structure, styles, readme
- started to mess with layouts & components
- Started to create the project card component
- Starting to build out the layout of the homepage with some placeholder elements

---

13/01/2026 v0.2

- Updated typography from inter (google fonts) to inter display from rsms
- Removed margin from typography styles, added negative letter spacing

---

14/01/2026 v0.3

- Created and styled tag component
- Replaced placeholder tag in Card component with imported Tag component
- Edited card component to use the tag component, and refined the hover interaction, edited image layout
- Edited typography styles, specifically removed margin, changed line height
- Added spacing.css & radius.css to create variables sooner rather then later

---

15/01/2026 v0.4

- Renamed existing Card.astro to MediumCard.astro & added new SmallCard.astro component
- Edited and refined Button.astro which now has a primary and secondary style
- Better naming for classes in Tag.astro component
- Other minor changes

---

16/01/2026 v0.5

- Updated MediumCard component with the ability to change its hover color, and added the
  measurable metric icon and tag which can be shown or hidden in each card
- Added Material Symbols to the BaseLayout to ensure icons can be used in layouts and components
- SmallCard component is now been built out and is either finished or nearly there
- Added a brief amount of blue primitives & color variables for testing
- Added default style for material icons to typography.css

---

17/01/2026 v0.6

- Created and added footer component to be used in all pages
- Added the ability to change tag background on hover for the MediumCard individually
- Updated card info on index.astro
- Added variables to primitives.css & colors.css
- Added GitHub logo & placeholder linkedin logo

---

19/01/2026 v0.7

- Started to create the navigation bar, and import/add it to index

---

20/01/2026 v0.8 - Navigation update 1

- Added image assets for the MediumCards
- Setup navigation from SmallCards & Navigation to new (currently placeholder) pages
- Adjusted MediumCard to handle the images correctly, and added new props to set the alt of the image/s
- Set scroll behaviour in BaseLayout (in advance for project pages)
- Working social links for navigation bar & footer

---

21/01/2026 v0.9 - Navigation update 2

- Added placeholder project pages
- Added github and linkedin logos
- Further refinements to the navigation & footer bars
- Added navigation from project cards to the respective placeholder pages

---

23/01/2026 v1.0

- Updated card to have a grayscale effect on hover
- Updated icon sizes in navigation bar
- Removed unused photo placeholder text in index.astro

---

27/01/2026 v1.1

- Updated button component to add disabled to props, adjusted padding, and typography class
- Added the ability to show and hide the logo and back button from the navigation for core pages and sub (project) pages
- Updated navigation component props on all pages & updated classes styles
- Added a spacing style
- Updated typography H4 font size
- Added heading to all project pages, and some placeholder titles to other pages
- Added the ability to switch between the design & development page for Portfolio & Nexus

---

28/01/2026 v1.2

- Starting to build the project page layouts, probably going to make them components for reused ones across projects

---

30/01/2026 v1.3

- created folder for project page layouts, which I think at the moment will be effectively components because they get reused acroos project pages

---

31/01/2026 v1.4

- Minor change to default.astro
- Cleaned up the tag.astro component
- Built out the next project page layout, showcase, just needs the ability to set images

---

01/02/2026 v1.5

- Built out the Overview project page layout

---

02/02/2026 v1.6

- Cleaned up some issues in MediumCard.astro and Tag.astro, when hovered the tags in the card were not transitioning smoothly as intended

---

05/02/2026 v1.7

- Started to add responsiveness, currently homepage resizes (partially) correctly, except navigation bar
- MediumCard removes hover effects on mobile
- SmallCard removes hover effects on mobile
- Moved or simply removed most hard coded inline styling
- Moved padding from components and layouts to PageLayout

---

12/02/2026 v1.8

- Moved images from assets to public
- Starting to add relevant content to the portfolio/design/ page
- Added a index.ts to the components folder to create one import for components on index.astro and all other pages

---

18/02/2026 v1.9

- Added pageNav component to give users the ability to navigate project pages sections

---

10/03/2026 v2.0

- Added dark theme colors
- Added dark light toggle button to Navigation.astro component
- Updated select variables in color.css

---

12/03/2026 v2.1

- Removed transitions from multiple components & layouts
- Added transition rule, which now only affects the theme toggle, rather then before when simply changing pages triggered the transitions
- re-added color transitions to the mediumcard.astro and smallcard.astro components
- Updated PageNav dark mode hover text color

---

13/03/2026 v2.2

- Updated Resume link
- Removed stats for now
- Updated how the site uses Material Icons, universal styling in typography.css with options to override in components
- Icons fill on hover, unless overrided
- Added fullViewport prop to PageLayout & BaseLayout
- Fixed .disabled styles not applying to Medium & Small card components
- Updated image structure, to better sort and reflect main navigation

## About Page changes/additions
- Built out the About page with an interactive canvas — draggable image cards arranged on an inner oval, 
  tag pills on an outer oval to filter by category, and an animated center label that updates on tag switch
- Cards animate in from below on tag switch and fade out on leave
- Fully responsive — oval layout on desktop/tablet, grid of pills with canvas below on mobile
- Tag and card data lives in `src/data/about.ts` — add new categories or cards without touching component code
- Placeholder text and image/s
- Added new prop, stats, mainly for games, but all other types can use it
- Utilizing correct content and images for Games section, so far
- Added border to image cards

---

16/03/2026 v2.3

- Added photography images,
- Added some photography street photography images
- Added active states for navigation

---

18/03/2026 v2.4

- Updated about.ts content, just need images of certain foods
- Added Work back to navigation with working active state

---

25/03/2026 v2.5

- Updated hero so its positioned at, start, rather then center
- Updated tag.astro component styles, bit cleaner
- Added new project layout, FeatureShowcase, still a work in progress, meant to only showcase mobile or desktop images/gifs of interactions for projects
- Added base color styling to overview.astro component layout, to ensure the colors change with light and dark mode toggling
- Added blank cards to the ideas page, to be updated
- Moved ideas.astro page from projects folder, to pages folder, will create an accompanying ideas folder in the future, same with currently working on and archived
- Updated the links for ideas, currently working on, and archived pages
- Updated component imports for ideas.astro page, now using a hero layout instead of hardcoded values
- Started to build out the Culina page, just the top head content, working on how I want to present the main body content
- Added Movies & TV Shows to the about section
- Fixed position: sticky, to work on project pages

---

29/03/2026

- Removed clamp, replaced with media queries, fixed responsiveness of the site. (need to adjust responsiveness on components)
- Fixed the light/dark toggle quickly changing when exiting a project page - homepage for example, not as jarring
- Removed FeatureShowcase, for and because of a updated, Showcase.astro layout now filling that role
- Cleaned up main navigation.astro component css styles
- Started to build out the project pages, for Nexus and DisasterHub
- Cleaned up, main naivgation.astro imports on most pages

+ Many more small edits/changes

- Added sticky on navigation, fallback styles for iOS

---