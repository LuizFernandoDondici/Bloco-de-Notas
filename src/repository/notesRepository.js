'use strict';

const Note = require('../model/notes.js');

// Cria nota.
exports.createNote = async (data) => {

    const newNote = new Note({
        title: data.title,
        note: data.note
    });

    try {

        await newNote.save();
        return true;

    } catch (error) {

        return false;
    }
};

// Busca todas as notas.
exports.findAllNotes = async () => {

    try {

        const notes = await Note.find();
        return notes;

    } catch (error) {
        
        return false;
    }
};

// Busca nota por ID.
exports.findNotesById = async (id) => {

    try {
        
        const note = Note.findById(id);
        return note;

    } catch (error) {
        
        return false;
    }
};

// Busca nota pelo titulo.
exports.findNotesByTitle = async (title) => {

    try {

        const note = Note.find({title: title});
        return note;
        
    } catch (error) {
        
        return false;
    }
};

// Atualiza nota.
exports.updateNote = async (id, data) => {

    try {

        const newNote = Note.findByIdAndUpdate(
            id, 
            {
            title: data.title,
            note: data.note
            }
        );

        return newNote;
        
    } catch (error) {
        
        return false;
    }
};

// Deleta nota.
exports.removeNote = async (id) => {

    try {
        
        const note = Note.findByIdAndRemove(id);
        return note;
        
    } catch (error) {
        
        return false;
    }
};
