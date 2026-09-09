---
name: "Nimokit"
description: "Cool, modern tools presented through rounded app surfaces and clear bilingual typography."
colors:
  ground: "#f5f7fa"
  paper: "#fff"
  ink: "#182334"
  muted: "#5c6879"
  line: "#dce2eb"
  blue: "#145bdd"
  blue-deep: "#1043a4"
  mint: "#0f766e"
  coral: "#b7452d"
  glass: "rgba(255,255,255,.74)"
  blue-wash: "#e9f0ff"
  mint-wash: "#e3f1ec"
  coral-wash: "#faeee8"
  logo-line: "#fff"
  dark-ground: "#101722"
  dark-paper: "#1d2736"
  dark-ink: "#edf2fa"
  dark-muted: "#abb7c9"
  dark-line: "#344153"
  dark-blue: "#94baff"
  dark-blue-deep: "#d4e3ff"
  dark-mint: "#8bdbcd"
  dark-coral: "#ffb29e"
  dark-glass: "rgba(29,39,54,.84)"
  dark-blue-wash: "#222f48"
  dark-mint-wash: "#1a3636"
  dark-coral-wash: "#3b2a29"
  dark-logo-line: "#101722"
  button-fill: "#145bdd"
  button-hover: "#104bbd"
  button-text: "#fff"
  paper-gold: "#aa822f"
  dark-paper-gold: "#dfc986"
  book-start: "#2861be"
  book-end: "#164394"
  book-text: "#ecf3ff"
  book-gold: "#d4c69c"
  answer-icon-start: "#629eff"
  answer-icon-end: "#235dd9"
  sheet-icon-start: "#4fc9a5"
  sheet-icon-end: "#087862"
  lens-icon-start: "#ffa17e"
  lens-icon-end: "#cb5234"
  aura-blue: "#cbdffc"
  aura-mint: "#d8ede9"
typography:
  display:
    fontFamily: "Manrope, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "clamp(46px,5.6vw,76px)"
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.04em"
  product-title:
    fontFamily: "Manrope, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "37px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.03em"
  product-promise:
    fontFamily: "Manrope, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-.02em"
  body:
    fontFamily: "Manrope, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.5
  demo-quote:
    fontFamily: "Manrope, 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "24px"
    fontWeight: 650
    lineHeight: 1.27
    letterSpacing: "-.04em"
  book-art:
    fontFamily: "Georgia, 'Songti SC', serif"
    fontSize: "35px"
    fontWeight: 400
    lineHeight: 1.05
rounded:
  demo: "12px"
  icon-control: "14px"
  button: "16px"
  related-card: "18px"
  app-icon: "19px"
  book: "20px"
  header: "22px"
  dock: "25px"
  preview: "28px"
  stage-rear: "32px"
  art: "36px"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "40px"
  space-5: "64px"
  space-6: "104px"
components:
  button-primary:
    backgroundColor: "{colors.button-fill}"
    textColor: "{colors.button-text}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  link-text:
    textColor: "{colors.blue}"
  button-icon:
    textColor: "{colors.ink}"
    rounded: "{rounded.icon-control}"
  button-demo-answer:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue-deep}"
    rounded: "{rounded.demo}"
  button-demo-sheet:
    backgroundColor: "{colors.mint-wash}"
    textColor: "{colors.mint}"
    rounded: "{rounded.demo}"
  button-demo-lens:
    backgroundColor: "{colors.coral-wash}"
    textColor: "{colors.coral}"
    rounded: "{rounded.demo}"
  navigation:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.header}"
    padding: "0 22px"
    height: "68px"
  app-dock:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.dock}"
    padding: "9px 12px"
  related-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.related-card}"
    padding: "18px 22px"
  book-cover:
    textColor: "{colors.book-text}"
    rounded: "{rounded.book}"
    padding: "29px 26px 20px"
    width: "215px"
    height: "288px"
---

# Design System: Nimokit

## Overview

**Creative North Star: "The iOS App Switcher"**

Nimokit uses the confirmed iOS-inspired direction: cool porcelain, clear ink, rounded app objects and translucent navigation. Manrope gives the interface a compact modern voice; the system font fallbacks keep Chinese content native and readable. Generous space and a restrained three-color palette let the products remain distinct.

Depth belongs to the app surfaces and their surrounding atmosphere. Product illustrations are original HTML/CSS and inline SVG. The blue answer-book artwork is a flat cover graphic with a simple rotation; it has no simulated page edges, spine or physical perspective. No raster imagery ships in this implementation.

**Key Characteristics:**

- Cool porcelain and ink with blue, mint and coral product accents.
- Translucent navigation and app dock; soft layered preview surfaces.
- Rounded geometry, clear type hierarchy and generous responsive spacing.
- Local licensed Manrope with Chinese system-font fallbacks.
- Keyboard-visible focus, bilingual routes, light/dark appearance and reduced-motion support.

## Colors

