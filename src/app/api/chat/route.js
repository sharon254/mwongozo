// // If you want to avoid CORS issues, you can create this file at:
// // For Next.js Pages Router: /pages/api/chat.js
// // For Next.js App Router: /app/api/chat/route.js

// // Pages Router Version (Next.js 12 or older)
// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method not allowed' });
//     }
  
//     try {
//       const { message, session_id } = req.body;
      
//       // VM IP address - update with your actual VM IP
//       const HOST = '34.31.191.81';
      
//       const response = await fetch(http://${HOST}:8000/query, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message,
//           session_id
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('API response error');
//       }
  
//       const data = await response.json();
//       return res.status(200).json(data);
//     } catch (error) {
//       console.error('Error in chat API route:', error);
//       return res.status(500).json({ 
//         error: 'Failed to communicate with AI service',
//         response: "Sorry, I'm having trouble connecting to the server. Please try again later."
//       });
//     }
//   }
  
//   /* 
//   // App Router Version (Next.js 13+)
//   export async function POST(request) {
//     try {
//       const { message, session_id } = await request.json();
      
//       // VM IP address - update with your actual VM IP
//       const HOST = '34.31.191.81';
      
//       const response = await fetch(http://${HOST}:8000/query, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message,
//           session_id
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('API response error');
//       }
  
//       const data = await response.json();
//       return new Response(JSON.stringify(data), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     } catch (error) {
//       console.error('Error in chat API route:', error);
//       return new Response(JSON.stringify({ 
//         error: 'Failed to communicate with AI service',
//         response: "Sorry, I'm having trouble connecting to the server. Please try again later."
//       }), {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' }
//       });
//     }
//   }
//   */



// src/app/api/chat/route.js

// export async function POST(request) {
//   try {
//     const { message, session_id } = await request.json();

//     const HOST = '34.31.191.81'; // your EC2 public IP

//     const response = await fetch(`http://${HOST}:8000/query`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message,
//         session_id
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('API response error');
//     }

//     const data = await response.json();
//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   } catch (error) {
//     console.error('Error in chat API route:', error);
//     return new Response(JSON.stringify({
//       error: 'Failed to communicate with AI service',
//       response: "Sorry, I'm having trouble connecting to the server. Please try again later."
//     }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }



export async function POST(request) {
  try {
    const { message } = await request.json();

    const AZURE_URL = 'https://sharonknyabuti-5380-jjnwv.eastus.inference.ml.azure.com/score';
    const AZURE_API_KEY = process.env.AZURE_API_KEY || ''; // Add this in Vercel environment variables

    const response = await fetch(AZURE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AZURE_API_KEY}`,
        'azureml-model-deployment': 'sharonknyabuti-5380-jjnwv-1'
      },
      body: JSON.stringify({ input: message })
    });

    if (!response.ok) {
      throw new Error(`Azure API failed: ${response.statusText}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Azure API call failed:', error);
    return new Response(JSON.stringify({
      error: 'Failed to communicate with Azure model',
      response: "Sorry, the model is currently unreachable. Please try again later."
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

