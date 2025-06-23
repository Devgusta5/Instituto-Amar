"use client"
import { useParams, Link } from "react-router-dom"
import { Calendar, MapPin, Users, DollarSign, ArrowLeft, Share2, ArrowRight } from "lucide-react"
import { events } from "../data/mockData"

const EventDetail = () => {
  const { id } = useParams()
  const event = events.find((e) => e.id === Number.parseInt(id))

  if (!event) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">Evento não encontrado</h1>
          <Link to="/eventos" className="btn-primary">
            Voltar para Eventos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="container-custom h-full flex items-end pb-12">
            <div className="text-white">
              <Link
                to="/eventos"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Eventos
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString("pt-BR")}</span>
                </div>
                {event.location && (
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-instituto-green mb-6">Sobre o Evento</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{event.fullDescription}</p>

                {event.gallery && event.gallery.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-instituto-green mb-6">Galeria do Evento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {event.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${event.title} - Foto ${index + 1}`}
                          className="rounded-lg shadow-lg w-full h-64 object-cover hover:shadow-xl transition-shadow duration-300"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-instituto-green mb-6">Informações do Evento</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-instituto-green mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Data</p>
                      <p className="text-gray-600">{new Date(event.date).toLocaleDateString("pt-BR")}</p>
                    </div>
                  </div>

                  {event.location && (
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-instituto-green mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Local</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>
                  )}

                  {event.participants && (
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-instituto-green mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Participantes</p>
                        <p className="text-gray-600">{event.participants} pessoas</p>
                      </div>
                    </div>
                  )}

                  {event.donations && (
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-instituto-green mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Arrecadação</p>
                        <p className="text-gray-600">{event.donations}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Link to="/doacao" className="btn-primary w-full text-center block">
                    Apoie Nossos Eventos
                  </Link>
                  <button className="w-full flex items-center justify-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Compartilhar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-instituto-green mb-8 text-center">Outros Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events
              .filter((e) => e.id !== event.id)
              .slice(0, 3)
              .map((relatedEvent) => (
                <div key={relatedEvent.id} className="card">
                  <div className="relative">
                    <img
                      src={relatedEvent.image || "/placeholder.svg"}
                      alt={relatedEvent.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-instituto-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {new Date(relatedEvent.date).toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-instituto-green mb-3">{relatedEvent.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedEvent.description}</p>
                    <Link
                      to={`/eventos/${relatedEvent.id}`}
                      className="inline-flex items-center text-instituto-green hover:text-green-800 font-semibold transition-colors"
                    >
                      Ver Detalhes
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventDetail
