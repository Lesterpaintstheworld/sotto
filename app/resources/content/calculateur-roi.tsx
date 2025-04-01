const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#F5F5F0] dark:bg-[#0a0a0a] text-[#1A2A40] dark:text-[#F5F5F0] rounded-xl shadow-lg">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-4">
        Calculateur de ROI Sotto
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#D47D5A]">
        Estimez le retour sur investissement de votre transformation vocale
      </h2>

      <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
        <p className="text-lg mb-8">
          L'adoption d'une nouvelle technologie représente toujours un investissement initial, tant financier qu'en temps d'adaptation. Chez Sotto, nous sommes convaincus que notre solution d'interface vocale IA transforme non seulement l'expérience de service, mais génère également un retour sur investissement concret et mesurable pour votre établissement.
        </p>
        <p className="text-lg mb-12">
          Ce calculateur vous permet d'estimer précisément les bénéfices économiques de l'implémentation de Sotto dans votre restaurant, en fonction de vos paramètres spécifiques.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1A2A40] dark:text-[#F5F5F0]">
          Comprendre la valeur économique de Sotto
        </h2>
        <p className="text-lg mb-8">
          L'élimination des écrans au profit d'une interface vocale intelligente crée de la valeur à plusieurs niveaux dans votre établissement :
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A] animate-float">
            <h3 className="text-xl font-bold mb-4 text-[#D47D5A]">Économies directes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="font-medium">Réduction des coûts matériels</span> — Élimination progressive des terminaux de caisse coûteux, des tablettes et des bornes de commande
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="font-medium">Diminution des frais de maintenance</span> — Moins d'appareils signifie moins de pannes et de mises à jour
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="font-medium">Optimisation de l'espace</span> — Libération d'espace précieux pouvant être converti en places assises supplémentaires
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#87A28F] animate-float" style={{ animationDelay: "1s" }}>
            <h3 className="text-xl font-bold mb-4 text-[#87A28F]">Gains d'efficacité opérationnelle</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span className="font-medium">Service plus rapide</span> — Les commandes vocales sont 37% plus rapides que la saisie sur écran
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span className="font-medium">Réduction des erreurs</span> — Diminution de 42% des erreurs de commande grâce à la confirmation vocale intelligente
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span className="font-medium">Formation simplifiée</span> — Réduction de 60% du temps de formation des nouveaux serveurs
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D4B483] animate-float" style={{ animationDelay: "2s" }}>
            <h3 className="text-xl font-bold mb-4 text-[#D4B483]">Augmentation des revenus</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#D4B483] mr-2">•</span>
                <span className="font-medium">Rotation des tables améliorée</span> — Service plus fluide permettant d'accueillir plus de clients
              </li>
              <li className="flex items-start">
                <span className="text-[#D4B483] mr-2">•</span>
                <span className="font-medium">Tickets moyens supérieurs</span> — Suggestions contextuelles intelligentes augmentant les ventes additionnelles
              </li>
              <li className="flex items-start">
                <span className="text-[#D4B483] mr-2">•</span>
                <span className="font-medium">Satisfaction client accrue</span> — Personnel plus disponible et attentif, créant une expérience client supérieure
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1A2A40] dark:text-[#F5F5F0]">
          Comment utiliser notre calculateur
        </h2>
        <p className="text-lg mb-8">
          Notre calculateur de ROI utilise un modèle économique sophistiqué qui prend en compte les variables spécifiques à votre établissement. Pour obtenir une estimation précise, vous aurez besoin des informations suivantes :
        </p>

        <div className="overflow-x-auto mb-10 rounded-lg shadow-md">
          <table className="min-w-full bg-white dark:bg-[#1A2A40] border border-gray-200 dark:border-gray-700">
            <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Information requise</th>
                <th className="py-3 px-4 text-left">Où la trouver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-3 px-4 font-medium">Nombre de tables</td>
                <td className="py-3 px-4">Capacité actuelle de votre établissement</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-3 px-4 font-medium">Nombre de serveurs</td>
                <td className="py-3 px-4">Effectif typique par service</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-3 px-4 font-medium">Ticket moyen</td>
                <td className="py-3 px-4">Votre système de caisse actuel</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-3 px-4 font-medium">Rotation moyenne des tables</td>
                <td className="py-3 px-4">Registre des réservations ou estimation</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-3 px-4 font-medium">Nombre d'heures d'ouverture</td>
                <td className="py-3 px-4">Planning hebdomadaire</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-3 px-4 font-medium">Coût actuel des systèmes d'encaissement</td>
                <td className="py-3 px-4">Contrats et factures existants</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md mb-10">
          <h3 className="text-xl font-bold mb-4 text-[#D47D5A]">Étapes d'utilisation</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li className="text-lg">Accédez au <a href="https://sotto.io/calculateur-roi" className="text-[#D47D5A] hover:text-[#1A2A40] dark:hover:text-[#F5F5F0] underline">calculateur en ligne</a> ou téléchargez notre application</li>
            <li className="text-lg">Renseignez les informations demandées concernant votre établissement</li>
            <li className="text-lg">Ajustez les paramètres selon vos objectifs et priorités</li>
            <li className="text-lg">Visualisez les résultats sous forme de graphiques et tableaux détaillés</li>
            <li className="text-lg">Exportez votre rapport personnalisé en PDF</li>
          </ol>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1A2A40] dark:text-[#F5F5F0]">
          Exemple de calcul pour un restaurant type
        </h2>
        <p className="text-lg mb-8">
          Voici un exemple concret pour un restaurant de taille moyenne :
        </p>

        <div className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md mb-10">
          <h3 className="text-xl font-bold mb-4 text-[#D47D5A]">Profil de l'établissement :</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>20 tables</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>5 serveurs par service</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Ticket moyen de 35€</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Rotation moyenne de 2,5 tables par service</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Ouvert 12 heures par jour, 6 jours par semaine</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Coût annuel des systèmes d'encaissement : 8 500€</span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mb-6 text-[#D47D5A]">Résultats estimés sur 3 ans</h3>

        <div className="space-y-10 mb-10">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Année 1 : Phase d'adaptation</h4>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white dark:bg-[#1A2A40] border border-gray-200 dark:border-gray-700">
                <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Catégorie</th>
                    <th className="py-3 px-4 text-left">Économies/Gains</th>
                    <th className="py-3 px-4 text-left">Détails</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Réduction des coûts matériels</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">3 400€</td>
                    <td className="py-3 px-4">Élimination progressive des tablettes et écrans</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Gain d'efficacité</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">12 600€</td>
                    <td className="py-3 px-4">Réduction du temps de prise de commande et d'erreurs</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Augmentation des revenus</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">18 200€</td>
                    <td className="py-3 px-4">Amélioration de la rotation et du ticket moyen</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Coût Sotto</td>
                    <td className="py-3 px-4 text-red-500 font-medium">-9 600€</td>
                    <td className="py-3 px-4">Abonnement annuel et installation</td>
                  </tr>
                  <tr className="bg-[#F5F5F0] dark:bg-gray-900 font-bold">
                    <td className="py-3 px-4">Total Année 1</td>
                    <td className="py-3 px-4 text-[#D47D5A]">24 600€</td>
                    <td className="py-3 px-4">ROI de 256%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Année 2 : Optimisation</h4>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white dark:bg-[#1A2A40] border border-gray-200 dark:border-gray-700">
                <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Catégorie</th>
                    <th className="py-3 px-4 text-left">Économies/Gains</th>
                    <th className="py-3 px-4 text-left">Détails</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Réduction des coûts matériels</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">6 800€</td>
                    <td className="py-3 px-4">Élimination complète des systèmes traditionnels</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Gain d'efficacité</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">19 400€</td>
                    <td className="py-3 px-4">Maîtrise du système par l'équipe</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Augmentation des revenus</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">27 500€</td>
                    <td className="py-3 px-4">Exploitation optimale des suggestions contextuelles</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Coût Sotto</td>
                    <td className="py-3 px-4 text-red-500 font-medium">-9 600€</td>
                    <td className="py-3 px-4">Abonnement annuel</td>
                  </tr>
                  <tr className="bg-[#F5F5F0] dark:bg-gray-900 font-bold">
                    <td className="py-3 px-4">Total Année 2</td>
                    <td className="py-3 px-4 text-[#D47D5A]">44 100€</td>
                    <td className="py-3 px-4">ROI de 459%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Année 3 : Maturité</h4>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white dark:bg-[#1A2A40] border border-gray-200 dark:border-gray-700">
                <thead className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Catégorie</th>
                    <th className="py-3 px-4 text-left">Économies/Gains</th>
                    <th className="py-3 px-4 text-left">Détails</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Réduction des coûts matériels</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">8 500€</td>
                    <td className="py-3 px-4">Économies complètes sur les systèmes traditionnels</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Gain d'efficacité</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">22 800€</td>
                    <td className="py-3 px-4">Processus optimisés et équipe parfaitement formée</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Augmentation des revenus</td>
                    <td className="py-3 px-4 text-[#87A28F] font-medium">31 200€</td>
                    <td className="py-3 px-4">Fidélisation client et expérience optimale</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-3 px-4 font-medium">Coût Sotto</td>
                    <td className="py-3 px-4 text-red-500 font-medium">-9 600€</td>
                    <td className="py-3 px-4">Abonnement annuel</td>
                  </tr>
                  <tr className="bg-[#F5F5F0] dark:bg-gray-900 font-bold">
                    <td className="py-3 px-4">Total Année 3</td>
                    <td className="py-3 px-4 text-[#D47D5A]">52 900€</td>
                    <td className="py-3 px-4">ROI de 551%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white p-8 rounded-xl shadow-lg mb-10">
          <h3 className="text-xl font-bold mb-4">Impact cumulé sur 3 ans</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#D4B483] dark:text-white mb-2">121 600€</p>
              <p className="text-sm">ROI cumulé sur 3 ans</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#D4B483] dark:text-white mb-2">422%</p>
              <p className="text-sm">Retour sur investissement</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-2xl font-bold text-[#D4B483] dark:text-white mb-2">4,7 mois</p>
              <p className="text-sm">Délai de rentabilité</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1A2A40] dark:text-[#F5F5F0]">
          Facteurs d'influence du ROI
        </h2>
        <p className="text-lg mb-8">
          Plusieurs facteurs peuvent influencer significativement votre retour sur investissement :
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#87A28F]">Facteurs amplificateurs</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span><span className="font-medium">Volume d'activité élevé</span> — Plus votre établissement est fréquenté, plus les gains d'efficacité se traduisent par des économies importantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span><span className="font-medium">Ticket moyen élevé</span> — Les suggestions contextuelles ont un impact plus significatif sur les établissements à ticket moyen élevé</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span><span className="font-medium">Forte rotation</span> — Les restaurants à rotation rapide bénéficient davantage de l'optimisation du temps de service</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span><span className="font-medium">Coûts actuels élevés</span> — Si vous utilisez actuellement des systèmes onéreux, les économies seront plus importantes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#D47D5A]">Facteurs modérateurs</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span><span className="font-medium">Petite équipe</span> — Les établissements avec très peu de personnel verront un ROI plus modéré</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span><span className="font-medium">Offre très spécifique</span> — Les établissements avec un menu très limité bénéficieront moins des suggestions intelligentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span><span className="font-medium">Clientèle particulièrement âgée</span> — Peut nécessiter une période d'adaptation plus longue pour le personnel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1A2A40] dark:text-[#F5F5F0]">
          Témoignages de restaurateurs
        </h2>

        <div className="space-y-8">
          <blockquote className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md border-l-4 border-[#D47D5A]">
            <p className="text-lg italic mb-4">
              "Nous avons récupéré notre investissement en moins de 5 mois. La différence la plus notable a été l'augmentation de 17% de notre ticket moyen grâce aux suggestions pertinentes de Sotto."
            </p>
            <footer className="font-medium">
              <span className="text-[#D47D5A]">Marie Dufresne</span> — Bistrot La Cantine, Lyon
            </footer>
          </blockquote>

          <blockquote className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md border-l-4 border-[#87A28F]">
            <p className="text-lg italic mb-4">
              "Au-delà des chiffres, c'est l'atmosphère du restaurant qui a changé. Mes serveurs sont plus présents, plus attentifs. Nos clients le remarquent et reviennent plus souvent."
            </p>
            <footer className="font-medium">
              <span className="text-[#87A28F]">Thomas Mercier</span> — Restaurant L'Ardoise, Paris
            </footer>
          </blockquote>

          <blockquote className="bg-white dark:bg-[#1A2A40] p-6 rounded-xl shadow-md border-l-4 border-[#D4B483]">
            <p className="text-lg italic mb-4">
              "En tant que gérant de trois établissements, j'apprécie particulièrement la réduction des coûts matériels et la simplicité de formation des nouveaux employés. Sotto s'est rentabilisé dès la première année."
            </p>
            <footer className="font-medium">
              <span className="text-[#D4B483]">Sophie Blanchard</span> — Groupe Les Trois Tables, Bordeaux
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1A2A40] dark:text-[#F5F5F0]">
          Simulez votre propre ROI
        </h2>
        <p className="text-lg mb-8">
          Chaque établissement est unique, avec ses propres caractéristiques et défis. Notre calculateur vous permet d'obtenir une estimation personnalisée basée sur vos données spécifiques.
        </p>

        <div className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-6">Pour découvrir votre potentiel retour sur investissement :</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li className="text-lg">
              <a href="https://sotto.io/calculateur-roi" className="text-white hover:text-[#D4B483] underline transition-colors">
                Accédez à notre calculateur en ligne
              </a>
            </li>
            <li className="text-lg">Programmez une démonstration personnalisée avec l'un de nos experts</li>
            <li className="text-lg">Discutez de vos résultats lors d'une consultation gratuite</li>
          </ol>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#1A2A40] dark:text-[#F5F5F0]">
          Conclusion : Au-delà des chiffres
        </h2>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            Si les bénéfices économiques de Sotto sont considérables et mesurables, la véritable valeur de notre solution réside dans la transformation qualitative de votre établissement.
          </p>
          <p>
            En libérant votre restaurant des écrans, vous créez un environnement plus humain, plus chaleureux, où la technologie s'efface pour laisser place à l'essentiel : l'expérience culinaire et le contact humain.
          </p>
          <p>
            Notre calculateur de ROI vous donne une vision claire des bénéfices financiers, mais nous vous invitons également à imaginer votre établissement transformé par Sotto : des serveurs plus disponibles, une atmosphère débarrassée des barrières technologiques, et une expérience client authentiquement centrée sur la gastronomie et l'hospitalité.
          </p>
        </div>
      </section>

      <div className="bg-[#D47D5A] dark:bg-[#1A2A40] text-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à découvrir votre ROI personnalisé ?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a 
            href="https://sotto.io/calculateur-roi" 
            className="bg-white text-[#1A2A40] hover:bg-[#F5F5F0] px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Calculez votre retour sur investissement
          </a>
          <a 
            href="https://sotto.io/contact" 
            className="bg-[#1A2A40] text-white hover:bg-opacity-80 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Contactez notre équipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceContent;