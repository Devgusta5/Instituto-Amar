"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Calendar, MapPin, Users, ArrowRight, Filter } from "lucide-react"
import { events } from "../data/mockData"

const Events = () => {
  const [filter, setFilter] = useState("all")

  const currentDate = new Date()
  const pastEvents = events.filter((event) => new Date(event.date) < currentDate)
  const upcomingEvents = events.filter((event) => new Date(event.date) >= currentDate)

  const getFilteredEvents = () => {
    switch (filter) {
      case "upcoming":
        return upcomingEvents
      case "past":
        return pastEvents
      default:
        return events
    }
  }

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-instituto-green to-green-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossos Eventos</h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
              Acompanhe todos os eventos que realizamos para transformar vidas e fortalecer nossa comunidade em
              Mongaguá.
            </p>
          </div>
        </div>
      </section>

      {/* Remova a Filter Section */}

      {/* Events Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {events.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Nenhum evento encontrado</h3>
              <p className="text-gray-500">Não há eventos no momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={event.id} className="card animate-scale-in w-full" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-instituto-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {new Date(event.date).toLocaleDateString("pt-BR")}
                    </div>
                    {new Date(event.date) >= new Date() && (
                      <div className="absolute top-4 right-4 bg-instituto-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Próximo
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-instituto-green mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString("pt-BR")}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      {event.participants && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.participants} participantes</span>
                        </div>
                      )}
                    </div>

                    <Link
                      to={`/eventos/${event.id}`}
                      className="inline-flex items-center text-instituto-green hover:text-green-800 font-semibold transition-colors"
                    >
                      Ver Detalhes
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Events
