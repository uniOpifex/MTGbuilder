require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true}); //mongodb://localhost/idea-board
const connection = mongoose.connection;

const CardsController = require('./routes/CardsController');
const UsersController = require('.routes/UsersController');
const DecksController = require('.routes/DecksController')

connection.on('connected', () => {
console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
console.log('Mongoose default connection error: ' + err);
});


app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());


// app.use('/api/jobs', JobsController)


// app.use('/api/users', UserController)
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json())

app.get('/', (req, res)=>{
   res.sendFile(`${__dirname}/client/build/index.html`);
});

app.use('/api/cards/', CardsController);




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log("Magic happening on port " + PORT);
})