const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//Log request
app.use(morgan('tiny'));

//parse requrest to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//set view  engine
app.set("view engine", "ejs")  //TimeStamp: 19:24 (set our view engine to use ejs)
//app.set("views", path.resolve(__dirname, "views/ejs")) //20:30 "just for reference"

//loading assests
app.use('/css',express.static(path.resolve(__dirname, "assests/css")))  //22:00
app.use('/img',express.static(path.resolve(__dirname, "assests/img")))
app.use('/js',express.static(path.resolve(__dirname, "assests/js")))


app.get('/', (req,res)=> {
  //Render allows us to render a html file (ejs = embeded JS)
  res.render('index.ejs');
})

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
