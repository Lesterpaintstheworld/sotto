const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] rounded-xl p-6 mb-8 shadow-lg transform transition-all hover:shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Business Plan Complet
        </h1>
        <p className="text-[#1A2A40] dark:text-[#F5F5F0] italic border-l-4 border-[#D47D5A] pl-4 py-2">
          Document stratégique interne - Projections financières, modèle de revenus, analyse de marché, et objectifs de croissance sur 3-5 ans.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Introduction
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            Ce business plan détaille la stratégie de croissance de Sotto pour les cinq prochaines années, en présentant une analyse approfondie du marché, notre modèle économique, nos projections financières et notre feuille de route de développement. Sotto se positionne comme une solution révolutionnaire dans le secteur de la restauration, en remplaçant les interfaces à écran traditionnelles par un système d'intelligence artificielle vocale, permettant ainsi une expérience plus humaine et efficace.
          </p>
          <p>
            Notre vision s'étend au-delà d'une simple solution technologique pour devenir un écosystème complet d'encaissement intelligent qui centralise les flux de commandes et de paiements tout en libérant l'espace physique et l'attention du personnel.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Analyse du marché
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Taille et opportunités du marché
          </h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Le secteur de la restauration en France représente un marché considérable avec des opportunités significatives :
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Segment</th>
                  <th className="py-3 px-4 text-left text-white">Nombre d'établissements</th>
                  <th className="py-3 px-4 text-left text-white">Chiffre d'affaires annuel</th>
                  <th className="py-3 px-4 text-left text-white">Croissance annuelle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Restaurants traditionnels</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">175 000</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">52 milliards €</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">1,8%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Restauration rapide</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">42 000</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">23 milliards €</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">4,2%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Cafés et bars</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">38 500</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">12 milliards €</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">0,9%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Hôtellerie-restauration</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">18 000</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">14 milliards €</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">2,3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Tendances clés du secteur
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-[#D47D5A] rounded-full mr-2"></div>
                <p className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Digitalisation accélérée</p>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0] ml-5">72% des restaurateurs ont augmenté leurs investissements technologiques depuis 2020</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-[#D47D5A] rounded-full mr-2"></div>
                <p className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Pénurie de main-d'œuvre</p>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0] ml-5">150 000 postes non pourvus dans le secteur en 2023</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-[#D47D5A] rounded-full mr-2"></div>
                <p className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Pression sur les marges</p>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0] ml-5">Augmentation des coûts des matières premières (+18% en 2 ans) et de l'énergie</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-[#D47D5A] rounded-full mr-2"></div>
                <p className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Évolution des attentes clients</p>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0] ml-5">Demande croissante pour des expériences authentiques et personnalisées</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-[#D47D5A] rounded-full mr-2"></div>
                <p className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Frais technologiques croissants</p>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0] ml-5">Les restaurateurs dépensent en moyenne 8-12% de leur chiffre d'affaires en solutions technologiques fragmentées</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Analyse concurrentielle
          </h3>
          
          <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Solutions vocales et d'encaissement
          </h4>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Concurrent</th>
                  <th className="py-3 px-4 text-left text-white">Type de solution</th>
                  <th className="py-3 px-4 text-left text-white">Forces</th>
                  <th className="py-3 px-4 text-left text-white">Faiblesses</th>
                  <th className="py-3 px-4 text-left text-white">Part de marché</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Systèmes de caisse traditionnels</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Écrans tactiles</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Établis, familiers</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Coûteux, encombrants, obsolètes</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">65%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Solutions SaaS restauration</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Applications tablettes</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Flexibles, mises à jour régulières</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Multiplication des écrans, fragmentation</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">25%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Assistants vocaux génériques</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">IA vocale généraliste</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Large adoption</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Non spécialisés pour la restauration</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">5%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Solutions vocales spécialisées</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">IA vocale verticalisée</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Pertinence</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Adoption limitée, intégration partielle</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">&lt;1%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-[#1A2A40] dark:text-[#F5F5F0] italic">
            Sotto se distingue par son approche holistique qui combine interface vocale spécialisée et écosystème d'encaissement complet, comblant ainsi un vide significatif sur le marché.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Modèle économique
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Sources de revenus
          </h3>
          
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Le modèle économique de Sotto repose sur quatre piliers complémentaires :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 rounded-lg shadow-md p-5 border-t-4 border-[#D47D5A] hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">1. Abonnement mensuel (SaaS)</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                <li>Tarification basée sur le nombre d'oreillettes/utilisateurs</li>
                <li>Paliers selon la taille de l'établissement</li>
                <li>Inclut le matériel, les mises à jour et le support de base</li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 rounded-lg shadow-md p-5 border-t-4 border-[#87A28F] hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">2. Commissions sur transactions</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                <li>Taux préférentiel (0,8% à 1,2%) par rapport aux solutions concurrentes (3-5%)</li>
                <li>Volume anticipé croissant avec l'adoption</li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 rounded-lg shadow-md p-5 border-t-4 border-[#D4B483] hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">3. Services à valeur ajoutée</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                <li>Modules analytiques avancés</li>
                <li>Intégrations personnalisées</li>
                <li>Formation premium et accompagnement dédié</li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 rounded-lg shadow-md p-5 border-t-4 border-[#1A2A40] dark:border-[#F5F5F0] hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">4. Location d'équipement complémentaire</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                <li>TPE intégrés</li>
                <li>Points d'impression</li>
                <li>Infrastructure réseau optimisée</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Structure tarifaire
          </h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Formule</th>
                  <th className="py-3 px-4 text-left text-white">Tarif mensuel</th>
                  <th className="py-3 px-4 text-left text-white">Inclusions</th>
                  <th className="py-3 px-4 text-left text-white">Commission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Starter</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">99€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Jusqu'à 3 oreillettes, support standard</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">1,2%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Pro</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">199€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Jusqu'à 8 oreillettes, support prioritaire</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">1,0%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Enterprise</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">349€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Jusqu'à 15 oreillettes, support dédié, analytiques avancées</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">0,8%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Sur mesure</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Devis</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Solutions personnalisées pour chaînes et grands établissements</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Négociable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Projections financières
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Hypothèses de croissance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#D47D5A] rounded-full p-1 w-6 h-6 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Adoption</h4>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Déploiement progressif avec 50 restaurants la première année, croissance de 150% en Y2, 120% en Y3, puis 80% et 60% les années suivantes</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#D47D5A] rounded-full p-1 w-6 h-6 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">ARPU</h4>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Revenu moyen par utilisateur de 249€ mensuels en Y1, augmentant à 310€ d'ici Y5 avec l'ajout de services</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#D47D5A] rounded-full p-1 w-6 h-6 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Rétention</h4>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Objectif de 92% de rétention annuelle</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#D47D5A] rounded-full p-1 w-6 h-6 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">CAC</h4>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Coût d'acquisition client de 1 800€ en Y1, diminuant à 1 200€ d'ici Y5 avec l'effet réseau</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-[#D47D5A] rounded-full p-1 w-6 h-6 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Marge brute</h4>
              </div>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">65% en Y1, évoluant vers 78% en Y5 avec les économies d'échelle</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Prévisions de revenus et rentabilité
          </h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Indicateur</th>
                  <th className="py-3 px-4 text-left text-white">Année 1</th>
                  <th className="py-3 px-4 text-left text-white">Année 2</th>
                  <th className="py-3 px-4 text-left text-white">Année 3</th>
                  <th className="py-3 px-4 text-left text-white">Année 4</th>
                  <th className="py-3 px-4 text-left text-white">Année 5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Nombre de clients</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">50</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">125</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">275</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">495</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">792</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Revenu annuel</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">149 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">403 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">956 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">1,86 M€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">3,20 M€</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Marge brute</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">97 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">282 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">716 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">1,44 M€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">2,50 M€</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">EBITDA</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] text-red-600 dark:text-red-400">-320 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] text-red-600 dark:text-red-400">-180 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] text-green-600 dark:text-green-400">120 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] text-green-600 dark:text-green-400">650 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] text-green-600 dark:text-green-400">1,28 M€</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Trésorerie (fin d'année)</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">680 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">350 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">470 K€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">1,12 M€</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">2,40 M€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Besoins de financement
          </h3>
          
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Pour réaliser notre plan de croissance, nous anticipons les besoins de financement suivants :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#87A28F]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Amorçage (réalisé)</h4>
              <p className="text-2xl font-semibold text-[#D47D5A] mb-2">500K€</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Pour le développement du MVP et les premiers déploiements</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Série A (T4 2024)</h4>
              <p className="text-2xl font-semibold text-[#D47D5A] mb-2">1,5M€</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Pour accélérer le développement commercial et produit</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D4B483]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Série B (2026)</h4>
              <p className="text-2xl font-semibold text-[#D47D5A] mb-2">4-5M€</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Pour l'expansion internationale et l'intégration verticale</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Stratégie de mise en marché
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Phases de déploiement
          </h3>
          
          <div className="relative">
            <div className="absolute left-4 inset-y-0 w-0.5 bg-[#D47D5A] dark:bg-[#D47D5A]"></div>
            
            <div className="relative pl-10 pb-8">
              <div className="absolute left-3 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D47D5A] z-10 flex items-center justify-center text-white font-bold">1</div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Phase Pilote (Actuelle - T3 2023)</h4>
                <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                  <li>5-10 restaurants partenaires à Paris</li>
                  <li>Collecte intensive de feedback et itérations rapides</li>
                  <li>Perfectionnement du produit en conditions réelles</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-10 pb-8">
              <div className="absolute left-3 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D47D5A] z-10 flex items-center justify-center text-white font-bold">2</div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Lancement Commercial (T4 2023 - T2 2024)</h4>
                <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                  <li>Expansion à 50 établissements en Île-de-France</li>
                  <li>Focalisation sur les restaurants indépendants premium</li>
                  <li>Construction des premiers cas d'usage et témoignages</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-10 pb-8">
              <div className="absolute left-3 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D47D5A] z-10 flex items-center justify-center text-white font-bold">3</div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Accélération (T3 2024 - 2025)</h4>
                <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                  <li>Déploiement dans les principales villes françaises</li>
                  <li>Diversification des segments (bistrots, restauration rapide qualitative)</li>
                  <li>Développement de partenariats stratégiques avec des groupes de restauration</li>
                </ul>
              </div>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-3 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D47D5A] z-10 flex items-center justify-center text-white font-bold">4</div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Expansion (2026-2027)</h4>
                <ul className="list-disc pl-5 text-[#1A2A40] dark:text-[#F5F5F0] space-y-1">
                  <li>Internationalisation (Europe du Sud puis du Nord)</li>
                  <li>Élargissement de l'écosystème (intégration bancaire complète)</li>
                  <li>Consolidation de la position de leader sur le marché</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Acquisition clients
          </h3>
          
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Notre stratégie d'acquisition repose sur une approche multi-canal :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D47D5A]"></div>
              <div className="absolute top-0 left-0 w-[40%] h-1 bg-[#87A28F]"></div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mt-3 mb-2">Démonstrations in situ</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">40%</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">des conversions attendues</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D47D5A]"></div>
              <div className="absolute top-0 left-0 w-[25%] h-1 bg-[#87A28F]"></div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mt-3 mb-2">Partenariats stratégiques</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">25%</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">avec des fournisseurs complémentaires</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D47D5A]"></div>
              <div className="absolute top-0 left-0 w-[20%] h-1 bg-[#87A28F]"></div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mt-3 mb-2">Marketing digital ciblé</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">20%</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">des acquisitions</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D47D5A]"></div>
              <div className="absolute top-0 left-0 w-[10%] h-1 bg-[#87A28F]"></div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mt-3 mb-2">Présence événementielle</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">10%</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">(salons professionnels)</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D47D5A]"></div>
              <div className="absolute top-0 left-0 w-[5%] h-1 bg-[#87A28F]"></div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mt-3 mb-2">Programme de recommandation</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">5%</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">des nouvelles acquisitions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Développement produit
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Feuille de route technologique
          </h3>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Période</th>
                  <th className="py-3 px-4 text-left text-white">Développements clés</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">2023 T3-T4</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>MVP stabilisé avec reconnaissance vocale optimisée</li>
                      <li>Intégration caisse LEA POS</li>
                      <li>Application administrateur PWA</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">2024 T1-T2</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Amélioration des algorithmes de filtrage audio</li>
                      <li>Gestion intelligente des tables</li>
                      <li>Communication cuisine-salle avancée</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">2024 T3-T4</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Analyse prédictive des commandes</li>
                      <li>Intégration complète des TPE</li>
                      <li>Optimisation du menu par IA</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">2025</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Mode multi-restaurant</li>
                      <li>Intégration événementielle</li>
                      <li>Formation intégrée</li>
                      <li>Module de réservation intelligent</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">2026-2027</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Intégration bancaire complète</li>
                      <li>Mode multimodal (AR discrète)</li>
                      <li>Analytique fine</li>
                      <li>Système prédictif de gestion des stocks</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Indicateurs de performance clés
          </h3>
          
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Nous suivrons attentivement les métriques suivantes pour évaluer notre succès :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Taux d'adoption</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">% du personnel utilisant activement Sotto</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Précision de reconnaissance</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">% de commandes correctement interprétées</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Temps d'onboarding</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Durée moyenne avant utilisation autonome</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">NPS restaurateurs</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Score de recommandation</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Impact opérationnel</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Réduction du temps de service, augmentation du chiffre d'affaires</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Équipe et organisation
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Structure organisationnelle cible (fin 2024)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Direction</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">3</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">CEO, CTO, COO</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Développement produit</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">4-5</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Ingénieurs IA, développeurs full-stack, UX</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Opérations & Support</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">3-4</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Personnel</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Commercial & Marketing</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">3</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Personnel</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Finances & Administration</h4>
              <p className="text-3xl font-bold text-[#D47D5A] mb-2">2</p>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Personnel</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Recrutements prioritaires
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
              <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Ingénieur IA spécialisé en traitement du langage naturel</p>
            </div>
            
            <div className="flex items-center gap-3 bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
              <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Responsable des opérations terrain</p>
            </div>
            
            <div className="flex items-center gap-3 bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
              <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Responsable du développement commercial</p>
            </div>
            
            <div className="flex items-center gap-3 bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
              <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Ingénieur en fiabilité des systèmes (SRE)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Risques et mitigations
        </h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
              <tr>
                <th className="py-3 px-4 text-left text-white">Risque</th>
                <th className="py-3 px-4 text-left text-white">Probabilité</th>
                <th className="py-3 px-4 text-left text-white">Impact</th>
                <th className="py-3 px-4 text-left text-white">Stratégie de mitigation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Précision insuffisante en environnement bruyant</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Moyenne</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Élevé</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Développement d'algorithmes de filtrage avancés, tests intensifs en conditions réelles</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Résistance au changement des équipes restaurant</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Élevée</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Moyen</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Programme d'onboarding progressif, formation adaptée, démonstration claire des bénéfices</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Problèmes de connectivité</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Moyenne</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Élevé</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Architecture résiliente, mode hors-ligne, procédures de secours intuitives</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Concurrence des grandes plateformes tech</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Faible</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Élevé</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Spécialisation verticale poussée, intégration profonde avec l'écosystème restaurant</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Difficultés de financement</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Moyenne</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Élevé</td>
                <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Développement de revenus récurrents rapidement, contrôle strict des coûts, KPIs de croissance clairs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Conclusion
        </h2>
        
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-6 rounded-lg shadow-md border-l-4 border-[#D47D5A] mb-6 hover:shadow-lg transition-shadow">
          <p className="text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Sotto représente une opportunité unique de transformer fondamentalement l'expérience de la restauration en éliminant les interfaces technologiques visibles pour recentrer l'attention sur l'humain. Notre approche holistique qui combine interface vocale intelligente et écosystème d'encaissement complet répond aux défis structurels du secteur.
          </p>
          <p className="text-[#1A2A40] dark:text-[#F5F5F0]">
            Les projections financières démontrent un chemin clair vers la rentabilité d'ici la troisième année, avec un potentiel de croissance exponentielle à mesure que notre solution s'impose comme le nouveau standard du secteur.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b-2 border-[#D47D5A] pb-2">
          Prochaines étapes
        </h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex gap-4 items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">1</div>
            <div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Finaliser le déploiement pilote</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">et intégrer les retours utilisateurs (T3 2023)</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">2</div>
            <div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Optimiser le processus d'onboarding</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">pour accélérer l'adoption (T4 2023)</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">3</div>
            <div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Structurer l'équipe commerciale</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">pour le lancement à plus grande échelle (T4 2023)</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">4</div>
            <div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Préparer la levée de fonds Série A</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">avec les premiers résultats concrets (T1-T2 2024)</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">5</div>
            <div>
              <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Développer les partenariats stratégiques</h4>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">avec des acteurs complémentaires (2024)</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/90 p-4 rounded-lg shadow-md border-t-4 border-[#D47D5A] mt-10 text-sm text-[#1A2A40] dark:text-[#F5F5F0] italic">
        Ce document est confidentiel et à usage interne uniquement. Il sera révisé trimestriellement pour refléter l'évolution du marché et les progrès réalisés.
      </div>
    </div>
  );
};

export default ResourceContent;
