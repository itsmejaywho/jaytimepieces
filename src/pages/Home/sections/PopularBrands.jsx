import './PopularBrands.css'

const brands = ['Rolex', 'Patek Philippe', 'Audemars Piguet', 'Panerai', 'Breitling', 'Omega', 'Seiko', 'Cartier', 'IWC', 'Tudor']

const PopularBrands = () => {
  return (
    <section className="popular-brands">
      <h3>Popular brands</h3>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <a key={index} href={`/shop?brand=${brand.toLowerCase()}`} className="brand-pill">
            {brand}
          </a>
        ))}
      </div>
    </section>
  )
}

export default PopularBrands
