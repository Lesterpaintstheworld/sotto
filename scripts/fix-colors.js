const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Récupérer la clé API depuis les variables d'environnement
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Chemin vers le dossier des ressources
const resourcesContentDir = path.join(process.cwd(), 'app/resources/content');
const globalsCSS = fs.readFileSync(path.join(process.cwd(), 'app/globals.css'), 'utf8');

// Fonction pour lire tous les fichiers de ressources
async function readResourceFiles() {
  const files = [];
  
  // Lire le contenu du dossier
  const entries = fs.readdirSync(resourcesContentDir);
  
  for (const entry of entries) {
    const entryPath = path.join(resourcesContentDir, entry);
    
    // Ignorer les fichiers non-tsx et le fichier index.ts
    if (entry === 'index.ts' || entry === 'not-found.tsx' || !entry.endsWith('.tsx')) {
      continue;
    }
    
    // Lire le contenu du fichier
    const content = fs.readFileSync(entryPath, 'utf8');
    
    files.push({
      id: entry.replace('.tsx', ''),
      path: entryPath,
      content
    });
  }
  
  return files;
}

// Fonction pour corriger les couleurs d'un fichier de ressource
async function fixResourceColors(resource) {
  try {
    const systemPrompt = `Tu es un expert en développement frontend React et CSS.
Tu dois corriger les problèmes de lisibilité du texte dans un fichier de composant React.

CONTEXTE:
Le fichier globals.css contient des règles pour s'assurer que tout le texte est lisible:
\`\`\`css
${globalsCSS}
\`\`\`

PROBLÈME:
Certains composants de ressources peuvent avoir des problèmes de lisibilité du texte à cause de couleurs mal définies.
Le texte doit être lisible sur son fond, en respectant les couleurs de la marque Sotto.

TA TÂCHE:
1. Analyser le composant React fourni
2. Identifier et corriger tous les problèmes potentiels de lisibilité
3. S'assurer que tous les textes sont visibles sur leur fond
4. Respecter les couleurs de la marque (#1A2A40 pour le texte principal, #D47D5A pour les accents)
5. Retourner le composant React corrigé COMPLET

IMPORTANT:
- Ne change pas la structure ou la fonctionnalité du composant
- Concentre-toi uniquement sur les couleurs et la lisibilité
- Assure-toi que le composant reste valide syntaxiquement
- Retourne le composant complet, pas seulement les parties modifiées`;

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-7-sonnet-latest",
        max_tokens: 64000,
        temperature: 0.2,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `Voici le composant React à corriger pour la ressource "${resource.id}". Assure-toi que tout le texte est lisible sur son fond:

\`\`\`tsx
${resource.content}
\`\`\`

Retourne le composant complet corrigé entre balises \`\`\`tsx et \`\`\`.`
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

    // Extraire le code corrigé
    const responseText = response.data.content[0].text;
    const codeMatch = responseText.match(/```tsx\s*([\s\S]*?)\s*```/);
    
    if (codeMatch && codeMatch[1]) {
      return codeMatch[1].trim();
    } else {
      console.error(`Impossible d'extraire le code corrigé pour ${resource.id}`);
      return null;
    }
  } catch (error) {
    console.error(`Erreur lors de la correction des couleurs pour ${resource.id}:`, error.response?.data || error.message);
    return null;
  }
}

// Fonction pour traiter un lot de ressources
async function processBatch(batch) {
  const promises = batch.map(resource => 
    fixResourceColors(resource)
      .then(correctedContent => {
        if (correctedContent) {
          fs.writeFileSync(resource.path, correctedContent);
          console.log(`Fichier corrigé: ${resource.path}`);
        }
      })
  );
  
  await Promise.all(promises);
}

// Fonction principale
async function main() {
  try {
    // Lire tous les fichiers de ressources
    const resources = await readResourceFiles();
    console.log(`Nombre total de fichiers à traiter: ${resources.length}`);
    
    // Traiter par lots de 4
    for (let i = 0; i < resources.length; i += 4) {
      const batch = resources.slice(i, i + 4);
      console.log(`Traitement du lot ${Math.floor(i/4) + 1}/${Math.ceil(resources.length/4)} (${batch.length} ressources)`);
      await processBatch(batch);
      
      // Attendre un peu entre chaque lot pour éviter les limitations d'API
      if (i + 4 < resources.length) {
        console.log('Pause de 5 secondes avant le prochain lot...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    
    console.log('Correction des couleurs terminée!');
  } catch (error) {
    console.error('Erreur lors de l\'exécution du script:', error);
  }
}

// Exécuter le script
main();
