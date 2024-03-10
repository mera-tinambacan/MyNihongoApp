const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: [true, "Meaning is required"]
    },
    example: {
        type: String,
        required: false
    },
    translation: {
        type: String,
        required: false
    },
    remark: {
        type: String,
        required: false
    },
});
module.exports = mongoose.model("Notes", noteSchema)
