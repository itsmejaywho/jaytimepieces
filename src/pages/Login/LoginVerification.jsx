import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './LoginVerification.css'

const LoginVerification = () => {
  return (
    <div className="login-page verification-clock-page">
      <div className="verification-clock-stage">
        <div className="verification-spinner">
          <div className="watch-loader">
            <svg width="150" height="150" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="19" stroke="#1a1a2e" strokeWidth="2.2" />
              <circle cx="28" cy="28" r="1.8" fill="#1a1a2e" />
              <g className="clock-hands">
                <path d="M28 28V17" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
                <path d="M28 28L36 23" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
              </g>
              <rect x="23" y="4" width="10" height="4" rx="2" fill="#c9a96e" />
              <rect x="23" y="48" width="10" height="4" rx="2" fill="#c9a96e" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginVerification
