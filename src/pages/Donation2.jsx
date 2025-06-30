"use client"

import { useState } from "react"
import { Heart, Check, Copy, QrCode, CreditCard, Smartphone, Users, Gift, Target, Star } from "lucide-react"

const Donation = () => {
  const [selectedPlan, setSelectedPlan] = useState(2) // Plano Parceiro selecionado por padrão
  const [copied, setCopied] = useState(false)

  const pixKey = "instituto@amar.org.br"
  const bankData = {
    bank: "Banco do Brasil",
    agency: "1234-5",
    account: "12345-6",
    cnpj: "12.345.678/0001-90",
  }

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const donationPlans = [
    {
      id: 1,
      name: "Apoiador",
      amount: 25,
      description: "Ajude com uma contribuição mensal básica",
      benefits: [
        "Relatório mensal de atividades",
        "Certificado de doador",
        "Convite para eventos especiais",
        "Acesso ao grupo exclusivo de apoiadores",
      ],
      color: "from-emerald-600 to-emerald-500",
      popular: false,
    },
    {
      id: 2,
      name: "Parceiro",
      amount: 50,
      description: "Seja um parceiro ativo na transformação",
      benefits: [
        "Todos os benefícios do plano Apoiador",
        "Visita guiada às instalações",
        "Participação em reuniões trimestrais",
        "Kit de brindes do Instituto",
        "Reconhecimento em redes sociais",
      ],
      color: "from-instituto-gold to-yellow-500",
      popular: true,
    },
    {
      id: 3,
      name: "Transformador",
      amount: 100,
      description: "Contribua significativamente para mudanças reais",
      benefits: [
        "Todos os benefícios do plano Parceiro",
        "Reunião mensal com a diretoria",
        "Participação no planejamento de projetos",
        "Reconhecimento especial em eventos",
        "Placa de homenagem na sede",
      ],
      color: "from-instituto-red to-red-500",
      popular: false,
    },
  ]

  const impactData = [
    { icon: Users, amount: "R$ 25", impact: "Alimenta 5 crianças por um dia", color: "text-emerald-600" },
    { icon: Gift, amount: "R$ 50", impact: "Material escolar para 2 crianças", color: "text-instituto-gold" },
    { icon: Target, amount: "R$ 100", impact: "Financia um curso completo", color: "text-instituto-red" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-instituto-green to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Heart className="h-5 w-5 mr-2 text-instituto-gold" />
              <span className="text-green-100 font-semibold">Transforme Vidas com Sua Doação</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Faça uma
              <span className="text-instituto-gold"> Doação</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Sua generosidade transforma vidas. Cada doação, por menor que seja, faz uma diferença real na vida de
              centenas de pessoas em nossa comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-green mb-6">Veja o Impacto da Sua Doação</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada real doado é investido diretamente em projetos que transformam vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`${item.color} bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}
                >
                  <item.icon className="h-10 w-10" />
                </div>
                <div className={`text-3xl font-bold ${item.color} mb-3`}>{item.amount}</div>
                <p className="text-gray-600 leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Plans */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-green mb-6">Escolha Seu Plano de Doação</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selecione o plano que mais combina com você e faça parte da nossa missão de transformar vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {donationPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  plan.popular ? "ring-4 ring-instituto-gold scale-105" : ""
                } ${selectedPlan === plan.id ? "ring-4 ring-instituto-green" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-instituto-gold text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="h-4 w-4 mr-1" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`bg-gradient-to-r ${plan.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-instituto-green mb-3">{plan.name}</h3>
                  <div className="text-5xl font-bold text-instituto-green mb-3">
                    R$ {plan.amount}
                    <span className="text-lg text-gray-500">/mês</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-instituto-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedPlan === plan.id
                      ? "bg-instituto-green text-white shadow-lg"
                      : plan.popular
                        ? "bg-gradient-to-r from-instituto-gold to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-instituto-green hover:text-white text-gray-700"
                  }`}
                >
                  {selectedPlan === plan.id ? "✓ Plano Selecionado" : "Selecionar Plano"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-instituto-green mb-6">Como Fazer Sua Doação</h2>
            <p className="text-xl text-gray-600">Escolha a forma mais conveniente para você contribuir.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* PIX Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-8 border border-green-100">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-instituto-green rounded-full p-4 mr-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-instituto-green">PIX - Forma Mais Rápida</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* QR Code Placeholder */}
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                    <div className="w-64 h-64 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-center text-gray-500">
                        <QrCode className="h-20 w-20 mx-auto mb-4" />
                        <p className="font-semibold">QR Code PIX</p>
                        <p className="text-sm">Escaneie para doar</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Aponte a câmera do seu celular</p>
                  </div>
                </div>

                {/* PIX Key */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-bold text-instituto-green mb-3">Chave PIX:</label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={pixKey}
                        readOnly
                        className="flex-1 p-4 bg-white border-2 border-gray-200 rounded-xl text-lg font-mono"
                      />
                      <button
                        onClick={handleCopyPix}
                        className="bg-instituto-green hover:bg-green-800 text-white p-4 rounded-xl transition-colors flex items-center space-x-2"
                      >
                        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                        <span className="hidden sm:inline">{copied ? "Copiado!" : "Copiar"}</span>
                      </button>
                    </div>
                    {copied && (
                      <p className="text-sm text-green-600 mt-2 font-semibold">✓ Chave PIX copiada com sucesso!</p>
                    )}
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-green-100">
                    <h4 className="font-bold text-instituto-green mb-3">Como doar via PIX:</h4>
                    <ol className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="bg-instituto-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          1
                        </span>
                        Abra o app do seu banco
                      </li>
                      <li className="flex items-start">
                        <span className="bg-instituto-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          2
                        </span>
                        Escolha PIX e "Pagar com QR Code" ou "Chave PIX"
                      </li>
                      <li className="flex items-start">
                        <span className="bg-instituto-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          3
                        </span>
                        Escaneie o código ou cole a chave PIX
                      </li>
                      <li className="flex items-start">
                        <span className="bg-instituto-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          4
                        </span>
                        Confirme o valor e finalize a doação
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Transfer Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-instituto-red rounded-full p-4 mr-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-instituto-red">Transferência Bancária</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border-2 border-blue-100">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Banco:</label>
                    <p className="text-lg font-bold text-gray-900">{bankData.bank}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-blue-100">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Agência:</label>
                    <p className="text-lg font-bold text-gray-900">{bankData.agency}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-blue-100">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Conta:</label>
                    <p className="text-lg font-bold text-gray-900">{bankData.account}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border-2 border-blue-100">
                    <label className="block text-sm font-bold text-gray-700 mb-1">CNPJ:</label>
                    <p className="text-lg font-bold text-gray-900">{bankData.cnpj}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-blue-100">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Favorecido:</label>
                    <p className="text-lg font-bold text-gray-900">Instituto Amar</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-blue-100">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Tipo de Conta:</label>
                    <p className="text-lg font-bold text-gray-900">Conta Corrente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-instituto-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Sua Doação Faz a Diferença</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Junte-se a nós nessa missão de transformar vidas. Cada contribuição, por menor que seja, tem o poder de
            mudar o futuro de uma pessoa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5513999999999?text=Olá! Gostaria de fazer uma doação para o Instituto Amar."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-instituto-gold hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
            >
              <Heart className="h-6 w-6" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href="mailto:contato@institutoamar.org.br?subject=Doação para o Instituto Amar"
              className="border-2 border-white text-white hover:bg-white hover:text-instituto-green font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <CreditCard className="h-6 w-6" />
              <span>Enviar E-mail</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donation
