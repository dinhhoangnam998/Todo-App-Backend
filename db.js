const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://mongoadmin:secret@localhost:27017/TodoApp?authSource=admin&readPreference=primary&ssl=false";
const client = new MongoClient(url);

module.exports = { connection: client.connect() };
