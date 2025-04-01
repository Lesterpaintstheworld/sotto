const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Récupérer la clé API depuis les variables d'environnement
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Charger les données des ressources
const resourcesPath = path.join(process.cwd(), 'app/data/resources.json');
const resourcesData = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));

// Charger les documents de contexte
const presentationMd = fs.readFileSync(path.join(process.cwd(), 'docs/presentation.md'), 'utf8');
const brandingMd = fs.readFileSync(path.join(process.cwd(), 'docs/branding.md'), 'utf8');

// Créer les dossiers de destination s'ils n'existent pas
const contentDir = path.join(process.cwd(), 'content');
const resourcesDir = path.join(contentDir, 'resources');
const publicDir = path.join(resourcesDir, 'public');
const teamDir = path.join(resourcesDir, 'team');

if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir);
if (!fs.existsSync(resourcesDir)) fs.mkdirSync(resourcesDir);
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (!fs.existsSync(teamDir)) fs.mkdirSync(teamDir);

// Créer des sous-dossiers pour chaque catégorie
const publicCategories = Object.keys(resourcesData.public);
for (const category of publicCategories) {
  const categoryDir = path.join(publicDir, category);
  if (!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir);
}

const teamCategories = Object.keys(resourcesData.team);
for (const category of teamCategories) {
  const categoryDir = path.join(teamDir, category);
  if (!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir);
}

// Fonction pour générer le contenu Markdown avec Claude
async function generateResourceContent(resource, category, isTeam = false) {
  try {
    const systemPrompt = `Tu es un expert en création de contenu pour Sotto, une entreprise qui développe un système IA vocal pour les restaurants. 
Tu dois créer un document Markdown détaillé pour une ressource spécifique.

CONTEXTE SUR SOTTO:
${presentationMd}

GUIDE DE BRANDING SOTTO:
${brandingMd}

Ta tâche est de créer un document Markdown complet et détaillé pour la ressource suivante:
- Titre: ${resource.title}
- Description: ${resource.description}
- Catégorie: ${category}${isTeam ? ' (ressource interne pour l\'équipe)' : ' (ressource publique)'}

Le document doit:
1. Commencer par un en-tête Markdown avec le titre
2. Inclure une introduction qui développe la description fournie
3. Contenir plusieurs sections avec des sous-titres (h2, h3)
4. Inclure du contenu substantiel et pertinent qui serait utile pour ${isTeam ? 'l\'équipe Sotto' : 'les restaurateurs clients de Sotto'}
5. Utiliser des listes à puces, des tableaux, et d'autres éléments Markdown pour structurer l'information
6. Avoir un ton et un style conformes au guide de branding Sotto
7. Se terminer par une conclusion et éventuellement des appels à l'action

Le document doit faire entre 800 et 1500 mots et être entièrement en français.`;

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-7-sonnet-latest",
        max_tokens: 4000,
        temperature: 0.7,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `Génère un document Markdown complet et détaillé pour la ressource "${resource.title}" dans la catégorie "${category}". Assure-toi que le contenu soit substantiel, informatif et conforme au style de Sotto.`
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
    console.error(`Erreur lors de la génération du contenu pour ${resource.title}:`, error.response?.data || error.message);
    return null;
  }
}

// Fonction pour traiter un lot de ressources
async function processBatch(batch) {
  const promises = batch.map(item => 
    generateResourceContent(item.resource, item.category, item.isTeam)
      .then(content => {
        if (content) {
          const dirPath = item.isTeam 
            ? path.join(teamDir, item.category) 
            : path.join(publicDir, item.category);
          
          const filePath = path.join(dirPath, `${item.resource.id}.md`);
          fs.writeFileSync(filePath, content);
          console.log(`Fichier créé: ${filePath}`);
        }
      })
  );
  
  await Promise.all(promises);
}

// Fonction principale pour traiter toutes les ressources
async function processAllResources() {
  // Préparer toutes les ressources à traiter
  let allResources = [];
  
  // Ressources publiques
  for (const category in resourcesData.public) {
    const resources = resourcesData.public[category];
    for (const resource of resources) {
      allResources.push({
        resource,
        category,
        isTeam: false
      });
    }
  }
  
  // Ressources d'équipe
  for (const category in resourcesData.team) {
    const resources = resourcesData.team[category];
    for (const resource of resources) {
      allResources.push({
        resource,
        category,
        isTeam: true
      });
    }
  }
  
  // Traiter par lots de 4
  for (let i = 0; i < allResources.length; i += 4) {
    const batch = allResources.slice(i, i + 4);
    console.log(`Traitement du lot ${i/4 + 1}/${Math.ceil(allResources.length/4)} (${batch.length} ressources)`);
    await processBatch(batch);
    
    // Attendre un peu entre chaque lot pour éviter les limitations d'API
    if (i + 4 < allResources.length) {
      console.log('Pause de 5 secondes avant le prochain lot...');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  
  console.log('Génération de contenu terminée!');
}

// Exécuter le script
processAllResources().catch(error => {
  console.error('Erreur lors de l\'exécution du script:', error);
});
