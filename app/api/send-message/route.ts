import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { content, model, mode, addSystem } = await request.json();

    // Get API key from environment variables
    const apiKey = process.env.KINOS_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API credentials not configured' },
        { status: 500 }
      );
    }

    // Use fixed project ID "sottowelcome"
    const projectId = "sottowelcome";
    
    // Get or generate customer ID from cookies
    const cookies = request.cookies;
    let customerId = cookies.get('customer_id')?.value;
    
    if (!customerId) {
      // Generate a UUID v4 if no customer_id exists
      customerId = uuidv4();
    }

    // Prepare the request body for Kinos Engine API
    const requestBody = {
      content: content,
      model: model || 'claude-3-7-sonnet-latest',
      mode: mode || 'restaurant_assistant',
      system: addSystem || ''
    };

    // Send request to Kinos Engine API
    const response = await fetch(`https://api.kinos-engine.ai/projects/${customerId}/${projectId}/messages`, {
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
    
    // Create response with cookie to store customer_id
    const responseWithCookie = NextResponse.json({
      response: data.response || data.content || 'No response received',
      model: data.model || model,
      id: data.id || 'unknown'
    });
    
    // Set customer_id cookie
    responseWithCookie.cookies.set('customer_id', customerId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/'
    });
    
    return responseWithCookie;
    
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
