import watchesBg from '../../../assets/images/watches.jpg'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${watchesBg})` }}
    >
      <div className="hero-content">
        <h1>Find your dream watch on the leading marketplace for luxury watches.</h1>
        <div className="hero-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-count">(100,724)</span>
        </div>
        <p className="hero-powered">Powered by <strong>JayTimepieces.</strong></p>
      </div>
    </section>
  )
}

export default HeroSection
