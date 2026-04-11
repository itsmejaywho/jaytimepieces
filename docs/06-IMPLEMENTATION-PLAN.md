# JayTimepieces — Implementation Plan

## Phase 1 — Backend Setup (Supabase)

**Why Supabase**: Free tier covers auth, PostgreSQL database, file storage, and real-time — everything needed for this project.

### Setup
```bash
npm install @supabase/supabase-js
```

### Database Tables

**`users`** (handled by Supabase Auth automatically)

**`profiles`** — extends user data
| Column      | Type    | Notes                  |
|-------------|---------|------------------------|
| id          | uuid    | FK → auth.users.id     |
| first_name  | text    |                        |
| last_name   | text    |                        |
| street      | text    | Billing                |
| zip_city    | text    | Billing                |
| gender      | text    | Personal               |
| date_of_birth | date  | Personal               |
| phone       | text    | Personal               |
| occupation  | text    | Personal               |
| languages   | text[]  | Personal               |

**`watches`** — watch listings
| Column      | Type      | Notes                    |
|-------------|-----------|--------------------------|
| id          | uuid      | Primary key              |
| seller_id   | uuid      | FK → auth.users.id       |
| brand       | text      | e.g., "Rolex"            |
| model       | text      | e.g., "Submariner"       |
| price       | numeric   | In PHP                   |
| images      | text[]    | Array of storage URLs     |
| created_at  | timestamp | Auto                     |
| views       | integer   | For trending sort         |

### Storage
- Supabase Storage bucket: `watch-images`
- Public read, authenticated write
- Max 5 images per listing

---

## Phase 2 — Auth Context

### Files
```
src/services/supabase.js            — Supabase client initialization
src/context/AuthContext.jsx          — Auth state provider
src/components/ProtectedRoute/ProtectedRoute.jsx — Route guard
```

### AuthContext Features
- `user` state (current logged-in user)
- `login(email, password)` → Supabase signInWithPassword
- `signup(email, password)` → Supabase signUp
- `logout()` → Supabase signOut
- `loading` state for auth initialization

### Protected Routes
- Wrap `/shop`, `/profile`, `/overview`, `/upload` in `<ProtectedRoute>`
- Redirect to `/login` if not authenticated

### Update Existing Pages
- `Login.jsx` → connect form to `AuthContext.login()`
- `Signup.jsx` → connect form to `AuthContext.signup()`
- `Shop.jsx` → replace `sessionStorage` logout with `AuthContext.logout()`

---

## Phase 3 — Dashboard (Shop Page)

### Features
- Fetch all watches from Supabase `watches` table
- Display in 4-column grid (current layout)
- **Image carousel** per card (swipe/click through multiple images)
- **Trending section** — top watches sorted by views
- **Search & filter** — by brand, price range

### Implementation
- `useEffect` to fetch watches on mount
- Loading skeleton while fetching
- Infinite scroll or pagination for large datasets
- Click on card → watch detail page (future)

---

## Phase 4 — Upload Watch Listing

### Files
```
src/pages/Upload/Upload.jsx
src/pages/Upload/Upload.css
```

### Route
```
/upload → Upload page (protected)
```

### Form Fields
- Brand (dropdown or text input)
- Model name (text)
- Price in PHP (number)
- Images (drag & drop, up to 5, with preview)

### Flow
1. User fills form + selects images
2. Images uploaded to Supabase Storage
3. Watch record created in `watches` table with image URLs
4. Redirect to `/overview` after success

---

## Phase 5 — Profile Page

### Files
```
src/pages/Profile/Profile.jsx
src/pages/Profile/Profile.css
```

### Route
```
/profile → Profile page (protected)
```

### Layout
3 cards displayed horizontally on one page:

```
[Login Info]  [Billing Info]  [Personal Info]
```

#### Card 1: Login Information
- Current email (display)
- Edit email button → sends verification email via Supabase
- Change password → Supabase updateUser({ password })

#### Card 2: Billing Information
- First name
- Last name
- Street address
- Zip code / City
- Save button → updates `profiles` table

#### Card 3: Personal Information
- Gender (dropdown)
- Date of birth (date picker)
- Phone number
- Occupation
- Languages (multi-select or tags)
- Save button → updates `profiles` table

---

## Phase 6 — Overview Page

### Files
```
src/pages/Overview/Overview.jsx
src/pages/Overview/Overview.css
```

### Route
```
/overview → Overview page (protected)
```

### Features
- Fetch only current user's watches (`seller_id = auth.user.id`)
- Grid view with edit/delete options per listing
- Quick stats: total listings, total views
- Edit → opens upload form pre-filled
- Delete → confirmation modal → remove from DB + storage

---

## New Files Summary

```
src/services/supabase.js
src/context/AuthContext.jsx
src/components/ProtectedRoute/ProtectedRoute.jsx
src/components/ImageCarousel/ImageCarousel.jsx
src/components/ImageCarousel/ImageCarousel.css
src/pages/Profile/Profile.jsx
src/pages/Profile/Profile.css
src/pages/Overview/Overview.jsx
src/pages/Overview/Overview.css
src/pages/Upload/Upload.jsx
src/pages/Upload/Upload.css
```

## New Routes Summary

| Path       | Page      | Protected | Layout          |
|------------|-----------|-----------|-----------------|
| `/profile` | Profile   | Yes       | Full-width      |
| `/overview`| Overview  | Yes       | Full-width      |
| `/upload`  | Upload    | Yes       | Full-width      |

## Updated Routes

| Path       | Page      | Protected | Change              |
|------------|-----------|-----------|---------------------|
| `/shop`    | Shop      | Yes       | Add protected route |
| `/login`   | Login     | No        | Connect to Supabase |
| `/signup`  | Signup    | No        | Connect to Supabase |

---

## Recommended Build Order

1. **Supabase setup** (client + tables + storage)
2. **AuthContext + ProtectedRoute** (foundation for everything)
3. **Login/Signup connection** (real auth working)
4. **Profile page** (3-card layout)
5. **Upload page** (image upload + form)
6. **Dashboard enhancement** (fetch real data, carousel, trending)
7. **Overview page** (user's own listings)
