import PageHero from '../components/PageHero'
import { editionHighlights } from '../content'

function PremiereEdition() {
  return (
    <>
      <PageHero
        eyebrow="Le festival"
        title="La première édition"
        description="En avril 2025, Glob’Escale a posé ses valises sur l’Île de Nantes pour un tour du monde en une journée."
      />

      <section className="section">
        <div className="page-shell">
          <div className="section__description">
            {editionHighlights.intro.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="stats-grid">
            {editionHighlights.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="cards cards--loose">
            {editionHighlights.sections.map((section) => (
              <article key={section.title} className="card card--stacked">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PremiereEdition
