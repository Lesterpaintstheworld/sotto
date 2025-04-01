const ResourceContent = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Groupe Saveurs : Standardisation réussie sur 12 établissements
        </h1>
        <p className="text-lg italic text-[#87A28F] dark:text-[#D4B483]">
          Comment une chaîne de restaurants a uniformisé son service et optimisé ses opérations avec Sotto.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D47D5A] pb-2 mb-6">
          Introduction
        </h2>
        <p className="mb-6">
          Le Groupe Saveurs, acteur reconnu de la restauration française avec 12 établissements répartis dans l'Hexagone, 
          faisait face à un défi commun aux chaînes en expansion : maintenir une qualité de service constante tout en préservant 
          l'identité unique de chaque restaurant. Avec des concepts variés allant du bistrot parisien à la brasserie contemporaine, 
          le groupe cherchait une solution capable d'harmoniser ses opérations sans sacrifier l'authenticité de l'expérience client.
        </p>
        <p>
          Ce cas d'étude explore comment l'adoption de la technologie vocale Sotto a permis au Groupe Saveurs de standardiser 
          ses processus, d'améliorer la formation de son personnel et d'optimiser ses performances opérationnelles tout en 
          renforçant l'expérience humaine au cœur de sa philosophie de service.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D47D5A] pb-2 mb-6">
          Le contexte : les défis d'une croissance multi-établissements
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Une expansion qui complexifie la gestion
          </h3>
          <p className="mb-6">
            Fondé en 2010 avec un premier restaurant à Lyon, le Groupe Saveurs a connu une croissance régulière pour atteindre 
            12 établissements en 2023. Cette expansion a engendré plusieurs défis opérationnels :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Disparité des processus : Chaque restaurant avait développé ses propres méthodes de travail",
              "Incohérence de l'expérience client : La qualité de service variait significativement d'un établissement à l'autre",
              "Multiplication des systèmes : Différentes solutions technologiques coexistaient (caisses, logiciels de gestion, tablettes)",
              "Formation complexifiée : L'intégration des nouveaux employés nécessitait des formations spécifiques à chaque établissement",
              "Difficultés de reporting : L'analyse consolidée des performances était laborieuse"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]/50"
              >
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Les limites des solutions traditionnelles
          </h3>
          <p className="mb-6">
            Avant Sotto, le Groupe Saveurs avait tenté plusieurs approches pour standardiser ses opérations :
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-[#87A28F]/30 rounded-lg overflow-hidden">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/80">
                <tr>
                  <th className="py-3 px-4 text-left">Solution testée</th>
                  <th className="py-3 px-4 text-left">Limites rencontrées</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#87A28F]/20">
                  <td className="py-3 px-4 font-medium">Logiciel de caisse unifié</td>
                  <td className="py-3 px-4">Interface peu intuitive, résistance du personnel, coûts élevés</td>
                </tr>
                <tr className="border-b border-[#87A28F]/20 bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/80">
                  <td className="py-3 px-4 font-medium">Tablettes pour les serveurs</td>
                  <td className="py-3 px-4">Casse fréquente, batterie limitée, distraction du personnel</td>
                </tr>
                <tr className="border-b border-[#87A28F]/20">
                  <td className="py-3 px-4 font-medium">Manuels de procédures</td>
                  <td className="py-3 px-4">Peu consultés, rapidement obsolètes, difficiles à mettre à jour</td>
                </tr>
                <tr className="bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/80">
                  <td className="py-3 px-4 font-medium">Formation centralisée</td>
                  <td className="py-3 px-4">Coûteuse, chronophage, difficulté à maintenir les standards dans la durée</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <blockquote className="italic border-l-4 border-[#D47D5A] pl-4 py-2 mb-6 bg-[#F5F5F0]/30 dark:bg-[#1A2A40]/40 rounded-r">
            <p>
              "Nous étions confrontés au paradoxe de vouloir standardiser nos processus tout en préservant l'authenticité de chaque établissement. 
              Les solutions technologiques traditionnelles créaient une barrière avec nos clients, exactement l'inverse de notre philosophie 
              centrée sur l'humain."
            </p>
            <footer className="text-right text-sm mt-2 text-[#87A28F] dark:text-[#D4B483]">
              — Marie Deschamps, Directrice des Opérations du Groupe Saveurs
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D47D5A] pb-2 mb-6">
          La solution : l'approche Sotto pour une standardisation invisible
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Une implémentation progressive et adaptée
          </h3>
          <p className="mb-6">
            Le déploiement de Sotto au sein du Groupe Saveurs s'est effectué en trois phases sur 8 mois :
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-2">Phase pilote (2 restaurants, 2 mois)</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Audit initial des processus existants</li>
                <li>Adaptation du vocabulaire Sotto aux spécificités du groupe</li>
                <li>Formation intensive des équipes pilotes</li>
                <li>Collecte de feedback et ajustements</li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-2">Phase d'expansion (5 restaurants supplémentaires, 3 mois)</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Intégration des apprentissages de la phase pilote</li>
                <li>Formation par les ambassadeurs des restaurants pilotes</li>
                <li>Personnalisation fine pour chaque concept de restaurant</li>
                <li>Développement d'indicateurs de performance spécifiques</li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-2">Déploiement complet (5 derniers restaurants, 3 mois)</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Standardisation finalisée des processus</li>
                <li>Intégration complète avec les systèmes de gestion existants</li>
                <li>Formation accélérée grâce à l'expérience accumulée</li>
                <li>Mise en place du tableau de bord unifié</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Personnalisation par concept tout en maintenant les standards
          </h3>
          <p className="mb-6">
            L'un des atouts majeurs de Sotto pour le Groupe Saveurs a été sa capacité à s'adapter aux différents concepts de restaurants 
            tout en maintenant un socle commun de processus :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Vocabulaire adapté",
                desc: "Chaque concept utilise sa propre terminologie (ex: \"ardoise\" vs \"menu du jour\")"
              },
              {
                title: "Flux de service personnalisés",
                desc: "Adaptation aux spécificités de chaque établissement (service à table, au comptoir, mixte)"
              },
              {
                title: "Intégration des spécialités",
                desc: "Configuration des suggestions et recommandations selon l'identité culinaire"
              },
              {
                title: "Personnalité vocale ajustée",
                desc: "Ton plus formel pour les établissements haut de gamme, plus décontracté pour les bistrots"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-1">{item.title}</h4>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D47D5A] pb-2 mb-6">
          Résultats : une transformation mesurable et durable
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Impacts opérationnels quantifiables
          </h3>
          <p className="mb-6">
            Après 12 mois d'utilisation complète sur l'ensemble des établissements, le Groupe Saveurs a mesuré des améliorations significatives :
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                metric: "35%",
                desc: "Réduction du temps de formation des nouveaux employés",
                color: "bg-[#D47D5A]"
              },
              {
                metric: "28%",
                desc: "Diminution des erreurs de commande",
                color: "bg-[#87A28F]"
              },
              {
                metric: "18%",
                desc: "Augmentation du ticket moyen grâce aux suggestions contextuelles",
                color: "bg-[#1A2A40]"
              },
              {
                metric: "22%",
                desc: "Amélioration de la rotation des tables aux heures de pointe",
                color: "bg-[#D4B483]"
              },
              {
                metric: "40%",
                desc: "Réduction des coûts matériels (tablettes, terminaux, maintenance)",
                color: "bg-[#D47D5A]"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-float"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`${item.color} h-2`}></div>
                <div className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#1A2A40] dark:text-[#D4B483] mb-2">{item.metric}</p>
                  <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Témoignages des équipes
          </h3>
          
          <div className="space-y-6 mb-6">
            <blockquote className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border-l-4 border-[#D47D5A]">
              <p className="italic mb-4">
                "Avant Sotto, je devais jongler entre les tables, la caisse et les allers-retours en cuisine. 
                Maintenant, je reste présent avec mes clients tout en communiquant instantanément avec l'équipe. 
                C'est comme avoir un assistant personnel discret."
              </p>
              <footer className="text-right font-medium text-[#87A28F] dark:text-[#D4B483]">
                — Thomas, Chef de rang, La Table de Lyon
              </footer>
            </blockquote>
            
            <blockquote className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border-l-4 border-[#87A28F]">
              <p className="italic mb-4">
                "En tant que manager multi-sites, Sotto m'a donné une visibilité que je n'avais jamais eue. 
                Je peux analyser les performances de chaque établissement selon les mêmes critères et identifier 
                rapidement les bonnes pratiques à partager."
              </p>
              <footer className="text-right font-medium text-[#87A28F] dark:text-[#D4B483]">
                — Julien, Directeur régional, Groupe Saveurs
              </footer>
            </blockquote>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Standardisation réussie sans uniformisation forcée
          </h3>
          <p className="mb-6">
            L'un des succès majeurs du projet a été d'atteindre une standardisation efficace tout en préservant l'identité de chaque établissement :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Processus unifiés : Communication cuisine-salle, gestion des commandes, additions",
              "Reporting consolidé : Tableaux de bord identiques facilitant l'analyse comparative",
              "Formation harmonisée : Nouveaux employés opérationnels plus rapidement",
              "Expérience client cohérente : Niveau de service constant quel que soit l'établissement",
              "Préservation des spécificités : Chaque restaurant conserve son identité culinaire et son ambiance"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D47D5A] pb-2 mb-6">
          Les défis surmontés et les leçons apprises
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Adaptation à des environnements variés
          </h3>
          <p className="mb-6">
            Le déploiement dans 12 établissements aux configurations différentes a nécessité des ajustements spécifiques :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "Acoustique variable",
                desc: "Optimisation des paramètres de reconnaissance vocale selon l'architecture"
              },
              {
                title: "Configurations WiFi sur mesure",
                desc: "Cartographie précise pour assurer une couverture optimale"
              },
              {
                title: "Adaptation aux équipes existantes",
                desc: "Approche personnalisée selon l'ancienneté et la familiarité technologique"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-2">{item.title}</h4>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
            Gestion du changement
          </h3>
          <p className="mb-6">
            La transition vers un système vocal a représenté un changement significatif pour les équipes :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Ambassadeurs Sotto",
                desc: "Identification de leaders naturels dans chaque établissement"
              },
              {
                title: "Formation par paliers",
                desc: "Introduction progressive des fonctionnalités"
              },
              {
                title: "Feedback continu",
                desc: "Sessions régulières d'échange et d'amélioration"
              },
              {
                title: "Valorisation des succès",
                desc: "Célébration des améliorations et partage des réussites"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mr-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#D47D5A] text-white rounded-full">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-1">{item.title}</h4>
                  <p className="text-[#1A2A40] dark:text-[#F5F5F0]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D47D5A] pb-2 mb-6">
          Perspectives d'évolution
        </h2>
        <p className="mb-6">
          Fort de cette standardisation réussie, le Groupe Saveurs envisage plusieurs évolutions avec Sotto :
        </p>
        
        <div className="space-y-6 mb-6">
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#D4B483] mb-3">
              1. Développement de l'analytique prédictive
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Anticipation des besoins en personnel selon les périodes</li>
              <li>Prévisions d'approvisionnement optimisées</li>
              <li>Suggestions d'ajustements de carte basées sur les performances</li>
            </ul>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#D4B483] mb-3">
              2. Intégration fournisseurs
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Commandes automatisées basées sur les niveaux de stock</li>
              <li>Suivi en temps réel des livraisons</li>
              <li>Alertes proactives sur les ruptures potentielles</li>
            </ul>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#D4B483] mb-3">
              3. Programme de fidélité vocal
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reconnaissance des clients réguliers</li>
              <li>Personnalisation des recommandations selon l'historique</li>
              <li>Expérience VIP discrète et naturelle</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D47D5A] pb-2 mb-6">
          Conclusion : l'humain au cœur de la standardisation
        </h2>
        <p className="mb-6">
          La réussite du Groupe Saveurs avec Sotto démontre qu'il est possible de standardiser les opérations d'une chaîne de restaurants 
          sans sacrifier l'authenticité ni l'expérience humaine. En éliminant les écrans et en fluidifiant la communication, 
          la technologie vocale a permis de recentrer l'attention sur l'essentiel : le service client et l'art culinaire.
        </p>
        
        <blockquote className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/80 p-6 rounded-lg shadow-md mb-6">
          <p className="italic mb-4">
            "Avec Sotto, nous avons trouvé le parfait équilibre entre l'efficacité opérationnelle d'une chaîne et l'âme d'un restaurant indépendant. 
            Notre personnel est plus présent, nos processus plus fluides, et paradoxalement, en ajoutant cette technologie, 
            nous avons rendu nos établissements plus humains."
          </p>
          <footer className="text-right font-medium text-[#F5F5F0] dark:text-[#F5F5F0]">
            — Pierre Moreau, fondateur du Groupe Saveurs
          </footer>
        </blockquote>
      </section>

      <div className="mt-12 p-6 bg-[#1A2A40]/10 dark:bg-[#1A2A40]/40 rounded-lg border border-[#87A28F]/30">
        <p className="italic mb-4">
          Vous dirigez plusieurs établissements et souhaitez explorer comment Sotto peut vous aider à standardiser vos opérations 
          tout en préservant l'identité unique de chaque restaurant ? 
          <a href="https://sotto.ai/contact" className="text-[#D47D5A] hover:text-[#D4B483] ml-1 font-medium">
            Contactez notre équipe
          </a> pour une démonstration personnalisée.
        </p>
      </div>
    </article>
  );
};

export default ResourceContent;