"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Heart } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Eventos", path: "/eventos" },
    { name: "Cursos", path: "/cursos" },
    { name: "Doação", path: "/doacao" },
    { name: "Galeria", path: "/galeria" },
    { name: "Contato", path: "/contato" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-instituto-green p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-instituto-green">Instituto Amar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-instituto-green border-b-2 border-instituto-green"
                    : "text-gray-700 hover:text-instituto-green"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/doacao" className="btn-primary">
              Doe Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 w-full">
            <div className="flex flex-col space-y-4 w-full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 px-4 py-2 ${
                    location.pathname === item.path
                      ? "text-instituto-green"
                      : "text-gray-700 hover:text-instituto-green"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/doacao" className="btn-primary inline-block text-center w-full" onClick={() => setIsOpen(false)}>
                Doe Agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

