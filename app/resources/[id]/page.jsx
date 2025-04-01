import { notFound } from 'next/navigation';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';

// Fonction pour obtenir les données JSON des ressources
async function getResourcesData() {
  try {
    const resourcesPath = path.join(process.cwd(), 'app/data/resources.json');
    const resourcesData = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));
    return resourcesData;
  } catch (error) {
    console.error('Error fetching resources data:', error);
    return { 
      public: { guides: [], casestudies: [], tools: [], webinars: [], documents: [] },
      team: { strategic: [], technical: [], operational: [], financial: [], testing: [] } 
    };
  }
}

// Fonction pour trouver une ressource par ID
function findResourceById(resourcesData, id) {
  // Chercher dans les ressources publiques
  for (const category in resourcesData.public) {
    const found = resourcesData.public[category].find((resource) => resource.id === id);
    if (found) {
      return { resource: found, category, isTeam: false };
    }
  }
  
  // Chercher dans les ressources d'équipe
  for (const category in resourcesData.team) {
    const found = resourcesData.team[category].find((resource) => resource.id === id);
    if (found) {
      return { resource: found, category, isTeam: true };
    }
  }
  
  return null;
}

// Fonction pour vérifier si le composant TSX existe
function checkTsxComponentExists(id) {
  try {
    const tsxPath = path.join(process.cwd(), `app/resources/content/${id}.tsx`);
    return fs.existsSync(tsxPath);
  } catch (error) {
    return false;
  }
}

// Génération des métadonnées
// @ts-ignore - Ignorer l'erreur de type pour cette fonction
export const generateMetadata = async ({ params }) => {
  try {
    const id = params.id;
    const resourcesData = await getResourcesData();
    const resourceInfo = findResourceById(resourcesData, id);
    
    if (!resourceInfo) {
      return {
        title: 'Ressource non trouvée | Sotto',
        description: 'La ressource demandée n\'existe pas.'
      };
    }
    
    return {
      title: `${resourceInfo.resource.title} | Ressources Sotto`,
      description: resourceInfo.resource.description
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Ressources | Sotto',
      description: 'Découvrez nos ressources pour optimiser votre expérience de restauration.'
    };
  }
};

// Fonction pour obtenir les paramètres statiques
// @ts-ignore - Ignorer l'erreur de type pour cette fonction
export const generateStaticParams = async () => {
  try {
    const resourcesData = await getResourcesData();
    let params = [];
    
    // Ajouter les IDs des ressources publiques
    for (const category in resourcesData.public) {
      params = params.concat(
        resourcesData.public[category].map((resource) => ({
          id: resource.id
        }))
      );
    }
    
    // Ajouter les IDs des ressources d'équipe
    for (const category in resourcesData.team) {
      params = params.concat(
        resourcesData.team[category].map((resource) => ({
          id: resource.id
        }))
      );
    }
    
    return params;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
};

// Composant pour afficher une icône
const Icon = ({ name, size = 24, color = "#1A2A40", strokeWidth = 1.5 }) => {
  // Fonction pour rendre l'icône selon son nom
  const renderIcon = () => {
    switch (name) {
      case "arrow-right":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
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
      case "lock":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return renderIcon();
};

export default async function ResourcePage({ params }) {
  const { id } = params;
  const resourcesData = await getResourcesData();
  const resourceInfo = findResourceById(resourcesData, id);
  
  // Si la ressource n'existe pas, retourner une page 404
  if (!resourceInfo) {
    notFound();
  }
  
  const { resource, category, isTeam } = resourceInfo;
  
  // Vérifier si le composant TSX existe
  const tsxExists = checkTsxComponentExists(id);
  
  // Importer dynamiquement le composant TSX s'il existe
  let ResourceContent;
  if (tsxExists) {
    ResourceContent = dynamic(() => import(`@/app/resources/content/${id}`), {
      loading: () => <div className="py-10 text-center">Chargement du contenu...</div>,
      ssr: true
    });
  } else {
    // Fallback si le composant TSX n'existe pas
    ResourceContent = () => (
      <div className="py-10">
        <div className="bg-[#1A2A40]/5 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4">Contenu non disponible</h3>
          <p className="text-[#505A64]">
            Le contenu détaillé de cette ressource n'est pas encore disponible.
          </p>
        </div>
      </div>
    );
  }
  
  // Vérifier si l'utilisateur est connecté et a accès aux ressources de l'équipe
  // Authentification désactivée pour le prérendu statique
  const isTeamMember = true; // Authentification désactivée pour le moment, accès complet aux ressources
  
  // Si c'est une ressource d'équipe et que l'utilisateur n'est pas membre de l'équipe, retourner une page 404
  if (isTeam && !isTeamMember) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40] font-[family-name:var(--font-geist-sans)]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Fil d'Ariane */}
          <div className="mb-8 flex items-center text-sm text-[#505A64]">
            <Link href="/resources" className="hover:text-[#D47D5A]">Ressources</Link>
            <span className="mx-2">/</span>
            <span className="font-medium">{resource.title}</span>
          </div>
          
          {/* En-tête de la ressource */}
          <div className="mb-12">
            {isTeam && (
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1A2A40]/10 text-[#1A2A40] text-xs font-medium">
                  Accès restreint
                </span>
                <Icon name="lock" size={16} color="#1A2A40" strokeWidth={2} />
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{resource.title}</h1>
            <p className="text-lg text-[#505A64]">{resource.description}</p>
          </div>
          
          {/* Image de couverture */}
          <div className="mb-12 relative aspect-video rounded-lg overflow-hidden">
            <Image 
              src={`/images/resources/${isTeam ? 'team/' : ''}${id}.jpg`} 
              alt={resource.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority={true}
            />
          </div>
          
          {/* Contenu de la ressource */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#1A2A40] prose-p:text-[#1A2A40] prose-li:text-[#1A2A40] prose-strong:text-[#1A2A40]"
            style={{color: '#1A2A40', '--tw-prose-body': '#1A2A40', '--tw-prose-headings': '#1A2A40'}}
          >
            <ResourceContent />
          </div>
          
          {/* Bouton d'action */}
          <div className="mt-12 flex justify-center">
            <Link href={resource.link}>
              <button className="bg-[#D47D5A] hover:bg-[#D47D5A]/90 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2">
                <span>{resource.linkText}</span>
                <Icon name={resource.linkIcon} size={16} strokeWidth={2} />
              </button>
            </Link>
          </div>
          
          {/* Ressources connexes */}
          <div className="mt-16 pt-12 border-t border-[#1A2A40]/10">
            <h2 className="text-2xl font-bold mb-8">Ressources connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Afficher 3 ressources de la même catégorie (à l'exception de la ressource actuelle) */}
              {(isTeam ? resourcesData.team[category] : resourcesData.public[category])
                .filter((item) => item.id !== id)
                .slice(0, 3)
                .map((relatedResource) => (
                  <Link key={relatedResource.id} href={`/resources/${relatedResource.id}`} className="group">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="h-40 bg-[#1A2A40]/10 relative">
                        <Image 
                          src={`/images/resources/${isTeam ? 'team/' : ''}${relatedResource.id}.jpg`} 
                          alt={relatedResource.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-[#D47D5A] transition-colors">
                          {relatedResource.title}
                        </h3>
                        <p className="text-sm text-[#505A64] mb-4 flex-grow">
                          {relatedResource.description}
                        </p>
                        <div className="text-[#D47D5A] text-sm flex items-center gap-1 mt-auto">
                          {relatedResource.linkText}
                          <Icon name={relatedResource.linkIcon} size={14} strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
