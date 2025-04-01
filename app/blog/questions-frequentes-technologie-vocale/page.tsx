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
            <span>Questions fréquentes sur la technologie vocale</span>
          </div>
          
          {/* En-tête de l'article */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes sur la technologie vocale en restauration</h1>
            <div className="flex items-center text-[#505A64] text-sm mb-4">
              <span>Publié le 12 avril 2024</span>
              <span className="mx-2">•</span>
              <span>10 min de lecture</span>
              <span className="mx-2">•</span>
              <span>FAQ</span>
            </div>
          </div>
          
          {/* Image principale */}
          <div className="mb-8 bg-[#1A2A40]/10 rounded-lg aspect-video relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[#1A2A40]/30 text-xl font-bold">
              Image: Serveur utilisant une oreillette Sotto dans un restaurant animé
            </div>
          </div>
          
          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-medium text-[#1A2A40]">
              L'adoption d'une technologie vocale comme Sotto suscite naturellement de nombreuses questions. Dans cet article, nous répondons aux interrogations les plus fréquentes des restaurateurs qui envisagent de franchir le pas vers un restaurant sans écran.
            </p>
            
            <h2>Questions sur la technologie</h2>
            
            <h3>Comment Sotto fonctionne-t-il dans un environnement bruyant comme un restaurant ?</h3>
            <p>
              C'est l'une des questions les plus fréquentes, et à juste titre. Sotto utilise une combinaison de technologies avancées pour garantir une reconnaissance vocale fiable même dans les environnements bruyants :
            </p>
            
            <ul>
              <li><strong>Microphones directionnels</strong> : Les oreillettes sont équipées de microphones qui captent principalement la voix du porteur</li>
              <li><strong>Filtrage acoustique adaptatif</strong> : Des algorithmes avancés distinguent la voix humaine des bruits ambiants</li>
              <li><strong>Apprentissage contextuel</strong> : Le système s'adapte au vocabulaire spécifique de votre restaurant et aux voix de votre équipe</li>
              <li><strong>Confirmation intelligente</strong> : Sotto confirme les commandes de manière non intrusive pour éviter les erreurs</li>
            </ul>
            
            <p>
              Nos tests montrent un taux de reconnaissance supérieur à 98% même dans des conditions de bruit ambiant de 85dB (équivalent à un restaurant très animé un vendredi soir).
            </p>
            
            <h3>Que se passe-t-il en cas de panne de WiFi ou de courant ?</h3>
            <p>
              Sotto intègre plusieurs niveaux de redondance pour garantir la continuité du service :
            </p>
            
            <ul>
              <li><strong>Mode hors-ligne</strong> : En cas de coupure WiFi, le système bascule automatiquement en mode local et continue de fonctionner</li>
              <li><strong>Synchronisation différée</strong> : Les données sont stockées localement et synchronisées dès le retour de la connexion</li>
              <li><strong>Batterie de secours</strong> : Le boîtier central dispose d'une batterie intégrée permettant jusqu'à 4 heures d'autonomie en cas de coupure de courant</li>
              <li><strong>Mode dégradé</strong> : Un système de secours minimaliste permet de continuer à prendre et transmettre les commandes même en cas de défaillance majeure</li>
            </ul>
            
            <p>
              De plus, nous recommandons de conserver un terminal de caisse traditionnel comme solution de repli, bien que nos clients rapportent rarement avoir besoin d'y recourir.
            </p>
            
            <h3>Les oreillettes sont-elles confortables pour un usage prolongé ?</h3>
            <p>
              Absolument. Nous avons accordé une attention particulière au confort des oreillettes, sachant qu'elles seront portées pendant de longues périodes :
            </p>
            
            <ul>
              <li>Poids ultra-léger (moins de 7 grammes)</li>
              <li>Design ergonomique avec plusieurs tailles d'embouts pour s'adapter à tous</li>
              <li>Matériaux hypoallergéniques et respirants</li>
              <li>Autonomie de 12 heures, couvrant largement un service complet</li>
            </ul>
            
            <p>
              Les retours de nos utilisateurs confirment que les oreillettes sont confortables même après plusieurs heures d'utilisation. Certains serveurs rapportent même "oublier" qu'ils les portent.
            </p>
            
            <h2>Questions sur l'intégration</h2>
            
            <h3>Sotto est-il compatible avec mon système de caisse actuel ?</h3>
            <p>
              Sotto s'intègre avec la plupart des systèmes de caisse modernes grâce à notre API universelle. Nous avons des intégrations directes avec les principaux fournisseurs du marché :
            </p>
            
            <ul>
              <li>Lightspeed Restaurant</li>
              <li>Toast</li>
              <li>Square</li>
              <li>Tiller</li>
              <li>Zelty</li>
              <li>Maître'D</li>
              <li>Et bien d'autres...</li>
            </ul>
            
            <p>
              Pour les systèmes moins courants, notre équipe technique réalise une étude de faisabilité gratuite avant l'installation. Dans les rares cas où une intégration directe n'est pas possible, nous proposons une solution de "bridge" qui permet la coexistence des deux systèmes.
            </p>
            
            <h3>Comment Sotto s'intègre-t-il avec mes autres outils (comptabilité, gestion des stocks, etc.) ?</h3>
            <p>
              Sotto adopte une approche API-first qui facilite l'intégration avec votre écosystème existant :
            </p>
            
            <ul>
              <li><strong>Comptabilité</strong> : Export automatique vers les principaux logiciels (Sage, QuickBooks, etc.)</li>
              <li><strong>Gestion des stocks</strong> : Mise à jour en temps réel des niveaux de stock</li>
              <li><strong>CRM et marketing</strong> : Synchronisation avec vos outils de gestion de la relation client</li>
              <li><strong>Plateformes de livraison</strong> : Intégration avec Uber Eats, Deliveroo, etc.</li>
            </ul>
            
            <p>
              Notre philosophie est de nous adapter à votre environnement, pas l'inverse. Nous travaillons avec vous pour cartographier vos besoins d'intégration et les mettre en œuvre.
            </p>
            
            <h3>Faut-il modifier mon menu ou ma façon de travailler pour utiliser Sotto ?</h3>
            <p>
              Non, Sotto s'adapte à votre façon de travailler, pas l'inverse. Votre menu est importé tel quel dans le système, et nous configurons Sotto pour reconnaître votre terminologie spécifique.
            </p>
            
            <p>
              La seule recommandation que nous faisons est de standardiser légèrement la façon dont les commandes sont énoncées, pour garantir une reconnaissance optimale. Par exemple, dire "un steak saignant" plutôt que simplement "un saignant". Ces ajustements mineurs sont intégrés naturellement pendant la formation.
            </p>
            
            <h2>Questions sur la formation et l'adoption</h2>
            
            <h3>Combien de temps faut-il pour former mon équipe ?</h3>
            <p>
              La formation initiale est remarquablement courte, généralement 30 minutes par personne. Cela s'explique par l'intuitivité du système qui repose sur le langage naturel.
            </p>
            
            <p>
              Notre programme de formation comprend :
            </p>
            
            <ul>
              <li>Une session de formation initiale le jour de l'installation</li>
              <li>Des vidéos de formation accessibles à tout moment</li>
              <li>Une documentation simple et visuelle</li>
              <li>Un mode "entraînement" permettant de pratiquer sans impacter les opérations réelles</li>
            </ul>
            
            <p>
              La plupart des équipes sont opérationnelles dès le premier jour, et pleinement à l'aise avec toutes les fonctionnalités en moins d'une semaine.
            </p>
            
            <h3>Comment gérer la résistance au changement dans mon équipe ?</h3>
            <p>
              La résistance au changement est naturelle, mais notre expérience montre qu'elle est généralement minime avec Sotto, pour plusieurs raisons :
            </p>
            
            <ul>
              <li>L'interface vocale est intuitive et ne nécessite pas de compétences techniques</li>
              <li>Les bénéfices pour le personnel sont immédiats (moins de stress, plus de temps avec les clients)</li>
              <li>Le mode parallèle permet une transition en douceur, sans pression</li>
              <li>L'approche est inclusive, adaptée à tous les profils, y compris les collaborateurs moins technophiles</li>
            </ul>
            
            <p>
              Notre conseil principal : impliquez votre équipe dès le début du projet. Expliquez-leur les bénéfices, non seulement pour le restaurant mais aussi pour leur confort de travail quotidien.
            </p>
            
            <h3>Les clients remarquent-ils que les serveurs portent des oreillettes ?</h3>
            <p>
              Les oreillettes Sotto sont conçues pour être discrètes, avec un design minimaliste et une couleur qui se fond avec la plupart des tenues professionnelles. La majorité des clients ne les remarquent pas.
            </p>
            
            <p>
              Pour ceux qui les remarquent, l'expérience de nos clients montre que la réaction est généralement positive. Les clients sont impressionnés par l'aspect innovant et apprécient le service plus attentif qui en résulte.
            </p>
            
            <p>
              Certains de nos restaurants partenaires choisissent même d'en faire un élément distinctif, expliquant brièvement à leurs clients comment cette technologie leur permet d'offrir un service plus personnalisé.
            </p>
            
            <h2>Questions sur les coûts et le ROI</h2>
            
            <h3>Quel est le coût total de Sotto ?</h3>
            <p>
              Sotto fonctionne sur un modèle d'abonnement transparent, sans coûts cachés :
            </p>
            
            <ul>
              <li><strong>Abonnement mensuel</strong> : à partir de 249€ HT/mois pour un restaurant standard (jusqu'à 10 utilisateurs simultanés)</li>
              <li><strong>Matériel</strong> : inclus dans l'abonnement (oreillettes, station de charge, boîtier central)</li>
              <li><strong>Installation et configuration</strong> : offertes</li>
              <li><strong>Formation initiale</strong> : offerte</li>
              <li><strong>Support technique</strong> : inclus 7j/7</li>
              <li><strong>Mises à jour</strong> : incluses automatiquement</li>
            </ul>
            
            <p>
              Il n'y a aucun investissement initial, ce qui élimine le risque financier. De plus, nous proposons une période d'essai de 30 jours avec garantie de satisfaction.
            </p>
            
            <h3>Combien de temps faut-il pour rentabiliser l'investissement ?</h3>
            <p>
              Le retour sur investissement est remarquablement rapide. Nos analyses montrent que la plupart des restaurants atteignent le point de rentabilité dès le premier mois d'utilisation.
            </p>
            
            <p>
              Ce ROI rapide s'explique par plusieurs facteurs :
            </p>
            
            <ul>
              <li>Augmentation immédiate de la capacité de service aux heures de pointe (+12% en moyenne)</li>
              <li>Hausse du panier moyen (+8% en moyenne) grâce à un service plus attentif</li>
              <li>Réduction des erreurs de commande (-75% en moyenne)</li>
              <li>Économies sur les coûts matériels (moins de terminaux et tablettes)</li>
            </ul>
            
            <p>
              Pour un restaurant réalisant 80 000€ de chiffre d'affaires mensuel, ces améliorations représentent un gain potentiel de 6 400€ à 9 600€ par mois, pour un investissement de 249€.
            </p>
            
            <h3>Y a-t-il des frais cachés ou des coûts supplémentaires à prévoir ?</h3>
            <p>
              Non, notre modèle de tarification est totalement transparent. L'abonnement mensuel couvre tous les aspects du service :
            </p>
            
            <ul>
              <li>Aucune commission sur les transactions</li>
              <li>Aucun frais de mise à jour ou de maintenance</li>
              <li>Remplacement gratuit du matériel en cas de défaillance</li>
              <li>Support illimité sans surcoût</li>
              <li>Formations complémentaires incluses</li>
            </ul>
            
            <p>
              Le seul coût supplémentaire potentiel concerne le remplacement des oreillettes en cas de perte (85€ HT par unité), mais notre expérience montre que cela reste exceptionnel grâce au système de rangement intégré.
            </p>
            
            <h2>Questions sur la sécurité et la confidentialité</h2>
            
            <h3>Mes données sont-elles sécurisées avec Sotto ?</h3>
            <p>
              La sécurité des données est une priorité absolue pour Sotto. Notre infrastructure est conçue selon les standards les plus élevés :
            </p>
            
            <ul>
              <li>Chiffrement de bout en bout de toutes les communications</li>
              <li>Hébergement dans des centres de données certifiés ISO 27001 en Europe</li>
              <li>Conformité totale au RGPD</li>
              <li>Audits de sécurité réguliers par des tiers indépendants</li>
              <li>Sauvegardes automatiques chiffrées</li>
            </ul>
            
            <p>
              De plus, vous restez propriétaire de vos données à tout moment, avec la possibilité d'exporter ou de supprimer vos informations sur demande.
            </p>
            
            <h3>Les conversations des clients sont-elles enregistrées ?</h3>
            <p>
              Non, Sotto est conçu pour respecter la vie privée des clients et du personnel. Le système ne traite que les commandes et instructions professionnelles, pas les conversations ambiantes.
            </p>
            
            <p>
              Techniquement, le système fonctionne avec une "activation contextuelle" qui ne traite que les phrases pertinentes pour le service (commandes, modifications, demandes d'information sur les plats, etc.). Les conversations personnelles ne sont ni traitées, ni stockées.
            </p>
            
            <h3>Comment gérer les autorisations et les niveaux d'accès ?</h3>
            <p>
              Sotto offre un système de gestion des droits granulaire qui vous permet de définir précisément ce que chaque membre de l'équipe peut faire :
            </p>
            
            <ul>
              <li>Profils prédéfinis (serveur, chef de rang, manager, chef, etc.)</li>
              <li>Permissions personnalisables (prise de commande, annulations, remises, rapports, etc.)</li>
              <li>Authentification sécurisée pour chaque utilisateur</li>
              <li>Journal d'activité détaillé pour la traçabilité</li>
            </ul>
            
            <p>
              Cette flexibilité vous permet d'adapter le système à votre organisation et à vos procédures internes.
            </p>
            
            <h2>Questions sur le support et la maintenance</h2>
            
            <h3>Comment fonctionne le support technique ?</h3>
            <p>
              Notre support technique est conçu pour répondre aux besoins spécifiques de la restauration, avec des temps de réponse adaptés à l'urgence de la situation :
            </p>
            
            <ul>
              <li><strong>Support d'urgence</strong> : Disponible 7j/7, temps de réponse garanti de moins de 15 minutes pendant les heures de service</li>
              <li><strong>Support standard</strong> : Disponible 7j/7 de 8h à 23h, temps de réponse moyen de 2 heures</li>
              <li><strong>Assistance proactive</strong> : Surveillance continue de votre système pour détecter et résoudre les problèmes avant qu'ils n'affectent votre service</li>
            </ul>
            
            <p>
              Le support est accessible via plusieurs canaux : téléphone direct, chat intégré, email, et même via le système Sotto lui-même ("Sotto, j'ai besoin d'assistance").
            </p>
            
            <h3>Comment sont gérées les mises à jour du système ?</h3>
            <p>
              Les mises à jour de Sotto sont conçues pour être non disruptives :
            </p>
            
            <ul>
              <li>Déploiement automatique pendant les heures creuses</li>
              <li>Aucune interruption de service (mise à jour en arrière-plan)</li>
              <li>Notification préalable pour les mises à jour majeures</li>
              <li>Possibilité de reporter une mise à jour si nécessaire</li>
            </ul>
            
            <p>
              Chaque mise à jour est accompagnée d'une note détaillant les nouvelles fonctionnalités ou améliorations, avec des tutoriels vidéo si nécessaire.
            </p>
            
            <h3>Que se passe-t-il si une oreillette est perdue ou endommagée ?</h3>
            <p>
              Nous comprenons que les accidents arrivent, surtout dans l'environnement dynamique d'un restaurant. Notre politique de remplacement est simple :
            </p>
            
            <ul>
              <li>Remplacement gratuit en cas de défaillance technique (garantie complète)</li>
              <li>Remplacement rapide en cas de perte ou dommage (expédié sous 24h)</li>
              <li>Oreillettes de secours disponibles dans votre kit initial</li>
              <li>Possibilité de commander des oreillettes supplémentaires à tout moment</li>
            </ul>
            
            <p>
              De plus, le système peut fonctionner temporairement avec moins d'oreillettes que d'utilisateurs grâce à un système de partage intelligent.
            </p>
            
            <h2>Conclusion : une technologie mature et éprouvée</h2>
            
            <p>
              Sotto représente une avancée significative dans la façon dont la technologie s'intègre au monde de la restauration. Loin d'être un gadget expérimental, c'est une solution mature, développée en étroite collaboration avec des professionnels du secteur et déployée avec succès dans des dizaines d'établissements.
            </p>
            
            <p>
              Les questions abordées dans cet article reflètent les préoccupations légitimes des restaurateurs face à l'adoption d'une nouvelle technologie. Nous espérons que nos réponses vous ont permis de mieux comprendre comment Sotto peut s'intégrer harmonieusement dans votre établissement, avec un minimum de perturbation et un maximum de bénéfices.
            </p>
            
            <p>
              Si vous avez d'autres questions ou souhaitez approfondir certains aspects, notre équipe est à votre disposition pour une consultation personnalisée ou une démonstration dans votre établissement.
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
              <Link href="/blog/installation-4-heures" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">Installation en 4 heures</h4>
                    <p className="text-sm text-[#505A64] mt-1">Comment se déroule la transition vers un restaurant sans écran</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/roi-solution-vocale" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-40 bg-[#1A2A40]/10 relative"></div>
                  <div className="p-4">
                    <h4 className="font-bold group-hover:text-[#D47D5A] transition-colors">ROI d'une solution vocale</h4>
                    <p className="text-sm text-[#505A64] mt-1">Calcul du retour sur investissement mois par mois</p>
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
