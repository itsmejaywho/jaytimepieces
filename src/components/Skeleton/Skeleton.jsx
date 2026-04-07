import './Skeleton.css'

const Skeleton = ({ width, height, borderRadius, style, className = '' }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width: width || '100%',
        height: height || '1rem',
        borderRadius: borderRadius || '6px',
        ...style,
      }}
    />
  )
}

export default Skeleton
