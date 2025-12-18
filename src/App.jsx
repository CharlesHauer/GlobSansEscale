import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Values from './pages/Values'
import Team from './pages/Team'
import PremiereEdition from './pages/PremiereEdition'
import Culinaires from './pages/Culinaires'
import Artisanales from './pages/Artisanales'
import Artistiques from './pages/Artistiques'
import Associatives from './pages/Associatives'
import Programme from './pages/Programme'
import Partenaires from './pages/Partenaires'
import InfosPratiques from './pages/InfosPratiques'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="valeurs" element={<Values />} />
        <Route path="equipe" element={<Team />} />
        <Route path="premiere-edition" element={<PremiereEdition />} />

        <Route path="escales/culinaires" element={<Culinaires />} />
        <Route path="escales/artisanales" element={<Artisanales />} />
        <Route path="escales/artistiques" element={<Artistiques />} />
        <Route path="escales/associatives" element={<Associatives />} />

        <Route path="programme" element={<Programme />} />
        <Route path="partenaires" element={<Partenaires />} />
        <Route path="infos-pratiques" element={<InfosPratiques />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
