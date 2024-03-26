import env from 'dotenv';
import mongoose, {model, Schema} from "mongoose";
import {Decimal128} from "mongodb";

env.config({path: '../../.env'});


mongoose.connect(process.env.MONGO_URI);
const catSchema = new Schema({
    name: {type: String, required: true},
    size: {type: Number, required: true, enum: [2, 22, 222]},
    weight: {type: Decimal128, default: 22.2},
    birthDate: {
        type: Date,
        set: function (newVal) {
            return new Date(newVal)
        },
        get: function (val) {
            return val instanceof Date ? val : new Date(val);
        },
    },
    array: {type: [], default: [2, 2, 2]},
    anything: Schema.Types.Mixed
});
const Cat = model('Cat', catSchema);
const kitty = new Cat({
    name: 'Ultimate Neko san',
    size: 22,
    birthDate: '2002/02/02'
});
// kitty.save().then(() => console.log('task completed...'));
kitty.save().then((doc) => console.log(doc.birthDate instanceof Date));