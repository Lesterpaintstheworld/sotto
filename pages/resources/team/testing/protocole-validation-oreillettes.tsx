import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/Card'
import { Table } from '@/components/Table'
import { Icon } from '@/components/Icon'
import { Badge } from '@/components/Badge'

const ProtocoleValidationOreillettes = () => {
  return (
    <Layout>
      <PageHeader
        title="Protocole de Validation des Oreillettes"
        description="Test service complet en conditions réelles avec approche Wizard of Oz"
        icon="headphones"
      />

      <div className="space-y-8">
        {/* Introduction */}
        <Card>
          <div className="flex items-start gap-4">
            <Icon name="info" className="w-6 h-6 text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold mb-2">Introduction</h2>
              <p className="text-gray-600">
                Ce protocole définit la méthodologie de test des oreillettes Sotto sur un service complet 
                en conditions réelles, utilisant une approche "Wizard of Oz" où un opérateur humain simule 
                les réponses de l'IA.
              </p>
            </div>
          </div>
        </Card>

        {/* Configuration du test */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="settings" className="w-6 h-6 text-purple-500" />
            Configuration du test
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Service test</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="clock" className="w-4 h-4 text-gray-500" />
                  <span>1 service complet (11h30-14h30)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="users" className="w-4 h-4 text-gray-500" />
                  <span>1 ambassadeur équipé</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="mic" className="w-4 h-4 text-gray-500" />
                  <span>1 opérateur Sotto</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Matériel requis</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="headphones" className="w-4 h-4 text-gray-500" />
                  <span>3 types d'oreillettes à tester</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="mic" className="w-4 h-4 text-gray-500" />
                  <span>Système d'enregistrement audio</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="file-text" className="w-4 h-4 text-gray-500" />
                  <span>Grilles d'évaluation</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Grille d'évaluation */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="check-square" className="w-6 h-6 text-green-500" />
            Grille d'évaluation comparative
          </h2>
          <Table
            headers={["Critère", "Conduction osseuse", "Micro tige", "Micro cravate"]}
            rows={[
              ["Confort (1-10)", "", "", ""],
              ["Qualité audio émission", "", "", ""],
              ["Qualité audio réception", "", "", ""],
              ["Stabilité en mouvement", "", "", ""],
              ["Discrétion visuelle", "", "", ""],
              ["Résistance bruit ambiant", "", "", ""]
            ]}
            className="w-full"
          />
        </Card>

        {/* Aspects à mesurer */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="activity" className="w-6 h-6 text-red-500" />
              Ergonomie physique
            </h2>
            <ul className="space-y-3">
              {[
                "Confort sur durée prolongée",
                "Stabilité pendant le service",
                "Facilité de mise en place",
                "Adaptabilité morphologique"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icon name="check-circle" className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="mic" className="w-6 h-6 text-blue-500" />
              Qualité audio
            </h2>
            <ul className="space-y-3">
              {[
                "Clarté de la voix",
                "Filtrage du bruit ambiant",
                "Latence de transmission",
                "Stabilité de la connexion"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Icon name="check-circle" className="w-4 h-4 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Collecte de données */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="database" className="w-6 h-6 text-purple-500" />
            Collecte de données
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Enregistrements audio",
                icon: "mic",
                items: ["Communications service-cuisine", "Commandes clients", "Ambiance sonore"]
              },
              {
                title: "Métriques quantitatives",
                icon: "bar-chart-2",
                items: ["Temps de service", "Taux d'erreur", "Utilisation batterie"]
              },
              {
                title: "Retours qualitatifs",
                icon: "message-square",
                items: ["Confort ressenti", "Facilité d'utilisation", "Suggestions d'amélioration"]
              }
            ].map((section, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Icon name={section.icon} className="w-4 h-4 text-gray-500" />
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                      <Icon name="chevron-right" className="w-3 h-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default ProtocoleValidationOreillettes

        {/* Phases */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Phases du protocole</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Phase 1: Installation",
                icon: "tool",
                color: "blue",
                items: [
                  "Configuration du réseau",
                  "Installation du poste opérateur",
                  "Test des communications",
                  "Vérification couverture WiFi"
                ]
              },
              {
                title: "Phase 2: Test en conditions",
                icon: "play-circle",
                color: "green",
                items: [
                  "Service du midi (11h30-14h30)",
                  "Service du soir (18h30-22h30)",
                  "Debriefing après chaque service",
                  "Ajustements si nécessaire"
                ]
              },
              {
                title: "Phase 3: Analyse",
                icon: "bar-chart-2",
                color: "purple",
                items: [
                  "Entretien avec l'ambassadeur",
                  "Analyse des données",
                  "Synthèse des observations",
                  "Recommandations"
                ]
              }
            ].map((phase, i) => (
              <Card key={i}>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Icon name={phase.icon} className={`w-5 h-5 text-${phase.color}-500`} />
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Icon name="chevron-right" className={`w-4 h-4 text-${phase.color}-500 mt-1`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Aspects à mesurer */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="activity" className="w-6 h-6 text-red-500" />
            Aspects à mesurer
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Ergonomie physique",
                metrics: [
                  ["Confort", "Échelle 1-10 toutes les 2h", "> 8/10"],
                  ["Stabilité", "Nombre d'ajustements nécessaires", "< 3/service"],
                  ["Autonomie", "Durée effective d'utilisation", "> 6h"],
                  ["Facilité d'utilisation", "Temps pour mettre/enlever", "< 30s"]
                ]
              },
              {
                title: "Qualité audio",
                metrics: [
                  ["Clarté voix", "Taux de compréhension", "> 95%"],
                  ["Bruit ambiant", "Mesure dB et impact", "Filtrage efficace"],
                  ["Latence", "Délai de transmission", "< 200ms"],
                  ["Volume", "Ajustements nécessaires", "< 2/service"]
                ]
              }
            ].map((aspect, i) => (
              <div key={i} className="space-y-3">
                <h3 className="font-semibold">{aspect.title}</h3>
                <Table
                  headers={["Critère", "Méthode de mesure", "Objectif"]}
                  rows={aspect.metrics}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default ProtocoleValidationOreillettes
