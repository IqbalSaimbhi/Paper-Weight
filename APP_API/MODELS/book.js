const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    type: {
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    ISBN:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

mongoose.model('book', bookSchema);

