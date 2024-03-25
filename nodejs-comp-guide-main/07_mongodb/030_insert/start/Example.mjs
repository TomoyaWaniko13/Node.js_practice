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
    const result = await col.insertMany([
        {
            title: 'こんにちは4',
            int: 10,
            bool: true,
            dt: new Date,
            array: [0, 1, 2],
            obj: {
                bye: 'さようなら'
            }
        },
        {title: 'こんにちは2'},
        {title: 'こんにちは3'},
    ]);
    console.log(result);
    await client.close();
}
