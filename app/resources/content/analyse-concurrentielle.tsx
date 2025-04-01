const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Analyse Concurrentielle
        </h1>
        <div className="h-1 w-32 bg-[#D47D5A] rounded mb-8"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Introduction
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p>
            Ce document présente une cartographie détaillée du paysage concurrentiel dans lequel Sotto évolue. Nous analysons les solutions existantes dans le domaine de la gestion des restaurants, identifions clairement notre positionnement différenciant, et mettons en lumière les opportunités de marché que nous pouvons saisir. Cette analyse stratégique vise à guider nos décisions produit et notre approche commerciale, en comprenant précisément comment Sotto se distingue dans un secteur en pleine transformation numérique.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Paysage concurrentiel actuel
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Solutions traditionnelles d'encaissement
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Les systèmes de caisse traditionnels dominent encore largement le marché de la restauration, avec plusieurs catégories distinctes:
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
              Systèmes de Point de Vente (POS) classiques
            </h4>
            
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead>
                  <tr className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Solution</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Forces</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Faiblesses</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Part de marché estimée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Lightspeed</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Interface complète, robustesse, écosystème</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Coût élevé (TEG 20-30%), complexité, formation longue</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">15%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Zelty</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Adapté au marché français, fonctionnalités sectorielles</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Interface à écran, intégrations limitées</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">12%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Square</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Facilité d'installation, tarification transparente</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Fonctionnalités limitées pour grands établissements</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">8%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Tiller</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Solution française, design moderne</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Dépendance aux tablettes, coûts cachés</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              Ces solutions sont ancrées dans un paradigme d'interfaces visuelles qui mobilisent l'attention du personnel et créent une barrière technologique visible dans l'espace de restauration.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
              Systèmes ERP pour restauration
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Des solutions comme <strong>Mapal</strong>, <strong>Brigad</strong> ou <strong>Zenchef</strong> proposent des fonctionnalités élargies de gestion d'établissement, mais présentent plusieurs inconvénients majeurs:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Complexité d'implémentation et d'utilisation</span>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Coûts prohibitifs (licence + implémentation + formation)</span>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Faible adaptabilité aux spécificités de chaque établissement</span>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Multiplication des interfaces et des écrans</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Solutions émergentes
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
              Assistants vocaux génériques
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Des solutions comme Amazon Alexa for Business ou Google Assistant tentent de pénétrer le marché professionnel, mais restent inadaptées au contexte spécifique de la restauration:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Non optimisées pour les environnements bruyants</span>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Absence de compréhension contextuelle du vocabulaire de restauration</span>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Intégration limitée avec les systèmes d'encaissement</span>
                </div>
              </li>
              <li className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Confidentialité problématique (données envoyées aux géants technologiques)</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
              Solutions de commande alternative
            </h4>
            <div className="bg-[#F5F5F0] dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 mb-4">
              <h5 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Tendance émergente: Les solutions sans contact post-COVID</h5>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Plusieurs startups développent des alternatives aux commandes traditionnelles:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">QR codes pour commander directement à table</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Applications mobiles propres à chaque restaurant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Bornes de commande autonomes</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">Ces solutions réduisent le contact humain mais multiplient les interfaces technologiques visibles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Positionnement différenciant de Sotto
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Notre unicité sur le marché
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Sotto se distingue fondamentalement par une approche qui <strong className="text-[#D47D5A]">élimine les interfaces visuelles</strong> au profit d'une interaction vocale naturelle et contextuelle, intégrée dans un écosystème complet d'encaissement.
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
              Différenciateurs clés
            </h4>
            
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow animate-float">
                <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-3">
                  <h5 className="font-semibold text-white">Interface invisible</h5>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Sotto est la seule solution qui supprime complètement les écrans du parcours de service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Libération de l'espace physique et de l'attention du personnel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Réhumanisation de l'expérience restaurant</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-3">
                  <h5 className="font-semibold text-white">Système vocal spécialisé pour la restauration</h5>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Vocabulaire et contextes spécifiques au secteur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Optimisation pour environnements bruyants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Compréhension des nuances et variations régionales</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow animate-float" style={{ animationDelay: "2s" }}>
                <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-3">
                  <h5 className="font-semibold text-white">Architecture centralisée</h5>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Contrairement aux solutions fragmentées, Sotto unifie toutes les opérations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Communication fluide entre tous les postes (salle, cuisine, bar)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Intégration native avec l'écosystème complet (caisse, paiements, e-commerce)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow animate-float" style={{ animationDelay: "3s" }}>
                <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-3">
                  <h5 className="font-semibold text-white">Modèle économique transparent</h5>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Réduction significative du TEG par rapport aux solutions traditionnelles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Élimination des coûts matériels importants (tablettes, écrans)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">Abonnement simple incluant le matériel et les mises à jour</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
              Matrice de positionnement
            </h4>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                <thead>
                  <tr className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Dimension</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Solutions traditionnelles</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Solutions tactiles modernes</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Assistants vocaux génériques</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0] bg-[#D47D5A] dark:bg-[#D47D5A]">Sotto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Interface</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Écrans omniprésents</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Tablettes/bornes</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Enceintes connectées</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] bg-gray-50 dark:bg-gray-900">Oreillettes discrètes</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Attention requise</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Élevée</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Moyenne</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Faible mais interruptions</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] bg-gray-50 dark:bg-gray-900">Minimale et contextuelle</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Intégration</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Fragmentée</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Partielle</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Limitée</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] bg-gray-50 dark:bg-gray-900">Complète et native</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Spécialisation restauration</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Générique avec modules</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Moyenne</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Faible</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] bg-gray-50 dark:bg-gray-900">Totale et exclusive</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Coût total</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Très élevé</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Élevé</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Moyen</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] bg-gray-50 dark:bg-gray-900">Optimisé et transparent</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Impact sur expérience client</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Négatif (barrière)</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Mixte</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Perturbant</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] bg-gray-50 dark:bg-gray-900">Positif (service attentif)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Opportunités de marché
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Segments prioritaires
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Notre analyse révèle plusieurs segments de marché particulièrement réceptifs à la proposition de valeur de Sotto:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="bg-[#D47D5A] p-3">
                <h4 className="font-semibold text-white">Restaurants indépendants premium (15-50 couverts)</h4>
              </div>
              <div className="p-4">
                <ul className="space-y-2 mb-3">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Recherchent distinction et expérience client différenciante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Sensibles à l'esthétique et à l'atmosphère</span>
                  </li>
                </ul>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Volume estimé: 12,000 établissements en France</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="bg-[#87A28F] p-3">
                <h4 className="font-semibold text-white">Chaînes de restauration à service à table (segment intermédiaire)</h4>
              </div>
              <div className="p-4">
                <ul className="space-y-2 mb-3">
                  <li className="flex items-start">
                    <span className="text-[#87A28F] mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Besoin d'efficacité opérationnelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Recherche de standardisation avec touche humaine</span>
                  </li>
                </ul>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Volume estimé: 8,500 établissements (250 chaînes)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="bg-[#D4B483] p-3">
                <h4 className="font-semibold text-white">Hôtellerie haut de gamme avec restauration</h4>
              </div>
              <div className="p-4">
                <ul className="space-y-2 mb-3">
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Forte valeur accordée à l'expérience client sans rupture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Capacité d'investissement dans l'innovation</span>
                  </li>
                </ul>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Volume estimé: 3,200 établissements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Tendances favorables
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Plusieurs tendances macro-économiques et sectorielles créent un terrain favorable pour Sotto:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A] hover:shadow-md transition-shadow">
              <p className="text-gray-700 dark:text-gray-300">Pénurie de main-d'œuvre qualifiée dans la restauration (besoin d'efficacité)</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A] hover:shadow-md transition-shadow">
              <p className="text-gray-700 dark:text-gray-300">Rejet croissant de l'omniprésence technologique par les consommateurs</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A] hover:shadow-md transition-shadow">
              <p className="text-gray-700 dark:text-gray-300">Recherche d'authenticité et d'expériences humaines post-pandémie</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A] hover:shadow-md transition-shadow">
              <p className="text-gray-700 dark:text-gray-300">Pression sur les marges nécessitant optimisation des coûts opérationnels</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A] hover:shadow-md transition-shadow">
              <p className="text-gray-700 dark:text-gray-300">Consolidation du secteur favorisant les solutions intégrées</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Estimation du marché adressable
          </h3>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead>
                <tr className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Segment</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Nombre d'établissements</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Taux d'adoption estimé (3 ans)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Valeur client moyenne</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Potentiel marché</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Premium indépendants</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">12,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">8-12%</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1,800€/an</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">17-25M€</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Chaînes intermédiaires</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">8,500</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">15-20%</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">2,400€/an</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">30-40M€</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Hôtellerie restauration</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">3,200</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">10-15%</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">3,600€/an</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">11-17M€</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900 font-medium">
                  <td className="px-4 py-3 text-sm font-bold text-[#1A2A40] dark:text-[#F5F5F0]">Total France</td>
                  <td className="px-4 py-3 text-sm font-bold text-[#1A2A40] dark:text-[#F5F5F0]">23,700</td>
                  <td className="px-4 py-3 text-sm font-bold text-[#1A2A40] dark:text-[#F5F5F0]">11-16%</td>
                  <td className="px-4 py-3 text-sm font-bold text-[#1A2A40] dark:text-[#F5F5F0]">2,300€/an</td>
                  <td className="px-4 py-3 text-sm font-bold text-[#1A2A40] dark:text-[#F5F5F0]">58-82M€</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm italic text-gray-600 dark:text-gray-400">
            *Note: Projections à 3 ans sur le marché français uniquement
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Stratégies de différenciation face à la concurrence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="bg-[#1A2A40] p-3">
              <h3 className="font-semibold text-white">Face aux solutions traditionnelles</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Mettre en avant la <strong>réduction drastique du TEG</strong> (de 20-30% à moins de 10%)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Démontrer l'<strong>élimination des coûts matériels</strong> (tablettes, écrans, bornes)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Souligner la <strong>simplification de la formation</strong> du personnel</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="bg-[#87A28F] p-3">
              <h3 className="font-semibold text-white">Face aux solutions tactiles modernes</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Accentuer le <strong>gain d'espace physique</strong> et l'esthétique épurée</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Valoriser la <strong>réduction des manipulations</strong> et la libération des mains</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Mettre en avant la <strong>fluidité du service</strong> sans interruption technologique</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="bg-[#D4B483] p-3">
              <h3 className="font-semibold text-white">Face aux assistants vocaux génériques</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D4B483] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Démontrer notre <strong>spécialisation restauration</strong> (vocabulaire, contexte)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D4B483] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Souligner notre <strong>intégration native</strong> avec l'écosystème d'encaissement</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#D4B483] flex items-center justify-center text-white mr-2 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Mettre en avant notre <strong>optimisation pour environnement bruyant</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Conclusion et recommandations stratégiques
        </h2>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 mb-8">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            L'analyse concurrentielle révèle un espace de marché significatif pour Sotto, qui se positionne à l'intersection de plusieurs tendances fortes: recherche d'authenticité, optimisation opérationnelle, et réhumanisation de l'expérience client. Notre différenciation par l'élimination des interfaces visuelles constitue une rupture fondamentale avec l'approche des concurrents.
          </p>
          
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Recommandations
          </h3>
          
          <ol className="space-y-4">
            <li className="flex">
              <div className="h-8 w-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white mr-3 flex-shrink-0">
                <span>1</span>
              </div>
              <div className="pt-1">
                <p className="text-gray-700 dark:text-gray-300"><strong>Prioriser les segments premium</strong> où la valeur de l'expérience client justifie facilement l'investissement</p>
              </div>
            </li>
            <li className="flex">
              <div className="h-8 w-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white mr-3 flex-shrink-0">
                <span>2</span>
              </div>
              <div className="pt-1">
                <p className="text-gray-700 dark:text-gray-300"><strong>Développer des cas d'usage sectoriels</strong> pour chaque segment prioritaire</p>
              </div>
            </li>
            <li className="flex">
              <div className="h-8 w-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white mr-3 flex-shrink-0">
                <span>3</span>
              </div>
              <div className="pt-1">
                <p className="text-gray-700 dark:text-gray-300"><strong>Créer des démonstrateurs d'impact</strong> quantifiant les bénéfices (ROI, satisfaction client, efficacité)</p>
              </div>
            </li>
            <li className="flex">
              <div className="h-8 w-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white mr-3 flex-shrink-0">
                <span>4</span>
              </div>
              <div className="pt-1">
                <p className="text-gray-700 dark:text-gray-300"><strong>Établir des partenariats stratégiques</strong> avec des acteurs complémentaires (fournisseurs, consultants sectoriels)</p>
              </div>
            </li>
            <li className="flex">
              <div className="h-8 w-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white mr-3 flex-shrink-0">
                <span>5</span>
              </div>
              <div className="pt-1">
                <p className="text-gray-700 dark:text-gray-300"><strong>Anticiper les réactions concurrentielles</strong> en renforçant nos barrières technologiques</p>
              </div>
            </li>
          </ol>
          
          <div className="mt-6 p-4 bg-[#F5F5F0] dark:bg-[#1A2A40] rounded-lg border border-gray-200 dark:border-gray-800">
            <p className="text-[#1A2A40] dark:text-[#F5F5F0] font-medium">
              Sotto n'est pas simplement une alternative aux solutions existantes, mais une redéfinition fondamentale de l'interaction entre technologie et service en restauration. Notre opportunité est de créer une nouvelle catégorie qui rend obsolètes les approches centrées sur les écrans, tout en offrant les bénéfices opérationnels de la digitalisation.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-sm text-gray-500 dark:text-gray-400">
          <p className="italic mb-1">Document interne - Confidentiel</p>
          <p className="mb-1">Dernière mise à jour: Juin 2023</p>
          <p>Contact: équipe stratégie produit</p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;