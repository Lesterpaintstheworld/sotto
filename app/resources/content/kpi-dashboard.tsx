const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 resource-content">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40]">
          KPI Dashboard Demo
        </h1>
        <div className="inline-block bg-[#D47D5A] h-1 w-24 rounded-full mb-6"></div>
        <div className="flex justify-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#1A2A40] text-white">
            tools
          </span>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40]">Introduction</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-4">
            Le tableau de bord Sotto représente une véritable révolution dans la manière dont vous analysez les performances de votre établissement. Contrairement aux systèmes traditionnels qui vous noient sous des données brutes difficiles à interpréter, notre dashboard épuré vous offre une vision claire et stratégique de tous les indicateurs clés de performance (KPI) qui impactent réellement votre activité.
          </p>
          <p className="text-lg leading-relaxed">
            Conçu pour libérer votre attention des écrans tout en vous donnant accès aux informations essentielles, ce tableau de bord s'intègre parfaitement dans l'écosystème Sotto. Il transforme les données collectées par notre système vocal IA en insights actionnables, vous permettant de prendre des décisions éclairées basées sur des informations précises plutôt que sur des intuitions.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40]">Vue d'ensemble du dashboard</h2>
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg leading-relaxed">
            Le tableau de bord Sotto se distingue par son interface minimaliste qui met l'accent sur la lisibilité et l'accessibilité des données. Nous avons délibérément évité la surcharge d'informations pour vous permettre de vous concentrer sur ce qui compte vraiment.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-5 text-[#1A2A40]">Design et ergonomie</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Interface épurée", description: "utilisant notre palette de couleurs signature (bleu profond, terracotta, blanc cassé)" },
              { title: "Visualisations intuitives", description: "qui communiquent l'information sans effort cognitif" },
              { title: "Navigation contextuelle", description: "adaptée à vos besoins spécifiques" },
              { title: "Responsive design", description: "fonctionnant parfaitement sur tous les appareils" },
              { title: "Mode sombre", description: "pour une utilisation confortable en soirée" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A2A40]/60 rounded-lg shadow-md p-5 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <h4 className="font-bold text-[#D47D5A] mb-2">{item.title}</h4>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-5 text-[#1A2A40]">Personnalisation</h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-xl p-6 shadow-md">
            <p className="text-lg mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Chaque restaurant étant unique, nous avons conçu le dashboard pour qu'il s'adapte à vos priorités :</p>
            <ul className="space-y-3">
              {[
                "Modules réorganisables selon vos préférences",
                "Métriques personnalisables en fonction de vos objectifs",
                "Alertes configurables pour les indicateurs critiques",
                "Comparaisons avec des périodes précédentes ajustables"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#D47D5A] text-white mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-[#1A2A40]">Sections principales du dashboard</h2>
        
        <div className="space-y-10">
          <div className="bg-gradient-to-r from-[#1A2A40]/5 to-[#1A2A40]/10 dark:from-[#1A2A40]/40 dark:to-[#1A2A40]/60 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#1A2A40]">1. Vue d'ensemble des performances</h3>
            <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Ce module central vous donne instantanément une vision globale de la santé de votre établissement avec :</p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/70 rounded-lg overflow-hidden">
                <thead className="bg-[#1A2A40] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Indicateur</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Bénéfice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    {
                      indicateur: "Chiffre d'affaires",
                      description: "Revenus totaux avec comparaison à la période précédente",
                      benefice: "Évaluation immédiate de la performance globale"
                    },
                    {
                      indicateur: "Ticket moyen",
                      description: "Montant moyen dépensé par client",
                      benefice: "Mesure de l'efficacité des ventes additionnelles"
                    },
                    {
                      indicateur: "Taux d'occupation",
                      description: "Pourcentage de tables occupées durant les services",
                      benefice: "Optimisation de la capacité d'accueil"
                    },
                    {
                      indicateur: "Rotation des tables",
                      description: "Nombre moyen de services par table",
                      benefice: "Amélioration de l'efficacité opérationnelle"
                    },
                    {
                      indicateur: "Marge brute",
                      description: "Rentabilité après coût des matières premières",
                      benefice: "Contrôle des coûts et de la profitabilité"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/90 transition-colors">
                      <td className="py-3 px-4 text-[#D47D5A] font-medium">{row.indicateur}</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">{row.description}</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">{row.benefice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Un graphique élégant visualise ces données sur différentes périodes (jour, semaine, mois, trimestre) pour identifier facilement les tendances.</p>
          </div>

          <div className="bg-gradient-to-r from-[#1A2A40]/5 to-[#1A2A40]/10 dark:from-[#1A2A40]/40 dark:to-[#1A2A40]/60 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#1A2A40]">2. Analyse des ventes</h3>
            <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Cette section décompose vos ventes de manière détaillée mais digeste :</p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Performances par catégorie de produits",
                  items: [
                    "Visualisation des ventes par famille (entrées, plats, desserts, boissons)",
                    "Identification des catégories sous-performantes ou surperformantes"
                  ]
                },
                {
                  title: "Top 5 des produits",
                  items: [
                    "Classement des produits les plus vendus",
                    "Analyse des marges par produit",
                    "Suggestions d'optimisation du menu"
                  ]
                },
                {
                  title: "Analyse horaire",
                  items: [
                    "Répartition du chiffre d'affaires par tranche horaire",
                    "Identification des heures creuses et des pics d'activité",
                    "Recommandations pour l'optimisation des plannings"
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-sm">
                  <h4 className="font-bold text-[#D47D5A] mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#87A28F] mr-2">•</span>
                        <span className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1A2A40]/5 to-[#1A2A40]/10 dark:from-[#1A2A40]/40 dark:to-[#1A2A40]/60 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#1A2A40]">3. Efficacité opérationnelle</h3>
            <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Cette section, particulièrement enrichie par les données collectées via notre système vocal, offre des insights uniques sur l'efficacité de votre équipe :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Temps de service moyen : durée entre la commande et le service, par type de plat",
                "Délai entre les tables : temps moyen d'installation d'une nouvelle table",
                "Efficacité par serveur : analyse comparative non punitive mais formative",
                "Taux d'erreur de commande : pourcentage de commandes nécessitant des corrections",
                "Temps d'attente client : durée moyenne avant la prise de commande"
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-sm border-l-4 border-[#87A28F]">
                  <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Un graphique radar permet de visualiser ces métriques par rapport à vos objectifs et aux moyennes du secteur.</p>
          </div>

          <div className="bg-gradient-to-r from-[#1A2A40]/5 to-[#1A2A40]/10 dark:from-[#1A2A40]/40 dark:to-[#1A2A40]/60 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#1A2A40]">4. Gestion des stocks et coûts</h3>
            <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Sotto intègre les données de commandes vocales avec votre gestion des stocks pour vous offrir :</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                "Taux de rotation des stocks avec alertes sur les produits à risque",
                "Coût des matières par catégorie et évolution dans le temps",
                "Prévisions d'approvisionnement basées sur l'historique des ventes",
                "Alertes de rupture anticipées grâce à l'IA prédictive",
                "Analyse des pertes et gaspillage avec suggestions de réduction"
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#D4B483] mr-3 flex-shrink-0"></div>
                  <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Un tableau de bord visuel utilise notre code couleur intuitif pour identifier rapidement les points d'attention.</p>
          </div>

          <div className="bg-gradient-to-r from-[#1A2A40]/5 to-[#1A2A40]/10 dark:from-[#1A2A40]/40 dark:to-[#1A2A40]/60 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[#1A2A40]">5. Satisfaction client</h3>
            <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Cette section unique combine les données quantitatives et qualitatives pour mesurer réellement la satisfaction :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                "Net Promoter Score calculé à partir des enquêtes optionnelles",
                "Temps d'attente perçu versus temps réel",
                "Analyse des retours plats avec catégorisation des motifs",
                "Taux de fidélisation et fréquence de visite des clients réguliers",
                "Commentaires clients avec analyse de sentiment par IA"
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-sm border-t-4 border-[#D47D5A]">
                  <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Un graphique d'évolution permet de suivre ces indicateurs dans le temps et d'identifier l'impact de vos actions correctives.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-[#1A2A40]">Fonctionnalités avancées</h2>
        
        <div className="space-y-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#1A2A40] text-white p-4">
              <h3 className="text-xl font-semibold">Intelligence prédictive</h3>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 p-5">
              <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Notre dashboard ne se contente pas d'analyser le passé, il vous aide à anticiper l'avenir :</p>
              <ul className="space-y-3">
                {[
                  "Prévisions d'affluence basées sur l'historique, la météo et les événements locaux",
                  "Suggestions de staffing adaptées aux prévisions d'activité",
                  "Alertes de tendances identifiant les évolutions significatives",
                  "Recommandations d'optimisation du menu basées sur la popularité et les marges"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#87A28F] text-white mr-3 flex-shrink-0 text-xs">
                      {index + 1}
                    </span>
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#D47D5A] text-white p-4">
              <h3 className="text-xl font-semibold">Rapports automatisés</h3>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 p-5">
              <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Pour vous libérer davantage des écrans, Sotto peut :</p>
              <ul className="space-y-3">
                {[
                  "Générer des rapports hebdomadaires et mensuels synthétiques",
                  "Envoyer des alertes personnalisées sur les KPI critiques",
                  "Programmer l'envoi de rapports par email aux parties prenantes",
                  "Exporter les données dans différents formats pour vos besoins comptables"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">→</span>
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#87A28F] text-white p-4">
              <h3 className="text-xl font-semibold">Mode vocal</h3>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 p-5">
              <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Fidèle à notre philosophie, le dashboard est également accessible via des commandes vocales :</p>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] rounded-lg p-4 font-mono text-sm">
                <p className="mb-2"><span className="text-[#D47D5A] font-bold">Vous:</span> <span className="text-[#1A2A40] dark:text-[#F5F5F0]">"Sotto, quel a été le chiffre d'affaires d'hier comparé à la semaine dernière?"</span></p>
                <p><span className="text-[#87A28F] font-bold">Sotto:</span> <span className="text-[#1A2A40] dark:text-[#F5F5F0]">"Hier, vous avez réalisé 3 420€, soit une hausse de 12% par rapport au même jour la semaine dernière. Votre ticket moyen était de 42€, en augmentation de 3€."</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40]">Intégration à l'écosystème Sotto</h2>
        <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Le dashboard s'intègre parfaitement avec les autres composants de l'écosystème Sotto :</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { 
              title: "Synchronisation en temps réel", 
              description: "avec le système vocal pour des données toujours à jour",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A2A40] dark:text-[#F5F5F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )
            },
            { 
              title: "Connexion avec la caisse intelligente", 
              description: "pour une vision financière complète",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A2A40] dark:text-[#F5F5F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            { 
              title: "Intégration avec les outils de gestion des stocks", 
              description: "pour une analyse coûts-revenus précise",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A2A40] dark:text-[#F5F5F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )
            },
            { 
              title: "Compatibilité avec les plateformes de livraison", 
              description: "pour une vision unifiée de toutes vos sources de revenus",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A2A40] dark:text-[#F5F5F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <div key={index} className="flex bg-white dark:bg-[#1A2A40]/60 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="mr-4 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#D47D5A] mb-1">{item.title}</h4>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40]">Témoignages de restaurateurs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/60 rounded-xl p-6 shadow-md relative">
            <div className="absolute -top-3 -left-3 text-[#D47D5A] text-5xl">"</div>
            <blockquote className="relative z-10 pt-4">
              <p className="italic mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                Le dashboard Sotto a transformé ma façon de gérer mon établissement. Je passe moins de temps devant les écrans tout en ayant une meilleure compréhension de mes performances. Les alertes prédictives m'ont permis d'optimiser mes commandes et de réduire mon gaspillage de 23%.
              </p>
              <footer className="font-semibold">
                <span className="text-[#D47D5A]">Marie L.,</span> <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Propriétaire de bistrot, Lyon</span>
              </footer>
            </blockquote>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/60 rounded-xl p-6 shadow-md relative">
            <div className="absolute -top-3 -left-3 text-[#D47D5A] text-5xl">"</div>
            <blockquote className="relative z-10 pt-4">
              <p className="italic mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                Avant Sotto, j'avais l'impression de naviguer à l'aveugle. Maintenant, je prends des décisions basées sur des données concrètes. Le plus impressionnant est la précision des prévisions d'affluence qui me permet d'ajuster mon personnel en conséquence.
              </p>
              <footer className="font-semibold">
                <span className="text-[#D47D5A]">Thomas B.,</span> <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Chef restaurateur, Bordeaux</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40]">Conclusion</h2>
        <div className="bg-gradient-to-r from-[#1A2A40]/10 to-[#D47D5A]/10 dark:from-[#1A2A40]/60 dark:to-[#D47D5A]/30 rounded-xl p-6 shadow-md">
          <p className="text-lg leading-relaxed mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Le KPI Dashboard Sotto représente bien plus qu'un simple outil d'analyse - c'est un véritable copilote stratégique pour votre établissement. En transformant des données complexes en insights actionnables, il vous permet de prendre des décisions éclairées tout en vous libérant du temps pour vous concentrer sur l'essentiel : l'expérience humaine et gastronomique que vous offrez à vos clients.
          </p>
          <p className="text-lg leading-relaxed text-[#1A2A40] dark:text-[#F5F5F0]">
            Contrairement aux solutions traditionnelles qui vous enchaînent aux écrans, notre dashboard s'intègre naturellement dans votre flux de travail, respectant notre engagement à recentrer la restauration sur l'humain plutôt que sur la technologie.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40]">Pour aller plus loin</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Demandez une démo personnalisée",
              description: "pour explorer le dashboard avec vos propres données",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              color: "bg-[#1A2A40]"
            },
            {
              title: "Participez à nos webinaires mensuels",
              description: "sur l'optimisation des performances en restauration",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              ),
              color: "bg-[#D47D5A]"
            },
            {
              title: "Consultez nos guides pratiques",
              description: "sur l'interprétation des KPI spécifiques à votre type d'établissement",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              color: "bg-[#87A28F]"
            }
          ].map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`${item.color} p-5 flex justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 p-5">
                <h3 className="font-bold text-xl mb-2 text-[#1A2A40] dark:text-[#F5F5F0] group-hover:text-[#D47D5A] transition-colors duration-300">{item.title}</h3>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center p-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-lg">
          <p className="italic">
            <span className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Le dashboard Sotto est inclus sans surcoût dans votre abonnement Sotto et accessible dès l'installation du système.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;