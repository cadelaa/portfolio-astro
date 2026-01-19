# Rebuilding my Framer portfolio, [Mitchell Zeller,](https://mitchellzeller.framer.website/) in Astro

Work in progress

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