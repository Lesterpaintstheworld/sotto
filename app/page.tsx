import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      {/* En-tête */}
      <header className="flex justify-between items-center p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">SOTTO</h1>
        <nav className="hidden md:flex gap-8">
          <a href="#vision" className="hover:text-[#D47D5A] transition-colors">Vision</a>
          <a href="#valeur" className="hover:text-[#D47D5A] transition-colors">Valeur</a>
          <a href="#fonctionnalites" className="hover:text-[#D47D5A] transition-colors">Fonctionnalités</a>
          <a href="#contact" className="hover:text-[#D47D5A] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Section héro */}
      <section className="px-6 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Libérez votre restaurant des écrans</h2>
          <p className="text-lg md:text-xl text-[#505A64]">
            Sotto est un système IA vocal qui révolutionne les opérations de restauration en éliminant les interfaces à écran, créant une expérience plus humaine et efficace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#demo"
              className="rounded-full bg-[#1A2A40] text-[#F5F5F0] px-6 py-3 text-center hover:bg-[#D47D5A] transition-colors"
            >
              Demander une démo
            </a>
            <a
              href="#fonctionnement"
              className="rounded-full border border-[#1A2A40] px-6 py-3 text-center hover:bg-[#1A2A40] hover:text-[#F5F5F0] transition-colors"
            >
              Comment ça marche
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#D47D5A]/10 flex items-center justify-center">
            <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#D47D5A]/20 flex items-center justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#D47D5A]/30 flex items-center justify-center">
                {/* Ici on pourrait mettre une image d'oreillette ou un logo */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D47D5A] flex items-center justify-center text-[#F5F5F0] text-2xl font-bold">
                  S
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section id="vision" className="px-6 md:px-20 py-16 bg-[#1A2A40] text-[#F5F5F0]">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Notre Vision</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Sotto transforme l'expérience de restauration en remplaçant toutes les interfaces à écran (caisses enregistreuses, tablettes, bornes) par un système vocal IA centralisé.
          </p>
          <p className="text-lg leading-relaxed">
            En connectant le personnel via des oreillettes discrètes, Sotto fluidifie les opérations tout en recentrant l'attention sur l'interaction humaine et l'expérience culinaire.
          </p>
        </div>
      </section>

      {/* Section Proposition de Valeur */}
      <section id="valeur" className="px-6 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Proposition de Valeur</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-[#D47D5A]">Pour les Restaurateurs</h3>
            <ul className="space-y-2">
              <li>• Réduction des coûts matériels</li>
              <li>• Optimisation de l'espace</li>
              <li>• Données opérationnelles en temps réel</li>
              <li>• Simplification de la formation</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-[#D47D5A]">Pour le Personnel</h3>
            <ul className="space-y-2">
              <li>• Interactions plus naturelles</li>
              <li>• Moins de temps sur les interfaces</li>
              <li>• Assistance contextuelle</li>
              <li>• Mains libres en permanence</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-[#D47D5A]">Pour les Clients</h3>
            <ul className="space-y-2">
              <li>• Service plus attentif</li>
              <li>• Temps d'attente réduit</li>
              <li>• Atmosphère sans écrans</li>
              <li>• Expérience plus humaine</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section id="fonctionnalites" className="px-6 md:px-20 py-16 bg-[#87A28F]/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Fonctionnalités Principales</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Système Vocal Intelligent</h3>
              <p>Reconnaissance du langage naturel avec compréhension contextuelle des commandes et adaptation aux particularités linguistiques.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Communication Fluide</h3>
              <p>Transmission instantanée entre la salle et la cuisine, coordination automatisée des temps de service.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">IA Centralisée</h3>
              <p>Gestion intelligente de toutes les opérations du restaurant avec analyse en temps réel des performances.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Interface Discrète</h3>
              <p>Oreillettes élégantes et confortables avec micros haute-performance optimisés pour environnements bruyants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Démo */}
      <section id="demo" className="px-6 md:px-20 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre restaurant ?</h2>
          <p className="text-lg mb-10">
            Demandez une démonstration personnalisée et découvrez comment Sotto peut s'adapter à votre établissement.
          </p>
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Nom de l'établissement"
              className="p-3 border border-[#1A2A40]/20 rounded-md"
            />
            <input
              type="email"
              placeholder="Email professionnel"
              className="p-3 border border-[#1A2A40]/20 rounded-md"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              className="p-3 border border-[#1A2A40]/20 rounded-md"
            />
            <button
              type="submit"
              className="mt-2 rounded-full bg-[#D47D5A] text-[#F5F5F0] px-6 py-3 hover:bg-[#1A2A40] transition-colors"
            >
              Demander une démo
            </button>
          </form>
        </div>
      </section>

      {/* Pied de page */}
      <footer id="contact" className="bg-[#1A2A40] text-[#F5F5F0] px-6 md:px-20 py-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">SOTTO</h3>
            <p className="text-[#F5F5F0]/70">
              Libérez votre restaurant des écrans et recentrez-vous sur l'essentiel : l'humain et la gastronomie.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-[#F5F5F0]/70">info@sotto.ai</p>
            <p className="text-[#F5F5F0]/70">+33 1 23 45 67 89</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#F5F5F0]/70 hover:text-[#D47D5A]">LinkedIn</a>
              <a href="#" className="text-[#F5F5F0]/70 hover:text-[#D47D5A]">Twitter</a>
              <a href="#" className="text-[#F5F5F0]/70 hover:text-[#D47D5A]">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F5F5F0]/10 pt-6 text-center text-[#F5F5F0]/50">
          <p>© {new Date().getFullYear()} Sotto. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
