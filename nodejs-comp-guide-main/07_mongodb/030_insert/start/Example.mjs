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

insertBook();

async function insertBook() {
    const col = await getCollection();

    // const result = await col.insertOne({title:'inserted title'});
    // const result = await col.insertMany([
    //     {title: 'title1'},
    //     {title: 'title2'},
    //     {title: 'title3'},
    // ]);

    const result = await col.insertOne({
        title: 'Neko 2',
        rating: 5,
        array: [2, 2, 2, 2]
    });

    console.log(result);
    await client.close();
}
