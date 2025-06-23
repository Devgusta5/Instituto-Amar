import { Target, Eye, Heart, Award } from "lucide-react"

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor",
      description: "Acreditamos que o amor é a força transformadora que move todas as nossas ações.",
    },
    {
      icon: Target,
      title: "Compromisso",
      description: "Mantemos nosso compromisso com a transparência e eficiência em cada projeto.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Enxergamos um futuro onde cada pessoa tem oportunidade de crescer e prosperar.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre a excelência em nossos serviços e no atendimento à comunidade.",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-instituto-green mb-6">Sobre o Instituto Amar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fundado com o propósito de transformar vidas através do amor e solidariedade, o Instituto Amar atua em
            Mongaguá promovendo ações sociais que geram impacto positivo na comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-instituto-green mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2 text-instituto-gold" />
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Promover o desenvolvimento social e humano através de ações educativas, culturais e assistenciais,
                contribuindo para a construção de uma sociedade mais justa e solidária.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-instituto-green mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-instituto-gold" />
                Nossa Visão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como uma instituição de referência em transformação social, inspirando outras
                organizações e comunidades a promoverem mudanças positivas em suas realidades.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Instituto Amar em ação"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-instituto-green/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="card p-6 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-instituto-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-instituto-green" />
              </div>
              <h4 className="text-xl font-bold text-instituto-green mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
