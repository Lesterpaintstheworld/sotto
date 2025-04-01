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
            <span>Une journée avec Sotto</span>
          </div>
          
          {/* En-tête de l'article */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Une journée avec Sotto : de l'ouverture à la fermeture</h1>
            <div className="flex items-center text-[#505A64] text-sm mb-4">
              <span>Publié le 26 avril 2024</span>
              <span className="mx-2">•</span>
              <span>14 min de lecture</span>
              <span className="mx-2">•</span>
              <span>Guide pratique</span>
            </div>
          </div>
          
          {/* Image principale */}
          <div className="mb-8 bg-[#1A2A40]/10 rounded-lg aspect-video relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[#1A2A40]/30 text-xl font-bold">
              Image: Restaurant vu de l'intérieur au lever du jour
            </div>
          </div>
          
          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-[#1A2A40]">
              Comment se déroule concrètement une journée dans un restaurant équipé de la technologie vocale Sotto ? Pour répondre à cette question fréquente, nous avons suivi l'équipe du Bistrot Parisien pendant 24 heures, de l'ouverture à la fermeture. Voici un aperçu détaillé de cette journée, qui illustre comment Sotto s'intègre naturellement dans les opérations quotidiennes d'un établissement.
            </p>
            
            <h2>7h30 - Préparation et mise en place</h2>
            <p>
              La journée commence pour Thomas, le responsable de salle, qui arrive le premier pour préparer le restaurant avant l'arrivée du reste de l'équipe. Après avoir allumé les lumières et vérifié la température, il se dirige vers la station Sotto, un petit boîtier discret installé près du bar.
            </p>
            
            <p>
              <strong>7h35 - Activation du système</strong>
            </p>
            
            <p>
              Thomas allume le système Sotto en appuyant simplement sur un bouton. Un voyant vert s'allume, indiquant que le système est opérationnel. Il prend son oreillette dans le chargeur (chaque membre de l'équipe a la sienne, identifiée par un code couleur) et la place dans son oreille.
            </p>
            
            <p>
              <strong>"Bonjour Thomas, je suis prêt à t'accompagner pour cette journée."</strong> - La voix de Sotto est claire et naturelle dans son oreillette.
            </p>
            
            <p>
              Thomas vérifie rapidement les réservations du jour en demandant simplement : "Sotto, quelles sont les réservations aujourd'hui ?" Le système lui énonce les réservations, en mettant l'accent sur les informations importantes comme les grands groupes ou les clients réguliers.
            </p>
            
            <h2>8h00 - Briefing de l'équipe</h2>
            <p>
              L'équipe de salle arrive et chacun récupère son oreillette. Le chef de cuisine, Paul, et ses deux commis sont également équipés. Pendant que l'équipe prépare les tables, Thomas organise un bref briefing.
            </p>
            
            <p>
              "Aujourd'hui, nous avons le menu du jour habituel, plus une suggestion spéciale : risotto aux asperges et parmesan. Sotto est déjà informé, vous pouvez donc prendre les commandes normalement."
            </p>
            
            <p>
              Il rappelle également que M. et Mme Lefèvre, des clients réguliers, viennent fêter leur anniversaire de mariage ce soir. Cette information est déjà enregistrée dans le système Sotto, qui le rappellera discrètement au serveur qui s'occupera de leur table.
            </p>
            
            <h2>9h00 - Vérification des stocks</h2>
            <p>
              Le chef Paul utilise Sotto pour vérifier rapidement les stocks disponibles :
            </p>
            
            <p>
              <strong>Paul :</strong> "Sotto, état des stocks critiques."
            </p>
            
            <p>
              <strong>Sotto :</strong> "Attention, stock bas sur : filet de bœuf (4 portions), Saint-Jacques (6 portions), Chablis 2020 (2 bouteilles)."
            </p>
            
            <p>
              Cette information permet à Paul d'adapter ses préparations et d'informer l'équipe de salle des plats qui risquent d'être en rupture. Thomas note qu'il faudra passer une commande de vin dans la journée.
            </p>
            
            <h2>11h30 - Ouverture pour le déjeuner</h2>
            <p>
              Les premiers clients arrivent pour le déjeuner. Marie, l'une des serveuses, accueille un couple de touristes américains. Après les avoir installés, elle prend leur commande :
            </p>
            
            <p>
              <strong>Marie :</strong> "Table 3, deux menus du jour, entrées : une soupe à l'oignon et une salade de chèvre chaud. Plats : un magret de canard rosé et un risotto aux asperges. Boissons : une bouteille d'eau plate et deux verres de Bordeaux rouge."
            </p>
            
            <p>
              Sotto confirme discrètement dans son oreillette : "Commande enregistrée pour la table 3" et transmet instantanément l'information en cuisine, où Paul et son équipe voient apparaître la commande sur un petit écran.
            </p>
            
            <p>
              Pendant ce temps, Marie peut immédiatement passer à une autre table sans avoir à se rendre à un terminal de caisse.
            </p>
            
            <h2>12h15 - Le rush du déjeuner commence</h2>
            <p>
              Le restaurant se remplit rapidement. Plusieurs tables passent leur commande presque simultanément. Contrairement à l'ancien système où les serveurs devaient faire la queue devant les terminaux, chacun peut maintenant transmettre ses commandes instantanément.
            </p>
            
            <p>
              En cuisine, les commandes arrivent de manière fluide, permettant à l'équipe de s'organiser efficacement sans les habituels "pics" de commandes qui créaient du stress.
            </p>
            
            <p>
              <strong>Thomas :</strong> "Table 8, modification : sans gluten pour le plat principal."
            </p>
            
            <p>
              <strong>Sotto :</strong> "Modification enregistrée pour la table 8. Cuisine informée."
            </p>
            
            <p>
              En cuisine, Paul reçoit immédiatement l'information et adapte la préparation.
            </p>
            
            <h2>12h45 - Coordination du service</h2>
            <p>
              Alors que les premiers plats sont prêts à être servis, Sotto joue un rôle crucial dans la coordination :
            </p>
            
            <p>
              <strong>Paul (en cuisine) :</strong> "Entrées prêtes pour la table 3."
            </p>
            
            <p>
              Marie, qui s'occupe de cette table mais est actuellement en train de prendre une commande à une autre table, reçoit discrètement le message dans son oreillette. Dès qu'elle termine, elle se dirige vers la cuisine pour récupérer les plats.
            </p>
            
            <p>
              Pendant ce temps, Thomas, qui voit qu'elle est occupée, reçoit également l'information et peut décider d'intervenir si nécessaire : "Je m'en occupe, Marie est avec la table 7."
            </p>
            
            <p>
              Cette coordination invisible permet un service fluide sans les traditionnels appels ou signaux entre la salle et la cuisine.
            </p>
            
            <h2>13h30 - Gestion des demandes spéciales</h2>
            <p>
              Un client à la table 5 demande des informations sur les allergènes dans un plat. Marie utilise Sotto pour obtenir l'information précise :
            </p>
            
            <p>
              <strong>Marie :</strong> "Sotto, allergènes dans le risotto aux asperges ?"
            </p>
            
            <p>
              <strong>Sotto :</strong> "Le risotto aux asperges contient : beurre, parmesan (lait), vin blanc (sulfites), bouillon de légumes (céleri). Pas de gluten, fruits à coque, crustacés ou œufs."
            </p>
            
            <p>
              Marie peut immédiatement transmettre cette information précise au client, sans avoir à aller vérifier en cuisine ou consulter un classeur d'informations.
            </p>
            
            <h2>14h15 - Gestion de l'addition</h2>
            <p>
              Les premiers clients terminent leur repas et demandent l'addition. Le processus est simplifié :
            </p>
            
            <p>
              <strong>Marie :</strong> "Addition table 3, paiement par carte."
            </p>
            
            <p>
              <strong>Sotto :</strong> "Addition table 3 préparée, total 78,50€. Envoyée à l'imprimante."
            </p>
            
            <p>
              L'addition s'imprime automatiquement près de la caisse. Marie la récupère en passant et l'apporte à la table avec le terminal de paiement. Tout le processus prend moins de 30 secondes, contre plusieurs minutes avec le système traditionnel.
            </p>
            
            <h2>15h30 - Accalmie et préparation du service du soir</h2>
            <p>
              Après le rush du déjeuner, l'équipe profite d'une accalmie pour préparer le service du soir. Thomas utilise ce moment pour consulter les statistiques de la journée :
            </p>
            
            <p>
              <strong>Thomas :</strong> "Sotto, rapport du service de midi."
            </p>
            
            <p>
              <strong>Sotto :</strong> "Service du midi : 42 couverts, panier moyen 34,20€, temps de service moyen 67 minutes. Plat le plus commandé : risotto aux asperges (12). Ventes de vin : +15% par rapport à la moyenne."
            </p>
            
            <p>
              Ces informations permettent à Thomas d'ajuster la stratégie pour le service du soir et de féliciter l'équipe sur les ventes de vin.
            </p>
            
            <p>
              Pendant ce temps, Paul utilise Sotto pour mettre à jour le menu du soir, retirant le filet de bœuf qui est en rupture et ajoutant une nouvelle suggestion.
            </p>
            
            <h2>17h00 - Changement d'équipe</h2>
            <p>
              L'équipe du soir arrive et prend le relais. Le processus de transition est simplifié grâce à Sotto :
            </p>
            
            <p>
              <strong>Thomas :</strong> "Sotto, transfert de service à Julien."
            </p>
            
            <p>
              <strong>Sotto :</strong> "Transfert effectué. Bonsoir Julien, 18 réservations ce soir, dont la table anniversaire des Lefèvre à 20h00."
            </p>
            
            <p>
              Thomas remet son oreillette sur la station de charge et Julien prend la sienne. Toutes les informations importantes sont automatiquement transmises, assurant une continuité parfaite du service.
            </p>
            
            <h2>18h30 - Ouverture pour le dîner</h2>
            <p>
              Les premiers clients du soir arrivent. L'équipe est maintenant bien rodée à l'utilisation de Sotto, et le service se déroule avec la même fluidité que le midi.
            </p>
            
            <p>
              Une fonctionnalité particulièrement utile se révèle lorsqu'un client régulier arrive :
            </p>
            
            <p>
              <strong>Sotto (à Julien) :</strong> "Client régulier à l'entrée : M. Bertrand. Vient généralement le jeudi. Préfère la table près de la fenêtre. Amateur de vins de Bourgogne, allergique aux fruits de mer."
            </p>
            
            <p>
              Cette information discrète permet à Julien d'accueillir le client de manière personnalisée, renforçant la fidélisation :
            </p>
            
            <p>
              <strong>Julien :</strong> "Bonsoir Monsieur Bertrand, ravi de vous revoir ! Votre table habituelle près de la fenêtre est disponible. Nous avons reçu un excellent Gevrey-Chambertin que je pense vous apprécierez."
            </p>
            
            <h2>20h00 - Gestion des VIP et situations spéciales</h2>
            <p>
              M. et Mme Lefèvre arrivent pour leur anniversaire de mariage. Sotto alerte discrètement toute l'équipe :
            </p>
            
            <p>
              <strong>Sotto :</strong> "Table anniversaire des Lefèvre - 30 ans de mariage. Table 12 réservée. Champagne offert par la maison prévu."
            </p>
            
            <p>
              Cette information partagée permet une coordination parfaite : Julien les accueille chaleureusement, Sophie (serveuse) prépare le champagne, et Paul en cuisine est informé de l'importance de soigner particulièrement leurs plats.
            </p>
            
            <h2>21h15 - Gestion des imprévus</h2>
            <p>
              Un groupe de 6 personnes arrive sans réservation pendant le service. Sotto aide à gérer cette situation :
            </p>
            
            <p>
              <strong>Julien :</strong> "Sotto, possibilité pour 6 personnes sans réservation ?"
            </p>
            
            <p>
              <strong>Sotto :</strong> "Tables 4 et 5 peuvent être combinées. La table 4 termine dans environ 15 minutes selon le rythme actuel. La cuisine peut absorber 6 couverts supplémentaires sans délai significatif."
            </p>
            
            <p>
              Cette analyse rapide permet à Julien de proposer une solution au groupe : "Nous pouvons vous installer dans environ 15-20 minutes, si cela vous convient. Je vous propose de prendre un apéritif au bar en attendant."
            </p>
            
            <h2>22h30 - Coordination des desserts et cafés</h2>
            <p>
              Alors que le service bat son plein, la coordination entre la salle et la cuisine reste fluide. Pour les desserts, qui doivent souvent être servis rapidement après préparation, Sotto joue un rôle crucial :
            </p>
            
            <p>
              <strong>Paul :</strong> "Soufflés au chocolat pour la table 12 prêts dans 3 minutes."
            </p>
            
            <p>
              <strong>Sotto (à Sophie) :</strong> "Soufflés table 12 prêts dans 3 minutes."
            </p>
            
            <p>
              Sophie, qui s'occupe de cette table, peut ainsi terminer ce qu'elle fait et se positionner pour servir les soufflés dès qu'ils sont prêts, garantissant qu'ils arrivent à table à la température parfaite.
            </p>
            
            <h2>23h45 - Dernières commandes et début du nettoyage</h2>
            <p>
              Alors que les derniers clients terminent leur repas, l'équipe commence discrètement à préparer la fermeture. Sotto aide à coordonner ce processus :
            </p>
            
            <p>
              <strong>Julien :</strong> "Sotto, état des tables."
            </p>
            
            <p>
              <strong>Sotto :</strong> "4 tables encore occupées. Tables 7 et 12 au dessert, table 9 aux cafés, table 3 en attente de l'addition. Toutes les autres tables peuvent être débarrassées."
            </p>
            
            <p>
              Cette information permet à l'équipe de commencer efficacement le nettoyage sans déranger les derniers clients.
            </p>
            
            <h2>00h30 - Fermeture et bilan</h2>
            <p>
              Les derniers clients sont partis, et l'équipe termine le nettoyage. Julien utilise Sotto pour obtenir un bilan complet de la journée :
            </p>
            
            <p>
              <strong>Julien :</strong> "Sotto, rapport complet de la journée."
            </p>
            
            <p>
              <strong>Sotto :</strong> "Journée complète : 127 couverts (42 déjeuner, 85 dîner), chiffre d'affaires total 4 356€, panier moyen 34,30€. Top ventes : risotto aux asperges (29), magret de canard (22), soufflé au chocolat (18). Ventes de vin : 42 bouteilles, 28 verres. Temps de service moyen : 72 minutes. Satisfaction client estimée : excellente."
            </p>
            
            <p>
              Ces informations détaillées permettent à Julien de préparer un rapport concis pour le propriétaire et d'identifier les points forts et les axes d'amélioration.
            </p>
            
            <h2>1h00 - Mise en veille du système</h2>
            <p>
              Une fois le nettoyage terminé et tout le monde prêt à partir, Julien met le système en veille :
            </p>
            
            <p>
              <strong>Julien :</strong> "Sotto, passage en mode nuit."
            </p>
            
            <p>
              <strong>Sotto :</strong> "Mode nuit activé. Sauvegarde des données effectuée. Bonne nuit, à demain."
            </p>
            
            <p>
              Julien place son oreillette sur la station de charge, vérifie que toutes les autres y sont également, et quitte le restaurant après une journée bien remplie mais remarquablement fluide.
            </p>
            
            <h2>Les bénéfices observés tout au long de la journée</h2>
            
            <p>
              Cette journée type au Bistrot Parisien illustre plusieurs avantages clés de la technologie vocale Sotto :
            </p>
            
            <ul>
              <li><strong>Fluidité du service</strong> : Élimination des files d'attente aux terminaux et transmission instantanée des commandes</li>
              <li><strong>Coordination invisible</strong> : Communication fluide entre la salle et la cuisine sans interruptions visibles pour les clients</li>
              <li><strong>Personnalisation du service</strong> : Reconnaissance des clients réguliers et de leurs préférences</li>
              <li><strong>Réactivité accrue</strong> : Capacité à gérer rapidement les modifications, les demandes spéciales et les imprévus</li>
              <li><strong>Données en temps réel</strong> : Accès immédiat aux informations cruciales (allergènes, stocks, statistiques)</li>
              <li><strong>Optimisation des ressources</strong> : Meilleure utilisation du temps du personnel et gestion plus efficace des pics d'activité</li>
            </ul>
            
            <h2>Conclusion : Une technologie qui s'efface pour sublimer l'humain</h2>
            
            <p>
              Ce qui frappe le plus en observant une journée complète avec Sotto, c'est à quel point la technologie se fait discrète. Contrairement aux systèmes traditionnels qui imposent leur présence (écrans, terminaux, tablettes), Sotto opère en arrière-plan, amplifiant les capacités de l'équipe sans jamais s'interposer.
            </p>
            
            <p>
              Le résultat est un service qui semble paradoxalement moins technologique mais plus efficace, moins mécanique mais plus précis, moins visible mais plus impactant. C'est précisément cette "invisibilité" qui permet de recentrer l'expérience restaurant sur ce qui compte vraiment : l'humain et la gastronomie.
            </p>
            
            <p>
              Comme le résume Thomas, le responsable de salle : "Avant, nous travaillions pour le système. Maintenant, c'est le système qui travaille pour nous."
            </p>
          </div>
          
          {/* Auteur */}
          <div className="mt-12 border-t border-[#1A2A40]/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1A2A40]"></div>
              <div>
                <h3 className="font-bold">Julie Lefèvre</h3>
                <p className="text-[#505A64]">Directrice Produit de Sotto</p>
              </div>
            </div>
          </div>
          
          {/* Articles connexes */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/installation-4-heures" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">Installation en 4 heures</h4>
                    <p className="text-sm text-[#505A64] mt-1">Comment se déroule la transition vers un restaurant sans écran</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/interview-chef-martin" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">'Mes serveurs ne veulent plus revenir en arrière'</h4>
                    <p className="text-sm text-[#505A64] mt-1">Interview avec Chef Martin du Bistrot Parisien</p>
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
