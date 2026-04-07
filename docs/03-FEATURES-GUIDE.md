# Features Guide

## Landing Page

The landing page is divided into 6 distinct sections, rendered top-to-bottom in the `Home` page component.

---

### 1. Hero Section

**File**: `src/pages/Home/sections/HeroSection.jsx`

A full-width banner with `watches.jpg` as the background image. Contains:

- **Tagline**: Italic serif heading — *"Find your dream watch on the leading marketplace for luxury watches."*
- **Star Rating**: 5 gold stars with `(100,724)` review count
- **Powered By**: Attribution line — "Powered by JayTimepieces."

The hero uses `min-height: 65vh` on desktop and scales down to `50vh` on tablet, `40vh` on mobile.

---

### 2. Popular Brands

**File**: `src/pages/Home/sections/PopularBrands.jsx`

A grid of 10 brand pills linking to filtered shop views:

```
Rolex  |  Patek Philippe  |  Audemars Piguet  |  Panerai  |  Breitling
Omega  |  Seiko           |  Cartier          |  IWC      |  Tudor
```

- **Layout**: 5-column grid → 2 columns at 768px → 1 column at 480px
- **Interaction**: Text turns gold (`#c9a96e`) on hover
- **Links**: Each pill links to `/shop?brand={name}`

---

### 3. Review Stats

**File**: `src/pages/Home/sections/ReviewStats.jsx`

Four trust-building cards with icons and statistics:

| Card | Icon | Stat | Description |
|------|------|------|-------------|
| 1 | `buyer-rating.png` | 4.8 out of 5 stars | 166,000 reviews worldwide |
| 2 | `love-my-watch.svg` | 9 Million | watch enthusiasts monthly |
| 3 | `handshake.svg` | Over 200,000 | choose Buyer Protection annually |
| 4 | `dealer.svg` | More than 25,000 | trustworthy sellers |

**Layout**: Horizontal flex → 2×2 wrap at 1024px → single column at 768px

---

### 4. Buyer Protection

**File**: `src/pages/Home/sections/BuyerProtection.jsx`

A split-panel feature section:

- **Left panel** (dark navy `rgba(26, 37, 60, 1)`):
  - Title: "JayTimepieces Buyer Protection"
  - 5 checkmark items about escrow payment security
  - CTA button: "Learn more about security on JayTimepieces"
- **Right panel**: `watch.jpg` background image

**Layout**: Side-by-side 50/50 → stacks vertically at 768px. Text scales down at 1024px to stay readable.

---

### 5. Watch Catalog

**File**: `src/pages/Home/sections/WatchCatalog.jsx`

Data-driven product grids for two brands:

**Rolex** (4 models):
- Datejust, Submariner, Day-date, GMT-Master II

**Patek Philippe** (4 models):
- Nautilus, Aquanaut, Calatrava, Complications

Each card shows:
- Product image with hover zoom (1.5s ease-in-out scale to 1.1)
- Brand name
- Model name

**Layout**: 4 columns → 2 columns at 768px → 1 column at 480px

The catalog data is defined as an array of brand objects within the component, making it easy to extend with additional brands.

---

### 6. Testimonials

**File**: `src/pages/Home/sections/Testimonials.jsx`

Two sub-sections separated by a border:

#### Watch Model List
A 4-column grid of 28 watch model links (7 per column), including:
- Omega Seamaster, Breitling Navitimer, Rolex Oyster Perpetual, Patek Philippe Grand Complications, and more

#### Customer Reviews
- **TrustScore header**: "Excellent" with 4.7/5 stars, 194,282 reviews
- **3 review cards** with:
  - Green Trustpilot-style stars (`#00b67a`)
  - Date (Yesterday / This week)
  - Quoted review text
  - Author avatar (initial letter), name, and country

**Layout**: Watch list 4 columns → 2 at 768px → 1 at 480px. Review cards 3 columns → 1 at 768px.

---

## Navigation

### Desktop Navbar
- Brand logo (55px height, links to `/`)
- Search bar with magnifying glass icon (max-width 550px, centered)
- User icon + "Log in or Sign up" link

### Mobile Navbar (≤768px)
- Logo + hamburger button (3 animated lines)
- Tap hamburger → slide-in panel from right (300px wide)
- Panel contains: close button, search bar, auth link
- Semi-transparent overlay behind panel (`rgba(0,0,0,0.4)`)
- Burger lines animate to an X when open

---

## Footer

Nock-inspired layout with two rows:

**Top row**:
- Left: Logo + "Your trusted watch marketplace" tagline
- Right: 3 link columns (About/Features/Pricing/Contact/Blog | Documentation/FAQ/Support | X/LinkedIn/YouTube)

**Bottom row** (separated by border):
- Left: Green status dot + "All systems operational" badge
- Right: Copyright + Privacy Policy + Terms of Use

**Responsive**: Stacks vertically at 768px, link columns go single-column at 480px.
