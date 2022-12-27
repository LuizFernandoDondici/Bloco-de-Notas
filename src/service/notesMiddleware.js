'use strict';

const mongoose = require('mongoose');

// Middleware que obriga o preenchimento.
exports.bodyMiddleware = (req, res, next) => {

    if (!req.body.title || !req.body.note) {
        return res.status(404).send({message: 'O preenchimento é obrigatório.'});
    }

    next();
};

// Middleware que verifica se o ID é valido.
exports.idMiddleware = (req, res, next) => {

    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(404).send({message: 'ID inválido'});
    }

    next();
};
