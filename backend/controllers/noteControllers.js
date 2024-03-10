const Note = require('../models/Note');

// --- Retrieve all lessons  ---//
module.exports.getAllNotes = (request, response) => {
    return Note.find({})
        .then(result => {
            response.send(result);
        }).catch(err => {
            response.send(err);
        });
}

// --- Search a lesson --- //
module.exports.searchNotes = async (request, response) => {
    try {
        const result = await Note.find({
            "$or": [
                { note: { $regex: request.params.key, $options: "i" } },
                { example: { $regex: request.params.key, $options: "i" } },
                { translation: { $regex: request.params.key, $options: "i" } },
                { remark: { $regex: request.params.key, $options: "i" } }
            ]
        });
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

// --- Create Products ---//
module.exports.addNotes = (request, response) => {
    let newNote = new Note({
        note: request.body.note,
        example: request.body.example,
        translation: request.body.translation,
        remark: request.body.remark
    })
    newNote.save().then(result => {
        console.log(result);
        response.send("New note added!");
    }).catch(error => {
        console.log(error);
        response.send(false);
    })
}
