import cron from "node-cron";
import {getLogger} from "nodemailer/lib/shared/index.js";

cron.schedule('*/3 * * * * *', () => console.log('execute every three second'));
cron.schedule('0 0 9,18 * * *', () => console.log('毎日9時,18時に実行'));
