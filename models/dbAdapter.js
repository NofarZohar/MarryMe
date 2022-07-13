const { MongoClient } = require("mongodb");
// connection URI
const uri = "mongodb://localhost:27017/"; //Create a new MongoClient
const client = new MongoClient(uri);

async function getRing(){
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("MarryMe");

  let collection = db.collection('product');
  let res = await collection.find({}).toArray();

  return res;
}

async function getOrders(){
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("MarryMe");

  let collection = db.collection('product');
  let res = await collection.find({}).toArray();

  return res;
}



async function searchRing(query){
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("MarryMe");

  let collection = db.collection('product');
  let res = await collection.find({name:query}).toArray();

  return res;
}

exports.getRing = getRing;
exports.searchRing = searchRing;
exports.getOrders= getOrders;


