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
            <span>Interview avec Chef Martin</span>
          </div>
          
          {/* En-tête de l'article */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">'Mes serveurs ne veulent plus revenir en arrière' : interview avec Chef Martin du Bistrot Parisien</h1>
            <div className="flex items-center text-[#505A64] text-sm mb-4">
              <span>Publié le 3 mai 2024</span>
              <span className="mx-2">•</span>
              <span>8 min de lecture</span>
              <span className="mx-2">•</span>
              <span>Témoignages</span>
            </div>
          </div>
          
          {/* Image principale */}
          <div className="mb-8 bg-[#1A2A40]/10 rounded-lg aspect-video relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[#1A2A40]/30 text-xl font-bold">
              Image: Chef Martin dans son restaurant
            </div>
          </div>
          
          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-[#1A2A40]">
              Martin Dubois, chef propriétaire du Bistrot Parisien, établissement réputé du 11ème arrondissement de Paris, a été l'un des premiers à adopter la technologie vocale Sotto. Six mois après l'implémentation, nous l'avons rencontré pour discuter de son expérience, des défis rencontrés et des résultats obtenus.
            </p>
            
            <h2>Bonjour Chef Martin. Pourriez-vous nous présenter votre établissement ?</h2>
            <p>
              <strong>Martin Dubois :</strong> Le Bistrot Parisien existe depuis 2015. Nous proposons une cuisine française traditionnelle revisitée, avec des produits de saison et un fort engagement pour le local et le durable. Nous avons 65 couverts, et nous servons environ 1 200 clients par semaine entre le déjeuner et le dîner. Notre équipe compte 4 personnes en cuisine et 6 en salle, avec quelques renforts le week-end.
            </p>
            
            <h2>Qu'est-ce qui vous a poussé à envisager une solution vocale comme Sotto ?</h2>
            <p>
              <strong>Martin Dubois :</strong> Avant tout, c'était la frustration. Je voyais mes serveurs passer un temps fou devant les écrans de caisse, faire la queue pour saisir leurs commandes pendant les rushs, et surtout, être moins présents pour nos clients. 
            </p>
            
            <p>
              Un jour, j'ai chronométré : entre le moment où un serveur prenait la commande à table et le moment où cette commande arrivait en cuisine, il pouvait s'écouler jusqu'à 12 minutes en période d'affluence. C'était inacceptable, d'autant que pendant ce temps, le client attend et d'autres tables ne sont pas prises en charge.
            </p>
            
            <p>
              J'ai aussi remarqué que mes serveurs les plus expérimentés, ceux qui connaissent parfaitement les plats et savent conseiller, passaient autant de temps que les novices sur les écrans. C'était un gâchis de compétences.
            </p>
            
            <h2>Comment s'est passée la décision d'adopter Sotto ?</h2>
            <p>
              <strong>Martin Dubois :</strong> J'ai d'abord été sceptique, comme beaucoup de restaurateurs face aux nouvelles technologies. On nous promet souvent la lune, et on se retrouve avec des systèmes compliqués qui créent plus de problèmes qu'ils n'en résolvent.
            </p>
            
            <p>
              Ce qui m'a convaincu, c'est quand l'équipe Sotto est venue faire une démonstration pendant un service réel. Ils ont équipé deux de mes serveurs, et la différence était flagrante. Pendant que les autres faisaient encore la queue aux caisses, ces deux-là enchaînaient les tables sans interruption.
            </p>
            
            <p>
              J'ai aussi apprécié leur approche : pas d'investissement initial lourd, pas d'engagement de longue durée, et surtout, une promesse de résultats mesurables dès le premier mois.
            </p>
            
            <h2>Comment votre équipe a-t-elle réagi à ce changement ?</h2>
            <p>
              <strong>Martin Dubois :</strong> [Rires] C'est là que ça devient intéressant. Au début, il y avait deux camps : les enthousiastes, plutôt jeunes, qui trouvaient ça "cool", et les sceptiques, généralement plus expérimentés, qui craignaient de perdre leurs repères.
            </p>
            
            <p>
              La surprise est venue après une semaine d'utilisation : ce sont les serveurs expérimentés qui sont devenus les plus fervents défenseurs du système. Ils ont réalisé que ça leur permettait de se concentrer sur ce qu'ils font de mieux : le conseil, le service attentionné, la relation client.
            </p>
            
            <p>
              Aujourd'hui, si je suggérais de revenir aux écrans tactiles, je pense qu'ils se mettraient en grève ! [Rires] C'est devenu un outil indispensable pour eux.
            </p>
            
            <h2>Quels ont été les principaux défis lors de l'implémentation ?</h2>
            <p>
              <strong>Martin Dubois :</strong> Le principal défi a été d'adapter notre vocabulaire et notre façon de communiquer. Avec un système vocal, il faut être précis et cohérent dans la façon de nommer les plats et les modifications.
            </p>
            
            <p>
              Par exemple, nous avions l'habitude de dire "un steak bleu" ou "un bleu" indifféremment. Il a fallu standardiser un peu notre langage pour que le système comprenne systématiquement. Mais c'est finalement un avantage, car ça a aussi clarifié la communication entre la salle et la cuisine.
            </p>
            
            <p>
              L'autre défi était le bruit ambiant, surtout le vendredi et samedi soir quand le restaurant est plein. Mais l'équipe Sotto a fait des ajustements, et maintenant le système fonctionne parfaitement même dans ces conditions.
            </p>
            
            <h2>Quels changements avez-vous observés dans votre opération quotidienne ?</h2>
            <p>
              <strong>Martin Dubois :</strong> Le changement le plus visible est la fluidité du service. Avant, on voyait clairement des pics d'activité en cuisine qui correspondaient aux moments où plusieurs serveurs réussissaient enfin à saisir leurs commandes. Maintenant, les commandes arrivent en temps réel, ce qui permet à la cuisine de travailler plus régulièrement.
            </p>
            
            <p>
              J'ai aussi remarqué que mes serveurs sont beaucoup plus présents en salle. Ils ne disparaissent plus pendant 5-10 minutes pour aller saisir des commandes. Ça change complètement la dynamique du service.
            </p>
            
            <p>
              Un autre changement important concerne les erreurs de commande. Elles ont diminué de façon spectaculaire, je dirais d'au moins 80%. Et quand une erreur se produit, elle est corrigée immédiatement, sans avoir à retourner à un terminal.
            </p>
            
            <h2>Avez-vous constaté un impact sur votre chiffre d'affaires ?</h2>
            <p>
              <strong>Martin Dubois :</strong> Absolument, et c'est mesurable. Notre chiffre d'affaires a augmenté de 17% depuis l'installation de Sotto, sans aucun changement de menu ou de prix.
            </p>
            
            <p>
              Cette augmentation vient de trois sources principales :
            </p>
            
            <ul>
              <li>Nous servons plus de clients pendant les heures de pointe, environ 15-20% de plus le week-end</li>
              <li>Le panier moyen a augmenté d'environ 12%, car les serveurs ont plus de temps pour suggérer des entrées, des desserts ou des vins</li>
              <li>Nous avons plus de clients réguliers, ce qui indique une meilleure satisfaction</li>
            </ul>
            
            <p>
              Ce qui est particulièrement intéressant, c'est que cette augmentation s'est faite sans coûts supplémentaires significatifs. Notre marge s'est donc considérablement améliorée.
            </p>
            
            <h2>Comment vos clients ont-ils réagi à ce changement ?</h2>
            <p>
              <strong>Martin Dubois :</strong> C'est peut-être le plus fascinant : la plupart de nos clients ne réalisent même pas qu'il y a eu un changement technologique. Ils remarquent simplement que le service est plus attentif, plus rapide, et que l'ambiance est plus détendue.
            </p>
            
            <p>
              Certains clients réguliers ont fait des commentaires sur le fait que nos serveurs semblent plus présents, plus à l'écoute. Quelques-uns ont remarqué les oreillettes et posé des questions par curiosité, mais c'est généralement discret.
            </p>
            
            <p>
              Ce qui est certain, c'est que nos notes sur les plateformes d'avis ont augmenté, passant de 4,2 à 4,7 étoiles en moyenne. Et les commentaires mentionnent souvent la qualité du service, ce qui était moins le cas avant.
            </p>
            
            <h2>Y a-t-il eu des bénéfices inattendus ?</h2>
            <p>
              <strong>Martin Dubois :</strong> Plusieurs, en fait. Le premier concerne le bien-être de l'équipe. Le niveau de stress a considérablement diminué, surtout pendant les services chargés. L'ambiance est plus sereine, et ça se ressent jusque dans la cuisine.
            </p>
            
            <p>
              Un autre avantage inattendu est la réduction du turnover. La restauration est connue pour son taux de rotation élevé, mais depuis l'installation de Sotto, nous n'avons perdu aucun serveur. Au contraire, nous avons une liste d'attente de personnes qui veulent rejoindre notre équipe, car le bouche-à-oreille fonctionne dans le milieu.
            </p>
            
            <p>
              Enfin, j'ai récupéré de l'espace physique en réduisant le nombre de terminaux, ce qui m'a permis d'ajouter une table supplémentaire. Ça peut sembler anecdotique, mais sur une année, cette table représente un chiffre d'affaires non négligeable.
            </p>
            
            <h2>Quels conseils donneriez-vous à un restaurateur qui envisage d'adopter une solution vocale comme Sotto ?</h2>
            <p>
              <strong>Martin Dubois :</strong> D'abord, je dirais de ne pas avoir peur du changement. Le secteur de la restauration est parfois conservateur, mais c'est en innovant qu'on reste compétitif.
            </p>
            
            <p>
              Ensuite, impliquez votre équipe dès le début. Expliquez-leur les bénéfices, non seulement pour le restaurant mais aussi pour leur confort de travail quotidien. Leur adhésion est cruciale pour une transition réussie.
            </p>
            
            <p>
              Soyez patient pendant la phase d'adaptation. Il faut généralement une à deux semaines pour que tout le monde soit parfaitement à l'aise. Prévoyez cette période pendant une saison moins chargée si possible.
            </p>
            
            <p>
              Enfin, utilisez les données que le système vous fournit. Sotto nous donne des insights précieux sur nos opérations : temps de service, plats les plus commandés, performance des serveurs... Ces informations sont précieuses pour continuer à optimiser notre activité.
            </p>
            
            <h2>Pour conclure, comment voyez-vous l'avenir de votre restaurant avec cette technologie ?</h2>
            <p>
              <strong>Martin Dubois :</strong> Je suis convaincu que nous n'avons encore exploité qu'une partie du potentiel de cette technologie. À mesure que le système apprend et s'adapte à nos spécificités, je m'attends à voir encore plus de bénéfices.
            </p>
            
            <p>
              À court terme, nous prévoyons d'utiliser les données collectées pour affiner notre carte et optimiser nos prix. À plus long terme, je suis intéressé par les possibilités d'intégration avec d'autres aspects de notre activité, comme la gestion des stocks ou les réservations.
            </p>
            
            <p>
              Ce qui est certain, c'est que je ne reviendrai pas en arrière. La technologie vocale fait maintenant partie intégrante de l'ADN du Bistrot Parisien, et elle nous aide à offrir exactement ce que nous avons toujours voulu : une expérience gastronomique authentique où l'humain reste au centre.
            </p>
            
            <hr />
            
            <p className="text-sm text-[#505A64] italic">
              Martin Dubois est chef propriétaire du Bistrot Parisien depuis 2015. Son établissement a reçu plusieurs distinctions, dont une mention au Guide Michelin et le prix de la meilleure brasserie traditionnelle de l'Est parisien en 2022. Le Bistrot Parisien utilise la technologie Sotto depuis octobre 2023.
            </p>
          </div>
          
          {/* Auteur */}
          <div className="mt-12 border-t border-[#1A2A40]/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1A2A40]"></div>
              <div>
                <h3 className="font-bold">Karim Omri</h3>
                <p className="text-[#505A64]">CEO & Co-fondateur de Sotto</p>
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
              <Link href="/blog/installation-4-heures" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">Installation en 4 heures</h4>
                    <p className="text-sm text-[#505A64] mt-1">Comment se déroule la transition vers un restaurant sans écran</p>
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
