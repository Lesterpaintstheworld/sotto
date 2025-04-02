/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour Next.js
  images: {
    domains: [], // Ajoutez ici les domaines externes si nécessaire
  },
  // Désactiver la génération statique
  output: 'standalone',
  
  // Désactiver explicitement la génération statique pour les routes problématiques
  experimental: {
    disableStaticGeneration: true,
  },
}

module.exports = nextConfig;
