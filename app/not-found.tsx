import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#D47D5A]">Coming Soon!</h1>
          
          <div className="w-24 h-1 bg-[#D47D5A] mx-auto mb-10"></div>
          
          <p className="text-xl text-[#505A64] mb-10 max-w-2xl mx-auto">
            Cette page est en cours de développement et sera bientôt disponible. 
            Revenez nous voir prochainement pour découvrir les nouvelles fonctionnalités de Sotto.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-[#D47D5A] text-white px-6 py-3 rounded-md hover:bg-[#D47D5A]/90 transition-colors"
          >
            <span>Retour à l'accueil</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
