const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#F5F5F0] rounded-xl shadow-lg text-[#1A2A40]">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 border-b-2 border-[#D47D5A] pb-4">Guide de démarrage</h1>
      
      <div className="italic text-lg mb-10 text-[#1A2A40]/80 bg-white/50 p-6 rounded-lg border-l-4 border-[#D47D5A] shadow-md">
        <p>Bienvenue dans l'aventure Sotto. Ce guide vous accompagne pas à pas dans l'intégration de notre système vocal IA, de l'installation initiale jusqu'à votre première commande. Découvrez comment libérer votre restaurant des écrans et recentrer votre équipe sur l'essentiel : l'humain et la gastronomie.</p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Avant de commencer
        </h2>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium mb-4">Prérequis techniques</h3>
            <p className="mb-4 text-[#1A2A40]/80">Avant l'installation de Sotto, assurez-vous que votre établissement dispose des éléments suivants :</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="bg-[#F5F5F0] p-4 rounded-lg border-l-3 border-[#87A28F] flex items-start">
                <span className="text-[#87A28F] mr-3">✓</span>
                <span>Une connexion WiFi stable avec un débit minimum de 20 Mbps</span>
              </li>
              <li className="bg-[#F5F5F0] p-4 rounded-lg border-l-3 border-[#87A28F] flex items-start">
                <span className="text-[#87A28F] mr-3">✓</span>
                <span>Une prise électrique disponible près de l'emplacement prévu pour la station de base</span>
              </li>
              <li className="bg-[#F5F5F0] p-4 rounded-lg border-l-3 border-[#87A28F] flex items-start">
                <span className="text-[#87A28F] mr-3">✓</span>
                <span>Un espace discret pour installer la station de charge des oreillettes</span>
              </li>
              <li className="bg-[#F5F5F0] p-4 rounded-lg border-l-3 border-[#87A28F] flex items-start">
                <span className="text-[#87A28F] mr-3">✓</span>
                <span>Un smartphone ou tablette pour la configuration initiale (uniquement lors de l'installation)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] mb-4">Préparation de votre équipe</h3>
            <p className="mb-4 text-[#1A2A40]/80">La transition vers un système vocal nécessite une préparation mentale de votre équipe :</p>
            
            <ol className="space-y-4 mt-4">
              <li className="bg-[#F5F5F0] p-4 rounded-lg flex items-start">
                <span className="bg-[#D47D5A] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">1</span>
                <span>Informez votre personnel à l'avance du changement à venir</span>
              </li>
              <li className="bg-[#F5F5F0] p-4 rounded-lg flex items-start">
                <span className="bg-[#D47D5A] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">2</span>
                <span>Insistez sur les bénéfices : mains libres, attention accrue aux clients, simplification des processus</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="bg-[#D47D5A] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">3</span>
                <span>Rassurez sur la facilité d'apprentissage et la période d'adaptation prévue</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="bg-[#D47D5A] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">4</span>
                <span>Identifiez un ou deux "ambassadeurs" motivés qui seront formés en premier</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1A2A40] mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Installation du système
        </h2>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] mb-4">Accueil de l'équipe technique</h3>
            <p className="mb-6 text-[#1A2A40]/80">Notre équipe technique se déplacera dans votre établissement pour l'installation complète du système. Voici comment se déroulera leur intervention :</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1A2A40] text-white">
                    <th className="py-3 px-4 text-left rounded-tl-lg">Étape</th>
                    <th className="py-3 px-4 text-left">Durée</th>
                    <th className="py-3 px-4 text-left rounded-tr-lg">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 bg-[#F5F5F0]">Audit WiFi</td>
                    <td className="py-3 px-4 bg-[#F5F5F0]">30 min</td>
                    <td className="py-3 px-4 bg-[#F5F5F0]">Analyse de la couverture réseau et optimisation si nécessaire</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40">Installation station base</td>
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40">45 min</td>
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40">Mise en place du hub central Sotto</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40">Configuration système</td>
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40">60 min</td>
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40">Paramétrage selon votre menu et votre organisation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-bl-lg">Test de couverture</td>
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40">30 min</td>
                    <td className="py-3 px-4 bg-[#F5F5F0] dark:bg-[#1A2A40]/40 rounded-br-lg">Vérification de la qualité audio dans tout l'établissement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#D47D5A]/10 border-l-4 border-[#D47D5A] p-4 rounded-r-lg">
              <p className="font-medium text-[#1A2A40]">Note importante :</p>
              <p className="text-[#1A2A40]/80">Prévoyez cette installation pendant une période calme de votre activité, idéalement en dehors des heures d'ouverture.</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium mb-4">Paramétrage initial</h3>
            <p className="mb-4 text-[#1A2A40]/80">Le paramétrage initial comprend :</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#D4B483] mr-3">●</span>
                <div>
                  <span className="font-medium">Importation de votre menu</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70">Tous vos plats, options, et spécificités seront intégrés au système</p>
                </div>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#D4B483] mr-3">●</span>
                <div>
                  <span className="font-medium">Configuration des profils utilisateurs</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Création des comptes pour chaque membre du personnel</p>
                </div>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#D4B483] mr-3">●</span>
                <div>
                  <span className="font-medium">Définition des zones</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Cartographie de votre restaurant (salle, terrasse, bar, cuisine)</p>
                </div>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#D4B483] mr-3">●</span>
                <div>
                  <span className="font-medium">Personnalisation des alertes</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Adaptation des notifications selon vos préférences</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Formation du personnel
        </h2>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Session de formation initiale</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Une session de formation d'environ 2 heures sera organisée avec votre équipe, couvrant :</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#87A28F] rounded-full flex items-center justify-center text-white mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>La manipulation des oreillettes (port, charge, entretien)</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#87A28F] rounded-full flex items-center justify-center text-white mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Les commandes vocales de base</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#87A28F] rounded-full flex items-center justify-center text-white mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>La gestion des situations courantes</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#87A28F] rounded-full flex items-center justify-center text-white mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Les procédures de secours</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Période d'adaptation guidée</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Nous recommandons une période d'adaptation progressive :</p>
            
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center text-white mr-2">1</div>
                  <span className="font-medium">Jour 1-2</span>
                </div>
                <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Utilisation en parallèle avec votre système actuel</p>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center text-white mr-2">2</div>
                  <span className="font-medium">Jour 3-5</span>
                </div>
                <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Transition progressive vers Sotto comme système principal</p>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center text-white mr-2">3</div>
                  <span className="font-medium">Jour 6-7</span>
                </div>
                <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Utilisation complète avec supervision de notre équipe</p>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center text-white mr-2">4</div>
                  <span className="font-medium">Semaine 2</span>
                </div>
                <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Autonomie avec support à distance disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Prise en main des oreillettes
        </h2>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Port et confort</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Les oreillettes Sotto sont conçues pour un confort optimal pendant de longues périodes :</p>
            
            <ul className="space-y-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="font-bold text-[#D47D5A] mr-3">→</span>
                <div>
                  <span className="font-medium">Positionnement</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">L'oreillette se place dans l'oreille droite ou gauche selon votre préférence</p>
                </div>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="font-bold text-[#D47D5A] mr-3">→</span>
                <div>
                  <span className="font-medium">Ajustement</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Trois tailles d'embouts silicone sont fournies pour s'adapter à chaque morphologie</p>
                </div>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="font-bold text-[#D47D5A] mr-3">→</span>
                <div>
                  <span className="font-medium">Discrétion</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Leur design minimaliste les rend presque invisibles aux clients</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Gestion de la batterie</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Les oreillettes Sotto offrent une autonomie de 8 heures en utilisation continue :</p>
            
            <ul className="space-y-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="font-bold text-[#D47D5A] mr-3">→</span>
                <div>
                  <span className="font-medium">Indicateur vocal</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Une alerte discrète vous prévient 30 minutes avant épuisement</p>
                </div>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="font-bold text-[#D47D5A] mr-3">→</span>
                <div>
                  <span className="font-medium">Charge rapide</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">15 minutes de charge = 2 heures d'autonomie</p>
                </div>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="font-bold text-[#D47D5A] mr-3">→</span>
                <div>
                  <span className="font-medium">Rotation suggérée</span>
                  <p className="text-sm mt-1 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Pour les services longs, nous recommandons une rotation des oreillettes à mi-service</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Station de charge</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">La station de charge peut accueillir jusqu'à 8 oreillettes simultanément :</p>
            
            <ul className="space-y-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#87A28F] mr-3">•</span>
                <span>Chaque emplacement dispose d'un indicateur lumineux discret</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#87A28F] mr-3">•</span>
                <span>Une charge complète prend environ 90 minutes</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#87A28F] mr-3">•</span>
                <span>La station doit rester branchée en permanence</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Commandes vocales essentielles
        </h2>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Activation et désactivation</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Pour commencer à interagir avec Sotto :</p>
            
            <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <p className="mb-2"><span className="text-[#D47D5A]">"Hey Sotto"</span> → Active l'écoute du système</p>
              <p className="mb-2"><span className="text-[#D47D5A]">"Merci Sotto"</span> ou <span className="text-[#D47D5A]">"C'est tout"</span> → Termine l'interaction</p>
              <p className="mb-2"><span className="text-[#D47D5A]">"Mode silencieux"</span> → Désactive temporairement les notifications</p>
              <p><span className="text-[#D47D5A]">"Mode actif"</span> → Réactive les notifications</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Prise de commande</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Pour enregistrer les commandes des clients :</p>
            
            <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <p className="mb-2"><span className="text-[#D47D5A]">"Table 4 commande un tartare de bœuf cuisson bleue, une entrecôte saignante et deux verres de Bordeaux"</span></p>
              <p className="mb-2"><span className="text-[#D47D5A]">"Ajoute une bouteille d'eau plate pour la table 7"</span></p>
              <p><span className="text-[#D47D5A]">"Modifie la table 3 : sans gluten pour la pâte carbonara"</span></p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Communication cuisine-salle</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Pour faciliter la coordination entre les équipes :</p>
            
            <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <p className="mb-2"><span className="text-[#D47D5A]">"Informe la cuisine : table 5 pressée"</span></p>
              <p className="mb-2"><span className="text-[#D47D5A]">"Demande temps d'attente pour la table 9"</span></p>
              <p><span className="text-[#D47D5A]">"Plat prêt pour service table 2"</span> (depuis la cuisine)</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Gestion des additions</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Pour finaliser le service :</p>
            
            <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <p className="mb-2"><span className="text-[#D47D5A]">"Addition table 8"</span></p>
              <p className="mb-2"><span className="text-[#D47D5A]">"Divise l'addition table 12 en deux parts égales"</span></p>
              <p><span className="text-[#D47D5A]">"Paiement table 3 : 42€ en espèces, reste en carte"</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Premières commandes
        </h2>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Mode accompagné</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Pendant vos premiers jours d'utilisation, Sotto fonctionnera en "mode accompagné" :</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#D4B483] rounded-full flex items-center justify-center text-white mr-3 shrink-0 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Confirmation vocale de chaque action</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#D4B483] rounded-full flex items-center justify-center text-white mr-3 shrink-0 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Suggestions contextuelles plus fréquentes</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#D4B483] rounded-full flex items-center justify-center text-white mr-3 shrink-0 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Tolérance accrue aux variations de formulation</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <div className="w-10 h-10 bg-[#D4B483] rounded-full flex items-center justify-center text-white mr-3 shrink-0 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Feedback détaillé sur les interactions</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Gestion des erreurs</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Si Sotto ne comprend pas correctement une commande :</p>
            
            <ol className="space-y-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="bg-[#D47D5A] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">1</span>
                <span>Dites "Correction" pour signaler une erreur</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="bg-[#D47D5A] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">2</span>
                <span>Précisez ce qui doit être modifié</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="bg-[#D47D5A] text-white w-7 h-7 rounded-full flex items-center justify-center mr-3 shrink-0">3</span>
                <span>Sotto confirmera la modification</span>
              </li>
            </ol>

            <div className="mt-6">
              <p className="mb-2 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Exemple :</p>
              <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <p className="mb-2"><span className="text-[#87A28F]">Vous : </span><span className="text-[#D47D5A]">"Table 5 commande un steak frites et une salade césar"</span></p>
                <p className="mb-2"><span className="text-[#87A28F]">Sotto : </span><span>"Commande enregistrée pour la table 5 : un steak frites et une salade de la mer"</span></p>
                <p className="mb-2"><span className="text-[#87A28F]">Vous : </span><span className="text-[#D47D5A]">"Correction, salade césar, pas salade de la mer"</span></p>
                <p><span className="text-[#87A28F]">Sotto : </span><span>"Modification effectuée : salade césar à la place de salade de la mer"</span></p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Feedback et amélioration</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Sotto apprend continuellement de vos interactions :</p>
            
            <ul className="space-y-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#87A28F] mr-3">•</span>
                <span>Le système s'adapte progressivement à votre accent et vocabulaire</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#87A28F] mr-3">•</span>
                <span>Les commandes fréquentes sont mémorisées pour une reconnaissance plus rapide</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#87A28F] mr-3">•</span>
                <span>Vous pouvez créer des raccourcis personnalisés pour les demandes récurrentes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Support et assistance
        </h2>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Support quotidien</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">En cas de question ou difficulté :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="font-medium">Support vocal</span>
                </div>
                <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Dites "Hey Sotto, j'ai besoin d'aide" pour une assistance immédiate</p>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-medium">Chat assistance</span>
                </div>
                <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Accessible via l'application mobile Sotto Support</p>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D47D5A] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">Hotline dédiée</span>
                </div>
                <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Ligne téléphonique disponible 7j/7 de 8h à 23h</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/70 rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
            <h3 className="text-2xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Mises à jour du système</h3>
            <p className="mb-4 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Sotto s'améliore constamment :</p>
            
            <ul className="space-y-4 mt-4">
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#D4B483] mr-3">•</span>
                <span>Les mises à jour sont automatiques et se font la nuit</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#D4B483] mr-3">•</span>
                <span>Vous recevrez une notification des nouvelles fonctionnalités</span>
              </li>
              <li className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-4 rounded-lg flex items-start">
                <span className="text-[#D4B483] mr-3">•</span>
                <span>Aucune intervention de votre part n'est nécessaire</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Prochaines étapes
        </h2>

        <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-[1.01]">
          <p className="mb-6 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Une fois à l'aise avec les fonctionnalités de base, découvrez les capacités avancées de Sotto :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg border-l-4 border-[#D47D5A] shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Gestion des réservations</h4>
              <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">par commande vocale</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg border-l-4 border-[#D47D5A] shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Analyse des performances</h4>
              <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">via le tableau de bord</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg border-l-4 border-[#D47D5A] shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Intégration avec votre système de fidélité</h4>
              <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">existant</p>
            </div>
            <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg border-l-4 border-[#D47D5A] shadow-sm hover:shadow-md transition-all">
              <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Personnalisation avancée</h4>
              <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">des suggestions et alertes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6 flex items-center">
          <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full mr-3"></span>
          Conclusion
        </h2>

        <div className="bg-[#1A2A40] text-[#1A2A40] rounded-xl p-8 shadow-lg">
          <p className="mb-6">Félicitations ! Vous êtes maintenant prêt à transformer l'expérience de votre restaurant avec Sotto. En libérant votre équipe des contraintes des écrans, vous leur permettez de se concentrer sur l'essentiel : l'accueil, le service et l'attention portée à vos clients.</p>
          
          <p className="mb-6">Rappelez-vous que la période d'adaptation est normale et que votre équipe deviendra rapidement experte dans l'utilisation de Sotto. Notre équipe reste à votre disposition pour vous accompagner à chaque étape de cette transition.</p>
        </div>
      </section>

      <div className="bg-[#F5F5F0] rounded-xl p-6 shadow-md text-center">
        <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Besoin d'aide supplémentaire ?</h3>
        <p className="text-[#1A2A40]/80">Consultez nos autres guides ou contactez-nous directement via l'application Sotto Support ou au 01 23 45 67 89.</p>
      </div>
    </div>
  );
};

export default ResourceContent;
