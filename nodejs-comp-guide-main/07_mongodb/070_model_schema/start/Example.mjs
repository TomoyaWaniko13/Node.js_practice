import env from 'dotenv';
import mongoose, {model, Schema} from "mongoose";
import {Decimal128} from "mongodb";

env.config({path: '../../.env'});


mongoose.connect(process.env.MONGO_URI);

// const Cat = mongoose.model('Cat', {name: String});
const catSchema = new Schema(
    {
        name: {type: String, required: true},
        size: {type: Number, enum: [2, 22, 222]},
        weight: {type: Decimal128, default: 22.2},
        birthDate: {
            type: Date,
            set: function (newVal) {
                return new Date(newVal);
            },
            get: function (val) {
                return val instanceof Date ? val : new Date(val);
            },
        },
        anything: Schema.Types.Mixed
    },
    {timestamps: true}
);

const Cat = model('Cat', catSchema);

const kitty = new Cat({
    name: 'DJ Neko san',
    size: 22,
    birthDate: '2222/02/22',
    anything: 'Neko san is the cutest.'
});

// kitty.save().then(() => console.log('saved.'));
kitty.save().then((doc) => console.log(doc.birthDate instanceof Date));
