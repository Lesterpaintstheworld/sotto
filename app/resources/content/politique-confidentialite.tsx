const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 resource-content">
      <div className="bg-gradient-to-b from-[#F5F5F0] to-white dark:from-[#1A2A40]/20 dark:to-transparent p-6 rounded-xl shadow-sm mb-10">
        <h1 className="text-4xl font-bold text-[#1A2A40] mb-4">Politique de Confidentialité</h1>
        <div className="w-20 h-1 bg-[#D47D5A] rounded-full mb-6"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Introduction</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#1A2A40] leading-relaxed">
            Chez Sotto, nous comprenons que la confidentialité des données est primordiale dans le secteur de la restauration. Notre système d'IA vocale collecte et traite certaines informations pour offrir une expérience optimale tout en respectant scrupuleusement les droits fondamentaux de chacun. Ce document détaille notre approche en matière de protection des données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et aux autres réglementations applicables.
          </p>
          <p className="text-[#1A2A40] leading-relaxed">
            Notre mission est de libérer votre restaurant des écrans pour créer une expérience plus humaine et efficace, sans jamais compromettre la confidentialité des données de votre équipe ou de vos clients.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Principes fondamentaux</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Transparence et contrôle</h3>
          <p className="text-[#1A2A40] mb-6">
            Nous croyons que vous devez toujours savoir quelles données sont collectées et comment elles sont utilisées. Notre politique repose sur quatre principes essentiels :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Minimisation des données</h4>
              <p className="text-[#1A2A40]">Nous ne collectons que les informations strictement nécessaires au fonctionnement de notre service</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Finalité déterminée</h4>
              <p className="text-[#1A2A40]">Chaque donnée collectée répond à un objectif précis et légitime</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Sécurité renforcée</h4>
              <p className="text-[#1A2A40]">Protection des données par des mesures techniques et organisationnelles adaptées</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/20 hover:border-[#87A28F]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Maîtrise utilisateur</h4>
              <p className="text-[#1A2A40]">Vous gardez le contrôle sur vos données et celles de vos clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Données collectées et traitées</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Données d'utilisation du système</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <thead className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-[#1A2A40] border-b">Type de données</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-[#1A2A40] border-b">Finalité</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-[#1A2A40] border-b">Durée de conservation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Commandes vocales</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Traitement des demandes et amélioration du système</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">30 jours</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Interactions système</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Analyse de performance et support technique</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">90 jours</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Statistiques d'utilisation</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Optimisation du service et rapports d'activité</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">12 mois</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Journaux techniques</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Sécurité et résolution de problèmes</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">6 mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Données personnelles des utilisateurs</h3>
          <p className="text-[#1A2A40] mb-4">Le système Sotto traite les catégories suivantes de données personnelles :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border border-[#D4B483]/20 hover:border-[#D4B483]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Données d'identification</h4>
              <p className="text-[#1A2A40]">Noms des membres du personnel pour l'authentification vocale</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border border-[#D4B483]/20 hover:border-[#D4B483]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Données professionnelles</h4>
              <p className="text-[#1A2A40]">Rôle dans l'établissement, autorisations système</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border border-[#D4B483]/20 hover:border-[#D4B483]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Données vocales</h4>
              <p className="text-[#1A2A40]">Enregistrements temporaires pour le traitement des commandes</p>
            </div>
            
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border border-[#D4B483]/20 hover:border-[#D4B483]/50">
              <h4 className="font-semibold text-[#1A2A40] mb-2">Données de performance</h4>
              <p className="text-[#1A2A40]">Métriques anonymisées sur l'efficacité du service</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Traitement des conversations</h3>
          <p className="text-[#1A2A40] mb-4">Notre système d'IA vocale est conçu pour :</p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#87A28F] text-white mr-3">1</div>
              <p className="text-[#1A2A40]"><strong>Filtrer intelligemment</strong> les conversations clients et ne conserver que les informations pertinentes aux commandes</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#87A28F] text-white mr-3">2</div>
              <p className="text-[#1A2A40]"><strong>Distinguer</strong> les instructions de service des conversations personnelles</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#87A28F] text-white mr-3">3</div>
              <p className="text-[#1A2A40]"><strong>Anonymiser</strong> automatiquement les données sensibles</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#87A28F] text-white mr-3">4</div>
              <p className="text-[#1A2A40]"><strong>Supprimer</strong> les enregistrements vocaux bruts après traitement</p>
            </div>
          </div>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 border-l-4 border-[#D47D5A] p-4 rounded-r-lg mb-6">
            <p className="text-[#1A2A40]"><strong>Important</strong> : Sotto n'enregistre pas en permanence toutes les conversations dans votre établissement. Le système est activé uniquement par des commandes spécifiques ou des mots-clés prédéfinis.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Base juridique des traitements</h2>
        <p className="text-[#1A2A40] mb-4">Nous traitons vos données sur les bases juridiques suivantes :</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border-l-4 border-[#D47D5A]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Exécution contractuelle</h4>
            <p className="text-[#1A2A40]">Traitement nécessaire à la fourniture des services Sotto</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border-l-4 border-[#D47D5A]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Intérêt légitime</h4>
            <p className="text-[#1A2A40]">Amélioration de nos services et sécurité du système</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border-l-4 border-[#D47D5A]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Obligation légale</h4>
            <p className="text-[#1A2A40]">Respect des exigences réglementaires (facturation, fiscalité)</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-shadow border-l-4 border-[#D47D5A]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Consentement</h4>
            <p className="text-[#1A2A40]">Pour certains traitements spécifiques clairement identifiés</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Mesures de sécurité</h2>
        <p className="text-[#1A2A40] mb-6">La protection de vos données est notre priorité. Nous mettons en œuvre des mesures techniques et organisationnelles robustes :</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Sécurité technique</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Chiffrement</strong> : Toutes les données en transit et au repos sont chiffrées selon les standards les plus élevés</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Authentification</strong> : Système d'authentification multi-facteurs pour l'accès aux données</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Segmentation</strong> : Séparation logique des environnements et des données</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Surveillance</strong> : Détection d'intrusion et monitoring continu des systèmes</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Sécurité organisationnelle</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Formation</strong> : Sensibilisation régulière de nos équipes aux enjeux de sécurité</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Accès limité</strong> : Principe du moindre privilège pour l'accès aux données</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Audits</strong> : Vérifications périodiques de nos systèmes par des experts indépendants</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-[#87A28F] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1A2A40]"><strong>Procédures</strong> : Protocoles de gestion des incidents et de continuité d'activité</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Vos droits sur vos données</h2>
        <p className="text-[#1A2A40] mb-6">En tant qu'utilisateur de Sotto, vous disposez de droits étendus sur vos données personnelles :</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-all transform hover:-translate-y-1 border border-[#F5F5F0] dark:border-[#1A2A40]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Droit d'accès</h4>
            <p className="text-[#1A2A40]">Obtenir une copie des données vous concernant</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-all transform hover:-translate-y-1 border border-[#F5F5F0] dark:border-[#1A2A40]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Droit de rectification</h4>
            <p className="text-[#1A2A40]">Corriger les informations inexactes</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-all transform hover:-translate-y-1 border border-[#F5F5F0] dark:border-[#1A2A40]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Droit à l'effacement</h4>
            <p className="text-[#1A2A40]">Demander la suppression de vos données dans les conditions prévues par la loi</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-all transform hover:-translate-y-1 border border-[#F5F5F0] dark:border-[#1A2A40]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Droit à la limitation</h4>
            <p className="text-[#1A2A40]">Restreindre temporairement le traitement de vos données</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-all transform hover:-translate-y-1 border border-[#F5F5F0] dark:border-[#1A2A40]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Droit à la portabilité</h4>
            <p className="text-[#1A2A40]">Recevoir vos données dans un format structuré</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-4 shadow hover:shadow-md transition-all transform hover:-translate-y-1 border border-[#F5F5F0] dark:border-[#1A2A40]">
            <h4 className="font-semibold text-[#1A2A40] mb-2">Droit d'opposition</h4>
            <p className="text-[#1A2A40]">Vous opposer au traitement de vos données dans certains cas</p>
          </div>
        </div>
        
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg mb-6">
          <p className="text-[#1A2A40]">
            Pour exercer ces droits, contactez notre Délégué à la Protection des Données à l'adresse : 
            <a href="mailto:privacy@sotto.ai" className="text-[#D47D5A] hover:text-[#D47D5A]/80 ml-1 underline">privacy@sotto.ai</a>
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Informations spécifiques aux restaurateurs</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Responsabilités partagées</h3>
          <p className="text-[#1A2A40] mb-4">En tant que restaurateur utilisant Sotto, il est important de comprendre la répartition des responsabilités en matière de protection des données :</p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/30 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <thead className="bg-[#F5F5F0] dark:bg-[#1A2A40]">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-[#1A2A40] border-b">Responsabilité de Sotto</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-[#1A2A40] border-b">Responsabilité du restaurateur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Sécurité de l'infrastructure</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Information de l'équipe sur l'utilisation du système</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Conformité du système</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Gestion des consentements clients si nécessaire</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Traitement conforme au RGPD</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Configuration des paramètres de confidentialité</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Support technique</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40]">Formation du personnel aux bonnes pratiques</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#D47D5A] mb-4">Bonnes pratiques recommandées</h3>
          <p className="text-[#1A2A40] mb-4">Pour une utilisation optimale et conforme de Sotto dans votre établissement :</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#D47D5A] text-white mr-3">1</div>
              <div>
                <p className="text-[#1A2A40]"><strong>Informez votre équipe</strong> sur le fonctionnement du système et les données collectées</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#D47D5A] text-white mr-3">2</div>
              <div>
                <p className="text-[#1A2A40]"><strong>Affichez</strong> une information claire pour vos clients (modèle disponible sur demande)</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#D47D5A] text-white mr-3">3</div>
              <div>
                <p className="text-[#1A2A40]"><strong>Personnalisez</strong> les paramètres de confidentialité selon vos besoins spécifiques</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#D47D5A] text-white mr-3">4</div>
              <div>
                <p className="text-[#1A2A40]"><strong>Formez</strong> régulièrement votre personnel aux enjeux de confidentialité</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white dark:bg-[#1A2A40]/30 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#D47D5A] text-white mr-3">5</div>
              <div>
                <p className="text-[#1A2A40]"><strong>Désignez</strong> un référent interne pour les questions liées à la protection des données</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Transferts internationaux de données</h2>
        <p className="text-[#1A2A40] mb-4">Sotto s'engage à héberger vos données au sein de l'Union Européenne. Dans les rares cas où un transfert international serait nécessaire :</p>
        
        <div className="space-y-3 mb-6 pl-4 border-l-2 border-[#87A28F]">
          <p className="text-[#1A2A40]">Nous n'effectuons ces transferts que vers des pays reconnus comme offrant une protection adéquate</p>
          <p className="text-[#1A2A40]">Nous mettons en place des garanties contractuelles appropriées (clauses contractuelles types)</p>
          <p className="text-[#1A2A40]">Nous vous informons préalablement de tout transfert significatif</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Sous-traitants et partenaires</h2>
        <p className="text-[#1A2A40] mb-4">Nous sélectionnons rigoureusement nos sous-traitants selon des critères stricts de conformité et de sécurité. La liste complète de nos sous-traitants est disponible sur demande et inclut notamment :</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 px-4 py-2 rounded-full text-[#1A2A40] shadow-sm border border-[#D4B483]/20">
            Fournisseurs d'infrastructure cloud certifiés
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/30 px-4 py-2 rounded-full text-[#1A2A40] shadow-sm border border-[#D4B483]/20">
            Services d'analyse pour l'amélioration du système
          </div>
          <div className="bg-white dark:bg-[#1A2A40]/30 px-4 py-2 rounded-full text-[#1A2A40] shadow-sm border border-[#D4B483]/20">
            Prestataires de support technique
          </div>
        </div>
        
        <p className="text-[#1A2A40]">Chaque sous-traitant est lié par des engagements contractuels stricts en matière de protection des données.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Modifications de la politique</h2>
        <p className="text-[#1A2A40] mb-4">Notre politique de confidentialité peut évoluer pour refléter les changements dans nos pratiques ou les exigences légales. En cas de modification substantielle :</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 text-[#D47D5A] mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-[#1A2A40]">Nous vous informerons par email ou via l'interface d'administration</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 text-[#D47D5A] mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-[#1A2A40]">Les changements seront clairement identifiés dans la nouvelle version</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 text-[#D47D5A] mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-[#1A2A40]">Un préavis d'au moins 30 jours sera respecté avant l'entrée en vigueur des modifications majeures</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6">Conclusion</h2>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#D47D5A]">
          <p className="text-[#1A2A40] mb-4">
            La protection des données est un élément fondamental de notre approche chez Sotto. Notre système est conçu selon les principes de "privacy by design" pour vous permettre de bénéficier d'une technologie innovante tout en respectant les droits fondamentaux de chacun.
          </p>
          <p className="text-[#1A2A40]">
            Nous restons à votre disposition pour toute question relative à notre politique de confidentialité ou pour vous accompagner dans la mise en place de bonnes pratiques au sein de votre établissement.
          </p>
        </div>
      </section>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
        <h3 className="text-xl font-medium text-[#D47D5A] mb-6">Nous contacter</h3>
        <p className="text-[#1A2A40] mb-4">Pour toute question concernant la protection des données ou pour exercer vos droits :</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="text-[#87A28F] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#1A2A40] mb-2">Email</h4>
            <a href="mailto:privacy@sotto.ai" className="text-[#D47D5A] hover:underline">privacy@sotto.ai</a>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="text-[#87A28F] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#1A2A40] mb-2">Courrier</h4>
            <p className="text-[#1A2A40]">Sotto SAS, Délégué à la Protection des Données, 15 rue de la Gastronomie, 75003 Paris</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="text-[#87A28F] mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#1A2A40] mb-2">Formulaire en ligne</h4>
            <a href="https://sotto.ai/privacy-request" className="text-[#D47D5A] hover:underline">sotto.ai/privacy-request</a>
          </div>
        </div>
        
        <p className="text-[#1A2A40] italic">
          Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que le traitement de vos données n'est pas conforme aux réglementations en vigueur.
        </p>
      </div>

      <div className="text-center text-sm text-[#1A2A40] pt-4 border-t border-gray-200 dark:border-gray-800">
        <p>Dernière mise à jour : 15 juin 2023</p>
      </div>
    </div>
  );
};

export default ResourceContent;