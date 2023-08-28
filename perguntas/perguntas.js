const sequelize = require("sequelize");
const connection = require("../database/db.js");

const perguntas = connection.define("perguntas", {
    pergunta:{
        type: sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: sequelize.STRING,
        allowNull:false

    },
    opc1:{
        type: sequelize.STRING,
        allowNull: false
    },
    opc2:{
        type: sequelize.STRING,
        allowNull: false
    },
    opc3:{
        type: sequelize.STRING,
        allowNull: false
    },
    opc4:{
        type: sequelize.STRING,
        allowNull: false
    },
    opc5:{
        type: sequelize.STRING,
        allowNull: false
    }
});

perguntas.sync({force:false});

module.exports = perguntas;
