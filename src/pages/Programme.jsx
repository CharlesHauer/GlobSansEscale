import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function Programme() {
  return (
    <>
      <PageHero
        eyebrow="Programme"
        title="Programme en préparation"
        description="Nous finalisons les horaires et les animations de la prochaine édition. En attendant, parcourez les escales pour découvrir l’esprit du festival."
      />

      <section className="section">
        <div className="page-shell cards">
          <article className="card card--stacked">
            <h3>Restez informé·e</h3>
            <p>
              Le programme détaillé sera publié prochainement. Suivez-nous sur les réseaux ou contactez-nous pour être
              prévenu dès sa mise en ligne.
            </p>
            <div className="hero__actions">
              <Link className="button solid" to="/contact">
                Être contacté
              </Link>
              <a
                className="button ghost"
                href="https://www.instagram.com/globescale.festival"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Programme
