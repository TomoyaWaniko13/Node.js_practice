import mongoose, {model, Schema} from 'mongoose';
import env from 'dotenv';

env.config({path: '../../.env'});

/**
 String: 文字列
 Number: 数値
 Date: 日付
 Buffer: バイナリデータ
 Boolean: 真偽
 Mixed: なんでもOK
 ObjectId: Mongo固有のID
 Array: 配列
 Decimal128: 浮動小数点
 Map: マップ
 Schema: 他のスキーマ
 */

// connect(process.env.MONGO_URI);

const bookSchema = new Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
        rating: {type: Number, required: true, enum: [1, 2, 3, 4, 5], default: 3},
        comment: {type: String, required: true},
    },
    {timestamps: true});

const Book = model('Book', bookSchema);

async function createBook() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected.');

        const book = new Book({
            title: 'Neko san with neko san !!!!!!!!!!!!!!!!!!',
            description: 'Explanation of neko san species',
            comment: 'amazing.',
            rating: 5
        });

        const savedBook = await book.save();
        console.log(savedBook._id);

    } catch (e) {
        console.error('Error:', e);
    }finally {
        await mongoose.connection.close();
    }
}

createBook();

// const book = new BookModel({
//     title: 'Neko san with neko san.',
//     description: 'Explanation of neko san species',
//     comment: 'amazing.',
//     rating: 5
// });

// book.save().then((book) => console.log(book._id));
// mongoose.connection.close();

// init();
// async function init() {
//     const registerBook = await book.save();
//     console.log(registerBook._id);
//     await mongoose.connection.close();
// }