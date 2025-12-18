import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import Footer from './Footer'

const navGroups = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Le Festival',
    children: [
      { label: 'Valeurs', to: '/valeurs' },
      { label: 'Team Glob’Escale', to: '/equipe' },
      { label: 'Première édition', to: '/premiere-edition' },
    ],
  },
  {
    label: 'Nos escales',
    children: [
      { label: 'Culinaires', to: '/escales/culinaires' },
      { label: 'Artisanales', to: '/escales/artisanales' },
      { label: 'Artistiques', to: '/escales/artistiques' },
      { label: 'Associatives', to: '/escales/associatives' },
    ],
  },
  { label: 'Programme', to: '/programme' },
  { label: 'Partenaires', to: '/partenaires' },
  { label: 'Infos pratiques', to: '/infos-pratiques' },
]

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActivePath = (to) => {
    const path = location.pathname
    return path === to || path.startsWith(`${to}/`)
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <div className="app">
      <header className="topbar">
        <div className="page-shell topbar__inner">
          <NavLink to="/" className="brand">
            <img src={logo} alt="Glob’Escale" />
          </NavLink>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {navGroups.map((item) =>
              item.children ? (
                <div key={item.label} className="nav-group">
                  <span
                    className={`nav-group__label ${
                      item.children.some((c) => isActivePath(c.to)) ? 'active' : ''
                    }`}
                  >
                    {item.label}
                    <span className="chevron">▾</span>
                  </span>
                  <div className="subnav">
                    {item.children.map((sub) => (
                      <NavLink key={sub.to} to={sub.to} className={linkClass}>
                        {sub.label}
                      </NavLink>
              ))}
            </div>
          </div>
        ) : (
          <NavLink key={item.to} to={item.to} className={linkClass}>
            {item.label}
          </NavLink>
        ),
      )}
        <NavLink to="/contact" className="button solid nav-contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
