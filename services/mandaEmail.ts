import transporter from '../config/mailer.js';
import {SentMessageInfo} from "nodemailer";

export async function mandaEmail(destino: string, conteudo: string) {
    console.log(destino, conteudo);
    const teste = await transporter.verify()
    console.log(teste)
    const mailOptions = {
        from: 'mandaemeil222@gmail.com',
        to: destino,
        subject: 'Assunto do Email',
        text: "Se esta vendo esse texto é porque eu cliente não suporta HTML, mas o conteudo do email é: " + conteudo,
        html: `<b>Conteudo do Email: ${conteudo}</b>`
    };
    try {
        console.log('1')
        const info: SentMessageInfo = await transporter.sendMail(mailOptions);
        console.log(info)
        return { message: 'Email enviado com sucesso', info };
    } catch (error) {
         return error
    }
    
}