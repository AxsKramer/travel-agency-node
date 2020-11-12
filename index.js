const express = require('express');
const router = require('./routes/index');
const db = require('./config/db');
const app = express();
//Define port
const port = process.env.PORT || 4000;

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(error => console.log(error));

//Enable pug
app.set('view engine', 'pug');

//Get current year
app.use((req,res, next) => {
  //declaration of local variables
  const year = new Date()
  //it works on views file just using the name of the variable 
  res.locals.currentYear = year.getFullYear(); 
  next();
})

//Add router
app.use('/', router);
//define public directory
app.use(express.static('public'));


app.listen(port, () => console.log(`The server is running on port ${port}`));

