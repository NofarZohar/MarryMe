const express = require('express');
const app = express();
const port = 3000;
const mydb=require('./models/dbAdapter')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get('/buyRing', (req, res) => {
  
  async function getData() {
    await mydb.getRing().then((result) => res.send(result));
  }
  getData();
  
});