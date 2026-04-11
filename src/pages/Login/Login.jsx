import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import LoginSkeleton from './LoginSkeleton'
import LoginVerification from './LoginVerification'
import './Login.css'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [verifying, setVerifying] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('user', 'admin')
      setVerifying(true)
      setTimeout(() => navigate('/shop'), 3000)
    } else {
      setError('Invalid username or password')
      setTimeout(() => setError(''), 3000)
    }
  }

  if (loading) return <LoginSkeleton />
  if (verifying) return <LoginVerification email={username} />

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo-wrapper">
          <Link to="/">
            <img src={logo} alt="JayTimepieces" className="login-logo" />
          </Link>
        </div>
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Hey, Enter your details to sign in to your account</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Email / Phone No"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Passcode"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <a href="#" className="trouble-link">Having trouble in sign in?</a>

          <button type="submit" className="login-btn">Sign in</button>
        </form>

        <p className="register-link">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <p className="login-error">{error || '\u00A0'}</p>
      </div>

      <div className="login-footer">
        <span>Copyright &copy; JayTimepieces {new Date().getFullYear()}</span>
        <span className="footer-sep">|</span>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Login
