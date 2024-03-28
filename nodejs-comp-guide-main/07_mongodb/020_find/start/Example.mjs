import env from 'dotenv';
import {MongoClient, ServerApiVersion} from 'mongodb';

env.config({path: '../../.env'});

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});

async function getCollection() {
    try {
        await client.connect();
        const db = client.db('bookshelf');

        // return db.collection('books');
        return db.collection('cats');
    } catch {
        // await client.close();
    }
}

// クエリ
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://www.mongodb.com/docs/manual/reference/operator/query/regex/

async function getAllBooks() {
    const col = await getCollection();
    debugger;

    // let cursor = col.find({name:{$regex: /Neko/}});
    // let cursor = col.find({name: {$regex: /^Neko/}});
    let cursor = col.find({size: 22});

    const result = await cursor.toArray();
    console.log(result);

    await client.close();
}

getAllBooks();
