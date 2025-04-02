const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 resource-content">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1A2A40]">
          Benchmark ROI Client : Analyse du retour sur investissement pour les restaurants utilisant Sotto
        </h1>
        <div className="inline-block bg-[#D47D5A] h-1 w-24 rounded-full mb-6"></div>
        <div className="flex justify-center items-center space-x-3 text-sm text-[#1A2A40] dark:text-[#ededed]">
          <span className="bg-[#F5F5F0] px-3 py-1 rounded-full text-[#1A2A40] font-medium">
            Cas d'étude
          </span>
          <span>•</span>
          <span>Ressource publique</span>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Introduction</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#1A2A40] dark:text-[#ededed]">
          La transition vers un système vocal IA comme Sotto représente un changement de paradigme pour les établissements de restauration. 
          Au-delà des promesses d'innovation, les restaurateurs s'interrogent légitimement sur l'impact concret de cette technologie sur leur rentabilité. 
          Cette étude approfondie analyse le retour sur investissement (ROI) réel observé auprès de nos clients partenaires ayant adopté Sotto depuis au moins six mois. 
          À travers des données quantifiables et des témoignages authentiques, nous démontrons comment l'élimination des interfaces à écran au profit d'un système vocal IA 
          transforme non seulement l'expérience client mais génère également des bénéfices économiques substantiels et mesurables.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Méthodologie d'évaluation</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Échantillon et période d'analyse</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">Notre analyse s'appuie sur les données de 42 établissements partenaires répartis comme suit :</p>
          
          <div className="overflow-x-auto rounded-lg shadow-md mb-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type d'établissement</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Taille moyenne (couverts)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Période d'utilisation</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Restaurant traditionnel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">18</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">45</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">6-12 mois</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Bistrot/Brasserie</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">65</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">8-14 mois</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Restaurant gastronomique</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">7-10 mois</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Restaurant rapide qualitatif</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">7</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">80</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">6-9 mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Indicateurs de performance mesurés</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">Pour quantifier précisément le ROI, nous avons mesuré :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Réduction des coûts opérationnels (matériel, maintenance, formation)",
              "Optimisation du temps de service et rotation des tables",
              "Impact sur le panier moyen et les ventes additionnelles",
              "Satisfaction client (NPS) et taux de fidélisation",
              "Bien-être et productivité du personnel",
              "Économies d'espace et optimisation de l'agencement"
            ].map((item, index) => (
              <div key={index} className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#87A28F]">
                <p className="text-[#1A2A40] dark:text-[#ededed]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Résultats économiques observés</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Réduction des coûts d'équipement et de maintenance</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">L'adoption de Sotto a permis une diminution significative des investissements matériels et des coûts associés :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <div className="text-[#D47D5A] font-bold text-3xl mb-2">73%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Réduction moyenne des dépenses en équipement technologique</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <div className="text-[#D47D5A] font-bold text-3xl mb-2">4 200€</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Économie annuelle en maintenance et mises à jour logicielles</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
              <div className="text-[#D47D5A] font-bold text-3xl mb-2">82%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Diminution des incidents techniques nécessitant une intervention</p>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-[#D4B483] pl-4 italic text-[#1A2A40] dark:text-[#ededed] my-6 bg-[#F5F5F0] dark:bg-gray-800 p-4 rounded-r-lg">
            <p className="mb-2">"Nous avons pu éliminer 5 tablettes, 2 écrans de caisse et 3 écrans de cuisine. Non seulement cela représente une économie substantielle, mais l'espace libéré nous a permis d'ajouter une table supplémentaire."</p>
            <footer className="text-sm">— Marc L., propriétaire d'un bistrot parisien</footer>
          </blockquote>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Optimisation du service et rotation des tables</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">L'efficacité accrue du service s'est traduite par des gains mesurables :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="text-[#87A28F] font-bold text-3xl mb-2">24%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Réduction du temps de prise de commande</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="text-[#87A28F] font-bold text-3xl mb-2">18%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Diminution des erreurs de commande génératrices de gaspillage</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="text-[#87A28F] font-bold text-3xl mb-2">12%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Augmentation moyenne du nombre de couverts servis aux heures de pointe</p>
            </div>
          </div>
          
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">Ces améliorations ont un impact direct sur le chiffre d'affaires :</p>
          
          <div className="overflow-x-auto rounded-lg shadow-md mb-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type d'établissement</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Augmentation du CA mensuel</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ROI calculé sur 12 mois</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Restaurant traditionnel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#D47D5A] font-semibold">+8.5%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#87A28F] font-semibold">327%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Bistrot/Brasserie</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#D47D5A] font-semibold">+11.2%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#87A28F] font-semibold">412%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Restaurant gastronomique</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#D47D5A] font-semibold">+6.3%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#87A28F] font-semibold">245%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-[#1A2A40] dark:text-[#ededed]">Restaurant rapide qualitatif</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#D47D5A] font-semibold">+15.7%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#87A28F] font-semibold">518%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Impact sur le panier moyen</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">L'utilisation de Sotto a démontré une influence positive sur les comportements d'achat :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-[#D4B483]">
              <div className="text-[#D4B483] font-bold text-3xl mb-2">+14%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Augmentation moyenne du panier grâce aux suggestions contextuelles intelligentes</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-[#D4B483]">
              <div className="text-[#D4B483] font-bold text-3xl mb-2">+22%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Hausse des ventes additionnelles (boissons, desserts, accompagnements)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-[#D4B483]">
              <div className="text-[#D4B483] font-bold text-3xl mb-2">+17%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Progression des ventes de plats à forte marge grâce aux recommandations personnalisées</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Bénéfices opérationnels</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Optimisation des ressources humaines</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">Contrairement aux idées reçues, Sotto n'a pas réduit les effectifs mais a transformé leur utilisation :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white font-bold">15h</div>
                <div className="ml-3 font-medium text-[#1A2A40] dark:text-[#ededed]">Réallocation hebdomadaire</div>
              </div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Réallocation moyenne de 15h/semaine du temps personnel vers des tâches à valeur ajoutée</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white font-bold">35%</div>
                <div className="ml-3 font-medium text-[#1A2A40] dark:text-[#ededed]">Formation optimisée</div>
              </div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Réduction de 35% du temps consacré à la formation sur les systèmes d'encaissement</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white font-bold">28%</div>
                <div className="ml-3 font-medium text-[#1A2A40] dark:text-[#ededed]">Turnover réduit</div>
              </div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">Diminution de 28% du turnover du personnel de service</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Gestion optimisée des stocks et réduction du gaspillage</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">L'intelligence prédictive de Sotto a permis :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-[#D47D5A]">
              <p className="font-semibold mb-2 text-[#1A2A40] dark:text-[#ededed]">Réduction des pertes alimentaires</p>
              <div className="text-[#D47D5A] font-bold text-3xl">-17%</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-[#D47D5A]">
              <p className="font-semibold mb-2 text-[#1A2A40] dark:text-[#ededed]">Diminution des coûts d'approvisionnement</p>
              <div className="text-[#D47D5A] font-bold text-3xl">-12%</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-[#D47D5A]">
              <p className="font-semibold mb-2 text-[#1A2A40] dark:text-[#ededed]">Baisse des ruptures de stock</p>
              <div className="text-[#D47D5A] font-bold text-3xl">-9%</div>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-[#D4B483] pl-4 italic text-[#1A2A40] dark:text-[#ededed] my-6 bg-[#F5F5F0] dark:bg-gray-800 p-4 rounded-r-lg">
            <p className="mb-2">"La capacité de Sotto à analyser nos tendances de vente nous a permis d'affiner nos commandes. Nous avons réduit notre gaspillage de près de 20% tout en évitant les ruptures sur nos plats phares."</p>
            <footer className="text-sm">— Sophie M., cheffe d'un restaurant gastronomique</footer>
          </blockquote>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Impact sur l'expérience client</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Amélioration mesurable de la satisfaction</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">Les établissements utilisant Sotto ont observé :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#1A2A40] text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-3 text-[#D4B483]">+27</div>
              <p className="text-lg">points de Net Promoter Score (NPS)</p>
            </div>
            <div className="bg-[#1A2A40] text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-3 text-[#D4B483]">+32%</div>
              <p className="text-lg">progression des avis 5 étoiles</p>
            </div>
            <div className="bg-[#1A2A40] text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-3 text-[#D4B483]">+24%</div>
              <p className="text-lg">hausse du taux de fidélisation client</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Perception de l'innovation</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">Une enquête auprès de 1 200 clients de nos restaurants partenaires révèle :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow border border-gray-200 dark:border-gray-700 hover:border-[#87A28F] transition-colors duration-300">
              <div className="text-[#87A28F] font-bold text-4xl mb-2">87%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">apprécient l'absence d'écrans et la présence plus attentive du personnel</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow border border-gray-200 dark:border-gray-700 hover:border-[#87A28F] transition-colors duration-300">
              <div className="text-[#87A28F] font-bold text-4xl mb-2">92%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">perçoivent l'établissement comme "innovant" et "à la pointe"</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow border border-gray-200 dark:border-gray-700 hover:border-[#87A28F] transition-colors duration-300">
              <div className="text-[#87A28F] font-bold text-4xl mb-2">78%</div>
              <p className="text-[#1A2A40] dark:text-[#ededed]">mentionnent spontanément l'efficacité du service comme facteur de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Analyse du ROI global</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">Délai d'amortissement</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">Le graphique ci-dessous illustre le délai moyen d'amortissement de l'investissement Sotto :</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { type: "Restaurants traditionnels", months: 4.2 },
              { type: "Bistrots/Brasseries", months: 3.7 },
              { type: "Restaurants gastronomiques", months: 5.1 },
              { type: "Restauration rapide qualitative", months: 2.9 }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="font-medium text-[#1A2A40] dark:text-[#ededed] mb-2">{item.type}</p>
                  <div className="text-2xl font-bold text-[#D47D5A]">{item.months} mois</div>
                </div>
                <div 
                  className="absolute bottom-0 left-0 bg-[#F5F5F0] dark:bg-gray-700 h-2 transition-all duration-300" 
                  style={{ width: `${(item.months/5.1)*100}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#1A2A40]">ROI cumulé sur 24 mois</h3>
          <p className="mb-4 text-[#1A2A40] dark:text-[#ededed]">En considérant l'ensemble des économies et gains générés, le ROI moyen à 24 mois s'établit à :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#ededed]">Économies directes</h4>
              <p className="text-[#1A2A40] dark:text-[#ededed] mb-2">(matériel, maintenance, formation)</p>
              <div className="text-3xl font-bold text-[#D47D5A]">9 700€</div>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#ededed]">Gains liés à l'efficacité opérationnelle</h4>
              <p className="text-[#1A2A40] dark:text-[#ededed] mb-2">&nbsp;</p>
              <div className="text-3xl font-bold text-[#D47D5A]">22 400€</div>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#ededed]">Augmentation du chiffre d'affaires</h4>
              <p className="text-[#1A2A40] dark:text-[#ededed] mb-2">&nbsp;</p>
              <div className="text-3xl font-bold text-[#D47D5A]">38 600€</div>
            </div>
            <div className="bg-[#1A2A40] rounded-lg p-6 shadow-lg animate-float">
              <h4 className="text-lg font-semibold mb-3 text-white">ROI total moyen sur 24 mois</h4>
              <p className="text-gray-300 mb-2">&nbsp;</p>
              <div className="text-4xl font-bold text-[#D4B483]">748%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Témoignages clients</h2>
        
        <div className="space-y-6">
          <blockquote className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-[#D4B483]">
            <p className="italic mb-4 text-lg text-[#1A2A40] dark:text-[#ededed]">"Après 10 mois d'utilisation, je peux affirmer que Sotto a transformé notre établissement. Non seulement nous avons augmenté notre chiffre d'affaires de 13%, mais l'ambiance est plus détendue, plus humaine. Mes serveurs se concentrent sur l'essentiel : l'accueil et le conseil."</p>
            <footer className="font-medium text-[#1A2A40] dark:text-[#ededed]">— Thomas R., propriétaire d'une brasserie à Lyon</footer>
          </blockquote>
          
          <blockquote className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-6 shadow-md border-t-4 border-[#D4B483]">
            <p className="italic mb-4 text-lg text-[#1A2A40] dark:text-[#ededed]">"En tant que restaurant gastronomique, nous étions réticents à adopter une technologie vocale, craignant qu'elle ne perturbe l'atmosphère feutrée que nous cultivons. Sotto s'est révélé être exactement l'inverse : discret, élégant, il a permis à notre équipe d'être encore plus présente pour nos clients."</p>
            <footer className="font-medium text-[#1A2A40] dark:text-[#ededed]">— Claire D., directrice d'un restaurant étoilé</footer>
          </blockquote>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Facteurs clés de succès</h2>
        
        <p className="mb-6 text-[#1A2A40] dark:text-[#ededed]">Notre analyse a identifié plusieurs facteurs déterminants dans l'optimisation du ROI :</p>
        
        <div className="space-y-4">
          {[
            { factor: "Formation initiale approfondie", correlation: 18 },
            { factor: "Implication de l'équipe dans le processus d'adoption", correlation: 22 },
            { factor: "Personnalisation du système aux spécificités de l'établissement", correlation: 15 },
            { factor: "Communication positive de l'innovation auprès des clients", correlation: 12 },
            { factor: "Utilisation des données analytiques pour l'optimisation continue", correlation: 25 }
          ].map((item, index) => (
            <div key={index} className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mr-4 w-10 h-10 rounded-full bg-[#1A2A40] flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="flex-grow">
                <p className="font-medium text-[#1A2A40] dark:text-[#ededed]">{item.factor}</p>
              </div>
              <div className="bg-[#87A28F] text-white px-3 py-1 rounded-full text-sm font-bold">
                +{item.correlation}%
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Conclusion et perspectives</h2>
        
        <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg p-6 shadow-md mb-6">
          <p className="mb-4 leading-relaxed text-[#1A2A40] dark:text-[#ededed]">
            L'analyse détaillée du ROI démontre que Sotto dépasse largement le cadre d'une simple innovation technologique pour s'affirmer comme un véritable levier de transformation économique pour les établissements de restauration. Au-delà des chiffres impressionnants de rentabilité, c'est l'ensemble de l'écosystème du restaurant qui bénéficie de cette approche centrée sur l'humain.
          </p>
          <p className="leading-relaxed text-[#1A2A40] dark:text-[#ededed]">
            Les établissements ayant pleinement intégré Sotto dans leur stratégie globale sont ceux qui enregistrent les meilleurs résultats, confirmant que la technologie vocale IA représente non pas une rupture, mais une évolution naturelle vers une restauration plus authentique et plus performante.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-medium mb-6 text-[#1A2A40] border-l-4 border-[#D47D5A] pl-3">Pour aller plus loin</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="group block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-b-2 border-transparent hover:border-[#D47D5A]">
            <h4 className="font-semibold mb-2 group-hover:text-[#D47D5A] transition-colors duration-300 text-[#1A2A40] dark:text-[#ededed]">Simulation personnalisée</h4>
            <p className="text-[#1A2A40] dark:text-[#ededed]">Demandez une simulation personnalisée du ROI pour votre établissement</p>
          </a>
          <a href="#" className="group block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-b-2 border-transparent hover:border-[#D47D5A]">
            <h4 className="font-semibold mb-2 group-hover:text-[#D47D5A] transition-colors duration-300 text-[#1A2A40] dark:text-[#ededed]">Guide complet</h4>
            <p className="text-[#1A2A40] dark:text-[#ededed]">Téléchargez notre guide complet d'optimisation du ROI avec Sotto</p>
          </a>
          <a href="#" className="group block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-b-2 border-transparent hover:border-[#D47D5A]">
            <h4 className="font-semibold mb-2 group-hover:text-[#D47D5A] transition-colors duration-300 text-[#1A2A40] dark:text-[#ededed]">Ateliers dédiés</h4>
            <p className="text-[#1A2A40] dark:text-[#ededed]">Rencontrez nos experts lors de nos prochains ateliers dédiés à la transformation digitale</p>
          </a>
        </div>
      </section>

      <div className="text-center italic text-[#1A2A40] dark:text-[#ededed] pt-6 border-t border-gray-200 dark:border-gray-700">
        <p>Sotto - Libérez votre restaurant des écrans et recentrez-vous sur l'essentiel : l'humain et la gastronomie.</p>
      </div>
    </div>
  );
};

export default ResourceContent;