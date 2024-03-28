import env from 'dotenv';
import mongoose, {model, Schema} from "mongoose";
import {Decimal128} from "mongodb";

env.config({path: '../../.env'});


mongoose.connect(process.env.MONGO_URI);

// const Cat = mongoose.model('Cat', {name: String});

const catSchema = new Schema({
        name: {type: String, required: true},
        size: {type: Number, enum: [2, 22, 222], default: 2},
        weight: {type: Decimal128, default: 22.2},
        birthDate: {
            type: Date,
            set: function (newVal) {
                return new Date(newVal);
            },
            get: function (val) {
                return val instanceof Date ? val : new Date(val);
            },
            anything: Schema.Types.Mixed
        }
    }
    , {timestamps: true}
);

const Cat = model('Cat', catSchema);

const kitty1 = new Cat({
    name: 'DJ Neko san',
    size: 22,
    birthDate: '2222/02/22',
    anything: 'Neko san is the cutest.'
});

const kitty2 = new Cat({
    name: 'Special Neko san',
    size: 2,
    birthDate: '2222/02/22'
});

const kitty3 = new Cat({
    name: 'marvelous neko san',
    size: 222,
    weight: 423424.43242,
    brithDate: '1999/09/09',
    anything: 'marvelous!!'
});

const kitty4 = new Cat({
    name: 'JetBrains neko san',
    size: 222,
    weight: 333.333
});

const kitty5 = new Cat({
    name: 'icing neko san'
});

// kitty.save().then(() => console.log('saved.'));
kitty1.save().then((doc) => console.log(doc.birthDate instanceof Date));
kitty2.save().then((doc) => console.log(doc.birthDate instanceof Date));
kitty3.save().then((doc) => console.log(doc.birthDate instanceof Date));
kitty4.save().then((doc) => console.log(doc.birthDate instanceof Date));
kitty5.save().then((doc) => console.log(doc.birthDate instanceof Date));


