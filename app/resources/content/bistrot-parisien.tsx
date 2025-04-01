const ResourceContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
        Le Bistrot Parisien : +15% de chiffre d'affaires
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Introduction</h2>
        <p className="text-lg leading-relaxed mb-6">
          Dans le quartier animé du Marais à Paris, Le Bistrot Parisien représente l'essence de la gastronomie française traditionnelle. 
          Établissement familial de 45 couverts dirigé par les frères Laurent, ce restaurant proposant une cuisine raffinée faisait face 
          à des défis opérationnels qui limitaient sa croissance malgré une réputation culinaire excellente. Cette étude de cas détaille 
          comment l'intégration du système vocal Sotto a non seulement résolu leurs problèmes opérationnels mais a également transformé 
          leur modèle économique, aboutissant à une augmentation significative de 15% de leur chiffre d'affaires en seulement quatre mois.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
          Le contexte : un restaurant d'excellence face à des défis modernes
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Profil de l'établissement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Type de cuisine", content: "Gastronomie française traditionnelle revisitée" },
              { title: "Capacité", content: "45 couverts en intérieur, 20 en terrasse (saisonnière)" },
              { title: "Personnel", content: "3 serveurs, 1 chef sommelier, 4 personnes en cuisine" },
              { title: "Ticket moyen", content: "65€" },
              { title: "Clientèle", content: "Locale (40%), touristes (35%), clientèle d'affaires (25%)" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-md border border-[#D4B483]/20 hover:border-[#D4B483]/40 transition-all duration-300 hover:shadow-lg group"
              >
                <h4 className="font-medium text-[#D47D5A] mb-1 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Défis identifiés avant l'implémentation</h3>
          <p className="mb-4">
            Le Bistrot Parisien, malgré sa qualité culinaire reconnue, rencontrait plusieurs obstacles qui freinaient son développement :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Temps d'attente prolongés aux heures de pointe, créant de la frustration chez les clients",
              "Communication difficile entre la salle et la cuisine, entraînant des erreurs de commande",
              "Expérience client fragmentée par la présence visible de technologies (tablettes, caisses)",
              "Rotation des tables insuffisante, limitant le nombre de services par soirée",
              "Formation longue pour les nouveaux serveurs, particulièrement sur le système d'encaissement"
            ].map((challenge, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-md border-l-4 border-[#D47D5A] hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="flex items-start">
                  <span className="text-[#D47D5A] font-bold mr-2">{index + 1}.</span>
                  <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-[#87A28F] pl-4 py-2 italic bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/30 rounded-r-lg mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              "Nos serveurs passaient plus de temps à manipuler les tablettes qu'à interagir avec nos clients. 
              Ce n'était pas l'expérience que nous voulions offrir dans notre établissement."
            </p>
            <footer className="text-right text-[#D47D5A] font-medium mt-2">— Thomas Laurent, co-propriétaire</footer>
          </blockquote>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">La transformation avec Sotto</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Phase d'implémentation</h3>
          <p className="mb-4">
            L'intégration de Sotto s'est déroulée en trois étapes principales, minimisant les perturbations sur l'activité quotidienne :
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden border border-[#D4B483]/20">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Phase</th>
                  <th className="py-3 px-4 text-left">Durée</th>
                  <th className="py-3 px-4 text-left">Actions clés</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#D4B483]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Préparation</td>
                  <td className="py-3 px-4">1 semaine</td>
                  <td className="py-3 px-4">Audit WiFi, formation initiale, personnalisation du menu vocal</td>
                </tr>
                <tr className="border-b border-[#D4B483]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Transition</td>
                  <td className="py-3 px-4">2 semaines</td>
                  <td className="py-3 px-4">Utilisation en parallèle avec l'ancien système, ajustements en temps réel</td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Optimisation</td>
                  <td className="py-3 px-4">1 mois</td>
                  <td className="py-3 px-4">Analyse des données, perfectionnement des commandes vocales, intégration complète</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4">
            L'équipe Sotto a travaillé en étroite collaboration avec le personnel pour adapter le système aux spécificités du restaurant, notamment :
          </p>
          
          <ul className="space-y-2 mb-6">
            {[
              "Intégration du vocabulaire spécifique à la carte",
              "Paramétrage des workflows adaptés à l'agencement du restaurant",
              "Personnalisation des alertes et notifications selon les préférences de l'équipe"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mr-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Résultats immédiats (premier mois)</h3>
          <p className="mb-4">
            Dès les premières semaines d'utilisation, l'équipe du Bistrot Parisien a constaté des améliorations significatives :
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Réduction de 30%", content: "du temps de prise de commande" },
              { title: "Diminution de 75%", content: "des erreurs de transmission cuisine-salle" },
              { title: "Gain d'espace", content: "par l'élimination des tablettes et la réduction de l'encombrement de la caisse" },
              { title: "Adaptation rapide", content: "de l'équipe au nouveau système (3 jours en moyenne)" }
            ].map((result, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-[#F5F5F0] dark:from-[#1A2A40]/50 dark:to-[#1A2A40]/30 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <h4 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] group-hover:text-[#D47D5A] transition-colors duration-300">{result.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{result.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Impact économique détaillé</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Augmentation du chiffre d'affaires</h3>
          <p className="mb-4">
            La mise en place de Sotto a généré une croissance de 15% du chiffre d'affaires global, résultant de plusieurs facteurs combinés :
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md border-t-4 border-[#87A28F] hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-[#87A28F] text-lg mb-2">Amélioration de la rotation des tables (+20%)</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#87A28F] mt-2 mr-2"></span>
                  <span>Réduction du temps entre la demande et l'édition de l'addition</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#87A28F] mt-2 mr-2"></span>
                  <span>Optimisation de la gestion des réservations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#87A28F] mt-2 mr-2"></span>
                  <span>Service plus fluide accélérant naturellement le rythme</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md border-t-4 border-[#D47D5A] hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-[#D47D5A] text-lg mb-2">Augmentation du panier moyen (+8%)</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  <span>Suggestions contextuelles pertinentes (accords mets-vins)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  <span>Meilleure présentation des spécialités et plats du jour</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  <span>Plus de temps pour le conseil personnalisé aux clients</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md border-t-4 border-[#D4B483] hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-[#D4B483] text-lg mb-2">Réduction des coûts opérationnels (-12%)</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D4B483] mt-2 mr-2"></span>
                  <span>Diminution des erreurs de commande et des pertes associées</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D4B483] mt-2 mr-2"></span>
                  <span>Optimisation des stocks grâce aux prévisions plus précises</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D4B483] mt-2 mr-2"></span>
                  <span>Meilleure allocation des ressources humaines</span>
                </li>
              </ul>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-[#D47D5A] pl-4 py-2 italic bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/30 rounded-r-lg mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              "Avant Sotto, nous servions environ 65 couverts par soir. Aujourd'hui, nous atteignons régulièrement 80 couverts, 
              avec un service plus fluide et des clients plus satisfaits. Notre ticket moyen est passé de 65€ à 70€, et nos marges 
              se sont améliorées grâce à une gestion plus précise."
            </p>
            <footer className="text-right text-[#D47D5A] font-medium mt-2">— Marc Laurent, chef et co-propriétaire</footer>
          </blockquote>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Transformation de l'expérience client</h2>
        
        <p className="mb-4">
          L'élimination des interfaces technologiques visibles a profondément modifié l'ambiance et l'expérience au Bistrot Parisien :
        </p>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Retour à l'essentiel : l'humain et la gastronomie</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Attention accrue", content: "des serveurs envers les clients" },
              { title: "Atmosphère plus authentique", content: "fidèle à l'esprit bistrot traditionnel" },
              { title: "Interactions plus naturelles", content: "entre le personnel et les clients" },
              { title: "Mise en valeur de l'expertise", content: "du sommelier et des serveurs" }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-md flex items-center hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-all duration-300"
              >
                <div className="w-3 h-12 bg-[#87A28F] rounded-l-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">{benefit.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{benefit.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Analyse des avis clients</h3>
          <p className="mb-4">
            Une analyse comparative des avis clients avant et après l'implémentation de Sotto révèle des changements significatifs :
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden border border-[#D4B483]/20">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Critère</th>
                  <th className="py-3 px-4 text-left">Avant Sotto</th>
                  <th className="py-3 px-4 text-left">Après Sotto</th>
                  <th className="py-3 px-4 text-left">Évolution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#D4B483]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Note moyenne (sur 5)</td>
                  <td className="py-3 px-4">4.2</td>
                  <td className="py-3 px-4">4.7</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">+0.5</td>
                </tr>
                <tr className="border-b border-[#D4B483]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Mention positive du service</td>
                  <td className="py-3 px-4">45%</td>
                  <td className="py-3 px-4">78%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">+33%</td>
                </tr>
                <tr className="border-b border-[#D4B483]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Commentaires sur l'attente</td>
                  <td className="py-3 px-4">28% (négatifs)</td>
                  <td className="py-3 px-4">5% (négatifs)</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">-23%</td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 font-medium">Intention de retour déclarée</td>
                  <td className="py-3 px-4">65%</td>
                  <td className="py-3 px-4">82%</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">+17%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Bénéfices pour l'équipe</h2>
        
        <p className="mb-4">
          L'adoption de Sotto a également transformé l'expérience de travail pour l'équipe du Bistrot Parisien :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A] border-b border-[#D4B483]/20 pb-2">Pour les serveurs</h3>
            <ul className="space-y-3">
              {[
                "Libération des mains permettant une meilleure présentation des plats",
                "Réduction du stress lié aux périodes d'affluence",
                "Mémorisation facilitée des commandes complexes",
                "Valorisation de leur expertise plutôt que de leurs compétences techniques"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block text-[#D47D5A] mr-2">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md border border-[#D4B483]/20">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A] border-b border-[#D4B483]/20 pb-2">Pour la cuisine</h3>
            <ul className="space-y-3">
              {[
                "Meilleure prévisibilité du flux de commandes",
                "Communication claire et instantanée avec la salle",
                "Réduction des interruptions pendant la préparation",
                "Coordination optimisée entre les différents postes"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block text-[#D47D5A] mr-2">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <blockquote className="border-l-4 border-[#87A28F] pl-4 py-2 italic bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/30 rounded-r-lg mb-6">
          <p className="text-gray-700 dark:text-gray-300">
            "Je craignais que la technologie nous complique la vie en cuisine. C'est exactement l'inverse qui s'est produit. 
            Nous recevons les commandes de manière plus fluide, plus claire, et nous pouvons mieux nous organiser."
          </p>
          <footer className="text-right text-[#D47D5A] font-medium mt-2">— Julien, chef de partie</footer>
        </blockquote>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Leçons apprises et conseils pratiques</h2>
        
        <p className="mb-4">
          L'expérience du Bistrot Parisien offre des enseignements précieux pour d'autres établissements envisageant une transformation similaire :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Facteurs clés de succès</h3>
            <div className="space-y-3">
              {[
                "Implication de toute l'équipe dès la phase de conception",
                "Formation progressive adaptée au rythme de chacun",
                "Période de transition permettant aux équipes de s'adapter",
                "Personnalisation poussée du système aux spécificités de l'établissement",
                "Suivi régulier et ajustements basés sur les retours d'expérience"
              ].map((factor, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-[#1A2A40]/30 p-3 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] text-white flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <p>{factor}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">Recommandations pour une implémentation réussie</h3>
            <ul className="space-y-3">
              {[
                "Commencer par une analyse détaillée des workflows existants",
                "Identifier les points de friction spécifiques à résoudre en priorité",
                "Prévoir des sessions de formation courtes mais régulières",
                "Mettre en place un système de feedback pour l'équipe pendant la transition",
                "Communiquer clairement les objectifs et bénéfices attendus à tout le personnel"
              ].map((recommendation, index) => (
                <li key={index} className="flex items-start bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/20 p-3 rounded-lg">
                  <span className="inline-block text-[#D47D5A] mr-2">•</span>
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Conclusion et perspectives</h2>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
          <p>
            Le cas du Bistrot Parisien illustre parfaitement comment la technologie peut paradoxalement permettre un retour à l'essentiel 
            dans l'expérience de restauration. En éliminant les écrans et en privilégiant l'interaction humaine, Sotto a permis à cet 
            établissement de renouer avec l'essence même de la gastronomie française : l'attention portée au client, la mise en valeur 
            du savoir-faire, et la création d'une expérience mémorable.
          </p>
          <p>
            L'augmentation de 15% du chiffre d'affaires n'est pas simplement le résultat d'une optimisation technique, mais la conséquence 
            d'une transformation plus profonde de l'établissement, recentré sur ses valeurs fondamentales et libéré des contraintes 
            technologiques visibles.
          </p>
          <p>
            Pour les frères Laurent, cette transformation ouvre de nouvelles perspectives :
          </p>
        </div>
        
        <blockquote className="border-l-4 border-[#D4B483] pl-4 py-2 italic bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/30 rounded-r-lg mb-8">
          <p className="text-gray-700 dark:text-gray-300">
            "Avec le temps et l'espace mental que nous avons récupérés, nous pouvons désormais envisager l'ouverture d'un deuxième 
            établissement, avec la certitude de pouvoir maintenir notre niveau d'exigence et notre identité."
          </p>
          <footer className="text-right text-[#D47D5A] font-medium mt-2">— Thomas Laurent, co-propriétaire</footer>
        </blockquote>
        
        <div className="bg-[#1A2A40] text-white p-6 rounded-lg shadow-lg">
          <p className="mb-4">
            Vous souhaitez découvrir comment Sotto peut transformer votre établissement ? 
            <a href="https://sotto.ai/contact" className="text-[#D47D5A] hover:text-[#D4B483] ml-1 font-medium">
              Contactez notre équipe
            </a> 
            pour une démonstration personnalisée ou 
            <a href="https://sotto.ai/demo" className="text-[#D47D5A] hover:text-[#D4B483] ml-1 font-medium">
              réservez une visite
            </a> 
            du Bistrot Parisien pour observer le système en conditions réelles.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;