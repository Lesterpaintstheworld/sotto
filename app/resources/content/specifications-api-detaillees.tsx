const ResourceContent = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <h1 className="text-4xl font-bold mb-8 text-[#1A2A40] border-b pb-4 border-[#D47D5A]">
        Spécifications API
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Introduction</h2>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Ce document détaille l'architecture et les interfaces API du système Sotto, permettant l'intégration avec les systèmes externes essentiels au fonctionnement d'un restaurant moderne. Notre approche API-first garantit une interopérabilité fluide avec les terminaux de paiement électronique (TPE), les systèmes de réservation, les plateformes de livraison, et d'autres services tiers, tout en maintenant notre engagement pour une expérience utilisateur sans friction.
          </p>
          <p className="text-lg">
            L'écosystème Sotto repose sur une architecture centralisée où l'interface vocale interagit avec de multiples services via des API robustes et sécurisées. Ce document sert de référence technique pour l'équipe de développement interne et les partenaires d'intégration potentiels.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Principes fondamentaux</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Architecture générale</h3>
          <p className="mb-4">
            Sotto utilise une architecture RESTful pour la majorité des intégrations, complétée par des connexions WebSocket pour les communications en temps réel. Notre infrastructure est conçue selon les principes suivants:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] mb-2">Simplicité</h4>
              <p className="text-[#1A2A40]">Interfaces intuitives et documentation claire</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] mb-2">Cohérence</h4>
              <p className="text-[#1A2A40]">Patterns d'API uniformes à travers tous les endpoints</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] mb-2">Sécurité</h4>
              <p className="text-[#1A2A40]">Authentification robuste et chiffrement des données</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] mb-2">Évolutivité</h4>
              <p className="text-[#1A2A40]">Capacité à évoluer sans rupture de compatibilité</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border border-[#87A28F]/30 hover:shadow-lg transition-shadow duration-300 hover:border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] mb-2">Observabilité</h4>
              <p className="text-[#1A2A40]">Monitoring et logging complets</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Authentification et sécurité</h3>
          <p className="mb-6">
            Toutes les API Sotto utilisent OAuth 2.0 avec JWT (JSON Web Tokens) pour l'authentification:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Méthode</th>
                  <th className="py-3 px-4 text-left text-white">Description</th>
                  <th className="py-3 px-4 text-left text-white">Utilisation recommandée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Client Credentials</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Pour les communications système à système</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Intégrations TPE, systèmes de stock</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Authorization Code</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Pour les applications agissant au nom d'un utilisateur</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Applications partenaires, dashboards externes</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Device Flow</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Pour les appareils avec capacités d'entrée limitées</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Terminaux de paiement, appareils IoT</td>
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
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Endpoints API principaux</h2>
        
        <div className="mb-10">
          <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Core API</h3>
          <p className="mb-4">
            La Core API constitue l'interface principale pour les opérations fondamentales du restaurant.
          </p>
          
          <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
            Base URL: https://api.sotto.io/v1
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F]">Gestion des commandes</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-[#1A2A40]">
                  <tr>
                    <th className="py-3 px-4 text-left text-white">Endpoint</th>
                    <th className="py-3 px-4 text-left text-white">Méthode</th>
                    <th className="py-3 px-4 text-left text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/orders</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Liste des commandes actives</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/orders</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Création d'une nouvelle commande</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/orders/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Détails d'une commande spécifique</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/orders/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded text-xs font-medium">PATCH</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Mise à jour partielle d'une commande</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/orders/{'{id}'}/items</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Ajout d'items à une commande</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/orders/{'{id}'}/status</td>
                    <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Modification du statut d'une commande</td>
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
            <h4 className="text-xl font-medium mb-4 text-[#87A28F]">Gestion des tables</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-[#1A2A40]">
                  <tr>
                    <th className="py-3 px-4 text-left text-white">Endpoint</th>
                    <th className="py-3 px-4 text-left text-white">Méthode</th>
                    <th className="py-3 px-4 text-left text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/tables</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Liste des tables du restaurant</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/tables/{'{id}'}/status</td>
                    <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Mise à jour du statut d'une table</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/tables/{'{id}'}/orders</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Commandes associées à une table</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/tables/{'{id}'}/bill</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Génération de l'addition pour une table</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/tables/{'{id}'}/split</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Division de l'addition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F]">Gestion des menus</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-[#1A2A40]">
                  <tr>
                    <th className="py-3 px-4 text-left text-white">Endpoint</th>
                    <th className="py-3 px-4 text-left text-white">Méthode</th>
                    <th className="py-3 px-4 text-left text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/menu</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Menu complet actuel</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/menu/categories</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Catégories du menu</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/menu/items</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Tous les items du menu</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/menu/items/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Détails d'un item spécifique</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/menu/availability</td>
                    <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Mise à jour de la disponibilité des items</td>
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
            <h4 className="text-xl font-medium mb-4 text-[#87A28F]">Transactions</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-[#1A2A40]">
                  <tr>
                    <th className="py-3 px-4 text-left text-white">Endpoint</th>
                    <th className="py-3 px-4 text-left text-white">Méthode</th>
                    <th className="py-3 px-4 text-left text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/transactions</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Initier une transaction</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/transactions/{'{id}'}</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Statut d'une transaction</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/transactions/{'{id}'}/capture</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Capturer une transaction préautorisée</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/transactions/{'{id}'}/refund</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Rembourser une transaction</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/transactions/daily</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Résumé des transactions du jour</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-4 text-[#87A28F]">Intégration TPE</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-[#1A2A40]">
                  <tr>
                    <th className="py-3 px-4 text-left text-white">Endpoint</th>
                    <th className="py-3 px-4 text-left text-white">Méthode</th>
                    <th className="py-3 px-4 text-left text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/terminals</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Liste des terminaux connectés</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/terminals/{'{id}'}/status</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Statut d'un terminal</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/terminals/{'{id}'}/payment</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Envoyer une requête de paiement au terminal</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/terminals/{'{id}'}/cancel</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                    <td className="py-3 px-4 text-[#1A2A40]">Annuler l'opération en cours sur le terminal</td>
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
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Endpoint</th>
                  <th className="py-3 px-4 text-left text-white">Méthode</th>
                  <th className="py-3 px-4 text-left text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/reservations</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Liste des réservations</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/reservations</td>
                  <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Créer une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/reservations/{'{id}'}</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Détails d'une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/reservations/{'{id}'}</td>
                  <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Modifier une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/reservations/{'{id}'}/status</td>
                  <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded text-xs font-medium">PATCH</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Modifier le statut d'une réservation</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/availability</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Vérifier la disponibilité</td>
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
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Endpoint</th>
                  <th className="py-3 px-4 text-left text-white">Méthode</th>
                  <th className="py-3 px-4 text-left text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/platforms</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Plateformes configurées</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/platforms/{'{id}'}/orders</td>
                  <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Commandes d'une plateforme</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/platforms/{'{id}'}/menu</td>
                  <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Synchroniser le menu</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/platforms/{'{id}'}/status</td>
                  <td className="py-3 px-4"><span className="bg-purple-100 text-purple-800 py-1 px-2 rounded text-xs font-medium">PUT</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Mettre à jour le statut (ouvert/fermé)</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/webhooks</td>
                  <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                  <td className="py-3 px-4 text-[#1A2A40]">Point d'entrée pour les webhooks des plateformes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">WebSockets API</h2>
        <p className="mb-6">
          Pour les communications en temps réel, Sotto utilise des WebSockets sécurisés.
        </p>
        
        <div className="bg-[#1A2A40] text-white p-3 rounded-md mb-6 font-mono text-sm overflow-x-auto">
          WebSocket URL: wss://realtime.sotto.io/v1
        </div>
        
        <h3 className="text-2xl font-medium mb-4 text-[#D47D5A]">Canaux disponibles</h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-[#1A2A40]">
              <tr>
                <th className="py-3 px-4 text-left text-white">Canal</th>
                <th className="py-3 px-4 text-left text-white">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">orders</td>
                <td className="py-3 px-4 text-[#1A2A40]">Mises à jour en temps réel des commandes</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">kitchen</td>
                <td className="py-3 px-4 text-[#1A2A40]">Communications avec la cuisine</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">tables</td>
                <td className="py-3 px-4 text-[#1A2A40]">Statut des tables et notifications</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">staff</td>
                <td className="py-3 px-4 text-[#1A2A40]">Communications entre le personnel</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">terminals</td>
                <td className="py-3 px-4 text-[#1A2A40]">Événements des terminaux de paiement</td>
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
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Webhook Events</h2>
        <p className="mb-6">
          Sotto peut envoyer des notifications via webhooks pour les événements importants:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-[#1A2A40]">
              <tr>
                <th className="py-3 px-4 text-left text-white">Événement</th>
                <th className="py-3 px-4 text-left text-white">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">order.created</td>
                <td className="py-3 px-4 text-[#1A2A40]">Nouvelle commande créée</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">order.updated</td>
                <td className="py-3 px-4 text-[#1A2A40]">Commande mise à jour</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">order.completed</td>
                <td className="py-3 px-4 text-[#1A2A40]">Commande terminée</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">payment.succeeded</td>
                <td className="py-3 px-4 text-[#1A2A40]">Paiement réussi</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">payment.failed</td>
                <td className="py-3 px-4 text-[#1A2A40]">Échec de paiement</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">reservation.created</td>
                <td className="py-3 px-4 text-[#1A2A40]">Nouvelle réservation</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">inventory.low</td>
                <td className="py-3 px-4 text-[#1A2A40]">Alerte de stock bas</td>
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
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Intégration avec LEA POS</h2>
        <p className="mb-6">
          L'intégration avec le système de caisse LEA POS est native et utilise des API privées avec des privilèges étendus:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-[#1A2A40]">
              <tr>
                <th className="py-3 px-4 text-left text-white">Endpoint</th>
                <th className="py-3 px-4 text-left text-white">Méthode</th>
                <th className="py-3 px-4 text-left text-white">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/pos/sync</td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 py-1 px-2 rounded text-xs font-medium">POST</span></td>
                <td className="py-3 px-4 text-[#1A2A40]">Synchronisation bidirectionnelle avec LEA POS</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/pos/transactions</td>
                <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                <td className="py-3 px-4 text-[#1A2A40]">Transactions enregistrées dans LEA POS</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">/pos/reports</td>
                <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 py-1 px-2 rounded text-xs font-medium">GET</span></td>
                <td className="py-3 px-4 text-[#1A2A40]">Rapports financiers et analytiques</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Gestion des erreurs</h2>
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
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Limites de taux et pagination</h2>
        <p className="mb-6">
          Pour assurer la stabilité du système, des limites de taux sont appliquées:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-[#1A2A40]">
              <tr>
                <th className="py-3 px-4 text-left text-white">Type d'API</th>
                <th className="py-3 px-4 text-left text-white">Limite standard</th>
                <th className="py-3 px-4 text-left text-white">Limite premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-[#1A2A40]">Core API</td>
                <td className="py-3 px-4 text-[#1A2A40]">100 req/min</td>
                <td className="py-3 px-4 text-[#1A2A40]">500 req/min</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-[#1A2A40]">Payments API</td>
                <td className="py-3 px-4 text-[#1A2A40]">60 req/min</td>
                <td className="py-3 px-4 text-[#1A2A40]">300 req/min</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-[#1A2A40]">Reservations API</td>
                <td className="py-3 px-4 text-[#1A2A40]">30 req/min</td>
                <td className="py-3 px-4 text-[#1A2A40]">150 req/min</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-[#1A2A40]">WebSockets</td>
                <td className="py-3 px-4 text-[#1A2A40]">10 conn/min</td>
                <td className="py-3 px-4 text-[#1A2A40]">50 conn/min</td>
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
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Environnements</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-[#1A2A40]">
              <tr>
                <th className="py-3 px-4 text-left text-white">Environnement</th>
                <th className="py-3 px-4 text-left text-white">Base URL</th>
                <th className="py-3 px-4 text-left text-white">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-[#1A2A40]">Sandbox</td>
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">https://sandbox-api.sotto.io</td>
                <td className="py-3 px-4 text-[#1A2A40]">Pour le développement et les tests</td>
              </tr>
              <tr className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-[#1A2A40]">Production</td>
                <td className="py-3 px-4 font-mono text-sm text-[#1A2A40]">https://api.sotto.io</td>
                <td className="py-3 px-4 text-[#1A2A40]">Environnement de production</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-[#1A2A40]">Conclusion</h2>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Les API Sotto sont conçues pour offrir une intégration fluide et robuste avec l'écosystème technologique du restaurant moderne. Elles constituent la colonne vertébrale technique permettant à notre interface vocale de communiquer efficacement avec tous les systèmes essentiels, tout en maintenant notre engagement pour une expérience sans écran.
          </p>
          
          <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md border border-[#87A28F]/30 mt-6">
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40]">Pour commencer l'intégration:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="text-[#1A2A40]">Contactez l'équipe technique pour obtenir vos identifiants d'API</li>
              <li className="text-[#1A2A40]">Explorez l'environnement sandbox pour vous familiariser avec les endpoints</li>
              <li className="text-[#1A2A40]">Utilisez notre SDK JavaScript pour accélérer le développement</li>
              <li className="text-[#1A2A40]">Consultez notre <a href="https://developers.sotto.io" className="text-[#D47D5A] hover:text-[#D4B483] transition-colors">documentation interactive</a> pour des exemples détaillés</li>
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