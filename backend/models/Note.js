const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: [true, "Meaning is required"]
    },
    example: {
        type: String,
        required: [true, "Example is required"]
    },
    translation: {
        type: String,
        required: [true, "Translation is required"]
    },
    remark: {
        type: String,
        required: [true, "Translation is required"]
    },
});
module.exports = mongoose.model("Notes", noteSchema)
