import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
dotenv.config();
const app : Express = express();

let transporter : Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken: process.env.REFRESHTOKEN,
        user: 'mandaemeil222@gmail.com'
    }
});



app.get('/enviarEmail', (req : Request , res: Response)=>{
    const destino : string = req.query.destino;
    const conteudo : string = req.query.conteudo;
    const mailOptions = {
        from: 'mandaemeil222@gmail.com',
        to: destino,
        subject: 'Assunto do Email',
        text: conteudo+'isso é só uma api que um estudante ta testado',
        html: '<b>Corpo do email em HTML</b>'
    };
 
    transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo | null) => {
        if (error) {
            console.log(error)
            return res.send(error);
  
        }
         return res.send('Email enviado: ' + info.response);
    });
    
});



app.listen(8080,()=>{
    console.log('servidor iniciado na porta 8080');
});