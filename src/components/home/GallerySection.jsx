import { Link } from "react-router-dom"
import { Camera, ArrowRight } from "lucide-react"
import { galleryImages } from "../../data/mockData"

const GallerySection = () => {
  const featuredImages = galleryImages.slice(0, 6)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-instituto-green mb-6">Nossa Galeria</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja alguns momentos especiais dos nossos eventos, cursos e atividades diárias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm text-gray-200 capitalize">{image.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/galeria" className="btn-primary inline-flex items-center space-x-2">
            <span>Ver Galeria Completa</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
