'use strict';

// Renderiza rotas.

const routes = require('express').Router();

const notesControler = require('../controller/notesController.js');
const notesMiddleware = require('../service/notesMiddleware.js');

routes.post('/notes', notesMiddleware.bodyMiddleware, notesControler.postNote);
routes.get('/notes', notesControler.getAllNotes);
routes.get('/notes/:id', notesMiddleware.idMiddleware, notesControler.getNoteById);
routes.get('/notes/title/:title', notesControler.getNoteByTitle);
routes.put('/notes/:id', notesMiddleware.idMiddleware, notesMiddleware.bodyMiddleware, notesControler.putNote);
routes.delete('/notes/:id', notesMiddleware.idMiddleware, notesControler.deleteNote);

module.exports = routes;    