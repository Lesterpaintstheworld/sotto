"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Header";

export default function Pricing() {
  const [earbudsCount, setEarbudsCount] = useState(4);
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [yearlyPrice, setYearlyPrice] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  
  // Calculer le prix en fonction du nombre d'oreillettes
  useEffect(() => {
    let pricePerEarbud;
    
    if (earbudsCount >= 1 && earbudsCount <= 5) {
      pricePerEarbud = 79;
    } else if (earbudsCount >= 6 && earbudsCount <= 10) {
      pricePerEarbud = 74;
    } else if (earbudsCount >= 11 && earbudsCount <= 20) {
      pricePerEarbud = 69;
    } else {
      pricePerEarbud = 64;
    }
    
    const monthly = earbudsCount * pricePerEarbud;
    setMonthlyPrice(monthly);
    
    // Prix annuel avec 15% de réduction pour engagement 24 mois
    const yearly = monthly * 12 * 0.85;
    setYearlyPrice(yearly);
  }, [earbudsCount]);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de la page */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarification simple et transparente</h1>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto">
              Une structure tarifaire claire basée sur le nombre d'oreillettes, avec tous les services inclus. Pas de frais cachés.
            </p>
          </div>
          
          {/* Sélecteur annuel/mensuel */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 inline-flex shadow-sm">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isYearly ? "bg-[#D47D5A] text-white" : "text-[#1A2A40]/70 hover:text-[#1A2A40]"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Mensuel
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isYearly ? "bg-[#D47D5A] text-white" : "text-[#1A2A40]/70 hover:text-[#1A2A40]"
                }`}
                onClick={() => setIsYearly(true)}
              >
                Annuel (-15%)
              </button>
            </div>
          </div>
          
          {/* Carte de tarification avec slider */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="bg-[#1A2A40] text-white p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Sotto Voice</h2>
              <p className="text-white/80">Tout inclus, sans restriction</p>
            </div>
            
            <div className="p-8">
              {/* Prix */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#1A2A40]">
                    {isYearly 
                      ? Math.round(yearlyPrice / 12) 
                      : monthlyPrice}€
                  </span>
                  <span className="text-xl text-[#505A64] ml-2">
                    /mois
                  </span>
                </div>
                {isYearly && (
                  <div className="mt-2 text-[#D47D5A] font-medium">
                    Engagement 24 mois • Économisez {Math.round(monthlyPrice * 12 - yearlyPrice)}€/an
                  </div>
                )}
                <div className="mt-2 text-[#505A64]">
                  {earbudsCount} oreillette{earbudsCount > 1 ? "s" : ""}
                </div>
              </div>
              
              {/* Slider */}
              <div className="mb-8">
                <label htmlFor="earbuds-slider" className="block text-sm font-medium text-[#505A64] mb-2">
                  Nombre d'oreillettes
                </label>
                <input
                  id="earbuds-slider"
                  type="range"
                  min="1"
                  max="30"
                  value={earbudsCount}
                  onChange={(e) => setEarbudsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#F5F5F0] rounded-lg appearance-none cursor-pointer accent-[#D47D5A]"
                />
                <div className="flex justify-between text-xs text-[#505A64] mt-1">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                </div>
              </div>
              
              {/* Paliers de prix */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
                <div className={`p-3 rounded-lg text-center ${earbudsCount >= 1 && earbudsCount <= 5 ? "bg-[#D47D5A]/10 border border-[#D47D5A]" : "bg-[#F5F5F0]"}`}>
                  <div className="font-medium">1-5 oreillettes</div>
                  <div>79€/oreillette</div>
                </div>
                <div className={`p-3 rounded-lg text-center ${earbudsCount >= 6 && earbudsCount <= 10 ? "bg-[#D47D5A]/10 border border-[#D47D5A]" : "bg-[#F5F5F0]"}`}>
                  <div className="font-medium">6-10 oreillettes</div>
                  <div>74€/oreillette</div>
                </div>
                <div className={`p-3 rounded-lg text-center ${earbudsCount >= 11 && earbudsCount <= 20 ? "bg-[#D47D5A]/10 border border-[#D47D5A]" : "bg-[#F5F5F0]"}`}>
                  <div className="font-medium">11-20 oreillettes</div>
                  <div>69€/oreillette</div>
                </div>
                <div className={`p-3 rounded-lg text-center ${earbudsCount >= 21 ? "bg-[#D47D5A]/10 border border-[#D47D5A]" : "bg-[#F5F5F0]"}`}>
                  <div className="font-medium">21+ oreillettes</div>
                  <div>64€/oreillette</div>
                </div>
              </div>
              
              {/* Caractéristiques incluses */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Tout inclus dans chaque abonnement :</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Support premium 24/7 avec manager de compte dédié",
                    "Toutes les fonctionnalités de la plateforme sans restriction",
                    "Utilisation illimitée des API (pas de quotas)",
                    "Formation complète incluse",
                    "Mises à jour prioritaires",
                    "Matériel de remplacement sous 24h",
                    "Commission fixe de 0,8% sur les transactions",
                    "Intégration avec votre système existant"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Options */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Options disponibles :</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F5F5F0] p-4 rounded-lg">
                    <div className="font-medium mb-1">Oreillettes premium</div>
                    <div className="text-sm text-[#505A64] mb-2">Conduction osseuse, autonomie prolongée</div>
                    <div className="font-semibold text-[#D47D5A]">+10€ HT/mois par oreillette</div>
                  </div>
                  <div className="bg-[#F5F5F0] p-4 rounded-lg">
                    <div className="font-medium mb-1">Multi-établissements</div>
                    <div className="text-sm text-[#505A64] mb-2">Configuration pour plusieurs restaurants</div>
                    <div className="font-semibold text-[#D47D5A]">250€ HT frais unique par établissement</div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#D47D5A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#D47D5A]/90 transition-colors"
                >
                  Demander une démo
                </Link>
                <p className="mt-3 text-sm text-[#505A64]">
                  Pas d'engagement • Annulation facile
                </p>
              </div>
            </div>
          </div>
          
          {/* Étapes d'onboarding */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Démonstration",
                  description: "Découvrez Sotto en action lors d'une démo personnalisée avec notre équipe.",
                  icon: "🎯"
                },
                {
                  step: 2,
                  title: "Installation",
                  description: "Notre équipe installe et configure Sotto dans votre établissement en moins d'une journée.",
                  icon: "🔧"
                },
                {
                  step: 3,
                  title: "Formation",
                  description: "Votre personnel est formé à l'utilisation de Sotto en quelques heures seulement.",
                  icon: "🎓"
                },
                {
                  step: 4,
                  title: "Support continu",
                  description: "Notre équipe reste disponible 24/7 pour vous accompagner dans votre utilisation quotidienne.",
                  icon: "🚀"
                }
              ].map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-6 shadow-md text-center relative">
                  <div className="w-12 h-12 rounded-full bg-[#D47D5A] text-white flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-[#505A64]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Combien d'oreillettes me faut-il ?",
                  answer: "En général, nous recommandons une oreillette par serveur actif, plus 1-2 oreillettes de secours. Pour un restaurant typique de 40 couverts avec 4 serveurs, 5-6 oreillettes sont généralement suffisantes."
                },
                {
                  question: "Puis-je ajouter des oreillettes plus tard ?",
                  answer: "Absolument ! Vous pouvez ajuster le nombre d'oreillettes à tout moment en fonction de vos besoins, avec un préavis de 7 jours. Le tarif s'ajustera automatiquement selon le nouveau palier."
                },
                {
                  question: "Comment fonctionne la commission de 0,8% ?",
                  answer: "La commission s'applique uniquement sur les transactions traitées via notre système. Elle est facturée mensuellement et apparaît de manière transparente sur votre relevé."
                },
                {
                  question: "Quelle est la durée d'engagement ?",
                  answer: "L'abonnement mensuel standard a un engagement minimum de 12 mois. L'option annuelle avec 15% de réduction nécessite un engagement de 24 mois."
                },
                {
                  question: "Sotto est-il compatible avec mon système actuel ?",
                  answer: "Sotto s'intègre avec la plupart des systèmes d'encaissement modernes. Nous réalisons une étude de compatibilité lors de la démonstration pour vous garantir une intégration fluide."
                },
                {
                  question: "Comment se passe la formation du personnel ?",
                  answer: "Nous proposons une formation complète sur site pour tout votre personnel. La prise en main est généralement très rapide (moins de 2 heures) grâce à l'interface vocale intuitive."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-[#505A64]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA final */}
          <div className="bg-[#1A2A40] text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre service ?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Rejoignez les centaines de restaurants qui ont déjà adopté Sotto pour améliorer leur efficacité et l'expérience de leurs clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#D47D5A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#D47D5A]/90 transition-colors"
              >
                Demander une démo
              </Link>
              <Link 
                href="/resources" 
                className="bg-white text-[#1A2A40] px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Voir nos ressources
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
