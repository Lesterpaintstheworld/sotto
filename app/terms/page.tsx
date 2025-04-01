import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant le site web de Sotto (sottohq.ai), vous acceptez d'être lié par ces 
              Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Description du service</h2>
            <p>
              Sotto propose un système IA vocal qui révolutionne les opérations de restauration en éliminant 
              les interfaces à écran. Notre site web fournit des informations sur nos services et permet de 
              demander des démonstrations.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Utilisation du site</h2>
            <p>
              Vous vous engagez à utiliser notre site conformément aux lois et réglementations applicables. 
              Il est interdit d'utiliser notre site pour :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Violer des lois ou réglementations</li>
              <li>Enfreindre les droits de propriété intellectuelle</li>
              <li>Transmettre des virus ou codes malveillants</li>
              <li>Collecter des informations sur d'autres utilisateurs sans leur consentement</li>
              <li>Perturber le fonctionnement normal du site</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriété intellectuelle</h2>
            <p>
              Tous les contenus présents sur notre site (textes, images, logos, vidéos, etc.) sont protégés 
              par des droits de propriété intellectuelle et appartiennent à Sotto ou à ses partenaires. Toute 
              reproduction, distribution ou utilisation non autorisée de ces contenus est strictement interdite.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Liens vers d'autres sites</h2>
            <p>
              Notre site peut contenir des liens vers des sites web tiers. Ces liens sont fournis uniquement 
              pour votre commodité. Nous n'avons aucun contrôle sur le contenu de ces sites et déclinons toute 
              responsabilité quant à leur contenu ou leurs pratiques en matière de confidentialité.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation de responsabilité</h2>
            <p>
              Dans les limites autorisées par la loi, Sotto ne pourra être tenu responsable des dommages directs, 
              indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité 
              d'utiliser notre site.
            </p>
            <p>
              Nous nous efforçons de maintenir les informations sur notre site à jour et exactes, mais nous ne 
              garantissons pas l'exactitude, l'exhaustivité ou la pertinence de ces informations.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifications des conditions</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront 
              effet dès leur publication sur notre site. Nous vous encourageons à consulter régulièrement cette page 
              pour prendre connaissance des éventuelles modifications.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Droit applicable et juridiction compétente</h2>
            <p>
              Ces conditions sont régies par le droit français. Tout litige relatif à l'interprétation ou à 
              l'exécution de ces conditions sera soumis à la compétence exclusive des tribunaux français.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact</h2>
            <p>
              Si vous avez des questions concernant ces conditions, veuillez nous contacter à :
            </p>
            <p>
              Email : contact@sottohq.ai<br />
              Adresse : 97B rue Pierre Valdo, 69005 Lyon<br />
              Téléphone : +33 6 21 23 58 50
            </p>
          </div>
          
          <div className="mt-12">
            <Link 
              href="/"
              className="inline-block rounded-full bg-[#1A2A40] text-[#F5F5F0] px-6 py-3 hover:bg-[#D47D5A] transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
