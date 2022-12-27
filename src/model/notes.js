'use strict';

const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({

    id:{type:String, require: true},
    title:{type:String, require: true},
    note:{type:String, require: true}
});

const Note = mongoose.model('notes', notesSchema);

module.exports = Note;