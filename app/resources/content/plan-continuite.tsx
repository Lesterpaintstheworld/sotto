const ResourceContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <h1 className="text-4xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] tracking-tight">
        Plan de Continuité de Service
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#D47D5A]">Introduction</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed">
            Dans l'écosystème Sotto, où notre interface vocale IA représente le cœur des opérations quotidiennes de nos restaurants partenaires, la continuité de service n'est pas simplement une bonne pratique—c'est une nécessité absolue. Ce document établit les stratégies, procédures et responsabilités pour maintenir la disponibilité de nos services face aux interruptions potentielles, qu'elles soient techniques, environnementales ou opérationnelles.
          </p>
          <p className="mb-4 leading-relaxed">
            Notre approche de la continuité de service s'inscrit dans notre mission fondamentale : libérer la restauration des écrans pour créer une expérience plus humaine et efficace. Même en cas d'incident, notre objectif est de maintenir cette promesse en garantissant que nos partenaires puissent continuer à offrir un service fluide à leurs clients.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">Principes fondamentaux</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Hiérarchie des priorités</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 1, title: "Sécurité des données client", desc: "Protection des informations sensibles en toutes circonstances" },
              { id: 2, title: "Maintien des fonctions critiques", desc: "Garantir que les opérations essentielles du restaurant puissent continuer" },
              { id: 3, title: "Communication transparente", desc: "Informer proactivement les utilisateurs de tout problème" },
              { id: 4, title: "Résolution rapide", desc: "Mobiliser les ressources nécessaires pour un retour à la normale dans les meilleurs délais" }
            ].map(item => (
              <div 
                key={item.id}
                className="bg-white dark:bg-[#1A2A40]/60 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#D4B483]/30 hover:border-[#D4B483]/50"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D47D5A] text-white flex items-center justify-center mr-3">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">{item.title}</h4>
                    <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Niveaux de gravité des incidents</h3>
          <div className="overflow-x-auto rounded-lg shadow border border-[#D4B483]/30">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#1A2A40]/80">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Niveau</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Temps de réponse cible</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Impact opérationnel</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-[#1A2A40]/40 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#D47D5A]">P1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Critique - Service totalement indisponible</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Immédiat (&lt; 15 min)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Impossibilité de prendre/traiter les commandes</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#D47D5A]">P2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Majeur - Fonctionnalités principales dégradées</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">&lt; 1 heure</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Ralentissement significatif des opérations</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#D47D5A]">P3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Modéré - Fonctionnalités secondaires affectées</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">&lt; 4 heures</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Impact limité sur certaines opérations</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#D47D5A]">P4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Mineur - Problèmes cosmétiques ou non-urgents</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">&lt; 24 heures</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Pas d'impact sur les opérations quotidiennes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">Scénarios de défaillance et stratégies de mitigation</h2>
        
        <div className="space-y-8">
          {[
            {
              id: 1,
              title: "Perte de connectivité réseau",
              description: "La nature vocale de Sotto repose sur une connexion WiFi fiable. En cas de défaillance:",
              sections: [
                {
                  title: "Mesures préventives",
                  items: [
                    "Audit préalable de la couverture WiFi du restaurant",
                    "Recommandation de solutions de redondance (connexion 4G/5G de secours)",
                    "Configuration de points d'accès stratégiquement placés avec couverture optimisée"
                  ]
                },
                {
                  title: "Procédures de continuité",
                  items: [
                    "Mode hors-ligne automatique - Basculement vers un traitement local limité des commandes",
                    "Mise en tampon des transactions - Stockage local des commandes pour synchronisation ultérieure",
                    "Protocole de reconnexion intelligent - Tentatives espacées pour éviter la surcharge du réseau"
                  ]
                },
                {
                  title: "Restauration",
                  items: [
                    "Synchronisation automatique des données à la reconnexion",
                    "Vérification d'intégrité des transactions",
                    "Notification au restaurant de la reprise complète du service"
                  ]
                }
              ]
            },
            {
              id: 2,
              title: "Défaillance du système IA central",
              description: "Si notre moteur IA vocal rencontre des problèmes:",
              sections: [
                {
                  title: "Mesures préventives",
                  items: [
                    "Architecture multi-région avec basculement automatique",
                    "Surveillance continue des performances et des anomalies",
                    "Tests de charge réguliers simulant des pics d'activité"
                  ]
                },
                {
                  title: "Procédures de continuité",
                  items: [
                    "Mode dégradé guidé par règles - Basculement vers un système de reconnaissance simplifié",
                    "Interface textuelle de secours - Activation temporaire d'une interface minimale sur appareil mobile",
                    "Routage des commandes vocales - Redirection vers une équipe d'opérateurs humains pour les cas critiques"
                  ]
                },
                {
                  title: "Restauration",
                  items: [
                    "Validation des performances avant rétablissement complet",
                    "Réintégration progressive des fonctionnalités",
                    "Analyse post-incident pour amélioration continue"
                  ]
                }
              ]
            },
            {
              id: 3,
              title: "Problèmes matériels (oreillettes/points de charge)",
              description: "La défaillance du matériel peut compromettre l'expérience utilisateur:",
              sections: [
                {
                  title: "Mesures préventives",
                  items: [
                    "Stock de matériel de remplacement sur site (minimum 20% du parc)",
                    "Maintenance préventive programmée",
                    "Formation du personnel à la résolution des problèmes courants"
                  ]
                },
                {
                  title: "Procédures de continuité",
                  items: [
                    "Protocole de remplacement rapide - Procédure simplifiée pour échanger un appareil défectueux",
                    "Mode alternatif - Basculement temporaire vers haut-parleurs discrets dans zones stratégiques",
                    "Partage d'équipement - Réattribution dynamique des ressources selon priorités"
                  ]
                },
                {
                  title: "Restauration",
                  items: [
                    "Diagnostic des appareils défectueux",
                    "Réparation ou remplacement selon analyse",
                    "Mise à jour de l'inventaire et commande proactive"
                  ]
                }
              ]
            },
            {
              id: 4,
              title: "Cyberattaques ou compromission de données",
              description: "La sécurité étant primordiale:",
              sections: [
                {
                  title: "Mesures préventives",
                  items: [
                    "Chiffrement de bout en bout de toutes les communications",
                    "Authentification multi-facteurs pour l'accès administrateur",
                    "Audits de sécurité trimestriels et tests d'intrusion"
                  ]
                },
                {
                  title: "Procédures de continuité",
                  items: [
                    "Isolation immédiate - Détection et confinement des systèmes potentiellement compromis",
                    "Basculement vers environnement sécurisé - Activation d'une instance distincte et vérifiée",
                    "Protocole de communication de crise - Notification aux parties prenantes selon obligations légales"
                  ]
                },
                {
                  title: "Restauration",
                  items: [
                    "Analyse forensique complète",
                    "Restauration depuis sauvegardes vérifiées",
                    "Renforcement des mesures de sécurité suite aux enseignements"
                  ]
                }
              ]
            }
          ].map(scenario => (
            <div key={scenario.id} className="bg-white dark:bg-[#1A2A40]/40 rounded-xl shadow-lg overflow-hidden border border-[#D4B483]/20 hover:border-[#D4B483]/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2 flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D47D5A] text-white mr-3 text-sm">
                    {scenario.id}
                  </span>
                  {scenario.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{scenario.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {scenario.sections.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 dark:bg-[#1A2A40]/60 p-4 rounded-lg border border-[#87A28F]/20">
                      <h4 className="text-[#87A28F] dark:text-[#A7C2AF] font-medium mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => {
                          const parts = item.split(' - ');
                          return (
                            <li key={i} className="text-sm flex">
                              <span className="text-[#D47D5A] mr-2">•</span>
                              <span>
                                {parts.length > 1 ? (
                                  <>
                                    <span className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">{parts[0]}</span>
                                    <span className="text-gray-600 dark:text-gray-400"> - {parts[1]}</span>
                                  </>
                                ) : (
                                  <span className="text-[#1A2A40] dark:text-gray-300">{item}</span>
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">Organisation et responsabilités</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Équipe de gestion de crise</h3>
          <div className="overflow-x-auto rounded-lg shadow border border-[#D4B483]/30">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#1A2A40]/80">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Rôle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Responsabilités</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Temps de mobilisation</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-[#1A2A40]/40 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Responsable d'incident</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Coordination générale, communication externe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">&lt; 15 minutes</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Ingénieur d'astreinte</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Diagnostic technique, mise en œuvre des solutions</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Immédiat</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Support client</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Communication avec les restaurants, aide à la continuité</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">&lt; 30 minutes</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Responsable sécurité</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Gestion des incidents liés à la sécurité/confidentialité</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">&lt; 1 heure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Processus d'escalade</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#D47D5A]/30"></div>
            <ol className="space-y-6 relative">
              {[
                { step: "Détection", desc: "Surveillance automatisée ou signalement utilisateur" },
                { step: "Qualification", desc: "Évaluation initiale et attribution d'un niveau de priorité" },
                { step: "Notification", desc: "Alerte des membres concernés de l'équipe selon la gravité" },
                { step: "Mobilisation", desc: "Constitution de l'équipe de résolution adaptée" },
                { step: "Résolution", desc: "Mise en œuvre des mesures de continuité puis résolution" },
                { step: "Communication", desc: "Information régulière aux parties prenantes" },
                { step: "Clôture", desc: "Confirmation du retour à la normale" },
                { step: "Analyse post-mortem", desc: "Revue d'incident et améliorations" }
              ].map((item, idx) => (
                <li key={idx} className="pl-10 relative">
                  <div className="absolute left-0 top-0 bg-white dark:bg-[#0a0a0a] border-2 border-[#D47D5A] rounded-full w-8 h-8 flex items-center justify-center z-10 text-[#1A2A40] dark:text-[#F5F5F0]">
                    {idx + 1}
                  </div>
                  <div className="bg-white dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow border border-[#D4B483]/20">
                    <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">{item.step}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">Procédures de sauvegarde et restauration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Stratégie de sauvegarde</h3>
            <ul className="space-y-3">
              {[
                "Sauvegarde continue des transactions avec réplication multi-région",
                "Snapshots horaires des configurations système",
                "Sauvegarde quotidienne complète avec conservation pendant 30 jours",
                "Archives mensuelles conservées pendant 1 an"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Procédures de restauration</h3>
            <ol className="space-y-3">
              {[
                "Évaluation - Détermination du point de restauration optimal",
                "Validation - Vérification de l'intégrité des données à restaurer",
                "Restauration test - Test dans un environnement isolé",
                "Restauration production - Mise en œuvre avec validation par étapes",
                "Vérification - Contrôles d'intégrité post-restauration"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center bg-[#D47D5A] text-white w-5 h-5 rounded-full mr-2 text-xs">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">Tests et amélioration continue</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Programme de tests</h3>
          <div className="overflow-x-auto rounded-lg shadow border border-[#D4B483]/30">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#1A2A40]/80">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Type de test</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Fréquence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Participants</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Objectifs</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-[#1A2A40]/40 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Test de basculement</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Mensuel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Équipe technique</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Valider les procédures de failover automatique</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Simulation d'incident</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Trimestriel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Équipe élargie</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Tester la coordination et les procédures</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Test de restauration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Mensuel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Équipe technique</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Vérifier l'intégrité des sauvegardes</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Exercice de crise</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Semestriel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40] dark:text-gray-300">Toute l'entreprise</td>
                  <td className="px-6 py-4 text-sm text-[#1A2A40] dark:text-gray-300">Valider le plan complet de continuité</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Processus d'amélioration</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Analyse post-incident systématique avec documentation des enseignements",
              "Revue trimestrielle du plan de continuité",
              "Intégration des retours utilisateurs sur l'efficacité des mesures de continuité",
              "Veille technologique pour l'amélioration constante des solutions"
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-sm border border-[#D4B483]/20 flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#87A28F] text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">Communication en situation de crise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Canaux de communication</h3>
            <ul className="space-y-3">
              {[
                "Dashboard d'état du service - Page publique indiquant l'état des systèmes",
                "Notifications in-app - Alertes directes aux utilisateurs concernés",
                "Centre d'assistance - Ligne dédiée pour les incidents critiques",
                "Communication par email - Pour les mises à jour détaillées",
                "Mises à jour sur réseaux sociaux - Pour les incidents majeurs affectant de nombreux utilisateurs"
              ].map((item, idx) => {
                const parts = item.split(' - ');
                return (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#D47D5A] mr-2 mt-1">•</span>
                    <span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{parts[0]}</span>
                      <span className="text-gray-600 dark:text-gray-400"> - {parts[1]}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Modèles de communication</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Pour chaque niveau de gravité, des modèles de communication sont préétablis pour garantir:
            </p>
            <ul className="space-y-2">
              {[
                "Transparence sur la nature de l'incident",
                "Clarté sur l'impact attendu",
                "Précision sur les mesures de contournement disponibles",
                "Engagement sur les délais de résolution estimés",
                "Fréquence des mises à jour"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D47D5A]/20 text-[#D47D5A] flex items-center justify-center mr-2 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">Formation et sensibilisation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Programme de formation</h3>
            <ul className="space-y-3">
              {[
                "Onboarding technique incluant les procédures de continuité",
                "Exercices pratiques trimestriels pour le personnel technique",
                "Webinaires pour les restaurants partenaires sur les procédures d'urgence",
                "Documentation accessible et régulièrement mise à jour"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#A7C2AF]">Kit de continuité restaurant</h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">Chaque établissement partenaire reçoit:</p>
            <ul className="space-y-3">
              {[
                "Guide simplifié des procédures d'urgence",
                "Coordonnées directes de l'équipe support",
                "Matériel de secours (oreillettes supplémentaires)",
                "Checklist de diagnostic de premier niveau"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-[#87A28F]/20 text-[#87A28F] dark:text-[#A7C2AF] flex items-center justify-center mr-2 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#D47D5A]">Conclusion</h2>
        <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border border-[#D4B483]/20">
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Le Plan de Continuité de Service Sotto représente notre engagement envers la fiabilité et la résilience. Dans un secteur où chaque minute d'interruption peut avoir un impact significatif sur l'expérience client et le chiffre d'affaires, notre approche proactive garantit que nos partenaires peuvent continuer à offrir un service d'excellence, même face à des défis techniques.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Conformément à notre philosophie de discrétion et d'efficacité, nos procédures de continuité sont conçues pour être aussi invisibles que possible pour le client final, tout en donnant à nos partenaires restaurateurs les outils nécessaires pour maintenir leurs opérations.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-[#1A2A40] text-white dark:bg-[#1A2A40]/80 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-[#D4B483]">Actions prioritaires:</h2>
          <ul className="space-y-3">
            {[
              "Valider ce plan avec l'équipe technique d'ici fin du mois",
              "Programmer le prochain exercice de simulation d'incident",
              "Mettre à jour la documentation partenaire avec les procédures simplifiées",
              "Réviser les SLAs en fonction des capacités actuelles de réponse"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D47D5A] text-white flex items-center justify-center mr-3 text-sm">
                  {idx + 1}
                </span>
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;