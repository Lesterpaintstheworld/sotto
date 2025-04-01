const ResourceContent = () => {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 border-l-4 border-[#D47D5A] pl-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#1A2A40]">Benchmark ROI Client</h1>
        <h2 className="text-xl md:text-2xl text-[#D47D5A] font-medium">
          Outil de mesure du retour sur investissement pour les restaurants clients
        </h2>
      </div>

      <section className="mb-10">
        <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-8 transform hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] border-b border-[#87A28F] pb-2">Introduction</h3>
          <p className="mb-4 leading-relaxed">
            Le Benchmark ROI Client est un outil stratégique développé pour l'équipe Sotto afin de quantifier et communiquer la valeur réelle apportée par notre solution vocale IA aux établissements de restauration. Dans un secteur où les marges sont souvent serrées et où chaque investissement doit être justifié, cet outil permet de démontrer concrètement l'impact économique positif de Sotto sur les opérations quotidiennes et la rentabilité globale des restaurants.
          </p>
          <p className="leading-relaxed">
            Ce document présente la méthodologie, les métriques clés et les processus d'analyse permettant d'établir un benchmark fiable du retour sur investissement pour nos clients actuels et potentiels. Il servira de référence interne pour l'équipe commerciale, le développement produit et la stratégie d'entreprise.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Objectifs du benchmark</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Quantifier précisément la valeur ajoutée de Sotto pour chaque profil de restaurant",
              "Comparer les performances avant/après implémentation sur des métriques concrètes",
              "Identifier les domaines où Sotto génère le plus d'impact financier",
              "Personnaliser l'argumentaire commercial avec des données spécifiques à chaque segment",
              "Optimiser l'évolution du produit en fonction des leviers de ROI les plus significatifs"
            ].map((objective, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-[#87A28F] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-[#D47D5A] rounded-full h-6 w-6 flex items-center justify-center text-white font-bold shrink-0 mr-3">
                    ✓
                  </div>
                  <p>{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D47D5A] pb-2">
          Méthodologie d'évaluation
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Collecte de données pré-implémentation</h3>
          <p className="mb-4 leading-relaxed">
            La première phase consiste à établir une base de référence solide avant l'implémentation de Sotto. Cette étape est cruciale pour mesurer avec précision les améliorations apportées.
          </p>
          
          <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Données opérationnelles à collecter</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-[#87A28F] rounded-lg">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Catégorie</th>
                  <th className="py-3 px-4 text-left">Métriques</th>
                  <th className="py-3 px-4 text-left">Source des données</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#87A28F]">
                  <td className="py-3 px-4 font-medium">Efficacité du service</td>
                  <td className="py-3 px-4">Temps moyen par table<br/>Nombre de tables servies/serveur<br/>Temps d'attente client</td>
                  <td className="py-3 px-4">Observations sur site<br/>Système de caisse existant<br/>Questionnaires clients</td>
                </tr>
                <tr className="border-t border-[#87A28F] bg-[#F5F5F0]">
                  <td className="py-3 px-4 font-medium">Gestion du personnel</td>
                  <td className="py-3 px-4">Heures de travail<br/>Coût horaire<br/>Rotation du personnel<br/>Temps de formation</td>
                  <td className="py-3 px-4">Plannings<br/>Données RH<br/>Entretiens management</td>
                </tr>
                <tr className="border-t border-[#87A28F]">
                  <td className="py-3 px-4 font-medium">Performance financière</td>
                  <td className="py-3 px-4">Chiffre d'affaires<br/>Ticket moyen<br/>Marge brute<br/>Coûts technologiques</td>
                  <td className="py-3 px-4">Documents comptables<br/>Système de caisse<br/>Factures fournisseurs</td>
                </tr>
                <tr className="border-t border-[#87A28F] bg-[#F5F5F0]">
                  <td className="py-3 px-4 font-medium">Expérience client</td>
                  <td className="py-3 px-4">Satisfaction globale<br/>Taux de retour<br/>Notes sur plateformes</td>
                  <td className="py-3 px-4">Enquêtes satisfaction<br/>Données de réservation<br/>Avis en ligne</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Processus de collecte</h4>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li className="leading-relaxed"><span className="font-medium">Entretien initial</span> avec le propriétaire/manager pour comprendre le contexte et les défis spécifiques</li>
            <li className="leading-relaxed"><span className="font-medium">Audit technique</span> des systèmes existants et de leurs coûts associés</li>
            <li className="leading-relaxed"><span className="font-medium">Observation sur site</span> pendant au moins deux services types (un calme, un chargé)</li>
            <li className="leading-relaxed"><span className="font-medium">Analyse documentaire</span> des données financières des 3 derniers mois minimum</li>
            <li className="leading-relaxed"><span className="font-medium">Enquête auprès du personnel</span> pour évaluer les points de friction actuels</li>
          </ol>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Mesure post-implémentation</h3>
          <p className="mb-4 leading-relaxed">
            Après l'installation et une période d'adaptation à Sotto (généralement 4 semaines), nous procédons à une nouvelle collecte de données suivant le même protocole pour assurer la comparabilité des résultats.
          </p>
          
          <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Périodes d'évaluation recommandées</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { period: "T+1 mois", focus: "Première évaluation (focus sur l'adoption et les gains rapides)" },
              { period: "T+3 mois", focus: "Évaluation intermédiaire (stabilisation des pratiques)" },
              { period: "T+6 mois", focus: "Évaluation complète (intégration des bénéfices à long terme)" },
              { period: "T+12 mois", focus: "Analyse annuelle (perspective sur un cycle complet)" }
            ].map((evaluation, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-[#D4B483] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="bg-[#1A2A40] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold shrink-0 mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#D47D5A]">{evaluation.period}</h5>
                    <p className="text-sm">{evaluation.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D47D5A] pb-2">
          Métriques clés de ROI
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Gains d'efficacité opérationnelle</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A] border-b border-[#87A28F] pb-2">
                Temps et productivité
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Réduction du temps de prise de commande</span> : Mesure en secondes/minutes par table</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Augmentation du nombre de tables par serveur</span> : Comparaison avant/après</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Diminution des erreurs de commande</span> : Pourcentage de réduction</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Optimisation des rotations de tables</span> : Nombre de services supplémentaires</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A] border-b border-[#87A28F] pb-2">
                Impact financier direct
              </h4>
              <div className="bg-white p-4 rounded border border-[#D4B483] font-mono text-sm">
                Gain financier = (Augmentation du nombre de tables servies × Ticket moyen)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (Réduction des erreurs × Coût moyen d'une erreur)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ (Temps économisé × Valeur horaire du personnel)
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Économies matérielles et structurelles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A] border-b border-[#87A28F] pb-2">
                Réduction des coûts d'équipement
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Économies sur les terminaux de caisse</span> : Coût des équipements évités ou remplacés</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Réduction des coûts de maintenance</span> : Comparaison des contrats avant/après</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Économie d'espace</span> : Valorisation de l'espace libéré pour tables supplémentaires</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A] border-b border-[#87A28F] pb-2">
                Optimisation des ressources humaines
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Réduction du temps de formation</span> : Heures économisées × coût horaire</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Diminution du turnover</span> : Économie sur coûts de recrutement et formation</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Flexibilité des équipes</span> : Valeur de l'adaptabilité accrue</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Amélioration de l'expérience client et impact sur le chiffre d'affaires</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A] border-b border-[#87A28F] pb-2">
                Satisfaction et fidélisation
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Augmentation de la satisfaction client</span> : Évolution des notes et commentaires</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Taux de retour client</span> : Évolution du pourcentage de clients réguliers</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Bouche-à-oreille positif</span> : Nouveaux clients attribués aux recommandations</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A] border-b border-[#87A28F] pb-2">
                Impact sur les ventes
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Évolution du ticket moyen</span> : Comparaison avant/après en pourcentage</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Augmentation des ventes additionnelles</span> : Efficacité des suggestions Sotto</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1A2A40] mr-2">•</div>
                  <p><span className="font-medium">Impact sur les heures creuses</span> : Amélioration du taux d'occupation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D47D5A] pb-2">
          Analyse comparative par segments
        </h2>
        
        <p className="mb-6 leading-relaxed">
          Pour affiner notre benchmark, nous segmentons les résultats selon plusieurs critères permettant une analyse plus précise et des comparaisons pertinentes.
        </p>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Segmentation par type d'établissement</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-[#87A28F] rounded-lg">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Type d'établissement</th>
                  <th className="py-3 px-4 text-left">Métriques prioritaires</th>
                  <th className="py-3 px-4 text-left">ROI moyen constaté</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#87A28F]">
                  <td className="py-3 px-4 font-medium">Restaurant gastronomique</td>
                  <td className="py-3 px-4">Expérience client<br/>Précision des commandes<br/>Discrétion du service</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-medium">22-28% annuel</td>
                </tr>
                <tr className="border-t border-[#87A28F] bg-[#F5F5F0]">
                  <td className="py-3 px-4 font-medium">Bistrot/Brasserie</td>
                  <td className="py-3 px-4">Rotation des tables<br/>Efficacité du service<br/>Upselling</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-medium">30-35% annuel</td>
                </tr>
                <tr className="border-t border-[#87A28F]">
                  <td className="py-3 px-4 font-medium">Fast casual</td>
                  <td className="py-3 px-4">Rapidité de service<br/>Réduction des erreurs<br/>Optimisation du personnel</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-medium">35-40% annuel</td>
                </tr>
                <tr className="border-t border-[#87A28F] bg-[#F5F5F0]">
                  <td className="py-3 px-4 font-medium">Restaurant d'hôtel</td>
                  <td className="py-3 px-4">Personnalisation<br/>Service multilingue<br/>Intégration systèmes</td>
                  <td className="py-3 px-4 text-[#D47D5A] font-medium">25-30% annuel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Facteurs d'influence sur le ROI</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { factor: "Taille de l'établissement", description: "Économies d'échelle plus importantes dans les grands établissements" },
              { factor: "Niveau de digitalisation préalable", description: "Impact plus visible pour les établissements peu digitalisés" },
              { factor: "Complexité du menu", description: "Gain supérieur pour les cartes étendues ou changeantes" },
              { factor: "Turnover initial du personnel", description: "ROI amplifié dans les structures à forte rotation" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border-l-4 border-[#D4B483] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-medium text-[#1A2A40] mb-1">{item.factor}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D47D5A] pb-2">
          Visualisation et communication des résultats
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Dashboard ROI personnalisé</h3>
          
          <p className="mb-4">Pour chaque client, nous générons un tableau de bord personnalisé présentant:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Synthèse des gains", description: "Vue consolidée des économies et revenus supplémentaires" },
              { title: "Comparaison temporelle", description: "Évolution des métriques clés dans le temps" },
              { title: "Benchmark sectoriel", description: "Positionnement par rapport aux moyennes du segment" },
              { title: "Projections", description: "Estimations de ROI à long terme (1, 3 et 5 ans)" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F5F5F0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#87A28F]"
              >
                <div className="flex items-center mb-2">
                  <div className="bg-[#D47D5A] h-3 w-3 rounded-full mr-2"></div>
                  <h4 className="font-medium text-[#1A2A40]">{item.title}</h4>
                </div>
                <p className="text-sm ml-5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Présentation des résultats au client</h3>
          
          <p className="mb-4">La communication des résultats suit les principes de notre identité de marque:</p>
          
          <div className="bg-white p-5 rounded-lg border border-[#D4B483] shadow-sm">
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2">•</div>
                <p>Présentation épurée et élégante</p>
              </li>
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2">•</div>
                <p>Focus sur l'impact humain et l'expérience</p>
              </li>
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2">•</div>
                <p>Données précises mais accessibles</p>
              </li>
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2">•</div>
                <p>Visualisations claires privilégiées au texte dense</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D47D5A] pb-2">
          Méthodologie d'amélioration continue
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Feedback loop avec le développement produit</h3>
            <p className="mb-4">Les insights générés par le benchmark ROI alimentent directement notre roadmap produit:</p>
            
            <ol className="space-y-4">
              {[
                { title: "Identification des fonctionnalités à fort impact", description: "Priorisation des développements maximisant le ROI" },
                { title: "Détection des points de friction", description: "Résolution rapide des obstacles à la valeur" },
                { title: "Opportunités d'expansion", description: "Nouvelles fonctionnalités suggérées par l'analyse des données" }
              ].map((item, index) => (
                <li key={index} className="bg-[#F5F5F0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-[#1A2A40] rounded-full h-6 w-6 flex items-center justify-center text-white font-bold shrink-0 mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#D47D5A]">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Évolution du modèle de benchmark</h3>
            <p className="mb-4">Le modèle d'évaluation lui-même fait l'objet d'une amélioration continue:</p>
            
            <div className="space-y-4">
              {[
                "Révision trimestrielle des métriques et de leur pertinence",
                "Ajout de nouvelles dimensions d'analyse selon l'évolution du produit",
                "Affinage des benchmarks sectoriels avec l'augmentation de notre base de données"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white p-3 rounded-lg border-l-4 border-[#87A28F] shadow-sm">
                  <div className="bg-[#D47D5A] rounded-full h-2 w-2 mr-3"></div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D47D5A] pb-2">
          Utilisation stratégique des données de ROI
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#F5F5F0] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] border-b border-[#87A28F] pb-2">Applications commerciales</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2 font-bold">→</div>
                <p><span className="font-medium">Démonstration de valeur</span> basée sur des cas similaires au prospect</p>
              </li>
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2 font-bold">→</div>
                <p><span className="font-medium">Calculateur de ROI prévisionnel</span> pour les nouveaux clients potentiels</p>
              </li>
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2 font-bold">→</div>
                <p><span className="font-medium">Témoignages chiffrés</span> de clients existants dans le même segment</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#F5F5F0] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] border-b border-[#87A28F] pb-2">Tarification et packaging</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2 font-bold">→</div>
                <p><span className="font-medium">Alignement de la tarification</span> sur la valeur démontrée</p>
              </li>
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2 font-bold">→</div>
                <p><span className="font-medium">Création de packages</span> adaptés aux besoins spécifiques de chaque segment</p>
              </li>
              <li className="flex items-start">
                <div className="text-[#D47D5A] mr-2 font-bold">→</div>
                <p><span className="font-medium">Modèles de success fees</span> basés sur les performances mesurées</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] border-b-2 border-[#D47D5A] pb-2">
          Conclusion
        </h2>
        
        <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md mb-8">
          <p className="mb-4 leading-relaxed">
            Le Benchmark ROI Client constitue un outil stratégique essentiel pour Sotto, permettant non seulement de démontrer objectivement la valeur de notre solution, mais aussi d'orienter nos décisions produit et commerciales. En quantifiant précisément l'impact économique de notre système vocal IA, nous renforçons notre proposition de valeur et créons une relation transparente avec nos clients restaurateurs.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Prochaines étapes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Automatisation accrue de la collecte de données via notre API",
              "Intégration des données de benchmark dans notre plateforme d'administration",
              "Développement d'un calculateur prévisionnel pour les prospects",
              "Création d'une bibliothèque de cas d'usage segmentés par type d'établissement"
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-[#D4B483] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-[#1A2A40] rounded-full h-6 w-6 flex items-center justify-center text-white font-bold shrink-0 mr-3 animate-float">
                    ↗
                  </div>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12 pt-6 border-t border-[#87A28F] text-center text-sm text-gray-500">
        <p className="italic">Document interne - Pour usage par l'équipe Sotto uniquement</p>
        <p>Dernière mise à jour: {currentDate}</p>
      </div>
    </div>
  );
};

export default ResourceContent;