export default function ResourceContent() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D47D5A]">
        <div className="flex items-start gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Ce protocole définit la méthodologie de test des oreillettes Sotto sur un service complet 
              en conditions réelles, utilisant une approche "Wizard of Oz" où un opérateur humain simule 
              les réponses de l'IA. Cette approche nous permet de valider l'ergonomie et les performances 
              du système sur une durée prolongée, tout en collectant des données précieuses pour l'entraînement de l'IA.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">Objectifs principaux</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                  Valider l'ergonomie physique sur une durée de service complète
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                  Tester la fluidité des interactions vocales en conditions réelles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                  Mesurer la qualité audio dans différentes zones du restaurant
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                  Collecter des données réelles pour calibrer l'IA
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                  Identifier les scénarios d'usage spécifiques au service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phase préparatoire */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#1A2A40]">
        <h2 className="text-2xl font-semibold mb-6">Phase préparatoire</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-[#1A2A40]">Configuration du test</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">1</span>
                Test sur 3 services consécutifs
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">2</span>
                Même ambassadeur pour cohérence des retours
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">3</span>
                Même opérateur pour standardisation
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-[#1A2A40]">Rotation des oreillettes</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">J1</span>
                Conduction osseuse
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">J2</span>
                Micro tige
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">J3</span>
                Micro cravate
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Équipe et environnement */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#87A28F]">
          <h2 className="text-2xl font-semibold mb-6">Équipe de test</h2>
          <div className="space-y-4">
            {[
              {
                role: "Opérateur Sotto",
                resp: "Simulation des réponses IA, observation des interactions"
              },
              {
                role: "Ambassadeur restaurant",
                resp: "Utilisation du système en service réel"
              },
              {
                role: "Observateur",
                resp: "Documentation des interactions et retours"
              },
              {
                role: "Support technique",
                resp: "Installation et maintenance du matériel"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#87A28F] mb-2">{member.role}</h3>
                <p className="text-gray-600 text-sm">{member.resp}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D4B483]">
          <h2 className="text-2xl font-semibold mb-6">Environnement de test</h2>
          <ul className="space-y-4">
            {[
              "Restaurant partenaire représentatif",
              "Phase comparative : 3 services consécutifs",
              "Phase complète : 1 semaine (2 services/jour)",
              "Réseau WiFi dédié",
              "Station d'opérateur isolée",
              "Système d'enregistrement audio",
              "3 types d'oreillettes + backup"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4B483]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Aspects à mesurer */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D47D5A]">
          <h2 className="text-2xl font-semibold mb-6">Évaluation par type d'oreillette</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4">Critère</th>
                <th className="text-left p-4">Méthode de mesure</th>
                <th className="text-left p-4">Objectif</th>
              </tr>
            </thead>
            <tbody>
              {[
                { critere: "Confort", methode: "Échelle 1-10 toutes les 2h", objectif: "> 8/10" },
                { critere: "Stabilité", methode: "Nombre d'ajustements nécessaires", objectif: "< 3/service" },
                { critere: "Autonomie", methode: "Durée effective d'utilisation", objectif: "> 6h" },
                { critere: "Facilité d'utilisation", methode: "Temps pour mettre/enlever", objectif: "< 30s" }
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4">{item.critere}</td>
                  <td className="p-4">{item.methode}</td>
                  <td className="p-4">{item.objectif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#87A28F]">
          <h2 className="text-2xl font-semibold mb-6">Qualité audio et reconnaissance vocale</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4">Critère</th>
                <th className="text-left p-4">Objectif</th>
              </tr>
            </thead>
            <tbody>
              {[
                { critere: "Clarté voix", objectif: "> 95% taux de compréhension" },
                { critere: "Latence", objectif: "< 200ms" },
                { critere: "STT Accuracy", objectif: "> 98%" },
                { critere: "Word Error Rate", objectif: "< 2%" }
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4">{item.critere}</td>
                  <td className="p-4">{item.objectif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Collecte de données pour IA */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#1A2A40]">
        <h2 className="text-2xl font-semibold mb-6">Données pour IA</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Variations linguistiques</h3>
            <ul className="space-y-2">
              {[
                "Accents régionaux",
                "Vocabulaire métier",
                "Expressions locales",
                "Variations saisonnières menu"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A2A40]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Environnement sonore</h3>
            <ul className="space-y-2">
              {[
                "Signature acoustique par zone",
                "Pics de bruit typiques",
                "Patterns de fond sonore",
                "Interférences spécifiques"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A2A40]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Grille d'évaluation */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#87A28F]">
        <h2 className="text-2xl font-semibold mb-6">Grille d'évaluation comparative</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 border-b-2 border-gray-200">Critère</th>
                <th className="text-left p-4 border-b-2 border-gray-200">Conduction osseuse</th>
                <th className="text-left p-4 border-b-2 border-gray-200">Micro tige</th>
                <th className="text-left p-4 border-b-2 border-gray-200">Micro cravate</th>
              </tr>
            </thead>
            <tbody>
              {[
                { critere: "Confort (1-10)", objectif: "> 8/10" },
                { critere: "Qualité audio émission", objectif: "Taux > 95%" },
                { critere: "Qualité audio réception", objectif: "Taux > 95%" },
                { critere: "Stabilité en mouvement", objectif: "< 3 ajustements/service" },
                { critere: "Discrétion visuelle", objectif: "Retours clients positifs" },
                { critere: "Résistance bruit ambiant", objectif: "Filtrage efficace" },
                { critere: "Autonomie", objectif: "> 6h" },
                { critere: "Latence", objectif: "< 200ms" }
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-medium">{item.critere}</div>
                    <div className="text-sm text-gray-500">Objectif: {item.objectif}</div>
                  </td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Phases de test */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D47D5A]">
        <h2 className="text-2xl font-semibold mb-6">Phases de test</h2>
        <div className="space-y-6">
          {[
            {
              phase: "Installation et formation (J1)",
              tasks: [
                "Configuration du réseau",
                "Installation du poste opérateur",
                "Test des communications",
                "Formation initiale (2h)",
                "Simulation de service (2h)"
              ]
            },
            {
              phase: "Test en conditions réelles (J2-J6)",
              tasks: [
                "11h00 : Briefing et vérification",
                "11h30-14h30 : Service test",
                "14h30-15h00 : Debriefing",
                "18h00 : Briefing soirée",
                "18h30-22h30 : Service test",
                "22h30-23h00 : Debriefing"
              ]
            },
            {
              phase: "Analyse et conclusion (J7)",
              tasks: [
                "Entretien approfondi avec l'ambassadeur",
                "Analyse des données collectées",
                "Synthèse des observations",
                "Recommandations pour itération"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-[#D47D5A]">{phase.phase}</h3>
              <ul className="space-y-2">
                {phase.tasks.map((task, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D47D5A]"></span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Collecte de données */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#1A2A40]">
        <h2 className="text-2xl font-semibold mb-6">Collecte et analyse des données</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Données techniques",
              items: [
                "Logs de communication",
                "Métriques réseau",
                "Performances audio",
                "Données batterie"
              ]
            },
            {
              title: "Données opérationnelles",
              items: [
                "Temps de service",
                "Taux de reconnaissance",
                "Incidents techniques",
                "Patterns d'utilisation"
              ]
            },
            {
              title: "Retours qualitatifs",
              items: [
                "Confort utilisateur",
                "Expérience client",
                "Suggestions d'amélioration",
                "Observations terrain"
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-[#1A2A40]">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A2A40]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Considérations éthiques */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#87A28F]">
          <h2 className="text-2xl font-semibold mb-6">Protection des données</h2>
          <ul className="space-y-4">
            {[
              "Consentement explicite des participants",
              "Anonymisation des données collectées",
              "Stockage sécurisé conforme RGPD",
              "Accès restreint aux données sensibles"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#87A28F]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D4B483]">
          <h2 className="text-2xl font-semibold mb-6">Bien-être des participants</h2>
          <ul className="space-y-4">
            {[
              "Pauses régulières planifiées",
              "Support continu disponible",
              "Droit de retrait à tout moment",
              "Compensation adaptée"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4B483]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Livrables */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D47D5A]">
        <h2 className="text-2xl font-semibold mb-6">Livrables attendus</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D47D5A]">Rapport quotidien</h3>
            <ul className="space-y-2">
              {[
                "Synthèse des observations",
                "Incidents notables",
                "Ajustements effectués",
                "Points d'attention"
              ].map((item, index) => (
                <li key={index} className="text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D47D5A]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D47D5A]">Rapport final</h3>
            <ul className="space-y-2">
              {[
                "Synthèse exécutive",
                "Analyse détaillée par critère",
                "Données quantitatives",
                "Recommandations"
              ].map((item, index) => (
                <li key={index} className="text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D47D5A]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
