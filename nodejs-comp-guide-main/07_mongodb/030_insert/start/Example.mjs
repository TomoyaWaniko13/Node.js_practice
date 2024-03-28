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
        await client.close();
    }
}

insertBook();

async function insertBook() {
    const col = await getCollection();

    const result = await col.insertOne({
        name: 'basic neko san'
    });

    console.log(result);
    await client.close();
}
