const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold text-[#1A2A40] mb-4">Structure de Prix</h1>
        <p className="italic text-[#1A2A40] opacity-80">
          Document interne - Modèles d'abonnement, commissions et options premium pour l'écosystème Sotto
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Introduction</h2>
        <div className="prose max-w-none">
          <p className="mb-4 text-[#1A2A40]">
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
        <p className="mb-4 text-[#1A2A40]">
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
              className={`${principle.color} rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="font-bold text-xl mb-2 text-white">Transparence totale</h3>
              <p className="text-white">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Tarification par oreillette</h2>
        <p className="mb-6 text-[#1A2A40]">
          Nous proposons une structure tarifaire simplifiée basée sur le nombre d'oreillettes, avec tous les services inclus.
        </p>

        <div className="mb-10">
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Prix unique par oreillette</h3>
            <p className="mb-4 text-[#1A2A40] font-medium">
              <span className="text-2xl font-bold text-[#D47D5A]">79€ HT</span> par oreillette et par mois
            </p>
            <ul className="list-disc pl-5 text-[#1A2A40] space-y-2">
              <li>Tout inclus : matériel, logiciel, support premium, utilisation illimitée</li>
              <li>Engagement minimum de 12 mois</li>
            </ul>
          </div>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md mb-6">
            <h4 className="font-semibold mb-3 text-[#1A2A40]">Paliers dégressifs automatiques :</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Nombre d'oreillettes</th>
                    <th className="px-4 py-2 text-left text-[#1A2A40] font-semibold">Prix unitaire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">1-5 oreillettes</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">79€ HT/oreillette/mois</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">6-10 oreillettes</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">74€ HT/oreillette/mois</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">11-20 oreillettes</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">69€ HT/oreillette/mois</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 text-[#1A2A40]">21+ oreillettes</td>
                    <td className="px-4 py-2 font-medium text-[#D47D5A]">64€ HT/oreillette/mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Tout inclus pour tous</h3>
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <p className="mb-4 text-[#1A2A40]">
              Chaque client bénéficie de :
            </p>
            <ul className="list-disc pl-5 text-[#1A2A40] space-y-2">
              <li>Support premium 24/7 avec manager de compte dédié</li>
              <li>Toutes les fonctionnalités de la plateforme sans restriction</li>
              <li>Utilisation illimitée des API (pas de quotas)</li>
              <li>Formation complète incluse</li>
              <li>Mises à jour prioritaires</li>
              <li>Matériel de remplacement sous 24h</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Options simplifiées</h2>
        <p className="mb-6 text-[#1A2A40]">
          Seulement deux options additionnelles pour une clarté maximale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Oreillettes premium</h3>
            <p className="text-[#1A2A40] mb-2">Conduction osseuse, autonomie prolongée</p>
            <p className="text-xl font-bold text-[#D47D5A]">+10€ HT/mois</p>
            <p className="text-sm text-[#1A2A40] mt-2">par oreillette</p>
          </div>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Multi-établissements</h3>
            <p className="text-[#1A2A40] mb-2">Configuration pour plusieurs restaurants</p>
            <p className="text-xl font-bold text-[#D47D5A]">250€ HT</p>
            <p className="text-sm text-[#1A2A40] mt-2">frais unique par établissement supplémentaire</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Commission sur transactions</h2>
        <div className="mb-10">
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#D47D5A] flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-white">0,8%</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A2A40]">Taux fixe sur toutes les transactions</h3>
              </div>
            </div>
            
            <ul className="list-disc pl-5 text-[#1A2A40] space-y-2 mt-4">
              <li><span className="font-medium">Sans plafond :</span> La commission s'applique sur l'ensemble du volume de transactions</li>
              <li><span className="font-medium">Transparence :</span> Facturation mensuelle détaillée</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Programmes spéciaux</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Programme Engagement</h3>
            <div className="flex items-center mb-3">
              <div className="bg-[#D47D5A]/10 text-[#D47D5A] font-bold text-xl px-3 py-1 rounded mr-2">-15%</div>
              <p className="text-[#1A2A40]">sur le prix des oreillettes</p>
            </div>
            <p className="text-[#1A2A40]">Pour engagement de 24 mois</p>
          </div>
          
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#87A28F]">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Programme Parrainage</h3>
            <div className="flex items-center mb-3">
              <div className="bg-[#87A28F]/10 text-[#87A28F] font-bold text-xl px-3 py-1 rounded mr-2">1 mois</div>
              <p className="text-[#1A2A40]">offert</p>
            </div>
            <p className="text-[#1A2A40]">Pour le parrain et le filleul</p>
          </div>
        </div>
      </section>


      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Comparaison avec la concurrence</h2>
        <p className="mb-6 text-[#1A2A40]">
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
                  <td className="px-4 py-2 text-[#1A2A40]">2 000€ - 5 000€</td>
                  <td className="px-4 py-2 text-[#1A2A40]">500€ - 2 000€</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Abonnement mensuel</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">79€ par oreillette</td>
                  <td className="px-4 py-2 text-[#1A2A40]">50€ - 150€</td>
                  <td className="px-4 py-2 text-[#1A2A40]">150€ - 400€</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Commission moyenne</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">0,8% fixe</td>
                  <td className="px-4 py-2 text-[#1A2A40]">1,5% - 3%</td>
                  <td className="px-4 py-2 text-[#1A2A40]">1% - 2,5%</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Coût matériel</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">Inclus</td>
                  <td className="px-4 py-2 text-[#1A2A40]">Non inclus</td>
                  <td className="px-4 py-2 text-[#1A2A40]">Partiellement inclus</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Coût formation</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">Inclus</td>
                  <td className="px-4 py-2 text-[#1A2A40]">500€ - 1 500€</td>
                  <td className="px-4 py-2 text-[#1A2A40]">300€ - 1 000€</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-4 py-2 text-[#1A2A40]">Mises à jour</td>
                  <td className="px-4 py-2 font-medium text-[#87A28F]">Incluses</td>
                  <td className="px-4 py-2 text-[#1A2A40]">Payantes</td>
                  <td className="px-4 py-2 text-[#1A2A40]">Partiellement incluses</td>
                </tr>
                <tr className="border-t border-gray-200 font-bold">
                  <td className="px-4 py-2 text-[#1A2A40]">Coût total sur 3 ans</td>
                  <td className="px-4 py-2 text-[#87A28F]">4 500€ - 14 000€</td>
                  <td className="px-4 py-2 text-[#1A2A40]">8 300€ - 24 200€</td>
                  <td className="px-4 py-2 text-[#1A2A40]">7 900€ - 21 400€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="text-sm text-[#1A2A40] italic">
          *Estimation pour un restaurant réalisant 30 000€ de CA mensuel avec 5 oreillettes
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Processus de facturation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Cycle de facturation</h3>
            <ul className="list-disc pl-5 text-[#1A2A40] space-y-2">
              <li>Facturation mensuelle en début de mois</li>
              <li>Prélèvement automatique le 5 de chaque mois</li>
              <li>Facture détaillée envoyée par email le 1er du mois</li>
              <li>Possibilité de consultation en temps réel via l'espace client</li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Modalités de paiement</h3>
            <ul className="list-disc pl-5 text-[#1A2A40] space-y-2">
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
          <p className="mb-4 text-[#1A2A40]">
            La structure tarifaire simplifiée de Sotto a été élaborée pour offrir une transparence totale et un rapport qualité-prix inégalé dans le secteur. Notre objectif est de créer une relation gagnant-gagnant où notre réussite dépend directement de celle de nos clients restaurateurs.
          </p>
          
          <p className="mb-4 text-[#1A2A40] font-medium">
            Avantages de notre nouvelle structure tarifaire :
          </p>
          
          <ul className="list-disc pl-5 text-[#1A2A40] space-y-2 mb-4">
            <li><span className="font-medium">Simplicité maximale</span> : un prix unique par oreillette, tout inclus</li>
            <li><span className="font-medium">Flexibilité</span> : ajustez votre nombre d'oreillettes selon vos besoins</li>
            <li><span className="font-medium">Prévisibilité</span> : pas de surprises, vous savez exactement ce que vous payez</li>
            <li><span className="font-medium">Équité</span> : vous ne payez que pour ce que vous utilisez</li>
          </ul>
          
          <p className="text-[#1A2A40]">
            Notre vision à long terme inclut le développement d'une offre bancaire complète et d'un système de paiement intégré qui permettront de réduire encore davantage les coûts pour les restaurateurs tout en augmentant leur contrôle sur leurs flux financiers.
          </p>
        </div>
        
        <div className="bg-[#D47D5A] bg-opacity-10 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#D47D5A] mb-4">Actions pour l'équipe commerciale :</h3>
          <ul className="list-disc pl-5 text-[#1A2A40] space-y-2">
            <li>Programmer une session de formation sur cette nouvelle structure de prix d'ici fin du mois</li>
            <li>Préparer les simulations personnalisées pour le portefeuille clients existant</li>
            <li>Recueillir les retours du terrain après les 10 premières présentations</li>
            <li>Identifier les objections récurrentes pour affiner notre argumentaire</li>
          </ul>
        </div>
      </section>
      
      <div className="text-sm text-[#1A2A40] italic border-t border-gray-200 pt-6">
        Document v1.2 - Dernière mise à jour : Juin 2023
      </div>
    </div>
  );
};

export default ResourceContent;
