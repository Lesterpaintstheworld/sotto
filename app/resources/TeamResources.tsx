'use client';

import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import AuthButton from '../components/AuthButton';
import { useState, useEffect } from 'react';

// Interface pour définir le type de retour du hook useAuth
interface AuthContextType {
  user: any;
  loading: boolean;
  login: (userData: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
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
      case "lock":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
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
      case "arrow-right":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        );
      // Ajoutez d'autres icônes au besoin
      default:
        return null;
    }
  };

  return renderIcon();
};

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

interface TeamResourcesProps {
  teamData: {
    strategic: Resource[];
    technical: Resource[];
    operational: Resource[];
    financial: Resource[];
    testing: Resource[];
  };
}

export default function TeamResources({ teamData }: TeamResourcesProps) {
  const auth = useAuth() as AuthContextType | null;
  // Utiliser l'opérateur de coalescence nulle pour fournir des valeurs par défaut
  const isAuthenticated = auth?.isAuthenticated ?? false;
  const loading = auth?.loading ?? false;
  // Forcer l'affichage des ressources d'équipe en définissant showTeamResources à true
  const [showTeamResources, setShowTeamResources] = useState(true);

  // Ajout d'un log pour déboguer
  useEffect(() => {
    if (teamData?.testing) {
      console.log('Testing resources:', teamData.testing);
    }
  }, [teamData]);

  // Commenté pour permettre l'accès à tous
  /*
  useEffect(() => {
    if (!loading) {
      setShowTeamResources(isAuthenticated);
    }
  }, [isAuthenticated, loading]);
  */

  if (loading) {
    return <div>Chargement...</div>;
  }

  // Toujours afficher les ressources d'équipe, même si l'utilisateur n'est pas authentifié

  return (
    <div className="mt-20 pt-16 border-t border-[#1A2A40]/10">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-dark/10 text-blue-dark text-sm font-medium mb-2">
          Accès temporairement ouvert à tous
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ressources d'équipe</h2>
        <p className="text-lg text-[#505A64] max-w-2xl mx-auto">
          Documents internes et ressources stratégiques pour l'équipe Sotto.
        </p>
      </div>
      
      {/* Documents stratégiques */}
      {teamData.strategic && teamData.strategic.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Documents stratégiques</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {teamData.strategic.map((document: Resource) => (
              <Link href={`/resources/${document.id}`} key={document.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image 
                    src={`/images/resources/team/${document.id}.jpg`} 
                    alt={document.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                    priority={true}
                  />
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
      
      {/* Documents techniques */}
      {teamData.technical && teamData.technical.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Documents techniques</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {teamData.technical.map((document: Resource) => (
              <Link href={`/resources/${document.id}`} key={document.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image 
                    src={`/images/resources/team/${document.id}.jpg`} 
                    alt={document.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                    priority={true}
                  />
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
      
      {/* Documents opérationnels */}
      {teamData.operational && teamData.operational.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Documents opérationnels</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {teamData.operational.map((document: Resource) => (
              <Link href={`/resources/${document.id}`} key={document.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image 
                    src={`/images/resources/team/${document.id}.jpg`} 
                    alt={document.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                    priority={true}
                  />
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
      
      {/* Documents financiers */}
      {teamData.financial && teamData.financial.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Documents juridiques & financiers</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {teamData.financial.map((document: Resource) => (
              <Link href={`/resources/${document.id}`} key={document.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image 
                    src={`/images/resources/team/${document.id}.jpg`} 
                    alt={document.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                    priority={true}
                  />
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
      
      {/* Documents de test */}
      {teamData.testing && teamData.testing.length > 0 && (
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Tests & validation</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {console.log('teamData.testing:', teamData.testing)}
            {teamData.testing.map((document: Resource) => (
              <Link href={`/resources/${document.id}`} key={document.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image 
                    src={`/images/resources/team/${document.id}.jpg`} 
                    alt={document.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                    priority={true}
                  />
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
    </div>
  );
}
