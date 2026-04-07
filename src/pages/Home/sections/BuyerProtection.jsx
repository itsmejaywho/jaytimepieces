import watchProtection from '../../../assets/images/watch.jpg'
import './BuyerProtection.css'

const BuyerProtection = () => {
  return (
    <section className="protection-container">
      <div className="protection">
        <div className="protection-left">
          <h2 className="protection-title">JayTimepieces Buyer Protection</h2>
          <p className="protection-item">✔ Payment via the Escrow Service</p>
          <p className="protection-item">✔ Payment via the Escrow Service</p>
          <p className="protection-item">✔ Payment via the Escrow Service</p>
          <p className="protection-item">✔ Payment via the Escrow Service</p>
          <p className="protection-item">✔ Payment via the Escrow Service</p>
          <button className="protection-btn">Learn more about security on JayTimepieces</button>
        </div>
        <div className="protection-right" style={{ backgroundImage: `url(${watchProtection})` }}></div>
      </div>
    </section>
  )
}

export default BuyerProtection
