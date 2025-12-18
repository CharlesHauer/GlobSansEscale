import PageHero from '../components/PageHero'
import { culinaryVendors } from '../content'

function Culinaires() {
  return (
    <>
      <PageHero
        eyebrow="Nos escales"
        title="Escales culinaires"
        description="Un voyage culinaire à travers le monde : food-trucks et traiteurs des quatre coins du globe pour faire voyager vos papilles."
      />

      <section className="section">
        <div className="page-shell cards cards--loose">
          {culinaryVendors.map((item) => (
            <article key={item.title} className="card card--stacked">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="muted">{item.highlight}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Culinaires
