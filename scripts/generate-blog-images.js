const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Récupérer les clés API depuis les variables d'environnement
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const IDEOGRAM_API_KEY = process.env.IDEOGRAM_API_KEY;

// Charger les données des articles de blog
const blogPosts = [
  {
    id: "comment-les-ecrans-immiscent",
    title: "Comment les écrans s'immiscent entre vous et vos clients : l'impact invisible sur l'expérience restaurant",
    excerpt: "Article fondamental qui expose le problème central que Sotto résout et touche à l'émotion des restaurateurs (la relation client).",
    category: "Expérience client"
  },
  {
    id: "cout-cache-systemes-encaissement",
    title: "Le coût caché des systèmes d'encaissement traditionnels : ce que les fournisseurs ne vous disent pas",
    excerpt: "Argument économique puissant qui expose les frais excessifs des solutions actuelles et prépare le terrain pour présenter le modèle économique avantageux de Sotto.",
    category: "Finance"
  },
  {
    id: "service-ralenti-heures-pointe",
    title: "Service ralenti aux heures de pointe? Votre système de prise de commande est peut-être le coupable",
    excerpt: "Aborde un point de douleur critique pour tous les restaurateurs et montre comment la technologie vocale élimine ce goulot d'étranglement.",
    category: "Opérations"
  },
  {
    id: "technologie-vocale-augmente-panier-moyen",
    title: "Comment la technologie vocale augmente le panier moyen : étude de cas dans 5 restaurants",
    excerpt: "Présentation de données concrètes et mesurables qui parlent directement au résultat financier, l'argument le plus convaincant pour l'adoption.",
    category: "Études de cas"
  },
  {
    id: "fidelisation-client-technologie-invisible",
    title: "+15% de fidélisation client : quand la technologie invisible renforce l'expérience humaine",
    excerpt: "Bénéfice commercial à long terme qui montre les avantages compétitifs durables de Sotto.",
    category: "Marketing"
  },
  {
    id: "roi-solution-vocale",
    title: "ROI d'une solution vocale : calcul du retour sur investissement mois par mois",
    excerpt: "Outil concret qui aide les restaurateurs à visualiser la rentabilité rapide de leur investissement.",
    category: "Finance"
  },
  {
    id: "interview-chef-martin",
    title: "'Mes serveurs ne veulent plus revenir en arrière' : interview avec Chef Martin du Bistrot Parisien",
    excerpt: "Témoignage qui renforce la crédibilité et montre l'adoption réussie par les pairs.",
    category: "Témoignages"
  },
  {
    id: "journee-avec-sotto",
    title: "Une journée avec Sotto : de l'ouverture à la fermeture",
    excerpt: "Article pratique qui aide à visualiser l'intégration concrète dans leurs opérations quotidiennes.",
    category: "Guide pratique"
  },
  {
    id: "installation-4-heures",
    title: "Installation en 4 heures : comment se déroule la transition vers un restaurant sans écran",
    excerpt: "Répond à la crainte de complexité et de perturbation lors de l'adoption d'une nouvelle technologie.",
    category: "Implémentation"
  },
  {
    id: "questions-frequentes-technologie-vocale",
    title: "Questions fréquentes sur la technologie vocale en restauration",
    excerpt: "Article stratégique qui anticipe et répond aux objections et préoccupations les plus courantes.",
    category: "FAQ"
  }
];

