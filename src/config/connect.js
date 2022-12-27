'use strict';

// Configura acesso ao banco de dados.

require('dotenv').config('.env');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const mongoose = require("mongoose");

const connect = async () => {
    
    try {

        await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qau9dm1.mongodb.net/?retryWrites=true&w=majority`
            );
        
        console.log("Database conectado.");
    
    } catch (error) {
        
        console.log(error.message);
        console.log("Erro ao conectar o database.");
    }
};

module.exports = connect;