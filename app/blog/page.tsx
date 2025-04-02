import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

// Liste des articles de blog
const blogPosts = [
  {
    id: "comment-les-ecrans-immiscent",
    title: "Comment les écrans s'immiscent entre vous et vos clients : l'impact invisible sur l'expérience restaurant",
    excerpt: "Article fondamental qui expose le problème central que Sotto résout et touche à l'émotion des restaurateurs (la relation client).",
    date: "15 juin 2024",
    category: "Expérience client",
    readTime: "10 min",
    image: "/blog/screens-impact.jpg",
    author: "Karim Omri",
    authorRole: "CEO & Co-fondateur",
    featured: true
  },
  {
    id: "cout-cache-systemes-encaissement",
    title: "Le coût caché des systèmes d'encaissement traditionnels : ce que les fournisseurs ne vous disent pas",
    excerpt: "Argument économique puissant qui expose les frais excessifs des solutions actuelles et prépare le terrain pour présenter le modèle économique avantageux de Sotto.",
    date: "8 juin 2024",
    category: "Finance",
    readTime: "8 min",
    image: "/blog/hidden-costs.jpg",
    author: "Nicolas Lester Reynolds",
    authorRole: "CTO & Co-fondateur",
    featured: false
  },
  {
    id: "service-ralenti-heures-pointe",
    title: "Service ralenti aux heures de pointe? Votre système de prise de commande est peut-être le coupable",
    excerpt: "Aborde un point de douleur critique pour tous les restaurateurs et montre comment la technologie vocale élimine ce goulot d'étranglement.",
    date: "1 juin 2024",
    category: "Opérations",
    readTime: "7 min",
    image: "/blog/slow-service.jpg",
    author: "Samantha Omri",
    authorRole: "Directrice Produit",
    featured: false
  },
  {
    id: "technologie-vocale-augmente-panier-moyen",
    title: "Comment la technologie vocale augmente le panier moyen : étude de cas dans 5 restaurants",
    excerpt: "Présentation de données concrètes et mesurables qui parlent directement au résultat financier, l'argument le plus convaincant pour l'adoption.",
    date: "25 mai 2024",
    category: "Études de cas",
    readTime: "12 min",
    image: "/blog/voice-tech-case-study.jpg",
    author: "Karim Omri",
    authorRole: "CEO & Co-fondateur",
    featured: false
  },
  {
    id: "fidelisation-client-technologie-invisible",
    title: "+15% de fidélisation client : quand la technologie invisible renforce l'expérience humaine",
    excerpt: "Bénéfice commercial à long terme qui montre les avantages compétitifs durables de Sotto.",
    date: "18 mai 2024",
    category: "Marketing",
    readTime: "9 min",
    image: "/blog/customer-loyalty.jpg",
    author: "Samantha Omri",
    authorRole: "Directrice Produit",
    featured: false
  },
  {
    id: "roi-solution-vocale",
    title: "ROI d'une solution vocale : calcul du retour sur investissement mois par mois",
    excerpt: "Outil concret qui aide les restaurateurs à visualiser la rentabilité rapide de leur investissement.",
    date: "10 mai 2024",
    category: "Finance",
    readTime: "11 min",
    image: "/blog/roi-calculation.jpg",
    author: "Nicolas Lester Reynolds",
    authorRole: "CTO & Co-fondateur",
    featured: false
  },
  {
    id: "interview-chef-martin",
    title: "'Mes serveurs ne veulent plus revenir en arrière' : interview avec Chef Martin du Bistrot Parisien",
    excerpt: "Témoignage qui renforce la crédibilité et montre l'adoption réussie par les pairs.",
    date: "3 mai 2024",
    category: "Témoignages",
    readTime: "8 min",
    image: "/blog/chef-interview.jpg",
    author: "Karim Omri",
    authorRole: "CEO & Co-fondateur",
    featured: false
  },
  {
    id: "journee-avec-sotto",
    title: "Une journée avec Sotto : de l'ouverture à la fermeture",
    excerpt: "Article pratique qui aide à visualiser l'intégration concrète dans leurs opérations quotidiennes.",
    date: "26 avril 2024",
    category: "Guide pratique",
    readTime: "14 min",
    image: "/blog/day-with-sotto.jpg",
    author: "Samantha Omri",
    authorRole: "Directrice Produit",
    featured: false
  },
  {
    id: "installation-4-heures",
    title: "Installation en 4 heures : comment se déroule la transition vers un restaurant sans écran",
    excerpt: "Répond à la crainte de complexité et de perturbation lors de l'adoption d'une nouvelle technologie.",
    date: "19 avril 2024",
    category: "Implémentation",
    readTime: "6 min",
    image: "/blog/installation-process.jpg",
    author: "Nicolas Lester Reynolds",
    authorRole: "CTO & Co-fondateur",
    featured: false
  },
  {
    id: "questions-frequentes-technologie-vocale",
    title: "Questions fréquentes sur la technologie vocale en restauration",
    excerpt: "Article stratégique qui anticipe et répond aux objections et préoccupations les plus courantes.",
    date: "12 avril 2024",
    category: "FAQ",
    readTime: "10 min",
    image: "/blog/faq-voice-tech.jpg",
    author: "Karim Omri",
    authorRole: "CEO & Co-fondateur",
    featured: false
  }
];

