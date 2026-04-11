import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './LoginVerification.css'

const LoginVerification = ({ email }) => {
  return (
    <div className="login-page">
      <div className="login-logo-wrapper verification-logo">
        <Link to="/">
          <img src={logo} alt="JayTimepieces" className="login-logo" />
        </Link>
      </div>

      <div className="verification-card">
        <div className="verification-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" y="8" width="36" height="48" rx="4" stroke="#1a1a2e" strokeWidth="2" fill="none" />
            <rect x="18" y="14" width="28" height="20" rx="2" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
            <path d="M18 16L32 26L46 16" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
            <circle cx="32" cy="46" r="3" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
            <circle cx="10" cy="12" r="2" fill="#c9a96e" />
            <circle cx="54" cy="12" r="1.5" fill="#c9a96e" />
            <circle cx="54" cy="20" r="1" fill="#c9a96e" />
          </svg>
        </div>

        <h1 className="verification-title">Login From New Device</h1>

        <p className="verification-text">
          For security reasons, please confirm your identity by reviewing and
          verifying the information sent to the following email address:
        </p>

        <p className="verification-email">{email || 'user@email.com'}</p>

        <div className="verification-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  )
}

export default LoginVerification
