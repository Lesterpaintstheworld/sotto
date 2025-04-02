const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Spécifications API Sotto</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Introduction</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              Ce document détaille les interfaces de programmation (API) permettant d'intégrer Sotto avec votre écosystème restaurant existant. Notre architecture API a été conçue pour simplifier les connexions avec les systèmes externes essentiels à votre activité : terminaux de paiement électronique (TPE), systèmes de réservation, plateformes de livraison, et bien plus encore.
            </p>
            <p className="text-lg mb-4">
              Fidèle à notre philosophie de libérer la restauration des interfaces techniques complexes, nos API suivent une approche minimaliste mais puissante. Elles vous permettent de bénéficier pleinement de l'intelligence vocale de Sotto tout en maintenant la connexion avec les outils que vous utilisez déjà.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Principes fondamentaux</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#87A28F]/20">
              <h3 className="text-xl font-medium text-[#D47D5A] mb-3">Architecture REST</h3>
              <p className="text-sm mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Toutes nos API suivent les principes REST (Representational State Transfer) pour assurer :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Une interface uniforme et prévisible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Des opérations sans état pour une fiabilité maximale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Une mise en cache efficace des données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Une architecture client-serveur claire</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#87A28F]/20">
              <h3 className="text-xl font-medium text-[#D47D5A] mb-3">Sécurité et authentification</h3>
              <p className="text-sm mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">La sécurité est primordiale dans notre conception :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Authentification par jetons JWT (JSON Web Tokens)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Chiffrement TLS/SSL pour toutes les communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Politiques de limitation de débit pour prévenir les abus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Vérifications d'intégrité des données à chaque étape</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#87A28F]/20">
              <h3 className="text-xl font-medium text-[#D47D5A] mb-3">Format des données</h3>
              <p className="text-sm mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Toutes nos API utilisent exclusivement le format JSON pour les requêtes et les réponses, garantissant :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Une compatibilité maximale avec les systèmes modernes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Une lisibilité humaine facilitée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Un traitement efficace des données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Une structure cohérente à travers l'ensemble des endpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Points d'accès principaux</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-medium text-[#D47D5A] mb-4">API Commandes</h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">L'API Commandes est au cœur du système Sotto, permettant la gestion complète du cycle de vie des commandes.</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Endpoints principaux</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-[#1A2A40] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left text-white">Endpoint</th>
                      <th className="py-3 px-4 text-left text-white">Méthode</th>
                      <th className="py-3 px-4 text-left text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/orders</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Récupère la liste des commandes actives</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/orders/{"{id}"}</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Obtient les détails d'une commande spécifique</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/orders</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">POST</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Crée une nouvelle commande</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/orders/{"{id}"}</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">PUT</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Met à jour une commande existante</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/orders/{"{id}"}/status</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">PATCH</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Modifie uniquement le statut d'une commande</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/orders/{"{id}"}/items</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">POST</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Ajoute des articles à une commande existante</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Exemple de requête</h4>
                <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg overflow-auto max-h-80 font-mono text-sm">
                  <pre>{`POST /api/v1/orders
{
  "table_id": "12",
  "server_id": "server_3429",
  "items": [
    {
      "menu_item_id": "burger_1",
      "quantity": 1,
      "modifiers": ["no_onions", "medium_rare"],
      "notes": "Sauce à part"
    },
    {
      "menu_item_id": "fries_regular",
      "quantity": 1,
      "modifiers": [],
      "notes": ""
    }
  ]
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Exemple de réponse</h4>
                <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg overflow-auto max-h-80 font-mono text-sm">
                  <pre>{`{
  "order_id": "ord_38592",
  "status": "created",
  "created_at": "2023-09-15T14:32:45Z",
  "table_id": "12",
  "server_id": "server_3429",
  "items": [
    {
      "item_id": "itm_12948",
      "menu_item_id": "burger_1",
      "name": "Burger Classique",
      "quantity": 1,
      "unit_price": 12.50,
      "modifiers": ["no_onions", "medium_rare"],
      "notes": "Sauce à part",
      "status": "pending"
    },
    {
      "item_id": "itm_12949",
      "menu_item_id": "fries_regular",
      "name": "Frites Maison",
      "quantity": 1,
      "unit_price": 4.50,
      "modifiers": [],
      "notes": "",
      "status": "pending"
    }
  ],
  "subtotal": 17.00,
  "tax": 1.70,
  "total": 18.70
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-medium text-[#D47D5A] mb-4">API Paiements</h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">L'API Paiements permet l'intégration transparente avec vos terminaux de paiement et systèmes financiers.</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Endpoints principaux</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-[#1A2A40] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left text-white">Endpoint</th>
                      <th className="py-3 px-4 text-left text-white">Méthode</th>
                      <th className="py-3 px-4 text-left text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/payments</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">POST</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Initie une nouvelle transaction de paiement</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/payments/{"{id}"}</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Vérifie le statut d'un paiement</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/payments/{"{id}"}/refund</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">POST</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Traite un remboursement</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/payments/methods</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Liste les méthodes de paiement disponibles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Intégrations TPE supportées</h4>
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow-md">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Adyen</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Stripe Terminal</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Sumup</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Ingenico</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#D47D5A] mr-2">•</span>
                      <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Worldline</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Flux de paiement typique</h4>
                <div className="bg-white dark:bg-[#1A2A40]/80 p-4 rounded-lg shadow-md">
                  <ol className="list-decimal list-inside space-y-2 pl-2">
                    <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Le serveur demande vocalement à Sotto de préparer l'addition</li>
                    <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Sotto génère l'addition via l'API Commandes</li>
                    <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Le serveur indique la méthode de paiement souhaitée</li>
                    <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Sotto initie la transaction via l'API Paiements</li>
                    <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Le TPE connecté reçoit les informations et attend la carte</li>
                    <li className="text-[#1A2A40] dark:text-[#F5F5F0]">Une fois la transaction complétée, Sotto confirme vocalement au serveur</li>
                    <li className="text-[#1A2A40] dark:text-[#F5F5F0]">La commande est automatiquement marquée comme payée</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-medium text-[#D47D5A] mb-4">API Réservations</h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">L'API Réservations permet une gestion intelligente de vos réservations et de l'attribution des tables.</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Endpoints principaux</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-[#1A2A40] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left text-white">Endpoint</th>
                      <th className="py-3 px-4 text-left text-white">Méthode</th>
                      <th className="py-3 px-4 text-left text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/reservations</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Liste les réservations actuelles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/reservations</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">POST</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Crée une nouvelle réservation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/reservations/{"{id}"}</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Obtient les détails d'une réservation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/reservations/{"{id}"}</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">PUT</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Met à jour une réservation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/reservations/{"{id}"}/status</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">PATCH</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Change le statut d'une réservation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/tables/availability</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Vérifie la disponibilité des tables</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Intégrations supportées</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#87A28F] text-white px-3 py-1 rounded-full text-sm">TheFork / LaFourchette</span>
                <span className="bg-[#87A28F] text-white px-3 py-1 rounded-full text-sm">Resy</span>
                <span className="bg-[#87A28F] text-white px-3 py-1 rounded-full text-sm">OpenTable</span>
                <span className="bg-[#87A28F] text-white px-3 py-1 rounded-full text-sm">Zenchef</span>
                <span className="bg-[#87A28F] text-white px-3 py-1 rounded-full text-sm">Calendriers Google et Microsoft 365</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-medium text-[#D47D5A] mb-4">API Inventaire</h3>
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">L'API Inventaire permet de synchroniser les stocks et de gérer la disponibilité des produits.</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Endpoints principaux</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-[#1A2A40] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left text-white">Endpoint</th>
                      <th className="py-3 px-4 text-left text-white">Méthode</th>
                      <th className="py-3 px-4 text-left text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/inventory/items</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Liste tous les articles en stock</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/inventory/items/{"{id}"}</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Détails d'un article spécifique</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/inventory/items/{"{id}"}/stock</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">PATCH</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Met à jour le niveau de stock</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/inventory/alerts</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">GET</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Récupère les alertes de stock bas</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">/inventory/movements</td>
                      <td className="py-3 px-4 font-mono text-sm text-[#1A2A40] dark:text-[#F5F5F0]">POST</td>
                      <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Enregistre un mouvement de stock</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Webhooks</h2>
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">En plus des API traditionnelles, Sotto propose un système complet de webhooks pour permettre des intégrations événementielles en temps réel.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md border border-[#87A28F]/20">
              <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Événements disponibles</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">order.created</code> - Nouvelle commande créée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">order.updated</code> - Commande mise à jour</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">order.status_changed</code> - Changement de statut d'une commande</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">payment.completed</code> - Paiement finalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">payment.failed</code> - Échec de paiement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">reservation.created</code> - Nouvelle réservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">reservation.arrived</code> - Client arrivé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2 font-mono">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded text-[#1A2A40] dark:text-[#F5F5F0]">inventory.low_stock</code> - Alerte de stock bas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md border border-[#87A28F]/20">
              <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Configuration des webhooks</h3>
              <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Pour configurer vos webhooks, utilisez le portail développeur Sotto ou l'endpoint API suivant :</p>
              <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg overflow-auto font-mono text-sm">
                <pre>{`POST /api/v1/webhooks
{
  "event": "order.created",
  "target_url": "https://votreserveur.com/webhooks/sotto/orders",
  "secret": "votre_clé_secrète"
}`}</pre>
              </div>
              <p className="mt-4 text-[#1A2A40] dark:text-[#F5F5F0]">Chaque webhook inclut une signature HMAC pour vérifier l'authenticité de la requête.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Environnements</h2>
          <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Sotto propose trois environnements distincts pour faciliter votre développement :</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#87A28F] animate-float">
              <div className="flex items-center justify-center w-12 h-12 bg-[#87A28F]/20 rounded-full mb-4">
                <span className="text-[#87A28F] text-xl">1</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Sandbox</h3>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Pour les tests initiaux sans impact sur les données réelles</p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#D4B483] animate-float" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center justify-center w-12 h-12 bg-[#D4B483]/20 rounded-full mb-4">
                <span className="text-[#D4B483] text-xl">2</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Staging</h3>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Pour les tests d'intégration avec des données réelles mais sans impact opérationnel</p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#D47D5A] animate-float" style={{animationDelay: "0.4s"}}>
              <div className="flex items-center justify-center w-12 h-12 bg-[#D47D5A]/20 rounded-full mb-4">
                <span className="text-[#D47D5A] text-xl">3</span>
              </div>
              <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Production</h3>
              <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Environnement de production sécurisé</p>
            </div>
          </div>

          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Chaque environnement dispose de ses propres clés d'API et configurations.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Limites et performances</h2>
          <p className="mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Pour garantir la stabilité du système, les limites suivantes s'appliquent :</p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/80 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Ressource</th>
                  <th className="py-3 px-4 text-left text-white">Limite (par minute)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Requêtes API</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">500</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Webhooks</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">100</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Taille maximale de payload</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">5 MB</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Connexions simultanées</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">25</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Notre SLA garantit une disponibilité de 99,9% et un temps de réponse inférieur à 200ms pour 95% des requêtes.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Outils de développement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md border border-[#87A28F]/20">
              <h3 className="text-xl font-medium text-[#D47D5A] mb-4">SDK disponibles</h3>
              <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Pour simplifier vos intégrations, nous proposons des SDK dans les langages suivants :</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#1A2A40] text-white px-3 py-1 rounded-md text-sm">JavaScript/TypeScript (Node.js)</span>
                <span className="bg-[#1A2A40] text-white px-3 py-1 rounded-md text-sm">Python</span>
                <span className="bg-[#1A2A40] text-white px-3 py-1 rounded-md text-sm">PHP</span>
                <span className="bg-[#1A2A40] text-white px-3 py-1 rounded-md text-sm">Ruby</span>
                <span className="bg-[#1A2A40] text-white px-3 py-1 rounded-md text-sm">Java</span>
                <span className="bg-[#1A2A40] text-white px-3 py-1 rounded-md text-sm">.NET (C#)</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md border border-[#87A28F]/20">
              <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Environnement de test</h3>
              <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">Notre console développeur inclut :</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Une interface interactive pour tester les requêtes API</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Des logs détaillés des appels récents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Un simulateur de webhooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Des exemples de code pour chaque endpoint</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Procédure d'intégration</h2>
          
          <div className="bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md mb-8">
            <ol className="relative border-l border-[#D47D5A]">
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-[#D47D5A] text-white">1</span>
                <h3 className="font-medium text-lg mb-1 text-[#1A2A40] dark:text-[#F5F5F0]">Inscription</h3>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Créez votre compte développeur sur le portail Sotto</p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-[#D47D5A] text-white">2</span>
                <h3 className="font-medium text-lg mb-1 text-[#1A2A40] dark:text-[#F5F5F0]">Configuration</h3>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Définissez vos environnements et générez vos clés API</p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-[#D47D5A] text-white">3</span>
                <h3 className="font-medium text-lg mb-1 text-[#1A2A40] dark:text-[#F5F5F0]">Développement</h3>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Utilisez nos SDK et la documentation pour développer votre intégration</p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-[#D47D5A] text-white">4</span>
                <h3 className="font-medium text-lg mb-1 text-[#1A2A40] dark:text-[#F5F5F0]">Tests</h3>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Validez votre intégration dans l'environnement sandbox</p>
              </li>
              <li className="mb-6 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-[#D47D5A] text-white">5</span>
                <h3 className="font-medium text-lg mb-1 text-[#1A2A40] dark:text-[#F5F5F0]">Certification</h3>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Soumettez votre intégration pour validation par notre équipe</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-[#D47D5A] text-white">6</span>
                <h3 className="font-medium text-lg mb-1 text-[#1A2A40] dark:text-[#F5F5F0]">Déploiement</h3>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Passez en production avec notre accompagnement</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Conclusion</h2>
          
          <div className="bg-[#1A2A40]/10 dark:bg-[#1A2A40]/50 p-6 rounded-lg border-l-4 border-[#D47D5A] mb-8">
            <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
              Les API Sotto ont été conçues pour offrir une flexibilité maximale tout en maintenant la simplicité qui caractérise notre approche. Elles vous permettent d'intégrer harmonieusement notre système vocal IA dans votre écosystème existant, sans rupture ni complexité inutile.
            </p>
            <p className="text-[#1A2A40] dark:text-[#F5F5F0]">
              Notre équipe d'intégration est disponible pour vous accompagner à chaque étape du processus, fidèle à notre engagement d'offrir une expérience fluide et humaine.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium text-[#D47D5A] mb-6">Prochaines étapes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://dev.sottosystem.com" className="block bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#87A28F]/20 hover:border-[#D47D5A]">
              <h4 className="font-medium mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Accédez au portail développeur</h4>
              <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 mb-4">Explorez l'API et créez votre compte</p>
              <div className="flex justify-end">
                <span className="text-[#D47D5A]">dev.sottosystem.com →</span>
              </div>
            </a>

            <a href="https://github.com/sottosystem/integration-examples" className="block bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#87A28F]/20 hover:border-[#D47D5A]">
              <h4 className="font-medium mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Consultez nos exemples d'intégration</h4>
              <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 mb-4">Code source et exemples pratiques</p>
              <div className="flex justify-end">
                <span className="text-[#D47D5A]">github.com/sottosystem →</span>
              </div>
            </a>

            <a href="https://community.sottosystem.com" className="block bg-white dark:bg-[#1A2A40]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#87A28F]/20 hover:border-[#D47D5A]">
              <h4 className="font-medium mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Rejoignez notre communauté</h4>
              <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 mb-4">Échangez avec d'autres développeurs</p>
              <div className="flex justify-end">
                <span className="text-[#D47D5A]">community.sottosystem.com →</span>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">
              Pour toute question spécifique sur nos API, notre équipe d'assistance technique est disponible par email à{" "}
              <a href="mailto:api-support@sottosystem.com" className="text-[#D47D5A] hover:underline">
                api-support@sottosystem.com
              </a>{" "}
              ou par chat sur notre portail développeur.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourceContent;