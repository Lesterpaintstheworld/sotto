const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* En-tête du document */}
      <div className="mb-12 border-b border-[#D47D5A]/30 pb-6">
        <h1 className="text-4xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Plan d'Investissement
        </h1>
        <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 italic">
          *Document interne - Stratégie financière pour Sotto*
        </p>
        
        <div className="mt-6 flex items-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#D47D5A]/10 text-[#D47D5A]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Financier
          </span>
          <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#87A28F]/10 text-[#87A28F]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Document d'équipe
          </span>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Introduction
        </h2>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm">
          <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90 leading-relaxed">
            Ce plan d'investissement détaille la stratégie financière de Sotto pour transformer le secteur de la restauration grâce à notre système d'interface vocale IA. Il présente nos besoins en capitaux, l'allocation prévue des fonds et notre approche de levée de fonds pour les 24 prochains mois. Ce document s'adresse à l'équipe interne et servira de base pour nos discussions avec les investisseurs potentiels, en alignement avec notre vision de libérer les restaurants des écrans pour créer une expérience plus humaine et efficace.
          </p>
        </div>
      </section>

      {/* Résumé Exécutif */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Résumé Exécutif
        </h2>
        <div className="bg-[#1A2A40] dark:bg-[#D47D5A]/20 text-[#F5F5F0] rounded-lg p-6 shadow-md">
          <p className="leading-relaxed mb-4">
            Sotto développe une solution d'IA vocale qui élimine les interfaces à écran dans les restaurants, permettant au personnel de se concentrer sur l'essentiel : l'expérience client et la gastronomie. Notre technologie s'intègre dans un écosystème complet d'encaissement intelligent, offrant une proposition de valeur unique sur un marché de la restauration en pleine transformation numérique.
          </p>
          <p className="leading-relaxed">
            Pour réaliser notre vision et atteindre nos objectifs commerciaux, nous prévoyons une levée de fonds de <span className="font-bold text-[#D4B483]">2,5 millions d'euros</span> sur les deux prochaines années, divisée en deux phases distinctes.
          </p>
        </div>
      </section>

      {/* Besoins Financiers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Besoins Financiers
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Phase 1 */}
          <div className="bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#D47D5A]/20">
            <div className="bg-[#D47D5A] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Phase 1 : Amorçage</h3>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Montant</span>
                <span className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0]">750 000 €</span>
              </div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90 mb-4">
                Notre objectif immédiat est de sécuriser un financement initial de 750 000 € pour développer notre MVP (Minimum Viable Product) et lancer nos premiers tests en environnement réel.
              </p>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] rounded p-3">
                <div className="flex justify-between">
                  <span className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Période</span>
                  <span className="text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">T3-T4 2023</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Objectif principal</span>
                  <span className="text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Développement MVP et tests pilotes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#87A28F]/20">
            <div className="bg-[#87A28F] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Phase 2 : Série A</h3>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Montant</span>
                <span className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0]">1 750 000 €</span>
              </div>
              <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90 mb-4">
                Une fois la preuve de concept validée, nous prévoyons une levée plus conséquente pour accélérer notre développement commercial et technique.
              </p>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40] rounded p-3">
                <div className="flex justify-between">
                  <span className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Période</span>
                  <span className="text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">T3-T4 2024</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Objectif principal</span>
                  <span className="text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Scaling commercial et développement produit avancé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utilisation des Fonds */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Utilisation des Fonds
        </h2>

        {/* Phase 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-[#D47D5A] mb-4">Phase 1 : Amorçage (750 000 €)</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Développement Technique */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Développement Technique</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">380 000 €</p>
              <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-1">
                <li>Équipe de développement</li>
                <li>Infrastructure et outils</li>
                <li>Matériel prototype</li>
              </ul>
            </div>

            {/* Tests et Validation */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Tests et Validation</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">170 000 €</p>
              <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-1">
                <li>Programme pilote</li>
                <li>Optimisation produit</li>
              </ul>
            </div>

            {/* Marketing et Commercial */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D4B483] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Marketing et Commercial</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">100 000 €</p>
              <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-1">
                <li>Identité de marque</li>
                <li>Acquisition premiers clients</li>
              </ul>
            </div>

            {/* Frais Généraux et Réserve */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Frais Généraux et Réserve</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">100 000 €</p>
              <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-1">
                <li>Frais de structure</li>
                <li>Réserve de trésorerie</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/20 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Détail des allocations</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Développement Technique (380 000 €)</h5>
                <ul className="space-y-2 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc"><span className="font-medium">Équipe de développement</span> (250 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">2 développeurs full-stack senior</li>
                      <li className="list-disc text-sm">1 ingénieur IA/ML spécialisé en traitement du langage</li>
                      <li className="list-disc text-sm">1 designer UX/UI à temps partiel</li>
                    </ul>
                  </li>
                  <li className="list-disc"><span className="font-medium">Infrastructure et outils</span> (80 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Serveurs cloud et services SaaS</li>
                      <li className="list-disc text-sm">Licences logicielles et API tierces</li>
                      <li className="list-disc text-sm">Environnements de test et d'intégration continue</li>
                    </ul>
                  </li>
                  <li className="list-disc"><span className="font-medium">Matériel prototype</span> (50 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Oreillettes professionnelles pour tests</li>
                      <li className="list-disc text-sm">Équipement de test acoustique</li>
                      <li className="list-disc text-sm">Matériel d'installation pilote</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Tests et Validation (170 000 €)</h5>
                <ul className="space-y-2 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc"><span className="font-medium">Programme pilote</span> (120 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Installation dans 5 restaurants partenaires</li>
                      <li className="list-disc text-sm">Support technique dédié pendant la phase pilote</li>
                      <li className="list-disc text-sm">Collecte et analyse des données d'usage</li>
                    </ul>
                  </li>
                  <li className="list-disc"><span className="font-medium">Optimisation produit</span> (50 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Itérations basées sur les retours utilisateurs</li>
                      <li className="list-disc text-sm">Ajustements des algorithmes et de l'UX vocale</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Marketing et Commercial (100 000 €)</h5>
                <ul className="space-y-2 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc"><span className="font-medium">Identité de marque</span> (30 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Développement de l'identité visuelle complète</li>
                      <li className="list-disc text-sm">Site web et matériel de présentation</li>
                    </ul>
                  </li>
                  <li className="list-disc"><span className="font-medium">Acquisition premiers clients</span> (70 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Présence événementielle ciblée</li>
                      <li className="list-disc text-sm">Contenu marketing spécialisé</li>
                      <li className="list-disc text-sm">Démarches commerciales directes</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Frais Généraux et Réserve (100 000 €)</h5>
                <ul className="space-y-2 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc"><span className="font-medium">Frais de structure</span> (70 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Locaux et équipements</li>
                      <li className="list-disc text-sm">Services juridiques et comptables</li>
                      <li className="list-disc text-sm">Assurances professionnelles</li>
                    </ul>
                  </li>
                  <li className="list-disc"><span className="font-medium">Réserve de trésorerie</span> (30 000 €)
                    <ul className="pl-5 mt-1 space-y-1">
                      <li className="list-disc text-sm">Fonds d'urgence pour imprévus</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div>
          <h3 className="text-xl font-semibold text-[#87A28F] mb-4">Phase 2 : Série A (1 750 000 €)</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Développement Produit */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1A2A40] dark:bg-[#D47D5A] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Développement Produit</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">700 000 €</p>
            </div>

            {/* Expansion Commerciale */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#87A28F] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Expansion Commerciale</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">600 000 €</p>
            </div>

            {/* Opérations */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D4B483] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Opérations</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">300 000 €</p>
            </div>

            {/* Internationalisation */}
            <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#D47D5A] flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Internationalisation</h4>
              </div>
              <p className="text-2xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">150 000 €</p>
            </div>
          </div>

          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Détail des allocations</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Développement Produit (700 000 €)</h5>
                <ul className="space-y-1 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc">Expansion de l'équipe technique (4 à 8 développeurs)</li>
                  <li className="list-disc">Développement des fonctionnalités avancées</li>
                  <li className="list-disc">Intégrations avec systèmes tiers (TPE, plateformes de livraison)</li>
                  <li className="list-disc">Amélioration continue des algorithmes IA</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Expansion Commerciale (600 000 €)</h5>
                <ul className="space-y-1 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc">Constitution d'une équipe commerciale (3-4 personnes)</li>
                  <li className="list-disc">Programme de marketing digital et contenu</li>
                  <li className="list-disc">Développement de partenariats stratégiques</li>
                  <li className="list-disc">Présence renforcée sur salons professionnels</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Opérations (300 000 €)</h5>
                <ul className="space-y-1 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc">Équipe support client et succès client</li>
                  <li className="list-disc">Logistique et déploiement à l'échelle</li>
                  <li className="list-disc">Formation et documentation</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Internationalisation (150 000 €)</h5>
                <ul className="space-y-1 pl-5 text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">
                  <li className="list-disc">Adaptation linguistique et culturelle du produit</li>
                  <li className="list-disc">Études de marché pour expansion européenne</li>
                  <li className="list-disc">Conformité réglementaire internationale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégie de Levée de Fonds */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Stratégie de Levée de Fonds
        </h2>
        
        <div className="bg-[#1A2A40] dark:bg-[#1A2A40]/50 text-white rounded-lg p-6 shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Sources de Financement Ciblées</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-[#D47D5A] mb-3">Phase 1 : Amorçage</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#D47D5A]/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#F5F5F0]">Business Angels (300 000 €)</p>
                    <p className="text-sm text-[#F5F5F0]/70">Profils ciblés : entrepreneurs du secteur restauration/tech</p>
                    <p className="text-sm text-[#F5F5F0]/70">Apport de réseau et expertise métier</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#D47D5A]/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#F5F5F0]">Fonds d'amorçage (300 000 €)</p>
                    <p className="text-sm text-[#F5F5F0]/70">Fonds spécialisés en FoodTech et solutions B2B</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#D47D5A]/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#D47D5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#F5F5F0]">Subventions et aides (150 000 €)</p>
                    <p className="text-sm text-[#F5F5F0]/70">BPI France (Innovation)</p>
                    <p className="text-sm text-[#F5F5F0]/70">Crédit Impôt Recherche</p>
                    <p className="text-sm text-[#F5F5F0]/70">Programmes européens d'innovation</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#87A28F] mb-3">Phase 2 : Série A</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#87A28F]/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#87A28F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#F5F5F0]">Venture Capital (1 500 000 €)</p>
                    <p className="text-sm text-[#F5F5F0]/70">Fonds spécialisés en Series A avec expertise SaaS B2B</p>
                    <p className="text-sm text-[#F5F5F0]/70">Fonds thématiques FoodTech et IA</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#87A28F]/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#87A28F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#F5F5F0]">Partenaires stratégiques (250 000 €)</p>
                    <p className="text-sm text-[#F5F5F0]/70">Acteurs de l'écosystème restauration et paiement</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Calendrier et Jalons</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                  <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Trimestre</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Objectif</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Actions clés</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">T3 2023</td>
                  <td className="py-3 px-4 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Préparation levée amorçage</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Finalisation pitch deck, business plan détaillé</td>
                </tr>
                <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">T4 2023</td>
                  <td className="py-3 px-4 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Clôture amorçage</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Roadshow investisseurs, négociations</td>
                </tr>
                <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">T1-T2 2024</td>
                  <td className="py-3 px-4 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Déploiement MVP</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Validation produit, métriques d'usage</td>
                </tr>
                <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">T3 2024</td>
                  <td className="py-3 px-4 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Préparation Série A</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Mise à jour documentation, KPIs commerciaux</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">T4 2024</td>
                  <td className="py-3 px-4 text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Clôture Série A</td>
                  <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Roadshow, due diligence, closing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modèle Économique et Projections */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Modèle Économique et Projections
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Structure de Revenus</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#D47D5A]/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-[#D47D5A]">75%</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Abonnement mensuel</h4>
                  <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-1">
                    <li>• Tarification par terminal/utilisateur</li>
                    <li>• Trois niveaux : Essentiel, Pro, Enterprise</li>
                    <li>• Prix moyen cible : 89€/mois par restaurant</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#87A28F]/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-[#87A28F]">15%</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Commission sur transactions</h4>
                  <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-1">
                    <li>• 0,5% des transactions traitées via notre système</li>
                    <li>• Intégration progressive avec notre solution de paiement</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#D4B483]/10 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-[#D4B483]">10%</span>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-1">Services additionnels</h4>
                  <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-1">
                    <li>• Formation avancée</li>
                    <li>• Personnalisation</li>
                    <li>• Support premium</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Projections Financières</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                    <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Indicateur</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Fin 2023</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Fin 2024</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Fin 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                    <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Nombre de restaurants équipés</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">5 (pilotes)</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">75</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">350</td>
                  </tr>
                  <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                    <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Revenu mensuel récurrent (MRR)</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">450 €</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">6 675 €</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">31 150 €</td>
                  </tr>
                  <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                    <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Chiffre d'affaires annuel</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">1 350 €</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">80 100 €</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">373 800 €</td>
                  </tr>
                  <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                    <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Burn rate mensuel</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">62 500 €</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">85 000 €</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">110 000 €</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Runway (mois)</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">12</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">20</td>
                    <td className="py-3 px-4 text-right text-sm text-[#1A2A40] dark:text-[#F5F5F0]">18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Objectifs de Valorisation</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1A2A40]/50 rounded-lg p-5 shadow-inner">
              <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 text-sm mb-1">Valorisation pré-money phase d'amorçage</p>
              <p className="text-2xl font-bold text-[#D47D5A]">3M€</p>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/50 rounded-lg p-5 shadow-inner">
              <p className="text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 text-sm mb-1">Valorisation pré-money Série A visée</p>
              <p className="text-2xl font-bold text-[#87A28F]">7-9M€</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégie de Sortie */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Stratégie de Sortie
        </h2>
        
        <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90 mb-6">
          Nous envisageons plusieurs scénarios de sortie à l'horizon 5-7 ans :
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-[#D47D5A] animate-float">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#D47D5A]/10 flex items-center justify-center mr-3">
                <span className="text-lg font-bold text-[#D47D5A]">1</span>
              </div>
              <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Acquisition stratégique</h4>
            </div>
            <p className="text-sm text-[#1A2A40]/70 dark:text-[#F5F5F0]/70 mb-2">(scénario privilégié)</p>
            <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-2">
              <li>• Acquéreurs potentiels : acteurs majeurs des solutions de caisse, groupes de restauration, entreprises de paiement</li>
              <li>• Valorisation cible : 8-10x le revenu annuel</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-[#87A28F] animate-float" style={{animationDelay: "1s"}}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#87A28F]/10 flex items-center justify-center mr-3">
                <span className="text-lg font-bold text-[#87A28F]">2</span>
              </div>
              <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Levée de fonds Série B/C</h4>
            </div>
            <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-2">
              <li>• Pour une expansion internationale accélérée</li>
              <li>• Préparation à une introduction en bourse à plus long terme</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-[#D4B483] animate-float" style={{animationDelay: "2s"}}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-[#D4B483]/10 flex items-center justify-center mr-3">
                <span className="text-lg font-bold text-[#D4B483]">3</span>
              </div>
              <h4 className="text-lg font-medium text-[#1A2A40] dark:text-[#F5F5F0]">Consolidation du marché</h4>
            </div>
            <ul className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80 space-y-2">
              <li>• Acquisition d'acteurs complémentaires pour renforcer notre écosystème</li>
              <li>• Création d'un groupe leader dans les solutions vocales pour la restauration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risques et Mitigation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">
          Risques et Mitigation
        </h2>
        
        <div className="overflow-x-auto bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Risque</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Probabilité</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Impact</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Stratégie de mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Adoption plus lente que prévue</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4B483]/10 text-[#D4B483]">
                    Moyenne
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D47D5A]/10 text-[#D47D5A]">
                    Élevé
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Programme d'essai sans engagement, témoignages clients</td>
              </tr>
              <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Concurrence de grands acteurs tech</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4B483]/10 text-[#D4B483]">
                    Moyenne
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D47D5A]/10 text-[#D47D5A]">
                    Élevé
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Avance technologique, spécialisation sectorielle, intégrations exclusives</td>
              </tr>
              <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Difficultés techniques en environnement bruyant</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D47D5A]/10 text-[#D47D5A]">
                    Élevée
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4B483]/10 text-[#D4B483]">
                    Moyen
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">R&D acoustique avancée, tests intensifs en conditions réelles</td>
              </tr>
              <tr className="border-b border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Changement réglementaire</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#87A28F]/10 text-[#87A28F]">
                    Faible
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4B483]/10 text-[#D4B483]">
                    Moyen
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Veille juridique, conception conforme RGPD dès le départ</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Allongement des cycles de vente</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4B483]/10 text-[#D4B483]">
                    Moyenne
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4B483]/10 text-[#D4B483]">
                    Moyen
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-[#1A2A40] dark:text-[#F5F5F0]">Pipeline commercial diversifié, modèle freemium pour accélérer l'adoption</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Conclusion
        </h2>
        <div className="bg-[#1A2A40] dark:bg-[#D47D5A]/20 text-[#F5F5F0] rounded-lg p-6 shadow-md">
          <p className="leading-relaxed mb-4">
            Ce plan d'investissement définit notre feuille de route financière pour transformer Sotto d'une vision innovante en une entreprise rentable qui révolutionne l'expérience de la restauration. Notre approche par phases nous permet de valider chaque étape avant d'accélérer, minimisant les risques tout en maximisant notre potentiel de croissance.
          </p>
          <p className="leading-relaxed">
            L'élimination des interfaces à écran dans la restauration représente non seulement une opportunité commerciale significative, mais aussi une véritable révolution dans l'expérience client et les conditions de travail du personnel. Avec le soutien d'investisseurs partageant notre vision, nous sommes convaincus de pouvoir créer une entreprise à forte valeur ajoutée qui redéfinira les standards du secteur.
          </p>
        </div>
      </section>

      {/* Prochaines étapes */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">
          Prochaines étapes
        </h3>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-lg p-6 shadow-sm">
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="h-6 w-6 flex-shrink-0 mr-2">
                <input type="checkbox" className="h-5 w-5 rounded border-[#D47D5A]/30 text-[#D47D5A] focus:ring-[#D47D5A]/50" />
              </div>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">
                Finalisation du pitch deck investisseurs <span className="text-[#1A2A40]/60 dark:text-[#F5F5F0]/60 text-sm">(échéance: 15 septembre)</span>
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 flex-shrink-0 mr-2">
                <input type="checkbox" className="h-5 w-5 rounded border-[#D47D5A]/30 text-[#D47D5A] focus:ring-[#D47D5A]/50" />
              </div>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">
                Organisation de démos produit pour investisseurs potentiels <span className="text-[#1A2A40]/60 dark:text-[#F5F5F0]/60 text-sm">(échéance: 1er octobre)</span>
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 flex-shrink-0 mr-2">
                <input type="checkbox" className="h-5 w-5 rounded border-[#D47D5A]/30 text-[#D47D5A] focus:ring-[#D47D5A]/50" />
              </div>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">
                Préparation documentation due diligence <span className="text-[#1A2A40]/60 dark:text-[#F5F5F0]/60 text-sm">(échéance: 15 octobre)</span>
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 flex-shrink-0 mr-2">
                <input type="checkbox" className="h-5 w-5 rounded border-[#D47D5A]/30 text-[#D47D5A] focus:ring-[#D47D5A]/50" />
              </div>
              <span className="text-[#1A2A40] dark:text-[#F5F5F0]">
                Premiers rendez-vous investisseurs <span className="text-[#1A2A40]/60 dark:text-[#F5F5F0]/60 text-sm">(échéance: novembre)</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <div className="text-sm text-[#1A2A40]/60 dark:text-[#F5F5F0]/60 text-center italic">
        *Document préparé par l'équipe financière de Sotto - Version 1.2 - Septembre 2023*
      </div>
    </div>
  );
};

export default ResourceContent;