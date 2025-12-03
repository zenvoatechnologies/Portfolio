import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import ProjectDetails from './pages/ProjectDetails'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<ProjectDetails />} />
    </Routes>
  )
}
