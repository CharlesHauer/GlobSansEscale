import logo from '../assets/logo.png'

const socials = [
  { label: 'Instagram', url: 'https://www.instagram.com/globescale.festival' },
  { label: 'Facebook', url: 'https://www.facebook.com/share/1ENu3MmiRw/?mibextid=wwXIfr' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/globescale/' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Glob’Escale" />
          <div>
            <h4>Glob’Escale</h4>
            <p>Festival multiculturel • Nantes</p>
          </div>
        </div>

        <div className="footer__links">
          {socials.map((item) => (
            <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer__legal">
          <a href="https://globescale.fr/?page_id=351" target="_blank" rel="noreferrer">
            Politique de confidentialité
          </a>
          <a href="https://globescale.fr/?page_id=322" target="_blank" rel="noreferrer">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
