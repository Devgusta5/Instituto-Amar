import { Link } from "react-router-dom"
import { Heart, Star, Check } from "lucide-react"
import { donationPlans } from "../../data/mockData"

const DonationSection = () => {
  return (
    <section className="section-padding bg-instituto-green text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Faça Parte da Transformação</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Sua doação faz a diferença na vida de centenas de pessoas. Escolha a forma que mais combina com você de
            contribuir.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {donationPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white text-gray-900 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 animate-scale-in w-full`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-instituto-gold text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-instituto-green mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-instituto-green mb-2">
                  R$ {plan.amount}
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-instituto-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/doacao"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-instituto-gold hover:bg-yellow-600 text-white"
                    : "bg-instituto-green hover:bg-green-800 text-white"
                }`}
              >
                Escolher Plano
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/doacao" className="btn-accent text-lg px-8 py-4 inline-flex items-center space-x-2">
            <Heart className="h-5 w-5" />
            <span>Ver Todas as Opções de Doação</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DonationSection
