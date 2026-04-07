# Component Architecture

## Component Hierarchy

```
App
├── Navbar                    (global — always visible)
├── Home                      (page — content area)
│   ├── HeroSection
│   ├── PopularBrands
│   ├── ReviewStats
│   ├── BuyerProtection
│   ├── WatchCatalog
│   └── Testimonials
└── Footer                    (global — always visible)
```

---

## Component Categories

### Global Components (`src/components/`)

Shared across all pages. Imported via barrel export.

| Component | File | State | Props |
|-----------|------|-------|-------|
| `Navbar` | `components/Navbar/Navbar.jsx` | `menuOpen` (boolean) | None |
| `Footer` | `components/Footer/Footer.jsx` | None | None |

### Page Components (`src/pages/`)

Top-level route views. Each page gets its own folder.

| Page | File | Description |
|------|------|-------------|
| `Home` | `pages/Home/Home.jsx` | Landing page — orchestrates 6 sections |
| `Shop` | `pages/Shop/Shop.jsx` | Product catalog (placeholder) |
| `About` | `pages/About/About.jsx` | Company info (placeholder) |
| `Contact` | `pages/Contact/Contact.jsx` | Support page (placeholder) |

### Section Components (`src/pages/Home/sections/`)

Page-specific sections. Only used within the Home page.

| Section | File | State | Data |
|---------|------|-------|------|
| `HeroSection` | `sections/HeroSection.jsx` | None | Inline JSX |
| `PopularBrands` | `sections/PopularBrands.jsx` | None | `brands` array (10 items) |
| `ReviewStats` | `sections/ReviewStats.jsx` | None | Inline JSX + 4 image imports |
| `BuyerProtection` | `sections/BuyerProtection.jsx` | None | Inline JSX + 1 image import |
| `WatchCatalog` | `sections/WatchCatalog.jsx` | None | `watchCatalog` array (2 brands, 8 models) + 8 image imports |
| `Testimonials` | `sections/Testimonials.jsx` | None | Inline JSX |

---

## Data Patterns

### Static Data in Components

Data is currently defined as constants within component files:

**PopularBrands** — brand name array:
```js
const brands = ['Rolex', 'Patek Philippe', 'Audemars Piguet', ...]
```

**WatchCatalog** — structured catalog data:
```js
const watchCatalog = [
  {
    brand: 'Rolex',
    models: [
      { name: 'Datejust', img: rolex1 },
      { name: 'Submariner', img: rolex2 },
      ...
    ]
  },
  ...
]
```

As the app grows, these can be moved to `src/constants/` or fetched from an API via `src/services/`.

---

## Styling Approach

### CSS per Component
Every component has a co-located CSS file:

```
Navbar/
  Navbar.jsx    ← imports → Navbar.css
  Navbar.css
```

### No CSS Modules or CSS-in-JS
Plain CSS with class-based selectors. Class names are descriptive and scoped by convention (e.g. `.hero-section`, `.catalog-card`).

### Global Styles
- `index.css` — resets, CSS variables, font, global `a` and `img` rules
- `App.css` — `.app` flex container

### Responsive CSS
Each section CSS file contains its own media queries for the 3 breakpoints (1024px, 768px, 480px). No shared responsive utility classes.

---

## Import Architecture

### Barrel Exports

Three barrel export files provide clean import paths:

```
src/components/index.js     → { Navbar, Footer }
src/pages/index.js          → { Home, Shop, About, Contact }
src/pages/Home/sections/index.js → { HeroSection, PopularBrands, ... }
```

### Import Flow

```
main.jsx
  └── App.jsx
        ├── import { Navbar, Footer } from './components'
        ├── import { Home } from './pages'
        └── import './styles/App.css'

Home.jsx
  └── import { HeroSection, PopularBrands, ... } from './sections'
```

### Asset Imports
Images are imported directly in the components that use them, leveraging Vite's asset handling for cache-busting and optimization:

```jsx
import watchesBg from '../../../assets/images/watches.jpg'
```

---

## State Management

### Current State
Minimal — only the `Navbar` uses `useState` for the mobile menu toggle:

```jsx
const [menuOpen, setMenuOpen] = useState(false)
```

All other components are stateless, rendering static content.

### Future State Considerations
As the app grows, the following state will likely be needed:

| Feature | Suggested Approach |
|---------|--------------------|
| Auth state | React Context (`src/context/AuthContext.jsx`) |
| Cart | React Context + localStorage |
| Search | URL params + component state |
| Product data | API calls via `src/services/` |
| Theme | CSS variables + Context (if dark mode needed) |

---

## Rendering Flow

```
1. main.jsx → renders <App /> into #root
2. App.jsx → renders Navbar + Home + Footer in a flex column
3. Home.jsx → renders 6 section components in order
4. Each section → renders its own JSX + imports its own CSS
5. Vite HMR → updates individual modules on save
```

The app currently has no routing. All content renders on a single page. When React Router is added, `App.jsx` will wrap page content in `<Routes>` while keeping `Navbar` and `Footer` persistent.
