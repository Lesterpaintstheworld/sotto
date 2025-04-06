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
              les réponses de l'IA. Cette approche nous permet de :
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                Valider l'ergonomie physique en conditions réelles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                Tester la fluidité des interactions vocales
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                Collecter des données pour l'entraînement de l'IA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Configuration du test */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#1A2A40]">
        <h2 className="text-2xl font-semibold mb-6">Configuration du test</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-[#1A2A40]">Service test</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">1</span>
                Service complet (11h30-14h30)
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">2</span>
                1 ambassadeur équipé
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">3</span>
                1 opérateur Sotto
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4 text-[#1A2A40]">Matériel requis</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">A</span>
                3 types d'oreillettes à tester
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">B</span>
                Système d'enregistrement audio
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-8 h-8 rounded-full bg-[#1A2A40]/10 flex items-center justify-center text-sm font-medium">C</span>
                Grilles d'évaluation
              </li>
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
                "Confort (1-10)",
                "Qualité audio émission",
                "Qualité audio réception",
                "Stabilité en mouvement",
                "Discrétion visuelle",
                "Résistance bruit ambiant"
              ].map((critere, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium">{critere}</td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Aspects à mesurer */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D4B483]">
          <h2 className="text-2xl font-semibold mb-6">Ergonomie physique</h2>
          <ul className="space-y-4">
            {[
              "Confort sur durée prolongée",
              "Stabilité pendant le service",
              "Facilité de mise en place",
              "Adaptabilité morphologique"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4B483]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D47D5A]">
          <h2 className="text-2xl font-semibold mb-6">Qualité audio</h2>
          <ul className="space-y-4">
            {[
              "Clarté de la voix",
              "Filtrage du bruit ambiant",
              "Latence de transmission",
              "Stabilité de la connexion"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D47D5A]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Collecte de données */}
      <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#1A2A40]">
        <h2 className="text-2xl font-semibold mb-6">Collecte de données</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Enregistrements audio",
              items: ["Communications service-cuisine", "Commandes clients", "Ambiance sonore"]
            },
            {
              title: "Métriques quantitatives", 
              items: ["Temps de service", "Taux d'erreur", "Utilisation batterie"]
            },
            {
              title: "Retours qualitatifs",
              items: ["Confort ressenti", "Facilité d'utilisation", "Suggestions d'amélioration"]
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
    </div>
  )
}
