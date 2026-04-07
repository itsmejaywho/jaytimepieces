import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Shop.css'

const Shop = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="shop-page">
      <nav className="shop-nav">
        <div className="shop-nav-left">
          <Link to="/" className="shop-logo-link">
            <img src={logo} alt="JayTimepieces" className="shop-logo" />
          </Link>
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
          {/* Heart / Wishlist */}
          <button className="shop-icon-btn" aria-label="Wishlist">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M11 18.5C11 18.5 1.5 13 1.5 6.5C1.5 3.5 4 1 7 1C8.8 1 10.4 1.9 11 3.4C11.6 1.9 13.2 1 15 1C18 1 20.5 3.5 20.5 6.5C20.5 13 11 18.5 11 18.5Z" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
          {/* Cart / Bag */}
          <button className="shop-icon-btn" aria-label="Cart">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
              <rect x="1" y="6" width="16" height="15" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M5 6V4C5 2.3 6.8 1 9 1C11.2 1 13 2.3 13 4V6" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
          {/* User / Account */}
          <button className="shop-icon-btn" aria-label="Account">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <circle cx="10" cy="6" r="5" stroke="white" strokeWidth="1.5" />
              <path d="M1 21C1 16.6 5 13 10 13C15 13 19 16.6 19 21" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
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
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>WATCHES</Link>
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>WARRANTY & SERVICE</Link>
          <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>STORES</Link>
          <div className="shop-mobile-icons">
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>LIKED WATCHES</Link>
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>CART</Link>
            <Link to="/shop" className="shop-mobile-link" onClick={() => setMenuOpen(false)}>PROFILE</Link>
          </div>
        </div>
      </div>

      <main className="shop-body">
        {/* Content will go here */}
      </main>
    </div>
  )
}

export default Shop
