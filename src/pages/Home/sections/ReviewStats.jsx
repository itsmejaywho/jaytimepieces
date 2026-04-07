import buyerRating from '../../../assets/images/buyer-rating.png'
import loveWatch from '../../../assets/images/love-my-watch.svg'
import handshake from '../../../assets/images/handshake.svg'
import dealer from '../../../assets/images/dealer.svg'
import './ReviewStats.css'

const ReviewStats = () => {
  return (
    <section className="review-container">
      <h2 className="leading">The Leading Marketplace for Luxury Watches Since 2024</h2>
      <div className="reviews">
        <div className="reviews-box">
          <div className="review-pic">
            <img src={buyerRating} alt="Buyer rating" className="review-img" />
          </div>
          <p className="buyers">4.8 out of 5 stars</p>
          <p className="buyer-count">from 166,000 reviews worldwide</p>
        </div>
        <div className="reviews-box">
          <div className="review-pic">
            <img src={loveWatch} alt="Watch enthusiasts" className="review-img" />
          </div>
          <p className="buyers">9 Million</p>
          <p className="buyer-count">watch enthusiasts use JayTimepieces each month</p>
        </div>
        <div className="reviews-box">
          <div className="review-pic">
            <img src={handshake} alt="Buyer Protection" className="review-img" />
          </div>
          <p className="buyers">Over 200,000</p>
          <p className="buyer-count">customers choose Buyer Protection annually</p>
        </div>
        <div className="reviews-box">
          <div className="review-pic">
            <img src={dealer} alt="Trustworthy sellers" className="review-img" />
          </div>
          <p className="buyers">More than 25,000</p>
          <p className="buyer-count">trustworthy sellers</p>
        </div>
      </div>
    </section>
  )
}

export default ReviewStats
