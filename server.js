const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
const { MongoClient } = require('mongodb');
const { Thought, User } = require('./models');
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const port = 3001;

app.use(routes);
// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
// let db;

// Create variable to hold our database name
const dbName = 'SocialMediaDB';
const PORT = process.env.PORT || 3001;

// Use connect method to connect to the mongo server
// client.connect()
//   .then(() => {
//     console.log('Connected successfully to MongoDB');
//     // Use client.db() constructor to add new db instance
//     db = client.db(dbName);

//     // start up express server
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Mongo connection error: ', err.message);
//   });

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});




// const express = require('express');

// // Require model
// const { Department } = require('./models');


// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Finds all departments
// app.get('/all-departments', async (req, res) => {
//   try {
//     // Using model in route to find all documents that are instances of that model
//     const result = await Department.find({});
//     res.status(200).send(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });


