const sequelize = require("sequelize");
const connection = require("../database/db.js");

const users = connection.define('users', {
    email:{
        type: sequelize.STRING,
        allowNull:false
    },
    password:{
        type: sequelize.STRING,
        allowNull:false

    }
})

users.sync({force:false});



module.exports = users;