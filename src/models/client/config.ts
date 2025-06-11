import env from "@/app/env";
import { Client, Account, Avatars, Databases, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.project_id); 

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, account, databases, avatars, storage };
// const result = await account.create(
//     '<USER_ID>', // userId
//     'email@example.com', // email
//     '', // password
//     '<NAME>' // name (optional)
// );

// console.log(result);
