import { Link } from "react-router-dom"
import { Clock, ArrowRight } from "lucide-react"
import { courses } from "../../data/mockData"

const CoursesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-instituto-green mb-6">Nossos Cursos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos cursos gratuitos para capacitar e empoderar nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={course.id} className="card animate-scale-in w-full" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-instituto-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Gratuito
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-instituto-green mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <Link
                  to={`/cursos/${course.id}`}
                  className="inline-flex items-center text-instituto-green hover:text-green-800 font-semibold transition-colors"
                >
                  Saiba Mais
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/cursos" className="btn-primary">
            Ver Todos os Cursos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
