// Netlify Function to safely expose environment variables to client
exports.handler = async function(event, context) {
    // Only allow GET requests
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    // Return environment variables (only non-sensitive ones)
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
            // You can expose non-sensitive config here if needed
            environment: process.env.NODE_ENV || 'development'
        })
    };
};
