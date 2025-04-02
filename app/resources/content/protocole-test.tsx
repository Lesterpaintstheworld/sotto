const ResourceContent = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 resource-content">
      <div className="mb-12 border-b border-[#D47D5A]/30 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2A40] mb-4">
          Protocole de Test Pilote
        </h1>
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] text-sm font-medium">
            testing
          </span>
          <span className="px-3 py-1 rounded-full bg-[#87A28F]/20 text-[#1A2A40] text-sm font-medium">
            ressource d'équipe
          </span>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Introduction
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Ce document détaille la méthodologie complète pour évaluer l'efficacité et l'adoption du système Sotto dans les environnements de restauration pilotes. Dans notre mission de libérer les restaurants des écrans pour créer une expérience plus humaine et efficace, il est crucial de mettre en place un cadre rigoureux pour mesurer le succès et collecter des retours d'expérience pertinents. Ce protocole servira de guide à l'équipe pour conduire des tests cohérents et obtenir des données exploitables qui orienteront le développement futur de notre solution vocale IA.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Objectifs du protocole
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Objectifs principaux
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Valider la proposition de valeur fondamentale de Sotto en conditions réelles",
              "Identifier les forces et faiblesses du système dans différents contextes de restauration",
              "Recueillir des données quantitatives et qualitatives sur l'expérience utilisateur",
              "Établir des métriques de référence pour les améliorations futures",
              "Documenter les cas d'utilisation émergents non anticipés"
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#87A28F]/20 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#D47D5A]/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#D47D5A]/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-[#D47D5A] text-sm font-medium">{index + 1}</span>
                  </div>
                  <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Résultats attendus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Rapport détaillé par établissement pilote",
              "Ensemble de métriques de performance technique et opérationnelle",
              "Collection de témoignages et retours d'expérience",
              "Identification des priorités de développement pour la prochaine itération",
              "Base de connaissance pour l'amélioration continue du LLM"
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#D4B483]/20 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#D4B483]/40">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#D4B483]/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-[#D4B483] dark:text-[#D4B483] text-sm font-medium">{index + 1}</span>
                  </div>
                  <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Sélection des établissements pilotes
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Critères de sélection
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden border border-[#87A28F]/20">
              <thead className="bg-[#87A28F]/10 dark:bg-[#87A28F]/30">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Critère</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Importance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#87A28F]/10">
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Diversité de format</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Mélange de service à table, comptoir, hybride</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full bg-[#D47D5A]/20 text-[#D47D5A] dark:text-[#D47D5A] text-xs font-medium">
                      Élevée
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Taille</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">De 2-3 à 15 serveurs maximum pour la phase pilote</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full bg-[#D47D5A]/20 text-[#D47D5A] dark:text-[#D47D5A] text-xs font-medium">
                      Élevée
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Profil technologique</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Mixture d'établissements tech-friendly et traditionnels</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full bg-[#87A28F]/20 text-[#1A2A40] dark:text-[#87A28F] text-xs font-medium">
                      Moyenne
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Infrastructure WiFi</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Couverture existante suffisante ou possibilité d'amélioration</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full bg-[#D4B483]/20 text-[#D4B483] dark:text-[#D4B483] text-xs font-medium">
                      Critique
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Engagement</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Volonté de la direction de participer activement au test</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full bg-[#D4B483]/20 text-[#D4B483] dark:text-[#D4B483] text-xs font-medium">
                      Critique
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0] font-medium">Localisation</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Accessibilité pour l'équipe technique en cas d'intervention</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 rounded-full bg-[#87A28F]/20 text-[#1A2A40] dark:text-[#87A28F] text-xs font-medium">
                      Moyenne
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Composition de la cohorte pilote
          </h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Pour la phase initiale, nous visons une cohorte de 5 établissements représentant:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                type: "Restaurant gastronomique",
                desc: "Service formalisé"
              },
              {
                type: "Restaurants casual dining",
                desc: "Service à table classique",
                count: 2
              },
              {
                type: "Brasserie à haut volume",
                desc: "Service rapide, environnement bruyant"
              },
              {
                type: "Café-restaurant",
                desc: "Hybride comptoir/table, multiples services"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#87A28F]/20 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#87A28F]/40 flex flex-col">
                {item.count && (
                  <div className="self-end mb-2 px-2 py-1 rounded-full bg-[#D47D5A]/20 text-[#D47D5A] dark:text-[#D47D5A] text-xs font-medium">
                    x{item.count}
                  </div>
                )}
                <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">{item.type}</h4>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Préparation des établissements
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Audit technique préalable
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 group-hover:text-[#D47D5A] transition-colors duration-300">Évaluation du réseau WiFi</h4>
              <ul className="space-y-2">
                {[
                  "Cartographie de la couverture",
                  "Test de débit et latence",
                  "Identification des zones mortes",
                  "Recommandations d'amélioration si nécessaire"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 group-hover:text-[#D47D5A] transition-colors duration-300">Audit acoustique</h4>
              <ul className="space-y-2">
                {[
                  "Mesure des niveaux sonores à différentes heures",
                  "Identification des zones particulièrement bruyantes",
                  "Test préliminaire de reconnaissance vocale dans l'environnement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 group-hover:text-[#D47D5A] transition-colors duration-300">Intégration avec les systèmes existants</h4>
              <ul className="space-y-2">
                {[
                  "Documentation du système de caisse actuel",
                  "Cartographie des processus opérationnels",
                  "Identification des points d'intégration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Formation des équipes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D4B483]/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Session initiale</h4>
                <span className="px-2 py-1 rounded-full bg-[#D4B483]/20 text-[#D4B483] dark:text-[#D4B483] text-xs font-medium">2h</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Présentation de Sotto et sa philosophie",
                  "Démonstration du système",
                  "Exercices pratiques de base"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#D4B483] mt-1.5 mr-2"></span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D4B483]/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Formation approfondie</h4>
                <span className="px-2 py-1 rounded-full bg-[#D4B483]/20 text-[#D4B483] dark:text-[#D4B483] text-xs font-medium">4h</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Utilisation des oreillettes",
                  "Commandes vocales et syntaxe recommandée",
                  "Gestion des situations complexes",
                  "Procédures de secours"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#D4B483] mt-1.5 mr-2"></span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D4B483]/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Accompagnement en situation</h4>
                <span className="px-2 py-1 rounded-full bg-[#D4B483]/20 text-[#D4B483] dark:text-[#D4B483] text-xs font-medium">1 service</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Présence d'un membre de l'équipe Sotto",
                  "Support en temps réel",
                  "Ajustements personnalisés"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#D4B483] mt-1.5 mr-2"></span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Méthodologie de test
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Phases de déploiement
          </h3>
          <div className="relative">
            <div className="absolute left-4 inset-y-0 w-0.5 bg-[#D47D5A]/20"></div>
            <div className="space-y-6">
              {[
                {
                  phase: "Phase d'observation",
                  duration: "1 semaine",
                  items: [
                    "Documentation des processus actuels",
                    "Mesure des métriques de référence",
                    "Identification des points de friction existants"
                  ]
                },
                {
                  phase: "Phase d'intégration",
                  duration: "1 semaine",
                  items: [
                    "Installation du système en parallèle",
                    "Utilisation par 30% de l'équipe",
                    "Ajustements techniques et de configuration"
                  ]
                },
                {
                  phase: "Phase de transition",
                  duration: "2 semaines",
                  items: [
                    "Utilisation par 70% de l'équipe",
                    "Réduction progressive des systèmes traditionnels",
                    "Ajustements basés sur les premiers retours"
                  ]
                },
                {
                  phase: "Phase d'adoption complète",
                  duration: "4 semaines",
                  items: [
                    "Utilisation par 100% de l'équipe",
                    "Mesure complète des métriques",
                    "Collecte systématique des retours"
                  ]
                }
              ].map((phase, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2.5 top-1.5 transform -translate-x-1/2 h-5 w-5 rounded-full bg-[#D47D5A] flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{index + 1}</span>
                  </div>
                  <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">{phase.phase}</h4>
                      <span className="px-2 py-1 rounded-full bg-[#87A28F]/20 text-[#1A2A40] dark:text-[#87A28F] text-xs font-medium">{phase.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block h-2 w-2 rounded-full bg-[#87A28F] mt-1.5 mr-2"></span>
                          <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Métriques de performance
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="col-span-1">
              <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#D47D5A]/20 pb-2">Métriques techniques</h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#87A28F]/20 shadow-sm">
                  <h5 className="font-medium text-[#D47D5A] mb-2 text-sm">Fiabilité du système</h5>
                  <ul className="space-y-2">
                    {[
                      "Taux de reconnaissance vocale (%)",
                      "Temps de latence moyen (ms)",
                      "Nombre d'incidents par service",
                      "Durée d'autonomie des oreillettes"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                        <span className="text-xs text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#87A28F]/20 shadow-sm">
                  <h5 className="font-medium text-[#D47D5A] mb-2 text-sm">Performance du LLM</h5>
                  <ul className="space-y-2">
                    {[
                      "Taux de compréhension contextuelle (%)",
                      "Précision des commandes enregistrées (%)",
                      "Capacité à gérer les accents et particularités linguistiques"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                        <span className="text-xs text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#87A28F]/20 pb-2">Métriques opérationnelles</h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#87A28F]/20 shadow-sm">
                  <h5 className="font-medium text-[#87A28F] dark:text-[#87A28F] mb-2 text-sm">Efficacité du service</h5>
                  <ul className="space-y-2">
                    {[
                      "Temps moyen de prise de commande",
                      "Temps entre commande et service",
                      "Nombre de tables servies par serveur",
                      "Taux d'erreur dans les commandes"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#87A28F] mt-1.5 mr-2"></span>
                        <span className="text-xs text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#87A28F]/20 shadow-sm">
                  <h5 className="font-medium text-[#87A28F] dark:text-[#87A28F] mb-2 text-sm">Impact business</h5>
                  <ul className="space-y-2">
                    {[
                      "Évolution du chiffre d'affaires",
                      "Panier moyen",
                      "Rotation des tables",
                      "Pourboires (indicateur de satisfaction client)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#87A28F] mt-1.5 mr-2"></span>
                        <span className="text-xs text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#D4B483]/20 pb-2">Métriques d'expérience</h4>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#D4B483]/20 shadow-sm">
                  <h5 className="font-medium text-[#D4B483] dark:text-[#D4B483] mb-2 text-sm">Satisfaction du personnel</h5>
                  <ul className="space-y-2">
                    {[
                      "Score NPS (Net Promoter Score)",
                      "Facilité d'utilisation perçue (échelle 1-10)",
                      "Temps d'adaptation au système",
                      "Taux d'adoption volontaire"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D4B483] mt-1.5 mr-2"></span>
                        <span className="text-xs text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg border border-[#D4B483]/20 shadow-sm">
                  <h5 className="font-medium text-[#D4B483] dark:text-[#D4B483] mb-2 text-sm">Satisfaction client</h5>
                  <ul className="space-y-2">
                    {[
                      "Temps d'attente perçu",
                      "Qualité du service perçue",
                      "Commentaires spontanés sur l'expérience",
                      "Taux de retour client"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#D4B483] mt-1.5 mr-2"></span>
                        <span className="text-xs text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Collecte de données
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Méthodes quantitatives
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm">
                <h4 className="font-medium text-[#87A28F] dark:text-[#87A28F] mb-3">Télémétrie du système</h4>
                <ul className="space-y-2">
                  {[
                    "Logs techniques automatisés",
                    "Métriques d'utilisation",
                    "Analyse des commandes vocales"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#87A28F] mt-1.5 mr-2"></span>
                      <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm">
                <h4 className="font-medium text-[#87A28F] dark:text-[#87A28F] mb-3">Questionnaires structurés</h4>
                <ul className="space-y-2">
                  {[
                    "Questionnaire quotidien (2 min, fin de service)",
                    "Questionnaire hebdomadaire approfondi (10 min)",
                    "Questionnaire client (échantillon représentatif)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#87A28F] mt-1.5 mr-2"></span>
                      <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Méthodes qualitatives
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D47D5A]/20 shadow-sm">
                <h4 className="font-medium text-[#D47D5A] dark:text-[#D47D5A] mb-3">Entretiens individuels</h4>
                <ul className="space-y-2">
                  {[
                    "Sessions de 30 minutes avec le personnel",
                    "Entretiens avec la direction",
                    "Conversations informelles avec les clients (avec permission)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                      <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D47D5A]/20 shadow-sm">
                <h4 className="font-medium text-[#D47D5A] dark:text-[#D47D5A] mb-3">Sessions d'observation</h4>
                <ul className="space-y-2">
                  {[
                    "Observation non-intrusive du service",
                    "Shadowing de membres du personnel",
                    "Analyse des interactions client-serveur"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                      <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D47D5A]/20 shadow-sm">
                <h4 className="font-medium text-[#D47D5A] dark:text-[#D47D5A] mb-3">Journaux de bord</h4>
                <ul className="space-y-2">
                  {[
                    "Documentation des incidents notables",
                    "Enregistrement des cas d'usage émergents",
                    "Suggestions d'amélioration spontanées"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                      <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Analyse et itération
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Processus d'analyse
            </h3>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm h-full">
              <ul className="space-y-3">
                {[
                  "Revue hebdomadaire des données quantitatives",
                  "Analyse thématique des retours qualitatifs",
                  "Identification des modèles récurrents",
                  "Priorisation des problèmes selon impact et fréquence"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-6 w-6 rounded-full bg-[#87A28F]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#87A28F] dark:text-[#87A28F] text-sm font-medium">{i + 1}</span>
                    </span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Cycles d'itération
            </h3>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D47D5A]/20 shadow-sm h-full">
              <div className="mb-4">
                <h4 className="font-medium text-[#D47D5A] dark:text-[#D47D5A] mb-2">Ajustements mineurs</h4>
                <ul className="space-y-2">
                  {[
                    "Correctifs déployés en continu",
                    "Ajustements de configuration à distance",
                    "Optimisations du LLM basées sur les données réelles"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                      <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-[#D47D5A] dark:text-[#D47D5A] mb-2">Itérations majeures</h4>
                <ul className="space-y-2">
                  {[
                    "Planifiées aux semaines 2, 4 et 8",
                    "Basées sur l'analyse cumulative des données",
                    "Impliquant potentiellement des changements matériels ou structurels"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#D47D5A] mt-1.5 mr-2"></span>
                      <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Documentation des apprentissages
            </h3>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D4B483]/20 shadow-sm h-full">
              <ul className="space-y-3">
                {[
                  "Création d'une base de connaissances centralisée",
                  "Catégorisation des insights par domaine fonctionnel",
                  "Traduction des apprentissages en spécifications produit",
                  "Partage régulier avec l'équipe de développement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-6 w-6 rounded-full bg-[#D4B483]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#D4B483] dark:text-[#D4B483] text-sm font-medium">{i + 1}</span>
                    </span>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Considérations éthiques
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Protection des données
            </h3>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D47D5A]/20 shadow-sm">
              <ul className="space-y-3">
                {[
                  "Consentement explicite de tout le personnel participant",
                  "Information claire aux clients sur le test en cours",
                  "Anonymisation des données collectées",
                  "Stockage sécurisé conforme au RGPD"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#D47D5A]/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-3 w-3 text-[#D47D5A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Bien-être des participants
            </h3>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#D47D5A]/20 shadow-sm">
              <ul className="space-y-3">
                {[
                  "Droit de retrait à tout moment",
                  "Alternance possible avec système traditionnel si nécessaire",
                  "Attention particulière aux signaux de fatigue ou stress",
                  "Reconnaissance et valorisation de la participation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#D47D5A]/20 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-3 w-3 text-[#D47D5A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Communication des résultats
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Reporting interne
            </h3>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm">
              <ul className="space-y-3">
                {[
                  "Dashboard en temps réel des métriques clés",
                  "Rapport hebdomadaire de synthèse",
                  "Présentation bi-mensuelle à l'équipe complète",
                  "Documentation détaillée des cas d'usage"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#87A28F] dark:text-[#87A28F] text-sm font-medium">{i + 1}</span>
                    </div>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Partage avec les établissements
            </h3>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg border border-[#87A28F]/20 shadow-sm">
              <ul className="space-y-3">
                {[
                  "Rapport personnalisé par établissement",
                  "Session de restitution avec l'équipe et la direction",
                  "Recommandations spécifiques d'amélioration",
                  "Reconnaissance de la contribution"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F]/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#87A28F] dark:text-[#87A28F] text-sm font-medium">{i + 1}</span>
                    </div>
                    <span className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Conclusion
        </h2>
        <div className="bg-white dark:bg-[#1A2A40]/80 p-6 rounded-lg border border-[#D4B483]/20 shadow-md">
          <p className="text-lg leading-relaxed mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Ce protocole de test pilote est conçu pour maximiser l'apprentissage tout en minimisant les perturbations dans les établissements participants. En suivant cette méthodologie rigoureuse, nous pourrons valider notre hypothèse fondamentale - que Sotto peut libérer les restaurants des écrans tout en améliorant l'efficacité opérationnelle et l'expérience humaine.
          </p>
          <p className="text-lg leading-relaxed text-[#1A2A40] dark:text-[#F5F5F0]">
            La réussite de cette phase pilote dépendra de notre capacité à écouter attentivement, itérer rapidement et maintenir une communication transparente avec toutes les parties prenantes. Chaque insight recueilli nous rapprochera de notre vision: révolutionner la restauration par une interface vocale qui remet l'humain au centre de l'expérience.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Prochaines étapes
        </h2>
        <div className="bg-white dark:bg-[#1A2A40]/80 p-6 rounded-lg border border-[#D47D5A]/20 shadow-md">
          <ul className="space-y-3">
            {[
              "Finaliser la sélection des établissements pilotes",
              "Préparer le matériel de formation",
              "Configurer les outils de collecte de données",
              "Former l'équipe d'accompagnement",
              "Planifier le calendrier détaillé de déploiement"
            ].map((item, i) => (
              <li key={i} className="flex items-start group">
                <div className="flex-shrink-0 h-6 w-6 rounded border border-[#D47D5A] mr-3 mt-0.5 flex items-center justify-center group-hover:bg-[#D47D5A]/20 transition-colors duration-300">
                  <svg className="h-3 w-3 text-[#D47D5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#1A2A40] dark:text-[#F5F5F0] group-hover:text-[#D47D5A] transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;