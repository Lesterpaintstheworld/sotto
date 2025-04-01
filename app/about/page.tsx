import Header from "../components/Header";
import Footer from "../components/Footer";

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
                <h3 className="text-xl font-bold text-center">Thomas Dubois</h3>
                <p className="text-center text-[#505A64]">CTO & Co-fondateur</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-24 h-24 rounded-full bg-[#1A2A40] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center">Julie Lefèvre</h3>
                <p className="text-center text-[#505A64]">Directrice Produit</p>
              </div>
            </div>
          </section>
          
          <section>
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
