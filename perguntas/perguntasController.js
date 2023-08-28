const express = require('express');
const router = express.Router();
const perguntas = require("./perguntas.js");
const { default: slugify } = require('slugify');

router.post("/perguntas/create", (req,res)=>{
    var{pergunta,opc1,opc2,opc3,opc4,opc5} = req.body;
              perguntas.create({
                pergunta: pergunta,
                slug: slugify(pergunta),
                opc1: opc1,
                opc2: opc2,
                opc3: opc3,
                opc4: opc4,
                opc5:opc5
            }).then(()=>{
                res.redirect("/");
            }).catch(()=>{
                res.redirect("/");
            })
});

module.exports = router;
