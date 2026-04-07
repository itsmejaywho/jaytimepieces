import Skeleton from '../../components/Skeleton/Skeleton'
import './Login.css'

const LoginSkeleton = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo-wrapper">
          <Skeleton width="50px" height="50px" borderRadius="8px" />
        </div>
        <Skeleton width="120px" height="1.8rem" style={{ margin: '0 auto 0.5rem' }} />
        <Skeleton width="280px" height="0.9rem" style={{ margin: '0 auto 2.5rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Skeleton height="3rem" borderRadius="8px" />
          <Skeleton height="3rem" borderRadius="8px" />
          <Skeleton width="160px" height="0.8rem" />
          <Skeleton height="3rem" borderRadius="8px" style={{ marginTop: '0.5rem' }} />
        </div>

        <Skeleton width="220px" height="0.85rem" style={{ margin: '1.5rem auto 0' }} />
      </div>
    </div>
  )
}

export default LoginSkeleton
