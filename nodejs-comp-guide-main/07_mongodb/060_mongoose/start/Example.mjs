import mongoose, {Schema} from "mongoose";
import env from "dotenv";

env.config({path: '../../.env'});

mongoose.connect(process.env.MONGO_URI);
mongoose.set('strictQuery', true); // Prepare for Mongoose 7

const catSchema = new Schema({
        name: {type: String, required: true},
        size: {type: Number, required: true, enum: [0, 2]},
        bool: {type: Boolean, default: false},
        dt: {
            type: Date,
            set: function (newVal) {
                return new Date(newVal);
            },
            get: function (val) {
                return val instanceof Date ? val : new Date(val)
            },
        },
        array: [Number],
        anything: Schema.Types.Mixed
    },
    {timestamps: true}
);

const Cat = mongoose.model('Cat', catSchema);

const kitty = new Cat({
    name: 'Zildjian',
    size: 2,
    dt: '2022/02/22',
    array: [0, 1, 2, 3, 4]
});

kitty.save().then((doc) => console.log(doc.dt instanceof Date));
// kitty.save().then(() => console.log('meow'));
