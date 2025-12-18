import { useState } from 'react'
import PageHero from '../components/PageHero'
import { contactReasons } from '../content'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contactez-nous"
        description="Une question, une envie de partenariat ou de bénévolat ? L’équipe vous répond rapidement."
      />

      <section className="section">
        <div className="page-shell form-card">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Votre nom
              <input type="text" name="name" required placeholder="Nom et prénom" />
            </label>
            <label>
              Votre email
              <input type="email" name="email" required placeholder="vous@example.com" />
            </label>
            <label>
              Votre téléphone
              <input type="tel" name="phone" placeholder="06 00 00 00 00" />
            </label>
            <label>
              Votre demande
              <select name="reason" required>
                <option value="">Choisissez une option</option>
                {contactReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Votre message
              <textarea name="message" rows="5" placeholder="Expliquez votre projet ou votre question" />
            </label>
            <button className="button solid" type="submit">
              Envoyer la demande
            </button>
            <p className="muted small">
              Un back-end/formulaire (type Formspree, Brevo ou API maison) peut être branché ici. Pour le moment, le
              formulaire reste statique.
            </p>
            {submitted ? <p className="tag success">Merci ! Votre message est prêt à être envoyé.</p> : null}
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
