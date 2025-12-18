import PageHero from '../components/PageHero'
import { infosPratiques } from '../content'

function InfosPratiques() {
  return (
    <>
      <PageHero
        eyebrow="Infos pratiques"
        title="Préparez votre venue"
        description="Toutes les informations pour rejoindre le festival et réduire ensemble notre empreinte carbone."
      />

      <section className="section">
        <div className="page-shell cards cards--loose">
          <article className="card card--stacked">
            <h3>Localisation</h3>
            <p>{infosPratiques.localisation}</p>
          </article>

          <article className="card card--stacked">
            <h3>Mobilité, réduisons notre empreinte</h3>
            {infosPratiques.mobilite.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>

          <article className="card card--stacked">
            <h3>Transports en commun</h3>
            {infosPratiques.transports.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>

          <article className="card card--stacked">
            <h3>Parkings</h3>
            {infosPratiques.parkings.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

export default InfosPratiques
