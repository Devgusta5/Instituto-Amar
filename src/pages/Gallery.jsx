"use client"

import { useState } from "react"
import { X, Filter, Camera, Calendar, Users, BookOpen } from 'lucide-react'
import { galleryImages } from "../data/mockData"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = [
    { id: "all", name: "Todas", icon: Camera },
    { id: "eventos", name: "Eventos", icon: Calendar },
    { id: "cursos", name: "Cursos", icon: BookOpen },
    { id: "rotina", name: "Rotina", icon: Users },
  ]

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image) => {
    setLightboxImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-instituto-green to-green-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossa Galeria</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Momentos especiais capturados ao longo de nossa jornada. Cada imagem conta uma história de transformação,
              amor e esperança.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filtrar por categoria:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-instituto-green text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Nenhuma imagem encontrada</h3>
              <p className="text-gray-500">Não há imagens para a categoria selecionada.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in w-full"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm mb-1">{image.alt}</p>
                      <span className="inline-block bg-instituto-green text-white px-2 py-1 rounded text-xs font-medium capitalize">
                        {image.category}
                      </span>
                    </div>
                  </div>

                  {/* Camera Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-instituto-green mb-6">Nossa Galeria em Números</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-instituto-green mb-2">
                {galleryImages.length}+
              </div>
              <div className="text-gray-600">Fotos na Galeria</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-instituto-green mb-2">
                {galleryImages.filter(img => img.category === 'eventos').length}+
              </div>
              <div className="text-gray-600">Eventos Documentados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-instituto-green mb-2">
                {galleryImages.filter(img => img.category === 'cursos').length}+
              </div>
              <div className="text-gray-600">Cursos Registrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-instituto-green mb-2">3+</div>
              <div className="text-gray-600">Anos de Memórias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={lightboxImage.src || "/placeholder.svg"}
              alt={lightboxImage.alt}
              className="lightbox-image rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-lg mb-2">{lightboxImage.alt}</h3>
              <span className="inline-block bg-instituto-green text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                {lightboxImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery