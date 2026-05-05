export default function Section({ children, title, subtitle, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {title && <h2 className="title">{title}</h2>}
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
