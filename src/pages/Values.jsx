import PageHero from '../components/PageHero'
import { valuesList } from '../content'

function Values() {
  return (
    <>
      <PageHero
        eyebrow="Le festival"
        title="Nos valeurs"
        description="Célébrer la diversité, garantir l’équité et encourager la solidarité : trois piliers qui guident Glob’Escale."
      />

      <section className="section">
        <div className="page-shell cards">
          {valuesList.map((value) => (
            <article key={value.title} className="card card--stacked">
              <h3>{value.title}</h3>
              <p className="muted">{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Values
