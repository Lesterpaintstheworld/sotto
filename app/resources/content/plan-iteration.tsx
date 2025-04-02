const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <div className="mb-12 animate-float">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40]">
          Plan d'Itération Produit
        </h1>
        <div className="w-20 h-1 bg-[#D47D5A]"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Introduction</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#1A2A40] leading-relaxed">
            Dans le développement de Sotto, notre système IA vocal pour la restauration, l'amélioration continue est essentielle. Ce document présente notre processus structuré de collecte et d'intégration du feedback pour faire évoluer notre produit de manière intentionnelle et efficace. Notre approche itérative nous permet de rester centrés sur les besoins réels des restaurateurs tout en préservant notre vision d'une technologie qui s'efface pour mettre l'humain au premier plan.
          </p>
          <p className="text-[#1A2A40] leading-relaxed mt-4">
            Ce plan d'itération produit est conçu pour guider l'équipe à travers un cycle d'amélioration continue qui transforme les retours d'utilisateurs en fonctionnalités concrètes, tout en maintenant l'intégrité et la cohérence de l'expérience Sotto.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Principes directeurs</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Valeurs fondamentales</h3>
          <p className="text-[#1A2A40] mb-4">
            Notre processus d'itération s'appuie sur quatre valeurs essentielles qui guident nos décisions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Discrétion technologique</h4>
              <p className="text-[#1A2A40]">La technologie doit s'effacer pour laisser place à l'humain</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Efficacité opérationnelle</h4>
              <p className="text-[#1A2A40]">Chaque amélioration doit simplifier le travail, jamais le compliquer</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Expérience utilisateur naturelle</h4>
              <p className="text-[#1A2A40]">Les interactions doivent rester intuitives et fluides</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Impact mesurable</h4>
              <p className="text-[#1A2A40]">Chaque changement doit apporter une valeur quantifiable</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Équilibre entre vision et feedback</h3>
          <p className="text-[#1A2A40] mb-4">
            L'innovation nécessite un équilibre délicat entre:
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 bg-white rounded-lg p-5 shadow-md">
              <p className="text-center font-medium text-[#1A2A40]">La vision produit à long terme qui guide nos décisions stratégiques</p>
            </div>
            <div className="flex-1 bg-white rounded-lg p-5 shadow-md">
              <p className="text-center font-medium text-[#1A2A40]">Les retours utilisateurs qui informent nos ajustements tactiques</p>
            </div>
          </div>
          
          <p className="text-[#1A2A40] mb-4">
            Nous utilisons la matrice suivante pour évaluer les opportunités d'itération:
          </p>
          
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left"></th>
                  <th className="py-3 px-4 text-left">Aligné avec la vision</th>
                  <th className="py-3 px-4 text-left">Non aligné avec la vision</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium bg-[#1A2A40] text-white">Haute demande utilisateur</td>
                  <td className="py-3 px-4 bg-green-50 text-[#1A2A40]">Priorité maximale</td>
                  <td className="py-3 px-4 bg-yellow-50 text-[#1A2A40]">Réévaluer et potentiellement adapter la vision</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium bg-[#1A2A40] text-white">Faible demande utilisateur</td>
                  <td className="py-3 px-4 bg-blue-50 text-[#1A2A40]">Éduquer les utilisateurs sur la valeur</td>
                  <td className="py-3 px-4 bg-red-50 text-[#1A2A40]">Ignorer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Cycle d'itération</h2>
        <p className="text-[#1A2A40] mb-8">
          Notre cycle d'itération se déroule en six phases distinctes, chacune avec ses propres objectifs et livrables.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold mr-4">1</div>
              <h3 className="text-xl font-semibold text-[#1A2A40]">Collecte structurée du feedback</h3>
            </div>
            
            <div className="ml-14">
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Sources de feedback</h4>
              <p className="text-[#1A2A40] mb-3">Nous recueillons systématiquement les retours via:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-[#1A2A40]"><strong>Observations terrain</strong> — Sessions d'observation directe dans les restaurants</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-[#1A2A40]"><strong>Entretiens utilisateurs</strong> — Conversations structurées avec le personnel et les gérants</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-[#1A2A40]"><strong>Données d'utilisation</strong> — Métriques d'utilisation et points de friction identifiés</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-[#1A2A40]"><strong>Requêtes directes</strong> — Demandes explicites des utilisateurs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-[#87A28F] mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-[#1A2A40]"><strong>Tests d'utilisabilité</strong> — Sessions formelles d'évaluation</span>
                </li>
              </ul>
              
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Catégorisation du feedback</h4>
              <p className="text-[#1A2A40] mb-3">Chaque retour est catégorisé selon:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-[#1A2A40]">Type</p>
                  <p className="text-[#1A2A40]">Bug, amélioration, nouvelle fonctionnalité, suggestion UX</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-[#1A2A40]">Impact</p>
                  <p className="text-[#1A2A40]">Critique, important, modéré, mineur</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-[#1A2A40]">Complexité</p>
                  <p className="text-[#1A2A40]">Simple, modérée, complexe</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium text-[#1A2A40]">Fréquence</p>
                  <p className="text-[#1A2A40]">Isolé, récurrent, généralisé</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold mr-4">2</div>
              <h3 className="text-xl font-semibold text-[#1A2A40]">Analyse et priorisation</h3>
            </div>
            
            <div className="ml-14">
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Critères d'évaluation</h4>
              <p className="text-[#1A2A40] mb-3">Nous évaluons chaque élément de feedback selon:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow border-l-4 border-[#D47D5A]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Valeur utilisateur</h5>
                  <p className="text-[#1A2A40]">L'impact potentiel sur l'expérience du restaurant</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border-l-4 border-[#D4B483]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Alignement stratégique</h5>
                  <p className="text-[#1A2A40]">La cohérence avec notre vision produit</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border-l-4 border-[#87A28F]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Faisabilité technique</h5>
                  <p className="text-[#1A2A40]">La complexité de mise en œuvre</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow border-l-4 border-[#1A2A40]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Potentiel commercial</h5>
                  <p className="text-[#1A2A40]">L'impact sur l'adoption et la rétention</p>
                </div>
              </div>
              
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Matrice de priorisation</h4>
              <p className="text-[#1A2A40] mb-3">Nous utilisons une matrice d'impact/effort pour visualiser les priorités:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-1 text-[#1A2A40]">Quick wins</h5>
                  <p className="text-sm text-[#1A2A40] mb-2">(impact élevé, effort faible)</p>
                  <p className="text-[#1A2A40]">→ Implémenter immédiatement</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-1 text-[#1A2A40]">Projets majeurs</h5>
                  <p className="text-sm text-[#1A2A40] mb-2">(impact élevé, effort élevé)</p>
                  <p className="text-[#1A2A40]">→ Planifier soigneusement</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-1 text-[#1A2A40]">Améliorations graduelles</h5>
                  <p className="text-sm text-[#1A2A40] mb-2">(impact faible, effort faible)</p>
                  <p className="text-[#1A2A40]">→ Regrouper en lots</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-1 text-[#1A2A40]">Remise en question</h5>
                  <p className="text-sm text-[#1A2A40] mb-2">(impact faible, effort élevé)</p>
                  <p className="text-[#1A2A40]">→ Généralement éviter</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold mr-4">3</div>
              <h3 className="text-xl font-semibold text-[#1A2A40]">Conception et prototypage</h3>
            </div>
            
            <div className="ml-14">
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Processus de conception</h4>
              <p className="text-[#1A2A40] mb-3">Pour chaque itération majeure:</p>
              
              <div className="relative pl-8 space-y-6 mb-6">
                <div className="absolute top-0 bottom-0 left-3 w-px bg-[#D47D5A]"></div>
                
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">1</div>
                  <h5 className="font-medium text-[#1A2A40]">Définition du problème</h5>
                  <p className="text-[#1A2A40]">Clarification précise du besoin à résoudre</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">2</div>
                  <h5 className="font-medium text-[#1A2A40]">Exploration de solutions</h5>
                  <p className="text-[#1A2A40]">Génération d'alternatives (vocales et techniques)</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">3</div>
                  <h5 className="font-medium text-[#1A2A40]">Prototypage</h5>
                  <p className="text-[#1A2A40]">Création de maquettes ou simulations d'interaction vocale</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">4</div>
                  <h5 className="font-medium text-[#1A2A40]">Évaluation interne</h5>
                  <p className="text-[#1A2A40]">Tests avec l'équipe pour validation initiale</p>
                </div>
              </div>
              
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Validation des concepts</h4>
              <p className="text-[#1A2A40] mb-3">Avant le développement, chaque concept est validé par:</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#87A28F] mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Tests utilisateurs ciblés</p>
                    <p className="text-[#1A2A40]">Évaluation avec un petit groupe d'utilisateurs représentatifs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#87A28F] mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Revue technique</p>
                    <p className="text-[#1A2A40]">Évaluation de faisabilité et d'architecture</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#87A28F] mt-1 mr-3 flex-shrink-0 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Alignement stratégique</p>
                    <p className="text-[#1A2A40]">Confirmation de cohérence avec la vision produit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold mr-4">4</div>
              <h3 className="text-xl font-semibold text-[#1A2A40]">Développement itératif</h3>
            </div>
            
            <div className="ml-14">
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Méthodologie de développement</h4>
              <p className="text-[#1A2A40] mb-3">Nous adoptons une approche de développement par incréments:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-white p-3 rounded-lg shadow">
                  <p className="text-[#1A2A40]">Cycles de développement courts (1-2 semaines)</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow">
                  <p className="text-[#1A2A40]">Fonctionnalités minimales viables (MVP) pour validation rapide</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow">
                  <p className="text-[#1A2A40]">Tests automatisés pour garantir la stabilité</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow">
                  <p className="text-[#1A2A40]">Revues de code pour maintenir la qualité</p>
                </div>
              </div>
              
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Intégration continue</h4>
              <p className="text-[#1A2A40] mb-3">Chaque nouvelle fonctionnalité suit un processus rigoureux:</p>
              
              <div className="flex flex-wrap items-center justify-center">
                <div className="bg-[#1A2A40] text-white px-4 py-2 rounded-lg m-2">
                  Développement
                </div>
                <svg className="h-5 w-5 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="bg-[#87A28F] text-white px-4 py-2 rounded-lg m-2">
                  Tests unitaires
                </div>
                <svg className="h-5 w-5 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="bg-[#D4B483] text-white px-4 py-2 rounded-lg m-2">
                  Revue de code
                </div>
                <svg className="h-5 w-5 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="bg-[#D47D5A] text-white px-4 py-2 rounded-lg m-2">
                  Tests d'intégration
                </div>
                <svg className="h-5 w-5 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg m-2">
                  Déploiement en environnement de test
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold mr-4">5</div>
              <h3 className="text-xl font-semibold text-[#1A2A40]">Test et validation</h3>
            </div>
            
            <div className="ml-14">
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Types de tests</h4>
              <p className="text-[#1A2A40] mb-3">Nous effectuons plusieurs niveaux de validation:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1A2A40]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Tests techniques</h5>
                  <p className="text-[#1A2A40]">Validation du fonctionnement technique</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Tests d'acceptation</h5>
                  <p className="text-[#1A2A40]">Vérification de la conformité aux exigences</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Tests utilisateurs</h5>
                  <p className="text-[#1A2A40]">Évaluation de l'expérience réelle</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#D4B483]">
                  <h5 className="font-medium mb-2 text-[#1A2A40]">Tests en environnement réel</h5>
                  <p className="text-[#1A2A40]">Validation dans des conditions authentiques</p>
                </div>
              </div>
              
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Critères de succès</h4>
              <p className="text-[#1A2A40] mb-3">Chaque fonctionnalité est évaluée selon:</p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-1/2 pr-4">
                    <p className="font-medium text-[#1A2A40]">Précision de reconnaissance vocale</p>
                  </div>
                  <div className="w-1/2 bg-gray-100 rounded-full h-6">
                    <div className="bg-[#D47D5A] h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ width: "95%" }}>
                      Taux de compréhension correcte &gt; 95%
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 pr-4">
                    <p className="font-medium text-[#1A2A40]">Temps de réponse</p>
                  </div>
                  <div className="w-1/2 bg-gray-100 rounded-full h-6">
                    <div className="bg-[#87A28F] h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ width: "80%" }}>
                      Latence &lt; 1 seconde
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 pr-4">
                    <p className="font-medium text-[#1A2A40]">Facilité d'utilisation</p>
                  </div>
                  <div className="w-1/2 bg-gray-100 rounded-full h-6">
                    <div className="bg-[#D4B483] h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ width: "90%" }}>
                      Utilisation intuitive sans formation
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2 pr-4">
                    <p className="font-medium text-[#1A2A40]">Robustesse</p>
                  </div>
                  <div className="w-1/2 bg-gray-100 rounded-full h-6">
                    <div className="bg-[#1A2A40] h-6 rounded-full text-xs flex items-center justify-center text-white" style={{ width: "85%" }}>
                      Fonctionnement fiable en environnement bruyant
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold mr-4">6</div>
              <h3 className="text-xl font-semibold text-[#1A2A40]">Déploiement et suivi</h3>
            </div>
            
            <div className="ml-14">
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Stratégie de déploiement</h4>
              <p className="text-[#1A2A40] mb-3">Notre approche de déploiement est progressive:</p>
              
              <div className="relative pl-8 space-y-6 mb-6">
                <div className="absolute top-0 bottom-0 left-3 w-px bg-[#D47D5A]"></div>
                
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">1</div>
                  <h5 className="font-medium text-[#1A2A40]">Déploiement alpha</h5>
                  <p className="text-[#1A2A40]">Test avec 2-3 restaurants partenaires privilégiés</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">2</div>
                  <h5 className="font-medium text-[#1A2A40]">Déploiement bêta</h5>
                  <p className="text-[#1A2A40]">Extension à 10-15 restaurants représentatifs</p>
                </div>
                
                <div className="relative">
                  <div className="absolute left-[-25px] top-0 w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-bold">3</div>
                  <h5 className="font-medium text-[#1A2A40]">Déploiement général</h5>
                  <p className="text-[#1A2A40]">Disponibilité pour tous les clients</p>
                </div>
              </div>
              
              <h4 className="font-medium text-lg mb-3 text-[#1A2A40]">Mesure d'impact</h4>
              <p className="text-[#1A2A40] mb-3">Après chaque déploiement, nous mesurons:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Adoption</p>
                    <p className="text-sm text-[#1A2A40]">Taux d'utilisation de la nouvelle fonctionnalité</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Satisfaction</p>
                    <p className="text-sm text-[#1A2A40]">Feedback explicite des utilisateurs</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#D4B483] flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Performance</p>
                    <p className="text-sm text-[#1A2A40]">Métriques d'efficacité et de précision</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A2A40] flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Impact business</p>
                    <p className="text-sm text-[#1A2A40]">Effets sur les indicateurs clés du restaurant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Outils et infrastructure</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Plateforme de gestion du feedback</h3>
            <p className="text-[#1A2A40] mb-4">Nous utilisons un système centralisé pour:</p>
            <ul className="space-y-2 text-[#1A2A40]">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Collecter et organiser tous les retours utilisateurs
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Suivre l'évolution de chaque suggestion
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Communiquer le statut aux parties prenantes
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D47D5A] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mesurer les tendances et patterns émergents
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Environnements de test</h3>
            <p className="text-[#1A2A40] mb-4">Notre infrastructure comprend:</p>
            <ul className="space-y-2 text-[#1A2A40]">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Environnement de développement — Pour les tests initiaux
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Environnement de staging — Pour les tests d'intégration
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Restaurant simulé — Pour les tests en conditions réalistes
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#87A28F] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Restaurants partenaires — Pour les tests en conditions réelles
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Documentation des itérations</h3>
            <p className="text-[#1A2A40] mb-4">Chaque cycle d'itération est documenté avec:</p>
            <ul className="space-y-2 text-[#1A2A40]">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D4B483] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Synthèse des feedbacks traités
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D4B483] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Décisions de conception avec justifications
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D4B483] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Résultats des tests et validations
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#D4B483] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Leçons apprises et recommandations futures
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Rôles et responsabilités</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Équipe d'itération produit</h3>
          <p className="text-[#1A2A40] mb-4">Notre processus implique plusieurs rôles clés:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Rôle</th>
                  <th className="py-3 px-4 text-left">Responsabilités principales</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Product Manager</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Priorisation, définition des fonctionnalités, alignement stratégique</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">UX Designer</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Conception d'interactions vocales, prototypage, tests utilisateurs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Ingénieur IA</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Optimisation des modèles de reconnaissance, amélioration de la compréhension contextuelle</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Développeur</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Implémentation technique, intégration, tests</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Spécialiste QA</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Validation, tests de régression, assurance qualité</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Customer Success</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Collecte de feedback, communication avec les utilisateurs, formation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Matrice RACI</h3>
          <p className="text-[#1A2A40] mb-4">Pour chaque phase du cycle d'itération, les responsabilités sont définies selon le modèle RACI:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#D47D5A]">
              <div className="text-2xl font-bold text-[#D47D5A] mb-2">R</div>
              <h4 className="font-medium mb-1 text-[#1A2A40]">Responsible</h4>
              <p className="text-[#1A2A40]">Exécute la tâche</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#1A2A40]">
              <div className="text-2xl font-bold text-[#1A2A40] mb-2">A</div>
              <h4 className="font-medium mb-1 text-[#1A2A40]">Accountable</h4>
              <p className="text-[#1A2A40]">Responsable final de la réussite</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#87A28F]">
              <div className="text-2xl font-bold text-[#87A28F] mb-2">C</div>
              <h4 className="font-medium mb-1 text-[#1A2A40]">Consulted</h4>
              <p className="text-[#1A2A40]">Consulté avant les décisions</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#D4B483]">
              <div className="text-2xl font-bold text-[#D4B483] mb-2">I</div>
              <h4 className="font-medium mb-1 text-[#1A2A40]">Informed</h4>
              <p className="text-[#1A2A40]">Tenu informé des progrès</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Calendrier et cadence</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Cycles d'itération</h3>
            <p className="text-[#1A2A40] mb-4">Notre cadence d'itération suit un rythme régulier:</p>
            
            <div className="space-y-4">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#1A2A40] flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40]">Sprints de développement</h4>
                  <p className="text-[#1A2A40]">2 semaines</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#D47D5A] flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40]">Cycles de feedback structuré</h4>
                  <p className="text-[#1A2A40]">Mensuel</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40]">Déploiements mineurs</h4>
                  <p className="text-[#1A2A40]">Bi-hebdomadaires</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#D4B483] flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40]">Déploiements majeurs</h4>
                  <p className="text-[#1A2A40]">Trimestriels</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Rituels d'équipe</h3>
            <p className="text-[#1A2A40] mb-4">Pour maintenir l'alignement et la progression:</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A]">
                <h4 className="font-medium mb-1 text-[#1A2A40]">Revue de feedback</h4>
                <p className="text-[#1A2A40]">Session hebdomadaire d'analyse des retours</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
                <h4 className="font-medium mb-1 text-[#1A2A40]">Planification d'itération</h4>
                <p className="text-[#1A2A40]">Réunion bi-mensuelle de priorisation</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#D4B483]">
                <h4 className="font-medium mb-1 text-[#1A2A40]">Demo Day</h4>
                <p className="text-[#1A2A40]">Présentation mensuelle des nouvelles fonctionnalités</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1A2A40]">
                <h4 className="font-medium mb-1 text-[#1A2A40]">Rétrospective</h4>
                <p className="text-[#1A2A40]">Analyse trimestrielle du processus d'itération</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Conclusion</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#D47D5A]">
          <p className="text-[#1A2A40] leading-relaxed mb-4">
            Notre plan d'itération produit est conçu pour transformer systématiquement les retours utilisateurs en améliorations concrètes qui renforcent la proposition de valeur de Sotto. En maintenant un équilibre entre notre vision d'une technologie discrète et les besoins exprimés par nos utilisateurs, nous créons un produit qui évolue de manière organique tout en restant fidèle à notre mission: libérer la restauration des écrans pour créer une expérience plus humaine et efficace.
          </p>
        </div>
      </section>

      <section>
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Prochaines étapes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#D47D5A]">
              <h3 className="font-medium mb-3 text-[#1A2A40]">Pour les Product Managers</h3>
              <p className="text-[#1A2A40]">Revisitez les critères de priorisation pour votre prochain cycle</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#87A28F]">
              <h3 className="font-medium mb-3 text-[#1A2A40]">Pour les Designers</h3>
              <p className="text-[#1A2A40]">Établissez un catalogue d'interactions vocales standard pour maintenir la cohérence</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#D4B483]">
              <h3 className="font-medium mb-3 text-[#1A2A40]">Pour les Développeurs</h3>
              <p className="text-[#1A2A40]">Familiarisez-vous avec le processus de déploiement progressif</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#1A2A40]">
              <h3 className="font-medium mb-3 text-[#1A2A40]">Pour tous</h3>
              <p className="text-[#1A2A40]">Contribuez activement à la collecte de feedback lors de vos visites terrain</p>
            </div>
          </div>
          
          <div className="mt-8 bg-[#1A2A40] text-white p-6 rounded-lg">
            <p className="italic text-center">
              L'amélioration continue est un effort collectif. Ensemble, nous créons un produit qui transforme l'expérience de la restauration tout en restant fidèle à notre vision d'une technologie qui s'efface pour mettre l'humain au premier plan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;