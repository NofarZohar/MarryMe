const express = require('express');
const app = express();
const port = 3000;
const mydb=require('./models/dbAdapter')

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded())
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

app.get('/getOrders', (req, res) => {
  
  async function getData() {
    await mydb.getOrders().then((result) => res.send(result));
  }
  getData();
  
});


app.post('/search',async (req, res) => {
  var query=req.body['query'];
  console.log(query);
 // res.send('ok')
 await mydb.searchRing(query).then((result) => res.send(result));

});
