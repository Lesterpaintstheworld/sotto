export default function ResourceContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
          Benchmark des Oreillettes WiFi
        </h1>
        <p className="text-[#D47D5A] italic font-medium">
          Document technique interne - Équipe Sotto
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Introduction
        </h2>
        <p className="mb-6 leading-relaxed">
          L'infrastructure matérielle de Sotto repose essentiellement sur des oreillettes WiFi permettant une communication fluide et discrète entre le personnel de restaurant et notre système IA central. Ce document présente une évaluation comparative des options d'oreillettes WiFi disponibles sur le marché, avec une analyse approfondie de leurs caractéristiques techniques, leur ergonomie, leur autonomie, et leur compatibilité avec notre écosystème. L'objectif est d'identifier les solutions les plus adaptées pour déployer Sotto dans divers environnements de restauration, en tenant compte des contraintes spécifiques à ce secteur.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Critères d'évaluation
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Critères essentiels
          </h3>
          <p className="mb-4">
            Nous avons établi les critères suivants pour évaluer les différentes options d'oreillettes WiFi :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Connectivité</h4>
              <p className="text-sm">Stabilité de la connexion WiFi, portée, résistance aux interférences</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#87A28F]">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Qualité audio</h4>
              <p className="text-sm">Clarté du microphone, réduction de bruit, qualité des haut-parleurs</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D4B483]">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Ergonomie</h4>
              <p className="text-sm">Confort pour un port prolongé, discrétion, adaptabilité à différentes morphologies</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Autonomie</h4>
              <p className="text-sm">Durée de la batterie, temps de charge, solutions de recharge rapide</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#87A28F]">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Robustesse</h4>
              <p className="text-sm">Résistance à l'humidité, à la chaleur, aux chocs et à l'usure quotidienne</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D4B483]">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Compatibilité technique</h4>
              <p className="text-sm">Facilité d'intégration avec notre système, protocoles supportés</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A] md:col-span-2">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Coût</h4>
              <p className="text-sm">Prix unitaire, coût de maintenance, durée de vie estimée</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Pondération des critères
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Critère</th>
                  <th className="py-3 px-4 text-left">Pondération</th>
                  <th className="py-3 px-4 text-left">Justification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Qualité audio</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-semibold">25%</td>
                  <td className="py-3 px-4">Essentiel pour la reconnaissance vocale dans un environnement bruyant</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Connectivité</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-semibold">20%</td>
                  <td className="py-3 px-4">Garantit la fiabilité du service en continu</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Autonomie</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-semibold">20%</td>
                  <td className="py-3 px-4">Doit couvrir un service complet sans interruption</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Ergonomie</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-semibold">15%</td>
                  <td className="py-3 px-4">Assure l'adoption par le personnel et la discrétion</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Robustesse</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-semibold">10%</td>
                  <td className="py-3 px-4">Environnement exigeant (chaleur, humidité, mouvements)</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Compatibilité</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-semibold">5%</td>
                  <td className="py-3 px-4">Possibilité d'adaptation technique si nécessaire</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Coût</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-semibold">5%</td>
                  <td className="py-3 px-4">Important mais secondaire face aux critères de performance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Solutions évaluées
        </h2>
        <p className="mb-6">
          Nous avons testé en conditions réelles 8 modèles d'oreillettes WiFi provenant de 6 fabricants différents. Voici les résultats détaillés de notre benchmark.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Tableau comparatif global
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-2 text-left text-sm">Modèle</th>
                  <th className="py-3 px-2 text-left text-sm">Connectivité</th>
                  <th className="py-3 px-2 text-left text-sm">Qualité audio</th>
                  <th className="py-3 px-2 text-left text-sm">Ergonomie</th>
                  <th className="py-3 px-2 text-left text-sm">Autonomie</th>
                  <th className="py-3 px-2 text-left text-sm">Robustesse</th>
                  <th className="py-3 px-2 text-left text-sm">Compatibilité</th>
                  <th className="py-3 px-2 text-left text-sm">Coût</th>
                  <th className="py-3 px-2 text-left text-sm">Score global</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/20">
                  <td className="py-3 px-2 font-medium text-sm">ProComm WF-450</td>
                  <td className="py-3 px-2 text-sm">18/20</td>
                  <td className="py-3 px-2 text-sm">22/25</td>
                  <td className="py-3 px-2 text-sm">12/15</td>
                  <td className="py-3 px-2 text-sm">18/20</td>
                  <td className="py-3 px-2 text-sm">9/10</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 text-sm">3/5</td>
                  <td className="py-3 px-2 font-bold text-[#D47D5A] text-sm">86/100</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/20">
                  <td className="py-3 px-2 font-medium text-sm">Vocera B3000n</td>
                  <td className="py-3 px-2 text-sm">19/20</td>
                  <td className="py-3 px-2 text-sm">23/25</td>
                  <td className="py-3 px-2 text-sm">13/15</td>
                  <td className="py-3 px-2 text-sm">16/20</td>
                  <td className="py-3 px-2 text-sm">8/10</td>
                  <td className="py-3 px-2 text-sm">5/5</td>
                  <td className="py-3 px-2 text-sm">2/5</td>
                  <td className="py-3 px-2 font-bold text-[#D47D5A] text-sm">86/100</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/20">
                  <td className="py-3 px-2 font-medium text-sm">Theatro Communicator</td>
                  <td className="py-3 px-2 text-sm">17/20</td>
                  <td className="py-3 px-2 text-sm">21/25</td>
                  <td className="py-3 px-2 text-sm">14/15</td>
                  <td className="py-3 px-2 text-sm">17/20</td>
                  <td className="py-3 px-2 text-sm">9/10</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 text-sm">3/5</td>
                  <td className="py-3 px-2 font-bold text-[#D47D5A] text-sm">85/100</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-2 font-medium text-sm">Relay Pro</td>
                  <td className="py-3 px-2 text-sm">19/20</td>
                  <td className="py-3 px-2 text-sm">19/25</td>
                  <td className="py-3 px-2 text-sm">11/15</td>
                  <td className="py-3 px-2 text-sm">19/20</td>
                  <td className="py-3 px-2 text-sm">9/10</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 font-bold text-sm">85/100</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-2 font-medium text-sm">Orion Labs Onyx</td>
                  <td className="py-3 px-2 text-sm">16/20</td>
                  <td className="py-3 px-2 text-sm">20/25</td>
                  <td className="py-3 px-2 text-sm">12/15</td>
                  <td className="py-3 px-2 text-sm">17/20</td>
                  <td className="py-3 px-2 text-sm">7/10</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 font-bold text-sm">80/100</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-2 font-medium text-sm">ZenComm WF-200</td>
                  <td className="py-3 px-2 text-sm">15/20</td>
                  <td className="py-3 px-2 text-sm">18/25</td>
                  <td className="py-3 px-2 text-sm">10/15</td>
                  <td className="py-3 px-2 text-sm">16/20</td>
                  <td className="py-3 px-2 text-sm">8/10</td>
                  <td className="py-3 px-2 text-sm">3/5</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 font-bold text-sm">74/100</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-2 font-medium text-sm">Savox C-COM</td>
                  <td className="py-3 px-2 text-sm">14/20</td>
                  <td className="py-3 px-2 text-sm">17/25</td>
                  <td className="py-3 px-2 text-sm">9/15</td>
                  <td className="py-3 px-2 text-sm">15/20</td>
                  <td className="py-3 px-2 text-sm">8/10</td>
                  <td className="py-3 px-2 text-sm">3/5</td>
                  <td className="py-3 px-2 text-sm">3/5</td>
                  <td className="py-3 px-2 font-bold text-sm">69/100</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-2 font-medium text-sm">AudioLink Pro</td>
                  <td className="py-3 px-2 text-sm">13/20</td>
                  <td className="py-3 px-2 text-sm">16/25</td>
                  <td className="py-3 px-2 text-sm">8/15</td>
                  <td className="py-3 px-2 text-sm">14/20</td>
                  <td className="py-3 px-2 text-sm">6/10</td>
                  <td className="py-3 px-2 text-sm">3/5</td>
                  <td className="py-3 px-2 text-sm">4/5</td>
                  <td className="py-3 px-2 font-bold text-sm">64/100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Analyse détaillée des solutions les plus performantes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-[#D47D5A]">
              <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">ProComm WF-450</h4>
              
              <div className="mb-4">
                <h5 className="font-semibold text-[#D47D5A] mb-2">Points forts :</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Excellente qualité de capture vocale même en environnement bruyant (>85dB)</li>
                  <li>Filtrage adaptatif du bruit ambiant</li>
                  <li>Autonomie de 9h en utilisation continue</li>
                  <li>Recharge rapide (70% en 30 minutes)</li>
                  <li>Résistance à l'eau IPX5</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-[#87A28F] mb-2">Points d'amélioration :</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Prix unitaire élevé (185€)</li>
                  <li>Nécessite un point d'accès WiFi dédié pour performances optimales</li>
                  <li>Oreillette droite uniquement (pas d'option gauche)</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-[#D4B483]">
              <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Vocera B3000n</h4>
              
              <div className="mb-4">
                <h5 className="font-semibold text-[#D47D5A] mb-2">Points forts :</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Qualité audio supérieure avec algorithme de réduction de bruit avancé</li>
                  <li>Excellente portée WiFi (jusqu'à 45m en intérieur)</li>
                  <li>Conception légère (18g) et discrète</li>
                  <li>Interface de commande vocale native</li>
                  <li>Écosystème mature avec outils d'administration</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-[#87A28F] mb-2">Points d'amélioration :</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Coût élevé de l'infrastructure complète</li>
                  <li>Autonomie limitée à 8h en usage intensif</li>
                  <li>Nécessite une formation plus approfondie</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-[#87A28F]">
              <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Theatro Communicator</h4>
              
              <div className="mb-4">
                <h5 className="font-semibold text-[#D47D5A] mb-2">Points forts :</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Design extrêmement discret et élégant</li>
                  <li>Excellente ergonomie pour port prolongé</li>
                  <li>Compatibilité avec systèmes de gestion existants</li>
                  <li>Bon équilibre performance/prix</li>
                  <li>Résistance aux environnements humides</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-[#87A28F] mb-2">Points d'amélioration :</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Performances audio légèrement inférieures en environnement très bruyant</li>
                  <li>Nécessite un réseau WiFi bien configuré</li>
                  <li>Batterie non remplaçable par l'utilisateur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Tests en conditions réelles
        </h2>
        <p className="mb-6">
          Nous avons conduit des tests approfondis dans trois environnements de restauration différents :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md text-center">
            <div className="text-[#D47D5A] font-bold text-lg mb-2">Restaurant gastronomique</div>
            <div className="text-sm">Niveau sonore modéré, 65-70dB</div>
          </div>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md text-center">
            <div className="text-[#D47D5A] font-bold text-lg mb-2">Brasserie animée</div>
            <div className="text-sm">Niveau sonore élevé, 75-85dB</div>
          </div>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md text-center">
            <div className="text-[#D47D5A] font-bold text-lg mb-2">Fast-food</div>
            <div className="text-sm">Niveau sonore très élevé, >85dB avec pics</div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Résultats des tests de reconnaissance vocale
          </h3>
          <p className="mb-3">Taux de reconnaissance correcte des commandes vocales :</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Modèle</th>
                  <th className="py-3 px-4 text-left">Restaurant gastronomique</th>
                  <th className="py-3 px-4 text-left">Brasserie</th>
                  <th className="py-3 px-4 text-left">Fast-food</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/20">
                  <td className="py-3 px-4 font-medium">ProComm WF-450</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">98%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">94%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">89%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/20">
                  <td className="py-3 px-4 font-medium">Vocera B3000n</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">99%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">95%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">87%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/20">
                  <td className="py-3 px-4 font-medium">Theatro Communicator</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">97%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">92%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-semibold">85%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Relay Pro</td>
                  <td className="py-3 px-4">96%</td>
                  <td className="py-3 px-4">91%</td>
                  <td className="py-3 px-4">86%</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Orion Labs Onyx</td>
                  <td className="py-3 px-4">97%</td>
                  <td className="py-3 px-4">89%</td>
                  <td className="py-3 px-4">81%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Retours du personnel test
          </h3>
          <p className="mb-3">Satisfaction moyenne sur une échelle de 1 à 10 :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Confort</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-28 font-medium">Theatro</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#87A28F] h-2.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">9.2</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">ProComm</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#87A28F] h-2.5 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">8.7</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">Vocera</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#87A28F] h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">8.5</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Facilité d'utilisation</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-28 font-medium">Vocera</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#D47D5A] h-2.5 rounded-full" style={{ width: "93%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">9.3</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">ProComm</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#D47D5A] h-2.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">8.8</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">Theatro</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#D47D5A] h-2.5 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">8.6</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Qualité perçue</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-28 font-medium">ProComm</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#D4B483] h-2.5 rounded-full" style={{ width: "91%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">9.1</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">Vocera</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#D4B483] h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">9.0</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">Theatro</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#D4B483] h-2.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">8.8</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Discrétion</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-28 font-medium">Theatro</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#1A2A40] dark:bg-[#F5F5F0] h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">9.5</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">Vocera</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#1A2A40] dark:bg-[#F5F5F0] h-2.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">8.8</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 font-medium">ProComm</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#1A2A40] dark:bg-[#F5F5F0] h-2.5 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                  <span className="ml-2 font-bold">8.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Recommandations
        </h2>
        <p className="mb-6">
          Après analyse complète des résultats, nous recommandons les options suivantes selon le contexte :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-[#D4B483]">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-[#1A2A40] dark:text-[#F5F5F0]">Solution premium</h3>
              <div className="text-[#D47D5A] font-semibold text-lg mt-1">Vocera B3000n</div>
            </div>
            <p className="text-sm">
              Idéal pour les établissements haut de gamme où la qualité audio et la discrétion sont primordiales. L'écosystème complet offre d'excellentes possibilités d'intégration avec notre plateforme.
            </p>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-[#D47D5A] transform md:scale-105 animate-float">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-[#1A2A40] dark:text-[#F5F5F0]">Meilleur rapport qualité/prix</h3>
              <div className="text-[#D47D5A] font-semibold text-lg mt-1">ProComm WF-450</div>
            </div>
            <p className="text-sm">
              Offre les meilleures performances globales, particulièrement en environnement bruyant. Recommandé pour la majorité des déploiements Sotto, notamment dans les établissements à fort volume sonore.
            </p>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-[#87A28F]">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-[#1A2A40] dark:text-[#F5F5F0]">Option alternative</h3>
              <div className="text-[#D47D5A] font-semibold text-lg mt-1">Theatro Communicator</div>
            </div>
            <p className="text-sm">
              Excellente ergonomie et discrétion, idéal pour les restaurants où l'esthétique et la discrétion sont essentielles. Légèrement moins performant en environnement très bruyant.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Considérations techniques pour l'intégration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Protocoles et API
            </h3>
            <p className="mb-3">Les trois solutions recommandées supportent :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">✓</span>
                <span>Connexion WiFi standard (802.11ac)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">✓</span>
                <span>Protocole WebRTC pour streaming audio</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">✓</span>
                <span>API REST pour contrôle à distance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">✓</span>
                <span>Mise à jour OTA (Over-The-Air)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Infrastructure requise
            </h3>
            <p className="mb-3">Pour un fonctionnement optimal, nous recommandons :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Point d'accès WiFi dédié aux oreillettes (séparation du trafic)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Configuration QoS sur le réseau pour prioriser le trafic audio</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Station de charge centralisée (1 pour 4-6 appareils)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Oreillettes de secours (20% du parc) pour rotation pendant la recharge</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Personnalisation
          </h3>
          <p className="mb-3">Possibilités de personnalisation pour Sotto :</p>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-l-4 border-[#D47D5A] pl-3">
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">ProComm</h4>
                <p className="text-sm">Firmware personnalisable, bouton dédié programmable</p>
              </div>
              <div className="border-l-4 border-[#D4B483] pl-3">
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Vocera</h4>
                <p className="text-sm">API complète, commandes vocales personnalisables</p>
              </div>
              <div className="border-l-4 border-[#87A28F] pl-3">
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Theatro</h4>
                <p className="text-sm">Interface limitée mais stable, possibilité de branding discret</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Aspects économiques
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Coûts d'acquisition
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Modèle</th>
                  <th className="py-3 px-4 text-left">Prix unitaire</th>
                  <th className="py-3 px-4 text-left">Station de charge</th>
                  <th className="py-3 px-4 text-left">Infrastructure</th>
                  <th className="py-3 px-4 text-left">Coût pour 10 unités</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">ProComm WF-450</td>
                  <td className="py-3 px-4">185€</td>
                  <td className="py-3 px-4">275€ (6 slots)</td>
                  <td className="py-3 px-4">320€</td>
                  <td className="py-3 px-4 font-bold">2,445€</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Vocera B3000n</td>
                  <td className="py-3 px-4">210€</td>
                  <td className="py-3 px-4">350€ (8 slots)</td>
                  <td className="py-3 px-4">450€</td>
                  <td className="py-3 px-4 font-bold">2,900€</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Theatro Communicator</td>
                  <td className="py-3 px-4">165€</td>
                  <td className="py-3 px-4">250€ (5 slots)</td>
                  <td className="py-3 px-4">300€</td>
                  <td className="py-3 px-4 font-bold">2,200€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Coût total de possession (3 ans)
          </h3>
          <p className="mb-3">En incluant maintenance, remplacement et support :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
              <div className="text-center">
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">ProComm</h4>
                <div className="text-2xl font-bold text-[#D47D5A]">~3,800€</div>
                <div className="text-sm mt-1">pour 10 unités</div>
              </div>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
              <div className="text-center">
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vocera</h4>
                <div className="text-2xl font-bold text-[#D47D5A]">~4,500€</div>
                <div className="text-sm mt-1">pour 10 unités</div>
              </div>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md">
              <div className="text-center">
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Theatro</h4>
                <div className="text-2xl font-bold text-[#D47D5A]">~3,600€</div>
                <div className="text-sm mt-1">pour 10 unités</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-2">
          Conclusion et prochaines étapes
        </h2>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md mb-8">
          <p className="mb-4">
            Notre benchmark démontre que plusieurs solutions d'oreillettes WiFi répondent aux exigences techniques de Sotto, avec des performances particulièrement impressionnantes pour les modèles ProComm WF-450, Vocera B3000n et Theatro Communicator.
          </p>
          <p className="mb-4">
            Le ProComm WF-450 offre le meilleur équilibre entre performance audio, autonomie et coût, ce qui en fait notre recommandation principale pour la phase de déploiement initial. Sa robustesse et sa performance en environnement bruyant correspondent parfaitement aux besoins de la majorité des établissements de restauration.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Prochaines étapes
          </h3>
          <div className="space-y-4">
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-3 rounded-md shadow-sm">
              <div className="bg-[#D47D5A] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
              <div>
                <span className="font-medium">Test d'intégration approfondi</span> avec le ProComm WF-450 et notre backend Next.js
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-3 rounded-md shadow-sm">
              <div className="bg-[#D47D5A] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
              <div>
                <span className="font-medium">Développement d'un pilote</span> avec 3 restaurants partenaires utilisant cette solution
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-3 rounded-md shadow-sm">
              <div className="bg-[#D47D5A] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
              <div>
                <span className="font-medium">Négociation tarifaire</span> avec ProComm pour des volumes plus importants
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-3 rounded-md shadow-sm">
              <div className="bg-[#D47D5A] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
              <div>
                <span className="font-medium">Création d'un guide d'installation</span> spécifique à notre écosystème
              </div>
            </div>
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-3 rounded-md shadow-sm">
              <div className="bg-[#D47D5A] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</div>
              <div>
                <span className="font-medium">Formation de l'équipe de déploiement</span> aux spécificités de cette solution
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border-l-4 border-[#D4B483]">
          <p>
            Nous recommandons également de maintenir une veille active sur les évolutions du Vocera B3000n et du Theatro Communicator, qui pourraient devenir des alternatives intéressantes selon l'évolution de leurs prix et de leurs fonctionnalités.
          </p>
        </div>
      </section>

      <div className="mt-16 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400 italic">
        Document préparé par l'équipe technique Sotto - Pour usage interne uniquement
      </div>
    </div>
  );
}