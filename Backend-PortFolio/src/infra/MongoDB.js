import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

export async function getMongoDb() {
    if (!db) {
        await client.connect();
        db = client.db(process.env.MONGO_DB);
        console.log("Mongo connecté");
    }
    return db;
}

export async function getProjectsCollection() {
    const database = await getMongoDb();
    return database.collection(process.env.MONGO_COLLECTION);
}
