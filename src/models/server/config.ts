import env from "../../app/env";
import { Account, Avatars, Databases, Storage, Client, Users } from "node-appwrite";

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.project_id) // Your project ID
    .setKey(env.appwrite.apiKey) // Your secret API key

    const databases = new Databases(client)
    const avatars = new Avatars(client);
    const storage = new Storage(client);
    const users = new Users(client)
    
    
    export { client, databases, users, avatars, storage}