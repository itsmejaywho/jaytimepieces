# Design System

## Color Palette

### CSS Custom Properties

Defined in `src/index.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--primary` | `#1a1a2e` | Dark navy — text headings, primary UI |
| `--secondary` | `#16213e` | Deep navy — darker variant |
| `--accent` | `#c9a96e` | Gold — hover states, brand accent, links |
| `--text` | `#333` | Body text |
| `--text-light` | `#666` | Secondary/muted text |
| `--bg` | `#fff` | Page background |
| `--bg-light` | `#f8f8f8` | Subtle background contrast |

### Extended Palette (used directly in components)

| Color | Hex | Usage |
|-------|-----|-------|
| Navy panel | `rgba(26, 37, 60, 1)` | Buyer protection left panel |
| Card background | `#f0efed` | Search bar, brand pills, catalog cards, avatar |
| Card border | `#f4f4f4` | Review stat card borders |
| Subtle border | `#e0e0e0` | Testimonial cards, footer divider, watch list divider |
| Footer background | `#f5f5f7` | Footer section |
| Gold stars | `#f5a623` | Hero star rating |
| Trustpilot green | `#00b67a` | Testimonial star rating |
| Status green | `#a3e635` | Footer operational status dot |
| Overlay | `rgba(0, 0, 0, 0.4)` | Mobile menu backdrop |

---

## Typography

### Font Stack

```css
font-family: 'Google Sans Flex', 'Segoe UI', system-ui, -apple-system, sans-serif;
```

Primary font is Google Sans Flex loaded via Google Fonts, with system fallbacks.

### Font Sizes

| Element | Size | Weight |
|---------|------|--------|
| Hero heading | `2.8rem` → `1.4rem` (mobile) | 400 (italic) |
| Section headings | `1.7rem` – `1.8rem` | 600–700 |
| Sub-headings | `1.3rem` | 700 |
| Body text | `1rem` | 400 |
| Small text | `0.85rem` – `0.9rem` | 400 |
| Micro text | `0.8rem` | 400 |

### Special Typography

- **Hero heading**: Georgia/Times New Roman serif, italic, normal weight
- **All other text**: Google Sans Flex (sans-serif)
- **Brand pills**: 0.9rem, color transitions on hover
- **Stat numbers**: 1.2rem bold

---

## Spacing & Layout

### Container Width
All content sections use `max-width: 1200px` with `margin: 0 auto` for centering.

### Section Padding
| Section | Desktop | Tablet (768px) | Mobile (480px) |
|---------|---------|----------------|----------------|
| Hero | `2rem 4rem` | `2rem 1.5rem` | `1.5rem 1rem` |
| Brands | `2.5rem 2rem 3rem` | `2rem 1rem` | — |
| Reviews | `2.5rem 2rem` | `2rem 1rem` | — |
| Protection | `2rem` | `1rem` | — |
| Catalog | `1.5rem 2rem` | `1.5rem 1rem` | — |
| Testimonials | `5rem 2rem 4rem` | `2rem 1rem` | — |

### Grid Layouts
| Component | Desktop | Tablet (768px) | Mobile (480px) |
|-----------|---------|----------------|----------------|
| Brands | 5 columns | 2 columns | 1 column |
| Review cards | flex row | 2×2 wrap (1024px) | 1 column |
| Catalog | 4 columns | 2 columns | 1 column |
| Watch list | 4 columns | 2 columns | 1 column |
| Testimonials | 3 columns | 1 column | — |

---

## Responsive Breakpoints

Three breakpoints are used consistently:

| Breakpoint | Target | Key Changes |
|------------|--------|-------------|
| `1024px` | Small desktop/large tablet | Review cards wrap 2×2, protection text shrinks |
| `768px` | Tablet | Grids collapse, hamburger menu appears, stacked layouts |
| `480px` | Mobile | Single column grids, reduced font sizes, compact padding |

---

## Interactive States

### Hover Effects
- **Brand pills**: Text color → `#c9a96e` (gold)
- **Footer links**: Text color → `#c9a96e`
- **Protection button**: Border color → `#c9a96e`
- **Watch images**: Scale to 1.1 over 1.5s ease-in-out
- **Auth link**: Text color → `#000`

### Transitions
- Color changes: `0.2s`
- Watch image scale: `1.5s ease-in-out`
- Mobile menu slide: `0.3s ease`
- Burger line animation: `0.3s`

---

## Borders & Radius

| Element | Radius | Border |
|---------|--------|--------|
| Search bar | `6px` | none |
| Brand pills | `6px` | none |
| Review cards | `10px` | `2px solid #f4f4f4` |
| Catalog cards | `10px` | none |
| Protection container | `20px` | none |
| Testimonial cards | `12px` | `1px solid #e0e0e0` |
| Protection button | `10px` | `1px solid #fff` |
| Footer status badge | `20px` | `1px solid #e0e0e0` |
| Author avatars | `50%` (circle) | none |

---

## Scrollbar

Hidden globally for a cleaner look:

```css
* {
  scrollbar-width: none;           /* Firefox */
}
*::-webkit-scrollbar {
  display: none;                   /* Chrome, Safari, Edge */
}
```

---

## Image Handling

- All images use `max-width: 100%` and `display: block` globally
- Catalog images: `object-fit: contain` inside fixed-height wrappers (280px desktop, 200px tablet)
- Review icons: `max-height: 110px` inside 140px flex containers
- Background images: `background-size: cover; background-position: center`
