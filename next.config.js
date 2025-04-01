/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour Next.js
  output: 'export', // Utiliser l'export statique pour les pages
  images: {
    unoptimized: true, // Désactiver l'optimisation d'images pour l'export statique
  },
}

module.exports = nextConfig;
