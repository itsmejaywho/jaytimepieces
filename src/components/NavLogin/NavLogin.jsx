import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavLogin = ({ brandLinkClassName = 'shop-brand', brandInnerClassName = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
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

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  const handleProfileNavigate = () => {
    setProfileOpen(false)
    navigate('/profile')
  }

  return (
    <>
      <nav className="shop-nav">
        <div className="shop-nav-left">
          <Link to="/" className={brandLinkClassName}>
            {brandInnerClassName ? <p className={brandInnerClassName}>JAYTIMEPIECES</p> : 'JAYTIMEPIECES'}
          </Link>
          <button
            className="shop-burger"
            onClick={() => setMenuOpen((current) => !current)}
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
          <Link to="/shop" className="shop-nav-link">WARRANTY &amp; SERVICE</Link>
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
              onClick={() => setProfileOpen((current) => !current)}
            >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <circle cx="10" cy="6" r="5" stroke="white" strokeWidth="1.5" />
                <path d="M1 21C1 16.6 5 13 10 13C15 13 19 16.6 19 21" stroke="white" strokeWidth="1.5" />
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
                  <button className="profile-dropdown-item" onClick={handleProfileNavigate}>
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
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>WARRANTY &amp; SERVICE</Link>
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>STORES</Link>
          <div className="shop-mobile-icons">
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>LIKED WATCHES</Link>
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>CART</Link>
            <Link to="/profile" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>PROFILE</Link>
            <button className="shop-mobile-link shop-mobile-logout" onClick={handleLogout}>LOG OUT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavLogin