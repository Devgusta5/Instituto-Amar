import { Link } from "react-router-dom"
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-instituto-green text-white" style={{ fontFamily: "'Poppins', sans-serif" }} >
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4 flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Instituto Amar</span>
            </div>
            <p className="text-green-100 max-w-xs">Transformando vidas através do amor e solidariedade em Mongaguá.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-green-100 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-green-100 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-green-100 hover:text-white transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-green-100 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
            </ul>
          </div>

          {/* Como Ajudar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Como Ajudar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/doacao" className="text-green-100 hover:text-instituto-green transition-colors">
  Fazer Doação
</Link>
              </li>
              <li>
                <Link to="/contato" className="text-green-100 hover:text-white transition-colors">
                  Ser Voluntário
                </Link>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Parcerias
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  Divulgar
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-green-100 mt-0.5" />
                <span className="text-green-100 text-sm">
                  Rua das Flores, 123
                  <br />
                  Mongaguá - SP
                  <br />
                  CEP: 11730-000
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-100" />
                <span className="text-green-100 text-sm">(13) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-100" />
                <span className="text-green-100 text-sm">contato@institutoamar.org.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100 text-sm break-words">
            © 2024 Instituto Amar. Todos os direitos reservados. |
            <span className="ml-1 block sm:inline">Desenvolvido com ❤️ para transformar vidas</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
