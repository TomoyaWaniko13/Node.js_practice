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

deleteBook();

async function deleteBook() {
    const col = await getCollection();

    // const result = await col.deleteOne({title: 'こんにちは4'});
    // const result = await col.deleteMany({title: {$regex: /^こんにちは/}});

    // const result = await col.deleteMany({title: {$regex: /title/}});
    const result = await col.deleteMany({name:{$regex:
                /^Z/}});

    console.log(result);
    await client.close();
}