Cool porcelain and clear ink establish the neutral field; blue, mint and warm coral distinguish the products. Frontmatter values are normative and are extracted from `assets/style.css`; the `dark-` entries record the actual `data-theme=dark` overrides.

### Primary

- **Clear Blue** (`blue`, `blue-deep`, `blue-wash`): identity mark, text links, focus rings and the answer-product surface. The separate `button-fill`, `button-hover` and `button-text` entries describe the fixed primary-action colors in both themes.
- **Answer Icon Blue** (`answer-icon-start`, `answer-icon-end`): the diagonal app-icon gradient. `book-start`, `book-end`, `book-text` and `book-gold` belong only to the flat cover artwork.

### Secondary

- **Quiet Mint** (`mint`, `mint-wash`): SheetDelta identity, changed sample cells and comparison actions. The corresponding icon gradient uses `sheet-icon-start` and `sheet-icon-end`.

### Tertiary

- **Warm Coral** (`coral`, `coral-wash`): ShipLens identity, sample overflow outline and inspection action. The icon gradient uses `lens-icon-start` and `lens-icon-end`.

### Neutral

- **Cool Porcelain** (`ground`): page canvas; **Paper** (`paper`): preview, selected dock item and inset surface.
- **Clear Ink** (`ink`): principal text and schematic device borders; **Quiet Slate** (`muted`): supporting copy, labels and captions.
- **Soft Divider** (`line`): tables, mock browser chrome and section dividers.
- **Frosted Glass** (`glass`): sticky header, dock and rear preview plane; `logo-line` makes the mark legible in each theme.
- `paper-gold` and its dark override color the answer-preview sun; `aura-blue` and `aura-mint` are decorative ambient colors. The aura opacity drops from .85 to .14 in dark mode.

## Typography

**Display and body:** local Manrope variable font (weights 400–800), followed by PingFang SC, Microsoft YaHei and sans-serif. The local WOFF2 uses `font-display: swap`; its license ships in `assets/FONT-LICENSE.txt`.

**Artwork exception:** Georgia / Songti SC / serif appears only on the flat answer-book cover. There is no distinct monospace UI face; table numbers use tabular numerals.

### Hierarchy

- **Display:** the frontmatter `display` role is the base hero scale. At viewport widths above 1450px it is 80px; below 1100px it is 58px, below 800px 66px, and below 600px `clamp(40px,10.7vw,60px)` with 1.13 line-height.
- **Headline:** section introductions use `headline`; other section titles range from 40px to 42px. Product detail titles use 54px, and text-page titles use 58px before responsive reductions.
- **Product title:** real h3 product names use `product-title`; the promotional sentence is a separate `product-promise` paragraph. At 600px the title is 34px and the promise 22px.
- **Body:** base prose uses `body`; the hero introduction is 17px / 1.8, product descriptions 15px / 1.8 and reading-page prose 16px / 1.9. Secondary copy uses muted color.
- **Label:** primary controls use `label`. Navigation is 14px / 600; compact preview captions and dock labels are 11px, and demo buttons 12px / 650.
- **Demo quote:** `demo-quote` centers the sample answer with a maximum width of 340px. It does not replace the page's actual h1.

Headings balance text; h1 and h2 have tighter tracking than body text. Preserve actual semantic headings instead of styling promotional paragraphs as headings.

## Layout

The shared content width is at most 1200px with 48px side gutters. Gutters become 32px at 1100px and 20px at 600px. The defined spacing scale is recorded in frontmatter; existing layout also uses contextual values, so the scale is not a claim that every measurement is a multiple of eight.

The homepage hero uses a two-column grid (`1fr 1.02fr`) and a 40px gap. Below 800px it stacks, with the preview limited to 530px. The preview shell is 365px tall by default, 375px above 1450px, and 355px below 600px. The stage remains a composed preview, dock, destination link and sample disclaimer.

Product rows use two equal columns, a 90px gap and 125px bottom spacing; alternate rows reverse the story and illustration. At 600px they become a single column in DOM order, with 28px gaps and 72px row spacing. The product art is 420px tall at base, 380px at 1100px, 330px at 800px, and 360px at 600px.

Product detail content uses a two-column reading grid and a two-column related-product area, both becoming one column at 600px. About and privacy pages cap the reading container at 830px; lead text caps at 760px. The footer changes to one column at 800px and wraps its links on narrow screens.

The header stays 16px from the top at base and 10px on small screens. At 600px its About and GitHub shortcuts hide, while the product link, locale switch and theme control remain. About stays available in the footer. Existing control minimums are 44px for compact controls, 50px for the main CTA and 46px for product-row CTAs.

## Elevation & Depth

This is a selectively layered system. Broad page areas remain open and mostly flat. Diffuse shadows and translucent fills lift the navigation, dock and preview; tonal product-art backgrounds separate illustrations without heavy borders. Glass uses backdrop blur (header 24px with 145% saturation, dock 20px).

