const ResourceContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
      <div className="mb-12 border-b border-terracotta/30 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40]">Analyse des Risques</h1>
        <div className="flex items-center mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#D47D5A]/10 text-[#D47D5A]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1.8-1.8A2 2 0 0011.3 2H8.7a2 2 0 00-1.4.6L5.5 4H4zm7 5a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V10a1 1 0 00-1-1H11zm-3 0a1 1 0 00-1 1v.01a1 1 0 001 1H8a1 1 0 001-1V10a1 1 0 00-1-1H8zm6 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V10a1 1 0 00-1-1H14z" clipRule="evenodd" />
            </svg>
            Financial
          </span>
          <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#87A28F]/10 text-[#87A28F]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Ressource d'équipe
          </span>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Introduction</h2>
        <div className="prose max-w-none text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            Ce document présente une analyse approfondie des risques potentiels liés au déploiement et à l'exploitation du système Sotto dans les établissements de restauration. En tant que solution innovante transformant radicalement l'interaction entre le personnel et les systèmes d'encaissement, Sotto s'expose à divers risques techniques, commerciaux et réglementaires. Cette analyse vise à identifier ces risques, évaluer leur impact potentiel et proposer des stratégies d'atténuation concrètes pour assurer le succès durable de notre solution.
          </p>
          <p>
            L'objectif est de fournir à l'équipe Sotto une vision claire des défis à anticiper et des mesures préventives à mettre en place, afin de protéger non seulement notre investissement mais aussi la confiance de nos partenaires restaurateurs.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Risques Techniques</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Fiabilité de la Reconnaissance Vocale</h3>
          
          <div className="overflow-x-auto mb-6 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Risque</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Impact</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Probabilité</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Score</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Plan d'atténuation</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Performances dégradées dans les environnements bruyants</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Élevé</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Élevée</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#D47D5A]">9/10</td>
                  <td className="px-6 py-4 text-sm">Développement d'algorithmes de filtrage avancés spécifiques aux bruits de restaurant</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Difficultés avec les accents régionaux</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Moyen</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Moyenne</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#87A28F]">6/10</td>
                  <td className="px-6 py-4 text-sm">Entraînement du modèle avec des datasets diversifiés et adaptation continue</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Mauvaise compréhension des termes spécifiques à la restauration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Élevé</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Moyenne</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#D4B483]">7/10</td>
                  <td className="px-6 py-4 text-sm">Création d'un lexique gastronomique spécialisé pour chaque établissement</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            La reconnaissance vocale constitue le cœur de notre système. Ses défaillances potentielles représentent un risque majeur pour l'adoption et la rétention des utilisateurs. Nos tests préliminaires montrent que les environnements de restauration aux heures de pointe peuvent présenter des niveaux sonores dépassant 85dB, ce qui réduit significativement la précision de la reconnaissance vocale standard.
          </p>
          
          <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-4 shadow-sm border-l-4 border-[#1A2A40] mb-6">
            <p className="font-semibold mb-2">Mesures supplémentaires :</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Développer un "mode restaurant" spécifique optimisé pour les environnements bruyants</li>
              <li>Mettre en place un système de confirmation intelligent et contextuel</li>
              <li>Prévoir un mode de secours tactile discret pour les situations critiques</li>
              <li>Établir un processus d'amélioration continue basé sur les erreurs détectées</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Infrastructure et Connectivité</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-t-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2">Dépendance au réseau WiFi</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">La qualité variable des infrastructures réseau dans les restaurants peut compromettre la fiabilité du système.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-medium"><span className="text-[#D47D5A] font-bold">Atténuation:</span> Développer un mode hors-ligne robuste avec synchronisation différée et mise en cache intelligente.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-t-4 border-[#87A28F] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2">Autonomie des appareils</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Les oreillettes pourraient manquer d'autonomie pendant les services longs.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-medium"><span className="text-[#87A28F] font-bold">Atténuation:</span> Sélection d'oreillettes avec batterie longue durée (8h+) et mise en place de stations de charge rapide accessibles.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-t-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2">Latence du système</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Des temps de réponse trop longs affecteraient négativement l'expérience utilisateur.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm font-medium"><span className="text-[#D4B483] font-bold">Atténuation:</span> Optimisation du traitement local des commandes fréquentes et mise en cache prédictive.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Sécurité des Données</h3>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            La sécurité représente un pilier fondamental de notre solution, particulièrement en ce qui concerne :
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2">1. Protection des transactions financières</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 mb-3">
                <li>Risque d'interception des données de paiement</li>
                <li>Vulnérabilités potentielles dans l'intégration avec les TPE</li>
              </ul>
              <p className="text-sm font-medium"><span className="text-[#D47D5A] font-bold">Atténuation:</span> Mise en œuvre du chiffrement de bout en bout et certification PCI DSS</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2">2. Confidentialité des conversations</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 mb-3">
                <li>Risque d'enregistrement involontaire de conversations clients</li>
                <li>Préoccupations concernant l'écoute permanente</li>
              </ul>
              <p className="text-sm font-medium"><span className="text-[#87A28F] font-bold">Atténuation:</span> Traitement local des mots d'activation et politique stricte de non-conservation des données audio</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2">3. Intégrité du système</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 mb-3">
                <li>Risques de manipulation frauduleuse des commandes</li>
                <li>Vulnérabilités potentielles du réseau local</li>
              </ul>
              <p className="text-sm font-medium"><span className="text-[#D4B483] font-bold">Atténuation:</span> Authentification multi-facteurs pour les opérations sensibles et audits de sécurité réguliers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Risques Commerciaux</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Adoption par le Marché</h3>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Notre solution représente un changement de paradigme significatif dans un secteur traditionnel. Les défis d'adoption incluent :
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2 text-[#D47D5A]">Résistance au changement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Les restaurateurs et le personnel peuvent être réticents à abandonner les méthodes traditionnelles.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Programme d'onboarding progressif avec formation personnalisée et périodes d'essai généreuses.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2 text-[#87A28F]">Perception de complexité</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Paradoxalement, l'absence d'interface visuelle peut être perçue comme plus complexe.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Développer des démonstrations immersives et des témoignages vidéo de pairs restaurateurs.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold mb-2 text-[#D4B483]">Coût perçu vs bénéfices</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Difficulté à quantifier le ROI pour les restaurateurs.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Création d'un calculateur de ROI personnalisé et garantie de résultats sur 3 mois.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Concurrence et Différenciation</h3>
          
          <div className="bg-[#1A2A40] text-white rounded-lg shadow-lg p-6 mb-6">
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Analyse SWOT face à la concurrence</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-[#D47D5A] mb-2">Forces:</h5>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Solution vocale native (vs adaptations d'interfaces tactiles)</li>
                  <li>Écosystème complet d'encaissement intelligent</li>
                  <li>Focus sur l'expérience humaine plutôt que technologique</li>
                </ul>
                
                <h5 className="font-bold text-[#D47D5A] mb-2">Faiblesses:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Courbe d'apprentissage initiale pour le personnel</li>
                  <li>Dépendance à la qualité de l'infrastructure réseau</li>
                  <li>Coût initial potentiellement plus élevé que les solutions traditionnelles</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold text-[#87A28F] mb-2">Opportunités:</h5>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Marché en recherche d'innovation post-pandémie</li>
                  <li>Pénurie de main-d'œuvre favorisant l'automatisation</li>
                  <li>Tendance à la désintermédiation technologique</li>
                </ul>
                
                <h5 className="font-bold text-[#87A28F] mb-2">Menaces:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Géants de la tech développant des solutions vocales</li>
                  <li>Solutions low-cost avec fonctionnalités limitées</li>
                  <li>Intégration vocale dans les systèmes d'encaissement existants</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-5 shadow-md">
            <h4 className="font-bold mb-3">Stratégies de différenciation :</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Mettre en avant notre spécialisation exclusive dans la restauration</li>
              <li>Développer des fonctionnalités spécifiques impossibles sur les systèmes traditionnels</li>
              <li>Créer une communauté active de restaurateurs ambassadeurs</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Modèle Économique et Rentabilité</h3>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Les risques financiers spécifiques à notre modèle comprennent :
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-bold mb-2">1. Coûts matériels élevés</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Les oreillettes professionnelles et l'infrastructure représentent un investissement significatif.</p>
              <p className="text-sm bg-[#F5F5F0] dark:bg-gray-700 p-2 rounded"><span className="font-medium">Atténuation:</span> Négociation de partenariats avec des fabricants et économies d'échelle.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#87A28F]">
              <h4 className="font-bold mb-2">2. Cycle de vente long</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Les décisions d'adoption peuvent prendre plusieurs mois dans la restauration.</p>
              <p className="text-sm bg-[#F5F5F0] dark:bg-gray-700 p-2 rounded"><span className="font-medium">Atténuation:</span> Développement d'une stratégie de pipeline commercial avec objectifs réalistes et offres d'essai sans engagement.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D4B483]">
              <h4 className="font-bold mb-2">3. Churn potentiel</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Risque d'abandon après la période initiale.</p>
              <p className="text-sm bg-[#F5F5F0] dark:bg-gray-700 p-2 rounded"><span className="font-medium">Atténuation:</span> Programme de succès client proactif avec suivi régulier et évolutions fréquentes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Risques Réglementaires</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Conformité RGPD</h3>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            La nature de notre système implique le traitement de données sensibles :
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#D47D5A]/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Consentement et transparence</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Nécessité d'informer clairement sur la collecte de données vocales.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Développement d'un processus d'onboarding conforme avec documentation claire.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#87A28F]/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Droit à l'effacement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Complexité technique pour isoler et supprimer des données spécifiques.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Architecture de données conçue dès le départ pour faciliter l'identification et l'effacement.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#D4B483]/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4B483]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Transferts de données</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Risques liés au traitement cloud potentiellement transfrontalier.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Sélection de fournisseurs cloud avec centres de données européens et chiffrement avancé.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Réglementations Sectorielles</h3>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le secteur de la restauration est soumis à des réglementations spécifiques :
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-bold mb-2">1. Normes fiscales</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Obligations relatives aux systèmes d'encaissement certifiés.</p>
              <p className="text-sm bg-[#F5F5F0] dark:bg-gray-700 p-2 rounded"><span className="font-medium">Atténuation:</span> Certification NF 525 et conformité aux exigences anti-fraude.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#87A28F]">
              <h4 className="font-bold mb-2">2. Hygiène et sécurité alimentaire</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Implications pour la traçabilité des commandes.</p>
              <p className="text-sm bg-[#F5F5F0] dark:bg-gray-700 p-2 rounded"><span className="font-medium">Atténuation:</span> Intégration de fonctionnalités de traçabilité HACCP dans le système.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D4B483]">
              <h4 className="font-bold mb-2">3. Accessibilité</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Obligations concernant l'utilisation par des personnes en situation de handicap.</p>
              <p className="text-sm bg-[#F5F5F0] dark:bg-gray-700 p-2 rounded"><span className="font-medium">Atténuation:</span> Développement de modes d'interaction alternatifs et conformité aux normes d'accessibilité.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Risques Financiers</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Besoins en Capital</h3>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le développement et le déploiement de Sotto nécessitent des investissements substantiels :
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-[#D47D5A]/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold ml-2">Coûts de R&D</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Développement de la technologie vocale et de l'infrastructure.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Priorisation des fonctionnalités selon l'impact commercial et approche MVP itérative.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-[#87A28F]/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#87A28F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h4 className="font-bold ml-2">Coûts d'acquisition clients</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Marketing, vente et onboarding.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Stratégie de croissance progressive ciblant d'abord des segments à forte valeur.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="bg-[#D4B483]/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4B483]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold ml-2">Besoins en fonds de roulement</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Financement du matériel avant revenus récurrents.</p>
              <div className="bg-[#F5F5F0] dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm"><span className="font-medium">Atténuation:</span> Négociation de conditions favorables avec les fournisseurs et optimisation du cycle de trésorerie.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Projections Financières</h3>
          
          <div className="overflow-x-auto mb-6 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Scénario</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Probabilité</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ROI à 24 mois</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Seuil de rentabilité</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions requises</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#D47D5A]">Optimiste</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">25%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600 dark:text-green-400">210%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">14 mois</td>
                  <td className="px-6 py-4 text-sm">Préparer l'infrastructure pour une croissance rapide</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#87A28F]">Réaliste</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">50%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600 dark:text-blue-400">140%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">18 mois</td>
                  <td className="px-6 py-4 text-sm">Maintenir l'équilibre entre acquisition et rétention</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#D4B483]">Pessimiste</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">25%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-yellow-600 dark:text-yellow-400">70%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">26 mois</td>
                  <td className="px-6 py-4 text-sm">Plan de réduction des coûts et pivot potentiel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Conclusion et Plan d'Action</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Cette analyse des risques met en lumière les défis significatifs mais surmontables auxquels Sotto fait face. La nature innovante de notre solution exige une vigilance particulière sur les aspects techniques, notamment la fiabilité de la reconnaissance vocale et la robustesse de l'infrastructure. Les risques commerciaux, bien que substantiels, peuvent être atténués par une stratégie d'adoption progressive et une démonstration claire de la valeur ajoutée.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Actions Prioritaires</h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-t-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300 animate-float">
            <h4 className="font-bold mb-3 text-[#1A2A40]">Court terme (0-3 mois)</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Finaliser les tests de reconnaissance vocale en environnement réel</li>
              <li>Établir le cadre de conformité RGPD complet</li>
              <li>Développer le MVP avec mode dégradé robuste</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-t-4 border-[#87A28F] hover:shadow-lg transition-shadow duration-300 animate-float" style={{animationDelay: "0.2s"}}>
            <h4 className="font-bold mb-3 text-[#1A2A40]">Moyen terme (3-9 mois)</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Lancer le programme pilote avec 5-10 restaurants partenaires</li>
              <li>Mettre en place le système d'amélioration continue basé sur les retours</li>
              <li>Finaliser les certifications réglementaires</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-t-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300 animate-float" style={{animationDelay: "0.4s"}}>
            <h4 className="font-bold mb-3 text-[#1A2A40]">Long terme (9-18 mois)</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Développer les fonctionnalités avancées d'analyse prédictive</li>
              <li>Étendre l'écosystème avec les intégrations partenaires</li>
              <li>Optimiser le modèle économique basé sur les données d'utilisation réelle</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-[#1A2A40]">
          <p className="text-gray-700 dark:text-gray-300">
            La gestion proactive de ces risques sera déterminante pour transformer Sotto d'une innovation prometteuse en une solution indispensable pour la restauration moderne, fidèle à notre mission de libérer les restaurants des écrans pour recentrer l'expérience sur l'humain et la gastronomie.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;