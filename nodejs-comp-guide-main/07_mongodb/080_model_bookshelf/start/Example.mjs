import mongoose from 'mongoose';
import env from 'dotenv';

env.config({path: '../../.env'});

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => conole.err('MongoDB connection error:', err));
//
// const bookSchema = new Schema({
//         title: {type: String, required: true},
//         description: {type: String, required: true},
//         rating: {type: Number, required: true, enum: [1, 2, 3, 4, 5], default: 3},
//         comment: {type: String, required: true},
//     },
//     {timestamps: true}
// );
//
// const Book = model('Book', bookSchema);
//
// async function createAndSaveBook() {
//     const book = new Book({
//         title: 'Cuteness of Neko san.',
//         description: 'Neko san is cute.',
//         rating: 5,
//         comment: 'Neko san is equal to neko san.'
//     });
//
//     try {
//         const savedBook = await book.save();
//         console.log(savedBook._id);
//     } catch (err) {
//         console.error('Error saving book:', err);
//     } finally {
//         await mongoose.connection.close();
//         console.log('connection closed...');
//     }
// }
//
// createAndSaveBook();

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => conole.err('MongoDB connection error:', err));


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

