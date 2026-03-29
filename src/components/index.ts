// Components (same folder)
export { default as MediumCard } from "./MediumCard.astro";
export { default as Tag } from "./Tag.astro";
export { default as Button } from "./Button.astro";
export { default as Footer } from "./Footer.astro";
export { default as Navigation } from "./Navigation.astro";
export { default as SmallCard } from "./SmallCard.astro";
export { default as PageNav } from "./PageNav.astro";


// Layouts (go up one level first)
export { default as Hero } from "../layouts/Hero.astro";
export { default as PageLayout } from "../layouts/PageLayout.astro";
export { default as BaseLayout } from "../layouts/BaseLayout.astro";


// ProjectLayouts (inside layouts)
export { default as ProjectGrid } from "../layouts/ProjectLayouts/ProjectGrid.astro";
export { default as Overview } from "../layouts/ProjectLayouts/Overview.astro";
export { default as Default } from "../layouts/ProjectLayouts/Default.astro";
export { default as Showcase } from "../layouts/ProjectLayouts/Showcase.astro";