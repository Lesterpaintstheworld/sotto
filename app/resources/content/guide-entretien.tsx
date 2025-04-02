const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 resource-content">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#1A2A40] mb-6 border-b-2 border-[#D47D5A] pb-2">
          Guide d'Entretien Utilisateur
        </h1>
        
        <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md mb-10 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-semibold text-[#1A2A40] mb-4">Introduction</h2>
          <p className="mb-4 text-[#1A2A40]">
            Ce guide d'entretien utilisateur constitue un outil essentiel pour recueillir des retours qualitatifs après le déploiement de Sotto dans les établissements partenaires. Conçu pour être à la fois rigoureux et flexible, il permet d'évaluer l'impact réel de notre système vocal IA sur les opérations quotidiennes des restaurants et d'identifier les axes d'amélioration prioritaires.
          </p>
          <p className="mb-4 text-[#1A2A40]">L'objectif de ces entretiens est double :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[#1A2A40]">
            <li>Mesurer l'adoption et la satisfaction des différentes parties prenantes (propriétaires, managers, serveurs, cuisiniers)</li>
            <li>Collecter des insights concrets pour orienter nos prochaines itérations produit</li>
          </ul>
          <p className="text-[#1A2A40]">
            Ce document structure une approche conversationnelle qui privilégie les réponses ouvertes tout en permettant une analyse comparative entre établissements.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6 border-l-4 border-[#D47D5A] pl-3">
          Préparation de l'entretien
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#87A28F] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Profils à interviewer</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F5F5F0]">
                  <tr>
                    <th className="px-3 py-3 text-left text-sm font-medium text-[#1A2A40]">Profil</th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-[#1A2A40]">Nombre</th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-[#1A2A40]">Durée recommandée</th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-[#1A2A40]">Focus principal</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Propriétaire/Manager</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">1</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">45-60 min</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Impact business, ROI, vision stratégique</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Chef de salle</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">1</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">30-45 min</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Organisation du service, coordination</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Serveurs</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">2-3</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">20-30 min</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Expérience quotidienne, ergonomie</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Personnel de cuisine</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">1-2</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">20-30 min</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Communication salle-cuisine, efficacité</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#D4B483] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Matériel nécessaire</h3>
            <ul className="space-y-3 text-[#1A2A40]">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Enregistreur audio (avec autorisation préalable)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Notes d'observation pré-remplies avec données contextuelles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Formulaire de consentement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Carnet pour observations complémentaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Guide d'entretien imprimé (ce document)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#1A2A40] hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Environnement idéal</h3>
          <ul className="space-y-3 text-[#1A2A40]">
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Espace calme, à l'écart de l'activité du restaurant</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Moment choisi en dehors des pics d'activité</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Durée communiquée clairement au participant</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Pas d'écrans visibles pour éviter les distractions</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6 border-l-4 border-[#D47D5A] pl-3">
          Structure de l'entretien
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">1. Introduction (5 minutes)</h3>
            <ul className="space-y-3 mb-4 text-[#1A2A40]">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Présentation de l'interviewer et rappel de l'objectif de l'entretien</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Confirmation de la confidentialité et demande d'autorisation d'enregistrement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Explication du déroulement et de la durée</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Questions de mise en contexte :</span>
              </li>
            </ul>
            <div className="bg-[#F5F5F0] p-4 rounded-md mb-4 italic text-[#1A2A40]">
              "Pouvez-vous me décrire brièvement votre rôle dans l'établissement et depuis combien de temps vous y travaillez ?"
            </div>
            <div className="bg-[#F5F5F0] p-4 rounded-md italic text-[#1A2A40]">
              "Quelle était votre première réaction quand vous avez appris que le restaurant allait adopter un système vocal comme Sotto ?"
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">2. Expérience d'adoption (10 minutes)</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions principales</h4>
              <ul className="space-y-2 mb-4 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment s'est déroulée votre phase d'apprentissage avec Sotto ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Combien de temps vous a-t-il fallu pour vous sentir à l'aise avec le système ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quels aspects de la formation vous ont semblé particulièrement utiles ou insuffisants ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment décririez-vous l'impact initial sur vos habitudes de travail ?</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions d'approfondissement</h4>
              <ul className="space-y-2 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Pouvez-vous me raconter un moment où vous avez eu une difficulté avec le système ? Comment l'avez-vous surmontée ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment vos collègues ont-ils réagi à l'introduction de Sotto ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous remarqué des différences d'adaptation selon les profils (âge, expérience, etc.) ?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">3. Impact opérationnel (15 minutes)</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions principales</h4>
              <ul className="space-y-2 mb-4 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>En quoi Sotto a-t-il modifié votre façon de travailler au quotidien ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quelles tâches sont devenues plus faciles ? Plus difficiles ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment évalueriez-vous l'impact sur :</span>
                  <ul className="ml-6 mt-2 space-y-1 text-[#1A2A40]">
                    <li>• La rapidité du service</li>
                    <li>• La précision des commandes</li>
                    <li>• La communication entre les équipes</li>
                    <li>• Votre niveau de stress/confort pendant le service</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions d'approfondissement</h4>
              <ul className="space-y-2 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Pouvez-vous quantifier le gain de temps sur certaines opérations spécifiques ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment le système réagit-il pendant les périodes de forte affluence ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous observé des changements dans l'organisation spatiale du restaurant ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment les nouveaux employés s'intègrent-ils depuis l'adoption de Sotto ?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">4. Expérience technique (10 minutes)</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions principales</h4>
              <ul className="space-y-2 mb-4 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment évalueriez-vous la fiabilité du système sur une échelle de 1 à 10 ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quels sont les principaux défis techniques que vous rencontrez ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment trouvez-vous l'expérience physique avec les oreillettes ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quelles fonctionnalités utilisez-vous le plus fréquemment ?</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions d'approfondissement</h4>
              <ul className="space-y-2 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Dans quelles circonstances avez-vous rencontré des problèmes de reconnaissance vocale ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment gérez-vous les situations où le système ne comprend pas correctement ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous remarqué une amélioration de la performance au fil du temps ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment évaluez-vous l'autonomie et la gestion de la batterie des oreillettes ?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">5. Impact sur l'expérience client (10 minutes)</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions principales</h4>
              <ul className="space-y-2 mb-4 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment les clients ont-ils réagi au nouveau système ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous reçu des commentaires directs des clients à ce sujet ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous observé des changements dans la qualité des interactions avec les clients ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment le système influence-t-il la perception de votre établissement ?</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions d'approfondissement</h4>
              <ul className="space-y-2 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Pouvez-vous partager une anecdote positive concernant la réaction d'un client ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Y a-t-il eu des situations où le système a créé une gêne vis-à-vis des clients ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous observé un impact sur les pourboires ou la fidélisation ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment décririez-vous l'ambiance générale du restaurant depuis l'adoption de Sotto ?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">6. Suggestions d'amélioration (10 minutes)</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions principales</h4>
              <ul className="space-y-2 mb-4 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Si vous pouviez améliorer trois aspects de Sotto, quels seraient-ils ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quelles fonctionnalités supplémentaires seraient les plus utiles pour vous ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Y a-t-il des commandes vocales ou des interactions que vous trouvez contre-intuitives ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment pourrait-on simplifier davantage votre expérience quotidienne ?</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions d'approfondissement</h4>
              <ul className="space-y-2 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous développé des "astuces" personnelles pour mieux utiliser le système ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quels aspects de votre travail ne sont pas encore suffisamment pris en charge par Sotto ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment imaginez-vous l'évolution du système dans les prochains mois ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Si vous deviez conseiller un autre établissement qui envisage d'adopter Sotto, que leur diriez-vous ?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#87A28F] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">7. Impact business (spécifique aux propriétaires/managers)</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions principales</h4>
              <ul className="space-y-2 mb-4 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quel impact Sotto a-t-il eu sur vos indicateurs de performance clés ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Avez-vous observé des changements dans :</span>
                  <ul className="ml-6 mt-2 space-y-1 text-[#1A2A40]">
                    <li>• Le chiffre d'affaires</li>
                    <li>• La rotation des tables</li>
                    <li>• Les coûts opérationnels</li>
                    <li>• La satisfaction client</li>
                    <li>• La rétention du personnel</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-2">Questions d'approfondissement</h4>
              <ul className="space-y-2 text-[#1A2A40]">
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment évaluez-vous le retour sur investissement jusqu'à présent ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quels bénéfices inattendus avez-vous constatés ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Quels défis business persistent malgré l'adoption de Sotto ?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span>Comment le système s'intègre-t-il dans votre vision à long terme pour l'établissement ?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#D4B483] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-3">Conclusion de l'entretien (5 minutes)</h3>
            <ul className="space-y-2 text-[#1A2A40]">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Résumé des points clés abordés</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Question ouverte finale : "Y a-t-il autre chose que vous aimeriez partager à propos de votre expérience avec Sotto ?"</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Remerciements pour le temps accordé</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Explication des prochaines étapes et de la façon dont les retours seront utilisés</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Invitation à partager des idées supplémentaires qui pourraient survenir ultérieurement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6 border-l-4 border-[#D47D5A] pl-3">
          Analyse post-entretien
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#87A28F] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Grille d'évaluation rapide</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F5F5F0]">
                  <tr>
                    <th className="px-3 py-3 text-left text-sm font-medium text-[#1A2A40]">Dimension</th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-[#1A2A40]">Score (1-5)</th>
                    <th className="px-3 py-3 text-left text-sm font-medium text-[#1A2A40]">Observations clés</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Facilité d'adoption</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Satisfaction générale</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Performance technique</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Impact opérationnel</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Réaction client</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]">Valeur perçue</td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                    <td className="px-3 py-2 text-sm text-[#1A2A40]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#D4B483] hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Synthèse qualitative</h3>
            <ul className="space-y-3 text-[#1A2A40]">
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Points forts mentionnés de façon récurrente</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Irritants principaux à adresser</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Citations marquantes (verbatims)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Suggestions d'amélioration prioritaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Observations sur le langage corporel et les réactions non-verbales</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span>Divergences notables entre les différents profils interviewés</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6 border-l-4 border-[#D47D5A] pl-3">
          Bonnes pratiques pour l'interviewer
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { text: "Adopter une posture d'écoute active : montrer de l'intérêt sans interrompre", icon: "👂" },
            { text: "Éviter les questions dirigées : ne pas suggérer de réponses", icon: "🚫" },
            { text: "Creuser les réponses vagues : demander des exemples concrets", icon: "🔍" },
            { text: "Rester neutre : ne pas défendre le produit face aux critiques", icon: "⚖️" },
            { text: "Respecter les silences : laisser le temps à la réflexion", icon: "⏱️" },
            { text: "Observer le non-verbal : noter les hésitations, l'enthousiasme, etc.", icon: "👀" },
            { text: "S'adapter au profil : ajuster le niveau technique selon l'interlocuteur", icon: "🔄" },
            { text: "Gérer le temps : s'assurer de couvrir tous les thèmes essentiels", icon: "⏰" }
          ].map((practice, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow flex items-start">
              <div className="text-2xl mr-3 animate-float">{practice.icon}</div>
              <p className="text-[#1A2A40] font-medium">{practice.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#1A2A40] mb-6 border-l-4 border-[#D47D5A] pl-3">
          Conclusion
        </h2>
        
        <div className="bg-[#F5F5F0] p-6 rounded-lg shadow-md mb-8">
          <p className="mb-4 text-[#1A2A40]">
            Ce guide d'entretien constitue un cadre structuré mais flexible pour recueillir des retours qualitatifs approfondis sur l'expérience Sotto. Les insights collectés alimenteront directement notre processus d'amélioration continue et nous permettront d'affiner notre proposition de valeur pour mieux répondre aux besoins réels des établissements.
          </p>
          <p className="mb-4 text-[#1A2A40]">
            Les entretiens doivent être menés régulièrement (idéalement à 1 semaine, 1 mois, puis 3 mois après le déploiement) pour capturer l'évolution de l'expérience utilisateur dans le temps. Chaque vague d'entretiens fera l'objet d'une synthèse partagée avec l'équipe produit et servira à prioriser les développements futurs.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#1A2A40]">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">Prochaines étapes :</h3>
          <ul className="space-y-3 text-[#1A2A40]">
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Programmer les entretiens avec les établissements pilotes</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Former les membres de l'équipe à la conduite d'entretiens</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Mettre en place un système de partage des insights en temps réel</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#D47D5A] mr-2">•</span>
              <span>Établir un processus de suivi des améliorations suggérées</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-12 p-4 bg-gray-100 border-l-4 border-[#D47D5A] rounded-md text-sm text-[#1A2A40] italic">
        Document interne - Ne pas partager en dehors de l'équipe Sotto
      </div>
    </div>
  );
};

export default ResourceContent;