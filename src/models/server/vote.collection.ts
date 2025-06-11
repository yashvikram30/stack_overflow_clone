import { databases } from "./config";
import { db,voteCollection } from "../name";
import { Permission } from "node-appwrite";

export default async function createVoteCollection(){

    // create collection
    databases.createCollection(db,voteCollection,voteCollection,[
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Vote collection added");

    // create attribute
    await Promise.all([
        databases.createEnumAttribute(db,voteCollection,"type",["answer","question"],true),
        databases.createStringAttribute(db,voteCollection,"typeId",50,true),
        databases.createEnumAttribute(db,voteCollection,"voteStatus",["upvoted","downvoted"],true),
        databases.createStringAttribute(db,voteCollection,"votedById",50, true),
    ]);
    console.log("Vote attributes created")
}