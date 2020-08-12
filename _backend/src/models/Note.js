const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NOTE_TYPES = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const NoteSchema = new Schema({
  type: {
    type: String,
    enum: NOTE_TYPES,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

mongoose.model('notes', NoteSchema);