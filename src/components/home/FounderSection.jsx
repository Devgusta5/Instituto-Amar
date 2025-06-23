import { Quote } from "lucide-react"

const FounderSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Vanessa Almeida - Fundadora"
              className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-instituto-gold p-4 rounded-full shadow-lg">
              <Quote className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-instituto-green mb-4">Vanessa Almeida</h2>
              <p className="text-xl text-instituto-gold font-semibold mb-6">Fundadora e Presidente</p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                "Acredito que cada pessoa tem o poder de transformar o mundo ao seu redor. Foi com essa convicção que
                fundei o Instituto Amar, movida pela paixão de ver vidas sendo transformadas através do amor e da
                solidariedade."
              </p>

              <p>
                Vanessa Almeida é assistente social formada pela Universidade Católica de Santos, com mais de 15 anos de
                experiência em projetos sociais. Sua dedicação incansável à causa social a levou a fundar o Instituto
                Amar em 2014.
              </p>

              <p>
                Sob sua liderança, o instituto já impactou centenas de vidas em Mongaguá, desenvolvendo projetos
                inovadores nas áreas de educação, cultura e assistência social.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-instituto-gold">
              <blockquote className="text-lg italic text-gray-700">
                "O amor é a única força capaz de transformar um inimigo em amigo, uma comunidade em família, e um sonho
                em realidade."
              </blockquote>
              <cite className="block mt-4 text-instituto-green font-semibold">- Vanessa Almeida</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
