import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Fil d'Ariane */}
          <div className="flex items-center text-sm text-[#505A64] mb-8">
            <Link href="/" className="hover:text-[#D47D5A]">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#D47D5A]">Blog</Link>
            <span className="mx-2">/</span>
            <span>Installation en 4 heures</span>
          </div>
          
          {/* En-tête de l'article */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Installation en 4 heures : comment se déroule la transition vers un restaurant sans écran</h1>
            <div className="flex items-center text-[#505A64] text-sm mb-4">
              <span>Publié le 19 avril 2024</span>
              <span className="mx-2">•</span>
              <span>6 min de lecture</span>
              <span className="mx-2">•</span>
              <span>Implémentation</span>
            </div>
          </div>
          
          {/* Image principale */}
          <div className="mb-8 bg-[#1A2A40]/10 rounded-lg aspect-video relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[#1A2A40]/30 text-xl font-bold">
              Image: Technicien installant le système Sotto dans un restaurant
            </div>
          </div>
          
          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-[#1A2A40]">
              L'une des préoccupations majeures des restaurateurs envisageant d'adopter une nouvelle technologie est l'impact sur leurs opérations pendant la transition. Combien de temps le restaurant devra-t-il fermer ? La formation sera-t-elle longue ? Y aura-t-il des perturbations du service ? Dans cet article, nous détaillons le processus d'installation de Sotto, qui se déroule en seulement 4 heures, sans interruption significative de votre activité.
            </p>
            
            <h2>Avant l'installation : la préparation</h2>
            <p>
              Le succès d'une installation rapide repose sur une préparation minutieuse. Une semaine avant la date prévue, notre équipe effectue plusieurs actions préparatoires :
            </p>
            
            <ul>
              <li><strong>Audit technique à distance</strong> : Évaluation de votre infrastructure WiFi et de votre système d'encaissement actuel</li>
              <li><strong>Configuration préliminaire</strong> : Préparation de votre environnement Sotto personnalisé (menu, équipe, spécificités)</li>
              <li><strong>Planification logistique</strong> : Organisation de l'intervention pendant vos heures creuses</li>
              <li><strong>Formation anticipée</strong> : Envoi de vidéos de formation à votre équipe pour familiarisation</li>
            </ul>
            
            <p>
              Cette phase préparatoire permet de réduire considérablement le temps d'intervention sur place et d'anticiper d'éventuels défis techniques.
            </p>
            
            <h2>Le jour J : chronologie de l'installation</h2>
            
            <h3>Heure 1 : Arrivée et configuration du réseau (9h00-10h00)</h3>
            <p>
              Notre équipe technique arrive généralement en milieu de matinée, après le service du petit-déjeuner et avant la préparation du déjeuner. Cette première heure est consacrée à :
            </p>
            
            <ul>
              <li>Installation du boîtier central Sotto (taille d'un petit routeur)</li>
              <li>Optimisation de votre réseau WiFi pour garantir une couverture complète</li>
              <li>Tests de connectivité dans toutes les zones du restaurant</li>
              <li>Configuration des points d'impression (pour les tickets de cuisine et les additions)</li>
            </ul>
            
            <p>
              <strong>Impact sur vos opérations :</strong> Aucun. Votre système actuel reste pleinement fonctionnel pendant cette phase.
            </p>
            
            <h3>Heure 2 : Intégration et synchronisation des données (10h00-11h00)</h3>
            <p>
              Cette phase cruciale consiste à connecter Sotto à votre écosystème existant :
            </p>
            
            <ul>
              <li>Importation de votre menu complet (plats, boissons, options, prix)</li>
              <li>Configuration des tables et zones de service</li>
              <li>Intégration avec votre système de caisse et de paiement</li>
              <li>Synchronisation avec votre système de gestion des stocks (si applicable)</li>
            </ul>
            
            <p>
              <strong>Impact sur vos opérations :</strong> Minimal. Nous pouvons avoir besoin d'accéder brièvement à votre système de caisse, mais sans interrompre son fonctionnement.
            </p>
            
            <h3>Heure 3 : Configuration des oreillettes et tests (11h00-12h00)</h3>
            <p>
              C'est le moment où le système prend vie :
            </p>
            
            <ul>
              <li>Installation de la station de charge des oreillettes</li>
              <li>Configuration de chaque oreillette pour les membres de votre équipe</li>
              <li>Tests de reconnaissance vocale dans l'environnement réel</li>
              <li>Ajustements acoustiques pour optimiser la performance dans votre espace</li>
            </ul>
            
            <p>
              <strong>Impact sur vos opérations :</strong> Minimal. Nous travaillons avec 1-2 membres de votre équipe à la fois pour les tests, pendant que les autres continuent leurs tâches habituelles.
            </p>
            
            <h3>Heure 4 : Formation express et mise en service (12h00-13h00)</h3>
            <p>
              La dernière heure est consacrée à la formation pratique et au lancement :
            </p>
            
            <ul>
              <li>Formation hands-on de 30 minutes pour chaque membre de l'équipe</li>
              <li>Simulation de scénarios réels (prise de commande, modifications, additions)</li>
              <li>Configuration des derniers paramètres personnalisés</li>
              <li>Activation du système en parallèle avec votre solution existante</li>
            </ul>
            
            <p>
              <strong>Impact sur vos opérations :</strong> Léger. La formation se fait par rotation, permettant à votre équipe de continuer à préparer le service du déjeuner.
            </p>
            
            <h2>Le premier service : fonctionnement en parallèle</h2>
            
            <p>
              Une caractéristique unique de notre approche est le "mode parallèle" qui permet une transition en douceur :
            </p>
            
            <ul>
              <li>Pendant le premier service (généralement le déjeuner du jour d'installation), Sotto fonctionne en parallèle avec votre système existant</li>
              <li>Les commandes sont enregistrées simultanément dans les deux systèmes</li>
              <li>Votre équipe peut utiliser l'un ou l'autre, selon son niveau de confort</li>
              <li>Notre technicien reste sur place pour accompagner ce premier service</li>
            </ul>
            
            <p>
              Ce fonctionnement en parallèle élimine tout risque opérationnel et permet une adoption progressive et sereine.
            </p>
            
            <h2>Témoignage : l'expérience du Bistrot Parisien</h2>
            
            <blockquote>
              "J'étais très inquiet à l'idée de changer notre système en pleine saison. L'équipe Sotto m'avait promis une installation en 4 heures sans perturber notre service, mais j'avais du mal à y croire.
              
              À ma grande surprise, tout s'est déroulé exactement comme prévu. Ils sont arrivés à 9h, et à 13h, nous étions prêts pour le service avec les deux systèmes fonctionnant en parallèle. Dès le deuxième jour, mon équipe était tellement à l'aise avec Sotto que nous avons complètement abandonné notre ancien système.
              
              Le plus impressionnant a été la réaction de nos clients : aucun n'a remarqué que nous avions changé de technologie. Ils ont simplement constaté que le service était plus fluide et que nos serveurs étaient plus présents."
              <cite>— Martin Dubois, propriétaire du Bistrot Parisien</cite>
            </blockquote>
            
            <h2>Les facteurs clés d'une installation réussie</h2>
            
            <h3>1. Préparation minutieuse</h3>
            <p>
              La majeure partie du travail est réalisée en amont, ce qui minimise le temps d'intervention sur place. Notre équipe configure votre environnement Sotto avant même d'arriver dans votre établissement.
            </p>
            
            <h3>2. Équipe d'installation expérimentée</h3>
            <p>
              Nos techniciens sont spécialisés dans le secteur de la restauration et comprennent les contraintes opérationnelles. Ils savent travailler efficacement sans perturber votre activité.
            </p>
            
            <h3>3. Technologie plug-and-play</h3>
            <p>
              Sotto a été conçu dès le départ pour s'intégrer facilement à l'infrastructure existante, sans nécessiter de modifications lourdes de votre réseau ou de vos systèmes.
            </p>
            
            <h3>4. Formation adaptée au rythme de la restauration</h3>
            <p>
              Notre approche de formation est pragmatique et adaptée au secteur : courte, pratique et immédiatement applicable. La simplicité d'utilisation de Sotto permet une prise en main rapide.
            </p>
            
            <h2>Questions fréquentes sur l'installation</h2>
            
            <h3>Faut-il fermer le restaurant pendant l'installation ?</h3>
            <p>
              Non, absolument pas. L'installation se déroule pendant vos heures creuses, entre les services, sans aucune interruption de votre activité.
            </p>
            
            <h3>Que se passe-t-il si notre WiFi n'est pas optimal ?</h3>
            <p>
              Lors de l'audit préliminaire, nous évaluons votre infrastructure WiFi. Si nécessaire, nous pouvons inclure dans l'installation la mise en place de points d'accès supplémentaires pour garantir une couverture parfaite.
            </p>
            
            <h3>Combien de temps faut-il pour que l'équipe soit pleinement opérationnelle ?</h3>
            <p>
              La plupart des équipes sont à l'aise avec les fonctionnalités de base dès le premier jour. La maîtrise complète, incluant les fonctionnalités avancées, prend généralement 3 à 5 jours.
            </p>
            
            <h3>Peut-on revenir à l'ancien système en cas de problème ?</h3>
            <p>
              Oui, pendant la période de transition (généralement 7 jours), les deux systèmes fonctionnent en parallèle. Vous pouvez basculer de l'un à l'autre instantanément si nécessaire.
            </p>
            
            <h3>L'installation nécessite-t-elle des travaux ou modifications physiques ?</h3>
            <p>
              Non, l'installation de Sotto est non-invasive. Le boîtier central est compact (taille d'un routeur) et la station de charge des oreillettes s'intègre discrètement dans votre espace. Aucun câblage supplémentaire n'est généralement nécessaire.
            </p>
            
            <h2>Après l'installation : suivi et optimisation</h2>
            
            <p>
              Notre engagement ne s'arrête pas à l'installation. Les jours suivants sont cruciaux pour optimiser le système selon vos besoins spécifiques :
            </p>
            
            <ul>
              <li><strong>J+1 :</strong> Suivi téléphonique pour recueillir vos premiers retours</li>
              <li><strong>J+3 :</strong> Ajustements à distance basés sur les données d'utilisation</li>
              <li><strong>J+7 :</strong> Visite de suivi pour optimisations fines et formation avancée</li>
              <li><strong>J+30 :</strong> Bilan complet et personnalisation supplémentaire si nécessaire</li>
            </ul>
            
            <p>
              Cette approche progressive garantit que Sotto s'adapte parfaitement à votre établissement et à vos méthodes de travail.
            </p>
            
            <h2>Conclusion : une transition sans stress vers le restaurant sans écran</h2>
            
            <p>
              La transition vers un restaurant sans écran avec Sotto est remarquablement simple et rapide. En seulement 4 heures, votre établissement peut être équipé d'une technologie vocale de pointe, sans perturber vos opérations ni déstabiliser votre équipe.
            </p>
            
            <p>
              Cette rapidité d'installation n'est pas le fruit du hasard, mais le résultat d'une conception minutieuse et d'une méthodologie éprouvée, développée spécifiquement pour le secteur exigeant de la restauration.
            </p>
            
            <p>
              Si vous souhaitez en savoir plus sur le processus d'installation ou planifier une démonstration dans votre établissement, notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
          
          {/* Auteur */}
          <div className="mt-12 border-t border-[#1A2A40]/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1A2A40]"></div>
              <div>
                <h3 className="font-bold">Nicolas Lester Reynolds</h3>
                <p className="text-[#505A64]">CTO & Co-fondateur de Sotto</p>
              </div>
            </div>
          </div>
          
          {/* Articles connexes */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/journee-avec-sotto" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">Une journée avec Sotto</h4>
                    <p className="text-sm text-[#505A64] mt-1">De l'ouverture à la fermeture</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/questions-frequentes-technologie-vocale" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">Questions fréquentes sur la technologie vocale</h4>
                    <p className="text-sm text-[#505A64] mt-1">Réponses aux préoccupations les plus courantes</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
