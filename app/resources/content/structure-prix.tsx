const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold text-[#1A2A40] mb-4">Structure de Prix</h1>
        <p className="italic text-[#1A2A40] opacity-80">
          Document interne - Modèles d'abonnement, commissions et options premium pour l'écosystème Sotto
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Introduction</h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            La structure de prix de Sotto est conçue pour aligner parfaitement nos intérêts avec ceux des restaurateurs. 
            Contrairement aux systèmes traditionnels qui imposent des coûts excessifs (TEG atteignant 20-30%), notre approche 
            vise à créer un partenariat équilibré où notre succès dépend directement de celui de nos clients. Ce document 
            détaille notre modèle économique, les différentes formules d'abonnement, les commissions appliquées et les options 
            premium disponibles. Il constitue un guide de référence pour l'équipe commerciale et servira de base pour les 
            négociations et la présentation de notre offre aux restaurateurs.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Principes fondamentaux</h2>
        <p className="mb-4 text-gray-700">
          Notre structure tarifaire repose sur quatre principes essentiels qui reflètent les valeurs de Sotto :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            {
              title: "Transparence totale",
              description: "Aucun frais caché, aucune surprise",
              color: "bg-[#1A2A40]"
            },
            {
              title: "Équité et proportionnalité",
              description: "Des coûts alignés sur la taille et les besoins du restaurant",
              color: "bg-[#D47D5A]"
            },
            {
              title: "Accessibilité",
              description: "Un point d'entrée abordable pour tous types d'établissements",
              color: "bg-[#87A28F]"
            },
            {
              title: "Valeur ajoutée",
              description: "Chaque euro investi doit générer un retour mesurable pour le restaurateur",
              color: "bg-[#D4B483]"
            }
          ].map((principle, index) => (
            <div 
              key={index} 
              className={`${principle.color} rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="font-bold text-xl mb-2">{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Modèles d'abonnement</h2>
        <p className="mb-6 text-gray-700">
          Nous proposons trois formules principales, adaptées aux différents profils d'établissements.
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Formule Essentiel</h3>
          <p className="mb-4 text-gray-700">
            Cette formule d'entrée est idéale pour les petits établissements ou ceux qui souhaitent tester notre solution.
          </p>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Caractéristique</th>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Détail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Prix mensuel</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">99€ HT</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Nombre d'oreillettes incluses</td>
                    <td className="px-4 py-2">3</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Nombre de tables gérées</td>
                    <td className="px-4 py-2">Jusqu'à 20</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Support</td>
                    <td className="px-4 py-2">IA uniquement + email (réponse sous 24h)</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Mises à jour</td>
                    <td className="px-4 py-2">Trimestrielles</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Engagement</td>
                    <td className="px-4 py-2">6 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h4 className="font-semibold mb-3 text-[#1A2A40]">Inclus dans la formule :</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Interface vocale Sotto avec fonctionnalités de base</li>
              <li>Installation et configuration initiale</li>
              <li>Formation de l'équipe (2h)</li>
              <li>Matériel et maintenance</li>
              <li>Stockage des données (3 mois d'historique)</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Formule Professionnel</h3>
          <p className="mb-4 text-gray-700">
            Notre offre la plus populaire, conçue pour les restaurants établis avec un volume d'activité moyen à élevé.
          </p>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Caractéristique</th>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Détail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Prix mensuel</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">199€ HT</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Nombre d'oreillettes incluses</td>
                    <td className="px-4 py-2">6</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Nombre de tables gérées</td>
                    <td className="px-4 py-2">Jusqu'à 40</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Support</td>
                    <td className="px-4 py-2">IA + téléphone (7j/7, 9h-19h)</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Mises à jour</td>
                    <td className="px-4 py-2">Mensuelles avec nouveautés prioritaires</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Engagement</td>
                    <td className="px-4 py-2">12 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h4 className="font-semibold mb-3 text-[#1A2A40]">Inclus dans la formule :</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Toutes les fonctionnalités de la formule Essentiel</li>
              <li>Module d'analyse des performances</li>
              <li>Gestion avancée des stocks</li>
              <li>Intégration avec les principales plateformes de livraison</li>
              <li>Formation approfondie de l'équipe (4h)</li>
              <li>Stockage des données (12 mois d'historique)</li>
              <li>Oreillette de secours</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Formule Premium</h3>
          <p className="mb-4 text-gray-700">
            Destinée aux établissements haut de gamme ou aux groupes de restaurants nécessitant des fonctionnalités avancées.
          </p>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Caractéristique</th>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Détail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Prix mensuel</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">349€ HT</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Nombre d'oreillettes incluses</td>
                    <td className="px-4 py-2">10</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Nombre de tables gérées</td>
                    <td className="px-4 py-2">Illimité</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Support</td>
                    <td className="px-4 py-2">IA + téléphone (24/7) + manager dédié</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Mises à jour</td>
                    <td className="px-4 py-2">Accès anticipé à toutes les nouveautés</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Engagement</td>
                    <td className="px-4 py-2">12 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h4 className="font-semibold mb-3 text-[#1A2A40]">Inclus dans la formule :</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Toutes les fonctionnalités de la formule Professionnel</li>
              <li>Module de fidélité client avancé</li>
              <li>Analytique prédictive</li>
              <li>Personnalisation de l'interface vocale</li>
              <li>Intégration comptable complète</li>
              <li>Formation sur site (8h) + formation continue</li>
              <li>Stockage des données illimité</li>
              <li>Kit de secours complet (oreillettes + hub)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Structure des commissions</h2>
        <p className="mb-6 text-gray-700">
          Notre modèle économique comprend également une composante variable sous forme de commissions, conçue pour être significativement inférieure aux standards du marché.
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Commission sur transactions</h3>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Volume mensuel</th>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Taux de commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">0€ - 10 000€</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">1,2%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">10 001€ - 30 000€</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">1,0%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">30 001€ - 100 000€</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">0,8%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">100 001€ et plus</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">0,6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h4 className="font-semibold mb-3 text-[#1A2A40]">Caractéristiques clés :</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Facturation mensuelle basée sur le chiffre d'affaires réalisé via notre système</li>
              <li>Plafonnement des commissions à 600€/mois, quelle que soit l'activité</li>
              <li>Réduction de 0,1% pour paiement par prélèvement automatique</li>
              <li>Exonération des 3 premiers mois pour les nouveaux clients</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Commission sur réservations</h3>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Type de réservation</th>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Réservation standard</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">1€</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Réservation avec pré-paiement</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">1,5% du montant prépayé</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Réservation de groupe ({'>8'} personnes)</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">2€</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">Événement privatif</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">10€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Options premium à la carte</h2>
        <p className="mb-6 text-gray-700">
          Pour les établissements ayant des besoins spécifiques, nous proposons des modules additionnels qui peuvent être ajoutés à n'importe quelle formule.
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Modules fonctionnels</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                module: "Multi-établissements",
                description: "Gestion centralisée de plusieurs restaurants",
                price: "99€ HT par établissement supplémentaire"
              },
              {
                module: "Gestion avancée des stocks",
                description: "Prévisions, alertes automatiques, suggestions de commandes",
                price: "49€ HT"
              },
              {
                module: "Module événementiel",
                description: "Gestion des réservations de groupe, menus spéciaux, staffing",
                price: "79€ HT"
              },
              {
                module: "Fidélité premium",
                description: "Programme de fidélité personnalisé avec segmentation client",
                price: "59€ HT"
              },
              {
                module: "Analytique concurrentielle",
                description: "Benchmarking anonymisé avec restaurants similaires",
                price: "89€ HT"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-[#1A2A40] mb-2">{item.module}</h4>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                <p className="text-[#D47D5A] font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Options matérielles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                option: "Oreillette supplémentaire",
                description: "Ajout d'oreillette au parc existant",
                price: "15€ HT/mois"
              },
              {
                option: "Oreillettes premium",
                description: "Modèle à conduction osseuse, autonomie prolongée",
                price: "+5€ HT/mois par unité"
              },
              {
                option: "Hub de secours",
                description: "Système de backup en cas de panne",
                price: "29€ HT/mois"
              },
              {
                option: "Imprimante thermique",
                description: "Imprimante supplémentaire (cuisine, bar)",
                price: "19€ HT/mois"
              },
              {
                option: "Kit de charge rapide",
                description: "Station permettant de recharger 4 oreillettes en 30 minutes",
                price: "25€ HT/mois"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#F5F5F0] rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-[#1A2A40] mb-2">{item.option}</h4>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                <p className="text-[#D47D5A] font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Réductions et programmes spéciaux</h2>
        <p className="mb-6 text-gray-700">
          Nous avons développé plusieurs programmes pour rendre notre solution encore plus accessible et encourager l'adoption à long terme.
        </p>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Réductions d'engagement</h3>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Durée d'engagement</th>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Réduction sur abonnement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">18 mois</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">-10%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">24 mois</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">-15%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">36 mois</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">-20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Programme Parrainage</h3>
            <p className="text-gray-700 mb-3">Les clients existants peuvent parrainer d'autres établissements :</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>1 mois d'abonnement offert au parrain pour chaque nouveau client</li>
              <li>1 mois d'abonnement offert au filleul</li>
              <li>Cumul possible jusqu'à 6 mois d'abonnement gratuit par an</li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Programme Pionnier</h3>
            <p className="text-gray-700 mb-3">Pour les 50 premiers restaurants adoptant Sotto dans chaque nouvelle région :</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Réduction de 30% sur l'abonnement pendant 6 mois</li>
              <li>Formation premium offerte</li>
              <li>Accès anticipé aux nouvelles fonctionnalités</li>
              <li>Visibilité dans nos communications (avec accord)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Comparaison avec la concurrence</h2>
        <p className="mb-6 text-gray-700">
          Le tableau ci-dessous met en perspective notre offre par rapport aux solutions traditionnelles du marché :
        </p>

        <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-4">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Aspect</th>
                  <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Sotto</th>
                  <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Caisse traditionnelle</th>
                  <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Logiciels concurrents</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Coût initial</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">0€</td>
                  <td className="px-4 py-2 text-gray-700">2 000€ - 5 000€</td>
                  <td className="px-4 py-2 text-gray-700">500€ - 2 000€</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Abonnement mensuel</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">99€ - 349€</td>
                  <td className="px-4 py-2 text-gray-700">50€ - 150€</td>
                  <td className="px-4 py-2 text-gray-700">150€ - 400€</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Commission moyenne</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">0,6% - 1,2%</td>
                  <td className="px-4 py-2 text-gray-700">1,5% - 3%</td>
                  <td className="px-4 py-2 text-gray-700">1% - 2,5%</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Coût matériel</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">Inclus</td>
                  <td className="px-4 py-2 text-gray-700">Non inclus</td>
                  <td className="px-4 py-2 text-gray-700">Partiellement inclus</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Coût formation</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">Inclus</td>
                  <td className="px-4 py-2 text-gray-700">500€ - 1 500€</td>
                  <td className="px-4 py-2 text-gray-700">300€ - 1 000€</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Mises à jour</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">Incluses</td>
                  <td className="px-4 py-2 text-gray-700">Payantes</td>
                  <td className="px-4 py-2 text-gray-700">Partiellement incluses</td>
                </tr>
                <tr className="border-t border-gray-200 font-bold">
                  <td className="px-4 py-2 text-[#1A2A40]">Coût total sur 3 ans</td>
                  <td className="px-4 py-2 text-[#87A28F]">4 564€ - 15 064€</td>
                  <td className="px-4 py-2 text-gray-700">8 300€ - 24 200€</td>
                  <td className="px-4 py-2 text-gray-700">7 900€ - 21 400€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 italic">
          *Estimation pour un restaurant réalisant 30 000€ de CA mensuel
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Processus de facturation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Cycle de facturation</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Facturation mensuelle en début de mois</li>
              <li>Prélèvement automatique le 5 de chaque mois</li>
              <li>Facture détaillée envoyée par email le 1er du mois</li>
              <li>Possibilité de consultation en temps réel via l'espace client</li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Modalités de paiement</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Prélèvement automatique (recommandé, -0,1% sur commissions)</li>
              <li>Carte bancaire</li>
              <li>Virement bancaire (supplément de 10€ HT/mois)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Conclusion et perspectives d'évolution</h2>
        
        <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-8">
          <p className="mb-4 text-gray-700">
            La structure de prix de Sotto a été élaborée pour offrir une transparence totale et un rapport qualité-prix inégalé dans le secteur. Notre objectif est de créer une relation gagnant-gagnant où notre réussite dépend directement de celle de nos clients restaurateurs.
          </p>
          
          <p className="mb-4 text-gray-700">
            Cette structure n'est pas figée et évoluera pour intégrer :
          </p>
          
          <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
            <li>Les retours de nos premiers clients</li>
            <li>Les nouvelles fonctionnalités développées</li>
            <li>L'expansion de notre écosystème (TPE, solutions bancaires)</li>
            <li>Les spécificités des marchés internationaux</li>
          </ul>
          
          <p className="text-gray-700">
            Notre vision à long terme inclut le développement d'une offre bancaire complète et d'un système de paiement intégré qui permettront de réduire encore davantage les coûts pour les restaurateurs tout en augmentant leur contrôle sur leurs flux financiers.
          </p>
        </div>
        
        <div className="bg-[#D47D5A] bg-opacity-10 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#D47D5A] mb-4">Actions pour l'équipe commerciale :</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Programmer une session de formation sur cette nouvelle structure de prix d'ici fin du mois</li>
            <li>Préparer les simulations personnalisées pour le portefeuille clients existant</li>
            <li>Recueillir les retours du terrain après les 10 premières présentations</li>
            <li>Identifier les objections récurrentes pour affiner notre argumentaire</li>
          </ul>
        </div>
      </section>
      
      <div className="text-sm text-gray-500 italic border-t border-gray-200 pt-6">
        Document v1.2 - Dernière mise à jour : Juin 2023
      </div>
    </div>
  );
};

export default ResourceContent;
