const ResourceContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-[#F5F5F0] dark:bg-[#1A2A40]/90 rounded-xl shadow-lg">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b-2 border-[#D47D5A] pb-4">
        Manuel de Support Niveau 1
      </h1>

      <div className="italic text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 mb-8 text-lg">
        Document interne pour les équipes Sotto
      </div>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Introduction</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-[#1A2A40] dark:text-[#F5F5F0]/90">
          <p>
            Ce manuel fournit les procédures standardisées de résolution des problèmes courants pour l'équipe de support niveau 1 de Sotto. En tant que première ligne d'assistance auprès de nos restaurateurs partenaires, votre rôle est essentiel pour garantir une expérience fluide avec notre système vocal IA. Ce document vous guidera à travers les problèmes les plus fréquemment rencontrés et leurs solutions, vous permettant de résoudre efficacement la majorité des incidents sans avoir à les escalader vers le support de niveau 2.
          </p>
          <p>
            Notre approche du support client reflète l'essence même de Sotto : être discret, efficace, attentif et élégant. Même face à des difficultés techniques, nous maintenons une communication claire, professionnelle et rassurante, tout en apportant des solutions concrètes qui permettent à nos partenaires de se concentrer sur l'essentiel : l'humain et la gastronomie.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Principes fondamentaux du support Sotto</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#D47D5A]">Notre philosophie d'assistance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#D47D5A]">
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Discrétion et efficacité</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                Résoudre les problèmes rapidement sans perturber le service du restaurant
              </p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#87A28F]">
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Proactivité</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                Anticiper les besoins et identifier les problèmes potentiels avant qu'ils n'affectent l'expérience
              </p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#D4B483]">
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Langage clair</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                Communiquer sans jargon technique excessif
              </p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#1A2A40] dark:border-[#F5F5F0]">
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0]">Empathie</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                Comprendre que chaque minute d'interruption impacte directement l'activité de nos partenaires
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#D47D5A]">Niveaux de priorité des incidents</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-md">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90">
                <tr>
                  <th className="py-3 px-4 text-left">Niveau</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Temps de réponse cible</th>
                  <th className="py-3 px-4 text-left">Exemples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-bold text-[#D47D5A]">P1</td>
                  <td className="py-3 px-4">Critique - Service totalement indisponible</td>
                  <td className="py-3 px-4">15 minutes</td>
                  <td className="py-3 px-4">Système vocal entièrement hors service, aucune oreillette ne fonctionne</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-bold text-[#D47D5A]">P2</td>
                  <td className="py-3 px-4">Majeur - Fonctionnalité principale dégradée</td>
                  <td className="py-3 px-4">30 minutes</td>
                  <td className="py-3 px-4">Reconnaissance vocale intermittente, délais importants</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-bold text-[#D47D5A]">P3</td>
                  <td className="py-3 px-4">Modéré - Fonctionnalité secondaire affectée</td>
                  <td className="py-3 px-4">2 heures</td>
                  <td className="py-3 px-4">Problème avec une fonctionnalité spécifique, une seule oreillette défectueuse</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#D47D5A]">P4</td>
                  <td className="py-3 px-4">Mineur - Impact limité</td>
                  <td className="py-3 px-4">24 heures</td>
                  <td className="py-3 px-4">Questions d'utilisation, demandes de fonctionnalités</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Procédures de diagnostic</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#D47D5A]">Vérifications initiales</h3>
          <p className="mb-4 text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
            Avant de plonger dans des diagnostics spécifiques, effectuez systématiquement ces vérifications :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#87A28F]">
              <span className="inline-block bg-[#87A28F] text-white dark:bg-[#87A28F]/80 w-8 h-8 rounded-full text-center leading-8 font-bold mb-2">1</span>
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0] inline-block ml-2">État du système</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 ml-10">
                Consultez le tableau de bord d'état des services Sotto pour vérifier si un incident général est en cours
              </p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#87A28F]">
              <span className="inline-block bg-[#87A28F] text-white dark:bg-[#87A28F]/80 w-8 h-8 rounded-full text-center leading-8 font-bold mb-2">2</span>
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0] inline-block ml-2">Version du logiciel</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 ml-10">
                Confirmez que le restaurant utilise la dernière version du système
              </p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#87A28F]">
              <span className="inline-block bg-[#87A28F] text-white dark:bg-[#87A28F]/80 w-8 h-8 rounded-full text-center leading-8 font-bold mb-2">3</span>
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0] inline-block ml-2">Connectivité réseau</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 ml-10">
                Vérifiez l'état de la connexion WiFi du restaurant
              </p>
            </div>

            <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-[#87A28F]">
              <span className="inline-block bg-[#87A28F] text-white dark:bg-[#87A28F]/80 w-8 h-8 rounded-full text-center leading-8 font-bold mb-2">4</span>
              <h4 className="font-bold mb-2 text-[#1A2A40] dark:text-[#F5F5F0] inline-block ml-2">Historique récent</h4>
              <p className="text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 ml-10">
                Consultez les tickets récents pour ce partenaire pour identifier d'éventuels problèmes récurrents
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#D47D5A]">Collecte d'informations essentielles</h3>
          <p className="mb-4 text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
            Pour chaque incident, recueillez systématiquement :
          </p>
          <ul className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md space-y-3">
            <li className="flex items-start">
              <span className="inline-block bg-[#D4B483] w-2 h-2 rounded-full mt-2 mr-3"></span>
              <span className="text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">ID du restaurant et informations de contact</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-[#D4B483] w-2 h-2 rounded-full mt-2 mr-3"></span>
              <span className="text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">Description précise du problème (quoi, quand, combien d'utilisateurs affectés)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-[#D4B483] w-2 h-2 rounded-full mt-2 mr-3"></span>
              <span className="text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">Actions déjà entreprises par le restaurateur</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-[#D4B483] w-2 h-2 rounded-full mt-2 mr-3"></span>
              <span className="text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">Journaux système pertinents (accessibles via le portail administrateur)</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Résolution des problèmes courants</h2>
        
        <div className="space-y-8">
          {/* Problème 1 */}
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-4 text-white">
              <h3 className="text-xl font-bold">1. Problèmes de connexion des oreillettes</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-[#D47D5A] mb-2">Symptômes</h4>
                <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
                  <li>Oreillettes déconnectées du système</li>
                  <li>Connexion intermittente</li>
                  <li>Voyant d'état clignotant en rouge</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#D47D5A] mb-2">Procédure de résolution</h4>
                
                <div className="space-y-4 mt-3">
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier l'état de charge</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Demander au partenaire de placer l'oreillette sur son socle de charge pendant au moins 10 minutes</li>
                      <li>Vérifier que le voyant de charge s'allume correctement (bleu fixe)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Réinitialiser l'oreillette</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Guider le partenaire pour maintenir le bouton d'alimentation pendant 10 secondes</li>
                      <li>Attendre que le voyant clignote en bleu, indiquant la réinitialisation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier la connexion WiFi</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Demander au partenaire de confirmer que l'oreillette est à portée du routeur WiFi</li>
                      <li>Vérifier dans le portail administrateur que le signal WiFi est suffisant à l'emplacement concerné</li>
                      <li>Si nécessaire, suggérer l'ajout d'un répéteur WiFi dans les zones à signal faible</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Réassocier l'oreillette</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Accéder au portail administrateur avec les identifiants du restaurant</li>
                      <li>Naviguer vers "Gestion des appareils" > "Oreillettes"</li>
                      <li>Sélectionner "Réassocier" pour l'oreillette problématique</li>
                      <li>Guider le partenaire pour suivre les instructions à l'écran</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/80 border-l-4 border-[#D47D5A] p-4 rounded-r-lg italic">
                  <span className="font-bold">Note :</span> Si après ces étapes l'oreillette ne se connecte toujours pas, il peut s'agir d'un problème matériel. Créez un ticket de niveau 2 pour un remplacement potentiel.
                </div>
              </div>
            </div>
          </div>
          
          {/* Problème 2 */}
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-4 text-white">
              <h3 className="text-xl font-bold">2. Problèmes de reconnaissance vocale</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-[#D47D5A] mb-2">Symptômes</h4>
                <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
                  <li>Le système ne répond pas aux commandes vocales</li>
                  <li>Mauvaise interprétation fréquente des commandes</li>
                  <li>Latence excessive entre la commande et la réponse</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#D47D5A] mb-2">Procédure de résolution</h4>
                
                <div className="space-y-4 mt-3">
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier les niveaux sonores ambiants</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Demander si le restaurant est particulièrement bruyant au moment des problèmes</li>
                      <li>Vérifier les niveaux de bruit ambiant dans les journaux système</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier le microphone</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Guider le partenaire pour inspecter si le microphone est obstrué (résidus, poussière)</li>
                      <li>Proposer un nettoyage délicat avec un chiffon sec</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Tester la reconnaissance vocale</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Demander au partenaire d'effectuer le test vocal intégré :
                        <ul className="ml-6 mt-1 space-y-1 list-disc">
                          <li>"Sotto, lancer le test de reconnaissance vocale"</li>
                          <li>Suivre les instructions pour prononcer les phrases de test</li>
                        </ul>
                      </li>
                      <li>Analyser les résultats du test dans le portail administrateur</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Ajuster les paramètres de sensibilité</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Accéder au portail administrateur</li>
                      <li>Naviguer vers "Paramètres" > "Reconnaissance vocale"</li>
                      <li>Ajuster légèrement la sensibilité du microphone (+10%)</li>
                      <li>Demander au partenaire de tester à nouveau</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier les mises à jour linguistiques</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Confirmer que les dernières mises à jour du modèle linguistique sont installées</li>
                      <li>Si nécessaire, forcer la mise à jour depuis "Paramètres" > "Système" > "Mises à jour"</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/80 border-l-4 border-[#87A28F] p-4 rounded-r-lg italic">
                  <span className="font-bold">Conseil :</span> Pour les restaurants avec des accents régionaux prononcés ou un vocabulaire spécifique, proposez d'activer la période d'apprentissage adaptatif de 7 jours.
                </div>
              </div>
            </div>
          </div>
          
          {/* Problème 3 */}
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-4 text-white">
              <h3 className="text-xl font-bold">3. Problèmes de communication entre salle et cuisine</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-[#D47D5A] mb-2">Symptômes</h4>
                <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
                  <li>Messages non transmis entre la salle et la cuisine</li>
                  <li>Délais excessifs dans la transmission des commandes</li>
                  <li>Confirmations manquantes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#D47D5A] mb-2">Procédure de résolution</h4>
                
                <div className="space-y-4 mt-3">
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier la configuration des zones</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Accéder au portail administrateur</li>
                      <li>Naviguer vers "Configuration" > "Zones de service"</li>
                      <li>Confirmer que les zones "Salle" et "Cuisine" sont correctement définies</li>
                      <li>Vérifier que les oreillettes sont assignées aux bonnes zones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Tester la communication inter-zones</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Demander à un membre du personnel en salle d'envoyer un message test à la cuisine</li>
                      <li>Vérifier dans les journaux système que le message est correctement routé</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier la couverture WiFi</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Analyser la carte de couverture WiFi dans le portail administrateur</li>
                      <li>Identifier les éventuelles zones mortes entre la salle et la cuisine</li>
                      <li>Suggérer des ajustements de placement du routeur ou l'ajout de répéteurs si nécessaire</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Réinitialiser le module de communication</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Naviguer vers "Système" > "Modules" > "Communication inter-zones"</li>
                      <li>Sélectionner "Redémarrer le module"</li>
                      <li>Demander au personnel de tester à nouveau après le redémarrage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Problème 4 */}
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-4 text-white">
              <h3 className="text-xl font-bold">4. Problèmes de gestion des commandes</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-[#D47D5A] mb-2">Symptômes</h4>
                <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
                  <li>Commandes non enregistrées dans le système</li>
                  <li>Articles manquants dans les commandes</li>
                  <li>Modifications de commandes non prises en compte</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#D47D5A] mb-2">Procédure de résolution</h4>
                
                <div className="space-y-4 mt-3">
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier l'intégration avec le système de caisse</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Accéder au portail administrateur</li>
                      <li>Naviguer vers "Intégrations" > "Système de caisse"</li>
                      <li>Vérifier l'état de la connexion et les dernières synchronisations</li>
                      <li>Forcer une synchronisation manuelle si nécessaire</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Examiner les journaux de commandes</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Naviguer vers "Rapports" > "Journaux de commandes"</li>
                      <li>Rechercher les commandes problématiques par heure ou numéro de table</li>
                      <li>Vérifier si les commandes apparaissent dans les journaux mais pas dans le système de caisse</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Tester le processus de commande</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Guider le partenaire pour effectuer une commande test</li>
                      <li>Suivre le parcours de la commande dans le système en temps réel</li>
                      <li>Identifier à quelle étape la commande échoue</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                    <h5 className="font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Vérifier la configuration du menu</h5>
                    <ul className="space-y-1 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                      <li>Naviguer vers "Menu" > "Configuration"</li>
                      <li>Confirmer que tous les articles mentionnés comme problématiques sont correctement configurés</li>
                      <li>Vérifier les synonymes et variations de prononciation pour les articles fréquemment mal interprétés</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Procédure d'escalade</h2>
        
        <p className="mb-4 text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
          Si vous ne parvenez pas à résoudre un problème après avoir suivi les procédures ci-dessus, suivez ce processus d'escalade :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-[#D47D5A]">
            <h3 className="text-xl font-bold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">1. Préparer les informations d'escalade</h3>
            <ul className="space-y-2 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
              <li>Résumez clairement le problème et les étapes déjà entreprises</li>
              <li>Joignez tous les journaux système pertinents</li>
              <li>Incluez les coordonnées directes du partenaire</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-[#D47D5A]">
            <h3 className="text-xl font-bold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">2. Déterminer le niveau d'urgence</h3>
            <ul className="space-y-2 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
              <li><span className="font-bold">P1/P2 :</span> Escalade immédiate par téléphone + ticket</li>
              <li><span className="font-bold">P3/P4 :</span> Escalade par ticket uniquement</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-[#D47D5A]">
            <h3 className="text-xl font-bold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">3. Créer un ticket de niveau 2</h3>
            <ul className="space-y-2 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
              <li>Utilisez le modèle "Escalade N2" dans le système de tickets</li>
              <li>Assignez au groupe approprié selon la nature du problème :
                <ul className="ml-6 mt-1 space-y-1 list-disc">
                  <li>Problèmes matériels → Équipe Hardware</li>
                  <li>Problèmes logiciels → Équipe Software</li>
                  <li>Problèmes d'intégration → Équipe Intégrations</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-[#D47D5A]">
            <h3 className="text-xl font-bold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">4. Informer le partenaire</h3>
            <ul className="space-y-2 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
              <li>Expliquez clairement que le problème nécessite une expertise supplémentaire</li>
              <li>Donnez une estimation réaliste du temps de résolution</li>
              <li>Proposez des solutions temporaires si possible</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Suivi et documentation</h2>
        
        <p className="mb-4 text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
          Pour chaque incident résolu :
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-[#87A28F] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">1</div>
            <h3 className="text-xl font-bold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Documenter la solution</h3>
            <ul className="space-y-2 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
              <li>Détaillez précisément les étapes qui ont permis de résoudre le problème</li>
              <li>Notez tout comportement inhabituel ou information pertinente pour l'équipe technique</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-[#D47D5A] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
            <h3 className="text-xl font-bold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Mise à jour de la base de connaissances</h3>
            <ul className="space-y-2 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
              <li>Si vous avez découvert une nouvelle solution, proposez-la pour inclusion dans la base de connaissances</li>
              <li>Utilisez le formulaire "Suggestion KB" accessible depuis le portail support</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-[#D4B483] rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
            <h3 className="text-xl font-bold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">Suivi proactif</h3>
            <ul className="space-y-2 ml-6 list-disc text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
              <li>Pour les problèmes P1/P2 : Planifiez un appel de suivi 24h après la résolution</li>
              <li>Pour les problèmes récurrents : Signalez-les à l'équipe produit via le canal #product-feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">Conclusion</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/50 p-8 rounded-lg shadow-md border-t-8 border-[#D47D5A]">
          <p className="mb-4 text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
            Ce manuel couvre les procédures essentielles pour résoudre efficacement les problèmes les plus courants rencontrés par nos partenaires restaurateurs. Votre rôle en tant que support de niveau 1 est crucial pour maintenir la promesse de Sotto : permettre aux restaurants de se libérer des contraintes technologiques pour se concentrer sur l'humain et la gastronomie.
          </p>
          <p className="mb-4 text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
            Rappelez-vous que chaque interaction avec un partenaire est une opportunité de renforcer sa confiance dans notre solution. En résolvant rapidement et efficacement les problèmes, vous contribuez directement à la mission de Sotto de transformer positivement l'expérience de la restauration.
          </p>
          <p className="text-[#1A2A40]/90 dark:text-[#F5F5F0]/90">
            Si vous avez des suggestions pour améliorer ce manuel ou les procédures qu'il contient, n'hésitez pas à les partager via le formulaire de feedback accessible dans la section "Ressources d'équipe" du portail support.
          </p>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-[#D47D5A]/30 text-center text-[#1A2A40]/60 dark:text-[#F5F5F0]/60 text-sm">
        <p className="mb-2">Document version 1.2 - Dernière mise à jour : 15 mars 2024</p>
        <p>Pour toute question concernant ce document, contactez l'équipe Knowledge Management</p>
      </footer>
    </div>
  );
};

export default ResourceContent;