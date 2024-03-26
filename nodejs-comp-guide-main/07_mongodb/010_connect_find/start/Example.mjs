import {MongoClient, ServerApiVersion} from "mongodb";
import env from "dotenv";

env.config({path: '../../.env'});


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGO_URI, {
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
        client.close();
    }
}

async function getAllBooks() {
    const col = await getCollection();

    // let cursor = col.find();
    // let cursor = col.find({title: '潮騒'});
    // let cursor = col.find({rating: 5});
    // let cursor = col.find({title: '潮騒', rating: 5});
    // let cursor = col.find({$and: [{rating: 5}, {title: '潮騒'}]});
    // let cursor = col.find({$or: [{rating: 3}, {title: 'バックエンド開発'}]});
    // let cursor = col.find({title: {$in: ['ごんぎつね4', 'バックエンド開発']}});
    // let cursor = col.find({rating: {$gt: 3, $lt: 5}});
    // let cursor = col.find({rating: {$gte: 3, $lte: 5}}).sort({rating: 1});

    // let cursor = col.find();
    // let cursor = col.find({title: '潮騒'});
    // let cursor = col.find({rating: 5});
    // let cursor = col.find({title: '潮騒', rating: 5});
    // let cursor = col.find({$or: [{rating: 3, title: 'バックエンド開発'}]});
    // let cursor = col.find({title: {$in: ['ごんぎつね4', 'バックエンド開発']}});
    // let cursor = col.find({rating: {$gt: 2, $lt: 4}});
    let cursor = col.find({rating: {$gte: 2, $lte: 4}}).sort({rating: -1});


    const result = await cursor.toArray();
    console.log(result);

    await client.close();
}

getAllBooks();