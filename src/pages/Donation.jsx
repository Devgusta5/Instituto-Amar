"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Heart, CheckCircle } from "lucide-react"
import emailjs from 'emailjs-com';

const Donation = () => {
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
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_m2pks35',
      'template_sjslxrs',
      {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        volunteer: formData.volunteer ? 'Sim' : 'Não',
      },
      'pEC4qrpm67z0Hpsa9'
    ).then(
      (result) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          volunteer: false,
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      },
      (error) => {
        alert('Ocorreu um erro. Tente novamente!');
        setIsSubmitting(false);
      }
    );
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua das Flores, 123", "Centro - Mongaguá - SP", "CEP: 11730-000"],
      color: "text-pink-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(13) 99999-9999", "WhatsApp disponível"],
      color: "text-pink-600",
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@institutoamar.org.br", "Respondemos em até 72h"],
      color: "text-pink-600",
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta: 8h às 17h", "Sábados: 8h às 12h"],
      color: "text-pink-600",
    },
  ]

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-instituto-green to-green-800 text-white">
        <div className="container-custom px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Doações de bens? É só chamar! </h1>
            <p className="text-lg md:text-2xl text-green-100 leading-relaxed">
              Essa página é destinada à doação de objetos físicos como roupas, brinquedos, alimentos, móveis, entre outros. 
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className={`${info.color} bg-gray-100 rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                  <info.icon className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-xs md:text-sm">
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
        <div className="container-custom px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-instituto-green mb-6 md:mb-8">Envie uma Mensagem</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
                  <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-1 md:mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-600 text-sm md:text-base">
                    Obrigado pelo seu contato. Responderemos em breve!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors text-sm"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors text-sm"
                        placeholder="(13) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors text-sm"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Dúvidas Gerais">Dúvidas Gerais</option>
                        <option value="Quero ser Voluntário">Quero ser Voluntário</option>
                        <option value="Doações">Doações</option>
                        <option value="Parcerias">Parcerias</option>
                        <option value="Cursos">Cursos</option>
                        <option value="Eventos">Eventos</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-instituto-green focus:border-transparent transition-colors resize-none text-sm"
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
                    <label htmlFor="volunteer" className="ml-2 text-xs md:text-sm text-gray-700">
                      Tenho interesse em ser voluntário(a)
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-instituto-green hover:bg-green-800 disabled:bg-gray-400 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2 text-sm md:text-base"
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
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-instituto-green mb-6 md:mb-8">Nossa Localização</h2>
                <div className="bg-gray-300 rounded-2xl h-64 md:h-96 flex items-center justify-center mb-4 md:mb-6 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.0783775024915!2d-46.69678542389731!3d-24.133885482876767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce29d9d09031b1%3A0xa407d6bffe84280c!2sInstituto%20(A)mar!5e0!3m2!1spt-BR!2sbr!4v1750785938971!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "1rem", minHeight: "220px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Instituto Amar"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-instituto-green mb-4 md:mb-6">Outras Formas de Contato</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 p-3 md:p-4 bg-green-50 rounded-lg">
                    <div className="bg-pink-500 rounded-full p-2 mb-2 sm:mb-0">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">WhatsApp</p>
                      <p className="text-xs md:text-sm text-gray-600">Fale conosco diretamente pelo WhatsApp para dúvidas rápidas ou doações de objetos.</p>
                    </div>
                    <a
                      href="https://wa.me/5513999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 sm:mt-0 ml-0 sm:ml-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-3 md:px-4 py-2 rounded-lg transition-colors text-xs md:text-sm"
                    >
                      Clique aqui para WhatsApp
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 p-3 md:p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-500 rounded-full p-2 mb-2 sm:mb-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">E-mail Direto</p>
                      <p className="text-xs md:text-sm text-gray-600">Prefere enviar um e-mail? Clique no botão ao lado para nos contatar.</p>
                    </div>
                    <a
                      href="mailto:contato@institutoamar.org.br"
                      className="mt-2 sm:mt-0 ml-0 sm:ml-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 md:px-4 py-2 rounded-lg transition-colors text-xs md:text-sm"
                    >
                      Clique aqui para E-mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donation