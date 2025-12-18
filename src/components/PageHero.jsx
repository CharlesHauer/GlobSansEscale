function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="page-shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="lede">{description}</p> : null}
      </div>
    </section>
  )
}

export default PageHero
