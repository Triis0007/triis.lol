import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(80, () => {
  console.clear()
  console.log(`[APP] Iniciado com sucesso.`)
});

