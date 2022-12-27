'use strict';

const notesRepository = require('../repository/notesRepository.js');

// Cria nota.
exports.postNote = async (req, res) => {

    const data = req.body;
    const success = await notesRepository.createNote(data);
    
    if (success == false) {
        return res.status(404).send({message: 'Não foi possível cadastrar a nota.'});
    }

    return res.status(201).send({message: 'Nota cadastrada com sucesso.'});
};

// Busca todas as notas.
exports.getAllNotes = async (req, res) => {

    const success = await notesRepository.findAllNotes();

    if (success == false) {
        return res.status(404).send({message: 'Notas não encontradas.'});
    }

    return res.status(201).send({success});
};

// Busca nota por ID.
exports.getNoteById = async (req, res) => {

    const id = req.params.id;
    const success = await notesRepository.findNotesById(id);

    if (success == false) {
        return res.status(404).send({message: 'Nota não encontrada.'});
    }

    return res.status(201).send({success});
};

// Busca nota pelo titulo.
exports.getNoteByTitle = async (req, res) => {

    const title = req.params.title;
    const success = await notesRepository.findNotesByTitle(title);

    if (success == false) {
        return res.status(404).send({message: 'Nota não encontrada.'});
    }

    return res.status(201).send({success});
};

// Atualiza nota.
exports.putNote = async (req, res) => {

    const id = req.params.id;
    const data = req.body;
    const success = await notesRepository.updateNote(id, data);

    if (success == false) {
        return res.status(404).send({message: 'Não foi possível atualizar a nota.'});
    }

    return res.status(201).send({message: 'Nota atualizada com sucesso.'});
};

// Deleta nota.
exports.deleteNote = async (req, res) => {

    const id = req.params.id;
    const success = await notesRepository.removeNote(id);

    if (success == false) {
        return res.status(404).send({message: 'Nota não encontrada.'});
    }

    return res.status(201).send({message: 'Nota deletada com sucesso.'});
};

