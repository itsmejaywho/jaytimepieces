import WatchSizeSelector from './WatchSizeSelector'

const WatchCard = ({ watch, watchKey, motionDirection, activeSizeIndex, onSizeSelect }) => {
  return (
    <article className={`shop-watch-card card-${watch.variant}`}>
      <span className="watch-limit">{watch.limit}</span>
      <div className="shop-watch-img-wrapper">
        <WatchSizeSelector
          watchKey={watchKey}
          sizes={watch.sizes}
          activeIndex={activeSizeIndex}
          motionDirection={motionDirection}
          onSelect={onSizeSelect}
        />
        <img src={watch.img} alt={watch.name} className="shop-watch-img" />
      </div>
      <div className="shop-watch-info">
        <span className="shop-watch-brand">{watch.code}</span>
        <span className="shop-watch-model">{watch.name}</span>
        <span className="shop-watch-price">{watch.price}</span>
      </div>
    </article>
  )
}

export default WatchCard