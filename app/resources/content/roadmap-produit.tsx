const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 resource-content">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A2A40]">
          Roadmap Produit Sotto
        </h1>
        <div className="inline-block px-4 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] font-medium text-sm">
          Ressource stratégique d'équipe
        </div>
      </div>

      <section className="mb-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-[#1A2A40] border-b border-[#D47D5A]/30 pb-2">Introduction</h2>
          <p className="text-[#1A2A40] leading-relaxed">
            Cette roadmap détaille la trajectoire de développement de Sotto, notre système IA vocal pour les restaurants. 
            Elle présente une chronologie structurée en phases distinctes, établit les priorités fonctionnelles et définit 
            les jalons clés qui guideront notre équipe vers une transformation réussie de l'expérience restauration. 
            Ce document stratégique interne vise à aligner toutes les équipes sur une vision commune du développement produit, 
            en garantissant que nos efforts restent concentrés sur la création d'une solution qui libère les restaurants des 
            écrans tout en optimisant leurs opérations.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-[#1A2A40] border-b border-[#D47D5A]/30 pb-2">Vision globale</h2>
          <p className="text-[#1A2A40] leading-relaxed">
            Sotto vise à révolutionner l'expérience de restauration en éliminant les interfaces à écran au profit 
            d'un système vocal IA centralisé. Notre roadmap s'articule autour de quatre phases principales qui nous 
            mèneront progressivement d'un MVP fonctionnel à un écosystème complet d'encaissement intelligent, en 
            priorisant toujours l'expérience humaine et l'efficacité opérationnelle.
          </p>
        </div>
      </section>

      <section className="mb-16 bg-gradient-to-br from-[#F5F5F0]/50 to-[#87A28F]/20 dark:from-[#1A2A40]/70 dark:to-[#1A2A40]/50 rounded-xl p-6 shadow-lg animate-float">
        <h2 className="text-2xl font-bold text-[#1A2A40] mb-6 flex items-center">
          <span className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
          Phase 1: Fondations (T1-T2 2024)
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Objectifs clés</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Développer un MVP fonctionnel démontrant la valeur fondamentale de Sotto",
              "Valider nos hypothèses techniques et d'usage en environnement réel",
              "Établir les bases d'une architecture évolutive"
            ].map((item, index) => (
              <li key={index} className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20 flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="text-[#1A2A40]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Fonctionnalités prioritaires</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 rounded-lg shadow-sm border border-[#87A28F]/20">
              <thead>
                <tr className="bg-[#87A28F]/20 dark:bg-[#87A28F]/10 text-[#1A2A40]">
                  <th className="py-3 px-4 text-left font-semibold">Fonctionnalité</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Priorité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reconnaissance vocale de base", "Compréhension des commandes simples et modifications", "Critique"],
                  ["Transmission cuisine-salle", "Communication vocale entre les équipes", "Critique"],
                  ["Gestion des tables", "Attribution et suivi de base des tables", "Haute"],
                  ["Intégration Airtable", "Stockage des données menu et commandes", "Haute"],
                  ["Interface admin minimale", "Dashboard de configuration basique", "Moyenne"]
                ].map((row, index) => (
                  <tr key={index} className={`border-t border-[#87A28F]/20 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#1A2A40]/40' : ''}`}>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[0]}</td>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[1]}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row[2] === 'Critique' ? 'bg-red-100 text-red-800' :
                        row[2] === 'Haute' ? 'bg-amber-100 text-amber-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Jalons techniques</h3>
            <ul className="space-y-3">
              {[
                ["Semaine 4", "Architecture technique validée"],
                ["Semaine 8", "Premier prototype d'oreillettes connectées"],
                ["Semaine 12", "Intégration LLM pour reconnaissance vocale"],
                ["Semaine 16", "MVP fonctionnel en environnement contrôlé"]
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold text-[#D47D5A] mr-2">{item[0]}:</span>
                  <span className="text-[#1A2A40]">{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Tests et validation</h3>
            <ul className="space-y-3">
              {[
                "Tests internes hebdomadaires à partir de la semaine 10",
                "Identification de 2-3 restaurants partenaires pour pilote",
                "Définition des métriques de succès et outils de mesure"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gradient-to-br from-[#F5F5F0]/50 to-[#D4B483]/20 dark:from-[#1A2A40]/70 dark:to-[#1A2A40]/50 rounded-xl p-6 shadow-lg animate-float" style={{animationDelay: "1s"}}>
        <h2 className="text-2xl font-bold text-[#1A2A40] mb-6 flex items-center">
          <span className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
          Phase 2: Consolidation (T3-T4 2024)
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Objectifs clés</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Affiner l'expérience utilisateur basée sur les retours du pilote",
              "Renforcer la robustesse du système en environnement bruyant",
              "Développer les premières intégrations avec l'écosystème LEA POS"
            ].map((item, index) => (
              <li key={index} className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#D4B483]/20 flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="text-[#1A2A40]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Fonctionnalités prioritaires</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 rounded-lg shadow-sm border border-[#D4B483]/20">
              <thead>
                <tr className="bg-[#D4B483]/20 dark:bg-[#D4B483]/10 text-[#1A2A40]">
                  <th className="py-3 px-4 text-left font-semibold">Fonctionnalité</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Priorité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reconnaissance contextuelle", "Compréhension avancée des modifications et spécificités", "Critique"],
                  ["Gestion des additions", "Calcul, impression et envoi des additions", "Critique"],
                  ["Profils utilisateurs", "Personnalisation par membre d'équipe", "Haute"],
                  ["Mode hors-ligne", "Fonctionnement dégradé sans connexion", "Haute"],
                  ["Analytique de base", "Suivi des performances et usage", "Moyenne"],
                  ["Gestion des stocks simple", "Alertes de rupture et suivi basique", "Moyenne"]
                ].map((row, index) => (
                  <tr key={index} className={`border-t border-[#D4B483]/20 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#1A2A40]/40' : ''}`}>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[0]}</td>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[1]}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row[2] === 'Critique' ? 'bg-red-100 text-red-800' :
                        row[2] === 'Haute' ? 'bg-amber-100 text-amber-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Jalons techniques</h3>
            <ul className="space-y-3">
              {[
                ["Mois 7", "Optimisation acoustique pour environnements bruyants"],
                ["Mois 8", "Premier déploiement pilote en restaurant partenaire"],
                ["Mois 9", "Intégration avec caisse LEA POS"],
                ["Mois 12", "Version bêta stabilisée avec 5+ restaurants"]
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold text-[#D47D5A] mr-2">{item[0]}:</span>
                  <span className="text-[#1A2A40]">{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Expansion et tests</h3>
            <ul className="space-y-3">
              {[
                "Déploiement progressif dans 5-10 restaurants tests",
                "Cycles de feedback structurés bi-hebdomadaires",
                "Ajustements itératifs basés sur données d'usage réel"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gradient-to-br from-[#F5F5F0]/50 to-[#87A28F]/20 dark:from-[#1A2A40]/70 dark:to-[#1A2A40]/50 rounded-xl p-6 shadow-lg animate-float" style={{animationDelay: "2s"}}>
        <h2 className="text-2xl font-bold text-[#1A2A40] mb-6 flex items-center">
          <span className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
          Phase 3: Optimisation (T1-T2 2025)
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Objectifs clés</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Perfectionner l'expérience utilisateur pour adoption à grande échelle",
              "Développer des fonctionnalités avancées d'intelligence opérationnelle",
              "Préparer l'infrastructure pour le déploiement commercial"
            ].map((item, index) => (
              <li key={index} className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20 flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="text-[#1A2A40]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Fonctionnalités prioritaires</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 rounded-lg shadow-sm border border-[#87A28F]/20">
              <thead>
                <tr className="bg-[#87A28F]/20 dark:bg-[#87A28F]/10 text-[#1A2A40]">
                  <th className="py-3 px-4 text-left font-semibold">Fonctionnalité</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Priorité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Analyse prédictive", "Prévisions d'affluence et recommandations", "Haute"],
                  ["Optimisation du menu", "Analyse des performances des plats", "Haute"],
                  ["Expérience client améliorée", "Reconnaissance des habitués et préférences", "Haute"],
                  ["Formation intégrée", "Assistant vocal pour nouveaux employés", "Moyenne"],
                  ["Multi-langue", "Support des principales langues européennes", "Moyenne"],
                  ["Intégration paiements", "Connexion avec systèmes de paiement", "Haute"]
                ].map((row, index) => (
                  <tr key={index} className={`border-t border-[#87A28F]/20 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#1A2A40]/40' : ''}`}>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[0]}</td>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[1]}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row[2] === 'Critique' ? 'bg-red-100 text-red-800' :
                        row[2] === 'Haute' ? 'bg-amber-100 text-amber-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Jalons techniques</h3>
            <ul className="space-y-3">
              {[
                ["Mois 13", "Architecture évolutive pour déploiement à grande échelle"],
                ["Mois 15", "Système d'analyse prédictive fonctionnel"],
                ["Mois 16", "Certification de sécurité des données et RGPD"],
                ["Mois 18", "Version 1.0 prête pour commercialisation"]
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold text-[#D47D5A] mr-2">{item[0]}:</span>
                  <span className="text-[#1A2A40]">{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Préparation commerciale</h3>
            <ul className="space-y-3">
              {[
                "Élaboration du modèle de pricing définitif",
                "Développement des processus d'onboarding et support",
                "Formation de l'équipe commerciale et supports de vente",
                "Définition des SLAs et métriques de performance"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gradient-to-br from-[#F5F5F0]/50 to-[#D4B483]/20 dark:from-[#1A2A40]/70 dark:to-[#1A2A40]/50 rounded-xl p-6 shadow-lg animate-float" style={{animationDelay: "3s"}}>
        <h2 className="text-2xl font-bold text-[#1A2A40] mb-6 flex items-center">
          <span className="bg-[#D47D5A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
          Phase 4: Expansion (T3 2025 et au-delà)
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Objectifs clés</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Étendre l'écosystème Sotto avec des fonctionnalités innovantes",
              "Développer des intégrations avancées avec systèmes tiers",
              "Explorer de nouveaux marchés et cas d'usage"
            ].map((item, index) => (
              <li key={index} className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#D4B483]/20 flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="text-[#1A2A40]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Fonctionnalités prioritaires</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 rounded-lg shadow-sm border border-[#D4B483]/20">
              <thead>
                <tr className="bg-[#D4B483]/20 dark:bg-[#D4B483]/10 text-[#1A2A40]">
                  <th className="py-3 px-4 text-left font-semibold">Fonctionnalité</th>
                  <th className="py-3 px-4 text-left font-semibold">Description</th>
                  <th className="py-3 px-4 text-left font-semibold">Priorité</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mode multi-restaurant", "Gestion centralisée pour groupes", "Haute"],
                  ["Intégration événementielle", "Mode spécial pour événements privés", "Moyenne"],
                  ["Module de réservation intelligent", "Optimisation des réservations", "Haute"],
                  ["Intégration fidélité", "Reconnaissance des clients fidèles", "Moyenne"],
                  ["Analytique fine", "Analyses détaillées par serveur/plat/table", "Moyenne"],
                  ["Mode multimodal", "Intégration future avec AR discrète", "Basse"]
                ].map((row, index) => (
                  <tr key={index} className={`border-t border-[#D4B483]/20 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#1A2A40]/40' : ''}`}>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[0]}</td>
                    <td className="py-3 px-4 text-[#1A2A40]">{row[1]}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row[2] === 'Critique' ? 'bg-red-100 text-red-800' :
                        row[2] === 'Haute' ? 'bg-amber-100 text-amber-800' :
                        row[2] === 'Basse' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {row[2]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Jalons techniques</h3>
            <ul className="space-y-3">
              {[
                ["Mois 19", "API publique pour intégrations tierces"],
                ["Mois 21", "Dashboard multi-établissements"],
                ["Mois 24", "Intégration complète écosystème bancaire"],
                ["Mois 30", "Exploration technologies AR discrètes"]
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-semibold text-[#D47D5A] mr-2">{item[0]}:</span>
                  <span className="text-[#1A2A40]">{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-3">Expansion commerciale</h3>
            <ul className="space-y-3">
              {[
                "Déploiement international dans marchés européens clés",
                "Développement de partenariats stratégiques",
                "Exploration de nouveaux segments (hôtellerie, événementiel)"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-[#1A2A40]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1A2A40] mb-6 border-b border-[#D47D5A]/30 pb-2">Principes directeurs de développement</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "L'humain avant la technologie",
              description: "Chaque fonctionnalité doit servir à améliorer l'expérience humaine, jamais à imposer la technologie. La discrétion et l'efficacité silencieuse sont nos priorités."
            },
            {
              title: "Itération rapide basée sur feedback réel",
              description: "Nous privilégions les cycles courts de développement avec tests en conditions réelles pour ajuster continuellement notre produit aux besoins des utilisateurs."
            },
            {
              title: "Robustesse avant extension",
              description: "Nous assurons la fiabilité parfaite des fonctionnalités existantes avant d'en ajouter de nouvelles. L'expérience doit être irréprochable dans ses fondamentaux."
            },
            {
              title: "Design minimaliste et élégant",
              description: "Notre interface, qu'elle soit vocale ou visuelle (pour l'admin), respecte notre identité: épurée, élégante, efficace, avec beaucoup d'espace."
            },
            {
              title: "Écosystème ouvert et intégré",
              description: "Nous construisons Sotto pour qu'il s'intègre naturellement dans l'écosystème plus large de la restauration et de l'encaissement intelligent."
            }
          ].map((principle, index) => (
            <div key={index} className="bg-white dark:bg-[#1A2A40]/60 p-6 rounded-xl shadow-sm border border-[#87A28F]/20 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-[#1A2A40] mb-3">
                {index + 1}. {principle.title}
              </h3>
              <p className="text-[#1A2A40]">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1A2A40] mb-6 border-b border-[#D47D5A]/30 pb-2">Métriques de succès</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#87A28F] flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </span>
              Métriques produit
            </h3>
            <ul className="space-y-4">
              {[
                ["Taux de reconnaissance vocale réussie", "(>95% en Phase 2, >98% en Phase 3)"],
                ["Temps moyen de prise de commande", "(réduction de 30% vs méthode traditionnelle)"],
                ["Taux d'erreur sur commandes", "(<2% en Phase 2, <1% en Phase 3)"],
                ["Temps d'onboarding", "(formation en moins de 2 heures pour nouveaux utilisateurs)"]
              ].map((item, index) => (
                <li key={index} className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#87A28F]/20">
                  <span className="font-medium text-[#1A2A40] block mb-1">{item[0]}</span>
                  <span className="text-sm text-[#1A2A40]">{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#1A2A40] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#D47D5A] flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </span>
              Métriques business
            </h3>
            <ul className="space-y-4">
              {[
                ["Rétention utilisateurs", "(>90% après 3 mois d'utilisation)"],
                ["NPS restaurants partenaires", "(>40 en Phase 2, >60 en Phase 3)"],
                ["Augmentation chiffre d'affaires restaurants", "(objectif +10% après 6 mois d'utilisation)"],
                ["Coût d'acquisition client", "(diminution progressive de 30% entre Phase 2 et 4)"]
              ].map((item, index) => (
                <li key={index} className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border border-[#D47D5A]/20">
                  <span className="font-medium text-[#1A2A40] block mb-1">{item[0]}</span>
                  <span className="text-sm text-[#1A2A40]">{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1A2A40] mb-6 border-b border-[#D47D5A]/30 pb-2">Risques et mitigations</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 rounded-lg shadow-sm border border-[#D4B483]/20">
            <thead>
              <tr className="bg-[#D4B483]/20 dark:bg-[#D4B483]/10 text-[#1A2A40]">
                <th className="py-3 px-4 text-left font-semibold">Risque</th>
                <th className="py-3 px-4 text-left font-semibold">Impact</th>
                <th className="py-3 px-4 text-left font-semibold">Probabilité</th>
                <th className="py-3 px-4 text-left font-semibold">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Performance en environnement très bruyant", "Élevé", "Moyenne", "Développement algorithmes filtrage avancés, tests extensifs dans différents environnements"],
                ["Résistance au changement", "Élevé", "Élevée", "Formation progressive, démonstration claire des bénéfices, accompagnement personnalisé"],
                ["Problèmes de connectivité", "Moyen", "Moyenne", "Mode hors-ligne robuste, protocoles de reconnexion automatique"],
                ["Confidentialité conversations clients", "Élevé", "Faible", "Filtrage intelligent, conformité RGPD intégrée, contrôles stricts"],
                ["Autonomie des oreillettes", "Moyen", "Moyenne", "Sélection modèles longue durée, stations de charge discrètes, alertes batterie"]
              ].map((row, index) => (
                <tr key={index} className={`border-t border-[#D4B483]/20 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-[#1A2A40]/40' : ''}`}>
                  <td className="py-3 px-4 text-[#1A2A40]">{row[0]}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row[1] === 'Élevé' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {row[1]}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row[2] === 'Élevée' ? 'bg-red-100 text-red-800' : 
                      row[2] === 'Moyenne' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {row[2]}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[#1A2A40]">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-gradient-to-br from-[#F5F5F0]/50 to-[#D47D5A]/10 dark:from-[#1A2A40]/70 dark:to-[#1A2A40]/50 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#1A2A40] mb-4">Conclusion</h2>
          <div className="text-[#1A2A40] space-y-4">
            <p>
              Cette roadmap produit trace une trajectoire claire et ambitieuse pour Sotto, nous guidant de la preuve de concept initiale à un écosystème complet qui transformera l'expérience de restauration. En restant fidèles à notre vision d'une technologie discrète au service de l'humain, nous développerons progressivement une solution qui libérera les restaurants des écrans tout en optimisant leurs opérations.
            </p>
            <p>
              La réussite de cette roadmap repose sur notre capacité à itérer rapidement, à intégrer les retours utilisateurs, et à maintenir notre focus sur l'expérience humaine plutôt que sur la technologie elle-même. Chaque fonctionnalité, chaque amélioration doit servir notre mission: rendre la restauration plus humaine et plus efficace.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="border-t border-[#D47D5A]/30 pt-8">
          <h2 className="text-xl font-bold text-[#1A2A40] mb-4">Actions prioritaires:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Validation de la roadmap avec l'équipe élargie",
              "Définition des OKRs trimestriels alignés sur la Phase 1",
              "Identification et recrutement des restaurants partenaires pour le pilote",
              "Finalisation du choix technologique pour les oreillettes"
            ].map((item, index) => (
              <li key={index} className="bg-white dark:bg-[#1A2A40]/60 p-4 rounded-lg shadow-sm border-l-4 border-[#D47D5A] flex items-start">
                <span className="bg-[#D47D5A] text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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