// Créer les dossiers de destination s'ils n'existent pas
const publicDir = path.join(process.cwd(), 'public');
const blogDir = path.join(publicDir, 'blog');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir);

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
async function generateIdeogramPrompt(article, index) {
  try {
    // Créer des styles visuels différents selon la catégorie
    let styleVariation = "";
    
    // Varier les styles selon la catégorie
    switch (article.category) {
      case "Expérience client":
        styleVariation = "Serveur attentif interagissant avec des clients, contact visuel direct, ambiance chaleureuse";
        break;
      case "Finance":
        styleVariation = "Restaurateur analysant des documents, expression de surprise ou de préoccupation, éclairage de bureau";
        break;
      case "Opérations":
        styleVariation = "Restaurant aux heures de pointe, mouvement flou des serveurs, clients attendant";
        break;
      case "Études de cas":
        styleVariation = "Vue d'ensemble d'un restaurant prospère, clients satisfaits, personnel souriant";
        break;
      case "Marketing":
        styleVariation = "Clients réguliers reconnus par le personnel, accueil chaleureux, ambiance de familiarité";
        break;
      case "Témoignages":
        styleVariation = "Portrait d'un chef ou restaurateur confiant, cuisine ou restaurant en arrière-plan";
        break;
      case "Guide pratique":
        styleVariation = "Séquence d'actions dans un restaurant, montrant différents moments de la journée";
        break;
      case "Implémentation":
        styleVariation = "Installation d'équipement discret, personnel en formation, ambiance de transition";
        break;
      case "FAQ":
        styleVariation = "Conversation entre un expert et un restaurateur, gestes explicatifs, environnement d'apprentissage";
        break;
      default:
        styleVariation = "Scène de restaurant authentique avec interactions humaines chaleureuses";
    }
    
    // Varier les palettes de couleurs
    const colorPalettes = [
      "dominante bleu profond (#1A2A40) avec touches de terracotta (#D47D5A)",
      "dominante terracotta (#D47D5A) avec touches de bleu profond (#1A2A40)",
      "tons neutres avec accents de vert sauge (#87A28F) et bleu profond (#1A2A40)",
      "dominante blanc cassé (#F5F5F0) avec accents de terracotta (#D47D5A) et or subtil (#D4B483)",
      "contraste fort entre bleu profond (#1A2A40) et blanc cassé (#F5F5F0) avec touches minimes de terracotta"
    ];
    
    const selectedPalette = colorPalettes[index % colorPalettes.length];
    
    // Varier les techniques photographiques
    const photoTechniques = [
      "photographie éditoriale de style magazine gastronomique",
      "photographie avec éclairage latéral dramatique et ombres prononcées",
      "photographie avec profondeur de champ réduite, focus sur les sujets principaux",
      "photographie de style reportage avec composition dynamique",
      "photographie atmosphérique avec éclairage naturel doux"
    ];
    
    const selectedTechnique = photoTechniques[index % photoTechniques.length];

    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-7-sonnet-latest",
        max_tokens: 1000,
        temperature: 0.8,
        system: "Tu es un expert en création de prompts pour l'IA générative d'images Ideogram. Tu crées des prompts détaillés qui produisent des images de haute qualité, artistiques et cohérentes avec l'identité de marque fournie, mais suffisamment variées pour éviter la monotonie.",
        messages: [
          {
            role: "user",
            content: `Crée un prompt détaillé pour Ideogram qui illustrera un article de blog pour notre site web. L'image doit être au format 16:9 et DOIT être une photographie réaliste (pas d'illustration).

Titre de l'article: ${article.title}
Description: ${article.excerpt}
Catégorie: ${article.category}

Style visuel spécifique pour cette image: ${styleVariation}
Technique photographique à utiliser: ${selectedTechnique}
Palette de couleurs: ${selectedPalette}

${brandStyleDescription}

Ton prompt doit:
1. Décrire une photographie réaliste qui représente visuellement le concept de cet article de blog
2. Montrer un restaurant ordinaire, accessible, pas trop chic ou élitiste
3. Utiliser le style visuel et la technique photographique spécifiés ci-dessus
4. Inclure des détails sur la composition, l'éclairage et les éléments à inclure
5. Être optimisé pour le format 16:9 avec une composition équilibrée
6. Montrer des personnes diverses dans un contexte de restaurant ordinaire, sans écrans visibles (sauf si l'article parle spécifiquement de l'impact négatif des écrans)
7. Éviter tout élément qui paraîtrait trop luxueux ou inaccessible
8. Ne pas inclure de texte dans l'image
9. Être SIGNIFICATIVEMENT DIFFÉRENT des autres images du blog

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
    console.error(`Erreur lors de la génération du prompt pour ${article.title}:`, error.response?.data || error.message);
    return null;
  }
}

// Fonction pour générer une image avec Ideogram en utilisant l'API directe
async function generateImage(prompt, outputPath, index) {
  try {
    console.log(`Génération de l'image avec le prompt: ${prompt.substring(0, 100)}...`);
    
    // Varier les styles photographiques selon l'index
    const stylePresets = ["PHOTOGRAPHIC", "CINEMATIC", "CREATIVE", "VIBRANT", "PHOTOGRAPHIC"];
    const selectedStyle = stylePresets[index % stylePresets.length];
    
    // Ajouter des modificateurs différents selon l'index
    const styleModifiers = [
      ", editorial photography, restaurant setting, natural lighting, authentic atmosphere",
      ", high contrast photography with dramatic lighting, cinematic composition, restaurant scene",
      ", soft natural lighting, shallow depth of field, documentary style, restaurant environment",
      ", minimalist composition with negative space, subtle color grading, restaurant interior",
      ", textured photography with film grain, authentic atmosphere, restaurant setting"
    ];
    
    const selectedModifier = styleModifiers[index % styleModifiers.length];
    
    const response = await axios.post(
      'https://api.ideogram.ai/generate',
      {
        image_request: {
          prompt: prompt + selectedModifier + ", everyday restaurant setting, authentic atmosphere, natural lighting, candid moments, ordinary people, accessible environment, not luxury, photojournalistic style",
          aspect_ratio: "ASPECT_16_9",
          model: "V_2A",
          style_preset: selectedStyle
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

// Fonction principale pour traiter tous les articles
async function processAllArticles() {
  for (let i = 0; i < blogPosts.length; i++) {
    const article = blogPosts[i];
    const outputPath = path.join(blogDir, `${article.id}.jpg`);
    
    // Vérifier si l'image existe déjà
    if (fs.existsSync(outputPath)) {
      console.log(`L'image existe déjà pour l'article: ${article.id} - Ignorée`);
      continue;
    }
    
    console.log(`Traitement de l'article: ${article.id} (${i+1}/${blogPosts.length})`);
    const prompt = await generateIdeogramPrompt(article, i);
    if (prompt) {
      await generateImage(prompt, outputPath, i);
      // Attendre un peu entre chaque requête pour éviter les limitations d'API
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Générer une image pour la page principale du blog
  const blogMainImagePath = path.join(blogDir, 'main-header.jpg');
  if (!fs.existsSync(blogMainImagePath)) {
    console.log('Génération de l\'image principale du blog');
    const mainPrompt = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3-7-sonnet-latest",
        max_tokens: 1000,
        temperature: 0.8,
        system: "Tu es un expert en création de prompts pour l'IA générative d'images.",
        messages: [
          {
            role: "user",
            content: `Crée un prompt détaillé pour Ideogram qui illustrera l'en-tête principal de notre blog sur la restauration et la technologie vocale. L'image doit être au format 16:9 et DOIT être une photographie réaliste (pas d'illustration).

Style visuel: Vue large d'un restaurant moderne mais chaleureux, avec une ambiance accueillante
Technique photographique: Photographie éditoriale avec une composition équilibrée et une profondeur de champ étendue
Palette de couleurs: Dominante bleu profond (#1A2A40) avec touches de terracotta (#D47D5A) et blanc cassé (#F5F5F0)

${brandStyleDescription}

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
    
    const mainImagePrompt = mainPrompt.data.content[0].text;
    if (mainImagePrompt) {
      await generateImage(mainImagePrompt, blogMainImagePath, 0);
    }
  }

  console.log('Génération d\'images terminée!');
}

// Exécuter le script
processAllArticles().catch(error => {
  console.error('Erreur lors de l\'exécution du script:', error);
});
