import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import { mandaEmail } from './services/mandaEmail.js';
import { EmailQuery } from './@types/email.js';
dotenv.config();
const app : Express = express();
app.get('/enviarEmail', async (req : Request , res: Response)=>{
    const {destino, conteudo} = req.query as Partial<EmailQuery>;
    const resultado = await mandaEmail(destino as string, conteudo as string);
    res.json(resultado);
});



app.listen(process.env.SERVERPORT,()=>{
    console.log(`Servidor iniciado na porta ${process.env.SERVERPORT}`);
});