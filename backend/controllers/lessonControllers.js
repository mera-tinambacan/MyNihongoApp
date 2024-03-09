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

// --- Search a lesson --- //
module.exports.searchLessons = (request, response) => {
    const searchTerm = request.body.search;

    Lesson.find({ phrases: { $regex: searchTerm, $options: 'i' } })
        .then(result => {
            response.send(result);
        }).catch(err => {
            response.send(err);
        });
}