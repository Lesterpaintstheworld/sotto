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
                <h3 className="text-xl font-bold text-center">Sophie Martin</h3>
                <p className="text-center text-[#505A64]">CEO & Co-fondatrice</p>
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
                Notre équipe combine une expertise unique en intelligence artificielle, développement logiciel et expérience utilisateur. Avec plus de 10 ans d'expérience dans la création de solutions technologiques innovantes, nous apportons une perspective unique au secteur de la restauration.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-[#D47D5A]">●</span> Nicolas Lester Reynolds, CTO
                  </h4>
                  <p className="text-sm text-[#505A64]">
                    Ingénieur INSA Lyon, Nicolas a co-fondé et développé plusieurs startups à succès, dont Civocracy (1M€+ levés) et des plateformes de jeu comptant des millions d'utilisateurs. Expert en IA et systèmes distribués, il apporte son expertise en développement de systèmes vocaux avancés et en architecture cloud.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span className="text-[#D47D5A]">●</span> Parcours entrepreneurial
                  </h4>
                  <p className="text-sm text-[#505A64]">
                    Notre équipe a fondé et développé plusieurs entreprises innovantes dans les domaines de la technologie et des services. Cette expérience nous permet de comprendre les défis des entrepreneurs et d'apporter des solutions pragmatiques et efficaces au secteur de la restauration.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Notre Partenaire Stratégique</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-32 h-32 rounded-full bg-[#1A2A40]/10 mx-auto md:mx-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#1A2A40]">ACDC</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Groupe Au Comptoir de la Caisse</h3>
                  <p className="text-[#505A64] mb-4">
                    Sotto est fier de collaborer avec le Groupe Au Comptoir de la Caisse, leader dans les solutions de caisse et TPV pour la restauration depuis plus de 15 ans. Cette alliance stratégique nous permet d'intégrer notre technologie vocale à des systèmes d'encaissement éprouvés.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A2A40]/10 flex items-center justify-center">
                      <span className="font-bold">KO</span>
                    </div>
                    <div>
                      <p className="font-bold">Karim Omri</p>
                      <p className="text-sm text-[#505A64]">PDG, Groupe Au Comptoir de la Caisse</p>
                    </div>
                  </div>
                  <p className="text-[#505A64] mt-4 italic">
                    "L'innovation dans le secteur de la restauration passe par des solutions qui simplifient le quotidien des professionnels tout en améliorant l'expérience client. La vision de Sotto s'aligne parfaitement avec notre philosophie d'excellence et de service."
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
