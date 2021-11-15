const { MongoClient } = require("mongodb");
const url = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(url);

module.exports = { connection: client.connect() };
