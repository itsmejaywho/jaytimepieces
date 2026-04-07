import { useState, useEffect } from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import Skeleton from '../Skeleton/Skeleton'

const FooterSkeleton = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
        <Skeleton width="40px" height="40px" borderRadius="8px" />
        <Skeleton width="200px" height="0.85rem" />
      </div>
      <div className="footer-links">
        {[5, 3, 3].map((count, i) => (
          <div key={i} className="footer-col">
            {Array.from({ length: count }).map((_, j) => (
              <Skeleton key={j} width="90px" height="0.9rem" />
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <Skeleton width="180px" height="1.8rem" borderRadius="20px" />
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Skeleton width="250px" height="0.8rem" />
        <Skeleton width="80px" height="0.8rem" />
        <Skeleton width="70px" height="0.8rem" />
      </div>
    </div>
  </footer>
)

const Footer = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <FooterSkeleton />
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="JTimepieces" className="footer-logo" />
          <p className="footer-tagline">Your trusted watch marketplace</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <a href="#">Documentation</a>
            <a href="#">FAQ</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-col">
            <a href="#">X (Twitter)</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-status">
          <span className="status-dot"></span>
          All systems operational
        </div>
        <div className="footer-legal">
          <span>&copy; {new Date().getFullYear()} JTimepieces. All rights reserved</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
