const express = require("express");
const respostas = require("./respostas/repostas.js");
const connection = require("./database/db.js");
const usersController = require("./users/usersController.js");
const perguntasController = require("./perguntas/perguntasController.js");
const bodyParser = require('body-parser');
const session = require("express-session");
const perguntas = require("./perguntas/perguntas.js");



const app = express();

app.use(session({
    secret:"uguturhqwndpqowijdh",
    cookie: {
        maxAge: 7200000 //o tempo para destruir os cookies automaticamente 30000 milisegundos
    }

}))

function auth(req,res,next){
    
    if(req.session.user != undefined){
        next();
    }else{
        res.redirect("/login");
    }
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", usersController);
app.use("/", perguntasController);

connection.authenticate().then(()=>{
    console.log("Database acessed")
}).catch((err)=>{
    console.log("err: " + err);
})

app.get("/", (req,res)=>{
    perguntas.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(pergunta=>{
        
     res.render("index", {pergunta:pergunta});
        
        
    })
})

app.get("/formularioPerguntas", auth, (req,res)=>{
    res.render("formularioPerguntas");
})

app.listen(8080, ()=>{
    console.log("API IS WORKING!");
})