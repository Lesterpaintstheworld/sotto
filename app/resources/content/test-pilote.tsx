const ResourceContent = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-[#0a0a0a] text-[#1A2A40] dark:text-[#F5F5F0]">
      <div className="space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
            Résultats des Tests Pilotes
          </h1>
          <p className="text-xl italic text-[#D47D5A] dark:text-[#D47D5A] max-w-3xl mx-auto">
            Une analyse approfondie des déploiements initiaux de Sotto dans divers établissements de restauration
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D4B483] pb-2">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            La transformation d'un restaurant par l'adoption d'une technologie vocale représente un changement significatif dans les habitudes opérationnelles. Pour valider notre approche et affiner notre solution, nous avons déployé Sotto dans plusieurs établissements aux profils variés pendant une période de trois mois. Ce document présente les résultats détaillés de ces tests pilotes, les défis rencontrés et les enseignements qui ont guidé l'évolution de notre système. Les données recueillies démontrent non seulement l'efficacité de Sotto mais également son impact profond sur l'expérience client et le bien-être du personnel.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D4B483] pb-2">
            Méthodologie des tests
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Établissements participants
            </h3>
            <p className="mb-4">
              Nous avons sélectionné un panel diversifié de restaurants pour garantir la représentativité de nos résultats :
            </p>
            
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 border border-[#87A28F]/30 rounded-lg">
                <thead>
                  <tr className="bg-[#87A28F]/20 text-[#1A2A40] dark:text-[#F5F5F0]">
                    <th className="py-3 px-4 text-left border-b">Type d'établissement</th>
                    <th className="py-3 px-4 text-left border-b">Capacité</th>
                    <th className="py-3 px-4 text-left border-b">Service</th>
                    <th className="py-3 px-4 text-left border-b">Ambiance sonore</th>
                    <th className="py-3 px-4 text-left border-b">Localisation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                    <td className="py-3 px-4 border-b">Bistrot traditionnel</td>
                    <td className="py-3 px-4 border-b">45 couverts</td>
                    <td className="py-3 px-4 border-b">Service à table</td>
                    <td className="py-3 px-4 border-b">Modérée</td>
                    <td className="py-3 px-4 border-b">Centre-ville Paris</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                    <td className="py-3 px-4 border-b">Restaurant gastronomique</td>
                    <td className="py-3 px-4 border-b">30 couverts</td>
                    <td className="py-3 px-4 border-b">Service haute qualité</td>
                    <td className="py-3 px-4 border-b">Calme</td>
                    <td className="py-3 px-4 border-b">Quartier résidentiel Lyon</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                    <td className="py-3 px-4 border-b">Brasserie animée</td>
                    <td className="py-3 px-4 border-b">120 couverts</td>
                    <td className="py-3 px-4 border-b">Service rapide</td>
                    <td className="py-3 px-4 border-b">Élevée</td>
                    <td className="py-3 px-4 border-b">Zone touristique Marseille</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                    <td className="py-3 px-4 border-b">Restaurant italien</td>
                    <td className="py-3 px-4 border-b">60 couverts</td>
                    <td className="py-3 px-4 border-b">Service familial</td>
                    <td className="py-3 px-4 border-b">Modérée à élevée</td>
                    <td className="py-3 px-4 border-b">Centre commercial Bordeaux</td>
                  </tr>
                  <tr className="hover:bg-[#F5F5F0] dark:hover:bg-[#1A2A40]/80 transition-colors">
                    <td className="py-3 px-4">Café-restaurant</td>
                    <td className="py-3 px-4">35 couverts</td>
                    <td className="py-3 px-4">Service décontracté</td>
                    <td className="py-3 px-4">Variable</td>
                    <td className="py-3 px-4">Quartier d'affaires Nantes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Protocole d'évaluation
            </h3>
            <p className="mb-4">
              Chaque établissement a suivi un processus d'intégration en trois phases :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/30">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                  Phase d'installation et formation <span className="text-[#D47D5A]">(1 semaine)</span>
                </h4>
                <ul className="space-y-2 text-[#1A2A40] dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Audit de l'infrastructure WiFi et optimisation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Formation du personnel par sessions de 2 heures
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Période d'adaptation avec support technique sur site
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/30">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                  Phase de transition <span className="text-[#D47D5A]">(2 semaines)</span>
                </h4>
                <ul className="space-y-2 text-[#1A2A40] dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Utilisation parallèle de Sotto et des systèmes existants
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Ajustements quotidiens et personnalisation du vocabulaire
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Collecte de feedback immédiat du personnel
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/30">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                  Phase d'évaluation complète <span className="text-[#D47D5A]">(10 semaines)</span>
                </h4>
                <ul className="space-y-2 text-[#1A2A40] dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Utilisation exclusive de Sotto pour les opérations
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Collecte de données quantitatives et qualitatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Entretiens réguliers avec personnel et management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D4B483] pb-2">
            Résultats quantitatifs
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Performance opérationnelle
            </h3>
            <p className="mb-4">
              Les améliorations mesurées dans les opérations quotidiennes ont dépassé nos projections initiales :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#D47D5A] mr-3">-32%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Réduction du temps de prise de commande</div>
                </div>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#D47D5A] mr-3">-41%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Diminution des erreurs de commande</div>
                </div>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#87A28F] mr-3">-4,2</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Minutes de réduction du temps entre commande et service</div>
                </div>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#87A28F] mr-3">+18%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Amélioration de la rotation des tables en période d'affluence</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Impact économique
            </h3>
            <p className="mb-4">
              L'adoption de Sotto a généré des bénéfices économiques tangibles :
            </p>
            
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://sotto.ai/images/impact-economique.png" 
                alt="Graphique d'impact économique" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#D4B483] mr-3">+8,5%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Augmentation du ticket moyen</div>
                </div>
                <p className="text-sm mt-2 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Attribuée à une meilleure disponibilité du personnel pour suggérer des accompagnements</p>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#D4B483] mr-3">-27%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Réduction des coûts d'équipement</div>
                </div>
                <p className="text-sm mt-2 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Sur les frais de maintenance des systèmes d'encaissement</p>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#D4B483] mr-3">+15%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Optimisation de la masse salariale</div>
                </div>
                <p className="text-sm mt-2 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">Capacité à servir plus de clients à personnel constant</p>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#D4B483] mr-3">5,7</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Mois pour atteindre le retour sur investissement</div>
                </div>
                <p className="text-sm mt-2 text-[#1A2A40]/70 dark:text-[#F5F5F0]/70">En moyenne sur l'ensemble des établissements</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Satisfaction et expérience
            </h3>
            <p className="mb-4">
              Les enquêtes de satisfaction ont révélé des améliorations significatives :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#87A28F] mr-3">+31</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Satisfaction du personnel (NPS)</div>
                </div>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#87A28F] mr-3">+24</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Satisfaction client (CSAT)</div>
                </div>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#87A28F] mr-3">-36%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Réduction des plaintes liées au service</div>
                </div>
              </div>
              <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-[#87A28F] mr-3">+22%</div>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Augmentation des pourboires</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D4B483] pb-2">
            Observations qualitatives
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Adaptation du personnel
            </h3>
            <p className="mb-4">
              L'adoption de Sotto par les équipes a suivi une courbe d'apprentissage prévisible mais encourageante :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/30 transform hover:-translate-y-1 transition-transform">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
                  <span className="bg-[#D47D5A] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">1</span>
                  Phase initiale <span className="text-[#D47D5A] ml-1">(1-3 jours)</span>
                </h4>
                <ul className="space-y-2 text-[#1A2A40] dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Réticence naturelle et scepticisme
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Frustrations liées à l'adaptation au langage vocal
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D47D5A] mr-2">•</span>
                    Questions fréquentes sur la fiabilité du système
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/30 transform hover:-translate-y-1 transition-transform">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
                  <span className="bg-[#87A28F] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">2</span>
                  Phase d'accommodation <span className="text-[#87A28F] ml-1">(4-10 jours)</span>
                </h4>
                <ul className="space-y-2 text-[#1A2A40] dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#87A28F] mr-2">•</span>
                    Familiarisation avec les commandes vocales essentielles
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] mr-2">•</span>
                    Diminution progressive du recours au support
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#87A28F] mr-2">•</span>
                    Premiers signes d'appréciation des avantages pratiques
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#87A28F]/30 transform hover:-translate-y-1 transition-transform">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0] flex items-center">
                  <span className="bg-[#D4B483] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">3</span>
                  Phase d'adoption <span className="text-[#D4B483] ml-1">(11+ jours)</span>
                </h4>
                <ul className="space-y-2 text-[#1A2A40] dark:text-[#F5F5F0]/90">
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    Maîtrise des fonctionnalités avancées
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    Personnalisation des interactions selon les préférences
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4B483] mr-2">•</span>
                    Réticence à revenir aux systèmes traditionnels
                  </li>
                </ul>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-[#D47D5A] pl-4 italic bg-[#F5F5F0]/50 dark:bg-[#1A2A40]/30 p-4 rounded-r-lg mb-6">
              <p className="text-[#1A2A40] dark:text-[#F5F5F0] mb-2">
                "Au début, je pensais que ce serait juste un gadget de plus. Après deux semaines, je ne pourrais plus m'en passer. Mes mains sont libres, je peux me concentrer sur mes clients et non sur un écran."
              </p>
              <footer className="text-[#D47D5A]">— Julien, Chef de rang, Bistrot parisien</footer>
            </blockquote>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Défis spécifiques par type d'établissement
            </h3>
            <p className="mb-4">
              Chaque environnement a présenté des défis uniques qui ont enrichi notre compréhension :
            </p>
            
            <div className="space-y-6 mb-6">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D4B483]">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                  Restaurant gastronomique
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-[#D4B483] mb-2">Forces</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Précision des commandes complexes, discrétion appréciée par la clientèle
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#D47D5A] mb-2">Défis</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Nécessité d'un vocabulaire plus étendu pour les préparations spécifiques
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#87A28F] mb-2">Adaptation</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Enrichissement du lexique gastronomique et ajustement de la sensibilité vocale
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D47D5A]">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                  Brasserie à fort volume
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-[#D4B483] mb-2">Forces</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Gain de temps considérable, réduction du stress en période d'affluence
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#D47D5A] mb-2">Défis</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Performances dans un environnement très bruyant
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#87A28F] mb-2">Adaptation</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Amélioration des algorithmes de filtrage du bruit, ajout d'un mode "haute intensité"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#87A28F]">
                <h4 className="text-lg font-semibold mb-3 text-[#1A2A40] dark:text-[#F5F5F0]">
                  Café-restaurant à service variable
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-[#D4B483] mb-2">Forces</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Flexibilité entre service rapide et service à table
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#D47D5A] mb-2">Défis</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Transitions entre différents modes d'opération
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#87A28F] mb-2">Adaptation</h5>
                    <p className="text-[#1A2A40] dark:text-[#F5F5F0]/90">
                      Développement de profils d'utilisation adaptables selon les moments de la journée
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D4B483] pb-2">
            Enseignements et améliorations
          </h2>
          <p className="mb-6">
            Les tests pilotes ont directement influencé l'évolution de Sotto, conduisant à plusieurs améliorations significatives :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#D47D5A] flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Améliorations techniques
              </h3>
              <ul className="space-y-3">
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#D47D5A] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Optimisation acoustique :</span> Nouveaux algorithmes de filtrage pour environnements bruyants
                  </div>
                </li>
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#D47D5A] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Mode hors-ligne renforcé :</span> Capacité à fonctionner pendant 20 minutes sans connexion
                  </div>
                </li>
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#D47D5A] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Batterie optimisée :</span> Extension de l'autonomie de 6 à 8 heures par charge complète
                  </div>
                </li>
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#D47D5A] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Reconnaissance contextuelle :</span> Meilleure interprétation des commandes partielles ou ambiguës
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#D47D5A] flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Améliorations fonctionnelles
              </h3>
              <ul className="space-y-3">
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#87A28F] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Mode formation accélérée :</span> Programme d'intégration réduit à 45 minutes
                  </div>
                </li>
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#87A28F] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Commandes groupées :</span> Possibilité de saisir plusieurs commandes en une seule interaction
                  </div>
                </li>
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#87A28F] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Alertes prioritaires :</span> Système de hiérarchisation des notifications vocales
                  </div>
                </li>
                <li className="bg-[#F5F5F0]/70 dark:bg-[#1A2A40]/30 p-3 rounded-md flex items-start">
                  <span className="text-[#87A28F] font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Intégration inventaire :</span> Alerte automatique sur les plats en rupture de stock
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Bonnes pratiques identifiées
            </h3>
            <p className="mb-4">
              L'observation des utilisateurs les plus performants a permis d'identifier des pratiques optimales :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border border-[#87A28F]/20 flex">
                <div className="bg-[#D4B483] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-medium mb-1">Briefing d'équipe quotidien</h4>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">5 minutes pour partager les retours sur l'utilisation</p>
                </div>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border border-[#87A28F]/20 flex">
                <div className="bg-[#D4B483] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-medium mb-1">Désignation d'un "champion Sotto"</h4>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Dans chaque équipe pour accompagner les nouveaux utilisateurs</p>
                </div>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border border-[#87A28F]/20 flex">
                <div className="bg-[#D4B483] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-medium mb-1">Sessions de micro-formation</h4>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">10 minutes hebdomadaires sur des fonctionnalités spécifiques</p>
                </div>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-md border border-[#87A28F]/20 flex">
                <div className="bg-[#D4B483] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-medium mb-1">Personnalisation du vocabulaire</h4>
                  <p className="text-sm text-[#1A2A40]/80 dark:text-[#F5F5F0]/80">Adapté aux spécificités du menu et de l'établissement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D4B483] pb-2">
            Témoignages des établissements pilotes
          </h2>
          
          <div className="space-y-6">
            <blockquote className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md border-l-4 border-[#D47D5A] animate-float">
              <p className="text-lg italic mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                "Nous avons gagné en moyenne 30 secondes par table lors de la prise de commande. Cela peut sembler peu, mais multiplié par 80 tables par service, c'est un gain considérable qui nous permet d'être plus disponibles pour nos clients."
              </p>
              <footer className="font-medium text-[#D47D5A]">— Marie, Directrice de brasserie, Marseille</footer>
            </blockquote>
            
            <blockquote className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md border-l-4 border-[#87A28F] animate-float" style={{ animationDelay: "2s" }}>
              <p className="text-lg italic mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                "La différence la plus frappante est l'atmosphère en cuisine. Sans les sonneries et les cris, la communication est plus fluide et le stress a diminué de façon spectaculaire."
              </p>
              <footer className="font-medium text-[#87A28F]">— Thomas, Chef cuisinier, Lyon</footer>
            </blockquote>
            
            <blockquote className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg shadow-md border-l-4 border-[#D4B483] animate-float" style={{ animationDelay: "4s" }}>
              <p className="text-lg italic mb-4 text-[#1A2A40] dark:text-[#F5F5F0]">
                "Mes serveurs passaient leur temps à faire des allers-retours entre les tables et la caisse. Maintenant, ils restent présents en salle, ce qui a complètement transformé l'expérience client."
              </p>
              <footer className="font-medium text-[#D4B483]">— Sophie, Propriétaire de restaurant italien, Bordeaux</footer>
            </blockquote>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#1A2A40] dark:text-[#F5F5F0] border-b border-[#D4B483] pb-2">
            Conclusion et perspectives
          </h2>
          
          <div className="mb-8">
            <p className="text-lg leading-relaxed mb-4">
              Les tests pilotes de Sotto ont démontré que l'interface vocale représente bien plus qu'une simple évolution technologique pour la restauration — c'est une transformation fondamentale de l'expérience de service. Les résultats quantitatifs et qualitatifs confirment notre hypothèse initiale : en libérant le personnel des contraintes des interfaces à écran, nous permettons un recentrage sur l'humain et la qualité de service.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Les défis identifiés ont enrichi notre compréhension des besoins réels des restaurateurs et ont directement influencé l'évolution de notre solution. Chaque environnement unique a contribué à rendre Sotto plus robuste, adaptable et intuitive.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Prochaines étapes
            </h3>
            <p className="mb-4">
              Suite à ces résultats encourageants, nous élargissons notre programme pilote à 50 établissements supplémentaires, incluant de nouvelles typologies :
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20 hover:border-[#D47D5A]/50 transition-colors">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-[#D47D5A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Restaurants de chaîne standardisés</div>
                </div>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20 hover:border-[#D47D5A]/50 transition-colors">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-[#D47D5A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Établissements de restauration rapide haut de gamme</div>
                </div>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20 hover:border-[#D47D5A]/50 transition-colors">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-[#D47D5A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Bars à cocktails avec service de tapas</div>
                </div>
              </div>
              <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/40 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#87A28F]/20 hover:border-[#D47D5A]/50 transition-colors">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-[#D47D5A] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="text-[#1A2A40] dark:text-[#F5F5F0]">Food courts et espaces de restauration partagés</div>
                </div>
              </div>
            </div>
            
            <p className="text-lg">
              Cette diversification nous permettra d'affiner encore davantage notre solution avant son déploiement à grande échelle prévu pour le trimestre prochain.
            </p>
          </div>
        </section>

        <div className="mt-16 border-t border-[#D4B483]/30 pt-8">
          <div className="bg-[#1A2A40]/5 dark:bg-[#F5F5F0]/5 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#D47D5A]">
              Vous souhaitez participer à la prochaine phase de tests ou en savoir plus sur les résultats détaillés ?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="mailto:pilotes@sotto.ai" 
                className="px-6 py-3 bg-[#D47D5A] text-white rounded-lg hover:bg-[#D47D5A]/90 transition-colors shadow-sm hover:shadow-md flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contactez notre équipe
              </a>
              <a 
                href="https://sotto.ai/demo" 
                className="px-6 py-3 bg-[#1A2A40] text-white dark:bg-[#F5F5F0] dark:text-[#1A2A40] rounded-lg hover:bg-[#1A2A40]/90 dark:hover:bg-[#F5F5F0]/90 transition-colors shadow-sm hover:shadow-md flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Réservez une démonstration
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResourceContent;