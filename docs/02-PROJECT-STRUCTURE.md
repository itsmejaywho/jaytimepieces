# Project Structure

## Directory Layout

```
jtimepieces/
├── docs/                          # Documentation
│   ├── 01-PROJECT-OVERVIEW.md
│   ├── 02-PROJECT-STRUCTURE.md
│   ├── 03-FEATURES-GUIDE.md
│   ├── 04-DESIGN-SYSTEM.md
│   └── 05-COMPONENT-ARCHITECTURE.md
├── public/                        # Static assets served as-is
├── src/
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles, CSS variables, resets
│   ├── App.jsx                    # Root component (Navbar + Page + Footer)
│   ├── assets/
│   │   └── images/                # All image assets
│   │       ├── logo.png           # Brand logo
│   │       ├── watches.jpg        # Hero background
│   │       ├── watch.jpg          # Buyer protection panel
│   │       ├── hero.png           # Additional hero asset
│   │       ├── buyer-rating.png   # Review stat icon
│   │       ├── love-my-watch.svg  # Review stat icon
│   │       ├── handshake.svg      # Review stat icon
│   │       ├── dealer.svg         # Review stat icon
│   │       ├── rolex1.webp        # Rolex Datejust
│   │       ├── rolex2.webp        # Rolex Submariner
│   │       ├── rolex3.webp        # Rolex Day-date
│   │       ├── rolex4.webp        # Rolex GMT-Master II
│   │       ├── patek1.webp        # Patek Philippe Nautilus
│   │       ├── patek2.webp        # Patek Philippe Aquanaut
│   │       ├── patek3.webp        # Patek Philippe Calatrava
│   │       └── patek4.webp        # Patek Philippe Complications
│   ├── components/                # Shared/global components
│   │   ├── index.js               # Barrel export
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── constants/                 # App-wide constants (reserved)
│   ├── context/                   # React Context providers (reserved)
│   ├── hooks/                     # Custom React hooks (reserved)
│   ├── layouts/                   # Layout wrappers (reserved)
│   ├── pages/                     # Route-level page components
│   │   ├── index.js               # Barrel export
│   │   ├── Home/
│   │   │   ├── Home.jsx           # Page orchestrator
│   │   │   ├── Home.css           # Minimal wrapper styles
│   │   │   └── sections/          # Home page sections
│   │   │       ├── index.js       # Barrel export
│   │   │       ├── HeroSection.jsx
│   │   │       ├── HeroSection.css
│   │   │       ├── PopularBrands.jsx
│   │   │       ├── PopularBrands.css
│   │   │       ├── ReviewStats.jsx
│   │   │       ├── ReviewStats.css
│   │   │       ├── BuyerProtection.jsx
│   │   │       ├── BuyerProtection.css
│   │   │       ├── WatchCatalog.jsx
│   │   │       ├── WatchCatalog.css
│   │   │       ├── Testimonials.jsx
│   │   │       └── Testimonials.css
│   │   ├── Shop/
│   │   │   └── Shop.jsx           # Placeholder
│   │   ├── About/
│   │   │   └── About.jsx          # Placeholder
│   │   └── Contact/
│   │       └── Contact.jsx        # Placeholder
│   ├── services/                  # API service layer (reserved)
│   ├── styles/
│   │   └── App.css                # App wrapper styles
│   └── utils/                     # Utility functions (reserved)
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Conventions

### File Naming
- **Components**: PascalCase — `Navbar.jsx`, `HeroSection.jsx`
- **Styles**: Matching component name — `Navbar.css`, `HeroSection.css`
- **Barrel exports**: `index.js` in each directory for clean imports
- **Images**: kebab-case — `buyer-rating.png`, `love-my-watch.svg`

### Import Patterns
```jsx
// Barrel imports for components and pages
import { Navbar, Footer } from './components'
import { Home } from './pages'

// Section imports within a page
import { HeroSection, PopularBrands } from './sections'

// Direct asset imports
import logo from '../../assets/images/logo.png'
```

### Component Organization
Each component gets its own folder containing:
- `ComponentName.jsx` — React component
- `ComponentName.css` — Scoped styles

Page-specific sections live inside the page folder under `sections/` to keep page logic self-contained.

### Reserved Directories
Folders marked **(reserved)** exist in the structure for future use:
- `constants/` — Color tokens, brand lists, config values
- `context/` — Auth context, cart context, theme context
- `hooks/` — useLocalStorage, useMediaQuery, etc.
- `layouts/` — MainLayout with Navbar + Footer wrapping page content
- `services/` — API calls, auth service, Supabase client
- `utils/` — Formatters (currency, dates), validators
