import express from "express";
import dotenv from "dotenv";
import livrosRoute from './src/routes/livrosRoute.js'

const app = express();

app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("servidor aberto...");
});

app.use('/livros', livrosRoute);

app.listen(serverPort, () => {
    console.log(` Servidor livros foi iniciado em: http://localhost:${serverPort}`);
  });