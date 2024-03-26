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
        return db.collection('books');
    } catch {
        await client.close();
    }
}

updateBook();

async function updateBook() {
    const col = await getCollection();
    // await col.updateOne({title: 'バックエンド開発'}, {$set: {rating: 3}});
    await col.updateMany({description: '三島由紀夫'}, {$set: {rating: 5}});

    await client.close();
}
