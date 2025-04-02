import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      {/* Utiliser le composant Header */}
      <Header />

      {/* Section héro améliorée */}
      <section className="px-6 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-20 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#D47D5A]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#87A28F]/10 blur-3xl"></div>
        
        <div className="md:w-1/2 space-y-6 z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] text-sm font-medium mb-2">
            Révolutionnez votre restaurant
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Libérez votre restaurant des écrans
          </h2>
          <p className="text-lg md:text-xl text-[#505A64] leading-relaxed">
            Sotto est un système IA vocal qui révolutionne les opérations de restauration en éliminant les interfaces à écran, créant une expérience plus humaine et efficace. Redonnez à votre équipe le temps de se concentrer sur l'essentiel : l'humain et la gastronomie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#demo"
              className="rounded-full bg-[#1A2A40] text-[#F5F5F0] px-6 py-3 text-center hover:bg-[#D47D5A] transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Demander une démo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              href="#fonctionnement"
              className="rounded-full border border-[#1A2A40] px-6 py-3 text-center hover:bg-[#1A2A40] hover:text-[#F5F5F0] transition-colors"
            >
              Comment ça marche
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center z-10">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
            {/* Image héro 1:1 agrandie */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/hero.png" 
                alt="Sotto - Solution vocale pour restaurants" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
            
            {/* Effet de superposition */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#D47D5A]/20 to-transparent rounded-lg -z-10 blur-sm"></div>
            
            {/* Élément décoratif - onde sonore */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[110%] h-[110%] rounded-lg border border-[#1A2A40]/5 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s', animationIterationCount: 'infinite' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bannière statistiques */}
      <section className="px-6 md:px-20 py-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#D47D5A]">30%</p>
            <p className="text-sm md:text-base text-[#505A64]">Réduction des coûts matériels</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#D47D5A]">25%</p>
            <p className="text-sm md:text-base text-[#505A64]">Gain de temps en service</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#D47D5A]">40%</p>
            <p className="text-sm md:text-base text-[#505A64]">Amélioration satisfaction client</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#D47D5A]">15%</p>
            <p className="text-sm md:text-base text-[#505A64]">Augmentation du chiffre d'affaires</p>
          </div>
        </div>
      </section>

      {/* Section Vision améliorée */}
      <section id="vision" className="px-6 md:px-20 py-16 bg-[#1A2A40] text-[#F5F5F0] relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D47D5A]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D47D5A]/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 rounded-full bg-[#D47D5A]/20 text-[#D47D5A] text-sm font-medium mb-4">
                Notre Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Réhumaniser l'expérience restaurant</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-[#F5F5F0]/90">
                  Sotto transforme l'expérience de restauration en remplaçant toutes les interfaces à écran (caisses enregistreuses, tablettes, bornes) par un système vocal IA centralisé.
                </p>
                <p className="text-lg leading-relaxed text-[#F5F5F0]/90">
                  En connectant le personnel via des oreillettes discrètes, Sotto fluidifie les opérations tout en recentrant l'attention sur l'interaction humaine et l'expérience culinaire.
                </p>
                <p className="text-lg leading-relaxed text-[#F5F5F0]/90">
                  Notre mission est de libérer les restaurants de la tyrannie des écrans pour créer un environnement où la technologie sert l'humain sans jamais s'interposer.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video bg-[#F5F5F0]/10 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D47D5A] flex items-center justify-center cursor-pointer hover:bg-[#D47D5A]/90 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="absolute bottom-4 left-4 text-sm font-medium">Découvrir Sotto en action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section id="fonctionnement" className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#87A28F]/20 text-[#87A28F] text-sm font-medium mb-2">
              Fonctionnement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Comment fonctionne Sotto ?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#1A2A40]/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] flex items-center justify-center mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Commande vocale</h3>
              <p className="text-[#505A64]">
                Le serveur prend la commande naturellement et la transmet à Sotto via son oreillette discrète. L'IA comprend le contexte et les spécificités.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#1A2A40]/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] flex items-center justify-center mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Traitement intelligent</h3>
              <p className="text-[#505A64]">
                L'IA centrale traite la commande, l'enregistre dans le système, et la transmet instantanément à la cuisine et au bar sans aucun écran.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#1A2A40]/5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] flex items-center justify-center mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Coordination fluide</h3>
              <p className="text-[#505A64]">
                Sotto coordonne la préparation et le service, alertant le personnel au moment optimal et gérant les modifications en temps réel.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-[#1A2A40]/5 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Exemple de dialogue</h3>
            <div className="space-y-8">
              {/* Premier message - Serveur */}
              <div className="flex gap-3 animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
                <div className="w-10 h-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center flex-shrink-0">S</div>
                <div className="bg-white p-4 rounded-lg shadow-sm max-w-[85%] relative">
                  {/* Icône micro pour indiquer commande vocale - maintenant à droite du cercle S */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center shadow-sm animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '0.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    </svg>
                  </div>
                  <p className="text-[#505A64] text-base md:text-lg"><span className="font-bold">Serveur:</span> "Table 12 commande un burger saignant avec frites, une pizza végétarienne sans oignons et deux verres de vin rouge maison."</p>
                </div>
              </div>
              
              {/* Deuxième message - Sotto */}
              <div className="flex gap-3 justify-end animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '1.2s' }}>
                <div className="bg-[#1A2A40] p-4 rounded-lg shadow-sm max-w-[85%] relative">
                  {/* Icône son pour indiquer réponse vocale - maintenant à gauche du cercle AI */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center shadow-sm animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '1.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    </svg>
                  </div>
                  <p className="text-white text-base md:text-lg"><span className="font-bold">Sotto:</span> "Commande enregistrée pour la table 12: un burger saignant avec frites, une pizza végétarienne sans oignons, deux verres de vin rouge maison. Transmis en cuisine et au bar."</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] text-white flex items-center justify-center flex-shrink-0">AI</div>
              </div>
              
              {/* Troisième message - Serveur */}
              <div className="flex gap-3 animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '2.2s' }}>
                <div className="w-10 h-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center flex-shrink-0">S</div>
                <div className="bg-white p-4 rounded-lg shadow-sm max-w-[85%] relative">
                  {/* Icône micro pour indiquer commande vocale */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center shadow-sm animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '2.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    </svg>
                  </div>
                  <p className="text-[#505A64] text-base md:text-lg"><span className="font-bold">Serveur:</span> "Ajoute une carafe d'eau pour la 12."</p>
                </div>
              </div>
              
              {/* Quatrième message - Sotto */}
              <div className="flex gap-3 justify-end animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '3.2s' }}>
                <div className="bg-[#1A2A40] p-4 rounded-lg shadow-sm max-w-[85%] relative">
                  {/* Icône son pour indiquer réponse vocale */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center shadow-sm animate-[fadeIn_0.5s_ease-in-out]" style={{ animationFillMode: 'both', animationDelay: '3.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    </svg>
                  </div>
                  <p className="text-white text-base md:text-lg"><span className="font-bold">Sotto:</span> "Carafe d'eau ajoutée pour la table 12."</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] text-white flex items-center justify-center flex-shrink-0">AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Proposition de Valeur améliorée */}
      <section id="valeur" className="px-6 md:px-20 py-16 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] text-sm font-medium mb-2">
              Bénéfices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Une valeur ajoutée pour tous</h2>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto mt-4">
              Sotto apporte des avantages concrets à chaque acteur de l'écosystème restaurant, créant une expérience harmonieuse et efficace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#D47D5A] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#1A2A40] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                Pour les Restaurateurs
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#D47D5A] font-bold">•</span>
                  <span>Réduction des coûts matériels et maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D47D5A] font-bold">•</span>
                  <span>Optimisation de l'espace et de l'agencement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D47D5A] font-bold">•</span>
                  <span>Données opérationnelles en temps réel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D47D5A] font-bold">•</span>
                  <span>Simplification de la formation du personnel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D47D5A] font-bold">•</span>
                  <span>Analyse prédictive pour optimiser les stocks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#87A28F] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#1A2A40] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#87A28F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Pour le Personnel
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#87A28F] font-bold">•</span>
                  <span>Interactions plus naturelles avec les clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87A28F] font-bold">•</span>
                  <span>Moins de temps passé sur les interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87A28F] font-bold">•</span>
                  <span>Assistance contextuelle et suggestions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87A28F] font-bold">•</span>
                  <span>Mains libres en permanence pour le service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#87A28F] font-bold">•</span>
                  <span>Apprentissage facilité et formation continue</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#D4B483] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#1A2A40] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4B483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                Pour les Clients
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4B483] font-bold">•</span>
                  <span>Service plus attentif et personnalisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4B483] font-bold">•</span>
                  <span>Temps d'attente réduit et service fluide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4B483] font-bold">•</span>
                  <span>Atmosphère débarrassée des écrans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4B483] font-bold">•</span>
                  <span>Expérience plus humaine et chaleureuse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4B483] font-bold">•</span>
                  <span>Reconnaissance des préférences et habitudes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités améliorée */}
      <section id="fonctionnalites" className="px-6 md:px-20 py-16 bg-[#87A28F]/10 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#D47D5A]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#1A2A40]/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#1A2A40]/10 text-[#1A2A40] text-sm font-medium mb-2">
              Technologie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Fonctionnalités Principales</h2>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto mt-4">
              Une technologie de pointe au service de l'expérience humaine, conçue pour s'intégrer naturellement au flux de travail du restaurant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#1A2A40]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D47D5A]/10 rounded-bl-full"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                  Système Vocal Intelligent
                </h3>
                <p className="text-[#505A64] leading-relaxed">
                  Reconnaissance du langage naturel avec compréhension contextuelle des commandes et adaptation aux particularités linguistiques. Notre IA apprend en continu pour améliorer sa précision et sa compréhension des spécificités de votre établissement.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Compréhension contextuelle avancée
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Adaptation aux accents et dialectes
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Filtrage intelligent du bruit ambiant
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#1A2A40]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#87A28F]/10 rounded-bl-full"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#87A28F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  Communication Fluide
                </h3>
                <p className="text-[#505A64] leading-relaxed">
                  Transmission instantanée entre la salle et la cuisine, coordination automatisée des temps de service. Sotto assure une communication transparente entre toutes les équipes, éliminant les erreurs et les délais.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#87A28F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Alertes intelligentes et priorisées
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#87A28F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Coordination des temps de service
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#87A28F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Confirmation automatique des actions
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#1A2A40]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#1A2A40]/10 rounded-bl-full"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  IA Centralisée
                </h3>
                <p className="text-[#505A64] leading-relaxed">
                  Gestion intelligente de toutes les opérations du restaurant avec analyse en temps réel des performances. Notre IA apprend et s'adapte à votre établissement pour optimiser chaque aspect de votre activité.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Analyse prédictive des besoins
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Optimisation continue des processus
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Tableaux de bord personnalisables
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#1A2A40]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4B483]/10 rounded-bl-full"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4B483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Interface Discrète
                </h3>
                <p className="text-[#505A64] leading-relaxed">
                  Oreillettes élégantes et confortables avec micros haute-performance optimisés pour environnements bruyants. Conçues pour être portées toute la journée sans gêne, elles s'intègrent parfaitement à votre tenue professionnelle.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4B483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Design ergonomique et discret
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4B483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Autonomie d'une journée complète
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[#505A64]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4B483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Résistance aux environnements difficiles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4B483]/20 text-[#D4B483] text-sm font-medium mb-2">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Ils ont adopté Sotto</h2>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto mt-4">
              Découvrez comment Sotto transforme le quotidien des restaurants qui nous font confiance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F5F0] p-8 rounded-lg relative">
              <svg className="absolute top-4 left-4 text-[#D47D5A]/20" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9999 14.1999C11.9999 14.9999 11.5999 15.5999 10.7999 15.9999C9.9999 16.3999 9.1999 16.1999 8.3999 15.5999C7.5999 14.9999 7.1999 14.1999 7.1999 13.1999C7.1999 11.9999 7.5999 10.9999 8.3999 9.9999C9.1999 8.9999 10.3999 8.3999 11.9999 8.1999L11.9999 10.1999C11.1999 10.3999 10.5999 10.7999 10.1999 11.3999C9.7999 11.9999 9.7999 12.5999 9.9999 13.1999C10.1999 13.1999 10.3999 13.1999 10.5999 13.1999C10.7999 13.1999 10.9999 13.1999 11.1999 13.1999C11.5999 13.1999 11.7999 13.3999 11.9999 13.5999C11.9999 13.7999 11.9999 13.9999 11.9999 14.1999ZM19.9999 14.1999C19.9999 14.9999 19.5999 15.5999 18.7999 15.9999C17.9999 16.3999 17.1999 16.1999 16.3999 15.5999C15.5999 14.9999 15.1999 14.1999 15.1999 13.1999C15.1999 11.9999 15.5999 10.9999 16.3999 9.9999C17.1999 8.9999 18.3999 8.3999 19.9999 8.1999L19.9999 10.1999C19.1999 10.3999 18.5999 10.7999 18.1999 11.3999C17.7999 11.9999 17.7999 12.5999 17.9999 13.1999C18.1999 13.1999 18.3999 13.1999 18.5999 13.1999C18.7999 13.1999 18.9999 13.1999 19.1999 13.1999C19.5999 13.1999 19.7999 13.3999 19.9999 13.5999C19.9999 13.7999 19.9999 13.9999 19.9999 14.1999Z" />
              </svg>
              
              <div className="pt-6">
                <p className="text-[#505A64] italic mb-6">
                  "Sotto a complètement transformé notre façon de travailler. Nos serveurs sont plus présents pour les clients, la communication avec la cuisine est fluide, et nous avons pu libérer de l'espace en supprimant les écrans. Notre chiffre d'affaires a augmenté de 15% en seulement trois mois."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A2A40]"></div>
                  <div>
                    <p className="font-bold">Marie Dubois</p>
                    <p className="text-sm text-[#505A64]">Propriétaire, Le Bistrot Parisien</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] p-8 rounded-lg relative">
              <svg className="absolute top-4 left-4 text-[#D47D5A]/20" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9999 14.1999C11.9999 14.9999 11.5999 15.5999 10.7999 15.9999C9.9999 16.3999 9.1999 16.1999 8.3999 15.5999C7.5999 14.9999 7.1999 14.1999 7.1999 13.1999C7.1999 11.9999 7.5999 10.9999 8.3999 9.9999C9.1999 8.9999 10.3999 8.3999 11.9999 8.1999L11.9999 10.1999C11.1999 10.3999 10.5999 10.7999 10.1999 11.3999C9.7999 11.9999 9.7999 12.5999 9.9999 13.1999C10.1999 13.1999 10.3999 13.1999 10.5999 13.1999C10.7999 13.1999 10.9999 13.1999 11.1999 13.1999C11.5999 13.1999 11.7999 13.3999 11.9999 13.5999C11.9999 13.7999 11.9999 13.9999 11.9999 14.1999ZM19.9999 14.1999C19.9999 14.9999 19.5999 15.5999 18.7999 15.9999C17.9999 16.3999 17.1999 16.1999 16.3999 15.5999C15.5999 14.9999 15.1999 14.1999 15.1999 13.1999C15.1999 11.9999 15.5999 10.9999 16.3999 9.9999C17.1999 8.9999 18.3999 8.3999 19.9999 8.1999L19.9999 10.1999C19.1999 10.3999 18.5999 10.7999 18.1999 11.3999C17.7999 11.9999 17.7999 12.5999 17.9999 13.1999C18.1999 13.1999 18.3999 13.1999 18.5999 13.1999C18.7999 13.1999 18.9999 13.1999 19.1999 13.1999C19.5999 13.1999 19.7999 13.3999 19.9999 13.5999C19.9999 13.7999 19.9999 13.9999 19.9999 14.1999Z" />
              </svg>
              
              <div className="pt-6">
                <p className="text-[#505A64] italic mb-6">
                  "En tant que chef, je craignais que la communication avec la salle soit compliquée sans écrans. Mais c'est tout le contraire ! Sotto nous permet d'être informés en temps réel, de mieux coordonner les plats et d'optimiser notre workflow en cuisine. Un vrai game-changer."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A2A40]"></div>
                  <div>
                    <p className="font-bold">Thomas Moreau</p>
                    <p className="text-sm text-[#505A64]">Chef, L'Atelier Gourmand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Démo améliorée */}
      <section id="demo" className="px-6 md:px-20 py-16 bg-[#1A2A40] text-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#D47D5A]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#D47D5A]/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 rounded-full bg-[#D47D5A]/20 text-[#D47D5A] text-sm font-medium mb-4">
                Démarrez maintenant
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre restaurant ?</h2>
              <p className="text-lg mb-6 text-white/80">
                Demandez une démonstration personnalisée et découvrez comment Sotto peut s'adapter à votre établissement. Notre équipe vous accompagnera à chaque étape de l'implémentation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white/80">Installation et configuration incluses</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white/80">Formation complète de votre équipe</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white/80">Support technique 7j/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D47D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-white/80">Essai sans engagement pendant 30 jours</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-[#1A2A40]">Demandez votre démonstration</h3>
                <form className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-[#505A64] mb-1">Nom de l'établissement</label>
                    <input
                      id="restaurant"
                      type="text"
                      placeholder="Le nom de votre restaurant"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A] text-[#1A2A40]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#505A64] mb-1">Email professionnel</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A] text-[#1A2A40]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#505A64] mb-1">Téléphone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A] text-[#1A2A40]"
                    />
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-[#505A64] mb-1">Taille de l'établissement</label>
                    <select
                      id="size"
                      className="w-full p-3 border border-[#1A2A40]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47D5A] text-[#1A2A40]"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="small">Petit (moins de 50 couverts)</option>
                      <option value="medium">Moyen (50-100 couverts)</option>
                      <option value="large">Grand (plus de 100 couverts)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 rounded-md bg-[#D47D5A] text-[#F5F5F0] px-6 py-3 hover:bg-[#D47D5A]/90 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <span>Demander une démo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-[#505A64] text-center mt-2">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-20 py-16 bg-[#F5F5F0]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-[#87A28F]/20 text-[#87A28F] text-sm font-medium mb-2">
              Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Tout ce que vous devez savoir</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Comment Sotto fonctionne-t-il dans un environnement bruyant ?</h3>
              <p className="text-[#505A64]">
                Sotto utilise une technologie avancée de filtrage audio et des micros directionnels optimisés pour les environnements de restauration. Notre IA est spécifiquement entraînée pour distinguer les commandes du bruit ambiant, même aux heures de pointe.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Quelle est l'autonomie des oreillettes ?</h3>
              <p className="text-[#505A64]">
                Nos oreillettes offrent une autonomie de 12 heures, couvrant largement un service complet. Des stations de charge discrètes sont installées dans votre établissement pour permettre une recharge rapide entre les services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Comment se passe la formation du personnel ?</h3>
              <p className="text-[#505A64]">
                Nous proposons une formation complète et progressive. Sotto étant basé sur le langage naturel, la courbe d'apprentissage est très rapide. La plupart des équipes sont pleinement opérationnelles en moins d'une semaine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Que se passe-t-il en cas de panne de connexion ?</h3>
              <p className="text-[#505A64]">
                Sotto fonctionne comme une Progressive Web App avec un mode hors-ligne. En cas de problème de connexion, le système continue de fonctionner et se synchronise automatiquement une fois la connexion rétablie. Un mode dégradé est également disponible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Sotto est-il compatible avec mon système de caisse actuel ?</h3>
              <p className="text-[#505A64]">
                Avec Sotto, plus besoin de caisse du tout ! Notre IA s'occupe de l'intégralité des opérations d'encaissement, de gestion des commandes et de facturation. Nous remplaçons complètement votre système de caisse traditionnel par une solution vocale intelligente qui élimine le besoin d'interfaces physiques tout en conservant toutes les fonctionnalités essentielles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Utiliser le composant Footer */}
      <Footer />
    </div>
  );
}
