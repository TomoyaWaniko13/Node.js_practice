import env from 'dotenv';
import mongoose from "mongoose";

// env.config({path: '../../.env'});
env.config();

/* 2023/06/11 ワーニングが出るため以下の一文を追加 */
mongoose.set("strictQuery", true);

console.log(process.env.MONGO_URI);

// await mongoose.connect(process.env.MONGO_URI);


// mongoose.connect(process.env.MONGO_URI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);