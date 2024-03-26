import env from 'dotenv';
import mongoose from "mongoose";

env.config({path: '../../.env'});


mongoose.connect(process.env.MONGO_URI);
const Cat = mongoose.model('Cat', { name: String });


const kitty = new Cat({
    name: 'Neko san',
});

kitty.save().then(() => console.log('meow'));