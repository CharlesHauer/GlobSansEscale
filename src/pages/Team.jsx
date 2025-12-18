import PageHero from '../components/PageHero'
import { teamMembers } from '../content'

function Team() {
  return (
    <>
      <PageHero
        eyebrow="Le festival"
        title="Team Glob’Escale"
        description="Glob’Escale est d’abord un projet étudiant né d’une ambition commune : offrir une aventure unique de célébration de la diversité."
      />

      <section className="section">
        <div className="page-shell cards">
          {teamMembers.map((person) => (
            <article key={person.name} className="card card--stacked">
              <h3>{person.name}</h3>
              <p className="muted">{person.role}</p>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Team
