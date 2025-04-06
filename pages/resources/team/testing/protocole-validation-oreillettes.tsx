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

        {/* Objectifs */}
        <Card>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="target" className="w-6 h-6 text-green-500" />
            Objectifs principaux
          </h2>
          <ul className="space-y-3">
            {[
              "Valider l'ergonomie physique de l'oreillette sur une durée de service complète",
              "Tester la fluidité des interactions vocales en conditions réelles",
              "Mesurer la qualité audio dans différentes zones du restaurant",
              "Collecter des données réelles pour calibrer l'IA",
              "Identifier les scénarios d'usage spécifiques au service"
            ].map((objective, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon name="check-circle" className="w-5 h-5 text-green-500 mt-1" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Configuration */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="settings" className="w-6 h-6 text-purple-500" />
              Configuration du test
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge color="purple">Durée</Badge>
                <span>1 service complet (11h30-14h30)</span>
              </div>
              <div>
                <Badge color="purple" className="mb-2">Participants</Badge>
                <ul className="space-y-2 ml-4">
                  <li>• 1 ambassadeur restaurant équipé de l'oreillette</li>
                  <li>• 1 opérateur Sotto simulant l'IA</li>
                  <li>• 1 observateur technique</li>
                </ul>
              </div>
              <div>
                <Badge color="purple" className="mb-2">Matériel</Badge>
                <ul className="space-y-2 ml-4">
                  <li>• Oreillette de test + backup</li>
                  <li>• Système d'enregistrement audio</li>
                  <li>• Outils de mesure acoustique</li>
                  <li>• Grilles d'observation</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="users" className="w-6 h-6 text-blue-500" />
              Équipe de test
            </h2>
            <Table
              headers={["Rôle", "Responsabilités"]}
              rows={[
                ["Opérateur Sotto", "Simulation des réponses IA, observation des interactions"],
                ["Ambassadeur restaurant", "Utilisation du système en service réel"],
                ["Observateur", "Documentation des interactions et retours"],
                ["Support technique", "Installation et maintenance du matériel"]
              ]}
              className="w-full"
            />
          </Card>
        </div>

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
