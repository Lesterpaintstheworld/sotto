import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Questions Fréquentes</h1>
          <p className="text-lg text-[#505A64] mb-12 text-center">
            Tout ce que vous devez savoir sur Sotto et notre système d'IA vocale pour restaurants.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Comment Sotto fonctionne-t-il dans un environnement bruyant ?</h2>
              <p className="text-[#505A64]">
                Sotto utilise une technologie avancée de filtrage audio et des micros directionnels optimisés pour les environnements de restauration. Notre IA est spécifiquement entraînée pour distinguer les commandes du bruit ambiant, même aux heures de pointe. Les algorithmes de traitement du signal isolent la voix du serveur et filtrent les bruits de fond comme les conversations des clients, la musique ou les bruits de cuisine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Quelle est l'autonomie des oreillettes ?</h2>
              <p className="text-[#505A64]">
                Nos oreillettes offrent une autonomie de 12 heures, couvrant largement un service complet. Des stations de charge discrètes sont installées dans votre établissement pour permettre une recharge rapide entre les services. Une charge de 15 minutes permet de récupérer environ 3 heures d'autonomie, ce qui assure une continuité de service même en cas d'oubli de charge. De plus, un système d'alerte prévient le personnel lorsque la batterie atteint un niveau critique.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Comment se passe la formation du personnel ?</h2>
              <p className="text-[#505A64]">
                Nous proposons une formation complète et progressive. Sotto étant basé sur le langage naturel, la courbe d'apprentissage est très rapide. La plupart des équipes sont pleinement opérationnelles en moins d'une semaine. Notre programme de formation comprend une session initiale de 2 heures, suivie d'un accompagnement personnalisé pendant les premiers jours d'utilisation. L'IA s'adapte également au vocabulaire spécifique de votre établissement et aux habitudes de parole de chaque membre du personnel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Que se passe-t-il en cas de panne de connexion ?</h2>
              <p className="text-[#505A64]">
                Sotto fonctionne comme une Progressive Web App avec un mode hors-ligne. En cas de problème de connexion, le système continue de fonctionner et se synchronise automatiquement une fois la connexion rétablie. Un mode dégradé est également disponible, permettant de continuer à prendre les commandes et à les transmettre via un système de secours. Nous recommandons également l'installation d'une connexion internet redondante pour les établissements qui dépendent fortement de notre système.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Sotto est-il compatible avec mon système de caisse actuel ?</h2>
              <p className="text-[#505A64]">
                Oui, Sotto s'intègre avec la plupart des systèmes de caisse modernes via notre API. Nous proposons également notre propre solution de caisse intelligente pour une expérience totalement intégrée et optimisée. Notre équipe technique réalise un audit de compatibilité avant l'installation et peut développer des connecteurs spécifiques si nécessaire. Nous prenons en charge les principaux systèmes du marché comme Lightspeed, Square, Tiller, Zelty et bien d'autres.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Comment Sotto gère-t-il les modifications de commande ?</h2>
              <p className="text-[#505A64]">
                Sotto comprend naturellement les modifications de commande grâce à son système de reconnaissance contextuelle. Le serveur peut simplement dire "Modifie la commande de la table 5, remplace la salade par des frites" et le système mettra à jour la commande en conséquence. Ces modifications sont instantanément transmises à la cuisine et au bar, avec des notifications appropriées pour éviter toute confusion. L'historique des modifications est également conservé pour référence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Comment sont gérées les allergies et les demandes spéciales ?</h2>
              <p className="text-[#505A64]">
                Sotto est programmé pour reconnaître et mettre en évidence les mentions d'allergènes et de demandes spéciales. Lorsqu'un serveur mentionne une allergie ou une préparation spéciale, le système marque automatiquement cette information comme prioritaire et la met en évidence dans la transmission à la cuisine. De plus, l'IA peut suggérer des alternatives adaptées aux restrictions alimentaires mentionnées, aidant ainsi le serveur à proposer des options appropriées.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Quelles sont les langues prises en charge par Sotto ?</h2>
              <p className="text-[#505A64]">
                Actuellement, Sotto prend en charge le français, l'anglais, l'espagnol et l'italien. Nous travaillons activement à l'ajout de nouvelles langues, avec le portugais, l'allemand et le néerlandais prévus pour le prochain trimestre. Notre système est conçu pour comprendre les accents régionaux et peut même fonctionner dans un environnement multilingue, permettant aux serveurs de passer d'une langue à l'autre selon les besoins.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Comment Sotto protège-t-il la confidentialité des conversations ?</h2>
              <p className="text-[#505A64]">
                Sotto est conçu avec la confidentialité comme priorité. Le système ne traite que les commandes et instructions professionnelles, en ignorant les conversations personnelles. Les données vocales sont traitées localement autant que possible, et toutes les transmissions sont chiffrées. Nous sommes entièrement conformes au RGPD et ne conservons les données vocales que pendant la durée nécessaire à l'amélioration du service, avec votre consentement explicite.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Quel est le coût d'installation et d'abonnement à Sotto ?</h2>
              <p className="text-[#505A64]">
                Notre modèle économique est basé sur un abonnement mensuel qui inclut l'installation, le matériel, les mises à jour et le support. Le tarif dépend de la taille de votre établissement et du nombre d'utilisateurs simultanés. Nous proposons également des options de paiement flexibles, y compris des formules saisonnières pour les établissements dont l'activité varie au cours de l'année. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins spécifiques.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-[#1A2A40] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Vous avez d'autres questions ?</h2>
            <p className="mb-6">Notre équipe est là pour vous aider et répondre à toutes vos interrogations.</p>
            <a href="/contact" className="inline-block rounded-full bg-[#D47D5A] text-white px-6 py-3 font-medium hover:bg-[#D47D5A]/90 transition-colors">
              Contactez-nous
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
