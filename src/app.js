import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createTableJogos } from './Models/createjogos.js';
import router from './routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

createTableJogos();

app.use(router);

app.listen(3001, ()=>console.log("api rodando"))

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app)
.listen(3000, () => console.log("Rodando em https"))