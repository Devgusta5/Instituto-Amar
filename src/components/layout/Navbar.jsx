"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Heart, Home, Info, Calendar, Book, Image, Phone, HandHeart } from "lucide-react"

const navItems = [
  { name: "Início", path: "/", icon: <Home /> },
  { name: "Sobre", path: "/sobre", icon: <Info /> },
  { name: "Eventos", path: "/eventos", icon: <Calendar /> },
  { name: "Cursos", path: "/cursos", icon: <Book /> },
  { name: "Doação", path: "/doacao", icon: <HandHeart /> },
  { name: "Galeria", path: "/galeria", icon: <Image /> },
  { name: "Contato", path: "/contato", icon: <Phone /> },
]

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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
        ${isOpen ? "bg-transparent" : "bg-transparent"}
        ${(isScrolled ? " md:bg-white md:shadow-lg md:py-2" : " md:bg-white/95 md:backdrop-blur-sm md:py-4")}
      `}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo flutuante sempre visível */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <div className="bg-instituto-green p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-instituto-green hidden md:inline">
              {/* Só mostra o título em telas md+ */}
              Instituto Amar
            </span>
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

          {/* Mobile Floating Menu */}
          <div className="md:hidden fixed right-6 bottom-6 z-50">
            {/* Botão circular flutuante */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`menu-open-button flex items-center justify-center bg-instituto-green rounded-full w-16 h-16 shadow-lg transition-transform duration-300
                ${isOpen ? "scale-90" : "hover:scale-110"}
              `}
              style={{ position: "relative" }}
            >
              {/* Hamburger/X icon - 3 traços e X animado */}
              <span
                className={`absolute left-1/2 top-1/2 w-8 h-1 bg-white rounded transition-all duration-300
                  ${isOpen ? "rotate-45 -translate-x-1/2 -translate-y-1/2" : "-translate-x-1/2 -translate-y-3"}
                `}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-8 h-1 bg-white rounded transition-all duration-300
                  ${isOpen ? "opacity-0" : "-translate-x-1/2 -translate-y-1/2"}
                `}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-8 h-1 bg-white rounded transition-all duration-300
                  ${isOpen ? "-rotate-45 -translate-x-1/2 -translate-y-1/2" : "-translate-x-1/2 translate-y-3"}
                `}
              />
            </button>
            {/* Floating menu items */}
            <div className="absolute right-0 bottom-0 w-0 h-0">
              {navItems.map((item, idx) => {
                // Arco entre 120° (esquerda-cima) e 210° (esquerda-baixo), mais para a esquerda
                const total = navItems.length
                const start = (0 * Math.PI) / 5// 120 graus
                const end = (4 * Math.PI) / 7.5 // 210 graus
                const angle = start + (idx * (end - start) / (total - 1))
                const radius = isOpen ? 185 : 0
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`menu-item flex flex-col items-center justify-center absolute w-14 h-14 rounded-full
                      bg-instituto-green/80 text-white shadow-lg transition-all duration-300
                      ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
                      hover:bg-white hover:text-instituto-green
                    `}
                    style={{
                      right: 0,
                      bottom: 0,
                      transform: `translate(${-x}px, ${-y}px)`,
                      transitionDelay: isOpen ? `${idx * 60}ms` : "0ms"
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs font-semibold">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar
