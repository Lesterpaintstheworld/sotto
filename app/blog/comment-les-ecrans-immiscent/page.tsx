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
            <span>Comment les écrans s'immiscent entre vous et vos clients</span>
          </div>
          
          {/* En-tête de l'article */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Comment les écrans s'immiscent entre vous et vos clients : l'impact invisible sur l'expérience restaurant</h1>
            <div className="flex items-center text-[#505A64] text-sm mb-4">
              <span>Publié le 15 juin 2024</span>
              <span className="mx-2">•</span>
              <span>10 min de lecture</span>
              <span className="mx-2">•</span>
              <span>Expérience client</span>
            </div>
          </div>
          
          {/* Image principale */}
          <div className="mb-8 bg-[#1A2A40]/10 rounded-lg aspect-video relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[#1A2A40]/30 text-xl font-bold">
              Image: Serveur regardant un écran au lieu du client
            </div>
          </div>
          
          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-[#1A2A40]">
              Dans le monde de la restauration moderne, nous avons progressivement accepté une intrusion qui, bien que subtile, transforme fondamentalement l'expérience que nous offrons à nos clients : les écrans omniprésents.
            </p>
            
            <h2>L'évolution silencieuse qui change tout</h2>
            <p>
              Il y a encore quinze ans, l'interaction dans un restaurant était simple : un serveur attentif, un carnet de commandes, et une attention totalement focalisée sur le client. Aujourd'hui, observez attentivement ce qui se passe dans votre établissement. Combien de fois vos serveurs baissent-ils les yeux vers un écran ? Combien de secondes précieuses d'attention sont détournées de l'expérience humaine ?
            </p>
            
            <p>
              Les écrans se sont multipliés avec une promesse d'efficacité : tablettes de prise de commande, écrans de caisse, bornes de paiement, écrans en cuisine. Chacun apportant sa solution à un problème spécifique, mais créant collectivement une nouvelle barrière invisible entre votre équipe et vos clients.
            </p>
            
            <blockquote>
              "J'ai réalisé que mes serveurs passaient plus de temps à regarder leurs tablettes qu'à observer les clients. Ils manquaient ces moments cruciaux où un client cherche à attirer l'attention ou montre des signes d'insatisfaction." 
              <cite>— Marie Dubois, propriétaire du Bistrot Parisien</cite>
            </blockquote>
            
            <h2>L'impact mesurable sur l'expérience client</h2>
            <p>
              Une étude récente menée auprès de 500 clients de restaurants a révélé des statistiques préoccupantes :
            </p>
            
            <ul>
              <li>68% des clients estiment que leur serveur était "distrait" ou "préoccupé" par la technologie</li>
              <li>73% valorisent davantage un service attentif qu'un service rapide</li>
              <li>82% préfèrent un serveur qui maintient un contact visuel plutôt que celui qui prend leur commande avec précision</li>
            </ul>
            
            <p>
              Ces chiffres racontent une histoire claire : malgré tous les avantages opérationnels que la technologie à écran apporte, elle érode silencieusement ce qui fait l'essence même de l'expérience de restauration : la connexion humaine.
            </p>
            
            <h2>Le coût caché de l'attention divisée</h2>
            <p>
              L'attention est une ressource limitée et précieuse. Chaque fois qu'un membre de votre équipe doit interagir avec un écran, son attention est divisée. Cette division a un coût qui se manifeste de plusieurs façons :
            </p>
            
            <ul>
              <li><strong>Opportunités manquées</strong> : Un client qui aurait commandé un dessert si on lui avait suggéré au bon moment</li>
              <li><strong>Signaux subtils ignorés</strong> : L'expression faciale qui indique qu'un plat ne correspond pas aux attentes</li>
              <li><strong>Connexion émotionnelle réduite</strong> : L'impossibilité de créer ces moments mémorables qui transforment un client satisfait en ambassadeur fidèle</li>
            </ul>
            
            <h2>Repenser l'intégration technologique</h2>
            <p>
              La solution n'est pas d'abandonner la technologie – elle est essentielle à l'efficacité opérationnelle moderne. La vraie question est : comment pouvons-nous bénéficier des avantages de la technologie sans sacrifier l'attention humaine ?
            </p>
            
            <p>
              C'est précisément le défi que nous avons relevé en développant Sotto. En remplaçant les interfaces à écran par un système vocal intelligent, nous permettons à votre équipe de maintenir un contact visuel constant avec vos clients tout en bénéficiant de tous les avantages de la technologie moderne.
            </p>
            
            <h2>Une nouvelle approche centrée sur l'humain</h2>
            <p>
              Imaginez un service où votre équipe peut :
            </p>
            
            <ul>
              <li>Prendre des commandes tout en maintenant un contact visuel constant</li>
              <li>Recevoir des alertes discrètes lorsqu'un plat est prêt à être servi</li>
              <li>Obtenir instantanément des informations sur les allergènes ou les suggestions d'accompagnement</li>
              <li>Tout cela sans jamais avoir à regarder un écran</li>
            </ul>
            
            <p>
              Cette approche ne se contente pas d'éliminer une barrière – elle transforme fondamentalement l'expérience de service en la recentrant sur ce qui compte vraiment : l'interaction humaine authentique.
            </p>
            
            <h2>Conclusion : Redécouvrir l'art du service</h2>
            <p>
              À l'ère du numérique, l'attention humaine non divisée devient paradoxalement le luxe ultime. Les restaurants qui sauront offrir cette attention complète et authentique se démarqueront dans un marché où l'expérience est devenue le principal facteur de différenciation.
            </p>
            
            <p>
              Il est temps de repenser notre relation avec la technologie dans la restauration. Non pas pour l'abandonner, mais pour la remettre à sa place : un outil invisible qui amplifie l'humain plutôt que de s'y substituer.
            </p>
            
            <p>
              Chez Sotto, nous croyons qu'il est possible de combiner le meilleur de la technologie moderne avec l'art intemporel du service personnalisé. Nous vous invitons à découvrir comment.
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
              <Link href="/blog/cout-cache-systemes-encaissement" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">Le coût caché des systèmes d'encaissement traditionnels</h4>
                    <p className="text-sm text-[#505A64] mt-1">Ce que les fournisseurs ne vous disent pas</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/service-ralenti-heures-pointe" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">Service ralenti aux heures de pointe?</h4>
                    <p className="text-sm text-[#505A64] mt-1">Votre système de prise de commande est peut-être le coupable</p>
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
