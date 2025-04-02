const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 resource-content">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] tracking-tight">
        Checklist de Déploiement Sotto
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Introduction</h2>
        <div className="prose max-w-none">
          <p className="text-[#1A2A40] dark:text-[#F5F5F0] leading-relaxed">
            Ce document présente la liste de vérification standardisée pour chaque déploiement du système Sotto dans un nouvel établissement. 
            Une installation réussie est cruciale pour garantir l'adoption et la satisfaction du client. Cette checklist méthodique permet 
            à notre équipe d'opérations de maintenir une qualité constante et d'assurer que chaque restaurant bénéficie d'une expérience 
            d'intégration fluide et professionnelle. En suivant ce processus structuré, nous minimisons les risques d'erreurs et créons 
            une base solide pour une relation durable avec nos partenaires restaurateurs.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Phases de Déploiement</h2>
        <div className="prose max-w-none mb-6">
          <p className="text-[#1A2A40] dark:text-[#F5F5F0] leading-relaxed">
            Le processus de déploiement Sotto se divise en quatre phases distinctes, chacune essentielle à la réussite globale de l'implémentation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-[#87A28F]/30 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#D47D5A]/50">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[#1A2A40] dark:bg-[#D47D5A] rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
              <h3 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Pré-déploiement</h3>
            </div>
            <p className="text-[#1A2A40] dark:text-[#F5F5F0] pl-11">Préparation et planification</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-[#87A28F]/30 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#D47D5A]/50">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[#1A2A40] dark:bg-[#D47D5A] rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
              <h3 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Installation technique</h3>
            </div>
            <p className="text-[#1A2A40] dark:text-[#F5F5F0] pl-11">Mise en place de l'infrastructure</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-[#87A28F]/30 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#D47D5A]/50">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[#1A2A40] dark:bg-[#D47D5A] rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
              <h3 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Formation et configuration</h3>
            </div>
            <p className="text-[#1A2A40] dark:text-[#F5F5F0] pl-11">Personnalisation et apprentissage</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-[#87A28F]/30 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#D47D5A]/50">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-[#1A2A40] dark:bg-[#D47D5A] rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
              <h3 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">Lancement et suivi</h3>
            </div>
            <p className="text-[#1A2A40] dark:text-[#F5F5F0] pl-11">Activation et support initial</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Phase 1: Pré-déploiement</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Évaluation initiale du restaurant</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Réaliser un audit complet de l'espace physique du restaurant</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Documenter les points d'alimentation électrique disponibles</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Cartographier la couverture WiFi existante (test de puissance du signal)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Identifier les zones à forte densité sonore</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Évaluer les besoins en matériel supplémentaire (routeurs, répéteurs)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Analyse des processus existants</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Documenter le flux de service actuel (de la commande au paiement)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Identifier les points de friction dans les opérations actuelles</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Recueillir les attentes spécifiques du restaurateur</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Analyser la carte et les spécificités du menu</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Évaluer le niveau de familiarité technologique de l'équipe</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Préparation logistique</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Planifier une date d'installation pendant une période de faible affluence</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Confirmer la disponibilité du personnel clé pour la formation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Préparer le matériel nécessaire:</span>
                <ul className="ml-8 mt-2 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-4 w-4 border border-[#D47D5A] rounded mr-2 mt-0.5"></div>
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Oreillettes (nombre adapté à l'équipe + 20% de réserve)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-4 w-4 border border-[#D47D5A] rounded mr-2 mt-0.5"></div>
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Stations de charge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-4 w-4 border border-[#D47D5A] rounded mr-2 mt-0.5"></div>
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Routeurs/répéteurs WiFi (si nécessaire)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-4 w-4 border border-[#D47D5A] rounded mr-2 mt-0.5"></div>
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Matériel de secours</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Configuration préliminaire</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Créer le compte restaurant dans le système administrateur</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Importer la carte et les menus dans la base de données Sotto</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Configurer les profils utilisateurs pour le personnel</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Préparer les modèles de commandes spécifiques au restaurant</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Adapter les paramètres acoustiques aux spécificités du lieu</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Phase 2: Installation technique</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Infrastructure réseau</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Vérifier la qualité de la connexion Internet (vitesse minimale: 50 Mbps)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Installer des points d'accès WiFi supplémentaires si nécessaire</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Configurer un réseau dédié pour le système Sotto (SSID: Sotto-[NomRestaurant])</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Sécuriser le réseau avec un protocole WPA2-Enterprise</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Tester la couverture dans tous les espaces de service</span>
              </li>
            </ul>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#1A2A40] dark:bg-[#D47D5A]/80 text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">Zone</th>
                    <th className="py-2 px-4 text-left">Force du signal</th>
                    <th className="py-2 px-4 text-left">Latence</th>
                    <th className="py-2 px-4 text-left">Action requise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Salle principale</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">≥ -60 dBm</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">{'< 30 ms'}</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Aucune</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Terrasse</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">-60 à -70 dBm</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">{'< 50 ms'}</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Répéteur recommandé</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Cuisine</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">{'< -70 dBm'}</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">{'> 50 ms'}</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Installation AP obligatoire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Installation des points de charge</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Identifier les emplacements stratégiques pour les stations de charge</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Installer les stations à proximité des zones de service</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Vérifier l'accessibilité et la discrétion des installations</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Tester l'alimentation électrique de chaque station</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Étiqueter discrètement chaque station selon sa zone</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Test de l'environnement sonore</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Effectuer des tests acoustiques aux heures d'affluence</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Identifier les zones problématiques (cuisine bruyante, bar)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Calibrer les paramètres de reconnaissance vocale selon l'environnement</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Tester les performances des microphones dans différentes conditions</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Ajuster les seuils de sensibilité si nécessaire</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Phase 3: Formation et configuration</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Configuration du système</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Personnaliser l'interface vocale selon les besoins spécifiques</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Configurer les zones et sections du restaurant</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Paramétrer les flux de communication (salle-cuisine-bar)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Définir les niveaux d'autorisation pour chaque type d'utilisateur</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Intégrer le système avec les solutions existantes (caisse, etc.)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Formation de l'équipe de direction</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Former le/la gérant(e) et les managers à l'interface d'administration</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Expliquer le tableau de bord et les analyses disponibles</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Démontrer les procédures de gestion des utilisateurs</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Former aux procédures de résolution des problèmes courants</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Présenter les ressources de support disponibles</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Formation du personnel de service</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Organiser des sessions de formation par groupes de 4-5 personnes maximum</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Distribuer les oreillettes et expliquer leur fonctionnement</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Pratiquer les commandes vocales de base (prise de commande, modifications)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Former aux commandes avancées (annulations, additions, etc.)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Réaliser des exercices pratiques en conditions réelles</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Formation du personnel de cuisine</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Expliquer le système de notification des commandes</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Former à la communication avec la salle via le système</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Démontrer les alertes de plats prêts et leur gestion</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Pratiquer les scénarios courants (rupture d'ingrédients, temps d'attente)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Phase 4: Lancement et suivi</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Test en conditions réelles</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Organiser un service test avec une clientèle limitée (amis/famille)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Avoir l'équipe Sotto présente pour assistance immédiate</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Recueillir les retours en temps réel et ajuster les paramètres</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Identifier les derniers points de friction et les résoudre</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Vérifier les performances du système en charge réelle</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Lancement officiel</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Confirmer que tous les tests préliminaires sont concluants</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">S'assurer que tout le personnel est à l'aise avec le système</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Mettre en place une équipe de support dédiée pour les 3 premiers jours</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Prévoir un plan de secours en cas de problème technique</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Activer le système pour le service client</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Suivi initial (J+1 à J+7)</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Effectuer un debriefing quotidien avec l'équipe du restaurant</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Recueillir les retours et difficultés rencontrées</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Ajuster les paramètres selon les besoins identifiés</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Offrir des sessions de formation complémentaires si nécessaire</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Surveiller les métriques d'utilisation et de performance</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Évaluation post-déploiement (J+30)</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Organiser une réunion d'évaluation avec la direction du restaurant</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Présenter les métriques d'amélioration (temps de service, satisfaction)</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Recueillir les suggestions d'amélioration</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Planifier les formations pour le nouveau personnel</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Établir un calendrier de suivi régulier</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Gestion des problèmes courants</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Problèmes techniques</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#1A2A40] dark:bg-[#D47D5A]/80 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Problème</th>
                  <th className="py-2 px-4 text-left">Vérification</th>
                  <th className="py-2 px-4 text-left">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Perte de connexion WiFi</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Force du signal, interférences</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Repositionner/ajouter des points d'accès</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Oreillette non fonctionnelle</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Batterie, connectivité</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Remplacer par une unité de secours</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Reconnaissance vocale défaillante</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Niveau de bruit ambiant</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Recalibrer les paramètres, vérifier le positionnement du micro</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Latence dans les commandes</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Charge réseau, serveur</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Vérifier la bande passante, redémarrer les services</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Problèmes d'utilisation</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#1A2A40] dark:bg-[#D47D5A]/80 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Problème</th>
                  <th className="py-2 px-4 text-left">Vérification</th>
                  <th className="py-2 px-4 text-left">Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Difficulté à se faire comprendre</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Prononciation, bruit</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Formation complémentaire, ajustement des paramètres</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Résistance du personnel</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Identification des freins</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Accompagnement personnalisé, démonstration des bénéfices</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Commandes incorrectes</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Logs système, formulations</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Ajuster les modèles de reconnaissance, clarifier les instructions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Contrôle qualité et validation</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Critères de validation du déploiement</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Taux de reconnaissance vocale {'>'} 95% dans toutes les zones</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Temps de latence {'<'} 1 seconde pour les commandes standard</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">100% du personnel formé et autonome</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Intégration complète avec les systèmes existants</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Documentation spécifique au restaurant finalisée et remise</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Documentation à compléter</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-[#87A28F]/30 shadow-sm">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Plan du restaurant avec zones de couverture WiFi</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Liste du personnel formé avec niveau de compétence</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Personnalisations spécifiques au restaurant</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Contacts d'urgence et procédures de support</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 border border-[#D47D5A] rounded mr-3 mt-0.5"></div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Rapport de déploiement signé par le restaurateur</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Conclusion</h2>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] rounded-lg p-6 border border-[#87A28F]/30 shadow-md">
          <div className="prose max-w-none">
            <p className="text-[#1A2A40] dark:text-[#F5F5F0] leading-relaxed mb-4">
              La standardisation du processus de déploiement est essentielle pour garantir une expérience cohérente et de haute qualité 
              pour chacun de nos partenaires restaurateurs. Cette checklist assure que chaque installation Sotto respecte nos standards 
              d'excellence et pose les bases d'une relation durable et mutuellement bénéfique.
            </p>
            <p className="text-[#1A2A40] dark:text-[#F5F5F0] leading-relaxed">
              En suivant méthodiquement ces étapes, nous créons les conditions optimales pour que le système Sotto s'intègre harmonieusement 
              dans l'environnement du restaurant, libérant ainsi le personnel des contraintes technologiques visibles pour se concentrer 
              sur l'essentiel : l'humain et la gastronomie.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <div className="bg-[#D47D5A]/10 dark:bg-[#D47D5A]/20 rounded-lg p-6 border border-[#D47D5A]/30 shadow-sm">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Actions pour l'équipe opérationnelle:</h3>
          <ul className="space-y-2 list-disc pl-5">
            <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Utiliser cette checklist pour chaque nouveau déploiement</li>
            <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Documenter les spécificités rencontrées pour enrichir nos connaissances</li>
            <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Proposer des améliorations à ce processus après chaque cycle de 5 déploiements</li>
            <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Partager les bonnes pratiques et les solutions innovantes avec l'ensemble de l'équipe</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;