import { Target, Eye, Heart, Award, Users, Calendar, MapPin } from "lucide-react"

const About = () => {
  const timeline = [
    {
      year: "2014",
      title: "Fundação do Instituto",
      description: "Vanessa Almeida funda o Instituto Amar com o objetivo de transformar vidas em Mongaguá.",
    },
    {
      year: "2016",
      title: "Primeiros Cursos",
      description: "Início dos cursos de capacitação profissional para a comunidade local.",
    },
    {
      year: "2018",
      title: "Expansão dos Projetos",
      description: "Ampliação das atividades com novos projetos sociais e parcerias estratégicas.",
    },
    {
      year: "2020",
      title: "Adaptação Digital",
      description: "Durante a pandemia, adaptamos nossos serviços para o formato online e híbrido.",
    },
    {
      year: "2024",
      title: "Década de Impacto",
      description: "Celebramos 10 anos de transformação com mais de 500 vidas impactadas.",
    },
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Vidas Impactadas" },
    { icon: Calendar, number: "50+", label: "Eventos Realizados" },
    { icon: Award, number: "15+", label: "Cursos Oferecidos" },
    { icon: Heart, number: "100+", label: "Voluntários Ativos" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-instituto-green to-green-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre o Instituto Amar</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Uma década dedicada à transformação social através do amor, solidariedade e compromisso com nossa
              comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-instituto-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-instituto-green" />
              </div>
              <h3 className="text-2xl font-bold text-instituto-green mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover o desenvolvimento social e humano através de ações educativas, culturais e assistenciais,
                contribuindo para a construção de uma sociedade mais justa e solidária.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-instituto-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-instituto-red" />
              </div>
              <h3 className="text-2xl font-bold text-instituto-red mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como uma instituição de referência em transformação social, inspirando outras
                organizações e comunidades a promoverem mudanças positivas em suas realidades.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-instituto-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-instituto-gold" />
              </div>
              <h3 className="text-2xl font-bold text-instituto-gold mb-4">Nossos Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Amor, transparência, compromisso, respeito à diversidade, sustentabilidade e excelência em tudo que
                fazemos para transformar vidas e comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-green mb-6">Nosso Impacto em Números</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada número representa vidas transformadas e sonhos realizados.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="bg-instituto-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-instituto-green" />
                  </div>
                  <div className="text-3xl font-bold text-instituto-green mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-green mb-6">Nossa História</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os marcos importantes da nossa jornada de transformação social.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-instituto-green/20"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full max-w-md ${index % 2 === 0 ? "sm:pr-8 text-right" : "sm:pl-8 text-left"}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-instituto-gold mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold text-instituto-green mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-instituto-green rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-instituto-green mb-6">Nossa Localização</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-instituto-green mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">
                      Rua das Flores, 123
                      <br />
                      Centro - Mongaguá - SP
                      <br />
                      CEP: 11730-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-instituto-green mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Horário de Funcionamento</p>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 17h
                      <br />
                      Sábados: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Mapa interativo será carregado aqui</p>
                <p className="text-sm mt-2">Mongaguá - SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
