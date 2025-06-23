import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"
import { events } from "../../data/mockData"

const EventsSection = () => {
  const recentEvents = events.slice(0, 3)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-instituto-green mb-6">Nossos Eventos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acompanhe os eventos que realizamos para transformar vidas e fortalecer nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentEvents.map((event, index) => (
            <div key={event.id} className="card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-instituto-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {new Date(event.date).toLocaleDateString("pt-BR")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-instituto-green mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString("pt-BR")}</span>
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

        <div className="text-center">
          <Link to="/eventos" className="btn-primary">
            Ver Todos os Eventos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
