import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { content, model, mode, addSystem } = await request.json();

    // Get API credentials from environment variables
    const apiKey = process.env.KINOS_API_KEY;
    const customer = process.env.KINOS_CUSTOMER_ID;
    const projectId = process.env.KINOS_PROJECT_ID;

    if (!apiKey || !customer || !projectId) {
      return NextResponse.json(
        { error: 'API credentials not configured' },
        { status: 500 }
      );
    }

    // Prepare the request body for Kinos Engine API
    const requestBody = {
      message: content,
      model: model || 'default',
      mode: mode || 'default',
      system: addSystem || ''
    };

    // Send request to Kinos Engine API
    const response = await fetch(`https://api.kinos-engine.ai/projects/${customer}/${projectId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Kinos Engine API error:', errorData);
      return NextResponse.json(
        { error: 'Error communicating with Kinos Engine API' },
        { status: response.status }
      );
    }

    // Parse and return the response
    const data = await response.json();
    
    return NextResponse.json({
      response: data.response || data.content || 'No response received',
      model: data.model || model,
      id: data.id || 'unknown'
    });
    
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
