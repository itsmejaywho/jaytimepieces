import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Skeleton from '../../components/Skeleton/Skeleton'
import './Signup.css'

const SignupSkeleton = () => (
  <div className="login-page">
    <div className="login-card">
      <div className="login-logo-wrapper">
        <Skeleton width="50px" height="50px" borderRadius="8px" />
      </div>
      <Skeleton width="140px" height="1.8rem" style={{ margin: '0 auto 0.5rem' }} />
      <Skeleton width="260px" height="0.9rem" style={{ margin: '0 auto 2.5rem' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Skeleton height="3rem" borderRadius="8px" />
          <Skeleton height="3rem" borderRadius="8px" />
        </div>
        <Skeleton height="3rem" borderRadius="8px" />
        <Skeleton height="3rem" borderRadius="8px" />
        <Skeleton height="3rem" borderRadius="8px" />
        <Skeleton height="3rem" borderRadius="8px" style={{ marginTop: '0.5rem' }} />
      </div>
      <Skeleton width="220px" height="0.85rem" style={{ margin: '1.5rem auto 0' }} />
    </div>
  </div>
)

const Signup = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <SignupSkeleton />

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo-wrapper">
          <Link to="/">
            <img src={logo} alt="JayTimepieces" className="login-logo" />
          </Link>
        </div>
        <h1 className="login-title">Sign Up</h1>
        <p className="login-subtitle">Create your account to start exploring luxury watches</p>

        <form className="login-form">
          <div className="signup-name-row">
            <div className="input-group">
              <input type="text" placeholder="First Name" className="login-input" />
            </div>
            <div className="input-group">
              <input type="text" placeholder="Last Name" className="login-input" />
            </div>
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email" className="login-input" />
          </div>

          <div className="input-group">
            <input type="tel" placeholder="Phone Number" className="login-input" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Confirmation Code" className="login-input" />
          </div>

          <button type="submit" className="login-btn">Confirm</button>
        </form>

        <p className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="login-footer">
        <span>Copyright &copy; JayTimepieces {new Date().getFullYear()}</span>
        <span className="footer-sep">|</span>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Signup
