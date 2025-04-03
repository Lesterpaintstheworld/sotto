const ResourceContent = () => {
  return (
    <div className="resource-content max-w-4xl mx-auto px-4 py-8 bg-[#F5F5F0] dark:bg-[#1A2A40]/10 rounded-lg">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Plan Go-to-Market
        </h1>
        <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/90 italic">
          Document stratégique interne - Sotto
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Introduction
        </h2>
        <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/90 leading-relaxed">
          Ce plan Go-to-Market définit notre stratégie de lancement pour Sotto, notre système d'interface vocale IA pour restaurants. Il détaille notre approche de segmentation du marché, identifie nos premiers utilisateurs cibles et établit une feuille de route claire pour l'acquisition et la fidélisation des clients. Ce document servira de guide stratégique pour aligner nos équipes produit, marketing, vente et support autour d'objectifs communs, en cohérence avec notre vision de libérer les restaurants des écrans pour créer une expérience plus humaine et efficace.
        </p>
        <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/90 leading-relaxed mt-4">
          Ce plan s'appuie sur le partenariat stratégique avec Au Comptoir de la Caisse (ACDC), qui dispose déjà d'une base de 4500 clients restaurateurs à travers la France. Cette relation privilégiée avec le marché constitue un avantage concurrentiel majeur et accélérateur de croissance pour le déploiement de Sotto.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Analyse du marché et positionnement
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Contexte du marché
          </h3>
          <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
            Le secteur de la restauration fait face à plusieurs défis majeurs :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Coûts d'exploitation en hausse (personnel, loyer, matières premières)",
              "Marges bénéficiaires réduites (5-10% en moyenne)",
              "Pénurie de main-d'œuvre qualifiée (turnover moyen de 75%)",
              "Systèmes d'encaissement traditionnels coûteux (TEG 20-30%)",
              "Fragmentation technologique créant des inefficacités opérationnelles",
              "Expérience client impactée par l'omniprésence des écrans"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow-md border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Notre positionnement unique
          </h3>
          <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
            Sotto se distingue sur le marché par :
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Approche centrée sur l'humain",
                description: "Élimination des écrans pour recentrer l'attention sur l'expérience client"
              },
              {
                title: "Solution intégrée",
                description: "Partie d'un écosystème complet d'encaissement intelligent"
              },
              {
                title: "Réduction des coûts opérationnels",
                description: "Matériel minimal et optimisation des processus"
              },
              {
                title: "Amélioration de l'efficacité",
                description: "Communication fluide entre équipes et automatisation des tâches"
              },
              {
                title: "Expérience distinctive",
                description: "Création d'un environnement de service plus attentif et personnalisé"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#87A28F]"
              >
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">{item.title}</h4>
                <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Analyse concurrentielle
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A] dark:text-[#F5F5F0]">
                <tr>
                  <th className="py-3 px-4 text-left">Concurrent</th>
                  <th className="py-3 px-4 text-left">Type de solution</th>
                  <th className="py-3 px-4 text-left">Forces</th>
                  <th className="py-3 px-4 text-left">Faiblesses</th>
                  <th className="py-3 px-4 text-left">Notre différenciation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Systèmes de caisse traditionnels</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Écrans tactiles</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Familiarité, robustesse</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Coûteux, encombrants, formation complexe</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Interface vocale, pas d'écran, intégration complète</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Solutions mobiles (tablettes)</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Applications sur tablettes</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Mobilité, coût initial réduit</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Fragilité, distractions, batterie</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Mains libres, attention non divisée</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Caisses cloud</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">SaaS avec matériel</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Mises à jour automatiques, données centralisées</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Dépendance internet, toujours des écrans</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Interface naturelle, apprentissage intuitif</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Assistants vocaux génériques</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">IA vocale grand public</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Reconnaissance vocale</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Non spécialisés pour la restauration</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Vocabulaire spécifique, intégration métier</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Segmentation et clients cibles
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Segmentation primaire
          </h3>
          <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
            Nous avons identifié trois segments prioritaires pour notre phase de lancement, avec une attention particulière sur la base existante de 4500 clients d'Au Comptoir de la Caisse :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#D47D5A]">
              <div className="p-5">
                <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Clients existants d'Au Comptoir de la Caisse</h4>
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Relation de confiance déjà établie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Connaissance approfondie de leurs besoins et configurations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Opportunité de vente croisée avec les solutions déjà en place</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#87A28F]">
              <div className="p-5">
                <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Restaurants indépendants premium</h4>
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Établissements valorisant l'expérience client et le service attentif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Ticket moyen supérieur à 35€</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Sensibles à leur image de marque et à l'innovation discrète</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#D4B483]">
              <div className="p-5">
                <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">Concepts de restauration nouvelle génération</h4>
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Restaurants hybrides (café/coworking, restaurant/épicerie)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Fondés par des entrepreneurs tech-friendly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Cherchant à se différencier par l'expérience client</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Profils d'utilisateurs cibles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white p-4">
                <h4 className="font-bold">Profil décideur primaire</h4>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#D47D5A] mr-2">•</span>
                    <span><strong>Propriétaire-exploitant</strong> (35-55 ans)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#D47D5A] mr-2">•</span>
                    <span>Gère activement son établissement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#D47D5A] mr-2">•</span>
                    <span>Cherche des solutions pour se démarquer et optimiser ses opérations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#D47D5A] mr-2">•</span>
                    <span>Sensible aux coûts mais prêt à investir pour une valeur ajoutée claire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#D47D5A] mr-2">•</span>
                    <span>Frustré par les systèmes actuels et leurs limitations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#87A28F] text-white p-4">
                <h4 className="font-bold">Profil utilisateur quotidien</h4>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span><strong>Personnel de service</strong> (23-45 ans)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Expérience variable en restauration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Souvent multitâche et sous pression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Recherche des outils qui simplifient le travail sans ajouter de complexité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Préfère l'interaction humaine aux interfaces techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Stratégie de lancement
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white p-4">
              <h3 className="font-bold text-xl">Phase 1 : Pilote accéléré (1 mois)</h3>
            </div>
            <div className="p-5">
              <p className="font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                <span className="text-[#D47D5A]">Objectif :</span> Valider le produit en conditions réelles avec 50-75 établissements partenaires, principalement issus de la base clients ACDC
              </p>
              <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Déploiement simultané dans plusieurs zones géographiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Installation rapide et formation intensive par notre équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Collecte automatisée de feedback via plateforme dédiée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Itérations hebdomadaires du produit basées sur les retours utilisateurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Documentation des études de cas et calcul du ROI réel</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#87A28F] text-white p-4">
              <h3 className="font-bold text-xl">Phase 2 : Lancement massif (3 mois)</h3>
            </div>
            <div className="p-5">
              <p className="font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                <span className="text-[#87A28F] dark:text-[#87A28F]">Objectif :</span> Atteindre 500 établissements actifs en ciblant prioritairement les clients ACDC dans 10 zones géographiques
              </p>
              <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                <li className="flex items-start">
                  <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                  <span>Déploiement commercial national avec équipes régionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                  <span>Programme d'ambassadeurs avec incitatifs pour les premiers clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                  <span>Événements de démonstration simultanés dans plusieurs villes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                  <span>Développement de partenariats avec des consultants en restauration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                  <span>Processus d'onboarding optimisé pour des déploiements rapides</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#D4B483] text-white p-4">
              <h3 className="font-bold text-xl">Phase 3 : Expansion nationale (6 mois)</h3>
            </div>
            <div className="p-5">
              <p className="font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                <span className="text-[#D4B483] dark:text-[#D4B483]">Objectif :</span> Atteindre 2000+ établissements et préparer l'internationalisation, avec un taux de pénétration de 45% de la base clients ACDC
              </p>
              <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                <li className="flex items-start">
                  <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                  <span>Couverture commerciale complète du territoire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                  <span>Automatisation complète du processus d'onboarding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                  <span>Développement de programmes spécifiques pour les groupes multi-sites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                  <span>Préparation des adaptations linguistiques et culturelles pour l'international</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                  <span>Construction d'une communauté active d'utilisateurs ambassadeurs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Plan d'acquisition
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Canaux d'acquisition prioritaires
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
              <div className="p-5">
                <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#D47D5A] pb-2">
                  1. Activation de la base clients ACDC
                </h4>
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Programme de présentation dédié aux clients existants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Offres préférentielles pour les clients fidèles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Intégration facilitée avec les systèmes déjà en place</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
              <div className="p-5">
                <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#87A28F] pb-2">
                  2. Vente directe consultative
                </h4>
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Consultants et agences spécialisés en restauration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Fournisseurs complémentaires (mobilier, équipement cuisine)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Écoles hôtelières et incubateurs food-tech</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
              <div className="p-5">
                <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#D4B483] pb-2">
                  3. Partenariats stratégiques
                </h4>
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Études de cas détaillées avec métriques d'impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Contenu éducatif sur la transformation digitale en restauration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Webinaires et événements virtuels de démonstration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
              <div className="p-5">
                <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#1A2A40] dark:border-[#F5F5F0] pb-2">
                  4. Marketing de contenu ciblé
                </h4>
                <ul className="space-y-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0] mr-2">•</span>
                    <span>Salons professionnels majeurs (SIRHA, EquipHotel)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0] mr-2">•</span>
                    <span>Événements locaux dans nos zones d'expansion prioritaires</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A2A40] dark:text-[#F5F5F0] mr-2">•</span>
                    <span>Organisation de tables rondes sur l'avenir de la restauration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Parcours d'acquisition type
          </h3>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 p-6 rounded-lg shadow-md mb-6">
            <div className="text-center text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-8">
              <p className="italic">Sensibilisation → Intérêt → Évaluation → Essai → Adoption → Expansion</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  step: "Sensibilisation",
                  description: "Contenu éducatif, présence médias spécialisés",
                  color: "border-[#D47D5A]"
                },
                {
                  step: "Intérêt",
                  description: "Webinaires, témoignages clients, démonstrations vidéo",
                  color: "border-[#87A28F]"
                },
                {
                  step: "Évaluation",
                  description: "Consultation personnalisée, visite d'établissement équipé",
                  color: "border-[#D4B483]"
                },
                {
                  step: "Essai",
                  description: "Période d'essai encadrée (2 semaines), formation complète",
                  color: "border-[#1A2A40]"
                },
                {
                  step: "Adoption",
                  description: "Déploiement complet, suivi régulier, optimisation continue",
                  color: "border-[#D47D5A]"
                },
                {
                  step: "Expansion",
                  description: "Extension à d'autres établissements, adoption de fonctionnalités avancées",
                  color: "border-[#87A28F]"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${item.color} border-l-4 shadow hover:shadow-md transition-shadow duration-300 bg-white/50 dark:bg-[#1A2A40]/60`}
                >
                  <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-1">{index + 1}. {item.step}</h4>
                  <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Stratégie de tarification
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Structure tarifaire
          </h3>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 p-6 rounded-lg shadow-md mb-6">
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
              Nous adoptons un modèle SaaS avec matériel inclus :
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center p-4 bg-[#F5F5F0] dark:bg-[#1A2A40] rounded-lg">
                <div className="font-bold text-[#D47D5A] text-xl md:w-1/3 mb-2 md:mb-0">Frais d'installation</div>
                <div className="md:w-2/3">
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0] font-medium">990€</span>
                  <span className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/90 ml-2">(offerts pour les 50 premiers clients)</span>
                </div>
              </div>
              
              <div className="flex flex-col p-4 bg-[#F5F5F0] dark:bg-[#1A2A40] rounded-lg">
                <div className="font-bold text-[#87A28F] text-xl mb-2">Abonnement mensuel</div>
                <div className="mb-2">
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0] font-medium">À partir de 199€/mois</span>
                  <span className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/90 ml-2">pour un établissement standard</span>
                </div>
                <ul className="space-y-1 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Inclut le matériel (oreillettes, points de charge)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Support prioritaire et mises à jour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>Formation initiale et continue</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col p-4 bg-[#F5F5F0] dark:bg-[#1A2A40] rounded-lg">
                <div className="font-bold text-[#D4B483] text-xl mb-2">Options supplémentaires</div>
                <ul className="space-y-1 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90 ml-4">
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Utilisateurs additionnels : 29€/mois par utilisateur au-delà de 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Module analytique avancé : +99€/mois</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>Intégration API personnalisée : Sur devis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Stratégie de prix par segment
          </h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A] dark:text-[#F5F5F0]">
                <tr>
                  <th className="py-3 px-4 text-left">Segment</th>
                  <th className="py-3 px-4 text-left">Stratégie tarifaire</th>
                  <th className="py-3 px-4 text-left">Argument de vente principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Restaurants indépendants premium</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Prix standard avec options à la carte</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Amélioration de l'expérience client et image de marque</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Petits groupes</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Remise volume progressive</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Cohérence d'opération et données centralisées</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40] transition-colors duration-150">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Concepts nouvelle génération</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Forfait tout inclus avec analytics</td>
                  <td className="py-3 px-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">Différenciation et innovation visible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Plan d'implémentation et support
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Processus d'onboarding
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              {
                title: "Audit préalable (1 jour)",
                items: [
                  "Évaluation de l'infrastructure réseau",
                  "Analyse des processus opérationnels actuels",
                  "Identification des points d'intégration"
                ],
                color: "border-[#D47D5A]"
              },
              {
                title: "Installation et configuration (1-2 jours)",
                items: [
                  "Mise en place du matériel et connexion au système",
                  "Configuration du menu et des processus spécifiques",
                  "Tests de performance en environnement réel"
                ],
                color: "border-[#87A28F]"
              },
              {
                title: "Formation initiale (2 jours)",
                items: [
                  "Formation des managers (4h)",
                  "Sessions pratiques avec le personnel (2 x 3h)",
                  "Simulation de service complet"
                ],
                color: "border-[#D4B483]"
              },
              {
                title: "Période d'accompagnement (2 semaines)",
                items: [
                  "Présence sur site lors des premiers services",
                  "Ajustements en temps réel",
                  "Collecte de feedback quotidien"
                ],
                color: "border-[#1A2A40]"
              }
            ].map((phase, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${phase.color} border-t-4`}
              >
                <div className="p-5">
                  <h4 className="font-bold text-lg text-[#1A2A40] dark:text-[#F5F5F0] mb-3">{index + 1}. {phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                        <span className={`${phase.color.replace('border-', 'text-')} mr-2`}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Support continu
          </h3>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 p-6 rounded-lg shadow-md mb-6">
            <ul className="space-y-4">
              {[
                {
                  title: "Support technique dédié",
                  description: "7j/7 pendant les heures de service",
                  icon: "🔧"
                },
                {
                  title: "Mises à jour mensuelles",
                  description: "basées sur le feedback utilisateur",
                  icon: "🔄"
                },
                {
                  title: "Webinaires de formation continue",
                  description: "bimensuels",
                  icon: "🎓"
                },
                {
                  title: "Revues trimestrielles de performance",
                  description: "avec recommandations personnalisées",
                  icon: "📊"
                }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="text-2xl mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0]">{item.title}</h4>
                    <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/90">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Indicateurs de performance clés
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white p-4">
              <h3 className="font-bold">KPIs commerciaux</h3>
            </div>
            <div className="p-5">
              <ul className="space-y-2">
                {[
                  "Taux de conversion des démonstrations (objectif : >30%)",
                  "Coût d'acquisition client (objectif : <3000€)",
                  "Délai moyen de conversion (objectif : <45 jours)",
                  "Taux de pénétration par zone géographique"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#87A28F] text-white p-4">
              <h3 className="font-bold">KPIs produit</h3>
            </div>
            <div className="p-5">
              <ul className="space-y-2">
                {[
                  "Taux d'adoption quotidienne (objectif : >90% du personnel)",
                  "Taux de reconnaissance vocale réussie (objectif : >95%)",
                  "Temps moyen de prise en main (objectif : <3 jours)",
                  "Net Promoter Score (objectif : >50)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                    <span className="text-[#87A28F] dark:text-[#87A28F] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg shadow-md overflow-hidden md:col-span-2">
            <div className="bg-[#D4B483] text-white p-4">
              <h3 className="font-bold">KPIs impact client</h3>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Réduction du temps de formation du personnel (objectif : -40%)",
                  "Augmentation de la vitesse de service (objectif : +15%)",
                  "Amélioration de la satisfaction client (mesurée via enquêtes)",
                  "ROI client démontrable dans les 6 premiers mois"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                    <span className="text-[#D4B483] dark:text-[#D4B483] mr-2">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 border-b border-[#D47D5A] pb-2">
          Conclusion et prochaines étapes
        </h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/80 p-6 rounded-lg shadow-md mb-8">
          <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/90 leading-relaxed mb-6">
            Ce plan Go-to-Market positionne Sotto pour un lancement ambitieux et accéléré, en capitalisant sur la base existante de 4500 clients d'Au Comptoir de la Caisse. Cette relation privilégiée nous permet d'envisager une adoption rapide et une validation à grande échelle de notre solution, tout en maintenant une approche centrée sur l'humain.
          </p>
          
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-3">
            Actions immédiates
          </h3>
          
          <div className="space-y-4">
            {[
              {
                action: "Finaliser la sélection des établissements pilotes",
                responsible: "Directeur Commercial",
                deadline: "J+15",
                color: "bg-[#D47D5A]/10 border-[#D47D5A]"
              },
              {
                action: "Compléter le matériel de vente et marketing",
                responsible: "Marketing",
                deadline: "J+30",
                color: "bg-[#87A28F]/10 border-[#87A28F]"
              },
              {
                action: "Former l'équipe commerciale et support",
                responsible: "Opérations",
                deadline: "J+45",
                color: "bg-[#D4B483]/10 border-[#D4B483]"
              },
              {
                action: "Préparer le système de collecte et analyse du feedback",
                responsible: "Produit",
                deadline: "J+30",
                color: "bg-[#1A2A40]/10 border-[#1A2A40]"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${item.color} border-l-4 p-4 rounded-lg flex flex-col md:flex-row md:items-center dark:bg-[#1A2A40]/60`}
              >
                <div className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] md:w-1/2 mb-2 md:mb-0">
                  {index + 1}. {item.action}
                </div>
                <div className="flex flex-col md:flex-row md:w-1/2">
                  <div className="md:w-1/2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                    <span className="font-medium">Responsable:</span> {item.responsible}
                  </div>
                  <div className="md:w-1/2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/90">
                    <span className="font-medium">Échéance:</span> {item.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#1A2A40] dark:bg-[#D47D5A] text-white p-6 rounded-lg shadow-md">
          <p className="leading-relaxed">
            Notre succès dépendra de notre capacité à démontrer rapidement la valeur tangible de Sotto pour chaque segment de clientèle, tout en maintenant une expérience produit exceptionnelle dès les premières installations. L'alignement de toutes les équipes autour de cette vision sera essentiel pour transformer la façon dont la technologie s'intègre dans l'univers de la restauration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;
