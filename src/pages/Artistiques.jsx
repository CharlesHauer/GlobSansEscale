import PageHero from '../components/PageHero'
import { artisticLineup } from '../content'

function Artistiques() {
  return (
    <>
      <PageHero
        eyebrow="Nos escales"
        title="Escales artistiques"
        description="Performances, danses et concerts qui célèbrent la créativité mondiale. Un tour du monde des talents pour vibrer ensemble."
      />

      <section className="section">
        <div className="page-shell cards cards--loose">
          {artisticLineup.map((item) => (
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

export default Artistiques
