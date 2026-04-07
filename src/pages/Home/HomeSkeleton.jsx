import Skeleton from '../../components/Skeleton/Skeleton'
import './HomeSkeleton.css'

const HomeSkeleton = () => {
  return (
    <div className="home-skeleton">
      {/* Hero skeleton */}
      <div className="skel-hero">
        <Skeleton width="60%" height="2.5rem" style={{ margin: '0 auto 1rem' }} />
        <Skeleton width="40%" height="2.5rem" style={{ margin: '0 auto 1.5rem' }} />
        <Skeleton width="180px" height="1rem" style={{ margin: '0 auto 0.5rem' }} />
        <Skeleton width="200px" height="0.9rem" style={{ margin: '0 auto' }} />
      </div>

      {/* Brands skeleton */}
      <div className="skel-section">
        <Skeleton width="150px" height="1.3rem" style={{ marginBottom: '1.2rem' }} />
        <div className="skel-brands-grid">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} height="2.8rem" />
          ))}
        </div>
      </div>

      {/* Reviews skeleton */}
      <div className="skel-section">
        <Skeleton width="70%" height="1.5rem" style={{ marginBottom: '1.5rem' }} />
        <div className="skel-reviews">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skel-review-card">
              <Skeleton width="80px" height="80px" borderRadius="50%" style={{ margin: '0 auto 1rem' }} />
              <Skeleton width="60%" height="1rem" style={{ margin: '0 auto 0.5rem' }} />
              <Skeleton width="80%" height="0.8rem" style={{ margin: '0 auto' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Protection skeleton */}
      <div className="skel-section">
        <div className="skel-protection">
          <div className="skel-protection-left">
            <Skeleton width="70%" height="1.5rem" style={{ marginBottom: '1.25rem' }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} width="85%" height="0.9rem" style={{ marginBottom: '1rem' }} />
            ))}
            <Skeleton width="280px" height="2.5rem" borderRadius="10px" style={{ marginTop: '0.5rem' }} />
          </div>
          <Skeleton className="skel-protection-right" borderRadius="0" />
        </div>
      </div>

      {/* Catalog skeleton */}
      {[1, 2].map((_, idx) => (
        <div key={idx} className="skel-section">
          <Skeleton width="120px" height="1.3rem" style={{ marginBottom: '1rem' }} />
          <div className="skel-catalog-grid">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="skel-catalog-card">
                <Skeleton height="340px" borderRadius="10px 10px 0 0" />
                <div style={{ padding: '0.75rem 1rem' }}>
                  <Skeleton width="60%" height="0.9rem" style={{ marginBottom: '0.4rem' }} />
                  <Skeleton width="40%" height="0.9rem" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeSkeleton
