import  express  from "express";

const app = express();

import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        clientId: clientid,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        user: 'mandaemeil222@gmail.com',
        pass: '25252525Bb'
    }
});



app.get('/enviarEmail', (req , res)=>{
    const destino = req.query.destino;
    let conteudo = req.query.conteudo;
    let mailOptions = {
        from: 'mandaemeil222@gmail.com',
        to: destino,
        subject: 'Assunto do Email',
        text: conteudo+'isso é só uma api que um estudante ta testado',
        html: '<b>Corpo do email em HTML</b>'
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
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