const express = require('express');
const app = express();

const morgan = require('morgan');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

//const connectionString = "mongodb://127.0.0.1:27017/nodeapi-db"

dotenv.config()

//db connection
//  mongoose.connect(
//     process.env.MONGO_URI,
//     {userNewUrlParser: true}
// ).then(() => {
//     console.log('DB Connected')
// })

// mongoose.connection.on('error',err => {
//     console.log(`DB connection error : ${err.message}`)
// }); 


 mongoose.connect('mongodb://127.0.0.1:27017/nodeapi-db', {useNewUrlParser: true});
 mongoose.connection.once('open', function(){
   console.log('Conection has been connected!');
 }).on('error', function(error){
     console.log('Error is: ', error);
 });


//  mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//      useUnifiedTopology: true

// }) 
//bring in routes

const postRoutes = require('./routes/post');
 


//middleware

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());

app.use('/', postRoutes);


// const port = process.evn.PORT || 3000
 const port = 3000;
app.listen(port, () => {console.log(`Serveur lancé sour le port : ${port}`)}); 