const express = require("express");
const app = express();
const port = 8000 || process.env.PORT;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

//database
const {createPool} = require("mysql2");

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"8890Aaaa@",
    database:"task",
    connectionLimit:30
});
//templating engine
const ejs= require("ejs");
app.get('/',(req,res)=>{
    res.render("index");
});
app.set("view engine","ejs");

app.set("views","./views");
//middlewares
app.use(express.static('_dirname' + '/public'));

app.use(express.urlencoded({extended:false}));