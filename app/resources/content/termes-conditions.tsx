const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-[#F5F5F0] dark:bg-[#1A2A40]/20 rounded-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-6 border-b border-[#D47D5A] pb-4">
        Termes et Conditions d'Utilisation Sotto
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Introduction</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bienvenue dans les conditions générales d'utilisation de Sotto, le système d'interface vocale IA conçu pour révolutionner l'expérience de la restauration. Ce document définit les termes contractuels qui régissent notre relation avec votre établissement et encadre l'utilisation de notre technologie. Nous avons conçu ces conditions pour être aussi claires et transparentes que possible, en accord avec notre philosophie de simplicité et d'efficacité.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Sotto s'engage à libérer votre restaurant des écrans pour créer une expérience plus humaine et efficace. Ces termes et conditions établissent un cadre de confiance mutuelle qui nous permet de vous accompagner dans cette transformation.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">1. Définitions</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Dans le cadre du présent contrat, les termes suivants ont la signification qui leur est attribuée ci-dessous :
        </p>
        <div className="grid grid-cols-1 gap-4 mt-6">
          {[
            { term: "Sotto", def: "désigne la société Sotto SAS, ses filiales, successeurs et ayants droit." },
            { term: "Service", def: "ensemble des prestations fournies par Sotto, comprenant le système d'interface vocale IA, les oreillettes, l'infrastructure technique associée et les services de support." },
            { term: "Établissement ou Restaurant Partenaire", def: "votre établissement de restauration qui utilise les services de Sotto." },
            { term: "Utilisateurs", def: "les membres du personnel de votre établissement qui utilisent le Service." },
            { term: "Matériel", def: "les oreillettes, stations de charge et autres équipements physiques fournis par Sotto." },
            { term: "Données", def: "informations collectées et traitées dans le cadre de l'utilisation du Service." },
            { term: "Abonnement", def: "engagement contractuel permettant l'accès au Service selon les modalités choisies." }
          ].map((item, index) => (
            <div key={index} className="bg-white dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D47D5A] hover:translate-y-[-2px]">
              <h3 className="font-bold text-[#D47D5A]">{item.term}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.def}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">2. Description du Service</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">2.1 Composantes du Service</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-3">Le Service Sotto comprend :</p>
            <ul className="space-y-2">
              {[
                "Un système d'interface vocale IA accessible via des oreillettes sans fil",
                "Une infrastructure backend pour le traitement des commandes et la gestion des opérations",
                "Des stations de charge pour les oreillettes",
                "Un tableau de bord administrateur accessible via une application web progressive",
                "Un service de support technique et d'assistance",
                "Des mises à jour régulières du système et des fonctionnalités"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 mt-1 rounded-full bg-[#D47D5A]"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">2.2 Fonctionnalités principales</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-3">Le Service permet notamment :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "La prise de commandes par reconnaissance vocale",
                "La transmission des commandes entre la salle et la cuisine",
                "La gestion des tables et des additions",
                "L'accès aux informations sur les plats et les stocks",
                "L'analyse des performances opérationnelles",
                "La communication entre les membres du personnel"
              ].map((item, index) => (
                <div key={index} className="flex items-center p-2 bg-[#F5F5F0] dark:bg-[#1A2A40]/70 rounded-md">
                  <span className="text-[#D47D5A] mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">2.3 Évolutions du Service</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300">
              Sotto s'engage à améliorer continuellement son Service. De nouvelles fonctionnalités seront régulièrement déployées et accessibles selon votre formule d'abonnement. Vous serez informé des mises à jour majeures au moins 14 jours avant leur déploiement.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">3. Conditions d'utilisation</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">3.1 Éligibilité</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-3">Pour utiliser le Service Sotto, votre établissement doit :</p>
            <ul className="space-y-2">
              {[
                "Disposer d'une connexion WiFi stable avec un débit minimum de 10 Mbps",
                "Posséder un numéro SIRET valide et être légalement autorisé à exercer une activité de restauration",
                "Désigner un administrateur principal responsable de la gestion du compte",
                "S'engager à former les utilisateurs selon les recommandations de Sotto"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 mt-1 rounded-full bg-[#87A28F]"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">3.2 Création et gestion du compte</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-3">L'administrateur principal sera responsable de :</p>
            <ul className="space-y-2">
              {[
                "La création et la gestion des comptes utilisateurs",
                "La configuration initiale du système selon les spécificités de l'établissement",
                "La maintenance des informations relatives au menu et aux opérations",
                "La supervision de l'utilisation conforme du Service"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">3.3 Utilisation conforme</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-3">En utilisant le Service Sotto, vous vous engagez à :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Utiliser le Service uniquement pour les besoins de votre établissement de restauration",
                "Ne pas tenter de décompiler, désassembler ou altérer le logiciel ou le matériel",
                "Ne pas utiliser le Service à des fins illégales ou contraires aux bonnes mœurs",
                "Respecter les droits de propriété intellectuelle de Sotto",
                "Signaler tout dysfonctionnement ou incident de sécurité",
                "Maintenir la confidentialité des identifiants de connexion"
              ].map((item, index) => (
                <div key={index} className="flex items-start p-3 bg-[#F5F5F0] dark:bg-[#1A2A40]/70 rounded-md">
                  <span className="text-[#1A2A40] dark:text-[#D47D5A] mr-2 font-bold">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">4. Matériel et installation</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">4.1 Propriété du matériel</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300">
              Le matériel fourni par Sotto (oreillettes, stations de charge, etc.) reste la propriété de Sotto pendant toute la durée de l'abonnement. Il est mis à disposition de l'établissement sous forme de location incluse dans l'abonnement.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">4.2 Installation et configuration</h3>
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider bg-gray-100 dark:bg-[#1A2A40]/80">Étape</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider bg-gray-100 dark:bg-[#1A2A40]/80">Responsabilité</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0] uppercase tracking-wider bg-gray-100 dark:bg-[#1A2A40]/80">Délai indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { etape: "Audit technique préalable", responsabilite: "Sotto", delai: "1-2 jours" },
                  { etape: "Installation du matériel", responsabilite: "Sotto", delai: "1 jour" },
                  { etape: "Configuration du système", responsabilite: "Sotto", delai: "1-2 jours" },
                  { etape: "Formation initiale", responsabilite: "Sotto", delai: "1-2 jours" },
                  { etape: "Période de test", responsabilite: "Conjointe", delai: "7 jours" }
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-[#1A2A40]/30" : ""}>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.etape}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.responsabilite}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">4.3 Maintenance et remplacement</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#D47D5A] mb-3">Sotto s'engage à :</h4>
              <ul className="space-y-2">
                {[
                  "Remplacer tout matériel défectueux dans un délai de 48 heures ouvrées",
                  "Fournir des mises à jour logicielles régulières",
                  "Assurer la maintenance préventive du système"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#87A28F] mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
              <h4 className="font-semibold text-[#D47D5A] mb-3">L'établissement s'engage à :</h4>
              <ul className="space-y-2">
                {[
                  "Utiliser le matériel conformément aux instructions fournies",
                  "Signaler rapidement tout dysfonctionnement",
                  "Prendre soin du matériel mis à disposition",
                  "Ne pas modifier ou altérer le matériel"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#87A28F] mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">5. Conditions financières</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#D47D5A] pb-2">5.1 Structure tarifaire</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">L'abonnement au Service Sotto se compose de :</p>
            <ul className="space-y-3">
              {[
                { label: "Frais d'installation", value: "prise en charge par Sotto (offerts)" },
                { label: "Abonnement mensuel", value: "basé sur le nombre d'utilisateurs/terminaux" },
                { label: "Commission", value: "pourcentage minime sur les transactions (selon formule choisie)" }
              ].map((item, index) => (
                <li key={index} className="text-sm">
                  <span className="font-semibold text-[#D47D5A]">{item.label} : </span>
                  <span className="text-gray-700 dark:text-gray-300">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#D47D5A] pb-2">5.2 Modalités de paiement</h3>
            <ul className="space-y-2">
              {[
                "Facturation mensuelle en début de mois",
                "Paiement par prélèvement automatique à 30 jours",
                "Accès à un portail de facturation détaillé",
                "Possibilité de modifier la formule d'abonnement avec préavis de 30 jours"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D4B483] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#D47D5A] pb-2">5.3 Révision tarifaire</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Sotto se réserve le droit de modifier ses tarifs. Toute modification tarifaire sera notifiée au moins 60 jours avant son application et n'affectera pas les contrats en cours avant leur renouvellement.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">6. Confidentialité et données</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#87A28F] pb-2">6.1 Données collectées</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Dans le cadre du Service, Sotto collecte et traite :</p>
            <ul className="space-y-2">
              {[
                "Des données opérationnelles (commandes, temps de service, etc.)",
                "Des données techniques (utilisation du système, diagnostics)",
                "Des données vocales (uniquement pour l'amélioration du service)",
                "Des données de performance (statistiques d'utilisation)"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#87A28F] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#87A28F] pb-2">6.2 Utilisation des données</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Sotto s'engage à utiliser ces données uniquement pour :</p>
            <ul className="space-y-2">
              {[
                "Fournir et améliorer le Service",
                "Personnaliser l'expérience utilisateur",
                "Établir des statistiques anonymisées",
                "Résoudre les problèmes techniques",
                "Se conformer aux obligations légales"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#87A28F] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3 border-b border-[#87A28F] pb-2">6.3 Protection des données</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Sotto met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données, conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Les conversations des clients captées accidentellement par le système ne sont ni enregistrées ni traitées, conformément à notre engagement de confidentialité.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">7. Propriété intellectuelle</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">7.1 Droits de Sotto</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Sotto reste propriétaire de tous les droits de propriété intellectuelle relatifs au Service, incluant mais non limité à :</p>
            <ul className="space-y-2">
              {[
                "Le logiciel et ses mises à jour",
                "Les algorithmes et modèles d'IA",
                "Les marques et logos",
                "La documentation technique"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">7.2 Licence d'utilisation</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Sotto vous accorde une licence non-exclusive, non-transférable et révocable pour utiliser le Service pendant la durée de votre abonnement, uniquement pour les besoins de votre établissement.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">7.3 Feedback et améliorations</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Les suggestions et retours d'expérience que vous pourriez fournir à Sotto peuvent être utilisés pour améliorer le Service, sans que cela ne vous confère de droits sur ces améliorations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">8. Durée et résiliation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">8.1 Durée de l'engagement</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              L'abonnement au Service Sotto est conclu pour une durée initiale de 12 mois, renouvelable tacitement par périodes successives de 12 mois.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">8.4 Conséquences de la résiliation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">En cas de résiliation :</p>
            <ul className="space-y-2">
              {[
                "L'accès au Service sera désactivé",
                "Le matériel devra être restitué à Sotto dans les 14 jours",
                "Vous pourrez récupérer vos données pendant une période de 30 jours"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">8.2 Résiliation par le Restaurant Partenaire</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Vous pouvez résilier votre abonnement :</p>
            <ul className="space-y-2">
              {[
                "À l'échéance de la période d'engagement, moyennant un préavis de 60 jours",
                "En cas de manquement grave de Sotto à ses obligations, après mise en demeure restée sans effet pendant 30 jours"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">8.3 Résiliation par Sotto</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Sotto peut résilier votre abonnement :</p>
            <ul className="space-y-2">
              {[
                "En cas de non-paiement après deux relances",
                "En cas d'utilisation frauduleuse ou abusive du Service",
                "En cas de cessation d'activité de votre établissement",
                "En cas de force majeure rendant impossible la fourniture du Service"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">9. Limitation de responsabilité</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">9.1 Garanties de service</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Sotto s'engage à fournir un Service conforme aux spécifications décrites dans la documentation. Sotto garantit une disponibilité du Service de 99,5% sur une base mensuelle.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">9.2 Exclusions de responsabilité</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">Sotto ne pourra être tenu responsable :</p>
            <ul className="space-y-2">
              {[
                "Des dysfonctionnements liés à votre infrastructure réseau",
                "Des pertes de données résultant d'une mauvaise utilisation du Service",
                "Des dommages indirects, y compris perte de chiffre d'affaires",
                "Des interruptions de service dues à des cas de force majeure"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">9.3 Plafond d'indemnisation</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              La responsabilité de Sotto est limitée au montant total payé par votre établissement au cours des 12 derniers mois précédant l'événement donnant lieu à responsabilité.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">10. Dispositions diverses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">10.1 Modification des conditions</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Sotto se réserve le droit de modifier les présentes conditions. Toute modification vous sera notifiée au moins 30 jours avant son entrée en vigueur. L'utilisation continue du Service après cette notification vaudra acceptation des nouvelles conditions.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">10.2 Droit applicable et juridiction</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Le présent contrat est soumis au droit français. Tout litige relatif à son interprétation ou son exécution relèvera de la compétence exclusive des tribunaux de Paris, après tentative de résolution amiable.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-[#1A2A40] dark:text-[#F5F5F0] mb-3">10.3 Divisibilité</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Si une disposition du présent contrat était jugée invalide ou inapplicable, les autres dispositions conserveraient leur pleine force et effet.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Conclusion</h2>
        <div className="bg-white dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Ces termes et conditions établissent un cadre de collaboration transparent entre Sotto et votre établissement. Notre objectif est de vous accompagner dans la transformation de votre expérience de restauration, en recentrant l'attention sur l'humain et la gastronomie.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pour toute question concernant ces conditions, notre équipe est à votre disposition à l'adresse <a href="mailto:contact@sotto.ai" className="text-[#D47D5A] hover:underline transition-all">contact@sotto.ai</a>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 italic">
            En choisissant Sotto, vous optez pour une technologie qui s'adapte à vous, et non l'inverse.
          </p>
        </div>
      </section>

      <footer className="text-center text-gray-500 dark:text-gray-400 mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm">Dernière mise à jour : Janvier 2024</p>
      </footer>
    </div>
  );
};

export default ResourceContent;