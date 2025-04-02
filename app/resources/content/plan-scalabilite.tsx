const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans resource-content">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40] leading-tight">
          Plan de Scalabilité Technique
        </h1>
        <div className="w-20 h-1 bg-terracotta rounded-full mb-8"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Introduction</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#1A2A40]">
          À mesure que Sotto transforme l'expérience de la restauration par son système d'IA vocale, notre infrastructure technique doit être conçue pour évoluer harmonieusement. Ce document présente notre stratégie pour gérer efficacement la croissance du volume de données et d'utilisateurs, tout en maintenant des performances optimales et une expérience utilisateur fluide. Notre approche de scalabilité s'aligne sur notre mission : libérer la restauration des écrans pour créer une expérience plus humaine et efficace, sans que la technologie ne devienne un obstacle.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Principes fondamentaux de scalabilité</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Architecture évolutive</h3>
          <p className="text-lg leading-relaxed mb-4 text-[#1A2A40]">
            Notre architecture technique repose sur trois principes clés qui guident nos décisions en matière de scalabilité :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <div className="text-[#D47D5A] font-bold text-xl mb-2">1</div>
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A40]">Conception modulaire</h4>
              <p className="text-[#1A2A40]">Chaque composant du système est conçu comme un module indépendant pouvant évoluer séparément</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <div className="text-[#D47D5A] font-bold text-xl mb-2">2</div>
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A40]">Élasticité native</h4>
              <p className="text-[#1A2A40]">Capacité d'adaptation automatique aux variations de charge</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <div className="text-[#D47D5A] font-bold text-xl mb-2">3</div>
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A40]">Observabilité intégrée</h4>
              <p className="text-[#1A2A40]">Surveillance continue des performances pour anticiper les besoins d'évolution</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Indicateurs de performance critiques</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <thead className="bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Indicateur</th>
                  <th className="py-3 px-4 text-left text-white">Objectif</th>
                  <th className="py-3 px-4 text-left text-white">Seuil d'alerte</th>
                  <th className="py-3 px-4 text-left text-white">Plan d'action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Latence reconnaissance vocale</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">&lt; 200ms</td>
                  <td className="py-3 px-4 text-[#D47D5A]">&gt; 350ms</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Optimisation des modèles LLM ou augmentation ressources</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Temps de réponse système</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">&lt; 500ms</td>
                  <td className="py-3 px-4 text-[#D47D5A]">&gt; 800ms</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Scaling horizontal des services backend</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Taux d'erreur reconnaissance</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">&lt; 5%</td>
                  <td className="py-3 px-4 text-[#D47D5A]">&gt; 8%</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Réentraînement des modèles avec données récentes</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Disponibilité système</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">99.95%</td>
                  <td className="py-3 px-4 text-[#D47D5A]">&lt; 99.9%</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Révision architecture de redondance</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Utilisation mémoire/CPU</td>
                  <td className="py-3 px-4 text-[#87A28F] font-medium">&lt; 70%</td>
                  <td className="py-3 px-4 text-[#D47D5A]">&gt; 85%</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Scaling vertical ou horizontal automatique</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Stratégies de scalabilité par composant</h2>
        
        <div className="mb-10">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#D47D5A] mb-8">
            <h3 className="text-xl font-semibold mb-3 text-[#1A2A40]">1. Traitement vocal et LLM</h3>
            <p className="text-[#1A2A40] mb-4">
              Le composant de reconnaissance et traitement vocal constitue le cœur de notre système et doit maintenir des performances optimales même sous charge élevée.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Architecture actuelle</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>Modèles LLM hébergés sur infrastructure cloud avec GPU dédiés</li>
                <li>Streaming des requêtes audio via WebSockets</li>
                <li>Mise en cache des réponses communes pour réduire la latence</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#1A2A40] mb-2">Stratégies d'évolution</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D47D5A] font-medium">Scaling vertical</span>
                  <p className="text-sm text-[#1A2A40]">Augmentation progressive des ressources GPU/TPU selon les besoins</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D47D5A] font-medium">Distillation de modèles</span>
                  <p className="text-sm text-[#1A2A40]">Création de versions allégées des modèles pour les requêtes courantes</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D47D5A] font-medium">Déploiement géographique</span>
                  <p className="text-sm text-[#1A2A40]">Réplication des modèles dans différentes régions pour réduire la latence</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D47D5A] font-medium">Quantification adaptative</span>
                  <p className="text-sm text-[#1A2A40]">Ajustement dynamique de la précision des modèles selon la charge</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#87A28F] mb-8">
            <h3 className="text-xl font-semibold mb-3 text-[#1A2A40]">2. Backend Next.js et API</h3>
            <p className="text-[#1A2A40] mb-4">
              Notre backend doit gérer efficacement un nombre croissant de restaurants et d'utilisateurs simultanés.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Architecture actuelle</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>Application Next.js déployée sur Vercel</li>
                <li>API Routes pour les opérations CRUD</li>
                <li>Stockage temporaire Airtable pour la phase MVP</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Stratégies d'évolution</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#87A28F] font-medium">Migration base de données</span>
                  <p className="text-sm text-[#1A2A40]">Transition d'Airtable vers PostgreSQL pour les données critiques</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#87A28F] font-medium">Serverless Functions</span>
                  <p className="text-sm text-[#1A2A40]">Décomposition des services en fonctions serverless pour scaling automatique</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#87A28F] font-medium">Edge Functions</span>
                  <p className="text-sm text-[#1A2A40]">Déploiement des fonctions critiques au plus près des utilisateurs</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#87A28F] font-medium">Caching intelligent</span>
                  <p className="text-sm text-[#1A2A40]">Mise en cache des données fréquemment accédées avec invalidation sélective</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#1A2A40] mb-2">Exemple de code</h4>
              <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                <pre className="text-gray-100 text-sm font-mono">
                  <code>{`// Exemple de pattern de cache avec invalidation sélective
export async function getRestaurantMenu(restaurantId) {
  const cacheKey = \`menu:\${restaurantId}\`;
  
  // Vérifier le cache d'abord
  const cachedData = await redis.get(cacheKey);
  if (cachedData) return JSON.parse(cachedData);
  
  // Sinon, récupérer depuis la base de données
  const menu = await db.menus.findUnique({ where: { restaurantId } });
  
  // Stocker en cache avec TTL et tags pour invalidation ciblée
  await redis.set(cacheKey, JSON.stringify(menu), {
    ex: 3600, // Expiration après 1h
    tags: [\`restaurant:\${restaurantId}\`]
  });
  
  return menu;
}`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#D4B483] mb-8">
            <h3 className="text-xl font-semibold mb-3 text-[#1A2A40]">3. Communication temps réel</h3>
            <p className="text-[#1A2A40] mb-4">
              La communication entre les oreillettes et le système central doit rester fiable même avec un grand nombre d'utilisateurs simultanés.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Architecture actuelle</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>WebSockets pour communication bidirectionnelle</li>
                <li>Serveur Socket.io pour gestion des connexions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#1A2A40] mb-2">Stratégies d'évolution</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D4B483] font-medium">Architecture pub/sub</span>
                  <p className="text-sm text-[#1A2A40]">Implémentation d'un système de publication/abonnement avec Redis pour distribuer la charge</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D4B483] font-medium">Sharding par restaurant</span>
                  <p className="text-sm text-[#1A2A40]">Segmentation des connexions par établissement</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D4B483] font-medium">Heartbeat optimisé</span>
                  <p className="text-sm text-[#1A2A40]">Réduction de la fréquence des messages de maintien de connexion</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#D4B483] font-medium">Reconnexion intelligente</span>
                  <p className="text-sm text-[#1A2A40]">Algorithme de backoff exponentiel avec état local</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#1A2A40]">
            <h3 className="text-xl font-semibold mb-3 text-[#1A2A40]">4. Stockage et analyse des données</h3>
            <p className="text-[#1A2A40] mb-4">
              L'accumulation de données d'utilisation et d'historique des commandes nécessite une stratégie d'évolution du stockage.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Architecture actuelle</h4>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>Stockage primaire dans Airtable</li>
                <li>Exports périodiques pour analyses</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#1A2A40] mb-2">Stratégies d'évolution</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-[#1A2A40] mb-2">Architecture multi-niveaux :</h5>
                <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                  <li>Données chaudes : Base relationnelle pour accès rapide</li>
                  <li>Données tièdes : Base NoSQL pour flexibilité</li>
                  <li>Données froides : Stockage objet pour archivage</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#1A2A40] font-medium">Partitionnement</span>
                  <p className="text-sm text-[#1A2A40]">Segmentation des données par restaurant et par période</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#1A2A40] font-medium">Agrégation temporelle</span>
                  <p className="text-sm text-[#1A2A40]">Condensation progressive des données historiques</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-[#1A2A40] font-medium">Analyses asynchrones</span>
                  <p className="text-sm text-[#1A2A40]">Découplage des opérations d'analyse des opérations transactionnelles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Plan de mise à l'échelle progressive</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#1A2A40]">
          Notre approche de scalabilité s'articule en phases correspondant à notre croissance :
        </p>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold text-lg mr-4">1</div>
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200 flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-[#1A2A40]">Phase 1: Optimisation MVP (1-10 restaurants)</h3>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>Optimisation des performances sur l'infrastructure existante</li>
                <li>Mise en place des métriques de surveillance</li>
                <li>Identification des premiers goulets d'étranglement</li>
              </ul>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#87A28F] text-white flex items-center justify-center font-bold text-lg mr-4">2</div>
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200 flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-[#1A2A40]">Phase 2: Fondations robustes (10-50 restaurants)</h3>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>Migration vers une base de données relationnelle</li>
                <li>Implémentation du scaling automatique</li>
                <li>Mise en place d'une architecture de cache distribuée</li>
              </ul>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#D4B483] text-white flex items-center justify-center font-bold text-lg mr-4">3</div>
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200 flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-[#1A2A40]">Phase 3: Expansion régionale (50-200 restaurants)</h3>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>Déploiement multi-régional</li>
                <li>Sharding des données par zone géographique</li>
                <li>Optimisation des modèles LLM par région linguistique</li>
              </ul>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold text-lg mr-4">4</div>
            <div className="bg-white rounded-lg p-5 shadow-md border border-gray-200 flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-[#1A2A40]">Phase 4: Échelle nationale (200+ restaurants)</h3>
              <ul className="list-disc pl-5 text-[#1A2A40] space-y-1">
                <li>Architecture entièrement distribuée</li>
                <li>Réplication active-active entre régions</li>
                <li>Systèmes prédictifs d'allocation des ressources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Gestion des pics d'utilisation</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#1A2A40]">
          Les restaurants connaissent des pics d'activité prévisibles (services midi/soir) et imprévisibles (événements spéciaux).
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Stratégies d'adaptation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="bg-[#D47D5A] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Scaling proactif</h4>
                <p className="text-sm text-[#1A2A40]">Augmentation automatique des ressources avant les heures de pointe connues</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="bg-[#87A28F] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Dégradation gracieuse</h4>
                <p className="text-sm text-[#1A2A40]">Priorisation des fonctionnalités critiques en cas de surcharge</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="bg-[#D4B483] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Mode hors-ligne robuste</h4>
                <p className="text-sm text-[#1A2A40]">Fonctionnement autonome temporaire des oreillettes avec synchronisation différée</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="bg-[#1A2A40] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A2A40] mb-1">Équilibrage de charge intelligent</h4>
                <p className="text-sm text-[#1A2A40]">Répartition dynamique basée sur la capacité et la proximité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Considérations de coûts et d'efficience</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#1A2A40]">
          La scalabilité doit être économiquement viable pour maintenir notre modèle d'abonnement compétitif.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Optimisations coût/performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-[#D47D5A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold text-[#1A2A40]">Instances réservées</h4>
              </div>
              <p className="text-sm text-[#1A2A40]">Engagement sur les ressources de base avec scaling à la demande pour les pics</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-[#87A28F] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <h4 className="font-semibold text-[#1A2A40]">Stockage hiérarchisé</h4>
              </div>
              <p className="text-sm text-[#1A2A40]">Migration automatique des données selon leur fréquence d'accès</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-[#D4B483] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <h4 className="font-semibold text-[#1A2A40]">Optimisation des modèles</h4>
              </div>
              <p className="text-sm text-[#1A2A40]">Équilibre entre précision et coût computationnel</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-[#1A2A40] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h4 className="font-semibold text-[#1A2A40]">Analyse continue des coûts</h4>
              </div>
              <p className="text-sm text-[#1A2A40]">Surveillance et optimisation régulière des dépenses cloud</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40]">Conclusion</h2>
        <div className="bg-[#F5F5F0] rounded-lg p-6 border-l-4 border-[#D47D5A] shadow-md">
          <p className="text-lg leading-relaxed mb-4 text-[#1A2A40]">
            Notre plan de scalabilité technique est conçu pour accompagner harmonieusement la croissance de Sotto, en garantissant une expérience utilisateur fluide et des performances optimales à chaque étape. Cette approche progressive nous permet d'investir intelligemment dans notre infrastructure tout en maintenant l'équilibre entre coûts et performances.
          </p>
          <p className="text-lg leading-relaxed text-[#1A2A40]">
            La scalabilité de Sotto ne concerne pas uniquement la technologie, mais aussi notre capacité à préserver l'essence de notre produit : discret, efficace et centré sur l'humain. Notre infrastructure doit suivre ces mêmes principes, en fonctionnant de manière invisible et fiable pour que la technologie reste au service de l'expérience humaine, jamais l'inverse.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Prochaines étapes</h3>
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="h-5 w-5 border border-[#D47D5A] rounded mr-3 flex-shrink-0"></div>
              <span className="text-[#1A2A40]">Finaliser les benchmarks de performance pour établir nos références</span>
            </div>
            <div className="flex items-center">
              <div className="h-5 w-5 border border-[#D47D5A] rounded mr-3 flex-shrink-0"></div>
              <span className="text-[#1A2A40]">Implémenter la surveillance complète des métriques critiques</span>
            </div>
            <div className="flex items-center">
              <div className="h-5 w-5 border border-[#D47D5A] rounded mr-3 flex-shrink-0"></div>
              <span className="text-[#1A2A40]">Développer un prototype de scaling automatique pour le traitement vocal</span>
            </div>
            <div className="flex items-center">
              <div className="h-5 w-5 border border-[#D47D5A] rounded mr-3 flex-shrink-0"></div>
              <span className="text-[#1A2A40]">Planifier la migration d'Airtable vers une solution de base de données évolutive</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;