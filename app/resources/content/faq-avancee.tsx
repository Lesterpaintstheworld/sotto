const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 text-foreground">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0]">FAQ avancée</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#D47D5A]">Introduction</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed">
            Bienvenue dans notre FAQ avancée, conçue pour répondre aux questions techniques et opérationnelles les plus pointues concernant le système Sotto. Ce guide approfondi va au-delà des questions de base pour aborder les aspects techniques, les scénarios complexes et les optimisations avancées que vous pourriez rencontrer en utilisant notre solution vocale IA dans votre établissement. Que vous soyez un restaurateur expérimenté cherchant à affiner votre utilisation du système ou un nouveau client avec des interrogations spécifiques, ce document vous fournira des réponses détaillées et des conseils pratiques pour tirer le meilleur parti de Sotto.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#D47D5A]">Aspects techniques</h2>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Comment Sotto gère-t-il les environnements particulièrement bruyants ?</h3>
          <p className="mb-4 leading-relaxed">
            Notre système utilise une combinaison de technologies avancées pour garantir une performance optimale même dans les environnements les plus bruyants :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Filtrage audio adaptatif</h4>
              <p>Les algorithmes de Sotto s'ajustent automatiquement au niveau de bruit ambiant de votre établissement.</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Micros directionnels</h4>
              <p>Nos oreillettes captent principalement la voix de la personne qui les porte, minimisant les sons environnants.</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">IA de suppression de bruit</h4>
              <p>Un traitement en temps réel élimine les bruits de fond typiques d'un restaurant (vaisselle, conversations, musique).</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Apprentissage contextuel</h4>
              <p>Le système s'améliore progressivement en s'adaptant aux spécificités acoustiques de votre établissement.</p>
            </div>
          </div>
          <p className="leading-relaxed">
            Pour les environnements extrêmement bruyants, nous recommandons l'utilisation de nos oreillettes premium à conduction osseuse, qui transmettent le son par vibration des os du crâne, rendant la communication claire même dans les cuisines les plus animées.
          </p>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Quelle est l'autonomie réelle des oreillettes et comment gérer leur charge ?</h3>
          <p className="mb-4 leading-relaxed">
            L'autonomie de nos oreillettes varie selon les modèles :
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 rounded-lg shadow-md border border-[#87A28F]/20">
              <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/80 dark:text-[#F5F5F0]">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Modèle</th>
                  <th className="py-3 px-4 text-left font-semibold">Autonomie en utilisation continue</th>
                  <th className="py-3 px-4 text-left font-semibold">Temps de charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#87A28F]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                  <td className="py-3 px-4 font-medium">Sotto Lite</td>
                  <td className="py-3 px-4">6-7 heures</td>
                  <td className="py-3 px-4">45 minutes</td>
                </tr>
                <tr className="border-t border-[#87A28F]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                  <td className="py-3 px-4 font-medium">Sotto Pro</td>
                  <td className="py-3 px-4">8-10 heures</td>
                  <td className="py-3 px-4">30 minutes</td>
                </tr>
                <tr className="border-t border-[#87A28F]/20 hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                  <td className="py-3 px-4 font-medium">Sotto Ultra</td>
                  <td className="py-3 px-4">12-14 heures</td>
                  <td className="py-3 px-4">20 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-3 leading-relaxed">
            Pour optimiser la gestion de la batterie dans un contexte de service continu, nous recommandons :
          </p>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 rounded-full bg-[#87A28F] text-white flex-shrink-0 flex items-center justify-center mt-1 mr-2">•</span>
              <span>Mettre en place un système de rotation des oreillettes pendant les périodes creuses</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 rounded-full bg-[#87A28F] text-white flex-shrink-0 flex items-center justify-center mt-1 mr-2">•</span>
              <span>Installer plusieurs stations de charge discrètes à des points stratégiques du restaurant</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 rounded-full bg-[#87A28F] text-white flex-shrink-0 flex items-center justify-center mt-1 mr-2">•</span>
              <span>Configurer les alertes de batterie faible à 20% pour avoir le temps de préparer un remplacement</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 h-5 rounded-full bg-[#87A28F] text-white flex-shrink-0 flex items-center justify-center mt-1 mr-2">•</span>
              <span>Utiliser la fonction "charge rapide" qui fournit 2 heures d'autonomie avec seulement 10 minutes de charge</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Comment se déroule l'intégration avec mon système de caisse existant ?</h3>
          <p className="mb-4 leading-relaxed">
            Sotto s'intègre avec la plupart des systèmes de caisse modernes grâce à notre architecture API ouverte. Le processus se déroule généralement comme suit :
          </p>
          
          <div className="relative mb-6">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#D47D5A]/30"></div>
            <div className="space-y-6">
              <div className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold">1</div>
                <div className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20">
                  <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483] mb-1">Évaluation technique</h4>
                  <p>Notre équipe analyse votre système actuel pour déterminer le type d'intégration nécessaire.</p>
                </div>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold">2</div>
                <div className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20">
                  <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483] mb-1">Configuration des connecteurs</h4>
                  <p>Mise en place des connecteurs API appropriés (REST, GraphQL ou WebSockets selon votre système).</p>
                </div>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold">3</div>
                <div className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20">
                  <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483] mb-1">Synchronisation des données</h4>
                  <p>Import de votre menu, structure des tables et comptes utilisateurs.</p>
                </div>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold">4</div>
                <div className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20">
                  <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483] mb-1">Phase de test</h4>
                  <p>Période de validation où les deux systèmes fonctionnent en parallèle.</p>
                </div>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold">5</div>
                <div className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20">
                  <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483] mb-1">Déploiement complet</h4>
                  <p>Activation de l'intégration complète après validation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="leading-relaxed">
            Pour les systèmes propriétaires ou plus anciens, nous proposons des solutions alternatives comme notre middleware d'intégration ou, dans certains cas, une migration vers notre système LEA POS pour une expérience entièrement intégrée.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#D47D5A]">Opérations quotidiennes</h2>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Comment gérer efficacement les modifications de commandes complexes ?</h3>
          <p className="mb-4 leading-relaxed">
            Sotto excelle dans la gestion des modifications de commandes grâce à sa compréhension contextuelle avancée. Voici comment gérer les scénarios complexes :
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <h4 className="font-semibold text-[#D47D5A] mb-3">Modification d'un élément spécifique dans une commande multiple :</h4>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-4 rounded-md font-mono text-sm">
                <p className="mb-2"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Modifie le plat de la table 7, remplace la sole meunière par un bar grillé, mais garde les mêmes accompagnements."</p>
                <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> "Modification enregistrée pour la table 7 : remplacement de la sole meunière par un bar grillé avec les mêmes accompagnements."</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <h4 className="font-semibold text-[#D47D5A] mb-3">Annulation partielle :</h4>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-4 rounded-md font-mono text-sm">
                <p className="mb-2"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Annule l'entrée de foie gras pour la table 12, mais garde le reste de la commande."</p>
                <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> "Entrée de foie gras annulée pour la table 12. Confirmation envoyée en cuisine."</p>
              </div>
            </div>
          </div>
          
          <p className="mb-4 leading-relaxed">
            Pour les modifications très complexes, utilisez la commande "détaille" pour une approche pas à pas :
          </p>
          
          <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20 mb-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-4 rounded-md font-mono text-sm">
              <p className="mb-2"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Détaille la commande de la table 9."</p>
              <p className="mb-2"><span className="text-[#D47D5A] font-semibold">Sotto :</span> "Table 9 : une salade César, un tartare de bœuf cuisson bleue, un magret de canard cuisson à point, une bouteille de Bordeaux 2018."</p>
              <p className="mb-2"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Modifie le tartare pour une cuisson légèrement saisie et ajoute des frites à la place de la salade."</p>
              <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> "Modification enregistrée : tartare avec cuisson légèrement saisie, accompagné de frites au lieu de salade."</p>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Comment optimiser la coordination entre la salle et la cuisine ?</h3>
          <p className="mb-4 leading-relaxed">
            La coordination entre la salle et la cuisine est l'un des points forts de Sotto. Voici les meilleures pratiques pour l'optimiser :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Utiliser les statuts précis</h4>
              <p>Encouragez votre équipe à utiliser des termes standardisés comme "en préparation", "prêt dans 5 minutes", "prêt au service" plutôt que des expressions vagues.</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Activer les priorités intelligentes</h4>
              <p>Le système peut être configuré pour hiérarchiser automatiquement les messages selon leur urgence :</p>
              <ul className="mt-2 space-y-1 pl-5 list-disc">
                <li>Priorité haute : plats prêts, modifications urgentes</li>
                <li>Priorité moyenne : questions, informations générales</li>
                <li>Priorité basse : confirmations, statuts de routine</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Créer des canaux dédiés</h4>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Canal général pour tout le personnel</li>
                <li>Canal cuisine pour la brigade</li>
                <li>Canal salle pour les serveurs</li>
                <li>Canaux privés pour communications spécifiques</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Utiliser les alertes temporelles</h4>
              <p className="mb-2">Pour les plats qui nécessitent un service immédiat :</p>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-3 rounded-md font-mono text-xs">
                <p className="mb-1"><span className="text-[#87A28F] font-semibold">Chef :</span> "Soufflé table 3 prêt, service immédiat requis."</p>
                <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> [à tous les serveurs disponibles avec alerte sonore distinctive] "URGENT : Soufflé table 3 prêt pour service immédiat."</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Comment gérer les périodes de pointe avec Sotto ?</h3>
          <p className="mb-4 leading-relaxed">
            Durant les périodes de forte affluence, Sotto devient particulièrement précieux grâce à plusieurs fonctionnalités spécifiques :
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">1</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Mode Rush</h4>
              </div>
              <p className="mb-2">Activez-le en disant "Sotto, active le mode rush". Ce mode :</p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Raccourcit les confirmations vocales</li>
                <li>Priorise automatiquement les communications</li>
                <li>Active l'équilibrage dynamique des tâches</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">2</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Équilibrage de charge</h4>
              </div>
              <p>Le système répartit intelligemment les nouvelles tables entre les serveurs selon leur charge actuelle.</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">3</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Priorisation des tâches</h4>
              </div>
              <p className="mb-2">Sotto suggère un ordre optimal pour effectuer les différentes actions en attente.</p>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-3 rounded-md font-mono text-sm">
                <p className="mb-1"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Sotto, prochaines actions ?"</p>
                <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> "Suggestions : 1. Servir entrées table 8 (prêtes depuis 2 min), 2. Prendre commande table 12 (en attente depuis 4 min), 3. Apporter addition table 5 (demandée il y a 1 min)."</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">4</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Communication optimisée</h4>
              </div>
              <p>En période de rush, activez le mode "communication critique uniquement" qui filtre les messages non essentiels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#D47D5A]">Dépannage et situations exceptionnelles</h2>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Que faire en cas de panne WiFi ou de problème de connectivité ?</h3>
          <p className="mb-4 leading-relaxed">
            Sotto est conçu avec la résilience en tête. En cas de problème de connectivité :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50 animate-float">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Mode hors-ligne automatique</h4>
              <p>Le système bascule automatiquement en mode local, stockant les commandes sur les appareils.</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50 animate-float" style={{ animationDelay: "1s" }}>
              <h4 className="font-semibold text-[#D47D5A] mb-2">Synchronisation différée</h4>
              <p>Dès que la connexion est rétablie, toutes les données sont synchronisées sans intervention manuelle.</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50 animate-float" style={{ animationDelay: "2s" }}>
              <h4 className="font-semibold text-[#D47D5A] mb-2">Procédure de secours</h4>
              <ul className="space-y-1 pl-5 list-disc">
                <li>Utilisez l'application mobile Sotto en mode local</li>
                <li>Connectez-vous au réseau de secours 4G si disponible</li>
                <li>Pour les pannes prolongées, le système peut fonctionner via le point d'accès d'un smartphone</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50 animate-float" style={{ animationDelay: "3s" }}>
              <h4 className="font-semibold text-[#D47D5A] mb-2">Kit de secours</h4>
              <p>Nous recommandons de garder un petit routeur 4G de secours dans votre établissement, que nous pouvons fournir et préconfigurer pour votre système.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Comment gérer les situations exceptionnelles comme les allergies graves ou les urgences ?</h3>
          <p className="mb-4 leading-relaxed">
            Sotto dispose d'un mode prioritaire pour les situations critiques :
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <h4 className="font-semibold text-[#D47D5A] mb-3">Commande "Urgence"</h4>
              <p className="mb-2">En prononçant "Sotto, urgence" suivi de la situation, vous activez un protocole spécial :</p>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-4 rounded-md font-mono text-sm">
                <p className="mb-2"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Sotto, urgence, allergie aux fruits de mer table 14."</p>
                <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> [Alerte simultanée à tout le personnel concerné] "URGENCE : Allergie aux fruits de mer signalée table 14. Attention requise en cuisine et en salle."</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Protocoles prédéfinis</h4>
              <p>Vous pouvez configurer des protocoles spécifiques pour différentes situations d'urgence qui seront automatiquement déclenchés.</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <h4 className="font-semibold text-[#D47D5A] mb-3">Mode discret</h4>
              <p className="mb-2">Pour les situations délicates nécessitant une intervention sans alarmer les clients :</p>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-4 rounded-md font-mono text-sm">
                <p className="mb-2"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Sotto, code calme, client agité table 3."</p>
                <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> [Au manager uniquement, ton calme] "Attention requise table 3, client agité. Intervention discrète recommandée."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#D47D5A]">Personnalisation et optimisation</h2>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Comment personnaliser Sotto pour mon concept de restaurant spécifique ?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Personnalisation du vocabulaire</h4>
              <p>Ajoutez votre terminologie spécifique, noms de plats uniques ou expressions propres à votre établissement.</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Ajustement des flux de travail</h4>
              <p>Configurez des séquences personnalisées adaptées à votre style de service (service à la française, à l'anglaise, etc.).</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#D47D5A] mb-2">Voix et ton</h4>
              <p>Choisissez parmi plusieurs voix ou personnalisez le ton et le style de communication.</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20 mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-3">Intégration de votre identité</h4>
            <p className="mb-2">Incorporez le nom de votre établissement dans les interactions :</p>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] p-4 rounded-md font-mono text-sm">
              <p className="mb-2"><span className="text-[#87A28F] font-semibold">Serveur :</span> "Table 5 prête pour la commande."</p>
              <p><span className="text-[#D47D5A] font-semibold">Sotto :</span> "Bienvenue au [Nom de votre restaurant]. Table 5 prête pour la prise de commande."</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
            <h4 className="font-semibold text-[#D47D5A] mb-2">Règles métier personnalisées</h4>
            <p>Créez des automatismes spécifiques, comme suggérer automatiquement certains accords mets-vins ou rappeler des spécificités de service pour certains plats.</p>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#1A2A40] dark:text-[#D4B483]">Quelles sont les meilleures pratiques pour former une nouvelle équipe à Sotto ?</h3>
          <p className="mb-4 leading-relaxed">
            Pour une adoption réussie de Sotto par votre personnel, nous recommandons cette approche progressive :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">1</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Phase d'introduction (1-2 jours)</h4>
              </div>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Formation en petit groupe hors service</li>
                <li>Exercices pratiques simples</li>
                <li>Familiarisation avec les commandes de base</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">2</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Phase d'accompagnement (3-5 jours)</h4>
              </div>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Utilisation pendant les services calmes</li>
                <li>Présence d'un formateur Sotto</li>
                <li>Débriefings quotidiens pour ajustements</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">3</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Phase d'autonomie (semaine 2)</h4>
              </div>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Utilisation complète avec support à distance</li>
                <li>Introduction progressive des fonctionnalités avancées</li>
                <li>Identification des "champions" internes</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-5 shadow-md border border-[#87A28F]/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] text-white flex items-center justify-center font-bold mr-3">4</div>
                <h4 className="font-semibold text-[#1A2A40] dark:text-[#D4B483]">Phase d'optimisation (à partir de la semaine 3)</h4>
              </div>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Personnalisation fine selon les retours d'équipe</li>
                <li>Formation aux fonctionnalités avancées</li>
                <li>Mise en place des meilleures pratiques spécifiques</li>
              </ul>
            </div>
          </div>
          
          <p className="leading-relaxed">
            Nous proposons également des modules de formation en ligne accessibles à tout moment pour le perfectionnement continu et l'intégration de nouveaux employés.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#D47D5A]">Conclusion</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed">
            Cette FAQ avancée couvre les aspects les plus techniques et opérationnels de Sotto, mais notre système évolue constamment pour s'adapter aux besoins des restaurateurs. Si vous avez des questions qui ne trouvent pas réponse ici, n'hésitez pas à contacter notre équipe support disponible 24/7 via l'application ou par téléphone.
          </p>
          <p className="leading-relaxed">
            Sotto est conçu pour s'intégrer naturellement dans votre établissement, en valorisant l'humain et l'expérience culinaire plutôt que la technologie elle-même. Notre objectif est que le système devienne un assistant discret mais puissant, vous permettant de vous concentrer sur ce qui compte vraiment : offrir une expérience gastronomique exceptionnelle à vos clients.
          </p>
        </div>
      </section>

      <div className="mt-10 border-t border-[#87A28F]/30 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-6 shadow-md border border-[#D47D5A]/20 hover:border-[#D47D5A]/50 transition-colors">
            <h3 className="text-lg font-semibold text-[#D47D5A] mb-3">Besoin d'une assistance personnalisée ?</h3>
            <p className="mb-2">
              Programmez une session de consultation technique avec l'un de nos experts en utilisant le calendrier disponible dans votre espace client ou contactez-nous à <a href="mailto:support@sotto.ai" className="text-[#D47D5A] hover:text-[#D47D5A]/80 underline">support@sotto.ai</a>.
            </p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/60 rounded-lg p-6 shadow-md border border-[#D47D5A]/20 hover:border-[#D47D5A]/50 transition-colors">
            <h3 className="text-lg font-semibold text-[#D47D5A] mb-3">Prêt à aller plus loin ?</h3>
            <p className="mb-2">
              Découvrez nos modules complémentaires et les nouvelles fonctionnalités en développement dans la section "Innovations" de votre tableau de bord.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceContent;