const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 resource-content">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1A2A40] mb-4">
          Brand Book Sotto
        </h1>
        <div className="w-24 h-1 bg-[#D47D5A] mx-auto rounded-full"></div>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Introduction
        </h2>
        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
          <p className="text-[#505A64] leading-relaxed">
            Ce guide définit l'identité complète de la marque Sotto, système vocal IA qui révolutionne l'expérience de restauration en éliminant les interfaces à écran. Plus qu'un simple manuel graphique, ce document incarne notre mission : libérer la restauration des barrières technologiques visibles pour recentrer l'attention sur l'humain et l'expérience culinaire. Que vous soyez partenaire, collaborateur ou restaurateur, ce guide vous aidera à comprendre et appliquer correctement les principes qui font de Sotto une marque distinctive et cohérente.
          </p>
        </div>
      </section>

      {/* Essence de la marque */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Essence de la marque
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Notre mission
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed">
              Sotto transforme l'expérience de la restauration en éliminant toutes les interfaces à écran au profit d'un système vocal IA centralisé. En connectant le personnel via des oreillettes discrètes, nous fluidifions les opérations tout en recentrant l'attention sur l'humain et l'expérience culinaire.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Notre positionnement
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-4">
              Sotto est le premier système d'encaissement entièrement vocal pour la restauration, partie intégrante d'un écosystème plus large qui vise à:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Centraliser les flux: commandes, paiements, reversements",
                "Intégrer organiquement tous les outils autour de l'expérience client",
                "Offrir une solution 100% intégrée et pilotée",
                "Libérer l'espace physique et l'attention du personnel"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border border-[#D47D5A]/20 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#D47D5A] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                  <p className="text-[#505A64]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Notre personnalité
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-6">
              La personnalité de Sotto peut se résumer en quatre traits essentiels:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden">
                <thead className="bg-[#1A2A40] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium">Trait</th>
                    <th className="py-3 px-4 text-left font-medium">Manifestation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium text-[#1A2A40]">Discret</td>
                    <td className="py-3 px-4 text-[#505A64]">Comme un bon serveur, Sotto est présent sans jamais s'imposer</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium text-[#1A2A40]">Efficace</td>
                    <td className="py-3 px-4 text-[#505A64]">Nous simplifions les tâches complexes avec une élégance naturelle</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium text-[#1A2A40]">Élégant</td>
                    <td className="py-3 px-4 text-[#505A64]">Notre approche privilégie la sobriété et le raffinement</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-[#1A2A40]">Attentif</td>
                    <td className="py-3 px-4 text-[#505A64]">Nous anticipons les besoins avec une compréhension contextuelle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Identité visuelle */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Identité visuelle
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Palette de couleurs
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-6">
              Notre palette reflète l'équilibre entre professionnalisme et chaleur humaine:
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-3">Couleurs primaires:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-sm">
                  <div className="w-16 h-16 rounded-md bg-[#1A2A40] mr-4"></div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Bleu profond</p>
                    <p className="text-sm text-[#505A64]">#1A2A40</p>
                    <p className="text-sm text-[#505A64]">Confiance, professionnalisme, stabilité</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-sm">
                  <div className="w-16 h-16 rounded-md bg-[#505A64] mr-4"></div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Gris ardoise</p>
                    <p className="text-sm text-[#505A64]">#505A64</p>
                    <p className="text-sm text-[#505A64]">Sophistication, neutralité</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-3">Couleurs secondaires:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-sm">
                  <div className="w-16 h-16 rounded-md bg-[#D47D5A] mr-4"></div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Terracotta doux</p>
                    <p className="text-sm text-[#505A64]">#D47D5A</p>
                    <p className="text-sm text-[#505A64]">Chaleur, hospitalité, lien avec la restauration</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-sm">
                  <div className="w-16 h-16 rounded-md bg-[#F5F5F0] border border-gray-200 dark:border-gray-700 mr-4"></div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Blanc cassé</p>
                    <p className="text-sm text-[#505A64]">#F5F5F0</p>
                    <p className="text-sm text-[#505A64]">Espace, clarté, simplicité</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-3">Accents:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-sm">
                  <div className="w-16 h-16 rounded-md bg-[#87A28F] mr-4"></div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Vert sauge</p>
                    <p className="text-sm text-[#505A64]">#87A28F</p>
                    <p className="text-sm text-[#505A64]">Fraîcheur, calme, naturel</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden shadow-sm">
                  <div className="w-16 h-16 rounded-md bg-[#D4B483] mr-4"></div>
                  <div>
                    <p className="font-medium text-[#1A2A40]">Or subtil</p>
                    <p className="text-sm text-[#505A64]">#D4B483</p>
                    <p className="text-sm text-[#505A64]">Qualité, excellence discrète</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-3">Application des couleurs</h4>
              <ul className="space-y-2 text-[#505A64]">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Utilisez le bleu profond pour les éléments principaux et les titres
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Réservez le terracotta pour les points d'accent et appels à l'action
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Le blanc cassé sert de fond principal, créant de l'espace et de la légèreté
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Les accents doivent être utilisés avec parcimonie pour souligner des informations importantes
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Typographie
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-6">
              Toute notre communication utilise la famille de polices <strong>Geist</strong>:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <p className="font-light text-lg text-[#1A2A40]">Geist Light — Grands blocs de texte, citations</p>
              </div>
              <div className="p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <p className="font-normal text-lg text-[#1A2A40]">Geist Regular — Corps de texte standard</p>
              </div>
              <div className="p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <p className="font-medium text-lg text-[#1A2A40]">Geist Medium — Sous-titres, emphase modérée</p>
              </div>
              <div className="p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <p className="font-semibold text-lg text-[#1A2A40]">Geist SemiBold — Titres, points importants</p>
              </div>
              <div className="p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <p className="font-bold text-lg text-[#1A2A40]">Geist Bold — Utilisé rarement, uniquement pour un impact maximal</p>
              </div>
            </div>
            
            <p className="text-[#505A64] leading-relaxed">
              La hiérarchie typographique doit toujours être claire et aérée, avec suffisamment d'espace blanc pour faciliter la lecture.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Éléments graphiques
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <div className="mb-8">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-3">Logo</h4>
              <p className="text-[#505A64] leading-relaxed mb-4">
                Notre logo représente un "S" stylisé qui évoque une onde sonore subtile, symbolisant notre technologie vocale tout en restant élégant et discret. L'espace négatif est aussi important que la forme elle-même.
              </p>
              <div className="p-8 bg-white dark:bg-[#1A2A40]/50 rounded-lg flex justify-center items-center border border-gray-200 dark:border-gray-700">
                <div className="w-24 h-24 bg-[#1A2A40] dark:bg-[#D47D5A] rounded-full flex items-center justify-center animate-float">
                  <span className="text-4xl font-bold text-white">S</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-[#1A2A40] mb-3">Règles d'utilisation du logo</h4>
              <ul className="space-y-2 text-[#505A64]">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Maintenir une zone d'exclusion autour du logo équivalente à la hauteur du "S"
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Ne jamais déformer, réorienter ou modifier les proportions du logo
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Sur fond coloré, utiliser uniquement la version monochrome blanche
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                  Taille minimale: 20mm en impression, 60px en digital
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-[#1A2A40] mb-3">Iconographie</h4>
              <p className="text-[#505A64] leading-relaxed mb-4">
                Notre système d'icônes se caractérise par:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Lignes fines et épurées",
                  "Coins légèrement arrondis",
                  "Style cohérent et minimaliste",
                  "Signification immédiatement compréhensible"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border border-[#87A28F]/30 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#87A28F]/20 flex items-center justify-center mr-3">
                      <div className="w-5 h-5 bg-[#87A28F] rounded-sm"></div>
                    </div>
                    <p className="text-[#505A64]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ton et voix */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Ton et voix
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Principes de communication
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-6">
              Notre communication écrite et verbale reflète notre personnalité de marque:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border-l-4 border-[#1A2A40]">
                <h4 className="font-medium text-[#1A2A40] mb-2">Concision</h4>
                <p className="text-[#505A64]">Nous allons droit au but, respectant le temps de nos interlocuteurs</p>
              </div>
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border-l-4 border-[#D47D5A]">
                <h4 className="font-medium text-[#1A2A40] mb-2">Clarté</h4>
                <p className="text-[#505A64]">Nous évitons le jargon technique inutile</p>
              </div>
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
                <h4 className="font-medium text-[#1A2A40] mb-2">Chaleur</h4>
                <p className="text-[#505A64]">Notre ton est professionnel mais jamais froid ou impersonnel</p>
              </div>
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border-l-4 border-[#D4B483]">
                <h4 className="font-medium text-[#1A2A40] mb-2">Contextualisation</h4>
                <p className="text-[#505A64]">Nous adaptons notre communication au contexte et à l'interlocuteur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Exemples de ton
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-[#1A2A40]/50 rounded-lg overflow-hidden">
                <thead className="bg-[#1A2A40] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium">Contexte</th>
                    <th className="py-3 px-4 text-left font-medium">À éviter</th>
                    <th className="py-3 px-4 text-left font-medium">À privilégier</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium text-[#1A2A40]">Confirmation de commande</td>
                    <td className="py-3 px-4 text-[#505A64] bg-red-50 dark:bg-red-900/10">"Votre requête a été traitée avec succès"</td>
                    <td className="py-3 px-4 text-[#505A64] bg-green-50 dark:bg-green-900/10">"Commande enregistrée pour la table 12"</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium text-[#1A2A40]">Assistance</td>
                    <td className="py-3 px-4 text-[#505A64] bg-red-50 dark:bg-red-900/10">"Une erreur système s'est produite"</td>
                    <td className="py-3 px-4 text-[#505A64] bg-green-50 dark:bg-green-900/10">"Je n'ai pas bien compris. Pourriez-vous reformuler?"</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-[#1A2A40]">Marketing</td>
                    <td className="py-3 px-4 text-[#505A64] bg-red-50 dark:bg-red-900/10">"Solution révolutionnaire basée sur l'IA"</td>
                    <td className="py-3 px-4 text-[#505A64] bg-green-50 dark:bg-green-900/10">"Libérez votre restaurant des écrans et recentrez-vous sur l'essentiel"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Voix de l'IA Sotto
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-6">
              La voix de notre système IA incarne notre marque dans son interaction quotidienne:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#D47D5A]/20 flex items-center justify-center mr-2">
                    <div className="w-4 h-4 bg-[#D47D5A] rounded-sm"></div>
                  </div>
                  <h4 className="font-medium text-[#1A2A40]">Tonalité</h4>
                </div>
                <p className="text-[#505A64]">Moyenne-grave, rassurante sans être autoritaire</p>
              </div>
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#D47D5A]/20 flex items-center justify-center mr-2">
                    <div className="w-4 h-4 bg-[#D47D5A] rounded-sm"></div>
                  </div>
                  <h4 className="font-medium text-[#1A2A40]">Rythme</h4>
                </div>
                <p className="text-[#505A64]">Naturel avec des pauses appropriées, jamais précipité</p>
              </div>
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#D47D5A]/20 flex items-center justify-center mr-2">
                    <div className="w-4 h-4 bg-[#D47D5A] rounded-sm"></div>
                  </div>
                  <h4 className="font-medium text-[#1A2A40]">Expressions</h4>
                </div>
                <p className="text-[#505A64]">Humaines et contextuelles, évitant les formulations robotiques</p>
              </div>
              <div className="p-4 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#D47D5A]/20 flex items-center justify-center mr-2">
                    <div className="w-4 h-4 bg-[#D47D5A] rounded-sm"></div>
                  </div>
                  <h4 className="font-medium text-[#1A2A40]">Confirmations</h4>
                </div>
                <p className="text-[#505A64]">Brèves et claires, sans verbiage inutile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photographie et imagerie */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Photographie et imagerie
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Style photographique
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-6">
              Notre approche visuelle privilégie:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-sm">
                <div className="h-40 bg-[#1A2A40]/10 dark:bg-[#F5F5F0]/10 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-[#1A2A40] font-medium">Authenticité</span>
                </div>
                <p className="text-[#505A64]">Situations réelles de service, jamais artificielles</p>
              </div>
              
              <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-sm">
                <div className="h-40 bg-[#1A2A40]/10 dark:bg-[#F5F5F0]/10 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-[#1A2A40] font-medium">Éclairage naturel</span>
                </div>
                <p className="text-[#505A64]">Ambiance chaleureuse et accueillante</p>
              </div>
              
              <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-sm">
                <div className="h-40 bg-[#1A2A40]/10 dark:bg-[#F5F5F0]/10 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-[#1A2A40] font-medium">Focus humain</span>
                </div>
                <p className="text-[#505A64]">L'accent est mis sur les personnes et les interactions</p>
              </div>
              
              <div className="bg-white dark:bg-[#1A2A40]/50 p-5 rounded-lg shadow-sm">
                <div className="h-40 bg-[#1A2A40]/10 dark:bg-[#F5F5F0]/10 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-[#1A2A40] font-medium">Absence d'écrans</span>
                </div>
                <p className="text-[#505A64]">Conformément à notre mission, nos visuels montrent des espaces libérés des interfaces technologiques</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
            Traitement visuel
          </h3>
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <p className="text-[#505A64] leading-relaxed mb-6">
              Pour maintenir une cohérence visuelle:
            </p>
            <ul className="space-y-3 text-[#505A64]">
              <li className="flex items-start p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Utiliser des traitements duotone subtils avec notre palette de couleurs
              </li>
              <li className="flex items-start p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Privilégier une profondeur de champ qui met en valeur les interactions humaines
              </li>
              <li className="flex items-start p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Appliquer une légère texture halftone pour ajouter de la chaleur
              </li>
              <li className="flex items-start p-3 bg-white dark:bg-[#1A2A40]/50 rounded-md">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Éviter les filtres excessifs qui dénaturent l'authenticité des scènes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Applications marketing */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Applications marketing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Site web et présence digitale
            </h3>
            <p className="text-[#505A64] leading-relaxed mb-4">
              Notre présence en ligne reflète nos valeurs:
            </p>
            <ul className="space-y-2 text-[#505A64]">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Design épuré avec beaucoup d'espace blanc
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Navigation intuitive et minimaliste
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Contenu visuel montrant le système en action sans mettre l'accent sur la technologie
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Témoignages authentiques de restaurateurs
              </li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Matériel commercial
            </h3>
            <p className="text-[#505A64] leading-relaxed mb-4">
              Nos documents imprimés respectent ces principes:
            </p>
            <ul className="space-y-2 text-[#505A64]">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Format élégant avec marges généreuses
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Hiérarchie d'information claire
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Infographies simplifiées plutôt que texte dense
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Papier toucher doux de haute qualité
              </li>
            </ul>
          </div>

          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
            <h3 className="text-xl font-medium text-[#1A2A40] mb-4">
              Événements et salons
            </h3>
            <p className="text-[#505A64] leading-relaxed mb-4">
              Notre présence physique est cohérente avec notre philosophie:
            </p>
            <ul className="space-y-2 text-[#505A64]">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Stand minimaliste évitant paradoxalement les écrans
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Démonstrations live avec personnel en situation réelle
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[#D47D5A] mt-2 mr-2"></span>
                Espace de discussion calme permettant des conversations de qualité
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Messages clés */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Messages clés
        </h2>

        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
          <p className="text-[#505A64] leading-relaxed mb-6">
            Selon les audiences, nos messages s'articulent autour de ces thèmes:
          </p>
          
          <div className="space-y-6">
            <div className="p-5 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border-l-4 border-[#D47D5A]">
              <h3 className="text-lg font-medium text-[#1A2A40] mb-2">Pour les propriétaires:</h3>
              <blockquote className="text-[#505A64] italic pl-4 border-l-2 border-[#D47D5A]/30">
                "Libérez votre restaurant des écrans et recentrez-vous sur l'essentiel: l'humain et la gastronomie."
              </blockquote>
            </div>
            
            <div className="p-5 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border-l-4 border-[#87A28F]">
              <h3 className="text-lg font-medium text-[#1A2A40] mb-2">Pour le personnel:</h3>
              <blockquote className="text-[#505A64] italic pl-4 border-l-2 border-[#87A28F]/30">
                "Une technologie qui s'adapte à vous, et non l'inverse."
              </blockquote>
            </div>
            
            <div className="p-5 bg-white dark:bg-[#1A2A40]/50 rounded-lg shadow-sm border-l-4 border-[#D4B483]">
              <h3 className="text-lg font-medium text-[#1A2A40] mb-2">Pour les clients finaux:</h3>
              <blockquote className="text-[#505A64] italic pl-4 border-l-2 border-[#D4B483]/30">
                "Une expérience de restauration plus attentive et fluide."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] mb-6">
          Conclusion
        </h2>

        <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/30 p-6 rounded-lg shadow-md border border-[#1A2A40]/10 dark:border-[#F5F5F0]/10">
          <p className="text-[#505A64] leading-relaxed">
            L'identité de Sotto est le reflet de notre vision: transformer la restauration en éliminant les barrières technologiques visibles pour recentrer l'attention sur l'humain. En appliquant systématiquement les principes décrits dans ce guide, nous construisons une marque cohérente et distinctive qui incarne véritablement notre mission.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="bg-[#1A2A40] dark:bg-[#D47D5A] p-6 rounded-lg shadow-md">
          <p className="text-center mb-2 text-white">
            Pour toute question concernant l'application de ces directives ou pour obtenir des ressources graphiques supplémentaires, contactez l'équipe brand de Sotto à 
          </p>
          <p className="text-center font-medium">
            <a href="mailto:brand@sotto.ai" className="underline text-white hover:text-[#D4B483] transition-colors">
              brand@sotto.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourceContent;