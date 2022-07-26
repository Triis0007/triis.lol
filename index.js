const express = require('express');
const {resolve} = require('path');
const app = express();
app.use(express.static('views'))


app.get('/', (req, res) => {
    res.send('index');
});


//bglhs

app.use(express.static(__dirname + "/public"), (_, res) => {
  res.status(404)
  res.sendFile(__dirname + "/views/404.html")
});

app.listen(80, () => {
  console.clear()
  console.log(`[APP] Iniciado com sucesso.`)
});

