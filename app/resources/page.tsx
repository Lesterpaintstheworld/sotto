import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ressources</h1>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto">
              Découvrez nos guides, études de cas et outils pour tirer le meilleur parti de Sotto et optimiser votre restaurant.
            </p>
          </div>
          
          {/* Guides et tutoriels */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Guides et tutoriels</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-[#1A2A40]/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="23"></line>
                      <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Guide de démarrage</h3>
                  <p className="text-[#505A64] mb-4">
                    Tout ce que vous devez savoir pour commencer avec Sotto, de l'installation à la première commande.
                  </p>
                  <Link href="#" className="text-[#D47D5A] hover:underline flex items-center gap-1">
                    Télécharger le PDF
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-[#1A2A40]/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Formation du personnel</h3>
                  <p className="text-[#505A64] mb-4">
                    Ressources pour former efficacement votre équipe à l'utilisation quotidienne de Sotto.
                  </p>
                  <Link href="#" className="text-[#D47D5A] hover:underline flex items-center gap-1">
                    Accéder aux vidéos
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-[#1A2A40]/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">FAQ avancée</h3>
                  <p className="text-[#505A64] mb-4">
                    Réponses détaillées aux questions techniques et opérationnelles les plus fréquentes.
                  </p>
                  <Link href="#" className="text-[#D47D5A] hover:underline flex items-center gap-1">
                    Consulter la FAQ
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Études de cas */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Études de cas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-56 bg-[#1A2A40]/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#87A28F]/20 text-[#87A28F] text-xs font-medium mb-3">
                    Restaurant gastronomique
                  </span>
                  <h3 className="text-xl font-bold mb-2">Le Bistrot Parisien : +15% de chiffre d'affaires</h3>
                  <p className="text-[#505A64] mb-4">
                    Comment un restaurant gastronomique a transformé son service et augmenté sa rentabilité grâce à Sotto.
                  </p>
                  <Link href="#" className="text-[#D47D5A] hover:underline flex items-center gap-1">
                    Lire l'étude de cas
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-56 bg-[#1A2A40]/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D4B483]/20 text-[#D4B483] text-xs font-medium mb-3">
                    Chaîne de restaurants
                  </span>
                  <h3 className="text-xl font-bold mb-2">Groupe Saveurs : Standardisation réussie sur 12 établissements</h3>
                  <p className="text-[#505A64] mb-4">
                    Comment une chaîne de restaurants a uniformisé son service et optimisé ses opérations avec Sotto.
                  </p>
                  <Link href="#" className="text-[#D47D5A] hover:underline flex items-center gap-1">
                    Lire l'étude de cas
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Outils et calculateurs */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Outils et calculateurs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  Calculateur de ROI
                </h3>
                <p className="text-[#505A64] mb-4">
                  Estimez votre retour sur investissement en implémentant Sotto dans votre établissement.
                </p>
                <Link href="#" className="text-[#D47D5A] hover:underline flex items-center gap-1">
                  Accéder au calculateur
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                  Évaluateur d'efficacité
                </h3>
                <p className="text-[#505A64] mb-4">
                  Analysez les performances actuelles de votre restaurant et identifiez les opportunités d'amélioration.
                </p>
                <Link href="#" className="text-[#D47D5A] hover:underline flex items-center gap-1">
                  Commencer l'évaluation
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Webinaires et événements */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Webinaires et événements</h2>
            <div className="bg-[#1A2A40] text-white rounded-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-full bg-[#D47D5A]/20 text-[#D47D5A] text-xs font-medium mb-4">
                  Prochain webinaire
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Comment optimiser votre service avec l'IA vocale
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl">
                  Rejoignez notre expert Thomas Dubois pour découvrir les meilleures pratiques et astuces pour tirer le maximum de votre système Sotto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="text-white/80">15 juin 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-white/80">14h00 - 15h30 (CET)</span>
                  </div>
                </div>
                <button className="bg-[#D47D5A] hover:bg-[#D47D5A]/90 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2">
                  <span>S'inscrire gratuitement</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
