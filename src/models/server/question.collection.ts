import { IndexType, Permission } from "node-appwrite";
import { db, questionCollection } from "../name";
import { databases } from "./config";

export default async function createQuestionCollection(){

    // create collection
    await databases.createCollection(db, questionCollection, questionCollection, [Permission.read("any"),
     Permission.read("users"),
     Permission.create("users"),
     Permission.update("users"),
     Permission.delete("users"),
    ])
    console.log("Question collection created successfully");

    // create attributes

    // we are unsure of which attribute to create first, so we put them in a Promise.all
    // this will create all attributes in parallel
    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 100, true),
        databases.createStringAttribute(db, questionCollection, "content", 10000, true),
        databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
        databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, true),
        databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
    ])
    console.log("Question collection attributes created successfully");

    // create indexes
    await Promise.all([
        databases.createIndex(db, questionCollection, "title", IndexType.Fulltext, ["title"], ['asc']),
        databases.createIndex(db, questionCollection, "context", IndexType.Fulltext, ["content"], ['asc']),
    ])
}   