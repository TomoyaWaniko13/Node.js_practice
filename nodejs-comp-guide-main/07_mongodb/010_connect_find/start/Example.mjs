import {MongoClient, ObjectID, ServerApiVersion} from "mongodb";
import env from 'dotenv';

env.config({path: '../../.env'});


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

    // let cursor = collection.find({$or: [{rating: 3}, {title: 'バックエンド開発'}]});
    // cursor = collection.find({title: {$in: ['ごんぎつね４', 'バックエンド開発']}});
    // let cursor = collection.find({rating: {$gt: 2, $lt: 5}});
    // let cursor = collection.find({rating: {$gte: 2, $lte: 5}});
    // let cursor = collection.find({rating: {$gte: 2, $lte: 4}}).sort({rating: 1});
    // let cursor = collection.find({rating: {$gte: 2, $lte: 4}}).sort({rating: -1});
    let cursor = collection.find({title: {$regex: /^潮/}});

    const result = await cursor.toArray();
    console.log(result);
    await client.close();
}

getAllBooks();