### Shadow Vocabulary

- **Preview and object ambient:** `0 28px 66px -28px rgba(34,58,101,.35)`; dark mode uses `0 28px 66px -28px rgba(0,0,0,.75)` via `--shadow`.
- **Header:** `0 8px 32px -18px rgba(28,48,80,.26)`.
- **Dock:** `0 18px 32px -20px rgba(32,58,91,.42)`.
- **Floating note:** `0 14px 35px -20px rgba(29,50,86,.45)`.
- **App icon inset:** `inset 0 1px 1px rgba(255,255,255,.6), inset 0 -5px 10px rgba(0,0,0,.12)`.
- **Large brand mark:** `filter: drop-shadow(0 22px 18px rgba(20,91,221,.13))`.

The preview begins at a slight rotation and straightens on hover or focus within. The CSS sheet and browser illustrations use perspective; the answer-book cover uses only a flat rotation, without a physical-book treatment.

## Shapes

The frontmatter radius names describe the implemented component shapes. Compact demo controls use 12px, primary buttons 16px, app icons 19px and broad product-art panels 36px. The preview uses the shared 28px radius, reducing to 24px on mobile; product art and closing surfaces reduce to 28px. Header and dock corners similarly tighten for small screens.

App symbols are rounded squares with inline stroked SVGs. Circles are limited to small indicators and browser chrome. Table and browser rules are thin divider-color strokes. The cover is a 20px rounded rectangle with a blue gradient; it has no spine, paper edge or perspective geometry.

## Components

### Primary actions and text links

Primary actions are clear blue with white text, 16px corners and 13px by 22px padding. Hover darkens the fill and raises the control 2px; product-row actions are slightly smaller. Text links use theme-aware blue and an arrow or external-link SVG, with an underline on hover. All focusable controls use a 3px blue outline with a 5px offset. There is no extra active animation. Generic disabled buttons retain their layout at .6 opacity with a default cursor.

### Icon controls and navigation

The translucent sticky header combines the Nimokit mark, simple text navigation, GitHub, language and theme controls. Icon and language targets are at least 44px square, with 14px corners and a blue-wash hover. The theme button is revealed only when JavaScript is active; it updates its accessible label as the theme changes. Saved appearance overrides the system preference; English and Chinese use separate routes.

### App dock

The dock uses 25px corners, glass fill and a soft shadow. Each tab contains a gradient app icon and a visible product label. Selected tabs use paper fill and ink text; other labels are muted. An icon rises 3px on hover over 320ms using the shared easing. Arrow keys, Home and End change selection through a roving tab stop; selection updates the visible panel and its actual product destination.

### Sample previews and demo controls

The answer preview uses a paper-to-blue-wash gradient, a gold sun and centered sample text. Its paper demo button changes the bundled quote. The SheetDelta preview is a semantic table with sample filenames; comparison highlights one mint row and reports the quantity change. ShipLens uses a miniature browser schematic; inspection reveals a coral overflow outline. Result text is announced politely. Each demo action has a 44px minimum height, 12px corners and a product-colored treatment. These are illustrative interactions, not file upload or live inspection tools.

Preview entry lasts 450ms with the shared `cubic-bezier(.16,1,.3,1)` easing; it fades from .75, rises 8px and removes a 2px blur. Reduced-motion preference disables animations, transitions, smooth scrolling, preview tilt and hover lifts.

### Related-product links and product artwork

Related-product links pair a 45px app icon with name, muted category and an arrow on a paper surface, using 18px corners and 18px by 22px padding. They retain the common focus outline and do not add an invented hover elevation.

Product artwork uses real HTML/CSS and inline SVG. The blue flat cover, sample spreadsheet and browser/device illustration are decorative and hidden from assistive technology; their adjacent product names and prose carry the meaning. Sample-data and capability captions remain visible. No input fields, chips, dialogs or payment components are implemented.

## Do's and Don'ts

### Do:

- Do use the existing semantic CSS variables so surfaces and text follow the active theme.
- Do preserve blue, mint and coral as the three product identities.
- Do keep product names as real h3 headings, with promotional supporting copy in paragraphs.
- Do retain at least 44px targets for the navigation, icon, demo and text-link controls documented here.
- Do label sample data and capability illustrations; the homepage demos use bundled sample content.
- Do keep the answer-book illustration a flat CSS cover graphic and retain the shipped font license.

### Don't:

- Don't replace the confirmed cool iOS-inspired visual vocabulary with an unrelated aesthetic.
- Don't turn every section into a bordered card; use the implemented whitespace and alternating product rows.
- Don't add a physical book spine, page-edge shading or perspective to the flat cover illustration.
- Don't apply dark-theme link blue to primary-button backgrounds; primary buttons retain their fixed blue fill and white text.
- Don't add invented testimonials, metrics, inputs, payment states or unsupported product promises.
- Don't remove the reduced-motion behavior, visible focus treatment or meaningful heading structure.
