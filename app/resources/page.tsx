import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

// Fonction pour obtenir les données JSON via l'API
async function getResourcesData() {
  try {
    // Utilisez une URL relative pour éviter les problèmes avec les environnements
    const res = await fetch('/api/resources', { 
      cache: 'no-store',
      // Ajoutez next: { revalidate: 0 } pour s'assurer que les données sont toujours fraîches
      next: { revalidate: 0 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch resources data: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching resources data:', error);
    // Retourner un objet vide mais avec la structure attendue pour éviter les erreurs
    return { team: { guides: [], casestudies: [], tools: [], webinars: [] } };
  }
}

// Composant pour afficher les icônes
const Icon = ({ name, size = 48, color = "#1A2A40", strokeWidth = 1.5 }) => {
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
      default:
        return null;
    }
  };

  return renderIcon();
};

// Fonction pour formater la date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

export default async function Resources() {
  // Obtenir les données
  const resourcesData = await getResourcesData();
  const teamData = resourcesData?.team || { guides: [], casestudies: [], tools: [], webinars: [] };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ressources de l'équipe</h1>
            <p className="text-lg text-[#505A64] max-w-2xl mx-auto">
              Découvrez nos guides, études de cas et outils pour tirer le meilleur parti de Sotto et optimiser votre restaurant.
            </p>
          </div>
          
          {/* Guides et tutoriels */}
          {teamData.guides && teamData.guides.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Guides et tutoriels</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {teamData.guides.map((guide) => (
                <div key={guide.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-[#1A2A40]/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name={guide.icon} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                    <p className="text-[#505A64] mb-4">
                      {guide.description}
                    </p>
                    <Link href={guide.link} className="text-[#D47D5A] hover:underline flex items-center gap-1">
                      {guide.linkText}
                      <Icon name={guide.linkIcon} size={16} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Études de cas */}
          {teamData.casestudies && teamData.casestudies.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Études de cas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {teamData.casestudies.map((casestudy) => (
                <div key={casestudy.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-56 bg-[#1A2A40]/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name={casestudy.icon} />
                    </div>
                  </div>
                  <div className="p-6">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                      style={{ 
                        backgroundColor: `${casestudy.categoryColor}20`, 
                        color: casestudy.categoryColor 
                      }}
                    >
                      {casestudy.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{casestudy.title}</h3>
                    <p className="text-[#505A64] mb-4">
                      {casestudy.description}
                    </p>
                    <Link href={casestudy.link} className="text-[#D47D5A] hover:underline flex items-center gap-1">
                      {casestudy.linkText}
                      <Icon name={casestudy.linkIcon} size={16} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Outils et calculateurs */}
          {teamData.tools && teamData.tools.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Outils et calculateurs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {teamData.tools.map((tool) => (
                <div key={tool.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name={tool.icon} size={24} color={tool.iconColor} strokeWidth={2} />
                    {tool.title}
                  </h3>
                  <p className="text-[#505A64] mb-4">
                    {tool.description}
                  </p>
                  <Link href={tool.link} className="text-[#D47D5A] hover:underline flex items-center gap-1">
                    {tool.linkText}
                    <Icon name={tool.linkIcon} size={16} strokeWidth={2} />
                  </Link>
                </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Webinaires et événements */}
          {teamData.webinars && teamData.webinars.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Webinaires et événements</h2>
              {teamData.webinars.map((webinar) => (
              <div key={webinar.id} className="bg-[#1A2A40] text-white rounded-lg overflow-hidden">
                <div className="p-8 md:p-12">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{ 
                      backgroundColor: `${webinar.tagColor}20`, 
                      color: webinar.tagColor 
                    }}
                  >
                    {webinar.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {webinar.title}
                  </h3>
                  <p className="text-white/80 mb-6 max-w-2xl">
                    {webinar.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="calendar" size={20} color="#D47D5A" strokeWidth={2} />
                      <span className="text-white/80">{formatDate(webinar.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="clock" size={20} color="#D47D5A" strokeWidth={2} />
                      <span className="text-white/80">{webinar.time} ({webinar.timezone})</span>
                    </div>
                  </div>
                  <Link href={webinar.buttonLink}>
                    <button className="bg-[#D47D5A] hover:bg-[#D47D5A]/90 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2">
                      <span>{webinar.buttonText}</span>
                      <Icon name="arrow-right" size={16} strokeWidth={2} />
                    </button>
                  </Link>
                </div>
              </div>
              ))}
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
