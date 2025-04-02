import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">À propos de Sotto</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Mission</h2>
            <p className="text-lg text-[#505A64] mb-6">
              Sotto est né d'une vision simple mais révolutionnaire : libérer les restaurants de la tyrannie des écrans pour créer un environnement où la technologie sert l'humain sans jamais s'interposer.
            </p>
            <p className="text-lg text-[#505A64]">
              Notre mission est de transformer l'expérience de restauration en remplaçant toutes les interfaces à écran par un système vocal IA centralisé, permettant au personnel de se concentrer sur ce qui compte vraiment : l'interaction humaine et l'expérience culinaire.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-lg text-[#505A64] mb-6">
              Fondée en 2023 par une équipe passionnée de technologie et de gastronomie, Sotto est le fruit de nombreuses années d'observation des défis auxquels font face les restaurateurs au quotidien.
            </p>
            <p className="text-lg text-[#505A64]">
              Après avoir constaté que les systèmes d'encaissement traditionnels imposaient des coûts excessifs aux restaurateurs et que la multiplication des écrans créait une barrière à l'expérience humaine, nous avons décidé de développer une solution radicalement différente.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Équipe</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-24 h-24 rounded-full bg-[#1A2A40] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center">Karim Omri</h3>
                <p className="text-center text-[#505A64]">CEO & Co-fondateur</p>
                <p className="text-center text-xs text-[#505A64] mt-2">emlyon business school</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-24 h-24 rounded-full bg-[#1A2A40] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center">Nicolas Lester Reynolds</h3>
                <p className="text-center text-[#505A64]">CTO & Co-fondateur</p>
                <p className="text-center text-xs text-[#505A64] mt-2">INSA Lyon</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-24 h-24 rounded-full bg-[#1A2A40] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center">Julie Lefèvre</h3>
                <p className="text-center text-[#505A64]">Directrice Produit</p>
              </div>
            </div>
            
            <div className="mt-10 bg-[#1A2A40]/5 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Notre expertise</h3>
              <p className="text-[#505A64] mb-4">
                Notre équipe combine une expertise unique en intelligence artificielle, développement logiciel et expérience utilisateur. Avec plus de 15 ans d'expérience dans la création de solutions technologiques innovantes pour la restauration, nous apportons une perspective unique au secteur.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-[#D47D5A]">●</span> Karim Omri, CEO
                  </h4>
                  <p className="text-sm text-[#505A64]">
                    Entrepreneur aguerri, Karim dirige également le Groupe Au Comptoir de la Caisse depuis plus de 16 ans, leader dans les solutions de caisse et TPV pour la restauration. Cette double expertise lui permet d'avoir une vision complète des enjeux du secteur et d'apporter des solutions innovantes parfaitement adaptées aux besoins des restaurateurs.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-[#D47D5A]">●</span> Nicolas Lester Reynolds, CTO
                  </h4>
                  <p className="text-sm text-[#505A64]">
                    Ingénieur INSA Lyon, Nicolas a co-fondé et développé plusieurs startups à succès, dont Civocracy (1M€+ levés) et des plateformes de jeu comptant des millions d'utilisateurs. Expert en IA et systèmes distribués, il apporte son expertise en développement de systèmes vocaux avancés et en architecture cloud.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Force : L'Intégration Verticale</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-40 h-40 mx-auto md:mx-0 flex items-center justify-center relative">
                    <Image 
                      src="/acdc.jpg" 
                      alt="Logo du Groupe Au Comptoir de la Caisse" 
                      width={160}
                      height={160}
                      className="rounded-lg shadow-md"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-tr from-[#D47D5A]/10 to-transparent rounded-lg -z-10 blur-sm"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Synergie avec le Groupe Au Comptoir de la Caisse</h3>
                  <p className="text-[#505A64] mb-4">
                    Sotto bénéficie d'une intégration verticale unique grâce à la double fonction de Karim Omri, également PDG du Groupe Au Comptoir de la Caisse, leader dans les solutions de caisse et TPV pour la restauration depuis plus de 16 ans. Cette synergie nous permet d'intégrer parfaitement notre technologie vocale à des systèmes d'encaissement éprouvés.
                  </p>
                  <p className="text-[#505A64] mt-4">
                    Cette alliance stratégique offre à nos clients une solution complète et parfaitement intégrée, combinant l'expertise historique d'ACDC en matière de systèmes d'encaissement avec l'innovation de pointe de Sotto en intelligence artificielle vocale.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos Valeurs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-[#D47D5A]">●</span> Innovation Humaine
                </h3>
                <p className="text-[#505A64]">
                  Nous croyons que la meilleure technologie est celle qui s'efface pour mettre l'humain au centre.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-[#D47D5A]">●</span> Excellence Culinaire
                </h3>
                <p className="text-[#505A64]">
                  Nous sommes passionnés par la gastronomie et nous concevons nos solutions pour sublimer l'art culinaire.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-[#D47D5A]">●</span> Simplicité
                </h3>
                <p className="text-[#505A64]">
                  Nous croyons en la puissance de la simplicité et nous nous efforçons d'éliminer toute complexité inutile.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-[#D47D5A]">●</span> Partenariat
                </h3>
                <p className="text-[#505A64]">
                  Nous considérons nos clients comme des partenaires et nous nous engageons à leur réussite à long terme.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Vision pour l'Avenir</h2>
            <p className="text-lg text-[#505A64] mb-6">
              Nous envisageons un futur où la technologie dans la restauration devient invisible, où les interactions humaines reprennent leur place centrale, et où les restaurateurs peuvent se concentrer sur leur passion : créer des expériences culinaires mémorables.
            </p>
            <p className="text-lg text-[#505A64]">
              Avec nos partenaires stratégiques comme le Groupe Au Comptoir de la Caisse, nous travaillons à construire un écosystème complet qui révolutionne l'ensemble des opérations de restauration, de la prise de commande au paiement, en passant par la gestion des stocks et l'analyse des données.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
