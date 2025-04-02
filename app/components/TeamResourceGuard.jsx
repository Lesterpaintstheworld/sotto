'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TeamResourceGuard({ children, isTeamResource }) {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Si ce n'est pas une ressource d'équipe, pas besoin de vérification
    if (!isTeamResource) return;
    
    // Si le chargement est terminé et l'utilisateur n'est pas authentifié
    if (!loading && !isAuthenticated && isTeamResource) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, isTeamResource, router]);

  // Si c'est une ressource d'équipe et que l'utilisateur n'est pas authentifié
  if (isTeamResource && !isAuthenticated) {
    if (loading) {
      return <div>Chargement...</div>;
    }
    return null; // Ne rien afficher, la redirection se fera via useEffect
  }

  // Sinon, afficher le contenu
  return children;
}
