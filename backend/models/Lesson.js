const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
	level: {
		type: String,
		required: [true, "Level is required"]
	},
	vform: {
		type: String,
		required: false
	},
	phrases: {
		type: String,
		required: false
	},
	meaning: {
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
});
module.exports = mongoose.model("Lessons", lessonSchema)
