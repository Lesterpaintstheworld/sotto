const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
        Checklist de Déploiement Sotto
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
          Introduction
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Préparer votre établissement pour l'installation de Sotto est une étape importante dans la transformation de votre expérience de restauration. Cette checklist interactive vous guide à travers tous les éléments essentiels à vérifier avant, pendant et après le déploiement de notre système vocal IA. Conçue pour les restaurateurs soucieux d'optimiser leur établissement sans compromettre l'expérience humaine, cette ressource vous aidera à planifier une transition fluide vers un service libéré des écrans.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Avant le déploiement
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Infrastructure technique
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A2A40] text-[#F5F5F0]">
                  <th className="p-3 text-left">Élément</th>
                  <th className="p-3 text-left">Vérification</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="p-3 font-medium">Couverture WiFi</td>
                  <td className="p-3">
                    <ul className="list-none space-y-1">
                      <li>□ Signal stable dans toutes les zones de service</li>
                      <li>□ Bande passante minimum de 50 Mbps</li>
                      <li>□ Réseau dédié pour Sotto</li>
                    </ul>
                  </td>
                  <td className="p-3">Un audit WiFi préalable peut être réalisé par notre équipe</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="p-3 font-medium">Prises électriques</td>
                  <td className="p-3">
                    <ul className="list-none space-y-1">
                      <li>□ Emplacements disponibles pour stations de charge</li>
                      <li>□ Vérification des disjoncteurs</li>
                    </ul>
                  </td>
                  <td className="p-3">Prévoir idéalement 1 station pour 4 membres du personnel</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="p-3 font-medium">Espace serveur</td>
                  <td className="p-3">
                    <ul className="list-none space-y-1">
                      <li>□ Emplacement sécurisé et ventilé</li>
                      <li>□ Accès limité au personnel autorisé</li>
                    </ul>
                  </td>
                  <td className="p-3">Un petit espace discret suffit (30×30×10 cm)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Préparation du menu
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Menu numérisé et validé dans le système</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Variantes et options de personnalisation documentées</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Allergènes et régimes spéciaux identifiés</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Nomenclature standardisée pour les plats et boissons</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Prononciation phonétique des plats complexes ou étrangers</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] border-l-4 border-[#D47D5A] p-4 rounded-r-lg mb-6">
            <p className="italic text-[#1A2A40] dark:text-[#F5F5F0]">
              <strong>Conseil Sotto</strong>: Prenez le temps de standardiser les noms de vos plats et leurs variantes. Une nomenclature claire facilitera grandement les commandes vocales et réduira les erreurs d'interprétation.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Formation du personnel
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Liste du personnel complète avec rôles définis</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Planning des sessions de formation établi</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Espace calme identifié pour les formations</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Matériel pédagogique distribué à l'équipe</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>"Champions" internes désignés (1 pour la salle, 1 pour la cuisine)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Organisation spatiale
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Plan du restaurant avec zones de service définies</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Numérotation des tables vérifiée et cohérente</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Identification des zones potentiellement bruyantes</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Emplacements des stations de charge déterminés</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Zones de communication privilégiées identifiées</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Pendant le déploiement
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Installation matérielle
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Réception et inventaire du matériel</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Installation des stations de charge</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Configuration du serveur Sotto</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Test de connectivité dans toutes les zones</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Vérification des systèmes de secours</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Configuration logicielle
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Paramétrage du menu dans l'interface administrateur</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Configuration des profils utilisateurs</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Personnalisation des confirmations vocales</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Intégration avec les systèmes existants</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Test des scénarios de commande principaux</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Formation initiale
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Session d'introduction pour toute l'équipe</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Formation approfondie des "champions"</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Exercices pratiques en situation réelle</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Remise des guides de référence rapide</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Configuration des oreillettes personnelles</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Après le déploiement
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Période d'adaptation (2 premières semaines)
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Suivi quotidien avec l'équipe Sotto</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Collecte des retours du personnel</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Ajustements de la configuration si nécessaire</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Sessions de questions-réponses programmées</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Analyse des premières métriques d'utilisation</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Optimisation continue
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Révision hebdomadaire des performances</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Identification des opportunités d'amélioration</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Mise à jour des menus et options</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Formation continue pour nouveaux employés</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Partage des meilleures pratiques avec l'équipe</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Spécificités techniques
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Exigences réseau détaillées
          </h3>
          <p className="mb-4">
            Pour garantir une performance optimale du système Sotto, votre réseau WiFi doit répondre aux critères suivants:
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
            <ul className="space-y-3 list-disc pl-5">
              <li><strong>Couverture</strong>: Signal minimum de -65 dBm dans toutes les zones de service</li>
              <li><strong>Latence</strong>: Inférieure à 50 ms</li>
              <li><strong>Bande passante</strong>: Minimum 50 Mbps symétrique</li>
              <li><strong>QoS (Qualité de Service)</strong>: Priorisation du trafic Sotto</li>
              <li><strong>Sécurité</strong>: WPA2-Enterprise ou WPA3 recommandé</li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] border-l-4 border-[#D47D5A] p-4 rounded-r-lg mb-6">
            <p className="italic text-[#1A2A40] dark:text-[#F5F5F0]">
              <strong>Note</strong>: Si votre infrastructure actuelle ne répond pas à ces exigences, notre équipe peut vous recommander des solutions adaptées à votre établissement.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Maintenance des oreillettes
          </h3>
          <p className="mb-4">
            Pour assurer la longévité et les performances de vos oreillettes Sotto:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-float">
              <h4 className="font-semibold text-lg mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">1. Nettoyage quotidien</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Utiliser les lingettes antimicrobiennes fournies</li>
                <li>Éviter tout produit à base d'alcool</li>
                <li>Nettoyer les contacts de charge</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-float" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold text-lg mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">2. Gestion de la batterie</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recharger systématiquement entre les services</li>
                <li>Rotation recommandée des appareils toutes les 6 heures</li>
                <li>Vérifier le niveau de batterie au démarrage du service</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-float" style={{ animationDelay: "0.4s" }}>
              <h4 className="font-semibold text-lg mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">3. Stockage</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Conserver dans les stations de charge dédiées</li>
                <li>Maintenir à température ambiante (15-25°C)</li>
                <li>Éviter l'exposition prolongée à l'humidité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Préparation opérationnelle
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Adaptation des procédures de service
          </h3>
          <p className="mb-4">
            Pour tirer pleinement parti de Sotto, considérez ces ajustements à vos procédures:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A2A40] text-[#F5F5F0]">
                  <th className="p-3 text-left">Phase de service</th>
                  <th className="p-3 text-left">Procédure standard</th>
                  <th className="p-3 text-left">Procédure avec Sotto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="p-3 font-medium">Prise de commande</td>
                  <td className="p-3">Serveur note sur carnet ou tablette</td>
                  <td className="p-3">Serveur énonce la commande à Sotto</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="p-3 font-medium">Transmission en cuisine</td>
                  <td className="p-3">Saisie dans le système ou dépôt de bons</td>
                  <td className="p-3">Transmission automatique et instantanée</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="p-3 font-medium">Modifications de commande</td>
                  <td className="p-3">Retour au système, saisie des modifications</td>
                  <td className="p-3">Énonciation directe des modifications</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <td className="p-3 font-medium">Gestion des additions</td>
                  <td className="p-3">Impression manuelle, apport à table</td>
                  <td className="p-3">Demande vocale, impression automatique</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
            Scénarios de secours
          </h3>
          <p className="mb-4">
            Préparez votre équipe aux situations exceptionnelles:
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Procédure en cas de panne WiFi établie</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Système de commande manuel de secours disponible</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Contacts d'urgence du support Sotto affichés</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Oreillettes de rechange chargées et accessibles</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 border border-[#87A28F] rounded mr-3 mt-0.5"></div>
                <span>Formation de l'équipe aux procédures dégradées</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Mesure du succès
        </h2>
        <p className="mb-4">
          Pour évaluer l'impact de Sotto sur votre établissement, nous vous recommandons de suivre ces indicateurs clés:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            { title: "Temps de service", desc: "Mesurez le temps entre la commande et le service" },
            { title: "Satisfaction client", desc: "Collectez les retours via vos canaux habituels" },
            { title: "Efficacité du personnel", desc: "Nombre de tables gérées par serveur" },
            { title: "Précision des commandes", desc: "Taux d'erreur et de retours en cuisine" },
            { title: "Rotation des tables", desc: "Temps moyen d'occupation" }
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 hover:shadow-md transition-shadow duration-300 border-t-4 border-[#D47D5A]">
              <h4 className="font-semibold text-lg mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] border-l-4 border-[#D47D5A] p-4 rounded-r-lg mb-6">
          <p className="italic text-[#1A2A40] dark:text-[#F5F5F0]">
            <strong>Astuce</strong>: L'interface administrateur Sotto vous donne accès à des tableaux de bord détaillés pour suivre ces métriques automatiquement.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">
          Conclusion
        </h2>
        <div className="bg-[#1A2A40] text-[#F5F5F0] rounded-lg shadow-lg p-6 mb-8">
          <p className="text-lg leading-relaxed mb-4">
            Cette checklist de déploiement vous accompagne dans chaque étape de l'intégration de Sotto à votre établissement. En suivant méthodiquement ces points de vérification, vous assurez une transition harmonieuse vers un service libéré des écrans, plus humain et plus efficace.
          </p>
          <p className="text-lg leading-relaxed">
            Rappelez-vous que l'équipe Sotto reste à votre disposition tout au long du processus pour vous accompagner et répondre à vos questions. Notre objectif commun est de transformer votre expérience de restauration en recentrant l'attention sur l'essentiel : l'humain et la gastronomie.
          </p>
        </div>

        <div className="bg-[#F5F5F0] dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-[#D47D5A]">
          <p className="font-bold text-lg mb-2">Prêt à commencer?</p>
          <p>
            Contactez votre responsable de déploiement Sotto ou écrivez-nous à <a href="mailto:installation@sotto.ai" className="text-[#D47D5A] hover:underline">installation@sotto.ai</a> pour planifier votre audit préliminaire et recevoir votre calendrier personnalisé de déploiement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;