import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'})}
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              Chez Sotto, nous accordons une grande importance à la protection de vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et 
              protégeons vos informations lorsque vous utilisez notre site web et nos services.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Informations que nous collectons</h2>
            <p>
              Nous pouvons collecter les types d'informations suivants :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Informations d'identification (nom, prénom, adresse email, numéro de téléphone)</li>
              <li>Informations professionnelles (nom de l'établissement, poste)</li>
              <li>Données de navigation sur notre site web</li>
              <li>Informations que vous nous fournissez volontairement lors de vos communications avec nous</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Utilisation des informations</h2>
            <p>
              Nous utilisons vos informations pour :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Vous fournir nos services et répondre à vos demandes</li>
              <li>Améliorer et personnaliser votre expérience</li>
              <li>Vous communiquer des informations sur nos services</li>
              <li>Assurer la sécurité et le bon fonctionnement de notre site</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Partage des informations</h2>
            <p>
              Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Nos prestataires de services qui nous aident à exploiter notre activité</li>
              <li>Les autorités compétentes lorsque la loi l'exige</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
              contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse : contact@sottohq.ai
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
            <p>
              Notre site peut utiliser des cookies pour améliorer votre expérience. Vous pouvez configurer 
              votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Modifications de notre politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous 
              informerons de tout changement significatif par un avis sur notre site.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact</h2>
            <p>
              Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
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
