
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Chemin vers le fichier JSON des ressources
    const resourcesPath = path.join(process.cwd(), 'app/data/resources.json');
    
    // Lire le fichier JSON
    const resourcesData = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));
    
    // Retourner les données au format JSON
    return NextResponse.json(resourcesData);
  } catch (error) {
    console.error('Erreur lors de la récupération des ressources:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des ressources' },
      { status: 500 }
    );
  }
}
