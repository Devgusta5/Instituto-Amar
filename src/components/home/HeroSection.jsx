import { Link } from "react-router-dom"
import { ArrowRight, Heart, Users, Award } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-instituto-green via-green-700 to-green-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transformando Vidas
              <span className="block text-instituto-gold">Através do Amor</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              O Instituto Amar é uma organização dedicada a promover o bem-estar social 
              e transformar comunidades em Mongaguá através de ações solidárias.
            </p>
          </div>

          

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/doacao" className="btn-accent text-lg px-8 py-4 flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Doe Agora</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/sobre" className="border-2 border-white text-white hover:bg-white hover:text-instituto-green font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Conheça Nossa História
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-green-600">
            <div className="text-center animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-instituto-gold" />
              </div>
              <div className="text-3xl font-bold text-instituto-gold">500+</div>
              <div className="text-green-100">Vidas Impactadas</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-instituto-gold" />
              </div>
              <div className="text-3xl font-bold text-instituto-gold">50+</div>
              <div className="text-green-100">Eventos Realizados</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-instituto-gold" />
              </div>
              <div className="text-3xl font-bold text-instituto-gold">10+</div>
              <div className="text-green-100">Anos de Dedicação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
