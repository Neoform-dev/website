# Copy these variables to your Cloudflare Workers environment variables

# Auth.js Configuration
NEXTAUTH_URL=https://neoform.shraj.workers.dev
NEXTAUTH_SECRET=your-super-secret-jwt-secret-key-change-this-in-production

# Google OAuth (Get these from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Instructions:
# 1. Go to Google Cloud Console (https://console.cloud.google.com)
# 2. Create a new project or select existing one
# 3. Enable Google+ API
# 4. Go to "Credentials" and create OAuth 2.0 Client ID
# 5. Add authorized redirect URI: https://neoform.shraj.workers.dev/api/auth/callback/google
# 6. Copy Client ID and Client Secret
# 7. Add these variables in Cloudflare Workers environment variables
