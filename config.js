// Configuration module for environment variables
class Config {
    constructor() {
        this.apiKey = this.getApiKey();
    }

    getApiKey() {
        // Try to get from Netlify environment first
        if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
            return process.env.GEMINI_API_KEY;
        }

        // Fallback to window environment (for Netlify Functions or client-side)
        if (typeof window !== 'undefined' && window.__env && window.__env.GEMINI_API_KEY) {
            return window.__env.GEMINI_API_KEY;
        }

        // Fallback to hardcoded for demo purposes (should be removed in production)
        console.warn('Using fallback API key - set GEMINI_API_KEY environment variable');
        return 'AIzaSyALGk1HCUBeWS9MHazHRruDd00wzL5pFfc';
    }

    validateApiKey() {
        if (!this.apiKey || this.apiKey === 'your_actual_api_key_here') {
            throw new Error('API key not configured. Please set GEMINI_API_KEY environment variable.');
        }
        return true;
    }
}

// Create global config instance
window.AppConfig = new Config();
