import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import TeamResources from "./TeamResources";

// Fonction pour obtenir les données JSON via l'API
async function getResourcesData() {
  try {
    // En développement, utiliser le fichier local
    if (process.env.NODE_ENV === 'development') {
      const resourcesData = (await import('@/app/data/resources.json')).default;
      return resourcesData;
    } 
    // En production, utiliser l'API
    else {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/api/resources`);
      const resourcesData = await response.json();
      return resourcesData;
    }
  } catch (error) {
    console.error('Error fetching resources data:', error);
    return { 
      public: { guides: [], casestudies: [], tools: [], webinars: [], documents: [] },
      team: { strategic: [], technical: [], operational: [], financial: [], testing: [] } 
    };
  }
}

// Composant pour afficher les icônes
const Icon = ({ 
  name, 
  size = 48, 
  color = "#1A2A40", 
  strokeWidth = 1.5 
}: { 
  name: string; 
  size?: number; 
  color?: string; 
  strokeWidth?: number; 
}) => {
  // Fonction pour rendre l'icône selon son nom
  const renderIcon = () => {
    switch (name) {
      case "microphone":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        );
      case "bell":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        );
      case "help-circle":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case "file-text":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
      case "monitor":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      case "trending-up":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="m19 9-5 5-4-4-3 3"></path>
          </svg>
        );
      case "download":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        );
      case "arrow-right":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        );
      case "calendar":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        );
      case "clock":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case "search":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        );
      case "check-square":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
        );
      case "wifi":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
          </svg>
        );
      case "bar-chart-2":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        );
      case "layers":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        );
      case "code":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case "book":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        );
      case "shield":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      case "lock":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        );
      case "target":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      case "map":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
        );
      case "headphones":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          </svg>
        );
      case "clipboard":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        );
      case "users":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case "dollar-sign":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case "briefcase":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case "alert-triangle":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case "message-square":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        );
      case "refresh-cw":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        );
      case "pie-chart":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return renderIcon();
};

// Fonction pour formater la date
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

// Interface pour les ressources
interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  linkIcon: string;
  icon?: string;
  categoryColor?: string;
}

export default async function Resources() {
  // Obtenir les données
  const resourcesData = await getResourcesData();
  
  // Séparer les données publiques et privées (team)
  const publicData = resourcesData?.public || { 
    guides: [], 
    casestudies: [], 
    tools: [], 
    webinars: [],
    documents: []
  };
  
  const teamData = resourcesData?.team || { 
    strategic: [], 
    technical: [], 
    operational: [], 
    financial: [],
    testing: []
  };

  // Nous utiliserons le contexte d'authentification côté client
  // La variable isTeamMember sera utilisée uniquement pour le rendu statique initial
  const isTeamMember = false; // Valeur par défaut pour le rendu statique

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ressources</h1>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto">
              Découvrez nos guides, études de cas et outils pour tirer le meilleur parti de Sotto et optimiser votre restaurant.
            </p>
          </div>
          
          {/* Guides et tutoriels */}
          {publicData.guides && publicData.guides.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Guides et tutoriels</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {publicData.guides.map((guide: Resource) => (
                <Link href={`/resources/${guide.id}`} key={guide.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    <Image 
                      src={`/images/resources/${guide.id}.jpg`} 
                      alt={guide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover"
                      priority={true}
                    />
                    {/* Suppression des éléments superposés */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{guide.title}</h3>
                    <p className="text-[#505A64] mb-4 text-sm">
                      {guide.description}
                    </p>
                    <div className="text-[#D47D5A] hover:underline flex items-center gap-1 text-sm">
                      {guide.linkText}
                      <Icon name={guide.linkIcon} size={14} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            </section>
          )}
          
          {/* Études de cas */}
          {publicData.casestudies && publicData.casestudies.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Études de cas</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {publicData.casestudies.map((casestudy: Resource) => (
                <Link href={`/resources/${casestudy.id}`} key={casestudy.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    <Image 
                      src={`/images/resources/${casestudy.id}.jpg`} 
                      alt={casestudy.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover"
                      priority={true}
                    />
                    {/* Suppression des éléments superposés */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{casestudy.title}</h3>
                    <p className="text-[#505A64] mb-3 text-sm">
                      {casestudy.description}
                    </p>
                    <div className="text-[#D47D5A] hover:underline flex items-center gap-1 text-sm">
                      {casestudy.linkText}
                      <Icon name={casestudy.linkIcon} size={14} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            </section>
          )}
          
          {/* Outils et calculateurs */}
          {publicData.tools && publicData.tools.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Outils et calculateurs</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {publicData.tools.map((tool: Resource) => (
                <Link href={`/resources/${tool.id}`} key={tool.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    <Image 
                      src={`/images/resources/${tool.id}.jpg`} 
                      alt={tool.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover"
                      priority={true}
                    />
                    {/* Suppression des éléments superposés */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-3">{tool.title}</h3>
                    <p className="text-[#505A64] mb-3 text-sm">
                      {tool.description}
                    </p>
                    <div className="text-[#D47D5A] hover:underline flex items-center gap-1 text-sm">
                      {tool.linkText}
                      <Icon name={tool.linkIcon} size={14} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            </section>
          )}
          
          {/* Webinaires et événements - Coming Soon */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Webinaires et événements</h2>
            <div className="bg-[#1A2A40]/5 rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1A2A40]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A2A40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Prochainement disponible</h3>
              <p className="text-[#505A64] max-w-lg mx-auto mb-4">
                Nos webinaires et événements sont en cours de préparation. Inscrivez-vous à notre newsletter pour être informé des prochaines dates.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-[#D47D5A] text-white px-6 py-3 rounded-md hover:bg-[#D47D5A]/90 transition-colors"
              >
                <span>S'inscrire à la newsletter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </section>
          
          {/* Documents publics */}
          {publicData.documents && publicData.documents.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Documents</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {publicData.documents.map((document: Resource) => (
                <Link href={`/resources/${document.id}`} key={document.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    <Image 
                      src={`/images/resources/${document.id}.jpg`} 
                      alt={document.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover"
                      priority={true}
                    />
                    {/* Suppression des éléments superposés */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <Icon name={document.icon ?? "file-text"} size={20} color={document.categoryColor} strokeWidth={2} />
                      {document.title}
                    </h3>
                    <p className="text-[#505A64] mb-3 text-sm">
                      {document.description}
                    </p>
                    <div className="text-[#D47D5A] hover:underline flex items-center gap-1 text-sm">
                      {document.linkText}
                      <Icon name={document.linkIcon} size={14} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
                ))}
              </div>
            </section>
          )}
          
          {/* Section Ressources d'équipe (privée) - Utilisation du composant client */}
          <TeamResources teamData={teamData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
