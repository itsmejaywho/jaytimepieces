import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="watch-list-grid">
          <div className="watch-list-col">
            <p>Omega <strong>Seamaster</strong></p>
            <p>Audemars Piguet <strong>Royal Oak Offshore</strong></p>
            <p>Tudor <strong>Black Bay</strong></p>
            <p>IWC <strong>Portuguese</strong></p>
            <p>Omega <strong>Constellation</strong></p>
            <p>Rolex <strong>Pepsi</strong></p>
            <p>Rolex <strong>Milgauss</strong></p>
          </div>
          <div className="watch-list-col">
            <p>Breitling <strong>Navitimer</strong></p>
            <p>TAG Heuer <strong>Carrera</strong></p>
            <p>Rolex <strong>Yacht-Master</strong></p>
            <p>Rolex <strong>Explorer II</strong></p>
            <p>Cartier <strong>Tank</strong></p>
            <p>Rolex <strong>Hulk</strong></p>
            <p>Jacob &amp; Co. <strong>Bugatti Watch</strong></p>
          </div>
          <div className="watch-list-col">
            <p>Rolex <strong>Oyster Perpetual</strong></p>
            <p>Panerai <strong>Luminor</strong></p>
            <p>Patek Philippe <strong>Calatrava</strong></p>
            <p>IWC <strong>Pilot</strong></p>
            <p>Rolex <strong>Datejust 41</strong></p>
            <p>Rolex <strong>Batman</strong></p>
            <p>Seiko <strong>5</strong></p>
          </div>
          <div className="watch-list-col">
            <p>Patek Philippe <strong>Grand Complications</strong></p>
            <p>Rolex <strong>GMT-Master</strong></p>
            <p>Hublot <strong>Big Bang</strong></p>
            <p>Zenith <strong>El Primero</strong></p>
            <p>Cartier <strong>Crash</strong></p>
            <p>Rolex <strong>Ice</strong></p>
            <p>Tissot <strong>PRX Powermatic 80</strong></p>
          </div>
        </div>

        <div className="testimonials">
          <h2 className="testimonials-title">What thousands of happy customers are saying about us</h2>
          <p className="trust-score">★ TrustScore: &quot;Excellent&quot; with 4.7/5 stars</p>
          <p className="trust-count">194,282 reviews from around the globe</p>

          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="trustpilot-stars">★★★★★</div>
                <span className="testimonial-date">Yesterday</span>
              </div>
              <div className="testimonial-body">
                <span className="quote-open">&ldquo;</span>
                <p className="testimonial-text">Smooth purchase experience, product was exactly as described and shipping was quick!</p>
                <span className="quote-close">&rdquo;</span>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">O</div>
                <div>
                  <p className="author-name">Owen Jones</p>
                  <p className="author-location">Canada</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="trustpilot-stars">★★★★★</div>
                <span className="testimonial-date">Yesterday</span>
              </div>
              <div className="testimonial-body">
                <span className="quote-open">&ldquo;</span>
                <p className="testimonial-text">Great communication and received exactly what was advertised. Very helpful throughout buying process.</p>
                <span className="quote-close">&rdquo;</span>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">T</div>
                <div>
                  <p className="author-name">Tony S</p>
                  <p className="author-location">Australia</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="trustpilot-stars">★★★★★</div>
                <span className="testimonial-date">This week</span>
              </div>
              <div className="testimonial-body">
                <span className="quote-open">&ldquo;</span>
                <p className="testimonial-text">I&apos;ve purchased 3 timepieces on the JayTimepieces website. All transactions went very smoothly. Happy with transactions, prices and of course the watches.</p>
                <span className="quote-close">&rdquo;</span>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">F</div>
                <div>
                  <p className="author-name">FM</p>
                  <p className="author-location">United States of America</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
