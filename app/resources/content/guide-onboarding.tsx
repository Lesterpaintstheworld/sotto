const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 resource-content">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40]">Guide d'Onboarding Restaurant</h1>
        <div className="inline-block px-4 py-1 rounded-full bg-[#F5F5F0] text-[#1A2A40] font-medium">
          Ressource opérationnelle d'équipe
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-b border-[#D47D5A] pb-2">Introduction</h2>
        <p className="mb-4 leading-relaxed">
          Ce guide détaille le processus complet d'intégration d'un nouveau restaurant au système Sotto, depuis la première rencontre jusqu'à l'autonomie complète de l'équipe. Notre approche d'onboarding est conçue pour être fluide, progressive et centrée sur l'humain – reflétant l'essence même de notre solution. L'objectif est de transformer l'expérience du restaurant en éliminant les interfaces à écran tout en garantissant une transition en douceur vers notre système vocal IA.
        </p>
        <p className="mb-4 leading-relaxed">
          Ce document est destiné à l'équipe opérationnelle de Sotto et constitue la référence pour assurer une expérience d'intégration cohérente et de haute qualité pour chaque nouveau client.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-b border-[#D47D5A] pb-2">Phases d'Onboarding</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">Phase 1: Évaluation Préliminaire (J-14)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Audit Technique</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Infrastructure réseau</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Évaluation de la couverture WiFi existante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Identification des zones mortes potentielles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Test de débit et de stabilité de la connexion internet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Documentation des équipements réseau existants</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Système d'encaissement actuel</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Inventaire des solutions utilisées (caisse, TPE, logiciel)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Identification des flux de données existants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Évaluation des besoins d'intégration ou de migration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Analyse Opérationnelle</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Cartographie du restaurant</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Plan détaillé avec numérotation des tables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Identification des zones de service (salle, terrasse, bar)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Points stratégiques pour les stations de charge</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Flux de travail actuels</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Documentation du parcours de prise de commande</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Analyse des interactions cuisine-salle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Identification des goulets d'étranglement opérationnels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Élément à analyser</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Outils</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Livrables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Couverture WiFi</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Scanner réseau, heat mapper</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Carte de couverture avec recommandations</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Encaissement</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Questionnaire structuré</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Rapport de compatibilité et plan de migration</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Espaces</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Mesures et photos</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Plan annoté avec emplacements des équipements</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Processus</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Observation et interviews</td>
                  <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Diagramme de flux optimisé pour Sotto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">Phase 2: Préparation et Configuration (J-7)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Installation Technique</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Optimisation réseau</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Installation de points d'accès WiFi supplémentaires si nécessaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Configuration du réseau dédié pour les oreillettes Sotto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Sécurisation des connexions (WPA2-Enterprise)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Tests de couverture post-installation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Déploiement matériel</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Installation des stations de charge aux points stratégiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Configuration des oreillettes et test individuel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Mise en place du système de secours (tablette discrète)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Vérification des imprimantes et de leur intégration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Configuration Logicielle</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Paramétrage du système</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Création du profil restaurant dans l'écosystème Sotto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Import ou création de la carte et des articles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Configuration des zones et tables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Paramétrage des rôles utilisateurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Test complet du système en environnement contrôlé</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D47D5A] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Personnalisation vocale</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Adaptation aux spécificités linguistiques du restaurant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Intégration du vocabulaire spécifique à la carte</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Calibration des seuils de reconnaissance vocale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Personnalisation des confirmations et alertes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">Phase 3: Formation (J-3 à J0)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Formation Théorique</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Session dirigeants (2h)</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Présentation de l'écosystème complet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Interface d'administration et rapports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Gestion des utilisateurs et des droits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Analyse des données et optimisation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Session équipe (3h)</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Principes fondamentaux du système vocal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Manipulation des oreillettes et bonnes pratiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Commandes vocales essentielles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Procédures de secours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Formation Pratique</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Simulation en conditions réelles (4h)</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Exercices progressifs de complexité croissante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Simulation de service complet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Gestion des cas particuliers et exceptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Résolution des problèmes courants</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Service test (1 service)</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Service en conditions réelles avec support dédié</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Nombre limité de tables utilisant Sotto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Debriefing et ajustements immédiats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Identification des besoins d'accompagnement supplémentaires</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-gray-700 rounded-lg p-5 border-l-4 border-[#D47D5A] mb-6">
            <p className="italic text-[#1A2A40] dark:text-[#F5F5F0]">
              <strong>Note importante</strong>: Adapter le rythme de formation à l'équipe. Certains restaurants nécessiteront plus de temps pour s'approprier le système. La qualité de l'adoption prime sur la rapidité.
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">Phase 4: Lancement et Accompagnement (J0 à J+14)</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Jour de Lancement</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Préparation (J0 - 2h avant service)</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Vérification complète du système</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Distribution et test des oreillettes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Rappel des points essentiels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Présence de l'équipe Sotto complète</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Service assisté</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Support sur place pendant tout le service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Intervention discrète en cas de difficulté</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Collecte des retours en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Ajustements mineurs immédiats</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-[#1A2A40]">Suivi Post-Lancement</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Première semaine</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Présence sur site pendant les services clés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Réunion quotidienne de debriefing (15 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Ajustements des paramètres selon retours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Support téléphonique prioritaire 24/7</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
                <h5 className="font-bold mb-2 text-[#1A2A40]">Deuxième semaine</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Présence ponctuelle sur les services à forte affluence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Réunion de bilan mi-parcours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Formation complémentaire si nécessaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    <span>Transition progressive vers le support standard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-b border-[#D47D5A] pb-2">Outils et Ressources</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">Kit d'Onboarding</h3>
          
          <p className="mb-4">Chaque nouveau restaurant reçoit un kit d'onboarding complet comprenant:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow animate-float">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Documentation personnalisée</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Guide d'utilisation adapté à la configuration spécifique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Fiches mémo format carte de crédit pour chaque membre d'équipe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Plan annoté du restaurant avec zones de couverture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Procédures d'urgence illustrées</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow animate-float" style={{ animationDelay: "1s" }}>
              <h4 className="font-bold mb-2 text-[#1A2A40]">Matériel</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Oreillettes principales + 2 de secours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Stations de charge (nombre adapté à la taille du restaurant)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Tablette de secours discrète avec support élégant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Kit de nettoyage et d'entretien des oreillettes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">Ressources Numériques</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Espace client dédié</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Accès à tous les documents de formation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Vidéos tutorielles personnalisées</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Forum privé pour questions et retours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Tableau de bord d'adoption et de performance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border-l-4 border-[#1A2A40] hover:shadow-lg transition-shadow">
              <h4 className="font-bold mb-2 text-[#1A2A40]">Outils de suivi</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Rapport quotidien d'utilisation automatisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Alertes de problèmes potentiels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Suggestions d'optimisation basées sur l'IA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Historique des interactions avec le support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-b border-[#D47D5A] pb-2">Indicateurs de Réussite</h2>
        
        <p className="mb-4">L'onboarding est considéré comme réussi lorsque les critères suivants sont atteints:</p>
        
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Indicateur</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Objectif</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider">Méthode de mesure</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Taux d'utilisation</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">&gt;90% des commandes via Sotto</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Automatique via système</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Temps de formation</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">&lt;5h pour maîtrise de base</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Évaluation par formateur</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Satisfaction équipe</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Score &gt;8/10</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Questionnaire J+14</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Erreurs de commande</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Réduction de 30% vs ancien système</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Comparaison pré/post</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Autonomie</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">0 appel support non planifié après J+10</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Suivi des tickets support</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Temps de service</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Réduction de 15% minimum</td>
                <td className="px-4 py-3 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Mesure automatisée</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-b border-[#D47D5A] pb-2">Gestion des Cas Particuliers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#D47D5A]">Environnements Très Bruyants</h3>
            <p className="text-sm mb-3">Pour les restaurants avec un niveau sonore particulièrement élevé:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Utilisation d'oreillettes à conduction osseuse</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Configuration de zones acoustiques dans le système</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Ajustement des seuils de reconnaissance vocale</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Formation spécifique aux techniques de communication en environnement bruyant</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#D47D5A]">Équipes Multilingues</h3>
            <p className="text-sm mb-3">Pour les restaurants avec personnel international:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Configuration multi-langue du système</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Adaptation aux accents spécifiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Documentation traduite dans les langues nécessaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Sessions de formation adaptées par groupe linguistique</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#D47D5A]">Résistance au Changement</h3>
            <p className="text-sm mb-3">En cas de réticence marquée de certains membres d'équipe:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Sessions individuelles de formation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Système de parrainage par les adopteurs précoces</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Période de transition prolongée avec double système</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Mise en avant des succès et améliorations tangibles</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] border-b border-[#D47D5A] pb-2">Conclusion et Transition</h2>
        
        <p className="mb-4 leading-relaxed">
          Un onboarding réussi est la fondation d'une relation durable avec nos clients restaurateurs. Notre approche progressive et centrée sur l'humain garantit que chaque membre de l'équipe se sente à l'aise avec Sotto, permettant au restaurant de profiter pleinement des bénéfices de notre système vocal IA.
        </p>
        
        <p className="mb-4 leading-relaxed">
          À l'issue de la période d'onboarding de deux semaines, le restaurant est transféré à l'équipe de support standard avec un dossier complet documentant:
        </p>
        
        <ul className="mb-6 space-y-2 pl-5">
          <li className="flex items-start">
            <span className="text-[#D47D5A] mr-2">•</span>
            <span>Les spécificités de la configuration</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#D47D5A] mr-2">•</span>
            <span>Les défis rencontrés et solutions apportées</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#D47D5A] mr-2">•</span>
            <span>Les contacts clés et leurs préférences</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#D47D5A] mr-2">•</span>
            <span>Les opportunités d'optimisation identifiées</span>
          </li>
        </ul>
        
        <p className="mb-6 leading-relaxed">
          Une réunion de transition est organisée entre l'équipe d'onboarding, le client et l'équipe de support pour assurer une continuité parfaite dans l'accompagnement.
        </p>
        
        <div className="bg-[#F5F5F0] dark:bg-gray-700 rounded-lg p-6 border-l-4 border-[#1A2A40] mb-6">
          <h3 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Actions pour l'équipe d'onboarding:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Planifier un suivi à J+30 pour évaluer l'adoption à long terme</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Solliciter un témoignage client après stabilisation complète</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Documenter les leçons apprises pour amélioration continue du processus</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">Identifier les opportunités de vente additionnelle adaptées au profil du restaurant</span>
            </li>
          </ul>
        </div>
        
        <p className="italic text-sm text-[#1A2A40] dark:text-[#F5F5F0]">
          Ce guide est un document vivant. Partagez vos retours d'expérience et suggestions d'amélioration via notre plateforme interne pour nous aider à perfectionner continuellement notre processus d'onboarding.
        </p>
      </section>
    </div>
  );
};

export default ResourceContent;