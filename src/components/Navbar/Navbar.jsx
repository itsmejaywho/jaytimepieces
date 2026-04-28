import { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import Skeleton from '../loaders/Skeleton/Skeleton'
import './Navbar.css'

const NavbarSkeleton = () => (
  <header className="header">
    <nav className="top-bar">
      <div className="top-bar-left">
        <Skeleton width="55px" height="55px" borderRadius="8px" />
      </div>
      <Skeleton width="100%" height="2.4rem" borderRadius="6px" style={{ maxWidth: '550px' }} />
      <div className="top-bar-right">
        <Skeleton width="22px" height="22px" borderRadius="50%" />
        <Skeleton width="120px" height="0.85rem" />
      </div>
    </nav>
  </header>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <NavbarSkeleton />

  return (
    <header className="header">
      <nav className="top-bar">
        <div className="top-bar-left">
          <a href="/" className="brand">
            <img src={logo} alt="JayTimepieces" className="brand-logo" />
          </a>
        </div>
        <div className="search-bar">
          <svg className="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search watches worldwide"
            className="search-input"
          />
        </div>
        <div className="top-bar-right">
          <svg className="user-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <a href="/login" className="auth-link">Log in or Sign up</a>
        </div>
        <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </nav>
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="mobile-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mobile-search">
          <svg className="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search watches worldwide"
            className="search-input"
          />
        </div>
        <a href="/login" className="mobile-auth-link">
          <svg className="user-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Log in or Sign up
        </a>
      </div>
    </header>
  )
}

export default Navbar
