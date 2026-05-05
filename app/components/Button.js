export default function Button({ children, variant = 'primary', size = 'medium', href, onClick, disabled = false }) {
  const classes = `button ${variant} ${size !== 'medium' ? size : ''}`
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
