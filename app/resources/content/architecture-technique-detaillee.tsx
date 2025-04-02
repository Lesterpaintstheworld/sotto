const ResourceContent = () => {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 prose prose-lg resource-content">
      <h1 className="text-4xl font-bold mb-8 text-[#1A2A40] dark:text-[#F5F5F0] border-b pb-4 border-[#D47D5A]">
        Architecture Technique
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </span>
          Introduction
        </h2>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md mb-6 transform hover:translate-y-[-5px] transition-transform duration-300">
          <p className="mb-4 text-[#1A2A40]">
            Ce document présente l'architecture technique complète du système Sotto, notre solution d'interface vocale IA pour la restauration. Il détaille les infrastructures, composants et flux de données qui permettent à notre système de fonctionner de manière fluide, fiable et sécurisée. Cette architecture a été conçue pour éliminer les interfaces à écran traditionnelles au profit d'une expérience vocale naturelle, tout en garantissant une robustesse opérationnelle dans l'environnement exigeant de la restauration.
          </p>
          <p className="text-[#1A2A40]">
            L'architecture technique de Sotto repose sur quatre piliers fondamentaux : le système d'interaction vocale, l'infrastructure cloud, le système de communication en temps réel, et l'intégration avec l'écosystème plus large de la restauration. Chaque composant a été soigneusement pensé pour offrir une solution discrète mais puissante qui s'intègre naturellement dans le quotidien des restaurants.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </span>
          Vue d'ensemble de l'architecture
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Schéma global</h3>
          <div className="bg-[#1A2A40] p-6 rounded-lg overflow-x-auto font-mono text-sm">
            <pre className="text-white">{`┌─────────────────────────────────────────────────────────────────────┐
│                        ÉCOSYSTÈME RESTAURANT                         │
│                                                                     │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────────────┐ │
│  │  Oreillettes │     │ Imprimantes  │     │ Système de caisse    │ │
│  │    WiFi      │     │  thermiques  │     │      (LEA POS)       │ │
│  └──────┬───────┘     └───────┬──────┘     └───────────┬──────────┘ │
│         │                     │                        │            │
└─────────┼─────────────────────┼────────────────────────┼────────────┘
          │                     │                        │             
┌─────────┼─────────────────────┼────────────────────────┼────────────┐
│         │                     │                        │            │
│         ▼                     ▼                        ▼            │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                      RÉSEAU LOCAL RESTAURANT                   │ │
│  │                      (WiFi sécurisé + Filaire)                 │ │
│  └───────────────────────────────┬────────────────────────────────┘ │
│                                  │                                  │
│                                  ▼                                  │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                    PASSERELLE LOCALE SOTTO                     │ │
│  │                    (Edge Server - Mini PC)                     │ │
│  └───────────────────────────────┬────────────────────────────────┘ │
│                                  │                                  │
└──────────────────────────────────┼──────────────────────────────────┘
                                   │                                   
┌──────────────────────────────────┼──────────────────────────────────┐
│                                  ▼                                  │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                      INFRASTRUCTURE CLOUD                      │ │
│  │                                                                │ │
│  │   ┌─────────────┐   ┌────────────────┐   ┌─────────────────┐   │ │
│  │   │ Service IA  │   │ Base de données│   │ Gestionnaire    │   │ │
│  │   │   Vocale    │   │   (MongoDB)    │   │ d'authentification│  │ │
│  │   └─────────────┘   └────────────────┘   └─────────────────┘   │ │
│  │                                                                │ │
│  │   ┌─────────────┐   ┌────────────────┐   ┌─────────────────┐   │ │
│  │   │ API Backend │   │ Service temps  │   │  Analytics &    │   │ │
│  │   │  (Next.js)  │   │réel (WebSocket)│   │    Monitoring   │   │ │
│  │   └─────────────┘   └────────────────┘   └─────────────────┘   │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘`}</pre>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Principes architecturaux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Résilience locale", description: "Le système peut fonctionner même en cas de perte temporaire de connexion internet" },
              { title: "Sécurité multicouche", description: "Protection des données à chaque niveau du système" },
              { title: "Latence minimale", description: "Optimisation pour des interactions vocales instantanées" },
              { title: "Évolutivité horizontale", description: "Capacité à s'adapter à des restaurants de toutes tailles" },
              { title: "Modularité", description: "Composants indépendants facilitant les mises à jour et l'évolution du système" },
            ].map((principle, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow-md border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-2">{principle.title}</h4>
                <p className="text-[#1A2A40] dark:text-[#F5F5F0] text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          </span>
          Composants principaux
        </h2>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">1</div>
            <h3 className="text-xl font-medium text-[#87A28F] dark:text-[#D4B483]">Système d'interaction vocale</h3>
          </div>

          <div className="ml-13 pl-13">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Matériel</h4>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg shadow">
                <thead>
                  <tr className="bg-[#1A2A40] text-white">
                    <th className="py-3 px-4 text-left">Composant</th>
                    <th className="py-3 px-4 text-left">Spécifications</th>
                    <th className="py-3 px-4 text-left">Fonction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Oreillettes</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">WiFi direct, batterie 8h, microphone directionnel</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Interface utilisateur principale</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Stations de charge</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">5 ports USB-C, indicateurs LED</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Recharge et stockage des oreillettes</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Edge Server</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Mini PC Intel NUC, 16GB RAM, 512GB SSD</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Traitement local et mise en cache</td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Points d'accès WiFi</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">WiFi 6, couverture optimisée</td>
                    <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Connectivité sans fil fiable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Logiciel de reconnaissance vocale</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow">
                <h5 className="font-bold text-[#D47D5A] mb-2">Modèle de langage</h5>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">LLM spécialisé pour la restauration avec vocabulaire enrichi</p>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow">
                <h5 className="font-bold text-[#D47D5A] mb-2">Traitement audio</h5>
                <ul className="list-disc pl-5 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">
                  <li>Suppression de bruit adaptative (SNR &gt;20dB)</li>
                  <li>Filtrage des conversations ambiantes</li>
                  <li>Détection d'intention contextuelle</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow">
                <h5 className="font-bold text-[#D47D5A] mb-2">Optimisations</h5>
                <ul className="list-disc pl-5 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">
                  <li>Modèle léger pour traitement local des commandes courantes</li>
                  <li>Streaming vers le cloud pour requêtes complexes</li>
                  <li>Mémoire contextuelle pour suivi des conversations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">2</div>
            <h3 className="text-xl font-medium text-[#87A28F] dark:text-[#D4B483]">Infrastructure cloud</h3>
          </div>

          <div className="ml-13 pl-13">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Architecture serverless</h4>
            <div className="bg-[#1A2A40] p-6 rounded-lg overflow-x-auto font-mono text-sm mb-6">
              <pre className="text-white">{`┌──────────────────────────────────────────┐
│             API Gateway                  │
└───────────────────┬──────────────────────┘
                    │
       ┌────────────┴─────────────┐
       │                          │
┌──────▼───────┐          ┌───────▼──────┐
│  Fonctions   │          │  WebSockets  │
│ API (Next.js)│          │   Service    │
└──────┬───────┘          └───────┬──────┘
       │                          │
┌──────▼──────────────────────────▼──────┐
│        Event Bus (Kafka/SQS)           │
└──────┬──────────────────────────┬──────┘
       │                          │
┌──────▼───────┐          ┌───────▼──────┐
│ Traitement   │          │   Service    │
│  Commandes   │          │ Notification │
└──────┬───────┘          └───────┬──────┘
       │                          │
┌──────▼──────────────────────────▼──────┐
│             Base de données            │
│            (MongoDB Atlas)             │
└─────────────────────────────────────────┘`}</pre>
            </div>

            <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Services cloud utilisés</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { name: "Hébergement", desc: "Vercel (Next.js) + AWS (services complémentaires)" },
                { name: "Base de données", desc: "MongoDB Atlas (cluster géo-redondant)" },
                { name: "Authentification", desc: "Auth0 avec MFA pour administration" },
                { name: "Stockage", desc: "AWS S3 pour logs et backups" },
                { name: "CDN", desc: "Cloudflare pour distribution globale optimisée" },
                { name: "Monitoring", desc: "DataDog + Sentry pour surveillance proactive" },
              ].map((service, index) => (
                <div key={index} className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow flex items-start">
                  <div className="w-2 h-full bg-[#D4B483] mr-3 rounded-full"></div>
                  <div>
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#D4B483]">{service.name}</h5>
                    <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">3</div>
            <h3 className="text-xl font-medium text-[#87A28F] dark:text-[#D4B483]">Système de communication en temps réel</h3>
          </div>

          <div className="ml-13 pl-13">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md">
                <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Protocoles</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#D47D5A] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">
                      <span className="font-bold">WebSockets:</span> Communication bidirectionnelle avec les oreillettes
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#D47D5A] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">
                      <span className="font-bold">MQTT:</span> Communication légère avec les dispositifs IoT (imprimantes)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#D47D5A] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">
                      <span className="font-bold">HTTP/2:</span> API REST avec multiplexage pour les requêtes administratives
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#D47D5A] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">
                      <span className="font-bold">gRPC:</span> Communication inter-services à haute performance
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md">
                <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Gestion de la latence</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#87A28F] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Connexion WebSocket persistante avec heartbeat</div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#87A28F] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Mise en cache locale des données fréquemment utilisées</div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#87A28F] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Priorisation du trafic vocal sur le réseau local</div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#87A28F] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Circuit breakers pour éviter les cascades d'erreurs</div>
                  </li>
                </ul>
              </div>
            </div>

            <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Fiabilité et résilience</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Mode dégradé", desc: "Fonctionnalités essentielles disponibles hors-ligne" },
                { title: "Synchronisation différée", desc: "File d'attente pour opérations pendant déconnexion" },
                { title: "Redondance", desc: "Réplication des données critiques" },
                { title: "Monitoring", desc: "Surveillance proactive de la latence et disponibilité" },
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-md border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow duration-300">
                  <h5 className="font-bold text-[#1A2A40] dark:text-[#D4B483] mb-1">{item.title}</h5>
                  <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center text-white mr-3">4</div>
            <h3 className="text-xl font-medium text-[#87A28F] dark:text-[#D4B483]">Intégration avec l'écosystème restaurant</h3>
          </div>

          <div className="ml-13 pl-13">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Connexions avec systèmes externes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { name: "LEA POS", desc: "API bidirectionnelle pour synchronisation des commandes et paiements" },
                { name: "Imprimantes", desc: "Protocole ESC/POS pour tickets cuisine et additions" },
                { name: "TPE", desc: "Intégration directe pour paiements sans couture" },
                { name: "Plateformes de livraison", desc: "API Webhook pour Uber Eats, Deliveroo, etc." },
                { name: "Fournisseurs", desc: "API pour gestion automatisée des stocks" },
              ].map((system, index) => (
                <div key={index} className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow flex items-center group transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center text-white mr-3 group-hover:animate-float">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#D4B483]">{system.name}</h5>
                    <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{system.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-medium mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Sécurité des données</h4>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md mb-6">
              <ul className="space-y-2">
                {[
                  "Chiffrement TLS 1.3 pour toutes les communications",
                  "Tokenisation des données sensibles",
                  "Isolation réseau via VLAN dédié",
                  "Authentification multi-facteurs pour accès administrateur",
                  "Audit logs pour toutes les opérations critiques",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </span>
          Flux de données principaux
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Traitement d'une commande vocale</h3>
          <div className="bg-white dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md mb-6">
            <ol className="relative border-l border-[#D47D5A]">
              {[
                "Capture audio : L'oreillette enregistre la commande vocale du serveur",
                "Pré-traitement local : Filtrage du bruit et compression audio",
                "Transmission : Envoi du flux audio via WebSocket sécurisé",
                "Reconnaissance : Le service IA transcrit l'audio en texte",
                "Compréhension : Analyse sémantique pour extraire l'intention et les entités",
                "Validation : Vérification de cohérence et disponibilité des articles",
                "Confirmation : Réponse vocale confirmant la commande",
                "Exécution : Enregistrement dans la base de données et transmission à la cuisine",
                "Notification : Impression du ticket en cuisine et mise à jour des écrans",
              ].map((step, index) => (
                <li key={index} className="mb-6 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#D47D5A] rounded-full -left-4 ring-4 ring-white dark:ring-[#1A2A40]">
                    {index + 1}
                  </span>
                  <p className="text-base text-[#1A2A40] dark:text-[#F5F5F0]">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-4 text-sm text-[#D47D5A] font-semibold">
              Temps de traitement total cible : &lt; 1 seconde
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Synchronisation des données</h3>
          <div className="bg-[#1A2A40] p-6 rounded-lg overflow-x-auto font-mono text-sm mb-4">
            <pre className="text-white">{`┌────────────────┐     ┌─────────────────┐     ┌────────────────┐
│ Base de données│     │ Service de      │     │ Edge Server    │
│     Cloud      │────►│ synchronisation │────►│    Local       │
└────────────────┘     └─────────────────┘     └────────────────┘
        ▲                                              │
        │                                              │
        └──────────────────────────────────────────────┘
                    Synchronisation bidirectionnelle`}</pre>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md">
            <ul className="space-y-2">
              {[
                "Synchronisation incrémentielle toutes les 30 secondes",
                "Résolution de conflits basée sur horodatage et règles métier",
                "Priorisation des données critiques (commandes, paiements)",
                "Compression et différentiel pour optimiser la bande passante",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#87A28F] text-white flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </span>
          Considérations de performance
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Optimisations clés</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { title: "Latence vocale", value: "<200ms de bout en bout pour une expérience naturelle" },
              { title: "Empreinte mémoire", value: "<100MB pour l'application sur les edge servers" },
              { title: "Consommation batterie", value: "Optimisation pour 8h d'autonomie des oreillettes" },
              { title: "Bande passante", value: "<5MB/heure par oreillette en utilisation normale" },
            ].map((opt, index) => (
              <div key={index} className="bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-bold text-[#D47D5A] mb-2">{opt.title}</h4>
                <p className="text-sm text-[#1A2A40] dark:text-[#F5F5F0]">{opt.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Métriques de surveillance</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg shadow">
              <thead>
                <tr className="bg-[#1A2A40] text-white">
                  <th className="py-3 px-4 text-left">Métrique</th>
                  <th className="py-3 px-4 text-left">Seuil d'alerte</th>
                  <th className="py-3 px-4 text-left">Seuil critique</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Latence API</td>
                  <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">&gt;500ms</td>
                  <td className="py-3 px-4 text-red-600 dark:text-red-400">&gt;1s</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Scaling automatique</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Taux d'erreur</td>
                  <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">&gt;1%</td>
                  <td className="py-3 px-4 text-red-600 dark:text-red-400">&gt;5%</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Notification équipe technique</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Utilisation CPU</td>
                  <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">&gt;70%</td>
                  <td className="py-3 px-4 text-red-600 dark:text-red-400">&gt;90%</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Scaling vertical</td>
                </tr>
                <tr className="hover:bg-gray-100 dark:hover:bg-[#1A2A40]/50">
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Disponibilité</td>
                  <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">&lt;99.9%</td>
                  <td className="py-3 px-4 text-red-600 dark:text-red-400">&lt;99%</td>
                  <td className="py-3 px-4 text-[#1A2A40] dark:text-[#F5F5F0]">Basculement sur système secondaire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </span>
          Sécurité et conformité
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Protection des données</h3>
            <ul className="space-y-3">
              {[
                "Conformité RGPD intégrée dès la conception",
                "Données personnelles minimisées et pseudonymisées",
                "Chiffrement des données au repos et en transit",
                "Politique de rétention claire et configurable",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Audit et traçabilité</h3>
            <ul className="space-y-3">
              {[
                "Journalisation complète des accès et modifications",
                "Surveillance des comportements anormaux",
                "Authentification forte pour tous les accès administratifs",
                "Séparation des environnements (développement, test, production)",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#1A2A40] text-white flex items-center justify-center mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
          </span>
          Évolution et feuille de route technique
        </h2>

        <div className="space-y-6">
          {[
            { 
              phase: "Phase 1 (Actuelle)", 
              items: [
                "Architecture de base avec reconnaissance vocale et intégration LEA POS",
                "Système de communication temps réel fiable",
                "Infrastructure cloud sécurisée"
              ],
              color: "#D47D5A" 
            },
            { 
              phase: "Phase 2 (6 mois)", 
              items: [
                "Amélioration des modèles IA pour reconnaissance contextuelle avancée",
                "Implémentation du mode hors-ligne robuste",
                "Optimisation des performances et de la consommation énergétique"
              ],
              color: "#87A28F" 
            },
            { 
              phase: "Phase 3 (12 mois)", 
              items: [
                "Intégration de l'analyse prédictive pour anticipation des besoins",
                "Extension API pour écosystème complet (fournisseurs, réservations)",
                "Architecture multi-restaurant pour groupes de restauration"
              ],
              color: "#D4B483" 
            }
          ].map((phase, index) => (
            <div key={index} className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: phase.color }}>
              <h3 className="text-xl font-medium mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">{phase.phase}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-0.5" style={{ backgroundColor: phase.color }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="text-[#1A2A40] dark:text-[#F5F5F0]">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-full bg-[#D47D5A] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </span>
          Conclusion
        </h2>

        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            L'architecture technique de Sotto a été conçue pour allier simplicité d'usage et robustesse opérationnelle. En privilégiant une approche hybride (edge computing + cloud), nous garantissons à la fois réactivité et fiabilité, même dans les environnements difficiles des restaurants. La modularité de notre architecture permet une évolution progressive du système pour intégrer de nouvelles fonctionnalités sans perturber le service existant.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#87A28F] dark:text-[#D4B483]">Prochaines étapes</h3>
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg shadow-md overflow-hidden">
            {[
              "Finaliser la documentation technique détaillée de chaque composant",
              "Mettre en place les environnements de test automatisés",
              "Organiser une revue d'architecture avec l'équipe technique complète",
              "Préparer les tests de charge pour valider les performances en conditions réelles",
            ].map((step, index) => (
              <div 
                key={index} 
                className={`p-4 flex items-start ${index < 3 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
              >
                <div className="w-8 h-8 rounded-full bg-[#D4B483] flex items-center justify-center text-white mr-3">
                  {index + 1}
                </div>
                <div className="pt-1 text-[#1A2A40] dark:text-[#F5F5F0]">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg text-center">
          <p>Pour toute question ou suggestion concernant cette architecture, contacter l'équipe technique à <a href="mailto:tech@sotto.ai" className="text-[#D47D5A] hover:underline">tech@sotto.ai</a>.</p>
        </div>
      </section>
    </article>
  );
};

export default ResourceContent;