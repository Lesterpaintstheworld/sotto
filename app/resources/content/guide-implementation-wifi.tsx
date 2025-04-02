export default function ResourceContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12 resource-content">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2A40] leading-tight">
          Guide d'Implémentation WiFi
        </h1>
        
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/80 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Introduction</h2>
          <div className="space-y-4 text-[#1A2A40]">
            <p>
              La connectivité WiFi représente la colonne vertébrale de l'écosystème Sotto. Contrairement aux systèmes traditionnels qui peuvent fonctionner avec des connexions intermittentes, notre solution vocale repose entièrement sur une infrastructure réseau solide et optimisée. Ce guide détaille les prérequis techniques, les configurations recommandées et les procédures de test pour garantir une implémentation réussie du système Sotto dans les environnements de restauration.
            </p>
            <p>
              Une infrastructure WiFi adéquate est essentielle pour assurer la communication fluide et ininterrompue entre les oreillettes du personnel, le système central et l'ensemble de l'écosystème Sotto. Ce document s'adresse aux équipes techniques chargées de l'évaluation préalable et de l'installation des solutions Sotto dans les établissements partenaires.
            </p>
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#1A2A40] border-b border-[#D47D5A] pb-2">Prérequis Techniques</h2>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#1A2A40]">Matériel Réseau Recommandé</h3>
          
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <thead className="bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Composant</th>
                  <th className="py-3 px-4 text-left text-white">Spécification Minimale</th>
                  <th className="py-3 px-4 text-left text-white">Recommandation Optimale</th>
                  <th className="py-3 px-4 text-left text-white">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Points d'accès</td>
                  <td className="py-3 px-4 text-[#1A2A40]">WiFi 5 (802.11ac)</td>
                  <td className="py-3 px-4 text-[#1A2A40]">WiFi 6 (802.11ax)</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Minimum 2 points d'accès pour redondance</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Routeur</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Double bande (2.4/5GHz)</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Maillage (mesh)</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Support VLAN recommandé</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Bande passante</td>
                  <td className="py-3 px-4 text-[#1A2A40]">50 Mbps symétrique</td>
                  <td className="py-3 px-4 text-[#1A2A40]">100+ Mbps symétrique</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Fibre optique privilégiée</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Latence</td>
                  <td className="py-3 px-4 text-[#1A2A40]">moins de 50ms</td>
                  <td className="py-3 px-4 text-[#1A2A40]">moins de 20ms</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Critique pour la reconnaissance vocale</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Redondance</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Connexion 4G/5G de secours</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Double FAI</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Basculement automatique nécessaire</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-[#87A28F] hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Couverture et Densité</h3>
            <p className="mb-4 text-[#1A2A40]">
              La qualité de l'expérience Sotto dépend directement de la couverture WiFi dans l'établissement. Une analyse préalable est indispensable pour identifier:
            </p>
            <ul className="space-y-2 text-[#1A2A40]">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span><strong>Zones critiques</strong>: Salle, bar, cuisine, réserves, entrée</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span><strong>Points morts</strong>: Zones où le signal est faible ou inexistant</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span><strong>Sources d'interférence</strong>: Équipements électriques, microondes, autres réseaux</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span><strong>Densité d'utilisateurs</strong>: Nombre maximal d'oreillettes simultanées</span>
              </li>
            </ul>
            
            <div className="mt-4 bg-[#1A2A40]/10 p-4 rounded-lg border-l-4 border-[#D47D5A]">
              <p className="italic font-medium text-[#1A2A40]">
                <strong>Règle essentielle</strong>: Aucune zone de l'établissement ne doit présenter un signal inférieur à -70 dBm pour garantir une transmission vocale fiable.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-[#D4B483] hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Configuration Réseau</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Architecture Recommandée</h4>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm overflow-x-auto text-[#1A2A40]">
                  <pre>
{`Internet ─── Routeur Principal ─┬─ Point d'accès 1 (Salle)
                                │
                                ├─ Point d'accès 2 (Cuisine)
                                │
                                └─ Switch PoE ─── Points d'accès additionnels`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Paramètres SSID</h4>
                <p className="mb-2 text-[#1A2A40]">Pour optimiser les performances des oreillettes Sotto:</p>
                <ul className="space-y-1 text-[#1A2A40]">
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Créer un SSID dédié pour le système Sotto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Configurer le SSID en 5 GHz uniquement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Activer le band steering pour les appareils compatibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Limiter l'accès au SSID par filtrage MAC</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Qualité de Service (QoS)</h4>
                <p className="mb-2 text-[#1A2A40]">La configuration QoS est critique pour prioriser le trafic vocal:</p>
                <ul className="space-y-1 text-[#1A2A40]">
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Prioriser le trafic UDP sur les ports utilisés par Sotto (8080-8089)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Configurer une file d'attente prioritaire pour les paquets marqués DSCP EF (46)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Limiter la bande passante des services non essentiels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    <span>Désactiver les fonctionnalités d'économie d'énergie sur les points d'accès</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#1A2A40] border-b border-[#D47D5A] pb-2">Procédure d'Évaluation Préalable</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 animate-float">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Analyse Site Survey</h3>
            <p className="mb-4 text-[#1A2A40]">Avant toute installation, une analyse complète du site est requise:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[#D47D5A]">1. Cartographie physique</h4>
                <ul className="mt-2 ml-6 list-disc text-[#1A2A40]">
                  <li>Plan détaillé de l'établissement</li>
                  <li>Identification des matériaux de construction (béton, métal, verre)</li>
                  <li>Repérage des obstacles potentiels au signal</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-[#D47D5A]">2. Analyse spectrale</h4>
                <ul className="mt-2 ml-6 list-disc text-[#1A2A40]">
                  <li>Mesure des interférences sur les bandes 2.4 GHz et 5 GHz</li>
                  <li>Identification des canaux les moins encombrés</li>
                  <li>Détection des réseaux voisins et leur puissance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-[#D47D5A]">3. Test de couverture</h4>
                <ul className="mt-2 ml-6 list-disc text-[#1A2A40]">
                  <li>Mesure du signal dans toutes les zones opérationnelles</li>
                  <li>Identification des zones nécessitant des points d'accès supplémentaires</li>
                  <li>Création d'une carte thermique de couverture</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Outils Recommandés</h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 mr-4 bg-[#1A2A40] dark:bg-[#87A28F] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40]">Analyseurs WiFi professionnels</h4>
                  <p className="text-sm text-[#1A2A40]">Ekahau Site Survey, NetSpot Pro</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 mr-4 bg-[#D47D5A] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40]">Applications mobiles</h4>
                  <p className="text-sm text-[#1A2A40]">WiFi Analyzer, Network Analyzer Pro</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 mr-4 bg-[#87A28F] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40]">Équipement de test</h4>
                  <p className="text-sm text-[#1A2A40]">TP-Link TL-WA801ND pour simulation de points d'accès</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#1A2A40] border-b border-[#D47D5A] pb-2">Configuration et Optimisation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Sécurisation du Réseau</h3>
            <p className="mb-4 text-[#1A2A40]">
              La sécurité du réseau Sotto est primordiale pour protéger les données sensibles:
            </p>
            <ul className="space-y-3 text-[#1A2A40]">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span><strong>Chiffrement</strong>: WPA3-Enterprise ou minimum WPA2-Enterprise</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span><strong>Authentification</strong>: Serveur RADIUS avec certificats</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span><strong>Isolation client</strong>: Activer l'isolation des clients sans fil</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span><strong>Pare-feu</strong>: Règles restrictives autorisant uniquement les flux nécessaires</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span><strong>Mise à jour</strong>: Procédure automatique de mise à jour du firmware</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Optimisation des Points d'Accès</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-[#87A28F] mb-2">Placement Stratégique</h4>
                <ul className="space-y-2 text-[#1A2A40]">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Installer les points d'accès en hauteur (2.5-3m)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span>Éviter la proximité immédiate des équipements métalliques</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Orienter les antennes perpendiculairement aux zones à couvrir</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                    <span>Prévoir un chevauchement de 15-20% entre zones de couverture</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-[#87A28F] mb-2">Configuration Avancée</h4>
                <ul className="space-y-2 text-[#1A2A40]">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span><strong>Puissance d'émission</strong>: Ajuster pour éviter les interférences entre points d'accès</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong>Sélection de canal</strong>: Configurer manuellement pour éviter les chevauchements</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span><strong>Largeur de canal</strong>: 40 MHz sur 5 GHz pour équilibrer débit et portée</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span><strong>Roaming</strong>: Activer 802.11r pour transition rapide entre points d'accès</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#87A28F] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span><strong>Densité client</strong>: Limiter à 15-20 appareils par point d'accès</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#1A2A40] border-b border-[#D47D5A] pb-2">Procédures de Test et Validation</h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Tests de Performance</h3>
            <p className="mb-4 text-[#1A2A40]">
              Avant de déclarer l'installation conforme, effectuer les tests suivants:
            </p>
            
            <div className="space-y-6">
              <div className="bg-[#F5F5F0] dark:bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-[#1A2A40] mb-2">1. Test de couverture</h4>
                <ul className="space-y-1 text-[#1A2A40]">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Vérifier le niveau de signal dans toutes les zones (-65 dBm minimum)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Tester avec une oreillette Sotto dans chaque position critique</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Valider l'absence de points morts</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-[#1A2A40] mb-2">2. Test de latence</h4>
                <ul className="space-y-1 text-[#1A2A40]">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mesurer le temps de réponse entre l'oreillette et le serveur Sotto</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Valider que la latence reste dessous 100ms en charge maximale</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Tester les transitions entre points d'accès</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-gray-700/50 p-4 rounded-lg">
                <h4 className="font-medium text-[#1A2A40] mb-2">3. Test de charge</h4>
                <ul className="space-y-1 text-[#1A2A40]">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Simuler l'utilisation maximale prévue (toutes oreillettes actives)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Maintenir la communication pendant 30 minutes minimum</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D47D5A] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Vérifier l'absence de déconnexions ou dégradations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <thead className="bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Test</th>
                  <th className="py-3 px-4 text-left text-white">Critère de succès</th>
                  <th className="py-3 px-4 text-left text-white">Méthode de vérification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Couverture</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Signal au dessus de -65 dBm partout</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Cartographie avec outil d'analyse</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Latence</td>
                  <td className="py-3 px-4 text-[#1A2A40]">au dessous de 100ms en tout point</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Ping continu pendant déplacement</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Débit</td>
                  <td className="py-3 px-4 text-[#1A2A40]">au dessus de 5 Mbps par oreillette</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Test de bande passante simultané</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Transition</td>
                  <td className="py-3 px-4 text-[#1A2A40]">au dessous de 150ms entre AP</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Test de roaming avec outil spécialisé</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Fiabilité</td>
                  <td className="py-3 px-4 text-[#1A2A40]">0 déconnexion sur 4h</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Test longue durée en conditions réelles</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Documentation Post-Installation</h3>
            <p className="mb-4 text-[#1A2A40]">
              À l'issue de l'installation, fournir:
            </p>
            <ul className="space-y-2 text-[#1A2A40]">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4B483] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Carte de couverture WiFi finale avec niveaux de signal</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4B483] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Inventaire des équipements installés avec configuration</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4B483] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Paramètres réseau complets (SSID, mots de passe, IP)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4B483] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Résultats des tests de performance</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4B483] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Procédures de dépannage de premier niveau</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-[#1A2A40] border-b border-[#D47D5A] pb-2">Résolution des Problèmes Courants</h2>
        
        <div className="space-y-6">
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <thead className="bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-white">Symptôme</th>
                  <th className="py-3 px-4 text-left text-white">Causes Possibles</th>
                  <th className="py-3 px-4 text-left text-white">Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Déconnexions fréquentes</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Interférences, signal faible</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Ajuster canaux, ajouter AP</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Latence élevée</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Congestion réseau, interférences</td>
                  <td className="py-3 px-4 text-[#1A2A40]">QoS, changer canal, vérifier FAI</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Audio saccadé</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Perte de paquets, bande passante</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Vérifier QoS, optimiser roaming</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Zones mortes</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Obstacles, mauvais placement AP</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Repositionner/ajouter des AP</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                  <td className="py-3 px-4 font-medium text-[#1A2A40]">Connexion impossible</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Problème DHCP, auth</td>
                  <td className="py-3 px-4 text-[#1A2A40]">Vérifier serveur DHCP, RADIUS</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Procédure de Maintenance Préventive</h3>
            <p className="mb-4 text-[#1A2A40]">
              Programmer des vérifications régulières:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5F5F0] dark:bg-gray-700/50 p-4 rounded-lg flex items-center">
                <div className="w-12 h-12 bg-[#87A28F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-medium text-[#1A2A40]">Mensuel</span>
                  <span className="text-sm text-[#1A2A40]">Analyse des performances WiFi</span>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-gray-700/50 p-4 rounded-lg flex items-center">
                <div className="w-12 h-12 bg-[#87A28F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <span className="block font-medium text-[#1A2A40]">Trimestriel</span>
                  <span className="text-sm text-[#1A2A40]">Vérification de la couverture</span>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-gray-700/50 p-4 rounded-lg flex items-center">
                <div className="w-12 h-12 bg-[#87A28F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div>
                  <span className="block font-medium text-[#1A2A40]">Semestriel</span>
                  <span className="text-sm text-[#1A2A40]">Mise à jour des firmwares</span>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-gray-700/50 p-4 rounded-lg flex items-center">
                <div className="w-12 h-12 bg-[#87A28F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-medium text-[#1A2A40]">Annuel</span>
                  <span className="text-sm text-[#1A2A40]">Test complet de l'infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-[#1A2A40] border-b border-[#D47D5A] pb-2">Conclusion</h2>
        
        <div className="bg-[#1A2A40] dark:bg-[#1A2A40]/80 p-6 rounded-xl shadow-md">
          <p className="mb-4 text-white">
            Une infrastructure WiFi robuste et optimisée constitue le fondement indispensable du système Sotto. En suivant ce guide, vous garantissez une expérience utilisateur fluide et fiable, permettant au personnel de se concentrer sur l'essentiel: le service et l'expérience client.
          </p>
          <p className="text-white">
            Les spécifications et recommandations de ce document représentent les conditions idéales pour le déploiement de Sotto. Toutefois, notre équipe technique est disponible pour adapter ces exigences aux contraintes spécifiques de chaque établissement, tout en maintenant les standards de qualité qui font la réputation de notre solution.
          </p>
        </div>
        
        <div className="bg-[#F5F5F0] dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-[#D47D5A]">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-4">Actions Recommandées</h3>
          <ul className="space-y-4">
            <li className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <span className="block font-medium text-[#1A2A40]">Avant tout déploiement</span>
                <span className="text-[#1A2A40]">Réaliser une analyse complète du site avec notre outil d'évaluation</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="block font-medium text-[#1A2A40]">Pour les installations existantes</span>
                <span className="text-[#1A2A40]">Programmer un audit réseau pour identifier les optimisations possibles</span>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <span className="block font-medium text-[#1A2A40]">Formation</span>
                <span className="text-[#1A2A40]">Inscrire votre équipe technique à notre webinaire mensuel "Infrastructure Réseau pour Sotto"</span>
              </div>
            </li>
          </ul>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-[#1A2A40]">
              Pour toute question technique, contactez notre équipe d'intégration à <a href="mailto:integration@sotto.ai" className="text-[#D47D5A] hover:underline">integration@sotto.ai</a> ou via le canal Slack #team-implementation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}