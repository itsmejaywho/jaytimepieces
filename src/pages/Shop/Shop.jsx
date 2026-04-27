import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Shop.css'

const initialWatches = []
const WATCH_STORAGE_KEY = 'shop-user-watches'

const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => resolve(reader.result)
  reader.onerror = () => reject(new Error('Unable to read image file.'))
  reader.readAsDataURL(file)
})

const Shop = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [activeSize, setActiveSize] = useState('34')
  const [visibleCards, setVisibleCards] = useState(3)
  const [startIndex, setStartIndex] = useState(0)
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false)
  const [watches, setWatches] = useState(() => {
    try {
      const rawWatches = localStorage.getItem(WATCH_STORAGE_KEY)
      if (!rawWatches) return initialWatches

      const parsedWatches = JSON.parse(rawWatches)
      return Array.isArray(parsedWatches) ? parsedWatches : initialWatches
    } catch {
      return initialWatches
    }
  })
  const [newWatch, setNewWatch] = useState({
    code: '',
    name: '',
    price: '',
    imageFile: null,
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const profileRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 620) {
        setVisibleCards(1)
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  useEffect(() => {
    const maxStart = Math.max(0, watches.length - visibleCards)
    if (startIndex > maxStart) {
      setStartIndex(maxStart)
    }
  }, [visibleCards, startIndex, watches.length])

  useEffect(() => {
    localStorage.setItem(WATCH_STORAGE_KEY, JSON.stringify(watches))
  }, [watches])

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  const sizes = ['34', '37', '40', '41', '42', '43', '44+', '45']

  const maxStart = Math.max(0, watches.length - visibleCards)

  useEffect(() => {
    if (isAutoPlayPaused || maxStart === 0) return undefined

    const timer = setInterval(() => {
      setStartIndex((current) => (current >= maxStart ? 0 : current + 1))
    }, 5200)

    return () => clearInterval(timer)
  }, [isAutoPlayPaused, maxStart])

  const nextSlide = () => {
    setStartIndex((current) => (current >= maxStart ? 0 : current + 1))
  }

  const prevSlide = () => {
    setStartIndex((current) => (current <= 0 ? maxStart : current - 1))
  }

  const handleWatchInputChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'imageFile') {
      const selectedFile = files && files[0] ? files[0] : null
      setNewWatch((current) => ({ ...current, imageFile: selectedFile }))
      setFormStatus({ type: '', message: '' })
      return
    }

    setNewWatch((current) => ({ ...current, [name]: value }))
    setFormStatus({ type: '', message: '' })
  }

  const handleAddWatch = async (e) => {
    e.preventDefault()

    if (!newWatch.imageFile || !newWatch.name.trim() || !newWatch.code.trim() || !newWatch.price.trim()) {
      setFormStatus({ type: 'error', message: 'Please provide image, watch name, watch ID, and price.' })
      return
    }

    if (newWatch.imageFile.type !== 'image/png') {
      setFormStatus({ type: 'error', message: 'Only PNG images are allowed.' })
      return
    }

    try {
      const imageDataUrl = await readFileAsDataUrl(newWatch.imageFile)

      const formattedPrice = newWatch.price.trim().startsWith('$')
        ? newWatch.price.trim()
        : `$${newWatch.price.trim()}`

      const watchToAdd = {
        code: newWatch.code.trim(),
        name: newWatch.name.trim(),
        price: formattedPrice,
        limit: 'Custom listing',
        img: imageDataUrl,
        variant: watches.length % 2 === 0 ? 1 : 2,
      }

      setWatches((current) => [...current, watchToAdd])
      setStartIndex(Math.max(0, watches.length + 1 - visibleCards))
      setNewWatch({ code: '', name: '', price: '', imageFile: null })
      setFormStatus({ type: 'success', message: 'Watch added to carousel.' })
    } catch {
      setFormStatus({ type: 'error', message: 'Could not save image. Please try another PNG file.' })
    }
  }

  return (
    <div className="shop-page">
      <nav className="shop-nav">
        <div className="shop-nav-left">
          <Link to="/" className="shop-brand">JAYTIMEPIECES</Link>
          <button
            className="shop-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <line x1="0" y1="1" x2="22" y2="1" stroke="white" strokeWidth="2" />
              <line x1="0" y1="8" x2="22" y2="8" stroke="white" strokeWidth="2" />
              <line x1="0" y1="15" x2="22" y2="15" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="shop-nav-center">
          <Link to="/shop" className="shop-nav-link">WATCHES</Link>
          <Link to="/shop" className="shop-nav-link">WARRANTY & SERVICE</Link>
          <Link to="/shop" className="shop-nav-link">STORES</Link>
        </div>

        <div className="shop-nav-right">
          <button className="shop-icon-btn" aria-label="Wishlist">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M11 18.5C11 18.5 1.5 13 1.5 6.5C1.5 3.5 4 1 7 1C8.8 1 10.4 1.9 11 3.4C11.6 1.9 13.2 1 15 1C18 1 20.5 3.5 20.5 6.5C20.5 13 11 18.5 11 18.5Z" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
          <button className="shop-icon-btn" aria-label="Cart">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
              <rect x="1" y="6" width="16" height="15" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M5 6V4C5 2.3 6.8 1 9 1C11.2 1 13 2.3 13 4V6" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
          <div className="profile-wrapper" ref={profileRef}>
            <button
              className="shop-icon-btn"
              aria-label="Account"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <circle cx="10" cy="6" r="5" stroke="white" strokeWidth="1.5" />
                <path d="M1 21C1 16.6 5 13 10 13C15 13 19 16.6 19 21" stroke="white" strokeWidth="1.5" />
              </svg>
              <svg className="profile-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {profileOpen && (
              <div className="profile-dropdown">
                <div className="profile-dropdown-section">
                  <button className="profile-dropdown-item" onClick={() => setProfileOpen(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                    Overview
                  </button>
                  <button className="profile-dropdown-item" onClick={() => setProfileOpen(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                    Messages
                  </button>
                  <button className="profile-dropdown-item" onClick={() => setProfileOpen(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
                    Buy
                  </button>
                  <button className="profile-dropdown-item" onClick={() => setProfileOpen(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                    Sell
                  </button>

                  <button className="profile-dropdown-item" onClick={() => setProfileOpen(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    Watch Collection
                  </button>
                </div>

                <div className="profile-dropdown-divider" />

                <div className="profile-dropdown-section">
                  <button className="profile-dropdown-item" onClick={() => { setProfileOpen(false); navigate('/profile') }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    Profile
                  </button>
                  <button className="profile-dropdown-item" onClick={() => setProfileOpen(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
                    Notifications
                  </button>
                  <button className="profile-dropdown-item" onClick={handleLogout}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`shop-mobile-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`shop-mobile-menu ${menuOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="shop-mobile-brand">JAYTIMEPIECES</div>
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>WATCHES</Link>
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>WARRANTY & SERVICE</Link>
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>STORES</Link>
          <div className="shop-mobile-icons">
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>LIKED WATCHES</Link>
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>CART</Link>
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>PROFILE</Link>
            <button className="shop-mobile-link shop-mobile-logout" onClick={handleLogout}>LOG OUT</button>
          </div>
        </div>
      </div>

      <main className="shop-body">
        <section className="shop-control-strip" aria-label="Watch filters">
          <div className="control-group">
            <span className="control-label">Functions Regulator</span>
            <div className="dot-pack">
              <span className="dot dot-copper" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>

          <button className="control-link" type="button">Special Features</button>

          <div className="control-group">
            <span className="control-label">Sizes</span>
            <div className="size-pack">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-chip ${activeSize === size ? 'active' : ''}`}
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <span className="control-label">Materials Red Gold</span>
            <div className="material-pack">
              <span className="material material-copper" />
              <span className="material material-light" />
              <span className="material material-blue" />
              <span className="material material-dark" />
              <span className="material material-rose" />
            </div>
          </div>
        </section>

        <section className="catalog-section catalog-scroll-section">
          <div className="available-header">
            <h2 className="available-label">Available Watches</h2>
            <div className="slider-controls">
              <span className="slider-count">{watches.length} watches</span>
              <button type="button" className="slider-btn" onClick={prevSlide} aria-label="Previous slide" disabled={watches.length === 0}>
                &lt;
              </button>
              <button type="button" className="slider-btn" onClick={nextSlide} aria-label="Next slide" disabled={watches.length === 0}>
                &gt;
              </button>
            </div>
          </div>

          {watches.length === 0 ? (
            <div className="empty-watch-state">No available watch for today.</div>
          ) : (
            <>
              <div
                className="carousel-viewport"
                onMouseEnter={() => setIsAutoPlayPaused(true)}
                onMouseLeave={() => setIsAutoPlayPaused(false)}
                onFocus={() => setIsAutoPlayPaused(true)}
                onBlur={() => setIsAutoPlayPaused(false)}
              >
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${(100 / visibleCards) * startIndex}%)`,
                  }}
                >
                  {watches.map((watch, index) => (
                    <div key={`${watch.code}-${index}`} className="carousel-slide" style={{ flex: `0 0 calc(100% / ${visibleCards})` }}>
                      <article className={`shop-watch-card card-${watch.variant}`}>
                        <span className="watch-limit">{watch.limit}</span>
                        <div className="shop-watch-img-wrapper">
                          <img src={watch.img} alt={watch.name} className="shop-watch-img" />
                        </div>
                        <div className="shop-watch-info">
                          <span className="shop-watch-brand">{watch.code}</span>
                          <span className="shop-watch-model">{watch.name}</span>
                          <span className="shop-watch-price">{watch.price}</span>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel-dots" aria-label="Carousel position">
                {Array.from({ length: maxStart + 1 }).map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    className={`carousel-dot ${index === startIndex ? 'active' : ''}`}
                    onClick={() => setStartIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          <form className="add-watch-form" onSubmit={handleAddWatch}>
            <h3 className="add-watch-title">Add Watch To Carousel</h3>
            <div className="add-watch-grid">
              <label className="add-watch-field">
                <span>Watch Image</span>
                <input
                  type="file"
                  name="imageFile"
                  accept=".png,image/png"
                  onChange={handleWatchInputChange}
                />
              </label>

              <label className="add-watch-field">
                <span>Watch Name</span>
                <input
                  type="text"
                  name="name"
                  value={newWatch.name}
                  onChange={handleWatchInputChange}
                  placeholder="e.g. Oyster Perpetual"
                />
              </label>

              <label className="add-watch-field">
                <span>Watch ID</span>
                <input
                  type="text"
                  name="code"
                  value={newWatch.code}
                  onChange={handleWatchInputChange}
                  placeholder="e.g. CH-0001.0-TEST"
                />
              </label>

              <label className="add-watch-field">
                <span>Price</span>
                <input
                  type="text"
                  name="price"
                  value={newWatch.price}
                  onChange={handleWatchInputChange}
                  placeholder="e.g. 19500"
                />
              </label>
            </div>

            <div className="add-watch-actions">
              <button type="submit" className="add-watch-btn">Confirm And Add</button>
              {formStatus.message && (
                <p className={`add-watch-message ${formStatus.type === 'error' ? 'is-error' : 'is-success'}`}>
                  {formStatus.message}
                </p>
              )}
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Shop
