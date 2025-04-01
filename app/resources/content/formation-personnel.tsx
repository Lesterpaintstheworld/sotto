const ResourceContent = () => {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40] dark:text-[#F5F5F0] leading-tight">
          Formation du personnel
        </h1>
        <div className="w-24 h-1 bg-[#D47D5A] mx-auto rounded-full mb-6"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-l-4 border-[#D47D5A] pl-4">
          Introduction
        </h2>
        <div className="bg-[#F5F5F0]/30 dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-sm mb-8 border border-[#87A28F]/20">
          <p className="mb-4 leading-relaxed">
            Bienvenue dans votre guide de formation au système Sotto. Ce document a été conçu pour vous accompagner dans l'intégration de notre solution vocale IA au sein de votre établissement. La transition vers un environnement de travail sans écran représente un changement significatif dans les habitudes de votre équipe, mais offre des bénéfices considérables en termes d'efficacité et d'expérience client.
          </p>
          <p className="leading-relaxed">
            Ce guide propose une méthodologie progressive pour former efficacement votre personnel à l'utilisation quotidienne de Sotto. Notre approche privilégie une adoption en douceur qui respecte les rythmes d'apprentissage individuels tout en assurant une transition fluide pour l'ensemble de votre établissement.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-l-4 border-[#D47D5A] pl-4">
          Préparation avant la formation
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">
            Identification des rôles clés
          </h3>
          <p className="mb-4 leading-relaxed">
            Avant de débuter la formation, identifiez les différents rôles au sein de votre équipe qui interagiront avec Sotto :
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-[#87A28F]/30 rounded-lg">
              <thead>
                <tr className="bg-[#87A28F]/20 text-[#1A2A40] dark:text-[#F5F5F0]">
                  <th className="py-3 px-4 text-left border-b">Rôle</th>
                  <th className="py-3 px-4 text-left border-b">Utilisation principale</th>
                  <th className="py-3 px-4 text-left border-b">Besoins spécifiques</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/40 transition-colors">
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Serveurs</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Prise de commande, service, gestion des tables</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Communication fluide, multitâche</td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/40 transition-colors">
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Barman</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Gestion des boissons, commandes directes</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Environnement bruyant, mains occupées</td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/40 transition-colors">
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Cuisine</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Réception des commandes, coordination</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Communication claire, timing précis</td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/40 transition-colors">
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Manager</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Supervision, gestion des problèmes</td>
                  <td className="py-3 px-4 border-b border-[#87A28F]/10">Vue d'ensemble, résolution rapide</td>
                </tr>
                <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/40 transition-colors">
                  <td className="py-3 px-4">Hôte/Hôtesse</td>
                  <td className="py-3 px-4">Gestion des réservations, accueil</td>
                  <td className="py-3 px-4">Première impression, coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">
            Préparation de l'environnement
          </h3>
          <p className="mb-4 leading-relaxed">
            Pour une formation optimale, assurez-vous de :
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              "Disposer d'un espace calme pour les sessions théoriques",
              "Préparer l'équipement (oreillettes, stations de charge)",
              "Imprimer les aide-mémoires et fiches de référence rapide",
              "Configurer le système avec vos menus et spécificités",
              "Prévoir des sessions en dehors des heures d'affluence"
            ].map((item, index) => (
              <li key={index} className="bg-white dark:bg-[#1A2A40]/40 p-4 rounded-lg shadow-sm border border-[#87A28F]/20 flex items-start hover:shadow-md transition-shadow">
                <span className="text-[#D47D5A] mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-l-4 border-[#D47D5A] pl-4">
          Structure de formation recommandée
        </h2>

        <div className="mb-8">
          <div className="bg-[#1A2A40] dark:bg-[#F5F5F0]/10 text-white dark:text-[#F5F5F0] p-5 rounded-t-lg">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <span className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
              Phase 1 : Introduction et familiarisation (Jour 1)
            </h3>
            <p className="italic text-[#D4B483] dark:text-[#D4B483] mb-2">Objectif : Comprendre le concept et prendre en main l'équipement</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-b-lg shadow-sm mb-8 border-x border-b border-[#87A28F]/20">
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Présentation générale (45 minutes)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Explication du système Sotto et de sa philosophie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Démonstration des avantages pour le personnel et les clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Présentation des oreillettes et de leur utilisation</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Prise en main du matériel (30 minutes)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Distribution des oreillettes personnalisées</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Ajustement pour un confort optimal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Apprentissage des gestes de base (allumage, mise en charge)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Premiers pas avec la voix (45 minutes)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Exercices de calibration vocale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Test des commandes de base</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Retours sur la qualité de reconnaissance</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 bg-[#F5F5F0] dark:bg-[#1A2A40]/60 p-4 rounded-lg border-l-4 border-[#D4B483]">
              <p className="italic">
                <strong>Conseil</strong> : Commencez par des exercices simples dans un environnement calme pour construire la confiance des utilisateurs. La première impression est déterminante pour l'adoption.
              </p>
            </div>
          </div>

          <div className="bg-[#1A2A40] dark:bg-[#F5F5F0]/10 text-white dark:text-[#F5F5F0] p-5 rounded-t-lg">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <span className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
              Phase 2 : Maîtrise des fondamentaux (Jours 2-3)
            </h3>
            <p className="italic text-[#D4B483] dark:text-[#D4B483] mb-2">Objectif : Acquérir les compétences essentielles pour l'utilisation quotidienne</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-b-lg shadow-sm mb-8 border-x border-b border-[#87A28F]/20">
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Commandes vocales essentielles (60 minutes)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Prise de commande simple</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Modification de commande</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Gestion des tables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Demande d'addition</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Ateliers pratiques par rôle (90 minutes)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Exercices spécifiques pour chaque poste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Mises en situation réalistes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Résolution des problèmes courants</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Communication d'équipe (45 minutes)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Coordination cuisine-salle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Transmission d'informations importantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Gestion des priorités</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1A2A40] dark:bg-[#F5F5F0]/10 text-white dark:text-[#F5F5F0] p-5 rounded-t-lg">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <span className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
              Phase 3 : Simulation réelle (Jour 4)
            </h3>
            <p className="italic text-[#D4B483] dark:text-[#D4B483] mb-2">Objectif : Mettre en pratique dans des conditions proches du réel</p>
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-b-lg shadow-sm border-x border-b border-[#87A28F]/20">
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Service simulé (2-3 heures)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Reproduction d'un service complet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Introduction de scénarios variés (affluence, demandes spéciales)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Rotation des rôles pour comprendre les interactions</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2 text-[#87A28F]">Débriefing collectif (45 minutes)</h4>
              <ul className="pl-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Analyse des points forts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Identification des difficultés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Ajustements personnalisés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-l-4 border-[#D47D5A] pl-4">
          Techniques pédagogiques efficaces
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A] border-b border-[#87A28F]/20 pb-2">
              Apprentissage progressif
            </h3>
            <p className="mb-4">Pour faciliter l'adoption de Sotto, privilégiez une approche par étapes :</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2 font-bold">•</span>
                <span><strong>Jour 1-2</strong> : Utilisation pour les tâches simples uniquement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2 font-bold">•</span>
                <span><strong>Jour 3-5</strong> : Intégration progressive de fonctionnalités avancées</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2 font-bold">•</span>
                <span><strong>Jour 6-10</strong> : Utilisation complète avec supervision</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2 font-bold">•</span>
                <span><strong>Après 2 semaines</strong> : Autonomie et optimisation des pratiques</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A] border-b border-[#87A28F]/20 pb-2">
              Formation par les pairs
            </h3>
            <p className="mb-4">Identifiez rapidement les membres de l'équipe qui s'adaptent le plus facilement au système et encouragez-les à devenir des "ambassadeurs Sotto" :</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2 font-bold">•</span>
                <span>Désignez 1-2 référents par service</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2 font-bold">•</span>
                <span>Organisez des sessions de partage d'expérience</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2 font-bold">•</span>
                <span>Valorisez les bonnes pratiques découvertes par l'équipe</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A] border-b border-[#87A28F]/20 pb-2">
              Exercices spécifiques
            </h3>
            <div className="mb-3">
              <h4 className="font-semibold mb-2 text-[#87A28F]">Pour les serveurs :</h4>
              <ul className="pl-5 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">-</span>
                  <span>Prise de commande avec variations et modifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">-</span>
                  <span>Gestion simultanée de plusieurs tables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">-</span>
                  <span>Communication des spécificités du menu</span>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-semibold mb-2 text-[#87A28F]">Pour la cuisine :</h4>
              <ul className="pl-5 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">-</span>
                  <span>Annonce des plats prêts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">-</span>
                  <span>Gestion des priorités et timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">-</span>
                  <span>Communication des ruptures de stock</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-l-4 border-[#D47D5A] pl-4">
          Gestion des défis courants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#1A2A40] dark:bg-[#D47D5A] text-white rounded-full flex items-center justify-center mr-3 group-hover:animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 3c.542 0 1.006.383 1.15.894l.838 2.517a1 1 0 00.599.63l2.358.785a1 1 0 01.553 1.365l-1.181 2.331a1 1 0 000 .894l1.181 2.331a1 1 0 01-.553 1.365l-2.358.785a1 1 0 00-.599.63l-.838 2.517A1.001 1.001 0 0110 21c-.542 0-1.006-.383-1.15-.894l-.838-2.517a1 1 0 00-.599-.63l-2.358-.785a1 1 0 01-.553-1.365l1.181-2.331a1 1 0 000-.894l-1.181-2.331a1 1 0 01.553-1.365l2.358-.785a1 1 0 00.599-.63l.838-2.517z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0]">
                Environnement bruyant
              </h3>
            </div>
            <p className="mb-4">L'un des défis majeurs dans la restauration est le niveau sonore ambiant. Pour optimiser l'utilisation de Sotto :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Enseignez les techniques d'articulation claire</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Montrez comment positionner le micro de manière optimale</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Pratiquez dans des conditions de bruit progressivement plus élevées</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Utilisez les commandes courtes et précises</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#1A2A40] dark:bg-[#D47D5A] text-white rounded-full flex items-center justify-center mr-3 group-hover:animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0]">
                Résistance au changement
              </h3>
            </div>
            <p className="mb-4">Certains membres de l'équipe peuvent montrer des réticences face à cette nouvelle technologie :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Écoutez activement les préoccupations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Démontrez les bénéfices concrets pour leur confort de travail</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Proposez un accompagnement personnalisé</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Célébrez les petites victoires et progrès</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/40 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#1A2A40] dark:bg-[#D47D5A] text-white rounded-full flex items-center justify-center mr-3 group-hover:animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0]">
                Erreurs de reconnaissance
              </h3>
            </div>
            <p className="mb-4">Pour minimiser les frustrations liées aux erreurs de reconnaissance vocale :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Enseignez les formulations qui fonctionnent le mieux</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Montrez comment confirmer ou corriger rapidement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Créez un lexique des termes spécifiques à votre établissement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Rappelez que le système s'améliore avec l'usage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-l-4 border-[#D47D5A] pl-4">
          Suivi et amélioration continue
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#F5F5F0]/30 dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">
              Évaluation régulière
            </h3>
            <p className="mb-4">Pour maintenir et améliorer les performances de votre équipe avec Sotto :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Organisez des sessions de feedback hebdomadaires le premier mois</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Recueillez les impressions individuelles et collectives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Identifiez les opportunités d'amélioration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Partagez les succès et bonnes pratiques</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0]/30 dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">
              Perfectionnement
            </h3>
            <p className="mb-4">Après la phase d'adoption initiale, proposez des formations avancées :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Utilisation des fonctionnalités analytiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Optimisation des flux de travail</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Personnalisation avancée des commandes vocales</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Intégration avec d'autres aspects de la gestion</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0]/30 dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium mb-4 text-[#D47D5A]">
              Documentation continue
            </h3>
            <p className="mb-4">Encouragez votre équipe à contribuer à la documentation interne :</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Créez un "livre de bord" des astuces découvertes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Documentez les phrases qui fonctionnent particulièrement bien</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87A28F] mr-2">•</span>
                <span>Notez les situations spécifiques et leurs solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-[#1A2A40] dark:bg-[#F5F5F0]/10 text-[#F5F5F0] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#D47D5A]">
            Conclusion
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed">
              La formation de votre personnel à l'utilisation de Sotto représente un investissement initial qui portera ses fruits rapidement. En suivant cette approche progressive et structurée, votre équipe développera une aisance naturelle avec le système vocal, transformant fondamentalement l'expérience de service dans votre établissement.
            </p>
            <p className="leading-relaxed">
              Rappelez-vous que l'objectif de Sotto n'est pas de remplacer l'humain mais de libérer son potentiel en éliminant les barrières technologiques visibles. Une fois pleinement adoptée, cette solution permet à votre équipe de se concentrer sur ce qui compte vraiment : l'attention portée aux clients et l'excellence culinaire.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-6 rounded-lg border border-[#87A28F]/20 text-center">
        <p className="font-medium mb-2">
          <strong>Besoin d'assistance supplémentaire ?</strong> Notre équipe de support est disponible pour des sessions de formation personnalisées ou pour répondre à vos questions spécifiques.
        </p>
        <p>
          Contactez-nous via votre espace client ou par email à{" "}
          <a href="mailto:support@sotto.io" className="text-[#D47D5A] hover:underline">
            support@sotto.io
          </a>
        </p>
      </div>
    </article>
  );
};

export default ResourceContent;