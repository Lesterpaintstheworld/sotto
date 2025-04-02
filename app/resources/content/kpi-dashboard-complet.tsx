const ResourceContent = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:px-8 lg:py-12 resource-content">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] animate-float">
        KPI Dashboard
      </h1>

      <section className="mb-12">
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-lg p-6 shadow-md">
          <p className="text-lg leading-relaxed text-[#1A2A40] dark:text-[#F5F5F0]">
            Le KPI Dashboard représente l'élément central de suivi et d'analyse des performances opérationnelles et commerciales de Sotto. Dans notre mission de libérer la restauration des écrans pour créer une expérience plus humaine et efficace, il est essentiel de disposer d'indicateurs précis et pertinents pour mesurer notre impact réel. Ce tableau de bord interne offre une vision claire et actionnable des métriques qui comptent, permettant à chaque membre de l'équipe de comprendre l'efficacité de notre solution et d'identifier rapidement les opportunités d'amélioration.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#D47D5A] border-b-2 border-[#D47D5A] pb-2">
          Objectifs du KPI Dashboard
        </h2>
        <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Le tableau de bord des indicateurs clés de performance a été conçu pour répondre à plusieurs objectifs stratégiques :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
            <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Mesurer l'adoption et l'engagement</p>
            <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">avec notre système vocal IA</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#87A28F]">
            <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Évaluer l'impact opérationnel</p>
            <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">sur les restaurants partenaires</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D4B483]">
            <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Identifier les axes d'amélioration</p>
            <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">pour le développement produit</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#1A2A40] dark:border-[#F5F5F0]">
            <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Quantifier la valeur ajoutée</p>
            <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">pour nos clients restaurateurs</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
            <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Suivre la croissance commerciale</p>
            <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">et la rétention client</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#87A28F]">
            <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Fournir des données tangibles</p>
            <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">pour la communication externe</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#D47D5A] border-b-2 border-[#D47D5A] pb-2">
          Structure des KPI
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            1. Métriques d'adoption et d'utilisation
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/40 rounded-lg shadow-md">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/80 dark:text-[#F5F5F0]">
                <tr>
                  <th className="py-3 px-4 text-left">Indicateur</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Cible</th>
                  <th className="py-3 px-4 text-left">Fréquence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                  <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Taux d'activation</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">% des utilisateurs ayant terminé l'onboarding</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">&gt;90%</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Hebdomadaire</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                  <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Utilisateurs actifs quotidiens (DAU)</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Nombre d'utilisateurs uniques par jour</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Croissance de 5%</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Quotidienne</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                  <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Taux d'utilisation</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">% de commandes passées via Sotto vs. autres méthodes</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">&gt;75%</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Hebdomadaire</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                  <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Durée moyenne d'utilisation</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Temps d'utilisation active par service</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">&gt;80% du service</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Hebdomadaire</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                  <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Taux d'abandon</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">% d'utilisateurs cessant d'utiliser Sotto après essai</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">&lt;10%</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Mensuelle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            2. Métriques de performance technique
          </h3>
          
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Reconnaissance vocale et traitement</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Taux de reconnaissance vocale</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">% de commandes correctement interprétées au premier essai</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Temps de réponse moyen</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">délai entre la fin de l'énoncé et la réponse du système</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Taux d'erreur critique</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">% de commandes mal interprétées entraînant une erreur significative</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Précision contextuelle</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">capacité à maintenir le contexte dans une conversation</p>
              </div>
            </div>
            
            <div className="mt-6 bg-[#87A28F]/20 dark:bg-[#87A28F]/30 border-l-4 border-[#87A28F] p-4 rounded-r-lg">
              <h5 className="font-medium mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Objectifs de performance technique :</h5>
              <ul className="list-disc list-inside space-y-1 pl-2 text-[#1A2A40] dark:text-[#F5F5F0]">
                <li>Taux de reconnaissance vocale : &gt;95%</li>
                <li>Temps de réponse moyen : &lt;1,2 seconde</li>
                <li>Taux d'erreur critique : &lt;2%</li>
                <li>Précision contextuelle : &gt;90%</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Infrastructure et connectivité</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Disponibilité du système</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">% de temps de fonctionnement sans interruption</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Stabilité de connexion</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">% de déconnexions des oreillettes pendant le service</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Autonomie moyenne</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">durée d'utilisation des oreillettes avant recharge</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Latence réseau</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">temps moyen de transmission des données</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            3. Métriques d'impact opérationnel
          </h3>
          
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Efficacité du service</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/40 rounded-lg shadow-md">
                <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/80 dark:text-[#F5F5F0]">
                  <tr>
                    <th className="py-3 px-4 text-left">Indicateur</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Méthode de mesure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                    <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Temps de prise de commande</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Durée entre arrivée à table et validation commande</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Automatique via système</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                    <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Délai de service</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Temps entre commande et service au client</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Comparaison avec historique</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                    <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Rotation des tables</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Nombre de services par table durant une période</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Calcul automatique</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                    <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Erreurs de commande</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">% de commandes nécessitant correction</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Suivi des modifications</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/60">
                    <td className="py-3 px-4 font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Temps de formation</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Durée nécessaire pour former un nouvel utilisateur</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Enquête restaurateurs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Impact économique</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Augmentation du chiffre d'affaires</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">comparaison avant/après adoption</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Économies réalisées</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">réduction des coûts matériels et logiciels</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Optimisation de personnel</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">évolution du ratio personnel/couverts</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Panier moyen</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">évolution du montant moyen par client</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">ROI client</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">retour sur investissement pour le restaurateur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            4. Métriques d'expérience utilisateur
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Satisfaction du personnel</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">NPS interne</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">score de recommandation par le personnel utilisateur</p>
                </div>
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Facilité d'utilisation</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">évaluation sur échelle de 1 à 10</p>
                </div>
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Taux de problèmes signalés</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">nombre d'incidents rapportés par utilisateur</p>
                </div>
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Sentiment qualitatif</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">analyse des retours qualitatifs du personnel</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-[#D47D5A]">Satisfaction client final</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Temps d'attente perçu</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">évaluation par les clients du restaurant</p>
                </div>
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Qualité du service</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">notes attribuées au service dans les avis</p>
                </div>
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Mentions spécifiques</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">références à l'absence d'écrans dans les commentaires</p>
                </div>
                <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Impact sur les pourboires</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">évolution du montant des pourboires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#D47D5A] border-b-2 border-[#D47D5A] pb-2">
          Visualisation et accès aux données
        </h2>
        
        <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Le KPI Dashboard est accessible via notre interface administrateur interne avec différents niveaux de permission :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 p-5 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h4 className="font-medium text-lg mb-2">Vue exécutive</h4>
            <p className="text-sm opacity-90">synthèse des KPI principaux pour la direction</p>
          </div>
          <div className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 p-5 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h4 className="font-medium text-lg mb-2">Vue développement</h4>
            <p className="text-sm opacity-90">métriques techniques détaillées pour l'équipe produit</p>
          </div>
          <div className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 p-5 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h4 className="font-medium text-lg mb-2">Vue commerciale</h4>
            <p className="text-sm opacity-90">indicateurs d'adoption et satisfaction pour l'équipe vente</p>
          </div>
          <div className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 p-5 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h4 className="font-medium text-lg mb-2">Vue support</h4>
            <p className="text-sm opacity-90">alertes et problèmes à résoudre pour l'équipe support</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Représentations visuelles
          </h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Le dashboard privilégie une approche visuelle claire avec :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Graphiques d'évolution temporelle utilisant notre palette de couleurs primaires</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Indicateurs de progression circulaires pour les objectifs</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#D4B483] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Cartes de synthèse pour les métriques principales</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#1A2A40] dark:bg-[#F5F5F0] dark:text-[#1A2A40] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Tableaux détaillés pour l'analyse approfondie</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Alertes visuelles discrètes pour les métriques hors cible</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#D47D5A] border-b-2 border-[#D47D5A] pb-2">
          Collecte et analyse des données
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Sources de données
            </h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Les métriques sont collectées automatiquement à partir de plusieurs sources :
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md border-l-4 border-[#D47D5A]">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Backend Sotto</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">données d'utilisation, performances techniques</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md border-l-4 border-[#87A28F]">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">API restaurants</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">données opérationnelles, chiffre d'affaires</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md border-l-4 border-[#D4B483]">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Enquêtes utilisateurs</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">feedback qualitatif, NPS</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md border-l-4 border-[#1A2A40] dark:border-[#F5F5F0]">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Système de support</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">tickets, problèmes signalés</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md border-l-4 border-[#D47D5A]">
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Outils de suivi commercial</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">adoption, rétention</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Méthodologie d'analyse
            </h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              L'analyse des données suit un processus rigoureux :
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Collecte automatisée</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">via nos connecteurs API</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Nettoyage et validation</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">pour garantir la qualité des données</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Agrégation contextuelle</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">par restaurant, région, type d'établissement</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Analyse comparative</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">avec benchmarks internes et externes</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold">
                  5
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Détection d'anomalies</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">pour identifier rapidement les problèmes</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold">
                  6
                </div>
                <div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Génération d'insights</p>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">par notre module d'analyse IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#D47D5A] border-b-2 border-[#D47D5A] pb-2">
          Utilisation stratégique du dashboard
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Réunions d'équipe
            </h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Le KPI Dashboard structure nos réunions hebdomadaires d'équipe :
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white font-medium">
                    L
                  </div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Lundi</p>
                </div>
                <p className="pl-11 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Revue des performances de la semaine précédente</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#87A28F] flex items-center justify-center text-white font-medium">
                    M
                  </div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Mercredi</p>
                </div>
                <p className="pl-11 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Focus sur les métriques techniques et produit</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#D4B483] flex items-center justify-center text-white font-medium">
                    V
                  </div>
                  <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Vendredi</p>
                </div>
                <p className="pl-11 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Analyse des tendances et préparation des objectifs</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Prise de décision
            </h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Les données du dashboard alimentent directement notre processus de décision :
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Priorisation des fonctionnalités basée sur l'impact potentiel</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Allocation des ressources selon les opportunités identifiées</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Ajustement des stratégies commerciales et marketing</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-4 shadow-md flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0]">Optimisation continue du produit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#D47D5A] border-b-2 border-[#D47D5A] pb-2">
          Conclusion et prochaines étapes
        </h2>
        
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-lg p-6 shadow-md mb-8">
          <p className="text-lg leading-relaxed text-[#1A2A40] dark:text-[#F5F5F0]">
            Le KPI Dashboard est un outil vivant qui évolue avec Sotto. Il représente notre engagement envers une approche basée sur les données, tout en restant fidèle à notre mission de créer une expérience plus humaine dans la restauration. Paradoxalement, c'est en mesurant précisément notre impact que nous pouvons rendre la technologie plus discrète et plus efficace.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Actions à venir
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Intégration de métriques comparatives</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">entre différents types d'établissements</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Développement d'un module prédictif</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">pour anticiper les tendances</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Création d'une version simplifiée</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">accessible aux restaurateurs partenaires</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/70 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#D47D5A] flex items-center justify-center text-white text-sm font-bold shrink-0">
                4
              </div>
              <div>
                <p className="font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Automatisation des recommandations</p>
                <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">basées sur les patterns détectés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-lg p-5 text-center">
          <p className="mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">
            Pour toute question ou suggestion concernant le KPI Dashboard, contactez l'équipe Data & Analytics via le canal Slack #kpi-dashboard ou par email à <a href="mailto:data@sotto.ai" className="text-[#D47D5A] hover:underline">data@sotto.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceContent;