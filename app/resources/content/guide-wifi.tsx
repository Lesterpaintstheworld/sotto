export default function ResourceContent() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-[#1A2A40] mb-8 border-b-2 border-[#D47D5A] pb-4">
        Guide d'Implémentation WiFi
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Introduction</h2>
        <p className="text-lg leading-relaxed mb-6">
          La performance du système Sotto repose fondamentalement sur une infrastructure WiFi robuste et optimisée. 
          Contrairement aux systèmes traditionnels à écrans, Sotto utilise des oreillettes connectées pour faciliter 
          une communication fluide entre le personnel, la cuisine et le système central. Ce guide vous accompagne dans 
          l'évaluation et l'optimisation de votre réseau WiFi pour garantir une expérience Sotto sans interruption, 
          vous permettant de vous concentrer sur ce qui compte vraiment : l'humain et la gastronomie.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Pourquoi une infrastructure WiFi optimale est cruciale</h2>
        <p className="text-lg leading-relaxed mb-6">
          Pour Sotto, le WiFi n'est pas simplement un "plus" mais le système nerveux qui connecte tous les éléments de votre restaurant. 
          Une connexion fiable garantit :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold text-[#1A2A40] mb-2">Communication ininterrompue</h3>
            <p className="text-gray-700">Entre le personnel équipé d'oreillettes</p>
          </div>
          <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold text-[#1A2A40] mb-2">Transmission instantanée</h3>
            <p className="text-gray-700">Des commandes vers la cuisine</p>
          </div>
          <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold text-[#1A2A40] mb-2">Synchronisation en temps réel</h3>
            <p className="text-gray-700">Avec le système de gestion</p>
          </div>
          <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="font-semibold text-[#1A2A40] mb-2">Expérience fluide</h3>
            <p className="text-gray-700">Pour votre équipe et vos clients</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          Un réseau WiFi inadapté peut entraîner des retards, des commandes manquées ou des déconnexions qui nuisent 
          à l'expérience que Sotto vise à créer.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Évaluation de votre infrastructure actuelle</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Audit de couverture WiFi</h3>
          <p className="mb-4">Avant toute modification, évaluez votre situation actuelle :</p>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">1</div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-[#1A2A40]">Cartographiez votre espace</h4>
                <p className="text-gray-700">Identifiez les zones principales (salle, cuisine, bar, terrasse)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">2</div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-[#1A2A40]">Mesurez la force du signal</h4>
                <p className="text-gray-700">Utilisez une application de mesure WiFi dans chaque zone</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">3</div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-[#1A2A40]">Identifiez les zones mortes</h4>
                <p className="text-gray-700">Repérez les endroits où le signal est faible ou inexistant</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">4</div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-[#1A2A40]">Testez aux heures de pointe</h4>
                <p className="text-gray-700">Les performances peuvent varier selon l'affluence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Analyse des performances réseau</h3>
          <p className="mb-4">Examinez les caractéristiques techniques de votre installation :</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Paramètre</th>
                  <th className="py-3 px-4 text-left">Minimum recommandé</th>
                  <th className="py-3 px-4 text-left">Optimal pour Sotto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Débit descendant</td>
                  <td className="py-3 px-4">25 Mbps</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">100+ Mbps</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Débit montant</td>
                  <td className="py-3 px-4">10 Mbps</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">50+ Mbps</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Latence</td>
                  <td className="py-3 px-4">{'< 50ms'}</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">{'< 20ms'}</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Stabilité</td>
                  <td className="py-3 px-4">99%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">99.9%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Bande passante</td>
                  <td className="py-3 px-4">5 GHz</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">5 GHz + 2.4 GHz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Identification des interférences</h3>
          <p className="mb-4">Les restaurants présentent des défis spécifiques pour la propagation WiFi :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow border-l-4 border-[#D47D5A]">
              <p><strong className="text-[#1A2A40]">Équipements de cuisine</strong> générant des interférences électromagnétiques</p>
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow border-l-4 border-[#D47D5A]">
              <p><strong className="text-[#1A2A40]">Matériaux de construction</strong> (métal, béton épais) bloquant le signal</p>
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow border-l-4 border-[#D47D5A]">
              <p><strong className="text-[#1A2A40]">Appareils concurrents</strong> (micro-ondes, téléphones sans fil) sur les mêmes fréquences</p>
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow border-l-4 border-[#D47D5A]">
              <p><strong className="text-[#1A2A40]">Réseaux voisins</strong> saturant les canaux disponibles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Optimisation de votre réseau WiFi</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Placement stratégique des points d'accès</h3>
          <p className="mb-4">Le positionnement est crucial pour une couverture optimale :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Hauteur idéale</h4>
              <p className="text-gray-700">2-2,5m du sol, à distance des murs et obstacles métalliques</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Couverture à 360°</h4>
              <p className="text-gray-700">Placez les points d'accès au centre des zones à couvrir</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Zones critiques</h4>
              <p className="text-gray-700">Assurez une couverture renforcée en cuisine et dans les zones de service</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Évitez la proximité</h4>
              <p className="text-gray-700">Avec les équipements électriques générant des interférences</p>
            </div>
          </div>
          
          <div className="bg-[#1A2A40] text-white p-6 rounded-lg shadow-lg my-6 border-l-4 border-[#D47D5A]">
            <p className="font-bold mb-2">Conseil Sotto</p>
            <p>Pour un restaurant de taille moyenne (100-150m²), prévoyez au minimum deux points d'accès de qualité professionnelle plutôt qu'un seul routeur grand public.</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Configuration optimale</h3>
          <p className="mb-4">Paramétrez votre réseau pour des performances optimales :</p>
          
          <ul className="space-y-3 my-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F] flex items-center justify-center text-white mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700"><strong className="text-[#1A2A40]">Séparez les réseaux</strong> : Créez un SSID dédié pour Sotto, distinct du WiFi client</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F] flex items-center justify-center text-white mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700"><strong className="text-[#1A2A40]">Priorisez le trafic</strong> : Configurez la QoS (Quality of Service) pour donner priorité aux appareils Sotto</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F] flex items-center justify-center text-white mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700"><strong className="text-[#1A2A40]">Sélectionnez les canaux WiFi</strong> les moins encombrés (utilisez un analyseur de spectre)</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F] flex items-center justify-center text-white mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700"><strong className="text-[#1A2A40]">Activez le band steering</strong> pour basculer intelligemment entre 2.4 GHz et 5 GHz</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F] flex items-center justify-center text-white mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700"><strong className="text-[#1A2A40]">Mettez à jour régulièrement</strong> le firmware de vos équipements réseau</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Sécurisation du réseau</h3>
          <p className="mb-4">La sécurité est essentielle pour protéger vos données et celles de vos clients :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-gray-700"><strong className="text-[#1A2A40]">Utilisez le WPA3</strong> ou au minimum WPA2-Enterprise pour le réseau Sotto</p>
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <p className="text-gray-700"><strong className="text-[#1A2A40]">Changez les identifiants par défaut</strong> de tous vos équipements réseau</p>
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-gray-700"><strong className="text-[#1A2A40]">Activez le filtrage MAC</strong> pour les appareils Sotto</p>
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700"><strong className="text-[#1A2A40]">Isolez le réseau professionnel</strong> du réseau client</p>
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <p className="text-gray-700"><strong className="text-[#1A2A40]">Mettez en place un pare-feu</strong> adapté à votre environnement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Solutions matérielles recommandées</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Points d'accès professionnels</h3>
          <p className="mb-4">Voici notre sélection d'équipements parfaitement compatibles avec Sotto :</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Modèle</th>
                  <th className="py-3 px-4 text-left">Taille de restaurant</th>
                  <th className="py-3 px-4 text-left">Caractéristiques</th>
                  <th className="py-3 px-4 text-left">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Ubiquiti UniFi 6 Lite</td>
                  <td className="py-3 px-4">Petit ({'< 100m²'})</td>
                  <td className="py-3 px-4">WiFi 6, MIMO 2x2, jusqu'à 1.5 Gbps</td>
                  <td className="py-3 px-4">90-120€</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">TP-Link EAP245</td>
                  <td className="py-3 px-4">Moyen (100-200m²)</td>
                  <td className="py-3 px-4">WiFi 5, MIMO 3x3, jusqu'à 1.3 Gbps</td>
                  <td className="py-3 px-4">80-100€</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Ubiquiti UniFi 6 Pro</td>
                  <td className="py-3 px-4">Grand ({'> 200m²'})</td>
                  <td className="py-3 px-4">WiFi 6, MIMO 4x4, jusqu'à 5.4 Gbps</td>
                  <td className="py-3 px-4">160-190€</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Cisco Meraki MR36</td>
                  <td className="py-3 px-4">Tous formats avec gestion cloud</td>
                  <td className="py-3 px-4">WiFi 6, gestion cloud, analytics</td>
                  <td className="py-3 px-4">Abonnement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Maillage WiFi (Mesh)</h3>
          <p className="mb-4">Pour les espaces complexes ou sur plusieurs niveaux, un système maillé offre une couverture homogène :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-semibold text-[#1A2A40] mb-3">Avantages</h4>
              <p className="text-gray-700">Transition transparente entre points d'accès, installation simplifiée</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-semibold text-[#1A2A40] mb-3">Inconvénients</h4>
              <p className="text-gray-700">Coût plus élevé, performances légèrement réduites entre nœuds</p>
            </div>
          </div>
          
          <p className="mt-4">
            <strong>Recommandations :</strong> Systèmes UniFi Mesh, TP-Link Omada, ou Netgear Orbi Pro pour environnements professionnels.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Processus d'installation et de validation</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Étapes d'implémentation</h3>
          
          <div className="relative">
            <div className="absolute left-5 inset-y-0 w-0.5 bg-[#D47D5A]"></div>
            <div className="space-y-6 relative">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold z-10">1</div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow">
                  <h4 className="font-semibold text-[#1A2A40]">Planification</h4>
                  <p className="text-gray-700">Cartographiez votre espace et déterminez le placement optimal</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold z-10">2</div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow">
                  <h4 className="font-semibold text-[#1A2A40]">Installation</h4>
                  <p className="text-gray-700">Positionnez et configurez les points d'accès selon les recommandations</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold z-10">3</div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow">
                  <h4 className="font-semibold text-[#1A2A40]">Configuration</h4>
                  <p className="text-gray-700">Créez un réseau dédié pour Sotto avec paramètres optimaux</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold z-10">4</div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow">
                  <h4 className="font-semibold text-[#1A2A40]">Test initial</h4>
                  <p className="text-gray-700">Vérifiez la couverture et les performances dans toutes les zones</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold z-10">5</div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow">
                  <h4 className="font-semibold text-[#1A2A40]">Ajustements</h4>
                  <p className="text-gray-700">Affinez le placement et les paramètres selon les résultats</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Validation des performances</h3>
          <p className="mb-4">Après installation, validez que votre réseau répond aux exigences Sotto :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-[#F5F5F0] p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Test de couverture</h4>
                <p className="text-gray-700">Signal {'>'} -65 dBm dans toutes les zones opérationnelles</p>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Test de débit</h4>
                <p className="text-gray-700">Minimum 20 Mbps montant/descendant à chaque point de service</p>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Test de latence</h4>
                <p className="text-gray-700">{'< 30ms'} vers le serveur local Sotto</p>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Test de charge</h4>
                <p className="text-gray-700">Performances stables même aux heures de pointe</p>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Test de transition</h4>
                <p className="text-gray-700">Passage fluide d'un point d'accès à l'autre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Résolution des problèmes courants</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-[#1A2A40] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Problème</th>
                <th className="py-3 px-4 text-left">Causes possibles</th>
                <th className="py-3 px-4 text-left">Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Zones sans couverture</td>
                <td className="py-3 px-4">Obstacles, distance excessive</td>
                <td className="py-3 px-4">Ajoutez un point d'accès ou répéteur</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Déconnexions fréquentes</td>
                <td className="py-3 px-4">Interférences, surcharge</td>
                <td className="py-3 px-4">Changez de canal, augmentez la puissance</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Latence élevée</td>
                <td className="py-3 px-4">Congestion réseau, équipement obsolète</td>
                <td className="py-3 px-4">Priorisation QoS, mise à niveau matérielle</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Signal faible</td>
                <td className="py-3 px-4">Obstacles, puissance insuffisante</td>
                <td className="py-3 px-4">Repositionnez les points d'accès, ajustez la puissance</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">Performances réduites aux heures de pointe</td>
                <td className="py-3 px-4">Bande passante insuffisante</td>
                <td className="py-3 px-4">Augmentez votre forfait internet, optimisez la QoS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Maintenance et surveillance continue</h2>
        <p className="mb-6">Pour garantir des performances optimales dans la durée :</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4B483] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="font-semibold text-[#1A2A40]">Surveillez régulièrement</h3>
            </div>
            <p className="text-gray-700">Les performances avec des outils comme WiFi Analyzer</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4B483] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3 className="font-semibold text-[#1A2A40]">Effectuez des tests mensuels</h3>
            </div>
            <p className="text-gray-700">De couverture et de débit</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4B483] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className="font-semibold text-[#1A2A40]">Mettez à jour le firmware</h3>
            </div>
            <p className="text-gray-700">De vos équipements réseau tous les trimestres</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4B483] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h3 className="font-semibold text-[#1A2A40]">Réévaluez votre installation</h3>
            </div>
            <p className="text-gray-700">Après tout réaménagement de l'espace</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4B483] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-semibold text-[#1A2A40]">Documentez les modifications</h3>
            </div>
            <p className="text-gray-700">Apportées à votre réseau</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Conclusion</h2>
        <p className="text-lg leading-relaxed mb-6">
          Une infrastructure WiFi robuste constitue le fondement invisible mais essentiel sur lequel repose l'expérience Sotto. 
          En suivant ce guide, vous créez les conditions optimales pour que votre système vocal IA fonctionne avec fluidité et fiabilité, 
          vous permettant de vous concentrer sur l'essentiel : offrir une expérience culinaire exceptionnelle à vos clients.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          L'équipe Sotto reste à votre disposition pour vous accompagner dans cette mise en place et optimiser votre infrastructure réseau. 
          N'hésitez pas à contacter notre support technique pour une évaluation personnalisée de votre environnement.
        </p>
      </section>

      <div className="bg-[#1A2A40] text-white p-8 rounded-lg shadow-lg animate-float">
        <h3 className="text-xl font-bold mb-3">Besoin d'assistance pour optimiser votre réseau ?</h3>
        <p className="mb-4">
          L'équipe technique Sotto peut réaliser un audit complet de votre infrastructure et vous recommander les améliorations nécessaires.
        </p>
        <a 
          href="mailto:support@sottosystem.com" 
          className="inline-block bg-[#D47D5A] hover:bg-[#D4B483] text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
        >
          Contactez-nous
        </a>
      </div>
    </div>
  );
}
