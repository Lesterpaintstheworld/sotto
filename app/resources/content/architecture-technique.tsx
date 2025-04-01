const ResourceContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-10 animate-float">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">
          Architecture Technique
        </h1>
        <div className="h-1 w-32 bg-[#D47D5A] rounded-full"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Introduction</h2>
        <p className="text-lg leading-relaxed mb-6">
          L'architecture technique de Sotto représente l'infrastructure invisible qui permet de libérer les restaurants des écrans tout en optimisant leurs opérations. Ce document détaille les composants techniques, les flux de données et l'infrastructure qui alimentent notre système vocal IA, conçu pour s'intégrer harmonieusement dans l'environnement de restauration. Notre approche privilégie la fiabilité, la performance et la discrétion, permettant à la technologie de s'effacer au profit de l'expérience humaine.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Vue d'ensemble de l'architecture</h2>
        <p className="text-lg leading-relaxed mb-6">
          L'architecture Sotto s'articule autour de quatre composants principaux qui fonctionnent en synergie pour créer une expérience vocale fluide et efficace.
        </p>
        
        <div className="my-8 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://sotto.ai/images/architecture-overview.png" 
            alt="Architecture Sotto" 
            className="w-full h-auto"
          />
        </div>

        <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Composants principaux</h3>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white dark:bg-[#1A2A40]/60 rounded-lg overflow-hidden">
            <thead className="bg-[#1A2A40] text-white dark:bg-[#D47D5A]/90">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Composant</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Rôle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/80 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">
                  <strong>Interface Vocale</strong>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Oreillettes et système de reconnaissance vocale
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Point de contact avec l'utilisateur
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/80 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">
                  <strong>Middleware IA</strong>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Moteurs LLM et traitement contextuel
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Interprétation des commandes et génération de réponses
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/80 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">
                  <strong>Backend Opérationnel</strong>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Serveurs Next.js et bases de données
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Gestion des données et logique métier
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-[#1A2A40]/80 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#1A2A40] dark:text-[#F5F5F0]">
                  <strong>Infrastructure Cloud</strong>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Services AWS et systèmes redondants
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Hébergement sécurisé et évolutif
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">1. Interface Vocale</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </span>
            Matériel d'interaction
          </h3>
          
          <p className="text-lg leading-relaxed mb-4">
            L'interface vocale Sotto repose sur des oreillettes WiFi professionnelles spécialement sélectionnées pour répondre aux exigences du secteur de la restauration :
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "Confort prolongé : Conçues pour être portées pendant des services de 8+ heures",
              "Résistance : Protection contre l'humidité, la chaleur et les chocs légers",
              "Autonomie : 12 heures d'utilisation continue, recharge rapide de 15 minutes pour 2 heures d'autonomie",
              "Connectivité : WiFi dual-band (2.4GHz/5GHz) avec basculement automatique",
              "Audio : Microphones directionnels avec annulation de bruit avancée"
            ].map((item, index) => (
              <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow flex items-start hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#87A28F] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0 8 8 0 0016 0 1 1 0 10-2 0 5.986 5.986 0 00-.454 2.916A5 5 0 008 11z" clipRule="evenodd" />
              </svg>
            </span>
            Traitement audio
          </h3>
          
          <p className="text-lg leading-relaxed mb-4">
            Le système de traitement audio constitue la première couche critique de notre architecture :
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "Filtrage dynamique : Suppression des bruits ambiants de restaurant (vaisselle, conversations clients)",
              "Reconnaissance contextuelle : Identification du personnel par empreinte vocale",
              "Mise en tampon : Conservation temporaire des commandes en cas de déconnexion WiFi",
              "Compression adaptative : Optimisation de la bande passante selon la qualité de connexion"
            ].map((item, index) => (
              <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow flex items-start hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-[#87A28F] mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">2. Middleware IA</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#D4B483] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            Modèles de langage
          </h3>
          
          <p className="text-lg leading-relaxed mb-4">
            Au cœur du système Sotto se trouve notre middleware IA spécialisé :
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "LLM optimisé : Modèle de langage fine-tuné pour le vocabulaire de la restauration",
              "Traitement en temps réel : Latence inférieure à 300ms pour une interaction naturelle",
              "Compréhension contextuelle : Mémorisation des interactions précédentes pour un suivi cohérent",
              "Adaptabilité : Apprentissage continu des spécificités de chaque établissement"
            ].map((item, index) => (
              <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow flex items-start hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-[#D4B483] mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            Flux de traitement
          </h3>
          
          <div className="bg-[#1A2A40] text-[#F5F5F0] p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <code>
              Commande vocale → Prétraitement audio → Transcription → Analyse d'intention → <br/>
              Enrichissement contextuel → Validation logique → Génération de réponse → <br/>
              Synthèse vocale → Transmission au serveur
            </code>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#87A28F] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </span>
            Capacités spécifiques
          </h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "Gestion des interruptions : Capacité à reprendre une commande interrompue",
              "Résolution d'ambiguïtés : Demande de clarification intelligente sans frustration",
              "Adaptation acoustique : Ajustement aux environnements acoustiques variables",
              "Multilinguisme : Support du français, anglais, espagnol et italien (autres langues en développement)"
            ].map((item, index) => (
              <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow flex items-start hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-[#87A28F] mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">3. Backend Opérationnel</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </span>
            Architecture Next.js
          </h3>
          
          <p className="text-lg leading-relaxed mb-4">
            Notre backend utilise Next.js pour offrir une solution robuste et évolutive :
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "API Routes : Points d'accès sécurisés pour toutes les opérations",
              "Server-Side Rendering : Interface d'administration performante",
              "Progressive Web App : Fonctionnalités hors-ligne pour la continuité du service",
              "WebSockets : Communication bidirectionnelle en temps réel"
            ].map((item, index) => (
              <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow flex items-start hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-[#D47D5A] mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#D4B483] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
            </span>
            Stockage et persistance
          </h3>
          
          <p className="text-lg leading-relaxed mb-4">
            La gestion des données s'appuie sur une architecture hybride :
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "PostgreSQL : Base de données principale pour les transactions et le catalogue",
              "Redis : Cache haute performance pour les sessions et données temporaires",
              "Airtable : Interface simplifiée pour la gestion du menu et configurations",
              "Système de file d'attente : Traitement asynchrone des commandes avec RabbitMQ"
            ].map((item, index) => (
              <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow flex items-start hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-[#D4B483] mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
            <span className="inline-block w-8 h-8 bg-[#87A28F] rounded-full text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            Intégrations
          </h3>
          
          <p className="text-lg leading-relaxed mb-4">
            Le système s'intègre nativement avec l'écosystème de restauration :
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              "API LEA POS : Synchronisation avec notre système de caisse intelligent",
              "Passerelles de paiement : Intégration directe avec les TPE et systèmes de paiement",
              "Plateformes de livraison : Connexion aux API Uber Eats, Deliveroo, etc.",
              "Systèmes de réservation : TheFork, OpenTable et autres plateformes"
            ].map((item, index) => (
              <li key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow flex items-start hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-[#87A28F] mr-2">•</span>
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">4. Infrastructure Cloud</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              </span>
              Hébergement
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              L'infrastructure Sotto est conçue pour une fiabilité maximale :
            </p>
            
            <ul className="space-y-2">
              {[
                "Multi-cloud : Répartition entre AWS (principal) et GCP (backup)",
                "Conteneurisation : Déploiement via Docker et orchestration Kubernetes",
                "Auto-scaling : Ajustement automatique des ressources selon la charge",
                "CDN global : Distribution optimisée du contenu statique"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D47D5A] mr-2">•</span>
                  <span className="text-gray-800 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-[#D4B483] rounded-full text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Sécurité
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La protection des données est une priorité absolue :
            </p>
            
            <ul className="space-y-2">
              {[
                "Chiffrement de bout en bout : Communications sécurisées à tous les niveaux",
                "Authentification multi-facteurs : Accès sécurisé pour l'administration",
                "Audit de sécurité : Vérifications régulières et tests de pénétration",
                "Conformité RGPD : Traitement des données conforme aux réglementations européennes"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#D4B483] mr-2">•</span>
                  <span className="text-gray-800 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-[#87A28F] rounded-full text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </span>
              Haute disponibilité
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Notre architecture garantit un service ininterrompu :
            </p>
            
            <ul className="space-y-2">
              {[
                "SLA de 99,95% : Engagement de disponibilité pour les composants critiques",
                "Redondance géographique : Réplication des données entre plusieurs régions",
                "Basculement automatique : Détection des défaillances et redirection transparente",
                "Mode dégradé intelligent : Maintien des fonctionnalités essentielles en cas d'incident"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#87A28F] mr-2">•</span>
                  <span className="text-gray-800 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Flux de données et communication</h2>
        
        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Cycle de vie d'une commande</h3>
          
          <p className="text-lg leading-relaxed mb-4">
            Le schéma ci-dessous illustre le parcours complet d'une commande dans l'écosystème Sotto :
          </p>
          
          <div className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-6 rounded-lg">
            <ol className="relative border-l-2 border-[#D47D5A]">
              {[
                "Capture vocale : Le serveur énonce la commande via l'oreillette",
                "Traitement IA : Interprétation et structuration de la commande",
                "Validation : Confirmation vocale et vérification des incohérences",
                "Transmission : Envoi au système de gestion et à la cuisine",
                "Notification : Alertes vocales sur l'état de préparation",
                "Finalisation : Confirmation de service et mise à jour des stocks"
              ].map((item, index) => (
                <li key={index} className="mb-6 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#D47D5A] rounded-full -left-4 text-white">
                    {index + 1}
                  </span>
                  <p className="text-gray-800 dark:text-gray-200">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4">Latence et performance</h3>
          
          <p className="text-lg leading-relaxed mb-4">
            Notre architecture est optimisée pour minimiser les délais :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Temps de réponse : < 1 seconde pour les interactions standard",
              "Traitement des commandes : < 3 secondes de la voix à l'enregistrement",
              "Notifications : Transmission instantanée entre cuisine et service"
            ].map((item, index) => (
              <div key={index} className="bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-4 rounded-lg shadow text-center hover:scale-105 transition-transform duration-300">
                <p className="text-gray-800 dark:text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Déploiement et installation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-[#D4B483] rounded-full text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </span>
              Prérequis techniques
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              L'installation du système Sotto requiert un environnement minimal :
            </p>
            
            <ul className="space-y-3">
              {[
                "Connexion Internet : Fibre ou ADSL+ avec débit minimum de 20 Mbps",
                "Réseau WiFi : Couverture complète du restaurant avec points d'accès professionnels",
                "Alimentation : Points de charge stratégiquement placés pour les oreillettes",
                "Espace serveur : Petit espace ventilé pour le serveur local (optionnel)"
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-3 rounded-lg">
                  <span className="text-[#D4B483] mr-2">•</span>
                  <span className="text-gray-800 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-[#D47D5A] rounded-full text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </span>
              Processus d'installation
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Notre équipe technique assure une mise en place rapide et non intrusive :
            </p>
            
            <ol className="relative border-l-2 border-[#D47D5A] ml-2 space-y-6">
              {[
                "Audit préalable : Évaluation de l'infrastructure existante",
                "Optimisation réseau : Installation de points d'accès WiFi si nécessaire",
                "Déploiement matériel : Configuration des oreillettes et stations de charge",
                "Configuration logicielle : Importation du menu et personnalisation",
                "Formation : Sessions de prise en main pour l'équipe",
                "Suivi : Ajustements pendant les premiers jours d'utilisation"
              ].map((item, index) => (
                <li key={index} className="ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-[#D47D5A] rounded-full -left-3 text-white text-sm">
                    {index + 1}
                  </span>
                  <p className="text-gray-800 dark:text-gray-200">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Évolutivité et maintenance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-[#87A28F] rounded-full text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </span>
              Mises à jour
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Le système Sotto évolue constamment pour améliorer ses performances :
            </p>
            
            <ul className="space-y-3">
              {[
                "Mises à jour automatiques : Déploiement nocturne hors des heures de service",
                "Améliorations IA : Enrichissement régulier des capacités linguistiques",
                "Nouvelles fonctionnalités : Ajout trimestriel de fonctionnalités basées sur les retours clients",
                "Maintenance prédictive : Détection proactive des problèmes potentiels"
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-3 rounded-lg">
                  <span className="text-[#87A28F] mr-2">•</span>
                  <span className="text-gray-800 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-4 flex items-center">
              <span className="inline-block w-8 h-8 bg-[#D4B483] rounded-full text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
              </span>
              Extensibilité
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              L'architecture est conçue pour s'adapter à l'évolution des besoins :
            </p>
            
            <ul className="space-y-3">
              {[
                "API ouvertes : Possibilité d'intégration avec des systèmes tiers",
                "Modules optionnels : Extensions spécialisées (gestion des stocks, fidélité, etc.)",
                "Personnalisation avancée : Adaptation aux processus spécifiques de chaque établissement"
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-[#F5F5F0] dark:bg-[#1A2A40]/50 p-3 rounded-lg">
                  <span className="text-[#D4B483] mr-2">•</span>
                  <span className="text-gray-800 dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Conclusion</h2>
        <div className="bg-[#1A2A40] text-[#F5F5F0] dark:bg-[#F5F5F0] dark:text-[#1A2A40] p-6 rounded-xl shadow-lg">
          <p className="text-lg leading-relaxed mb-4">
            L'architecture technique de Sotto représente une fusion harmonieuse entre technologie de pointe et simplicité d'usage. En éliminant les interfaces visibles traditionnelles, nous avons conçu un système qui s'intègre naturellement dans l'environnement du restaurant tout en offrant une puissance opérationnelle inégalée. Cette infrastructure robuste, évolutive et discrète permet aux restaurateurs de se concentrer sur l'essentiel : l'expérience culinaire et humaine.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-6">Prochaines étapes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 text-center">
            <div className="text-[#D47D5A] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Demander une démonstration</h4>
            <p className="text-gray-600 dark:text-gray-300">pour voir l'architecture Sotto en action dans votre établissement</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 text-center">
            <div className="text-[#87A28F] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Consulter notre FAQ technique</h4>
            <p className="text-gray-600 dark:text-gray-300">pour des réponses aux questions spécifiques</p>
          </div>
          
          <div className="bg-white dark:bg-[#1A2A40]/30 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 text-center">
            <div className="text-[#D4B483] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h4 className="font-semibold text-[#1A2A40] dark:text-[#F5F5F0] mb-2">Contacter notre équipe d'experts</h4>
            <p className="text-gray-600 dark:text-gray-300">pour une évaluation personnalisée de vos besoins</p>
          </div>
        </div>
      </section>

      <div className="text-center italic text-[#1A2A40] dark:text-[#F5F5F0] mt-12 border-t border-gray-200 dark:border-gray-800 pt-6">
        <p>Sotto - Libérez votre restaurant des écrans et recentrez-vous sur l'essentiel: l'humain et la gastronomie.</p>
      </div>
    </div>
  );
};

export default ResourceContent;