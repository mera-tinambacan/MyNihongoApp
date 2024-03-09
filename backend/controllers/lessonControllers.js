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
// Define the searchLessons function
module.exports.searchLessons = async (request, response) => {
    try {
        const result = await Lesson.find({
            "$or": [
                {phrases: { $regex: request.params.key }},
                {meaning: { $regex: request.params.key }}
            ]
        });
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};