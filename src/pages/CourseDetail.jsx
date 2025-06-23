"use client"
import { useParams, Link } from "react-router-dom"
import { Clock, Users, BookOpen, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { courses } from "../data/mockData"

const CourseDetail = () => {
  const { id } = useParams()
  const course = courses.find((c) => c.id === Number.parseInt(id))

  if (!course) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">Curso não encontrado</h1>
          <Link to="/cursos" className="btn-primary">
            Voltar para Cursos
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
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="container-custom h-full flex items-end pb-12">
            <div className="text-white">
              <Link
                to="/cursos"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Cursos
              </Link>
              <div className="bg-instituto-gold text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Curso Gratuito
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{course.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-instituto-green mb-6">Sobre o Curso</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{course.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-instituto-green mb-4">Objetivos do Curso</h3>
                  <ul className="space-y-3">
                    {course.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-instituto-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-instituto-green mb-4">Público-Alvo</h3>
                  <p className="text-gray-600 leading-relaxed">{course.targetAudience}</p>
                </div>

                {course.instructor && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-instituto-green mb-6">Instrutor</h3>
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.instructor.photo || "/placeholder.svg"}
                        alt={course.instructor.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{course.instructor.name}</h4>
                        <p className="text-gray-600">{course.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                )}

                {course.gallery && course.gallery.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-instituto-green mb-6">Galeria do Curso</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`${course.title} - Foto ${index + 1}`}
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
                <h3 className="text-2xl font-bold text-instituto-green mb-6">Informações do Curso</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-instituto-green mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Duração</p>
                      <p className="text-gray-600">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-instituto-green mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Horário</p>
                      <p className="text-gray-600">{course.schedule}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-instituto-green mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Público-Alvo</p>
                      <p className="text-gray-600">{course.targetAudience}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-instituto-gold/10 border border-instituto-gold/20 rounded-lg p-4 mb-6">
                  <p className="text-instituto-gold font-semibold text-center">✨ Curso 100% Gratuito ✨</p>
                </div>

                <div className="space-y-3">
                  <Link to="/contato" className="btn-primary w-full text-center block">
                    Inscrever-se Agora
                  </Link>
                  <a
                    href="https://wa.me/5513999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center block"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-instituto-green mb-8 text-center">Outros Cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses
              .filter((c) => c.id !== course.id)
              .slice(0, 3)
              .map((relatedCourse) => (
                <div key={relatedCourse.id} className="card">
                  <div className="relative">
                    <img
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-instituto-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Gratuito
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-instituto-green mb-3">{relatedCourse.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedCourse.description}</p>
                    <Link
                      to={`/cursos/${relatedCourse.id}`}
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
    </div>
  )
}

export default CourseDetail
