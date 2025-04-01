import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions légales</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
            <p className="text-[#505A64] mb-4">
              Le site sottohq.ai est édité par la société Sotto SAS, société par actions simplifiée au capital de 10 000 euros, immatriculée au Registre du Commerce et des Sociétés de Lyon sous le numéro 123 456 789, dont le siège social est situé au 97B rue Pierre Valdo, 69005 Lyon, France.
            </p>
            <p className="text-[#505A64] mb-4">
              <strong>Numéro de TVA intracommunautaire :</strong> FR 12 345 678 901
            </p>
            <p className="text-[#505A64] mb-4">
              <strong>Directeur de la publication :</strong> Sophie Martin, Présidente
            </p>
            <p className="text-[#505A64]">
              <strong>Contact :</strong> contact@sottohq.ai | +33 6 21 23 58 50
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
            <p className="text-[#505A64]">
              Le site sottohq.ai est hébergé par la société Vercel Inc., dont le siège social est situé au 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
            <p className="text-[#505A64] mb-4">
              L'ensemble du contenu du site sottohq.ai (structure, textes, logos, images, vidéos, graphismes, etc.) est la propriété exclusive de Sotto SAS ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="text-[#505A64] mb-4">
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Sotto SAS.
            </p>
            <p className="text-[#505A64]">
              Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Protection des données personnelles</h2>
            <p className="text-[#505A64] mb-4">
              Sotto SAS s'engage à respecter la confidentialité des données personnelles communiquées par les utilisateurs du site sottohq.ai et à les traiter dans le respect de la loi Informatique et Libertés du 6 janvier 1978 modifiée et du Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p className="text-[#505A64] mb-4">
              Les informations recueillies sur le site font l'objet d'un traitement informatique destiné à répondre aux demandes des utilisateurs, à leur fournir les services demandés et à les tenir informés des offres de services de Sotto SAS.
            </p>
            <p className="text-[#505A64] mb-4">
              Conformément à la réglementation en vigueur, les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles les concernant. Pour exercer ces droits, les utilisateurs peuvent contacter Sotto SAS à l'adresse suivante : privacy@sottohq.ai.
            </p>
            <p className="text-[#505A64]">
              Pour plus d'informations sur la manière dont Sotto SAS traite les données personnelles, veuillez consulter notre <Link href="/privacy" className="text-[#D47D5A] hover:underline">Politique de confidentialité</Link>.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-[#505A64] mb-4">
              Le site sottohq.ai utilise des cookies pour améliorer l'expérience utilisateur, analyser le trafic et personnaliser le contenu. En naviguant sur le site, l'utilisateur accepte l'utilisation de cookies conformément à notre <Link href="/privacy" className="text-[#D47D5A] hover:underline">Politique de confidentialité</Link>.
            </p>
            <p className="text-[#505A64]">
              L'utilisateur peut configurer son navigateur pour refuser les cookies ou être alerté lorsque des cookies sont envoyés. Toutefois, certaines parties du site peuvent ne pas fonctionner correctement si les cookies sont désactivés.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Limitation de responsabilité</h2>
            <p className="text-[#505A64] mb-4">
              Sotto SAS s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le site sottohq.ai. Toutefois, Sotto SAS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site.
            </p>
            <p className="text-[#505A64] mb-4">
              Sotto SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.
            </p>
            <p className="text-[#505A64]">
              Sotto SAS ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès au site sottohq.ai ou de l'utilisation des informations qu'il contient.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Loi applicable et juridiction compétente</h2>
            <p className="text-[#505A64] mb-4">
              Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            <p className="text-[#505A64]">
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante : legal@sottohq.ai.
            </p>
          </section>
          
          <div className="mt-12 text-center">
            <p className="text-[#505A64] mb-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/privacy" className="text-[#D47D5A] hover:underline">Politique de confidentialité</Link>
              <Link href="/terms" className="text-[#D47D5A] hover:underline">Conditions d'utilisation</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
