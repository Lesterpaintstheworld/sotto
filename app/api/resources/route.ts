export const dynamic = 'force-static';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app/data/resources.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading resources data:', error);
    return NextResponse.json(
      { team: { guides: [], casestudies: [], tools: [], webinars: [] } },
      { status: 500 }
    );
  }
}
