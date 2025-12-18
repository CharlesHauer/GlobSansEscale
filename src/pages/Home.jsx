import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.jpg'
import locationImage from '../assets/location.jpg'
import { callsToAction, collaborators, escalesOverview, homeIntro } from '../content'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__background" aria-hidden="true">
          <img src={heroImage} alt="" />
          <div className="hero__overlay" />
        </div>
        <div className="page-shell hero__content">
          <p className="eyebrow">Festival en plein cœur de Nantes</p>
          <h1>{homeIntro.title}</h1>
          <p className="lede">{homeIntro.description}</p>
          <div className="hero__actions">
            <Link className="button solid" to="/escales/culinaires">
              Découvrir les escales
            </Link>
            <Link className="button ghost" to="/partenaires">
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell section__header">
          <p className="eyebrow">À propos</p>
          <h2>Une expérience immersive et solidaire</h2>
          <p className="section__description">
            Glob’Escale rassemble musique, danse, gastronomie et ateliers pour faire vibrer la métropole nantaise.
            En vous promenant sur le festival, vous rencontrez des acteurs locaux tout en célébrant la diversité.
          </p>
        </div>
      </section>

      <section className="section location">
        <div className="page-shell">
          <div className="location__content">
            <div>
              <p className="eyebrow">Lieu</p>
              <h3>Parc des Chantiers, Île de Nantes</h3>
              <p>
                C’est en plein centre de Nantes que Glob’Escale pose ses valises. Un espace dynamique et culturel
                incontournable de la métropole, idéal pour accueillir une aventure humaine et solidaire.
              </p>
            </div>
            <div className="location__media">
              <img src={locationImage} alt="Parc des Chantiers à Nantes" />
              <div className="location__tag">Nantes • Île de Nantes</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="escales">
        <div className="page-shell">
          <div className="section__header">
            <p className="eyebrow">Nos escales</p>
            <h2>Des expériences pour tous les voyageurs</h2>
            <p className="section__description">
              Quatre univers pour découvrir, partager et se laisser surprendre. Chaque escale est une invitation à la
              rencontre.
            </p>
          </div>
          <div className="cards">
            {escalesOverview.map((escale) => (
              <article key={escale.title} className="card card--link">
                <div className="card__icon">
                  <img src={escale.icon} alt="" />
                </div>
                <div className="card__body">
                  <h3>{escale.title}</h3>
                  <p>{escale.description}</p>
                  <p className="muted">{escale.detail}</p>
                  <Link className="inline-link" to={escale.to}>
                    En savoir plus →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section partners">
        <div className="page-shell">
          <div className="section__header">
            <p className="eyebrow">Ils nous font confiance</p>
            <h2>Des partenaires engagés pour un voyage plus humain</h2>
            <p className="section__description">
              Grâce à leur soutien, chaque escale devient une rencontre et chaque projet une aventure collective.
            </p>
          </div>
          <div className="logos">
            {collaborators.map((partner) => (
              <a
                key={partner.name}
                className="logo-card"
                href={partner.url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={partner.logo} alt={partner.name} />
                <span>{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section callouts">
        <div className="page-shell">
          <div className="section__header">
            <p className="eyebrow">Nous rejoindre</p>
            <h2>Faites partie de l’aventure Glob’Escale</h2>
          </div>
          <div className="calls">
            {callsToAction.map((item) => (
              <article key={item.title} className="call-card">
                <div className="call-card__header">
                  <h3>{item.title}</h3>
                </div>
                <p>{item.copy}</p>
                <p className="muted">{item.detail}</p>
                <Link className="button solid full" to={item.link}>
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
