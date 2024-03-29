import mongoose, {model, Schema} from 'mongoose';
import env from 'dotenv';

env.config({path: '../../.env'});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => conole.err('MongoDB connection error:', err));

//create schema
const bookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: Number, required: true, enum: [1, 2, 3, 4, 5], default: 3},
    comment: {type: String, required: true}
});

//create model
const BookModel = model('Book', bookSchema);

//create a book
async function createAndSaveBook() {
    const book = new BookModel({
        title: 'Cuteness of Neko san.',
        description: 'Neko san is cute.',
        rating: 5,
        comment: 'Neko san is equal to neko san.'
    });

    try {
        //save the book
        const savedBook = await book.save();
        console.log(savedBook._id);
    } catch (err) {
        console.error('Error saving book:', err);
    } finally {
        await mongoose.connection.close();
        console.log('connection closed...');
    }
}

createAndSaveBook();

async function findBook() {
    const _id = '6334634881d8ae4ba04fbc8e';
    try {
        const foundBook = await BookModel.findOne({_id});
        console.log(foundBook);
    } catch (err) {
        console.error('Error finding book', err);
    } finally {
        await mongoose.connection.close();
        console.log('connection closed...');
    }
}

findBook();


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

