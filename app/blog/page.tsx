import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-[#505A64] mb-12">
            Découvrez nos derniers articles, études de cas et actualités sur l'innovation dans le secteur de la restauration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[#1A2A40]/10"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] text-sm font-medium mb-2">
                  Innovation
                </span>
                <h2 className="text-xl font-bold mb-2">Comment l'IA vocale transforme l'expérience restaurant</h2>
                <p className="text-[#505A64] mb-4">
                  Découvrez comment les technologies vocales révolutionnent le service en restaurant et améliorent l'expérience client.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#505A64]">12 mai 2023</span>
                  <Link href="/blog/ia-vocale-restaurant" className="text-[#D47D5A] font-medium hover:underline">
                    Lire l'article →
                  </Link>
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[#1A2A40]/10"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#87A28F]/10 text-[#87A28F] text-sm font-medium mb-2">
                  Étude de cas
                </span>
                <h2 className="text-xl font-bold mb-2">Le Bistrot Parisien : +15% de chiffre d'affaires avec Sotto</h2>
                <p className="text-[#505A64] mb-4">
                  Comment un restaurant traditionnel a transformé son service et augmenté sa rentabilité grâce à notre solution vocale.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#505A64]">28 avril 2023</span>
                  <Link href="/blog/etude-cas-bistrot-parisien" className="text-[#D47D5A] font-medium hover:underline">
                    Lire l'article →
                  </Link>
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[#1A2A40]/10"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#D4B483]/10 text-[#D4B483] text-sm font-medium mb-2">
                  Tendances
                </span>
                <h2 className="text-xl font-bold mb-2">5 tendances technologiques qui transforment la restauration en 2023</h2>
                <p className="text-[#505A64] mb-4">
                  Un aperçu des innovations qui façonnent l'avenir du secteur de la restauration et comment s'y préparer.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#505A64]">15 mars 2023</span>
                  <Link href="/blog/tendances-technologiques-restauration" className="text-[#D47D5A] font-medium hover:underline">
                    Lire l'article →
                  </Link>
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-[#1A2A40]/10"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1A2A40]/10 text-[#1A2A40] text-sm font-medium mb-2">
                  Guide
                </span>
                <h2 className="text-xl font-bold mb-2">Comment préparer votre équipe à l'adoption d'une IA vocale</h2>
                <p className="text-[#505A64] mb-4">
                  Les meilleures pratiques pour une transition en douceur vers un système vocal dans votre établissement.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#505A64]">2 février 2023</span>
                  <Link href="/blog/guide-adoption-ia-vocale" className="text-[#D47D5A] font-medium hover:underline">
                    Lire l'article →
                  </Link>
                </div>
              </div>
            </article>
          </div>
          
          <div className="mt-12 text-center">
            <button className="rounded-full border border-[#1A2A40] px-6 py-3 text-center hover:bg-[#1A2A40] hover:text-[#F5F5F0] transition-colors">
              Voir plus d'articles
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
