export default function ResourceContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 resource-content">
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40]">Évaluateur d'efficacité</h1>
          <h2 className="text-xl md:text-2xl text-[#D47D5A] mb-8">Analysez les performances de votre restaurant et révélez son plein potentiel</h2>
          <div className="w-24 h-1 bg-[#D47D5A] mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            L'efficacité opérationnelle est la clé d'un restaurant rentable et d'une expérience client mémorable. Notre évaluateur d'efficacité vous aide à identifier avec précision les points forts de votre établissement et les opportunités d'amélioration souvent invisibles au quotidien. Cet outil vous offre une vision claire et objective de vos performances actuelles, vous permettant de prendre des décisions éclairées pour optimiser chaque aspect de votre activité.
          </p>
        </div>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A40]">Pourquoi évaluer l'efficacité de votre restaurant ?</h2>
          <p className="mb-6 text-lg">
            La restauration est un secteur où les marges sont souvent réduites et où chaque détail compte. Une amélioration même minime de votre efficacité peut avoir un impact significatif sur :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#87A28F]">
              <h3 className="font-semibold text-[#1A2A40] dark:text-white mb-2">Votre rentabilité</h3>
              <p className="text-[#1A2A40] dark:text-gray-200">Réduction des coûts opérationnels et augmentation du chiffre d'affaires</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#87A28F]">
              <h3 className="font-semibold text-[#1A2A40] dark:text-white mb-2">L'expérience client</h3>
              <p className="text-[#1A2A40] dark:text-gray-200">Service plus fluide et temps d'attente réduits</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#87A28F]">
              <h3 className="font-semibold text-[#1A2A40] dark:text-white mb-2">Le bien-être de votre équipe</h3>
              <p className="text-[#1A2A40] dark:text-gray-200">Diminution du stress et meilleure organisation</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#87A28F]">
              <h3 className="font-semibold text-[#1A2A40] dark:text-white mb-2">Votre empreinte environnementale</h3>
              <p className="text-[#1A2A40] dark:text-gray-200">Optimisation des ressources et réduction du gaspillage</p>
            </div>
          </div>

          <p className="text-lg">
            Une évaluation régulière vous permet d'identifier les tendances, d'anticiper les problèmes et de mesurer l'impact réel de vos initiatives d'amélioration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1A2A40]">Les dimensions clés de l'efficacité</h2>
          
          <div className="space-y-12">
            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1A2A40] dark:text-white">1. Efficacité du service</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1A2A40] text-white">
                      <th className="py-3 px-4 text-left">Indicateur</th>
                      <th className="py-3 px-4 text-left">Description</th>
                      <th className="py-3 px-4 text-left">Benchmark</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700">
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Temps moyen de service</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Durée entre la commande et le service</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">&lt; 15 min</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Rotation des tables</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Nombre de services par table et par service</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">2-3 services</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Taux d'erreur de commande</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">% de commandes comportant une erreur</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">&lt; 2%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Temps d'attente pour l'addition</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Durée entre la demande et la présentation</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">&lt; 3 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-[#1A2A40] dark:text-gray-200">L'efficacité du service impacte directement la satisfaction client et la capacité de votre établissement à maximiser son chiffre d'affaires. Un service fluide permet d'augmenter le nombre de couverts servis tout en maintenant une expérience de qualité.</p>
            </div>

            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1A2A40] dark:text-white">2. Gestion des ressources humaines</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-[#D4B483]/30">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Ratio personnel/couverts</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Nombre optimal d'employés par rapport au volume d'activité</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-[#D4B483]/30">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Répartition des tâches</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Équilibre entre les différentes fonctions (service, cuisine, bar)</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-[#D4B483]/30">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Planification des équipes</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Adéquation entre les horaires et l'affluence</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-[#D4B483]/30">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Formation et polyvalence</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Capacité des équipes à s'adapter aux différentes situations</p>
                </div>
              </div>
              
              <p className="text-[#1A2A40] dark:text-gray-200">Une équipe bien dimensionnée et organisée est le fondement d'un restaurant efficace. La surcharge comme le sous-effectif peuvent avoir des conséquences négatives sur la qualité du service et la satisfaction du personnel.</p>
            </div>

            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1A2A40] dark:text-white">3. Optimisation de la cuisine</h3>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-[#D47D5A]/20 mb-4">
                <h4 className="font-medium text-[#D47D5A] dark:text-[#D47D5A] mb-3">Points d'analyse :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span className="text-[#1A2A40] dark:text-gray-200">Temps de préparation des plats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span className="text-[#1A2A40] dark:text-gray-200">Organisation des postes de travail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span className="text-[#1A2A40] dark:text-gray-200">Gestion des stocks et approvisionnements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span className="text-[#1A2A40] dark:text-gray-200">Coordination entre la salle et la cuisine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span className="text-[#1A2A40] dark:text-gray-200">Gestion des pics d'activité</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-[#1A2A40] dark:text-gray-200">La cuisine est le cœur battant de votre restaurant. Son efficacité détermine non seulement la qualité des plats servis, mais aussi le rythme global de votre établissement. Une cuisine bien organisée permet de maintenir la qualité même en période d'affluence.</p>
            </div>

            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1A2A40] dark:text-white">4. Gestion de l'espace</h3>
              
              <p className="mb-4 text-[#1A2A40] dark:text-gray-200">L'aménagement de votre restaurant influence directement l'efficacité du service et l'expérience client :</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Circulation</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Fluidité des déplacements du personnel et des clients</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Disposition des tables</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Optimisation de l'espace disponible sans compromettre le confort</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Ergonomie des postes de travail</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Réduction des déplacements inutiles</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
                  <p className="font-medium text-[#1A2A40] dark:text-white">Acoustique et ambiance</p>
                  <p className="text-sm mt-1 text-[#1A2A40] dark:text-gray-200">Impact sur la communication et l'expérience sensorielle</p>
                </div>
              </div>
              
              <p className="text-[#1A2A40] dark:text-gray-200">Un espace bien pensé facilite le travail de votre équipe tout en créant une atmosphère agréable pour vos clients.</p>
            </div>

            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-6 md:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1A2A40] dark:text-white">5. Efficacité des processus et technologies</h3>
              
              <p className="mb-4 text-[#1A2A40] dark:text-gray-200">Évaluez comment vos outils et processus actuels soutiennent ou freinent votre activité :</p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1A2A40] text-white">
                      <th className="py-3 px-4 text-left">Domaine</th>
                      <th className="py-3 px-4 text-left">Éléments à analyser</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700">
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Prise de commande</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Rapidité, précision, flexibilité</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Gestion des paiements</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Diversité des moyens, temps de traitement</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Communication interne</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Fluidité entre services, clarté des informations</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Gestion des réservations</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Optimisation du planning, rappels</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-white">Reporting et analytics</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-gray-200">Disponibilité et utilisation des données</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-[#1A2A40] dark:text-gray-200">Les technologies doivent être au service de l'humain, et non l'inverse. Des outils adaptés libèrent du temps pour ce qui compte vraiment : l'attention portée à vos clients.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A40]">Notre méthodologie d'évaluation</h2>
          <p className="mb-6 text-[#1A2A40] dark:text-gray-200">L'évaluateur d'efficacité Sotto repose sur une approche en trois phases :</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[#D47D5A]/20">
              <div className="w-12 h-12 bg-[#D47D5A]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-[#D47D5A]">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#1A2A40] dark:text-white">Collecte de données</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Un questionnaire détaillé sur vos opérations actuelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">L'analyse de vos données de vente et de service (si disponibles)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Une observation sur site (optionnelle mais recommandée)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[#D47D5A]/20">
              <div className="w-12 h-12 bg-[#D47D5A]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-[#D47D5A]">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#1A2A40] dark:text-white">Analyse comparative</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Des benchmarks sectoriels adaptés à votre type d'établissement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Vos propres objectifs et contraintes spécifiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">L'historique de vos performances (pour les évaluations récurrentes)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[#D47D5A]/20">
              <div className="w-12 h-12 bg-[#D47D5A]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-[#D47D5A]">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#1A2A40] dark:text-white">Recommandations personnalisées</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Une évaluation objective de chaque dimension d'efficacité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Des recommandations concrètes et priorisées</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Des solutions adaptées à votre contexte et budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-gray-200">Un plan d'action progressif avec des objectifs mesurables</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A40]">Visualisation des résultats</h2>
          <p className="mb-6 text-[#1A2A40] dark:text-gray-200">Votre rapport d'évaluation inclut des visualisations claires pour faciliter la compréhension et la prise de décision :</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#1A2A40] rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1A2A40] dark:text-white">Diagramme radar</h3>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-gray-200">Vue d'ensemble de vos performances sur chaque dimension</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#1A2A40] rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1A2A40] dark:text-white">Graphiques comparatifs</h3>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-gray-200">Positionnement par rapport aux benchmarks</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#1A2A40] rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1A2A40] dark:text-white">Cartographie des processus</h3>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-gray-200">Identification visuelle des goulets d'étranglement</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-[#1A2A40] rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1A2A40] dark:text-white">Tableau de priorisation</h3>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-gray-200">Classification des actions selon leur impact et leur facilité de mise en œuvre</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A40]">Témoignages de restaurateurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-[#D4B483]">
              <blockquote className="text-sm md:text-base italic mb-4 text-[#1A2A40] dark:text-gray-200">
                "L'évaluateur d'efficacité nous a permis d'identifier que notre processus de paiement était responsable d'un ralentissement significatif du service. Après avoir mis en œuvre les recommandations, nous avons réduit le temps d'attente pour l'addition de 65% et augmenté notre rotation de tables de 20%."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#D4B483]/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#D4B483] font-semibold">ML</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1A2A40] dark:text-white">Marie L.</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Restaurant Le Bistronome, Paris</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-[#D4B483]">
              <blockquote className="text-sm md:text-base italic mb-4 text-[#1A2A40] dark:text-gray-200">
                "Je pensais que notre cuisine était notre point faible, mais l'évaluation a révélé que c'était plutôt la communication entre la salle et la cuisine qui posait problème. Grâce aux solutions proposées, nous avons considérablement amélioré la coordination et réduit les erreurs de commande."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#D4B483]/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#D4B483] font-semibold">TD</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1A2A40] dark:text-white">Thomas D.</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Brasserie La Terrasse, Lyon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A40]">Comment utiliser l'évaluateur d'efficacité</h2>
          
          <div className="bg-[#F5F5F0] dark:bg-gray-800/50 p-6 rounded-xl mb-8">
            <ol className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 text-white font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-white">Complétez le questionnaire en ligne</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">(environ 15-20 minutes)</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 text-white font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-white">Partagez vos données via notre interface sécurisée</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">(optionnel)</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 text-white font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-white">Planifiez une observation sur site avec l'un de nos experts</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">(recommandé)</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 text-white font-semibold">
                  4
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-white">Recevez votre rapport personnalisé</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">sous 5 jours ouvrés</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 text-white font-semibold">
                  5
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-white">Bénéficiez d'une session de consultation</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">pour explorer les recommandations</p>
                </div>
              </li>
            </ol>
            
            <p className="mt-6 text-sm text-[#1A2A40] dark:text-gray-200">L'évaluation peut être réalisée ponctuellement ou de façon récurrente (trimestrielle ou semestrielle) pour suivre votre progression.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A40]">Intégration avec Sotto</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-[#87A28F]/30 mb-8">
            <p className="mb-4 text-[#1A2A40] dark:text-gray-200">Si vous utilisez déjà le système vocal Sotto, l'évaluateur d'efficacité s'intègre parfaitement à votre écosystème :</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#87A28F]/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#87A28F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#1A2A40] dark:text-gray-200">Utilisation automatique des données déjà collectées par Sotto</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#87A28F]/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#87A28F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#1A2A40] dark:text-gray-200">Recommandations tenant compte de vos équipements actuels</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#87A28F]/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#87A28F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#1A2A40] dark:text-gray-200">Suivi en temps réel de l'impact des améliorations</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#87A28F]/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#87A28F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#1A2A40] dark:text-gray-200">Configuration optimisée de votre système vocal selon les résultats</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1A2A40]">Conclusion : transformer l'évaluation en action</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1A2A40] dark:text-gray-200">
              L'évaluation n'est que la première étape d'un processus d'amélioration continue. Notre objectif est de vous fournir non seulement une analyse claire de votre situation actuelle, mais aussi les outils et le soutien nécessaires pour implémenter des changements significatifs.
            </p>
            <p className="text-[#1A2A40] dark:text-gray-200">
              En identifiant précisément les opportunités d'amélioration, vous pourrez concentrer vos efforts et ressources là où ils auront le plus d'impact, créant ainsi un cercle vertueux d'efficacité et de satisfaction pour vos clients comme pour votre équipe.
            </p>
          </div>
        </section>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6 text-[#1A2A40] dark:text-white">Prêt à révéler le plein potentiel de votre restaurant ?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-block bg-[#D47D5A] hover:bg-[#1A2A40] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Démarrer votre évaluation d'efficacité
            </a>
            <a href="#" className="inline-block bg-white dark:bg-gray-800 text-[#1A2A40] dark:text-white border border-[#1A2A40] font-medium py-3 px-6 rounded-lg hover:bg-[#F5F5F0] dark:hover:bg-gray-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              Contactez-nous pour en savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}