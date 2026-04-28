const AddWatchForm = ({ newWatch, formStatus, onInputChange, onSubmit }) => {
  return (
    <form className="add-watch-form" onSubmit={onSubmit}>
      <h3 className="add-watch-title">Add Watch To Carousel</h3>
      <div className="add-watch-grid">
        <label className="add-watch-field">
          <span>Watch Image</span>
          <input
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