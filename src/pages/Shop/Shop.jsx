import { useState, useEffect } from 'react'
import { AddWatchForm, NavLogin, WatchCard } from '../../components'
import useShopWatches from '../../hooks/useShopWatches'
import './Shop.css'

const Shop = () => {
  const [activeSize, setActiveSize] = useState('34')
  const [visibleCards, setVisibleCards] = useState(3)
  const [startIndex, setStartIndex] = useState(0)
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false)
  const [activeWatchSizes, setActiveWatchSizes] = useState({})
  const [watchSizeMotion, setWatchSizeMotion] = useState({})
  const {
    watches,
    newWatch,
    fileInputResetKey,
    sizeOptions,
    formStatus,
    handleWatchInputChange,
    handleSizeToggle,
    handleAddWatch,
  } = useShopWatches({ visibleCards, setStartIndex })

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 620) {
        setVisibleCards(1)
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  useEffect(() => {
    const maxStart = Math.max(0, watches.length - visibleCards)
    if (startIndex > maxStart) {
      setStartIndex(maxStart)
    }
  }, [visibleCards, startIndex, watches.length])

  const sizes = ['34', '37', '40', '41', '42', '43', '44+', '45']

  const maxStart = Math.max(0, watches.length - visibleCards)

  useEffect(() => {
    if (isAutoPlayPaused || maxStart === 0) return undefined

    const timer = setInterval(() => {
      setStartIndex((current) => (current >= maxStart ? 0 : current + 1))
    }, 5200)

    return () => clearInterval(timer)
  }, [isAutoPlayPaused, maxStart])

  const nextSlide = () => {
    setStartIndex((current) => (current >= maxStart ? 0 : current + 1))
  }

  const prevSlide = () => {
    setStartIndex((current) => (current <= 0 ? maxStart : current - 1))
  }

  const handleWatchSizeSelect = (watchKey, sizeIndex, offset) => {
    const direction = offset < 0 ? 'from-left' : offset > 0 ? 'from-right' : ''

    setActiveWatchSizes((current) => ({
      ...current,
      [watchKey]: sizeIndex,
    }))

    setWatchSizeMotion((current) => ({
      ...current,
      [watchKey]: direction,
    }))
  }

  return (
    <div className="shop-page">
      <NavLogin />

      <main className="shop-body">
        <section className="shop-control-strip" aria-label="Watch filters">
          <div className="control-group">
            <span className="control-label">Functions Regulator</span>
            <div className="dot-pack">
              <span className="dot dot-copper" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>

          <button className="control-link" type="button">Special Features</button>

          <div className="control-group">
            <span className="control-label">Sizes</span>
            <div className="size-pack">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-chip ${activeSize === size ? 'active' : ''}`}
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <span className="control-label">Materials Red Gold</span>
            <div className="material-pack">
              <span className="material material-copper" />
              <span className="material material-light" />
              <span className="material material-blue" />
              <span className="material material-dark" />
              <span className="material material-rose" />
            </div>
          </div>
        </section>

        <section className="catalog-section catalog-scroll-section">
          <div className="available-header">
            <h2 className="available-label">Available Watches</h2>
            <div className="slider-controls">
              <span className="slider-count">{watches.length} watches</span>
              <button type="button" className="slider-btn" onClick={prevSlide} aria-label="Previous slide" disabled={watches.length === 0}>
                &lt;
              </button>
              <button type="button" className="slider-btn" onClick={nextSlide} aria-label="Next slide" disabled={watches.length === 0}>
                &gt;
              </button>
            </div>
          </div>

          {watches.length === 0 ? (
            <div className="empty-watch-state">No available watch for today.</div>
          ) : (
            <>
              <div
                className="carousel-viewport"
                onMouseEnter={() => setIsAutoPlayPaused(true)}
                onMouseLeave={() => setIsAutoPlayPaused(false)}
                onFocus={() => setIsAutoPlayPaused(true)}
                onBlur={() => setIsAutoPlayPaused(false)}
              >
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${(100 / visibleCards) * startIndex}%)`,
                  }}
                >
                  {watches.map((watch, index) => (
                    <div key={`${watch.code}-${index}`} className="carousel-slide" style={{ flex: `0 0 calc(100% / ${visibleCards})` }}>
                      <WatchCard
                        watch={watch}
                        watchKey={`${watch.code}-${index}`}
                        motionDirection={watchSizeMotion[`${watch.code}-${index}`] || ''}
                        activeSizeIndex={activeWatchSizes[`${watch.code}-${index}`] ?? 0}
                        onSizeSelect={handleWatchSizeSelect}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel-dots" aria-label="Carousel position">
                {Array.from({ length: maxStart + 1 }).map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    className={`carousel-dot ${index === startIndex ? 'active' : ''}`}
                    onClick={() => setStartIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          <AddWatchForm
            newWatch={newWatch}
            formStatus={formStatus}
            fileInputResetKey={fileInputResetKey}
            sizeOptions={sizeOptions}
            onInputChange={handleWatchInputChange}
            onSizeToggle={handleSizeToggle}
            onSubmit={handleAddWatch}
          />
        </section>
      </main>
    </div>
  )
}

export default Shop
