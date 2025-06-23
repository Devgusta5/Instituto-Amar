import { Link } from "react-router-dom"
import { BookOpen, Clock, Users, ArrowRight, GraduationCap } from "lucide-react"
import { courses } from "../data/mockData"

const Courses = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-instituto-green to-green-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossos Cursos</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Oferecemos cursos gratuitos de capacitação profissional para empoderar nossa comunidade e criar
              oportunidades de crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-green mb-6">Por que Fazer Nossos Cursos?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos cursos são desenvolvidos pensando nas necessidades reais da comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-instituto-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-instituto-green" />
              </div>
              <h3 className="text-lg font-bold text-instituto-green mb-2">100% Gratuito</h3>
              <p className="text-gray-600">Todos os nossos cursos são oferecidos gratuitamente para a comunidade.</p>
            </div>

            <div className="text-center">
              <div className="bg-instituto-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-instituto-red" />
              </div>
              <h3 className="text-lg font-bold text-instituto-red mb-2">Turmas Pequenas</h3>
              <p className="text-gray-600">Atendimento personalizado com turmas reduzidas para melhor aprendizado.</p>
            </div>

            <div className="text-center">
              <div className="bg-instituto-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-instituto-gold" />
              </div>
              <h3 className="text-lg font-bold text-instituto-gold mb-2">Material Incluso</h3>
              <p className="text-gray-600">Todo material didático necessário é fornecido gratuitamente.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-green-600 mb-2">Horários Flexíveis</h3>
              <p className="text-gray-600">Oferecemos diferentes horários para se adequar à sua rotina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} className="card animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-instituto-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Gratuito
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-instituto-green mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Duração: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{course.schedule}</span>
                    </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-instituto-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para se inscrever em nossos cursos ou para mais informações sobre as próximas
            turmas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-accent">
              Inscrever-se Agora
            </Link>
            <a
              href="https://wa.me/5513999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-instituto-green font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
