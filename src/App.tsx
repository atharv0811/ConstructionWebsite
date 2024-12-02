import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout"
import HomePage from "./pages/home"
import ProjectsPage from "./pages/projects-page"
import DesignsPage from "./pages/designs-page"
import ContactPage from "./pages/contact-page"
import InteriorPage from "./pages/interior-page"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/designs" element={<DesignsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
