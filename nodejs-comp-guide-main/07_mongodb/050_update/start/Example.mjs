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

updateBook();

async function updateBook() {
    const col = await getCollection();

    // await col.updateOne({title: 'バックエンド開発'}, {$set: {rating: 3}});
    // await col.updateMany({description: '三島由紀夫'}, {$set: {rating: 5}});
    // await col.updateOne({title: 'Neko'}, {$set: {title: 'Neko 1'}});
    // await col.updateMany({title: '潮騒'}, {$set: {rating: 2}});
    await col.updateOne({name: 'DJ neko san'}, {$set: {weight: 2222}});

    await client.close();
}
