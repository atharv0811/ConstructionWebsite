import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import ProjectsPage from "./pages/projects"
import HomePage from "./pages/home"
import ContactPage from "./pages/contact"
import Designs from "./pages/designs"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/designs" element={<Designs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
