const Lesson = require("../models/Lesson");

// --- Retrieve all lessons  ---//
module.exports.getAllLessons = (request, response) => {
    return Lesson.find({})
        .then(result => {
            response.send(result);
        }).catch(err => {
            response.send(err);
        });
}

