const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans resource-content">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40]">Livre Blanc Sotto</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#D47D5A]">Révolutionner la Restauration par l'Interface Vocale</h2>
        <p className="text-lg italic text-[#1A2A40] dark:text-[#F5F5F0]">*Document stratégique pour partenaires et investisseurs*</p>
        <div className="w-32 h-1 bg-[#D47D5A] mx-auto my-8 rounded-full"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Introduction</h2>
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed mb-4">
            Ce livre blanc présente la vision, l'architecture technique et les objectifs stratégiques du projet Sotto, un système d'interface vocale IA conçu pour transformer fondamentalement l'expérience de la restauration. En éliminant les interfaces à écran traditionnelles au profit d'une technologie vocale discrète et efficace, Sotto s'inscrit dans une vision plus large de réinvention du secteur, centrée sur l'humain et l'expérience culinaire authentique.
          </p>
          <p className="text-lg leading-relaxed">
            Ce document détaille notre approche unique, notre proposition de valeur distincte et notre stratégie de déploiement, offrant aux partenaires et investisseurs une compréhension approfondie de notre vision et de notre feuille de route.
          </p>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Contexte et Opportunité de Marché</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Un Secteur en Quête de Transformation</h3>
          <p className="mb-4 text-lg">Le secteur de la restauration fait face à des défis structurels majeurs qui créent une opportunité sans précédent pour une solution innovante:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Coûts d'exploitation élevés</h4>
              <p>Les systèmes d'encaissement traditionnels imposent des TEG atteignant 20-30%, pesant lourdement sur des marges déjà réduites</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Fragmentation technologique</h4>
              <p>L'écosystème actuel est composé de solutions disparates (caisses, TPE, logiciels de gestion) sans véritable intégration</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Dépendance aux intermédiaires</h4>
              <p>Les restaurateurs n'ont aucune maîtrise sur leurs flux financiers, commissions ou conditions</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Expérience client compromise</h4>
              <p>La multiplication des écrans (caisses, tablettes, bornes) crée une barrière à l'expérience humaine et culinaire</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Pénurie de personnel</h4>
              <p>Difficulté croissante à recruter et former du personnel dans un contexte de turnover élevé</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Taille du Marché et Tendances</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Segment</th>
                  <th className="py-3 px-4 text-left text-white">Nombre d'établissements en France</th>
                  <th className="py-3 px-4 text-left text-white">Potentiel CA annuel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4">Restauration traditionnelle</td>
                  <td className="py-3 px-4">175,000+</td>
                  <td className="py-3 px-4">350M€</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4">Restauration rapide</td>
                  <td className="py-3 px-4">40,000+</td>
                  <td className="py-3 px-4">80M€</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4">Cafés et bars</td>
                  <td className="py-3 px-4">45,000+</td>
                  <td className="py-3 px-4">90M€</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700 font-semibold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">260,000+</td>
                  <td className="py-3 px-4">520M€</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4 text-lg">Les tendances actuelles renforcent l'opportunité pour Sotto:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center p-4 bg-[#F5F5F0] dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mr-4 bg-[#D47D5A] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">47%</div>
              <p>Augmentation des coûts opérationnels depuis 2019</p>
            </div>
            
            <div className="flex items-center p-4 bg-[#F5F5F0] dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mr-4 bg-[#D47D5A] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">68%</div>
              <p>Croissance des attentes clients concernant la rapidité du service</p>
            </div>
            
            <div className="flex items-center p-4 bg-[#F5F5F0] dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mr-4 bg-[#D47D5A] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">35%</div>
              <p>Hausse de la demande pour des expériences de restauration authentiques</p>
            </div>
            
            <div className="flex items-center p-4 bg-[#F5F5F0] dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="mr-4 bg-[#D47D5A] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">120%</div>
              <p>Adoption accélérée des technologies vocales en 3 ans</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Vision et Positionnement</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Notre Vision</h3>
          <div className="bg-[#1A2A40] p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg leading-relaxed italic text-white">
              Sotto transforme l'expérience de la restauration en éliminant toutes les interfaces à écran au profit d'un système vocal IA centralisé. En connectant le personnel via des oreillettes discrètes, nous fluidifions les opérations tout en recentrant l'attention sur l'humain et l'expérience culinaire.
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Positionnement Stratégique</h3>
          <p className="mb-4 text-lg">Sotto représente un élément clé d'une vision globale de l'encaissement intelligent qui vise à:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#87A28F]">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Centraliser les flux</h4>
              <p>commandes, paiements, reversements</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#87A28F]">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Intégrer organiquement</h4>
              <p>tous les outils autour de l'expérience client</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#87A28F]">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Offrir une solution 100% intégrée</h4>
              <p>et pilotée</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#87A28F]">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Libérer l'espace physique</h4>
              <p>et l'attention du personnel</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Proposition de Valeur Distinctive</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 animate-float">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1A2A40] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-center mb-4 text-[#D47D5A]">Pour les Restaurateurs</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Réduction de 30% des coûts matériels</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimisation de l'espace commercial</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Données opérationnelles en temps réel</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Simplification de la formation du personnel</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Augmentation de 15% du chiffre d'affaires</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: "2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1A2A40] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-center mb-4 text-[#D47D5A]">Pour le Personnel</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactions plus naturelles et intuitives</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Réduction de 25% du temps passé sur les interfaces</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Assistance contextuelle permanente</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mains libres en permanence</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Formation accélérée et continue</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: "4s" }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1A2A40] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-center mb-4 text-[#D47D5A]">Pour les Clients</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Service plus attentif et personnalisé</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Temps d'attente réduit de 40%</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Atmosphère débarrassée des écrans</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expérience culinaire authentique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Architecture du Système</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Vue d'Ensemble Technique</h3>
          <p className="mb-4 text-lg">Sotto s'articule autour de quatre composants principaux interconnectés:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
              <div className="bg-[#1A2A40] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">1</div>
              <h4 className="font-bold mb-2 text-[#D47D5A]">Interface Vocale</h4>
              <p>Système de reconnaissance et traitement du langage naturel</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
              <div className="bg-[#1A2A40] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">2</div>
              <h4 className="font-bold mb-2 text-[#D47D5A]">Noyau IA</h4>
              <p>Cerveau central gérant toutes les opérations du restaurant</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
              <div className="bg-[#1A2A40] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">3</div>
              <h4 className="font-bold mb-2 text-[#D47D5A]">Dispositifs Physiques</h4>
              <p>Oreillettes et points de charge</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
              <div className="bg-[#1A2A40] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4">4</div>
              <h4 className="font-bold mb-2 text-[#D47D5A]">Backend Cloud</h4>
              <p>Infrastructure sécurisée et évolutive</p>
            </div>
          </div>
          
          <div className="mt-8 bg-[#F5F5F0] dark:bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-[#1A2A40] dark:text-gray-300 italic">Diagramme: Architecture Sotto</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Système Vocal Intelligent</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="bg-[#D4B483] rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Reconnaissance du langage naturel</h4>
                  <p className="text-sm">par LLM optimisé pour la restauration</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="bg-[#D4B483] rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Compréhension contextuelle</h4>
                  <p className="text-sm">des commandes complexes et modifications</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="bg-[#D4B483] rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adaptation aux accents</h4>
                  <p className="text-sm">et particularités linguistiques régionales</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="bg-[#D4B483] rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Assistance proactive</h4>
                  <p className="text-sm">et suggestions contextuelles basées sur l'historique</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:col-span-2">
              <div className="flex items-start">
                <div className="bg-[#D4B483] rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Filtrage intelligent du bruit</h4>
                  <p className="text-sm">dans les environnements sonores chargés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Architecture Centralisée</h3>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-x-auto font-mono text-sm">
            <pre className="text-[#1A2A40] dark:text-white">
{`┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Interface     │◄────┤    Noyau IA     │────►│    Backend      │
│   Vocale        │     │    Central      │     │    Cloud        │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Oreillettes   │     │   Gestion des   │     │   Analytique    │
│   & Dispositifs │     │   Opérations    │     │   & Rapports    │
└─────────────────┘     └─────────────────┘     └─────────────────┘`}
            </pre>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Interface Humaine Discrète</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-b-2 border-[#D47D5A]">
              <h4 className="font-semibold mb-2">Oreillettes élégantes</h4>
              <p className="text-sm">et confortables pour usage prolongé</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-b-2 border-[#D47D5A]">
              <h4 className="font-semibold mb-2">Micros haute-performance</h4>
              <p className="text-sm">optimisés pour environnements bruyants</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-b-2 border-[#D47D5A]">
              <h4 className="font-semibold mb-2">Points de charge intégrés</h4>
              <p className="text-sm">à l'environnement du restaurant</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-b-2 border-[#D47D5A]">
              <h4 className="font-semibold mb-2">Système tactile minimal</h4>
              <p className="text-sm">pour fonctions critiques de secours</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-b-2 border-[#D47D5A]">
              <h4 className="font-semibold mb-2">Batterie longue durée</h4>
              <p className="text-sm">avec alertes intelligentes</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Cas d'Utilisation</h2>
        
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Service en Salle</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#D47D5A]">Serveur:</div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Table 12 commande un burger saignant avec frites, une pizza végétarienne sans oignons et deux verres de vin rouge maison."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#1A2A40]">Sotto:</div>
                <div className="bg-[#F5F5F0] dark:bg-gray-900 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Commande enregistrée pour la table 12: un burger saignant avec frites, une pizza végétarienne sans oignons, deux verres de vin rouge maison. Transmis en cuisine et au bar."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#D47D5A]">Serveur:</div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Ajoute une carafe d'eau pour la 12."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#1A2A40]">Sotto:</div>
                <div className="bg-[#F5F5F0] dark:bg-gray-900 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Carafe d'eau ajoutée pour la table 12."
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Communication Cuisine-Salle</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#D47D5A]">Chef:</div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Entrée table 4 prête pour service."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#1A2A40]">Sotto:</div>
                <div className="bg-[#F5F5F0] dark:bg-gray-900 p-3 rounded-lg rounded-tl-none flex-grow italic">
                  [au serveur responsable] "Table 4: entrées prêtes pour service."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#D47D5A]">Serveur:</div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Entrées servies table 4."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#1A2A40]">Sotto:</div>
                <div className="bg-[#F5F5F0] dark:bg-gray-900 p-3 rounded-lg rounded-tl-none flex-grow italic">
                  [en cuisine] "Confirmation: entrées servies table 4."
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Gestion des Additions</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#D47D5A]">Serveur:</div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none flex-grow">
                  "La table 8 demande l'addition."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#1A2A40]">Sotto:</div>
                <div className="bg-[#F5F5F0] dark:bg-gray-900 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Préparation de l'addition pour la table 8. Le total est de 78,50€. Souhaitez-vous imprimer ou envoyer l'addition?"
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#D47D5A]">Serveur:</div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Imprimer, s'il te plaît."
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-[#1A2A40]">Sotto:</div>
                <div className="bg-[#F5F5F0] dark:bg-gray-900 p-3 rounded-lg rounded-tl-none flex-grow">
                  "Addition pour table 8 en cours d'impression."
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Feuille de Route et Déploiement</h2>
        
        <div className="relative">
          <div className="absolute left-8 inset-y-0 w-0.5 bg-[#D47D5A]"></div>
          
          <div className="space-y-12">
            <div className="relative flex">
              <div className="flex-shrink-0 w-16">
                <div className="h-16 w-16 rounded-full bg-[#1A2A40] flex items-center justify-center text-white font-bold z-10 relative">P1</div>
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold mb-2 text-[#87A28F]">Phase 1: MVP et Tests Initiaux (T1-T2 2024)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Développement du cœur IA avec reconnaissance vocale</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Intégration avec système de caisse basique</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Tests en laboratoire et simulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Sélection des partenaires pour pilotes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative flex">
              <div className="flex-shrink-0 w-16">
                <div className="h-16 w-16 rounded-full bg-[#1A2A40] flex items-center justify-center text-white font-bold z-10 relative">P2</div>
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold mb-2 text-[#87A28F]">Phase 2: Pilotes (T3-T4 2024)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Déploiement dans 5-10 restaurants partenaires</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Collecte intensive de feedback et itérations rapides</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Perfectionnement des algorithmes de reconnaissance vocale</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Optimisation de l'interface utilisateur</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative flex">
              <div className="flex-shrink-0 w-16">
                <div className="h-16 w-16 rounded-full bg-[#1A2A40] flex items-center justify-center text-white font-bold z-10 relative">P3</div>
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold mb-2 text-[#87A28F]">Phase 3: Lancement Commercial (T1 2025)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Déploiement à l'échelle dans 50-100 restaurants</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Développement des fonctionnalités avancées</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Intégration complète avec l'écosystème de caisse intelligente</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Expansion de l'équipe commerciale et support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative flex">
              <div className="flex-shrink-0 w-16">
                <div className="h-16 w-16 rounded-full bg-[#1A2A40] flex items-center justify-center text-white font-bold z-10 relative">P4</div>
              </div>
              <div className="ml-8">
                <h3 className="text-xl font-semibold mb-2 text-[#87A28F]">Phase 4: Expansion (T3 2025 et au-delà)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Déploiement international dans les marchés clés</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Intégration des modules bancaires et paiement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Développement de l'écosystème de partenaires</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Introduction des fonctionnalités d'analyse prédictive</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Modèle Économique</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Structure de Revenus</h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Source</th>
                  <th className="py-3 px-4 text-left text-white">Description</th>
                  <th className="py-3 px-4 text-left text-white">% du CA projeté</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 font-medium">Abonnement SaaS</td>
                  <td className="py-3 px-4">Tarification mensuelle basée sur le nombre d'utilisateurs</td>
                  <td className="py-3 px-4">65%</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 font-medium">Location matérielle</td>
                  <td className="py-3 px-4">Oreillettes et infrastructure</td>
                  <td className="py-3 px-4">20%</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 font-medium">Commission transactions</td>
                  <td className="py-3 px-4">Pourcentage minime sur les paiements intégrés</td>
                  <td className="py-3 px-4">10%</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 font-medium">Services premium</td>
                  <td className="py-3 px-4">Support dédié, formations, personnalisations</td>
                  <td className="py-3 px-4">5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Projections Financières</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#D4B483] rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-[#1A2A40]">A1</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Année 1</h4>
                  <p className="text-[#D47D5A] font-medium">100-150 restaurants</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-center py-3 border-t border-b border-gray-200 dark:border-gray-700 mb-2">
                0.8-1.2M€
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#D4B483] rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-[#1A2A40]">A2</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Année 2</h4>
                  <p className="text-[#D47D5A] font-medium">500-700 restaurants</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-center py-3 border-t border-b border-gray-200 dark:border-gray-700 mb-2">
                4-6M€
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#D4B483] rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-[#1A2A40]">A3</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Année 3</h4>
                  <p className="text-[#D47D5A] font-medium">2000-2500 restaurants</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-center py-3 border-t border-b border-gray-200 dark:border-gray-700 mb-2">
                15-20M€
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#D4B483] rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-[#1A2A40]">BEP</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Point d'équilibre</h4>
                  <p className="text-[#D47D5A] font-medium">Prévu au T2 2026</p>
                </div>
              </div>
              <div className="text-center py-3 border-t border-b border-gray-200 dark:border-gray-700 mb-2">
                <span className="bg-[#87A28F] text-white px-3 py-1 rounded-full text-sm font-medium">Rentabilité</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Besoins en Financement</h3>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <p className="text-lg mb-2">Un financement de</p>
              <div className="text-3xl font-bold text-[#D47D5A] mb-2">2.5M€</div>
              <p className="text-lg">est nécessaire pour:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#1A2A40]">
                      Finalisation du développement produit
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[#1A2A40]">
                      40%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D47D5A]"></div>
                </div>
              </div>
              
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#1A2A40]">
                      Recrutement équipe
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[#1A2A40]">
                      30%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D47D5A]"></div>
                </div>
              </div>
              
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#1A2A40]">
                      Marketing et acquisition clients
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[#1A2A40]">
                      20%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D47D5A]"></div>
                </div>
              </div>
              
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-[#1A2A40]">
                      Fonds de roulement
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[#1A2A40]">
                      10%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#D47D5A]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Équipe et Partenaires</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Équipe Fondatrice</h3>
          <p className="mb-4 text-lg">Une équipe pluridisciplinaire combinant expertise technique et connaissance approfondie du secteur de la restauration:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#1A2A40] text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-[#D47D5A]">Direction Produit</h4>
                <p>15+ ans d'expérience en développement produit SaaS</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#1A2A40] text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-[#D47D5A]">Direction Technique</h4>
                <p>Expertise en IA, reconnaissance vocale et systèmes distribués</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#1A2A40] text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-[#D47D5A]">Direction Commerciale</h4>
                <p>Réseau établi dans la restauration et l'hôtellerie</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#1A2A40] text-white p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-[#D47D5A]">Direction Design</h4>
                <p>Spécialisation en expérience utilisateur et interfaces vocales</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Partenaires Stratégiques</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-4 border-l-4 border-[#D4B483]">
              <h4 className="font-bold mb-2">Fournisseurs de Matériel</h4>
              <p>Collaboration avec fabricants d'oreillettes professionnelles</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-4 border-l-4 border-[#D4B483]">
              <h4 className="font-bold mb-2">Restaurants Pilotes</h4>
              <p>Accords avec chaînes et indépendants pour tests en conditions réelles</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-4 border-l-4 border-[#D4B483]">
              <h4 className="font-bold mb-2">Intégrateurs Techniques</h4>
              <p>Partenariats avec spécialistes en solutions d'encaissement</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-4 border-l-4 border-[#D4B483]">
              <h4 className="font-bold mb-2">Institutions Culinaires</h4>
              <p>Collaborations avec écoles de formation hôtelière</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Conclusion</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <p className="text-lg leading-relaxed mb-4">
            Sotto représente une rupture fondamentale dans la façon dont la technologie s'intègre au monde de la restauration. En éliminant la barrière des écrans, nous réhumanisons le service tout en optimisant l'efficacité opérationnelle, créant ainsi un avantage compétitif significatif pour les établissements qui adoptent notre solution.
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Notre vision s'étend au-delà d'un simple outil technologique – nous créons un écosystème complet qui transforme l'ensemble de l'expérience de restauration, des opérations quotidiennes aux flux financiers, en passant par la relation client.
          </p>
          
          <p className="text-lg leading-relaxed">
            Le moment est idéal pour cette transformation, avec un secteur en recherche active de solutions innovantes face à des défis structurels croissants. Sotto apporte une réponse élégante et efficace à ces enjeux, tout en ouvrant la voie à une restauration plus humaine, plus rentable et plus agréable pour tous.
          </p>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-800 my-8 rounded-full"></div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D4B483] pb-2">Prochaines Étapes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="bg-[#1A2A40] text-white p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D47D5A]">Demander une démonstration</h3>
            <p>Contactez-nous pour assister à une présentation live du système</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="bg-[#1A2A40] text-white p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D47D5A]">Devenir restaurant partenaire</h3>
            <p>Rejoignez notre programme pilote pour tester Sotto en conditions réelles</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="bg-[#1A2A40] text-white p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D47D5A]">Explorer un partenariat</h3>
            <p>Discutons des opportunités de collaboration stratégique</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
            <div className="bg-[#1A2A40] text-white p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D47D5A]">Participer au financement</h3>
            <p>Découvrez notre dossier d'investissement complet</p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="italic text-[#1A2A40] dark:text-gray-300">
            *Pour toute information complémentaire, contactez l'équipe Sotto à <a href="mailto:contact@sotto.ai" className="text-[#D47D5A] hover:underline">contact@sotto.ai</a>*
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;