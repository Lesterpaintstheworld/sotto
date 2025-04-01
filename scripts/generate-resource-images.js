const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Récupérer les clés API depuis les variables d'environnement
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const IDEOGRAM_API_KEY = process.env.IDEOGRAM_API_KEY;

// Charger les données des ressources
const resourcesPath = path.join(process.cwd(), 'app/data/resources.json');
const resourcesData = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));

// Créer les dossiers de destination s'ils n'existent pas
const publicDir = path.join(process.cwd(), 'public');
const resourcesDir = path.join(publicDir, 'images/resources');
const teamDir = path.join(resourcesDir, 'team');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (!fs.existsSync(path.join(publicDir, 'images'))) fs.mkdirSync(path.join(publicDir, 'images'));
if (!fs.existsSync(resourcesDir)) fs.mkdirSync(resourcesDir);
if (!fs.existsSync(teamDir)) fs.mkdirSync(teamDir);

// Description du style de marque Sotto
const brandStyleDescription = `
Style de marque Sotto:
- Palette de couleurs: Bleu profond (#1A2A40), Terracotta doux (#D47D5A), Blanc cassé (#F5F5F0), Vert sauge (#87A28F), Or subtil (#D4B483)
- Style visuel: Accessible, chaleureux, authentique avec une touche professionnelle
- Ambiance: Conviviale, pratique, efficace - adaptée aux restaurants de tous types
- Photographie: Images en éclairage naturel montrant des scènes de restaurants ordinaires, des équipes au travail, des interactions authentiques - jamais d'écrans visibles
- Éléments graphiques: Simples, fonctionnels, avec une touche chaleureuse
- Personnalité: Fiable, accessible, utile - comme un outil qui facilite le quotidien sans prétention
`;

// Fonction pour générer un prompt Ideogram avec Claude via appel HTTPS direct
async function generateIdeogramPrompt(resource) {
  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-7-sonnet-latest",
        max_tokens: 1000,
        temperature: 0.7,
        system: "Tu es un expert en création de prompts pour l'IA générative d'images Ideogram. Tu crées des prompts détaillés qui produisent des images de haute qualité, artistiques et cohérentes avec l'identité de marque fournie.",
        messages: [
          {
            role: "user",
            content: `Crée un prompt détaillé pour Ideogram qui illustrera une ressource pour notre site web. L'image doit être au format 16:9 et DOIT être une photographie réaliste (pas d'illustration).

Titre de la ressource: ${resource.title}
Description: ${resource.description}

${brandStyleDescription}

Ton prompt doit:
1. Décrire une photographie réaliste qui représente visuellement le concept de cette ressource
2. Montrer un restaurant ordinaire, accessible, pas trop chic ou élitiste
3. Spécifier un style combinant duotone (bleu profond #1A2A40 et terracotta #D47D5A) avec des effets halftone subtils
4. Inclure des détails sur la composition, l'éclairage et les éléments à inclure
5. Être optimisé pour le format 16:9 avec une composition équilibrée
6. Montrer des personnes diverses dans un contexte de restaurant ordinaire, sans écrans visibles
7. Éviter tout élément qui paraîtrait trop luxueux ou inaccessible
8. Ne pas inclure de texte dans l'image

Donne uniquement le prompt, sans explications ni commentaires.`
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        }
      }
    );

    return response.data.content[0].text;
  } catch (error) {
    console.error(`Erreur lors de la génération du prompt pour ${resource.title}:`, error.response?.data || error.message);
    return null;
  }
}

// Fonction pour générer une image avec Ideogram en utilisant l'API directe
async function generateImage(prompt, outputPath) {
  try {
    console.log(`Génération de l'image avec le prompt: ${prompt.substring(0, 100)}...`);
    
    const response = await axios.post(
      'https://api.ideogram.ai/generate',
      {
        image_request: {
          prompt: prompt + ", realistic photography, duotone photography in deep blue #1A2A40 and terracotta #D47D5A, subtle halftone effect, everyday restaurant setting, authentic atmosphere, natural lighting, candid moments, ordinary people, accessible environment, not luxury, photojournalistic style",
          aspect_ratio: "ASPECT_16_9",
          model: "V_2A",
          style_preset: "PHOTOGRAPHIC"
        }
      },
      {
        headers: {
          'Api-Key': IDEOGRAM_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    // Télécharger l'image
    if (response.data && response.data.data && response.data.data.length > 0) {
      const imageUrl = response.data.data[0].url;
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      fs.writeFileSync(outputPath, imageResponse.data);
      console.log(`Image sauvegardée: ${outputPath}`);
      return true;
    } else {
      console.error('Pas d\'image générée dans la réponse');
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de la génération de l\'image:', error.response?.data || error.message);
    return false;
  }
}

// Fonction principale pour traiter toutes les ressources
async function processAllResources() {
  // Traiter les ressources publiques
  for (const category in resourcesData.public) {
    const resources = resourcesData.public[category];
    for (const resource of resources) {
      console.log(`Traitement de la ressource publique: ${resource.id}`);
      const prompt = await generateIdeogramPrompt(resource);
      if (prompt) {
        const outputPath = path.join(resourcesDir, `${resource.id}.jpg`);
        await generateImage(prompt, outputPath);
        // Attendre un peu entre chaque requête pour éviter les limitations d'API
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }

  // Traiter les ressources d'équipe
  for (const category in resourcesData.team) {
    const resources = resourcesData.team[category];
    for (const resource of resources) {
      console.log(`Traitement de la ressource d'équipe: ${resource.id}`);
      const prompt = await generateIdeogramPrompt(resource);
      if (prompt) {
        const outputPath = path.join(teamDir, `${resource.id}.jpg`);
        await generateImage(prompt, outputPath);
        // Attendre un peu entre chaque requête pour éviter les limitations d'API
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }

  console.log('Génération d\'images terminée!');
}

// Exécuter le script
processAllResources().catch(error => {
  console.error('Erreur lors de l\'exécution du script:', error);
});
