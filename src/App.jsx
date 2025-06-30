import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import EventDetail from "./pages/EventDetail"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Donation from "./pages/Donation"
import Donation2 from "./pages/Donation2"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/eventos/:id" element={<EventDetail />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/:id" element={<CourseDetail />} />
          <Route path="/doacao" element={<Donation />} />
          <Route path="/doacao2" element={<Donation2 />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