// Fonction pour formater la date
const formatDate = (dateString: string): string => {
  return dateString; // Déjà formaté dans notre cas
};

export default function Blog() {
  // Trouver l'article mis en avant
  const featuredPost = blogPosts.find(post => post.featured);
  // Autres articles
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
          <p className="text-lg text-[#505A64] mb-12 max-w-3xl">
            Découvrez nos derniers articles, études de cas et actualités sur l'innovation dans le secteur de la restauration et comment Sotto transforme l'expérience client.
          </p>
          
          {/* Article mis en avant */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-xl font-bold mb-6">Article à la une</h2>
              <Link href={`/blog/${featuredPost.id}`} className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto relative">
                      <Image 
                        src={`/blog/${featuredPost.id}.jpg`}
                        alt={featuredPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority={true}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center text-sm text-[#505A64] mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] text-xs font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(featuredPost.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.readTime} de lecture</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D47D5A] transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-[#505A64] mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#1A2A40] mr-3"></div>
                        <div>
                          <p className="font-medium">{featuredPost.author}</p>
                          <p className="text-xs text-[#505A64]">{featuredPost.authorRole}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
          
          {/* Filtres de catégories */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-full bg-[#1A2A40] text-white text-sm">
                Tous les articles
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#1A2A40] text-sm hover:bg-[#1A2A40]/10 transition-colors">
                Expérience client
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#1A2A40] text-sm hover:bg-[#1A2A40]/10 transition-colors">
                Finance
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#1A2A40] text-sm hover:bg-[#1A2A40]/10 transition-colors">
                Opérations
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#1A2A40] text-sm hover:bg-[#1A2A40]/10 transition-colors">
                Études de cas
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-[#1A2A40] text-sm hover:bg-[#1A2A40]/10 transition-colors">
                Témoignages
              </button>
            </div>
            </div>
          </div>
          
          {/* Liste des articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-48 relative">
                    <Image 
                      src={`/blog/${post.id}.jpg`}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      priority={post.id === regularPosts[0].id}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-xs text-[#505A64] mb-3">
                      <span className="inline-block px-2 py-1 rounded-full bg-[#D47D5A]/10 text-[#D47D5A] text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#D47D5A] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#505A64] mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-8 h-8 rounded-full bg-[#1A2A40] mr-2"></div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-[#505A64]">{post.readTime} de lecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-[#1A2A40] text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-[#1A2A40] flex items-center justify-center hover:bg-[#1A2A40]/10 transition-colors">
                2
              </button>
              <span className="mx-1">...</span>
              <button className="w-10 h-10 rounded-full bg-white text-[#1A2A40] flex items-center justify-center hover:bg-[#1A2A40]/10 transition-colors">
                5
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-[#1A2A40] flex items-center justify-center hover:bg-[#1A2A40]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Newsletter avec image de fond */}
          <div className="mt-16 bg-[#1A2A40] text-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image 
                src="/blog/main-header.jpg"
                alt="Blog Sotto"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Restez informé des dernières innovations</h2>
              <p className="text-white/80 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et études de cas directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre email professionnel" 
                  className="px-4 py-3 rounded-md bg-white/10 text-white placeholder:text-white/50 flex-grow focus:outline-none focus:ring-2 focus:ring-[#D47D5A]"
                />
                <button className="px-6 py-3 bg-[#D47D5A] text-white rounded-md hover:bg-[#D47D5A]/90 transition-colors">
                  S'inscrire
                </button>
              </div>
              <p className="text-xs text-white/50 mt-3">
                En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pouvez vous désinscrire à tout moment.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
