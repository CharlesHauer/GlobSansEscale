import PageHero from '../components/PageHero'
import { associativeLineup } from '../content'

function Associatives() {
  return (
    <>
      <PageHero
        eyebrow="Nos escales"
        title="Escales associatives"
        description="Rencontrez des associations locales engagées, prêtes à partager leurs actions, leurs cultures et leurs passions."
      />

      <section className="section">
        <div className="page-shell cards cards--loose">
          {associativeLineup.map((item) => (
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

export default Associatives
