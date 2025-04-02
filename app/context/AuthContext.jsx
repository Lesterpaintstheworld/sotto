'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte
const AuthContext = createContext(null);

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  return useContext(AuthContext);
}

// Fournisseur du contexte
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fonction de connexion
  const login = (userData) => {
    setUser(userData);
    // Stocker dans localStorage pour persister la session
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Fonction de déconnexion
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Vérifier s'il y a un utilisateur au chargement
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Valeur du contexte
  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
