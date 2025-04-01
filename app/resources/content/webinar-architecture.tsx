export default function ResourceContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-10 text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-[#F5F5F0] text-[#1A2A40] rounded-full mb-4">
          WEBINARS
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1A2A40] to-[#D47D5A] bg-clip-text text-transparent">
          Architecture Technique de Sotto
        </h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#D47D5A]">Introduction</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4 text-lg">
            Bienvenue à cette session technique présentée par notre CTO sur l'architecture qui fait de Sotto une révolution dans le monde de la restauration. Dans ce webinar, nous dévoilons les coulisses de notre système vocal IA, conçu pour libérer les restaurants des écrans tout en garantissant une expérience fluide, sécurisée et hautement efficace.
          </p>
          <p className="mb-4 text-lg">
            Notre approche technique reflète notre philosophie : une technologie sophistiquée qui s'efface pour mettre l'humain au centre. Comme un bon serveur qui anticipe vos besoins sans jamais s'imposer, notre architecture technique opère en coulisses avec discrétion et efficacité.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#D47D5A]">Les Fondations de l'Architecture Sotto</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Vue d'Ensemble du Système</h3>
          <p className="mb-6">
            L'architecture de Sotto repose sur quatre piliers fondamentaux qui travaillent en harmonie :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Système de Reconnaissance Vocale</h4>
              <p className="text-gray-700 dark:text-gray-300">Capture et interprétation du langage naturel</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Noyau IA</h4>
              <p className="text-gray-700 dark:text-gray-300">Traitement contextuel et prise de décision</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Middleware d'Intégration</h4>
              <p className="text-gray-700 dark:text-gray-300">Communication avec l'écosystème restaurant</p>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-2">Infrastructure Cloud Hybride</h4>
              <p className="text-gray-700 dark:text-gray-300">Déploiement et évolutivité sécurisés</p>
            </div>
          </div>
          
          <p>
            Cette architecture a été conçue pour répondre aux défis uniques de l'environnement restaurant : espaces bruyants, connexions parfois instables, et nécessité d'une fiabilité absolue même en conditions difficiles.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Principes Architecturaux</h3>
          <p className="mb-6">
            Notre architecture adhère à cinq principes fondamentaux :
          </p>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#1A2A40] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Principe</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Bénéfice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-semibold text-[#D47D5A]">Résilience</td>
                  <td className="py-3 px-4">Fonctionnement maintenu même en cas de défaillance partielle</td>
                  <td className="py-3 px-4">Continuité de service garantie</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/50">
                  <td className="py-3 px-4 font-semibold text-[#D47D5A]">Latence Minimale</td>
                  <td className="py-3 px-4">Temps de réponse optimisé &lt; 300ms</td>
                  <td className="py-3 px-4">Interaction naturelle et fluide</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-semibold text-[#D47D5A]">Sécurité Intégrée</td>
                  <td className="py-3 px-4">Protection des données à chaque niveau</td>
                  <td className="py-3 px-4">Conformité RGPD et confiance</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/50">
                  <td className="py-3 px-4 font-semibold text-[#D47D5A]">Évolutivité</td>
                  <td className="py-3 px-4">Adaptation automatique à la charge</td>
                  <td className="py-3 px-4">Performance constante quelle que soit l'affluence</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#D47D5A]">Intégration Ouverte</td>
                  <td className="py-3 px-4">API standardisées</td>
                  <td className="py-3 px-4">Compatibilité avec l'écosystème existant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#D47D5A]">Le Parcours d'une Commande Vocale</h2>
        <p className="mb-6">
          Pour illustrer concrètement notre architecture, suivons le parcours d'une simple commande vocale depuis sa prononciation jusqu'à sa réalisation.
        </p>
        
        <div className="space-y-8">
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D47D5A]"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#D47D5A] pl-4">1. Capture Audio et Prétraitement</h3>
            
            <p className="mb-4">
              Lorsqu'un serveur prononce "Table 12, deux menus du jour et une carafe d'eau" :
            </p>
            
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>L'oreillette WiFi capture l'audio via son microphone directionnel</li>
              <li>Le système de suppression de bruit élimine les sons ambiants du restaurant</li>
              <li>Le signal audio est compressé et transmis via WebSocket sécurisé</li>
              <li>Une première analyse détermine si l'énoncé est destiné au système</li>
            </ul>
            
            <div className="mt-4 bg-[#87A28F]/20 p-4 rounded-md border-l-4 border-[#87A28F]">
              <p className="font-semibold">Technologie clé</p>
              <p>Nos algorithmes de filtrage audio avancés permettent une reconnaissance précise même dans un environnement avec 85dB de bruit ambiant.</p>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D47D5A]"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#D47D5A] pl-4">2. Traitement Linguistique et Contextuel</h3>
            
            <p className="mb-4">
              Une fois l'audio capturé :
            </p>
            
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Le modèle de reconnaissance vocale convertit l'audio en texte</li>
              <li>Le LLM spécialisé pour la restauration analyse le contenu sémantique</li>
              <li>Le moteur contextuel enrichit la commande avec les informations pertinentes</li>
              <li>L'intention est identifiée : "enregistrer_commande" avec paramètres associés</li>
            </ul>
            
            <div className="mt-4 bg-[#1A2A40] text-white p-4 rounded-md font-mono text-sm overflow-x-auto">
              {`{
  "intent": "enregistrer_commande",
  "table": 12,
  "items": [
    {"item": "menu du jour", "quantité": 2},
    {"item": "carafe d'eau", "quantité": 1}
  ],
  "confidence": 0.97
}`}
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D47D5A]"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#D47D5A] pl-4">3. Logique Métier et Intégration</h3>
            
            <p className="mb-4">
              Avec l'intention identifiée :
            </p>
            
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Le système vérifie la disponibilité des articles commandés</li>
              <li>Les règles métier sont appliquées (promotions, restrictions)</li>
              <li>La commande est intégrée dans le système de gestion du restaurant</li>
              <li>Des notifications sont préparées pour la cuisine et le bar</li>
            </ul>
            
            <p>
              Cette étape s'effectue via notre middleware d'intégration qui assure la compatibilité avec plus de 15 systèmes de caisse différents, sans nécessiter de changement majeur dans votre infrastructure existante.
            </p>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#D47D5A]"></div>
            <h3 className="text-xl font-semibold mb-4 text-[#1A2A40] dark:text-[#D47D5A] pl-4">4. Réponse et Confirmation</h3>
            
            <p className="mb-4">
              Pour compléter le cycle :
            </p>
            
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Le système génère une confirmation naturelle</li>
              <li>La réponse vocale est synthétisée : "Commande enregistrée pour la table 12 : deux menus du jour et une carafe d'eau"</li>
              <li>L'audio est transmis à l'oreillette du serveur</li>
              <li>La commande apparaît instantanément en cuisine</li>
            </ul>
            
            <div className="mt-4 bg-[#D4B483]/20 p-4 rounded-md border-l-4 border-[#D4B483]">
              <p className="font-semibold">Temps total du processus</p>
              <p>Moins de 800ms entre la fin de la phrase du serveur et le début de la confirmation audible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#D47D5A]">Infrastructure Cloud et Edge Computing</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Architecture Hybride</h3>
          <p className="mb-6">
            Sotto utilise une architecture hybride innovante qui combine le meilleur du cloud et de l'edge computing :
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                Composants Edge (sur site)
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Routeur WiFi optimisé pour la communication des oreillettes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Serveur local pour traitement audio préliminaire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Cache intelligent pour fonctionnement en mode dégradé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Points d'impression sécurisés</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-[#1A2A40] dark:text-[#D47D5A] mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                Composants Cloud
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Modèles IA principaux et apprentissage continu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Stockage sécurisé des données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Tableaux de bord analytiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Mises à jour système automatisées</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p>
            Cette approche garantit un fonctionnement fluide même en cas de problème de connexion internet, tout en bénéficiant de la puissance de calcul nécessaire aux fonctionnalités IA avancées.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Sécurité Multicouche</h3>
          <p className="mb-6">
            La sécurité est intégrée à chaque niveau de notre architecture :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#1A2A40] p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span>Chiffrement de bout en bout des communications audio</span>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#1A2A40] p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <span>Authentification biométrique des utilisateurs par empreinte vocale</span>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#1A2A40] p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <span>Isolation des données entre restaurants</span>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#1A2A40] p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span>Audit trail complet de toutes les transactions</span>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow flex items-center">
              <div className="bg-[#1A2A40] p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span>Anonymisation automatique des conversations clients captées accidentellement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#D47D5A]">Déploiement et Maintenance</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Installation Sans Perturbation</h3>
            <p className="mb-4">
              Le déploiement de Sotto dans votre établissement est conçu pour être minimaliste et non-intrusif :
            </p>
            
            <ol className="relative border-l border-[#D47D5A] ml-3 space-y-6 pl-6">
              <li className="mb-4">
                <div className="absolute w-4 h-4 bg-[#D47D5A] rounded-full -left-2"></div>
                <div className="font-medium">Audit préalable</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">de votre infrastructure WiFi</p>
              </li>
              <li className="mb-4">
                <div className="absolute w-4 h-4 bg-[#D47D5A] rounded-full -left-2"></div>
                <div className="font-medium">Installation discrète</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">du matériel edge (2-3h, hors heures d'ouverture)</p>
              </li>
              <li className="mb-4">
                <div className="absolute w-4 h-4 bg-[#D47D5A] rounded-full -left-2"></div>
                <div className="font-medium">Intégration avec votre système existant</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">sans interruption de service</p>
              </li>
              <li className="mb-4">
                <div className="absolute w-4 h-4 bg-[#D47D5A] rounded-full -left-2"></div>
                <div className="font-medium">Formation du personnel</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">(1h maximum grâce à l'interface vocale intuitive)</p>
              </li>
              <li>
                <div className="absolute w-4 h-4 bg-[#D47D5A] rounded-full -left-2"></div>
                <div className="font-medium">Phase d'adaptation supervisée</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">de 48h avec support dédié</p>
              </li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Mises à Jour Continues</h3>
            <p className="mb-4">
              Notre système évolue constamment pour s'améliorer :
            </p>
            
            <div className="space-y-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Mises à jour logicielles automatiques pendant les heures creuses</span>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Amélioration continue des modèles linguistiques basée sur les interactions</span>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Nouvelles fonctionnalités déployées progressivement</span>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Adaptation aux spécificités de votre établissement</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-[#D4B483]/20 p-4 rounded-md border-l-4 border-[#D4B483]">
              <p className="font-semibold">Fréquence des mises à jour majeures</p>
              <p>Trimestrielle, avec des améliorations mineures hebdomadaires.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#D47D5A]">Performances et Fiabilité</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Métriques Clés</h3>
          <p className="mb-6">
            Notre architecture est optimisée pour garantir des performances exceptionnelles :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-float">
              <div className="text-[#D47D5A] text-4xl font-bold mb-2">99,97%</div>
              <div className="font-medium text-[#1A2A40] dark:text-white">Disponibilité système</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">moins de 3h d'indisponibilité par an</div>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-float" style={{animationDelay: "1s"}}>
              <div className="text-[#D47D5A] text-4xl font-bold mb-2">97,8%</div>
              <div className="font-medium text-[#1A2A40] dark:text-white">Précision de reconnaissance vocale</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">en environnement bruyant</div>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-float" style={{animationDelay: "2s"}}>
              <div className="text-[#D47D5A] text-4xl font-bold mb-2">350ms</div>
              <div className="font-medium text-[#1A2A40] dark:text-white">Temps de réponse moyen</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">du début de la commande à la confirmation</div>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-float" style={{animationDelay: "3s"}}>
              <div className="text-[#D47D5A] text-4xl font-bold mb-2">200</div>
              <div className="font-medium text-[#1A2A40] dark:text-white">Capacité de traitement</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">commandes simultanées par restaurant</div>
            </div>
            
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-float" style={{animationDelay: "4s"}}>
              <div className="text-[#D47D5A] text-4xl font-bold mb-2">8h</div>
              <div className="font-medium text-[#1A2A40] dark:text-white">Autonomie des oreillettes</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">en utilisation continue, recharge rapide 15min pour 2h</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Mode Dégradé Intelligent</h3>
          <p className="mb-4">
            En cas de problème technique, Sotto bascule automatiquement en mode dégradé :
          </p>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-[#D47D5A] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Fonctionnalités critiques maintenues en local</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#D47D5A] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Priorisation des commandes et paiements</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#D47D5A] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Interface de secours minimaliste accessible sur appareil mobile</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#D47D5A] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Reprise automatique sans perte de données lors du rétablissement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#D47D5A]">Conclusion</h2>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-md border-l-4 border-[#D47D5A]">
          <p className="mb-4">
            L'architecture technique de Sotto représente une avancée significative dans l'application de l'IA au secteur de la restauration. En combinant reconnaissance vocale avancée, traitement contextuel et intégration transparente, nous avons créé un système qui s'efface pour laisser place à l'essentiel : l'expérience humaine et gastronomique.
          </p>
          <p>
            Notre approche technique reflète notre philosophie : une technologie sophistiquée qui opère en coulisses, comme le personnel de salle idéal qui anticipe vos besoins sans jamais s'imposer. Nous libérons votre restaurant des écrans tout en garantissant une fiabilité et une sécurité sans compromis.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#87A28F]">Ressources Complémentaires</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/ressources/securite-donnees" className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A] mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Livre blanc : Sécurité des données dans Sotto</span>
          </a>
          
          <a href="/webinars/deploiement-sotto" className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A] mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Vidéo : Démonstration du déploiement en restaurant</span>
          </a>
          
          <a href="/faq/technique" className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A] mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>FAQ technique pour les administrateurs IT</span>
          </a>
        </div>
      </section>

      <section className="bg-[#1A2A40] text-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">Vous souhaitez en savoir plus ?</h3>
        <p className="mb-6">
          Contactez notre équipe technique pour organiser une démonstration personnalisée dans votre établissement ou participez à l'un de nos prochains webinars techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/contact" className="bg-[#D47D5A] hover:bg-[#c36a4a] text-white py-2 px-4 rounded-md transition-colors duration-300 text-center">
            Demander une démo
          </a>
          <a href="/webinars" className="bg-transparent hover:bg-white/10 border border-white text-white py-2 px-4 rounded-md transition-colors duration-300 text-center">
            Voir les prochains webinars
          </a>
        </div>
      </section>
    </div>
  );
}