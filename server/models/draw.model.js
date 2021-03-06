const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drawSchema = new Schema({
    filename: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    },
    valid: {
        type: Number,
        require: true
    },
    class: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required:true
    }
}, {
        timestamps: true,
    });

const Draw = mongoose.model('Draw', drawSchema, 'kiddraw');

module.exports = Draw;