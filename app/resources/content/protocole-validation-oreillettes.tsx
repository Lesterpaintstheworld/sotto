export default function ResourceContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-600">
              Ce protocole définit la méthodologie de test des oreillettes Sotto sur un service complet 
              en conditions réelles, utilisant une approche "Wizard of Oz" où un opérateur humain simule 
              les réponses de l'IA.
            </p>
          </div>
        </div>
      </div>

      {/* Configuration du test */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Configuration du test</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Service test</h3>
            <ul className="space-y-2">
              <li>1 service complet (11h30-14h30)</li>
              <li>1 ambassadeur équipé</li>
              <li>1 opérateur Sotto</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Matériel requis</h3>
            <ul className="space-y-2">
              <li>3 types d'oreillettes à tester</li>
              <li>Système d'enregistrement audio</li>
              <li>Grilles d'évaluation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grille d'évaluation */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Grille d'évaluation comparative</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Critère</th>
              <th>Conduction osseuse</th>
              <th>Micro tige</th>
              <th>Micro cravate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Confort (1-10)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Qualité audio émission</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Qualité audio réception</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Stabilité en mouvement</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Discrétion visuelle</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Résistance bruit ambiant</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Aspects à mesurer */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Ergonomie physique</h2>
          <ul className="space-y-3">
            <li>Confort sur durée prolongée</li>
            <li>Stabilité pendant le service</li>
            <li>Facilité de mise en place</li>
            <li>Adaptabilité morphologique</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Qualité audio</h2>
          <ul className="space-y-3">
            <li>Clarté de la voix</li>
            <li>Filtrage du bruit ambiant</li>
            <li>Latence de transmission</li>
            <li>Stabilité de la connexion</li>
          </ul>
        </div>
      </div>

      {/* Collecte de données */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Collecte de données</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Enregistrements audio</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Communications service-cuisine</li>
              <li>Commandes clients</li>
              <li>Ambiance sonore</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Métriques quantitatives</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Temps de service</li>
              <li>Taux d'erreur</li>
              <li>Utilisation batterie</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Retours qualitatifs</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Confort ressenti</li>
              <li>Facilité d'utilisation</li>
              <li>Suggestions d'amélioration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
