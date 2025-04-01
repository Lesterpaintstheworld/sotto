
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    // Récupérer les paramètres de la requête
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');
    const isTeam = searchParams.get('isTeam') === 'true';
    
    if (!id || !category) {
      return NextResponse.json(
        { error: 'Les paramètres id et category sont requis' },
        { status: 400 }
      );
    }
    
    // Construire le chemin vers le fichier Markdown
    const basePath = path.join(process.cwd(), 'content/resources');
    const resourcePath = isTeam 
      ? path.join(basePath, 'team', category, `${id}.md`)
      : path.join(basePath, 'public', category, `${id}.md`);
    
    // Vérifier si le fichier existe
    if (!fs.existsSync(resourcePath)) {
      return NextResponse.json(
        { error: 'Ressource non trouvée' },
        { status: 404 }
      );
    }
    
    // Lire le contenu du fichier Markdown
    const content = fs.readFileSync(resourcePath, 'utf8');
    
    // Retourner le contenu
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Erreur lors de la récupération du contenu de la ressource:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du contenu de la ressource' },
      { status: 500 }
    );
  }
}
