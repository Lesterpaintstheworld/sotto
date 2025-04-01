const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
const matter = require('gray-matter');
const marked = require('marked');

dotenv.config();

// Récupérer la clé API depuis les variables d'environnement
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Définir les chemins des répertoires
const contentDir = path.join(process.cwd(), 'content/resources');
const publicDir = path.join(contentDir, 'public');
const teamDir = path.join(contentDir, 'team');
const outputDir = path.join(process.cwd(), 'app/resources/content');

// Créer les répertoires de sortie s'ils n'existent pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Lire le fichier globals.css pour extraire les styles
const globalCssPath = path.join(process.cwd(), 'app/globals.css');
let globalCssContent = '';
if (fs.existsSync(globalCssPath)) {
  globalCssContent = fs.readFileSync(globalCssPath, 'utf8');
}

// Fonction pour lire les fichiers Markdown
async function readMarkdownFiles() {
  const files = [];

  // Lire les fichiers publics
  const publicCategories = fs.readdirSync(publicDir);
  for (const category of publicCategories) {
    const categoryPath = path.join(publicDir, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const categoryFiles = fs.readdirSync(categoryPath);
      for (const file of categoryFiles) {
        if (file.endsWith('.md')) {
          files.push({
            id: file.replace('.md', ''),
            category,
            isTeam: false,
            path: path.join(categoryPath, file)
          });
        }
      }
    }
  }

  // Lire les fichiers d'équipe
  const teamCategories = fs.readdirSync(teamDir);
  for (const category of teamCategories) {
    const categoryPath = path.join(teamDir, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const categoryFiles = fs.readdirSync(categoryPath);
      for (const file of categoryFiles) {
        if (file.endsWith('.md')) {
          files.push({
            id: file.replace('.md', ''),
            category,
            isTeam: true,
            path: path.join(categoryPath, file)
          });
        }
      }
    }
  }

  return files;
}

// Fonction pour générer un fichier TSX à partir d'un fichier Markdown
async function generateTsxFile(file) {
  try {
    // Vérifier si le fichier TSX existe déjà
    const outputPath = path.join(outputDir, `${file.id}.tsx`);
    if (fs.existsSync(outputPath)) {
      console.log(`Le fichier ${outputPath} existe déjà. Ignoré.`);
      return;
    }

    // Lire le contenu du fichier Markdown
    const fileContent = fs.readFileSync(file.path, 'utf8');
    const { content, data } = matter(fileContent);

    // Extraire le titre du contenu Markdown
    let title = '';
    const titleMatch = content.match(/^# (.+)$/m);
    if (titleMatch) {
      title = titleMatch[1];
    }

    // Préparer le prompt pour Claude
    const systemPrompt = `Tu es un expert en développement React et Next.js qui convertit des fichiers Markdown en composants TSX élégants et visuels.

TÂCHE:
Convertis le contenu Markdown fourni en un composant React TSX qui sera utilisé dans une application Next.js. Le composant doit être visuellement attrayant, avec des cartes pour les listes à puces et une mise en page soignée.

CONTEXTE CSS GLOBAL:
${globalCssContent}

DIRECTIVES:
1. Crée un composant React fonctionnel qui affiche le contenu Markdown de manière élégante
2. Utilise TailwindCSS pour le styling (déjà configuré dans l'application)
3. Transforme les listes à puces en cartes visuelles avec des bordures, ombres et espacement
4. Utilise les couleurs de la palette Sotto: bleu profond (#1A2A40), terracotta (#D47D5A), blanc cassé (#F5F5F0), vert sauge (#87A28F), or subtil (#D4B483)
5. Ajoute des transitions et animations subtiles pour améliorer l'expérience utilisateur
6. Assure-toi que le composant est responsive
7. Inclus des composants pour les tableaux, citations, et autres éléments Markdown
8. N'inclus PAS les imports pour Header et Footer - ils seront gérés par la page parent

FORMAT DE RÉPONSE:
Fournis uniquement le code TSX du composant, sans explications supplémentaires.
Le composant doit être exporté par défaut et nommé "ResourceContent".`;

    // Appeler l'API Claude pour générer le composant TSX
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-7-sonnet-latest",
        max_tokens: 64000,
        temperature: 0.7,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `Voici le contenu Markdown à convertir en composant TSX:

\`\`\`markdown
${content}
\`\`\`

Le titre de la ressource est: "${title}"
La catégorie est: "${file.category}"
C'est ${file.isTeam ? 'une ressource d'équipe' : 'une ressource publique'}

Génère un composant TSX élégant et visuel qui affiche ce contenu.`
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

    // Extraire le code TSX de la réponse
    let tsxCode = response.data.content[0].text;
    
    // Extraire uniquement le contenu entre les balises ```tsx et ```
    const tsxMatch = tsxCode.match(/```tsx\s*([\s\S]*?)\s*```/);
    if (tsxMatch) {
      tsxCode = tsxMatch[1];
    }

    // Écrire le fichier TSX
    fs.writeFileSync(outputPath, tsxCode);
    console.log(`Fichier TSX généré: ${outputPath}`);
    
    return true;
  } catch (error) {
    console.error(`Erreur lors de la génération du fichier TSX pour ${file.id}:`, error.response?.data || error.message);
    return false;
  }
}

// Fonction pour traiter un lot de fichiers
async function processBatch(batch) {
  const promises = batch.map(file => generateTsxFile(file));
  await Promise.all(promises);
}

// Fonction principale
async function main() {
  try {
    // Lire tous les fichiers Markdown
    const files = await readMarkdownFiles();
    console.log(`Nombre total de fichiers à traiter: ${files.length}`);

    // Traiter les fichiers par lots de 4
    for (let i = 0; i < files.length; i += 4) {
      const batch = files.slice(i, i + 4);
      console.log(`Traitement du lot ${Math.floor(i/4) + 1}/${Math.ceil(files.length/4)} (${batch.length} fichiers)`);
      await processBatch(batch);
      
      // Attendre un peu entre chaque lot pour éviter les limitations d'API
      if (i + 4 < files.length) {
        console.log('Pause de 5 secondes avant le prochain lot...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }

    console.log('Génération des fichiers TSX terminée!');
  } catch (error) {
    console.error('Erreur lors de l\'exécution du script:', error);
  }
}

// Exécuter le script
main();
