const express = require("express");
const lessonController = require("../controllers/lessonControllers")

const router = express.Router();

// Retrieve all active products route
router.get("/allLessons", lessonController.getAllLessons);

// Search lessons route
router.get("/search/:key", lessonController.searchLessons);

module.exports = router;