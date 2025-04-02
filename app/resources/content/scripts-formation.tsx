const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#1A2A40] mb-4">
          Scripts de Formation Personnel
        </h1>
        <div className="inline-block px-4 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] font-medium text-sm">
          Ressource d'équipe • Catégorie: Operational
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Introduction</h2>
        <div className="prose max-w-none">
          <p className="text-[#1A2A40] leading-relaxed">
            Ce document présente les scripts et protocoles de formation destinés au personnel utilisant le système Sotto dans les établissements de restauration. Conçu pour différents rôles (serveurs, cuisiniers, managers), ce matériel vise à garantir une intégration harmonieuse de notre interface vocale IA dans le flux de travail quotidien du restaurant. Conformément à notre mission de libérer la restauration des écrans pour créer une expérience plus humaine et efficace, ces scripts mettent l'accent sur une interaction naturelle avec le système, tout en préservant et améliorant les interactions humaines au sein de l'établissement.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Principes généraux de formation</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Philosophie d'apprentissage</h3>
          <p className="text-[#1A2A40] mb-4">
            Notre approche de formation repose sur trois principes fondamentaux:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/40">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3">1</span>
                <h4 className="font-semibold text-[#1A2A40]">Progressivité</h4>
              </div>
              <p className="text-[#1A2A40] text-sm">
                Introduction graduelle des fonctionnalités, du plus simple au plus complexe
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/40">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3">2</span>
                <h4 className="font-semibold text-[#1A2A40]">Contextualisation</h4>
              </div>
              <p className="text-[#1A2A40] text-sm">
                Formation en situation réelle, dans l'environnement de travail
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/40">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3">3</span>
                <h4 className="font-semibold text-[#1A2A40]">Autonomisation</h4>
              </div>
              <p className="text-[#1A2A40] text-sm">
                Développement de l'indépendance et de la confiance dans l'utilisation du système
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Structure des sessions</h3>
          <p className="text-[#1A2A40] mb-4">
            Chaque session de formation suit une structure en quatre temps:
          </p>
          
          <div className="overflow-x-auto rounded-lg border border-[#87A28F]/20 shadow-md">
            <table className="min-w-full divide-y divide-[#87A28F]/20">
              <thead className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Phase</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Durée</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Objectif</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Méthode</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#1A2A40]/20 divide-y divide-[#87A28F]/20">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40]">Découverte</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">30 min</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Familiarisation avec le matériel et concepts</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Présentation, manipulation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40]">Démonstration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">45 min</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Visualisation des cas d'usage</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Mise en situation par le formateur</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40]">Pratique guidée</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">1h30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Utilisation assistée</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Exercices supervisés</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40]">Autonomie</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">1h</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Utilisation indépendante</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2A40]">Mise en situation réelle avec support à distance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Indicateurs de réussite</h3>
          <p className="text-[#1A2A40] mb-4">
            La formation est considérée comme réussie lorsque le membre du personnel:
          </p>
          
          <ul className="space-y-3 mt-4">
            {[
              "Utilise spontanément les commandes vocales appropriées",
              "Réagit correctement aux retours du système",
              "Sait résoudre les problèmes courants",
              "Maintient un niveau élevé d'attention envers les clients",
              "Exprime un niveau de confiance d'au moins 8/10 dans l'utilisation du système"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#87A28F] flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#1A2A40]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Formation des serveurs</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg mb-8 border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Session 1: Prise en main du matériel</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-2">Objectifs</h4>
            <ul className="list-disc pl-5 space-y-1 text-[#1A2A40]">
              <li>Se familiariser avec l'oreillette</li>
              <li>Maîtriser les gestes essentiels (mise en marche, réglage, positionnement)</li>
              <li>Comprendre les indicateurs (sons, vibrations)</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-2">Script d'introduction</h4>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg border-l-4 border-[#D47D5A] text-sm text-[#1A2A40] italic">
              "Bienvenue à cette première session de formation Sotto. Aujourd'hui, nous allons découvrir ensemble comment ce système va transformer votre façon de travailler, en vous libérant des contraintes des écrans et en vous permettant de vous concentrer pleinement sur vos clients.
              <br /><br />
              L'oreillette que vous tenez entre vos mains est votre nouvel outil de travail principal. Elle a été conçue pour être confortable pendant de longues heures et presque invisible pour vos clients. Commençons par apprendre à la positionner correctement..."
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#D47D5A] mb-3">Exercices pratiques</h4>
            <div className="space-y-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <h5 className="font-medium text-[#1A2A40] mb-2">1. Mise en place de l'oreillette</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                  <li>Positionnement correct dans l'oreille</li>
                  <li>Ajustement pour confort optimal</li>
                  <li>Test de stabilité en mouvement</li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <h5 className="font-medium text-[#1A2A40] mb-2">2. Familiarisation avec les commandes tactiles</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                  <li>Allumage/extinction</li>
                  <li>Réglage du volume</li>
                  <li>Mise en pause temporaire</li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <h5 className="font-medium text-[#1A2A40] mb-2">3. Reconnaissance des signaux</h5>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                  <li>Identification des différentes alertes sonores</li>
                  <li>Compréhension des patterns de vibration</li>
                  <li>Réponse appropriée à chaque signal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg mb-8 border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Session 2: Commandes vocales fondamentales</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-3">Commandes essentielles pour les serveurs</h4>
            <div className="overflow-x-auto rounded-lg border border-[#87A28F]/20">
              <table className="min-w-full divide-y divide-[#87A28F]/20">
                <thead className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Commande</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Fonction</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Exemple</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A2A40]/20 divide-y divide-[#87A28F]/20">
                  {[
                    { cmd: "\"Table [numéro]\"", func: "Identifier une table", ex: "\"Table 12\"" },
                    { cmd: "\"Commande\"", func: "Débuter l'enregistrement d'une commande", ex: "\"Table 5, commande\"" },
                    { cmd: "\"Modifier\"", func: "Changer une commande existante", ex: "\"Modifier table 3\"" },
                    { cmd: "\"Addition\"", func: "Demander l'addition", ex: "\"Addition table 8\"" },
                    { cmd: "\"Confirmer\"", func: "Valider une action", ex: "\"Confirmer\"" },
                    { cmd: "\"Annuler\"", func: "Annuler la dernière action", ex: "\"Annuler\"" },
                    { cmd: "\"Urgent\"", func: "Signaler une situation prioritaire", ex: "\"Urgent, table 7\"" },
                    { cmd: "\"Pause\"", func: "Mettre le système en veille temporaire", ex: "\"Pause 5 minutes\"" }
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#1A2A40]">{item.cmd}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-[#1A2A40]">{item.func}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-[#1A2A40]">{item.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#D47D5A] mb-3">Exercices de prise de commande</h4>
            <div className="space-y-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <h5 className="font-medium text-[#1A2A40] mb-2">1. Scénario simple</h5>
                <div className="text-sm text-[#1A2A40] italic">
                  "Table 4 commande un plat du jour et une eau pétillante"
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <h5 className="font-medium text-[#1A2A40] mb-2">2. Scénario avec modifications</h5>
                <div className="text-sm text-[#1A2A40] italic">
                  "Table 6 commande une salade César sans croûtons et un steak frites saignant"<br />
                  "Modifier table 6, le steak bien cuit plutôt que saignant"
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <h5 className="font-medium text-[#1A2A40] mb-2">3. Scénario complexe</h5>
                <div className="text-sm text-[#1A2A40] italic">
                  "Table 12 commande deux menus du jour, le premier avec carpaccio en entrée et poulet en plat, le second avec soupe et poisson, plus une bouteille de vin blanc Chablis"
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Session 3: Gestion des situations spéciales</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-3">Scénarios à maîtriser</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Client indécis ou qui change d'avis",
                "Demandes spéciales et allergies",
                "Gestion des plaintes",
                "Coordination avec la cuisine pour les temps d'attente",
                "Recommandations personnalisées"
              ].map((item, index) => (
                <li key={index} className="flex items-center bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-3 rounded-lg">
                  <span className="h-2 w-2 rounded-full bg-[#D47D5A] mr-3"></span>
                  <span className="text-sm text-[#1A2A40]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#D47D5A] mb-3">Script pour gestion des allergies</h4>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg space-y-3">
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Serveur:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Sotto, table 9 signale une allergie aux fruits à coque"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#D47D5A] text-right pr-3">Sotto:</div>
                <div className="flex-1 text-sm text-[#1A2A40]">
                  "Allergie aux fruits à coque enregistrée pour la table 9. Les plats suivants du menu contiennent des fruits à coque: salade d'automne, dessert noisette-chocolat, glace pralinée. Souhaitez-vous des alternatives?"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Serveur:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Oui, propose des alternatives"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#D47D5A] text-right pr-3">Sotto:</div>
                <div className="flex-1 text-sm text-[#1A2A40]">
                  "Pour la salade d'automne, suggestion: salade fraîcheur sans fruits à coque. Pour les desserts: mousse au chocolat, sorbet fruits rouges. Souhaitez-vous que je transmette ces informations à la cuisine?"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Serveur:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Oui, transmets à la cuisine"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Formation des cuisiniers</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg mb-8 border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Communication avec la salle</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-3">Commandes spécifiques cuisine</h4>
            
            <div className="space-y-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <div className="font-medium text-[#1A2A40] mb-2">
                  <span className="inline-block px-2 py-1 bg-[#87A28F] text-white rounded mr-2 text-xs">Commande</span>
                  "Prêt [détail]"
                </div>
                <p className="text-sm text-[#1A2A40] mb-2">Signaler un plat prêt à être servi</p>
                <div className="text-sm text-[#1A2A40] italic pl-4 border-l-2 border-[#D47D5A]">
                  "Prêt entrée table 4"<br />
                  "Prêt plats tables 7 et 9"
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <div className="font-medium text-[#1A2A40] mb-2">
                  <span className="inline-block px-2 py-1 bg-[#87A28F] text-white rounded mr-2 text-xs">Commande</span>
                  "Délai [détail]"
                </div>
                <p className="text-sm text-[#1A2A40] mb-2">Informer d'un retard</p>
                <div className="text-sm text-[#1A2A40] italic pl-4 border-l-2 border-[#D47D5A]">
                  "Délai 10 minutes pour table 12, rupture de stock sur le poisson"
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <div className="font-medium text-[#1A2A40] mb-2">
                  <span className="inline-block px-2 py-1 bg-[#87A28F] text-white rounded mr-2 text-xs">Commande</span>
                  "Stock [détail]"
                </div>
                <p className="text-sm text-[#1A2A40] mb-2">Signaler un problème d'approvisionnement</p>
                <div className="text-sm text-[#1A2A40] italic pl-4 border-l-2 border-[#D47D5A]">
                  "Stock épuisé sur le plat du jour, proposer alternative"
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-3">Gestion des priorités</h4>
            <p className="text-[#1A2A40] mb-4">
              Le système Sotto aide à la coordination cuisine-salle par un système de priorités intelligent:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg border-t-4 border-[#87A28F]">
                <h5 className="font-medium text-[#1A2A40] mb-1">Priorité standard</h5>
                <p className="text-sm text-[#1A2A40]">Ordre chronologique normal</p>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg border-t-4 border-[#D4B483]">
                <h5 className="font-medium text-[#1A2A40] mb-1">Priorité haute</h5>
                <p className="text-sm text-[#1A2A40]">Tables VIP, clients pressés (signalés par la salle)</p>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg border-t-4 border-[#D47D5A]">
                <h5 className="font-medium text-[#1A2A40] mb-1">Priorité urgente</h5>
                <p className="text-sm text-[#1A2A40]">Situations exceptionnelles nécessitant une action immédiate</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#D47D5A] mb-3">Exercice de coordination</h4>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
              <p className="text-[#1A2A40] mb-3">
                Simulation d'un service avec plusieurs commandes simultanées, incluant:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                <li>Préparation synchronisée des plats d'une même table</li>
                <li>Communication des temps d'attente</li>
                <li>Gestion des modifications de dernière minute</li>
                <li>Alertes sur les allergènes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Formation des managers</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg mb-8 border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Supervision et analytics</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-3">Commandes spécifiques managers</h4>
            <div className="overflow-x-auto rounded-lg border border-[#87A28F]/20">
              <table className="min-w-full divide-y divide-[#87A28F]/20">
                <thead className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Commande</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Fonction</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-[#1A2A40] uppercase tracking-wider">Exemple</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#1A2A40]/20 divide-y divide-[#87A28F]/20">
                  {[
                    { cmd: "\"Statut service\"", func: "Obtenir une vue d'ensemble", ex: "\"Statut service\"" },
                    { cmd: "\"Performance [période]\"", func: "Consulter les métriques", ex: "\"Performance service midi\"" },
                    { cmd: "\"Alertes\"", func: "Vérifier les problèmes signalés", ex: "\"Alertes du jour\"" },
                    { cmd: "\"Priorité [détail]\"", func: "Modifier les priorités", ex: "\"Priorité haute table 15, clients pressés\"" },
                    { cmd: "\"Message [destinataire]\"", func: "Envoyer une communication", ex: "\"Message équipe, offrir dessert table 8 pour anniversaire\"" }
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#1A2A40]">{item.cmd}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-[#1A2A40]">{item.func}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-[#1A2A40]">{item.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#D47D5A] mb-3">Utilisation des données en temps réel</h4>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg space-y-3">
              <p className="text-[#1A2A40] mb-2">
                Les managers peuvent demander à Sotto des informations stratégiques pendant le service:
              </p>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Manager:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Sotto, temps d'attente moyen actuel?"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#D47D5A] text-right pr-3">Sotto:</div>
                <div className="flex-1 text-sm text-[#1A2A40]">
                  "Temps d'attente moyen actuel: 12 minutes pour les entrées, 18 minutes pour les plats principaux. Trois tables attendent depuis plus de 20 minutes: tables 7, 12 et 15."
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Manager:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Détails table 12"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#D47D5A] text-right pr-3">Sotto:</div>
                <div className="flex-1 text-sm text-[#1A2A40]">
                  "Table 12: 4 couverts, commande passée il y a 24 minutes. En attente: deux entrecôtes et deux poissons du jour. Statut en cuisine: en préparation, estimation 5 minutes avant service."
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Gestion des problèmes courants</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-[#D47D5A] mb-3">Protocole de résolution d'incidents</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3">1</span>
                  <h5 className="font-medium text-[#1A2A40]">Identification</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                  <li>Nature du problème (technique, service, cuisine)</li>
                  <li>Impact sur l'expérience client</li>
                  <li>Urgence de la résolution</li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3">2</span>
                  <h5 className="font-medium text-[#1A2A40]">Isolation</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                  <li>Déterminer si le problème est ponctuel ou systémique</li>
                  <li>Évaluer si d'autres tables sont affectées</li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3">3</span>
                  <h5 className="font-medium text-[#1A2A40]">Résolution</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                  <li>Application du protocole spécifique au problème</li>
                  <li>Communication claire avec l'équipe concernée</li>
                  <li>Suivi jusqu'à résolution complète</li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3">4</span>
                  <h5 className="font-medium text-[#1A2A40]">Compensation</h5>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#1A2A40]">
                  <li>Décision sur les mesures compensatoires si nécessaire</li>
                  <li>Communication appropriée au client</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#D47D5A] mb-3">Script de gestion de crise</h4>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg space-y-3">
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Manager:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Sotto, problème technique oreillette serveur Jean"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#D47D5A] text-right pr-3">Sotto:</div>
                <div className="flex-1 text-sm text-[#1A2A40]">
                  "Problème technique enregistré. Nature du problème?"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Manager:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Connexion intermittente"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#D47D5A] text-right pr-3">Sotto:</div>
                <div className="flex-1 text-sm text-[#1A2A40]">
                  "Compris. Propositions de résolution: 1) Redémarrage de l'oreillette, 2) Remplacement par oreillette de secours, 3) Réassignation temporaire des tables. Quelle option préférez-vous?"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#1A2A40] text-right pr-3">Manager:</div>
                <div className="flex-1 text-sm text-[#1A2A40] italic">
                  "Option 2, remplacement"
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 flex-shrink-0 font-medium text-[#D47D5A] text-right pr-3">Sotto:</div>
                <div className="flex-1 text-sm text-[#1A2A40]">
                  "Remplacement d'oreillette programmé. L'oreillette de secours n°3 est disponible au poste de charge. Souhaitez-vous que j'envoie une notification à Jean?"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Évaluation et suivi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Métriques d'adoption</h3>
            <p className="text-[#1A2A40] mb-4">
              Après la formation, nous suivrons les indicateurs suivants:
            </p>
            
            <ul className="space-y-3">
              {[
                { metric: "Taux d'utilisation", desc: "Fréquence d'interaction avec le système" },
                { metric: "Taux de reconnaissance", desc: "Pourcentage de commandes correctement interprétées" },
                { metric: "Temps d'adaptation", desc: "Durée nécessaire pour atteindre l'aisance" },
                { metric: "Satisfaction utilisateur", desc: "Retours qualitatifs du personnel" }
              ].map((item, index) => (
                <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-3 rounded-lg">
                  <div className="font-medium text-[#D47D5A] mb-1">{item.metric}</div>
                  <div className="text-sm text-[#1A2A40]">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Sessions de perfectionnement</h3>
            <p className="text-[#1A2A40] mb-4">
              Des sessions complémentaires sont prévues après 2 semaines d'utilisation:
            </p>
            
            <ol className="space-y-3">
              {[
                "Analyse des difficultés rencontrées",
                "Introduction des commandes avancées",
                "Optimisation des flux de travail",
                "Personnalisation des interactions"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#1A2A40] text-white flex items-center justify-center font-bold mr-3 mt-0.5">{index + 1}</span>
                  <span className="text-[#1A2A40]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Conclusion</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg border border-[#87A28F]/20 hover:border-[#87A28F]/40 transition-all">
          <div className="prose max-w-none">
            <p className="text-[#1A2A40] leading-relaxed mb-4">
              Cette documentation de formation constitue la base de l'intégration de Sotto dans votre établissement. L'objectif est de permettre à chaque membre de l'équipe de s'approprier rapidement le système, pour qu'il devienne un allié invisible mais puissant dans l'amélioration du service.
            </p>
            <p className="text-[#1A2A40] leading-relaxed">
              Conformément à notre philosophie, Sotto n'est pas conçu pour remplacer l'humain, mais pour le libérer des contraintes technologiques et lui permettre de se concentrer sur ce qui fait l'essence de la restauration: l'attention portée aux clients et la qualité de l'expérience gastronomique.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 rounded-xl p-6 shadow-lg border border-[#87A28F]/20">
          <h2 className="text-xl font-semibold text-[#1A2A40] mb-4">Pour aller plus loin:</h2>
          
          <ul className="space-y-3">
            {[
              "Consultez notre bibliothèque de vidéos de formation sur l'espace dédié",
              "Programmez une session de questions-réponses avec notre équipe support",
              "Partagez vos retours d'expérience pour nous aider à améliorer le système"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="h-8 w-8 rounded-full bg-[#D47D5A] flex items-center justify-center mr-3 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="text-[#1A2A40]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;