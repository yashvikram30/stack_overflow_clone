const env = {
    appwrite: {
        endpoint : String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT), 
        project_id: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        apiKey: String(process.env.NEXT_PUBLIC_APPWRITE_API_KEY),
    }
}

export default env;