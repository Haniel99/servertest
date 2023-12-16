import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola, mundo!");
});

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
