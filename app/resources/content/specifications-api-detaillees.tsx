const ResourceContent = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-[#1A2A40] dark:text-[#F5F5F0] border-b pb-4 border-[#D47D5A]">
        Spécifications API
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Introduction</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            Ce document détaille l'architecture et les interfaces API du système Sotto, permettant l'intégration avec les systèmes externes essentiels au fonctionnement d'un restaurant moderne. Notre approche API-first garantit une interopérabilité fluide avec les terminaux de paiement électronique (TPE), les systèmes de réservation, les plateformes de livraison, et d'autres services tiers, tout en maintenant notre engagement pour une expérience utilisateur sans friction.
          </p>
          <p className="text-lg">
            L'écosystème Sotto repose sur une architecture centralisée où l'interface vocale interagit avec de multiples services via des API robustes et sécurisées. Ce document sert de référence technique pour l'équipe de développement interne et les partenaires d'intégration potentiels.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Principes fondamentaux</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Architecture générale</h3>
          <p className="mb-4">
            Sotto utilise une architecture RESTful pour la majorité des intégrations, complétée par des connexions WebSocket pour les communications en temps réel. Notre infrastructure est conçue selon les principes suivants:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Simplicité</h4>
              <p className="text-gray-700 dark:text-gray-300">Interfaces intuitives et documentation claire</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Cohérence</h4>
              <p className="text-gray-700 dark:text-gray-300">Patterns d'API uniformes à travers tous les endpoints</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Sécurité</h4>
              <p className="text-gray-700 dark:text-gray-300">Authentification robuste et chiffrement des données</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Évolutivité</h4>
              <p className="text-gray-700 dark:text-gray-300">Capacité à évoluer sans rupture de compatibilité</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/80 p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Observabilité</h4>
              <p className="text-gray-700 dark:text-gray-300">Monitoring et logging complets</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Authentification et sécurité</h3>
          <p className="mb-6">
            Toutes les API Sotto utilisent OAuth 2.0 avec JWT (JSON Web Tokens) pour l'authentification:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                <tr>
                  <th className="py-3 px-4 text-left">Méthode</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Utilisation recommandée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-medium">Client Credentials</td>
                  <td className="py-3 px-4">Pour les communications système à système</td>
                  <td className="py-3 px-4">Intégrations TPE, systèmes de stock</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-medium">Authorization Code</td>
                  <td className="py-3 px-4">Pour les applications agissant au nom d'un utilisateur</td>
                  <td className="py-3 px-4">Applications partenaires, dashboards externes</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-medium">Device Flow</td>
                  <td className="py-3 px-4">Pour les appareils avec capacités d'entrée limitées</td>
                  <td className="py-3 px-4">Terminaux de paiement, appareils IoT</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            Les tokens d'accès ont une durée de vie limitée (1 heure) et doivent être renouvelés via refresh tokens. Toutes les communications API utilisent TLS 1.3 pour le chiffrement en transit.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Endpoints API principaux</h2>
        
        <div className="mb-10">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Core API</h3>
          <p className="mb-4">
            La Core API constitue l'interface principale pour les opérations fondamentales du restaurant.
          </p>
          
          <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
            Base URL: https://api.sotto.io/v1
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Gestion des commandes</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
                <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                  <tr>
                    <th className="py-3 px-4 text-left">Endpoint</th>
                    <th className="py-3 px-4 text-left">Méthode</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/orders</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Liste des commandes actives</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/orders</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Création d'une nouvelle commande</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/orders/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Détails d'une commande spécifique</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/orders/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 py-1 px-2 rounded text-xs font-medium">PATCH</span></td>
                    <td className="py-3 px-4">Mise à jour partielle d'une commande</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/orders/{'{id}'}/items</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Ajout d'items à une commande</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/orders/{'{id}'}/status</td>
                    <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                    <td className="py-3 px-4">Modification du statut d'une commande</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <p className="mb-2">Exemple de requête pour créer une commande:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm">
{`POST /orders
{
  "table_id": "12",
  "server_id": "server_789",
  "items": [
    {
      "menu_item_id": "burger_01",
      "quantity": 1,
      "modifications": ["sans oignon", "cuisson saignante"]
    },
    {
      "menu_item_id": "pizza_veg",
      "quantity": 1,
      "modifications": ["sans oignons"]
    }
  ],
  "beverages": [
    {
      "menu_item_id": "vin_rouge_maison",
      "quantity": 2
    }
  ]
}`}
              </pre>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Gestion des tables</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
                <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                  <tr>
                    <th className="py-3 px-4 text-left">Endpoint</th>
                    <th className="py-3 px-4 text-left">Méthode</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/tables</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Liste des tables du restaurant</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/tables/{'{id}'}/status</td>
                    <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                    <td className="py-3 px-4">Mise à jour du statut d'une table</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/tables/{'{id}'}/orders</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Commandes associées à une table</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/tables/{'{id}'}/bill</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Génération de l'addition pour une table</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/tables/{'{id}'}/split</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Division de l'addition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Gestion des menus</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
                <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                  <tr>
                    <th className="py-3 px-4 text-left">Endpoint</th>
                    <th className="py-3 px-4 text-left">Méthode</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/menu</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Menu complet actuel</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/menu/categories</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Catégories du menu</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/menu/items</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Tous les items du menu</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/menu/items/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Détails d'un item spécifique</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/menu/availability</td>
                    <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                    <td className="py-3 px-4">Mise à jour de la disponibilité des items</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Payments API</h3>
          <p className="mb-4">
            L'API de paiements gère toutes les transactions financières et l'intégration avec les TPE.
          </p>
          
          <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
            Base URL: https://payments.sotto.io/v1
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Transactions</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
                <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                  <tr>
                    <th className="py-3 px-4 text-left">Endpoint</th>
                    <th className="py-3 px-4 text-left">Méthode</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/transactions</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Initier une transaction</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/transactions/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Statut d'une transaction</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/transactions/{'{id}'}/capture</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Capturer une transaction préautorisée</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/transactions/{'{id}'}/refund</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Rembourser une transaction</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/transactions/daily</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Résumé des transactions du jour</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Intégration TPE</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
                <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                  <tr>
                    <th className="py-3 px-4 text-left">Endpoint</th>
                    <th className="py-3 px-4 text-left">Méthode</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/terminals</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Liste des terminaux connectés</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/terminals/{'{id}'}/status</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4">Statut d'un terminal</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/terminals/{'{id}'}/payment</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Envoyer une requête de paiement au terminal</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                    <td className="py-3 px-4 font-mono text-sm">/terminals/{'{id}'}/cancel</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4">Annuler l'opération en cours sur le terminal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6">
              <p className="mb-2">Exemple d'intégration avec un terminal de paiement:</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm">
{`POST /terminals/term_456/payment
{
  "amount": 7850,
  "currency": "EUR",
  "order_id": "order_123",
  "payment_method": "card_present",
  "capture_method": "automatic",
  "metadata": {
    "table_id": "12",
    "server_id": "server_789"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Reservations API</h3>
          <p className="mb-4">
            L'API de réservations permet l'intégration avec divers systèmes de réservation.
          </p>
          
          <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
            Base URL: https://reservations.sotto.io/v1
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                <tr>
                  <th className="py-3 px-4 text-left">Endpoint</th>
                  <th className="py-3 px-4 text-left">Méthode</th>
                  <th className="py-3 px-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/reservations</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4">Liste des réservations</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/reservations</td>
                  <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                  <td className="py-3 px-4">Créer une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/reservations/{'{id}'}</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4">Détails d'une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/reservations/{'{id}'}</td>
                  <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                  <td className="py-3 px-4">Modifier une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/reservations/{'{id}'}/status</td>
                  <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 py-1 px-2 rounded text-xs font-medium">PATCH</span></td>
                  <td className="py-3 px-4">Modifier le statut d'une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/availability</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4">Vérifier la disponibilité</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Delivery Platforms API</h3>
          <p className="mb-4">
            Interface pour l'intégration avec les plateformes de livraison (Uber Eats, Deliveroo, etc.).
          </p>
          
          <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
            Base URL: https://delivery.sotto.io/v1
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
                <tr>
                  <th className="py-3 px-4 text-left">Endpoint</th>
                  <th className="py-3 px-4 text-left">Méthode</th>
                  <th className="py-3 px-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/platforms</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4">Plateformes configurées</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/platforms/{'{id}'}/orders</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4">Commandes d'une plateforme</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/platforms/{'{id}'}/menu</td>
                  <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                  <td className="py-3 px-4">Synchroniser le menu</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/platforms/{'{id}'}/status</td>
                  <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                  <td className="py-3 px-4">Mettre à jour le statut (ouvert/fermé)</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                  <td className="py-3 px-4 font-mono text-sm">/webhooks</td>
                  <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                  <td className="py-3 px-4">Point d'entrée pour les webhooks des plateformes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">WebSockets API</h2>
        <p className="mb-6">
          Pour les communications en temps réel, Sotto utilise des WebSockets sécurisés.
        </p>
        
        <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
          WebSocket URL: wss://realtime.sotto.io/v1
        </div>
        
        <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Canaux disponibles</h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
              <tr>
                <th className="py-3 px-4 text-left">Canal</th>
                <th className="py-3 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">orders</td>
                <td className="py-3 px-4">Mises à jour en temps réel des commandes</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">kitchen</td>
                <td className="py-3 px-4">Communications avec la cuisine</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">tables</td>
                <td className="py-3 px-4">Statut des tables et notifications</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">staff</td>
                <td className="py-3 px-4">Communications entre le personnel</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">terminals</td>
                <td className="py-3 px-4">Événements des terminaux de paiement</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6">
          <p className="mb-2">Exemple de souscription à un canal:</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm">
{`// Connexion au WebSocket
const socket = new WebSocket('wss://realtime.sotto.io/v1');

// Authentification
socket.send(JSON.stringify({
  type: 'authenticate',
  token: 'jwt_token_here'
}));

// Souscription au canal des commandes
socket.send(JSON.stringify({
  type: 'subscribe',
  channel: 'orders'
}));

// Écoute des événements
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Nouvel événement:', data);
};`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Webhook Events</h2>
        <p className="mb-6">
          Sotto peut envoyer des notifications via webhooks pour les événements importants:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
              <tr>
                <th className="py-3 px-4 text-left">Événement</th>
                <th className="py-3 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">order.created</td>
                <td className="py-3 px-4">Nouvelle commande créée</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">order.updated</td>
                <td className="py-3 px-4">Commande mise à jour</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">order.completed</td>
                <td className="py-3 px-4">Commande terminée</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">payment.succeeded</td>
                <td className="py-3 px-4">Paiement réussi</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">payment.failed</td>
                <td className="py-3 px-4">Échec de paiement</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">reservation.created</td>
                <td className="py-3 px-4">Nouvelle réservation</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">inventory.low</td>
                <td className="py-3 px-4">Alerte de stock bas</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-2">Pour configurer un webhook, utilisez l'endpoint:</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm mb-6">
{`POST /webhooks
{
  "url": "https://your-server.com/webhook",
  "events": ["order.created", "payment.succeeded"],
  "secret": "your_webhook_signing_secret"
}`}
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Intégration avec LEA POS</h2>
        <p className="mb-6">
          L'intégration avec le système de caisse LEA POS est native et utilise des API privées avec des privilèges étendus:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
              <tr>
                <th className="py-3 px-4 text-left">Endpoint</th>
                <th className="py-3 px-4 text-left">Méthode</th>
                <th className="py-3 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">/pos/sync</td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                <td className="py-3 px-4">Synchronisation bidirectionnelle avec LEA POS</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">/pos/transactions</td>
                <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                <td className="py-3 px-4">Transactions enregistrées dans LEA POS</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4 font-mono text-sm">/pos/reports</td>
                <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                <td className="py-3 px-4">Rapports financiers et analytiques</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Gestion des erreurs</h2>
        <p className="mb-6">
          Toutes les API Sotto utilisent des codes HTTP standards et retournent des réponses d'erreur structurées:
        </p>
        
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm">
{`{
  "error": {
    "code": "invalid_order_status",
    "message": "Impossible de modifier une commande déjà complétée",
    "status": 400,
    "details": {
      "order_id": "order_123",
      "current_status": "completed",
      "requested_status": "in_progress"
    }
  }
}`}
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Limites de taux et pagination</h2>
        <p className="mb-6">
          Pour assurer la stabilité du système, des limites de taux sont appliquées:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
              <tr>
                <th className="py-3 px-4 text-left">Type d'API</th>
                <th className="py-3 px-4 text-left">Limite standard</th>
                <th className="py-3 px-4 text-left">Limite premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4">Core API</td>
                <td className="py-3 px-4">100 req/min</td>
                <td className="py-3 px-4">500 req/min</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4">Payments API</td>
                <td className="py-3 px-4">60 req/min</td>
                <td className="py-3 px-4">300 req/min</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4">Reservations API</td>
                <td className="py-3 px-4">30 req/min</td>
                <td className="py-3 px-4">150 req/min</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4">WebSockets</td>
                <td className="py-3 px-4">10 conn/min</td>
                <td className="py-3 px-4">50 conn/min</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-2">La pagination est implémentée sur tous les endpoints retournant des collections:</p>
        <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
          GET /orders?limit=25&after=order_789
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Environnements</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90 dark:text-[#F5F5F0]">
              <tr>
                <th className="py-3 px-4 text-left">Environnement</th>
                <th className="py-3 px-4 text-left">Base URL</th>
                <th className="py-3 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4">Sandbox</td>
                <td className="py-3 px-4 font-mono text-sm">https://sandbox-api.sotto.io</td>
                <td className="py-3 px-4">Pour le développement et les tests</td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40] transition-colors">
                <td className="py-3 px-4">Production</td>
                <td className="py-3 px-4 font-mono text-sm">https://api.sotto.io</td>
                <td className="py-3 px-4">Environnement de production</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Conclusion</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            Les API Sotto sont conçues pour offrir une intégration fluide et robuste avec l'écosystème technologique du restaurant moderne. Elles constituent la colonne vertébrale technique permettant à notre interface vocale de communiquer efficacement avec tous les systèmes essentiels, tout en maintenant notre engagement pour une expérience sans écran.
          </p>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/80 p-6 rounded-lg shadow-md border border-[#87A28F]/30 mt-6">
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#D47D5A]">Pour commencer l'intégration:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="text-gray-800 dark:text-gray-200">Contactez l'équipe technique pour obtenir vos identifiants d'API</li>
              <li className="text-gray-800 dark:text-gray-200">Explorez l'environnement sandbox pour vous familiariser avec les endpoints</li>
              <li className="text-gray-800 dark:text-gray-200">Utilisez notre SDK JavaScript pour accélérer le développement</li>
              <li className="text-gray-800 dark:text-gray-200">Consultez notre <a href="https://developers.sotto.io" className="text-[#D47D5A] hover:text-[#D4B483] transition-colors">documentation interactive</a> pour des exemples détaillés</li>
            </ol>
          </div>
          
          <p className="mt-6 text-lg">
            L'équipe technique Sotto est disponible pour accompagner tout projet d'intégration et répondre aux questions spécifiques via notre canal Slack dédié.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;