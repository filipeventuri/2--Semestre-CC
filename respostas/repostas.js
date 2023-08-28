const sequelize = require("sequelize");
const connection = require("../database/db.js");
const perguntas = require("../perguntas/perguntas.js");

const respostas = connection.define("pesquisas", {
    resposta: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    slug:{
        type: sequelize.STRING,
        allowNull:false

    }
});

perguntas.hasMany(respostas);
respostas.belongsTo(perguntas);

respostas.sync({force:false});

module.exports = respostas;