'use strict';

const express = require('express');
var cors = require("cors");
const connect = require('./config/connect.js');
const routes = require('./route/notesRoute.js');

const port = process.env.PORT || 3000;

connect();

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(routes);

// Inicia o servidor.
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});