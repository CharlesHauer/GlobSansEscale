import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { collaborators, partnerCards } from '../content'

function Partenaires() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title="Ils embarquent avec nous"
        description="Parce que le voyage Glob’Escale ne serait pas le même sans eux. Merci aux partenaires qui soutiennent et enrichissent l’expérience."
      />

      <section className="section">
        <div className="page-shell logos logos--compact">
          {collaborators.map((partner) => (
            <a key={partner.name} className="logo-card" href={partner.url} target="_blank" rel="noreferrer">
              <img src={partner.logo} alt={partner.name} />
              <span>{partner.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-shell cards cards--loose">
          {partnerCards.map((partner) => (
            <article key={partner.title} className="card card--stacked">
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page-shell call-card call-card--wide">
          <h3>Envie de devenir partenaire ?</h3>
          <p>
            Associez votre image à une aventure humaine et solidaire, et rejoignez un réseau local engagé à Nantes. Nous
            imaginons ensemble des activations sur-mesure.
          </p>
          <div className="hero__actions">
            <Link className="button solid" to="/contact">
              Échanger avec l’équipe
            </Link>
            <a className="button ghost" href="mailto:contact@globescale.fr">
              contact@globescale.fr
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partenaires
