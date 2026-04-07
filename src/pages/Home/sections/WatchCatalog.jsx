import rolex1 from '../../../assets/images/rolex1.webp'
import rolex2 from '../../../assets/images/rolex2.webp'
import rolex3 from '../../../assets/images/rolex3.webp'
import rolex4 from '../../../assets/images/rolex4.webp'
import patek1 from '../../../assets/images/patek1.webp'
import patek2 from '../../../assets/images/patek2.webp'
import patek3 from '../../../assets/images/patek3.webp'
import patek4 from '../../../assets/images/patek4.webp'
import './WatchCatalog.css'

const watchCatalog = [
  {
    brand: 'Rolex',
    models: [
      { name: 'Datejust', img: rolex1 },
      { name: 'Submariner', img: rolex2 },
      { name: 'Day-date', img: rolex3 },
      { name: 'GMT-Master II', img: rolex4 },
    ]
  },
  {
    brand: 'Patek Philippe',
    models: [
      { name: 'Nautilus', img: patek1 },
      { name: 'Aquanaut', img: patek2 },
      { name: 'Calatrava', img: patek3 },
      { name: 'Complications', img: patek4 },
    ]
  }
]

const WatchCatalog = () => {
  return (
    <>
      {watchCatalog.map((category, idx) => (
        <section key={idx} className="watch-catalog">
          <h3 className="catalog-brand-title">{category.brand}</h3>
          <div className="catalog-grid">
            {category.models.map((model, i) => (
              <div key={i} className="catalog-card">
                <div className="catalog-img-wrapper">
                  <img src={model.img} alt={`${category.brand} ${model.name}`} className="catalog-img" />
                </div>
                <div className="catalog-info">
                  <p className="catalog-brand">{category.brand}</p>
                  <p className="catalog-model">{model.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default WatchCatalog
