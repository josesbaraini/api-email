import nodemailer, { Transporter} from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter : Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken: process.env.REFRESHTOKEN,
        user: 'mandaemeil222@gmail.com'
    }
});

export default transporter;