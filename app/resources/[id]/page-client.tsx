'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

export default function ResourceClientPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadComponent() {
      try {
        // Dynamically import the content component based on the ID
        const ContentComponent = dynamic(
          () => import(`../content/${id}`).catch(e => {
            console.error('Failed to load resource content:', e);
            return import('../content/not-found');
          }),
          { 
            loading: () => <div className="p-8 text-center">Chargement du contenu...</div>,
            ssr: false 
          }
        );
        
        setComponent(() => ContentComponent);
      } catch (error) {
        console.error('Error loading resource content:', error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadComponent();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse text-lg">Chargement du contenu...</div>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#1A2A40]">Ressource non trouvée</h1>
        <p className="mb-4 text-[#505A64]">
          Désolé, la ressource que vous recherchez n'est pas disponible.
        </p>
      </div>
    );
  }

  return <Component />;
}
