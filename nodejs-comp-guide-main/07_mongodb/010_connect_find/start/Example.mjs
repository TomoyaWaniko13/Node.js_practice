import {MongoClient, ServerApiVersion} from "mongodb";
import env from 'dotenv';

env.config({path: '/Users/okadatomoya/Desktop/Programming/Node.js_practice/nodejs-comp-guide-main/07_mongodb/.env'});


const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function getCollection() {
    try {
        await client.connect();
        const db = client.db('bookshelf');
        return db.collection('books');
    } catch {
        await client.close();
    }
}

async function getAllBooks() {
    const collection = await getCollection();
    const cursor = collection.find();
    const result = await cursor.toArray();
    await client.close();
}

getAllBooks();