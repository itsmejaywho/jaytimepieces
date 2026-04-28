import { useEffect, useRef, useState } from 'react'

const AddWatchForm = ({
  newWatch,
  formStatus,
  fileInputResetKey,
  sizeOptions,
  onInputChange,
  onSizeToggle,
  onSubmit,
}) => {
  const [sizesOpen, setSizesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSizesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedSizesLabel = newWatch.sizes.length > 0
    ? newWatch.sizes.join(', ')
    : 'Select one or more sizes'

  return (
    <form className="add-watch-form" onSubmit={onSubmit}>
      <h3 className="add-watch-title">Add Watch To Carousel</h3>
      <div className="add-watch-grid">
        <label className="add-watch-field">
          <span>Watch Image</span>
          <input
            key={fileInputResetKey}
            type="file"
            name="imageFile"
            accept=".png,image/png"
            onChange={onInputChange}
          />
        </label>

        <label className="add-watch-field">
          <span>Watch Name</span>
          <input
            type="text"
            name="name"
            value={newWatch.name}
            onChange={onInputChange}
            placeholder="e.g. Oyster Perpetual"
          />
        </label>

        <label className="add-watch-field">
          <span>Watch ID</span>
          <input
            type="text"
            name="code"
            value={newWatch.code}
            onChange={onInputChange}
            placeholder="e.g. CH-0001.0-TEST"
          />
        </label>

        <label className="add-watch-field">
          <span>Price</span>
          <input
            type="text"
            name="price"
            value={newWatch.price}
            onChange={onInputChange}
            placeholder="e.g. 19500"
          />
        </label>

        <div className="add-watch-field" ref={dropdownRef}>
          <span>Sizes</span>
          <button
            type="button"
            className={`add-watch-dropdown-trigger ${sizesOpen ? 'is-open' : ''}`}
            onClick={() => setSizesOpen((current) => !current)}
            aria-expanded={sizesOpen}
          >
            <span>{selectedSizesLabel}</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {sizesOpen && (
            <div className="add-watch-dropdown-menu">
              {sizeOptions.map((size) => (
                <label key={size} className="add-watch-size-option">
                  <input
                    type="checkbox"
                    checked={newWatch.sizes.includes(size)}
                    onChange={() => onSizeToggle(size)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="add-watch-actions">
        <button type="submit" className="add-watch-btn">Confirm And Add</button>
        {formStatus.message && (
          <p className={`add-watch-message ${formStatus.type === 'error' ? 'is-error' : 'is-success'}`}>
            {formStatus.message}
          </p>
        )}
      </div>
    </form>
  )
}

export default AddWatchForm