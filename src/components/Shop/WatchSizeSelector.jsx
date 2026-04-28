const getCircularSizeLayout = (sizes, activeIndex) => {
  if (!sizes?.length) return []

  const positions = []
  const offsets = sizes.length === 1 ? [0] : sizes.length === 2 ? [-1, 0] : [-2, -1, 0, 1, 2]

  offsets.forEach((offset) => {
    const normalizedIndex = (activeIndex + offset + sizes.length) % sizes.length
    const size = sizes[normalizedIndex]

    if (positions.some((entry) => entry.size === size)) {
      return
    }

    positions.push({
      size,
      offset,
      isActive: offset === 0,
    })
  })

  return positions.sort((left, right) => left.offset - right.offset)
}

const WatchSizeSelector = ({ watchKey, sizes, activeIndex = 0, motionDirection = '', onSelect }) => {
  if (!sizes?.length) return null

  return (
    <div className="shop-watch-sizes" aria-label={`Available sizes: ${sizes.join(', ')}`}>
      {getCircularSizeLayout(sizes, activeIndex).map(({ size, offset, isActive }) => (
        <button
          key={`${watchKey}-${size}`}
          type="button"
          className={`shop-watch-size-badge ${isActive ? `is-active ${motionDirection}` : ''} offset-${offset}`}
          onClick={() => onSelect(watchKey, sizes.indexOf(size), offset)}
          aria-pressed={isActive}
        >
          {size}
        </button>
      ))}
    </div>
  )
}

export default WatchSizeSelector