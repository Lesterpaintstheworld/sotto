/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver la génération statique pour les pages problématiques
  experimental: {
    disableStaticGeneration: true,
  },
}

module.exports = nextConfig;
