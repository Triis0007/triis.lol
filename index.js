import express from 'express';
const app = express();

app.use(express.static('views'))


app.get('/', (req, res) => {
  res.send('index');
});


app.use(express.static("./public"), (_, res) => {
  res.status(404)
  res.send("404")
});

app.listen(80, () => {
  console.clear()
  console.log(`[APP] Iniciado com sucesso.`)
});

