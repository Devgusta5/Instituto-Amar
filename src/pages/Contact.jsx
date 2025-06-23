"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Heart, CheckCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    volunteer: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        volunteer: false,
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua das Flores, 123", "Centro - Mongaguá - SP", "CEP: 11730-000"],
      color: "text-instituto-pink",
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(13) 99999-9999", "WhatsApp disponível"],
      color: "text-instituto-red",
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@institutoamar.org.br", "Respondemos em até 24h"],
      color: "text-instituto-gold",
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta: 8h às 17h", "Sábados: 8h às 12h"],
      color: "text-pink-600",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-instituto-green to-green-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Estamos aqui para ouvir você. Entre em contato conosco para tirar dúvidas, fazer sugestões ou se tornar um
              voluntário.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div
                  className={`${info.color} bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-instituto-green mb-8">Envie uma Mensagem</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-600">Obrigado pelo seu contato. Responderemos em breve!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors"
                        placeholder="(13) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="duvidas">Dúvidas Gerais</option>
                        <option value="voluntario">Quero ser Voluntário</option>
                        <option value="doacao">Doações</option>
                        <option value="parceria">Parcerias</option>
                        <option value="cursos">Cursos</option>
                        <option value="eventos">Eventos</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors resize-none"
                      placeholder="Escreva sua mensagem aqui..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="volunteer"
                      name="volunteer"
                      checked={formData.volunteer}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-instituto-green focus:ring-instituto-green border-gray-300 rounded"
                    />
                    <label htmlFor="volunteer" className="ml-2 text-sm text-gray-700">
                      Tenho interesse em ser voluntário(a)
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-instituto-green hover:bg-green-800 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-instituto-green mb-8">Nossa Localização</h2>
                <div className="bg-gray-300 rounded-2xl h-64 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-semibold">Mapa Interativo</p>
                    <p className="text-sm">Rua das Flores, 123 - Mongaguá/SP</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-instituto-green mb-6">Outras Formas de Contato</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5513999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="bg-pink-500 rounded-full p-2">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-600">Resposta rápida via WhatsApp</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@institutoamar.org.br"
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="bg-blue-500 rounded-full p-2">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">E-mail Direto</p>
                      <p className="text-sm text-gray-600">contato@institutoamar.org.br</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-instituto-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Faça Parte da Nossa Família</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Seja como voluntário, doador ou parceiro, há sempre uma forma de contribuir com nossa missão de transformar
            vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/doacao"
              className="btn-accent inline-flex items-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Fazer Doação</span>
            </a>
            <a
              href="https://wa.me/5513999999999?text=Olá! Gostaria de ser voluntário no Instituto Amar."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-instituto-green font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <User className="h-5 w-5" />
              <span>Ser Voluntário</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
