import PageHero from '../components/PageHero'
import { artisanWorkshops } from '../content'

function Artisanales() {
  return (
    <>
      <PageHero
        eyebrow="Nos escales"
        title="Escales artisanales"
        description="Découvertes des savoir-faire du monde : ateliers créatifs pour plonger dans l’art et les traditions de différents pays."
      />

      <section className="section">
        <div className="page-shell cards cards--loose">
          {artisanWorkshops.map((item) => (
            <article key={item.title} className="card card--stacked">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Artisanales
