const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'taskerpro';

MongoClient.connect (url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Now you can use the db object to interact with your database
    // For example, you can create a collection and insert a document
    const collection = db.collection('users');
    collection.insertOne({ name: 'John Doe', email: 'johndoe@example.com' }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Document inserted successfully');
      }
    });

    client.close();
  }
});