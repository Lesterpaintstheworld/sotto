import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { content, model, mode, addSystem } = await request.json();

    // Get API key from environment variables
    const apiKey = process.env.KINOS_API_KEY;
    const apiBaseUrl = process.env.API_BASE_URL || 'https://api.kinos-engine.ai';
    
    // Log pour déboguer
    console.log("API Key available:", !!apiKey);
    console.log("API Key first chars:", apiKey ? apiKey.substring(0, 5) + "..." : "undefined");
    console.log("API Base URL:", apiBaseUrl);
    
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

    // Log pour déboguer
    console.log("Sending request to:", `${apiBaseUrl}/projects/${customerId}/${projectId}/messages`);
    console.log("Request body:", JSON.stringify(requestBody));

    // Send request to Kinos Engine API using the API_BASE_URL
    const response = await fetch(`${apiBaseUrl}/projects/${customerId}/${projectId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    // Log pour déboguer
    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Kinos Engine API error response:', errorText);
      
      try {
        const errorData = JSON.parse(errorText);
        console.error('Parsed error data:', errorData);
      } catch (e) {
        console.error('Could not parse error response as JSON');
      }
      
      return NextResponse.json(
        { error: `Error communicating with Kinos Engine API: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    // Parse and return the response
    const data = await response.json();
    console.log("Received response:", data);
    
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
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
